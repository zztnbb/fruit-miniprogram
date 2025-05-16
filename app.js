App({
  globalData: {
    userProfile: {
      age: null,
      gender: null,
      healthConditions: [],
      preferences: [],
      isProfileComplete: false
    },
    fruitTags: {
      'metabolic_health': {
        id: 'metabolic_health',
        name: '代谢健康',
        function: '维持正常代谢功能，预防代谢性疾病',
        scientific_basis: '根据WHO标准，维持正常代谢需要均衡的营养摄入',
        data_standard: 'GI值<55',
        fruits: ['apple', 'orange', 'grape', 'watermelon', 'banana']
      },
      'cardiovascular_health': {
        id: 'cardiovascular_health',
        name: '心血管健康',
        function: '维护心血管系统健康，预防心血管疾病',
        scientific_basis: '《中国高血压防治指南》建议通过饮食调节血压',
        data_standard: '钾>300mg/100g',
        fruits: ['banana', 'grape', 'watermelon', 'orange', 'apple']
      },
      'immune_support': {
        id: 'immune_support',
        name: '免疫支持',
        function: '增强免疫系统功能，提高抵抗力',
        scientific_basis: 'NIH建议每日摄入足够的维生素C增强免疫',
        data_standard: '维生素C>50mg/100g',
        fruits: ['orange', 'grape', 'apple', 'watermelon', 'banana']
      },
      'diabetes_friendly': {
        id: 'diabetes_friendly',
        name: '糖尿病友好',
        function: '维持血糖稳定，适合糖尿病患者食用',
        scientific_basis: '《营养学杂志》2021年研究表明低GI食物有助于血糖控制',
        data_standard: 'GI值<55',
        fruits: ['apple', 'orange', 'watermelon', 'grape']
      },
      'blood_pressure': {
        id: 'blood_pressure',
        name: '降血压',
        function: '通过调节钠钾平衡降低血压',
        scientific_basis: 'WHO建议每日摄入≥4.7g钾可降低血压',
        data_standard: '钾>300mg/100g',
        fruits: ['banana', 'watermelon', 'orange', 'apple']
      },
      'immune_boost': {
        id: 'immune_boost',
        name: '增强免疫',
        function: '增强免疫系统功能，提高抗病能力',
        scientific_basis: '维生素C促进白细胞活性，增强免疫屏障',
        data_standard: '维生素C>50mg/100g',
        fruits: ['orange', 'grape', 'apple', 'watermelon']
      },
      'high_fiber': {
        id: 'high_fiber',
        name: '高膳食纤维',
        function: '促进肠道蠕动，预防便秘',
        scientific_basis: '中国膳食指南建议每日摄入25-30g膳食纤维',
        data_standard: '纤维>3g/100g',
        fruits: ['apple', 'banana', 'orange', 'grape']
      },
      'high_potassium': {
        id: 'high_potassium',
        name: '高钾',
        function: '调节血压，维持电解质平衡',
        scientific_basis: '钾离子促进钠排出，降低血压',
        data_standard: '钾>300mg/100g',
        fruits: ['banana', 'watermelon', 'orange', 'apple']
      },
      'high_vitamin_c': {
        id: 'high_vitamin_c',
        name: '高维C',
        function: '增强免疫，抗氧化',
        scientific_basis: '维生素C促进白细胞活性，增强免疫屏障',
        data_standard: '维生素C>50mg/100g',
        fruits: ['orange', 'grape', 'watermelon', 'apple']
      },
      'sugar_fat_control': {
        id: 'sugar_fat_control',
        name: '控糖减脂',
        function: '维持血糖稳定，促进脂肪代谢',
        scientific_basis: 'WHO标准定义的低升糖食物，铬元素增强胰岛素敏感性',
        data_standard: '低GI值（＜55），含铬元素',
        fruits: ['grapefruit', 'blueberry', 'cherry', 'apple', 'orange']
      },
      'antiviral': {
        id: 'antiviral',
        name: '抗病毒',
        function: '增强免疫屏障，抑制病毒复制',
        scientific_basis: 'NIH建议维生素C促进白细胞活性，槲皮素抑制病毒RNA聚合酶',
        data_standard: '维生素C＞50mg/100g，含槲皮素',
        fruits: ['rosa_roxburghii', 'acai', 'orange', 'apple', 'grape']
      },
      'liver_detox': {
        id: 'liver_detox',
        name: '护肝排毒',
        function: '促进肝细胞再生，加速毒素代谢',
        scientific_basis: '谷胱甘肽中和自由基，膳食纤维吸附肠道毒素',
        data_standard: '谷胱甘肽＞20mg/100g，富含膳食纤维',
        fruits: ['lemon', 'dragon_fruit', 'apple', 'orange', 'grape']
      },
      'pregnancy': {
        id: 'pregnancy',
        name: '孕期营养',
        function: '预防胎儿畸形，补充叶酸需求',
        scientific_basis: 'WHO建议叶酸降低神经管缺陷风险，补铁预防贫血',
        data_standard: '叶酸＞40μg/100g，铁＞2mg/100g',
        fruits: ['loquat', 'coconut', 'jujube', 'apple', 'orange', 'banana']
      },
      'chemo_support': {
        id: 'chemo_support',
        name: '化疗辅助',
        function: '缓解副作用，提升白细胞水平',
        scientific_basis: '低嘌呤减轻肾脏负担，抗氧化剂减少化疗自由基损伤',
        data_standard: '低嘌呤（＜50mg/100g），富含抗氧化剂',
        fruits: ['grape', 'peeled_apple', 'orange', 'watermelon']
      },
      'high_anthocyanin': {
        id: 'high_anthocyanin',
        name: '高花青素',
        function: '抗氧化，保护视力',
        scientific_basis: 'USDA标准，抑制视网膜氧化损伤',
        data_standard: '花青素＞50mg/100g',
        fruits: ['purple_grape', 'black_goji', 'grape', 'apple', 'banana']
      }
    },
    selectedTags: [],
    fruitsData: [],
    userHealthTag: 'none',
    currentLocation: {
      city: '广州',
      province: '广东'
    }
  },

  onLaunch: function() {
    // 加载用户档案
    const userProfile = wx.getStorageSync('userProfile');
    if (userProfile) {
      this.globalData.userProfile = userProfile;
    }
    
    // 初始化水果数据
    const fs = require('./data/fruits_data.js');
    this.globalData.fruitsData = fs.fruitsData.fruits;
    console.log('已加载水果数据:', this.globalData.fruitsData.length, '个');
    
    // 获取位置信息
    this.getLocationInfo();
  },

  loadFruitsData: function() {
    try {
      // 尝试从本地存储加载
      const cachedFruits = wx.getStorageSync('fruitsData');
      if (cachedFruits && cachedFruits.length > 0) {
        this.globalData.fruitsData = cachedFruits;
        console.log('从缓存加载水果数据成功:', cachedFruits.length, '个水果');
        this.processFruitTags(cachedFruits);
        return;
      }
    } catch (e) {
      console.error('读取本地缓存水果数据失败:', e);
    }

    // 从本地数据文件加载
    try {
      const fruitsModule = require('./data/fruits_data.js');
      if (fruitsModule && fruitsModule.fruitsData && fruitsModule.fruitsData.fruits) {
        const fruits = fruitsModule.fruitsData.fruits;
        this.globalData.fruitsData = fruits;
        console.log('从本地模块加载水果数据成功:', fruits.length, '个水果');
        
        // 处理全局标签数据
        this.processFruitTags(fruits);
        
        // 保存到本地存储以便后续使用
        try {
          wx.setStorageSync('fruitsData', fruits);
        } catch (e) {
          console.error('保存水果数据到本地存储失败:', e);
        }
        return;
      }
    } catch (e) {
      console.error('加载本地模块水果数据失败:', e);
    }

    // 如果以上方法都失败，使用内置默认数据
    this.useDefaultFruitsData();
  },
  
  // 处理水果标签数据
  processFruitTags: function(fruits) {
    // 预处理安全标签和危险标签，使其全局可用
    const safeTagsSet = new Set();
    const dangerTagsSet = new Set();
    
    // 遍历所有水果，收集标签
    fruits.forEach(fruit => {
      if (fruit.safe_tags && Array.isArray(fruit.safe_tags)) {
        fruit.safe_tags.forEach(tag => safeTagsSet.add(tag));
      }
      if (fruit.danger_tags && Array.isArray(fruit.danger_tags)) {
        fruit.danger_tags.forEach(tag => dangerTagsSet.add(tag));
      }
    });
    
    // 将收集到的标签存储到全局数据中
    this.globalData.allSafeTags = Array.from(safeTagsSet);
    this.globalData.allDangerTags = Array.from(dangerTagsSet);
    
    console.log('全局安全标签:', this.globalData.allSafeTags);
    console.log('全局危险标签:', this.globalData.allDangerTags);
  },
  
  useDefaultFruitsData: function() {
    // 使用代码中内置的默认水果数据
    const defaultFruits = [
      {
        id: 'apple',
        name: '苹果',
        image: '/images/apple.png',
        price: { current: 12.8, unit: '元/斤' },
        nutrition: [
          { name: '膳食纤维', percentage: '15', value: '每100克含2.3克膳食纤维' },
          { name: '维生素C', percentage: '12', value: '每100克含5mg维生素C' }
        ],
        best_season: [9, 10, 11],
        contraindications: [
          { icon: '⚠️', condition: '胃酸过多', reason: '苹果中含有机酸可能刺激胃酸分泌' }
        ],
        safe_tags: ['diabetes_friendly', 'high_fiber']
      },
      {
        id: 'banana',
        name: '香蕉',
        image: '/images/banana.png',
        price: { current: 6.5, unit: '元/斤' },
        nutrition: [
          { name: '钾', percentage: '22', value: '每100克含360mg钾元素' },
          { name: '膳食纤维', percentage: '12', value: '每100克含2.0克膳食纤维' }
        ],
        best_season: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        contraindications: [
          { icon: '⚠️', condition: '糖尿病', reason: '香蕉含糖量较高，糖尿病患者需控制摄入量' }
        ],
        safe_tags: ['high_potassium', 'high_fiber']
      },
      {
        id: 'orange',
        name: '橙子',
        image: '/images/orange.png',
        price: { current: 8.5, unit: '元/斤' },
        nutrition: [
          { name: '维生素C', percentage: '70', value: '每100克含53mg维生素C' },
          { name: '叶酸', percentage: '10', value: '每100克含30μg叶酸' }
        ],
        best_season: [11, 12, 1, 2],
        contraindications: [
          { icon: '⚠️', condition: '胃酸过多', reason: '柑橘类水果酸性较强，可能刺激胃黏膜' }
        ],
        safe_tags: ['high_vitamin_c', 'immune_support']
      },
      {
        id: 'grape',
        name: '葡萄',
        image: '/images/grape.png',
        price: { current: 15.8, unit: '元/斤' },
        nutrition: [
          { name: '多酚类', percentage: '60', value: '每100克含丰富的多酚类化合物' },
          { name: '维生素K', percentage: '18', value: '每100克含14.6μg维生素K' }
        ],
        best_season: [8, 9, 10],
        contraindications: [
          { icon: '⚠️', condition: '糖尿病', reason: '葡萄含糖量高，糖尿病患者需控制摄入量' }
        ],
        safe_tags: ['high_anthocyanin', 'immune_support']
      },
      {
        id: 'watermelon',
        name: '西瓜',
        image: '/images/watermelon.png',
        price: { current: 4.5, unit: '元/斤' },
        nutrition: [
          { name: '水分', percentage: '92', value: '每100克含92%水分，利于补充水分' },
          { name: '番茄红素', percentage: '30', value: '含有抗氧化剂番茄红素' }
        ],
        best_season: [6, 7, 8],
        contraindications: [
          { icon: '⚠️', condition: '糖尿病', reason: '西瓜含糖量相对较高，糖尿病患者需控制摄入量' }
        ],
        safe_tags: ['high_potassium']
      }
    ];
    
    this.globalData.fruitsData = defaultFruits;
    console.log('使用默认水果数据:', defaultFruits.length, '个水果');
    
    // 处理全局标签数据
    this.processFruitTags(defaultFruits);
    
    // 保存到本地存储以便后续使用
    try {
      wx.setStorageSync('fruitsData', defaultFruits);
    } catch (e) {
      console.error('保存默认水果数据失败:', e);
    }
  },

  getLocationInfo: function() {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        this.updateLocationInfo(res.latitude, res.longitude);
      },
      fail: (err) => {
        console.log('获取位置失败：', err);
        this.useDefaultLocation();
      }
    });
  },

  useDefaultLocation: function() {
    // 使用默认位置信息
    this.globalData.currentLocation = {
      city: '广州',
      province: '广东'
    };
  },

  updateLocationInfo: function(latitude, longitude) {
    // 使用默认位置，因为微信小程序暂不支持直接的地理编码
    this.globalData.currentLocation = {
      city: '广州',
      province: '广东'
    };
    
    // 存储经纬度信息
    this.globalData.currentLocation.latitude = latitude;
    this.globalData.currentLocation.longitude = longitude;
  },

  generateNutritionData: function(fruit) {
    if (Array.isArray(fruit.nutrition)) {
      return fruit.nutrition.map(item => ({
        name: item.name,
        percentage: parseInt(item.percentage) || 0,
        description: item.value
      }));
    }
    
    if (fruit.nutrition && typeof fruit.nutrition === 'object') {
      return Object.entries(fruit.nutrition).map(([key, value]) => ({
        name: value.name,
        percentage: parseInt(value.percentage) || 0,
        description: `${value.serving_size} ≈ 每日所需${value.percentage}%，${value.description}`
      }));
    }
    return [];
  }
}) 