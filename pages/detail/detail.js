const app = getApp()

Page({
  data: {
    fruitData: null,
    isHealthy: true,
    healthAlert: '',
    months: [],
    nutritionData: [],
    contraindicationData: []
  },

  onLoad: function(options) {
    const fruitId = options.id;
    const fruitsData = app.globalData.fruitsData;
    const fruit = fruitsData.find(f => f.id === fruitId);
    
    if (!fruit) {
      wx.showToast({
        title: '未找到水果信息',
        icon: 'error'
      });
      return;
    }

    // 检查健康标签匹配
    const userHealthTag = app.globalData.userHealthTag;
    const isHealthy = fruit.safe_tags?.includes(userHealthTag);
    const healthAlert = this.generateHealthAlert(fruit, userHealthTag);

    // 生成月份数据
    const months = this.generateMonths(fruit.best_season || []);

    // 生成营养数据
    const nutritionData = this.generateNutritionData(fruit);

    // 生成禁忌数据
    const contraindicationData = this.generateContraindicationData(fruit.contraindications || []);

    this.setData({
      fruitData: fruit,
      isHealthy: isHealthy || false,
      healthAlert,
      months,
      nutritionData,
      contraindicationData
    });
  },

  generateHealthAlert: function(fruit, userHealthTag) {
    if (!userHealthTag || userHealthTag === 'none') {
      return '此水果适合大众食用';
    }

    const healthTags = {
      diabetes: '血糖指数',
      diet: '热量',
      pregnancy: '孕期营养',
      cold: '维生素C含量',
      hypertension: '钾含量',
      heart: '心脏负担',
      digestion: '纤维素含量',
      immunity: '抗氧化物质'
    };

    const healthTagName = healthTags[userHealthTag] || '健康状况';

    // 检查是否在安全标签中
    if (fruit.safe_tags && Array.isArray(fruit.safe_tags) && fruit.safe_tags.includes(userHealthTag)) {
      return `适合${healthTagName}控制，可以放心食用`;
    }

    // 检查是否有警告信息
    if (fruit.warnings && typeof fruit.warnings === 'object') {
      const warningMessage = fruit.warnings[userHealthTag];
      if (warningMessage) {
        return `不建议食用：${warningMessage}`;
      }
    }

    // 检查是否有禁忌信息
    if (fruit.contraindications && Array.isArray(fruit.contraindications)) {
      const contraindication = fruit.contraindications.find(item => 
        item.condition && item.condition.toLowerCase().includes(userHealthTag)
      );
      if (contraindication) {
        return `不建议食用：${contraindication.reason}`;
      }
    }

    return `暂无${healthTagName}相关数据`;
  },

  generateMonths: function(bestSeason) {
    return Array.from({length: 12}, (_, i) => ({
      name: `${i + 1}月`,
      isBest: bestSeason.includes(i + 1)
    }));
  },

  generateNutritionData: function(fruit) {
    // 定义营养元素的作用说明
    const nutritionFunctions = {
      '膳食纤维': '促进肠道蠕动，预防便秘，有助于控制血糖和血脂',
      '维生素C': '增强免疫力，促进胶原蛋白合成，抗氧化',
      '钾': '调节血压，维持电解质平衡，促进肌肉和神经功能',
      '叶酸': '预防胎儿神经管缺陷，促进红细胞生成',
      '铁': '预防贫血，促进血红蛋白合成',
      '钙': '维持骨骼健康，促进肌肉收缩和神经传导',
      '胡萝卜素': '保护视力，抗氧化，增强免疫力',
      '花青素': '抗氧化，保护心血管健康，抗炎，保护视力，改善认知功能',
      '茄红素': '抗氧化，保护前列腺健康，预防心血管疾病，增强免疫力',
      '水分': '维持体液平衡，促进新陈代谢，调节体温，帮助排毒',
      '铜': '促进铁吸收，参与能量代谢，维持神经系统健康',
      '镁': '维持神经肌肉功能，促进骨骼健康，调节血糖水平，改善睡眠质量，缓解压力和焦虑，参与300多种酶反应',
      '锰': '参与骨骼发育，抗氧化，促进新陈代谢，维持神经系统健康，参与胶原蛋白合成，促进伤口愈合，维持生殖系统健康',
      '多酚': '抗氧化，抗炎，保护心血管健康，延缓衰老，调节肠道菌群，改善认知功能，预防某些慢性疾病',
      '菠萝蛋白酶': '促进蛋白质消化吸收，抗炎消肿，改善血液循环，缓解关节炎症状，加速运动后恢复，增强免疫系统功能'
    };

    // 处理新版数据格式
    if (Array.isArray(fruit.nutrition)) {
      return fruit.nutrition.map(item => ({
        name: item.name,
        percentage: parseInt(item.percentage) || 0,
        description: `${item.value}，${nutritionFunctions[item.name] || '暂无具体作用说明'}`
      }));
    }
    
    // 处理旧版数据格式
    if (fruit.nutrition && typeof fruit.nutrition === 'object') {
      return Object.entries(fruit.nutrition).map(([key, value]) => ({
        name: value.name,
        percentage: parseInt(value.percentage) || 0,
        description: `${value.serving_size} ≈ 每日所需${value.percentage}%，${value.description}，${nutritionFunctions[value.name] || '暂无具体作用说明'}`
      }));
    }

    return [];
  },

  generateContraindicationData: function(contraindications) {
    // 处理字符串格式的禁忌说明
    if (typeof contraindications === 'string') {
      return [{
        icon: '⚠️',
        title: '注意事项',
        description: contraindications
      }];
    }

    // 处理数组格式的禁忌说明
    if (Array.isArray(contraindications)) {
      return contraindications.map(item => ({
        icon: item?.icon || '⚠️',
        title: item?.condition || '注意事项',
        description: item?.reason || '暂无具体说明'
      }));
    }

    return [{
      icon: '⚠️',
      title: '暂无禁忌说明',
      description: '目前没有相关禁忌信息'
    }];
  },
  
  // 显示过敏信息
  checkAllergy: function() {
    const fruit = this.data.fruitData;
    if (!fruit || !fruit.allergens || fruit.allergens.length === 0) {
      wx.showModal({
        title: '过敏信息',
        content: '该水果无已知常见过敏原',
        showCancel: false
      });
      return;
    }
    
    wx.showModal({
      title: '过敏信息',
      content: `该水果含有以下可能引起过敏的成分：${fruit.allergens.join('、')}`,
      showCancel: false
    });
  }
}) 