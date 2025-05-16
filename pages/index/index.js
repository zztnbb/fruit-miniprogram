const app = getApp()

// 水果名称到英文的映射
const fruitNameToEnglish = {
  '苹果': 'apple',
  '香蕉': 'banana',
  '橙子': 'orange',
  '葡萄': 'grape',
  '西瓜': 'watermelon',
  '蓝莓': 'blueberry',
  '草莓': 'strawberry',
  '石榴': 'pomegranate',
  '火龙果': 'dragonfruit',
  '猕猴桃': 'kiwi',
  '柠檬': 'lemon',
  '木瓜': 'papaya',
  '榴莲': 'durian',
  '枣': 'jujube',
  '樱桃': 'cherry',
  '无花果': 'fig',
  '奇异果': 'kiwi',
  '西柚': 'grapefruit',
  '胡萝卜': 'carrot'
};

Page({
  data: {
    userProfile: null,
    healthPriorityFruits: [],
    pricePriorityFruits: [],
    noveltyFruits: [],
    loading: true,
    recommendedFruits: [],
    selectedTags: [],
    fruitTags: {},
    fruitNameToEnglish: fruitNameToEnglish,
    searchKeyword: '',
    searchResults: []
  },

  onLoad: function() {
    // 获取全局数据
    const globalData = app.globalData;
    this.setData({
      fruitTags: globalData.fruitTags || {}
    });
    
    this.loadSelectedTags();
  },

  onShow: function() {
    console.log('Index page onShow called'); // 添加日志
    this.loadSelectedTags();
  },

  onPullDownRefresh: function() {
    this.generateRecommendations();
    wx.stopPullDownRefresh();
  },

  generateRecommendations: function() {
    const fruits = app.globalData.fruitsData;
    const profile = this.data.userProfile;
    const currentMonth = new Date().getMonth() + 1;

    // 健康优先推荐
    let healthPriorityFruits = this.getHealthPriorityFruits(fruits, profile);

    // 价格优先推荐
    let pricePriorityFruits = this.getPricePriorityFruits(fruits, currentMonth);

    // 猎奇推荐
    let noveltyFruits = this.getNoveltyFruits();

    this.setData({
      healthPriorityFruits,
      pricePriorityFruits,
      noveltyFruits,
      loading: false
    });
  },

  getHealthPriorityFruits: function(fruits, profile) {
    let healthFruits = [...fruits];
    
    // 根据健康状况筛选
    if (profile.healthConditions.length > 0) {
      healthFruits = healthFruits.filter(fruit => {
        // 检查是否适合所有健康状况
        return profile.healthConditions.every(condition => {
          // 如果在安全标签中，直接返回true
          if (fruit.safe_tags && fruit.safe_tags.includes(condition)) {
            return true;
          }
          // 如果在警告中，返回false
          if (fruit.warnings && fruit.warnings[condition]) {
            return false;
          }
          // 如果在禁忌中，返回false
          if (fruit.contraindications && fruit.contraindications.some(c => 
            c.condition.toLowerCase().includes(condition)
          )) {
            return false;
          }
          return true;
        });
      });
    }

    // 根据营养价值排序
    healthFruits.sort((a, b) => {
      const aScore = this.calculateNutritionScore(a, profile);
      const bScore = this.calculateNutritionScore(b, profile);
      return bScore - aScore;
    });

    return healthFruits.slice(0, 3);
  },

  calculateNutritionScore: function(fruit, profile) {
    let score = 0;
    
    // 计算营养得分
    if (fruit.nutrition) {
      // 基础营养得分
      if (fruit.nutrition.gi) {
        score += (100 - fruit.nutrition.gi) * 0.3; // 低GI更好
      }
      if (fruit.nutrition.fiber) {
        score += fruit.nutrition.fiber * 10; // 纤维含量越高越好
      }

      // 根据健康状况加权
      profile.healthConditions.forEach(condition => {
        switch(condition) {
          case 'diabetes':
            score += (100 - (fruit.nutrition.gi || 0)) * 0.5;
            break;
          case 'hypertension':
            score += (fruit.nutrition.minerals?.potassium?.value || 0) * 0.3;
            break;
          case 'anemia':
            score += (fruit.nutrition.minerals?.iron?.value || 0) * 0.5;
            break;
          case 'pregnancy':
            score += (fruit.nutrition.vitamins?.C?.value || 0) * 0.3;
            score += (fruit.nutrition.vitamins?.folicAcid?.value || 0) * 0.5;
            break;
        }
      });
    }

    return score;
  },

  getPricePriorityFruits: function(fruits, currentMonth) {
    // 筛选当季水果
    let seasonalFruits = fruits.filter(fruit => 
      fruit.season?.available?.includes(currentMonth)
    );

    // 按价格排序
    seasonalFruits.sort((a, b) => {
      const aPrice = a.price?.current || Infinity;
      const bPrice = b.price?.current || Infinity;
      return aPrice - bPrice;
    });

    return seasonalFruits.slice(0, 3);
  },

  getNoveltyFruits: function() {
    const app = getApp();
    const fruits = app.globalData.fruitsData || [];
    const currentMonth = new Date().getMonth() + 1;

    return fruits.filter(fruit => {
      // 确保season和best_season存在
      const bestSeasons = fruit.season?.best || fruit.best_season || [];
      // 检查当前月份是否在最佳季节的前后一个月内
      return bestSeasons.some(month => {
        const monthDiff = Math.abs(month - currentMonth);
        return monthDiff <= 1 || monthDiff >= 11; // 处理跨年的情况
      });
    });
  },

  onFruitTap: function(e) {
    const fruitId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${fruitId}`
    });
  },

  updateRecommendations: function() {
    const selectedTags = this.data.selectedTags;
    const fruits = app.globalData.fruitsData || [];
    
    if (!selectedTags || selectedTags.length === 0) {
      this.setData({ recommendedFruits: [] });
      return;
    }

    // 分类标签
    const safeTags = selectedTags.filter(tag => tag.type !== 'danger').map(tag => tag.name);
    const dangerTags = selectedTags.filter(tag => tag.type === 'danger').map(tag => tag.name);

    // 过滤水果
    let filteredFruits = fruits.filter(fruit => {
      // 如果水果有危险标签，且与用户选择的危险标签有交集，则排除
      if (fruit.danger_tags && dangerTags.some(tag => fruit.danger_tags.includes(tag))) {
        return false;
      }
      
      // 如果用户选择了安全标签，水果必须至少匹配一个安全标签
      if (safeTags.length > 0) {
        return fruit.safe_tags && safeTags.some(tag => fruit.safe_tags.includes(tag));
      }
      
      return true;
    });

    // 为每个水果计算匹配分数
    const scoredFruits = filteredFruits.map(fruit => {
      let score = 0;
      let matchedTags = [];

      // 计算安全标签匹配度
      if (fruit.safe_tags) {
        safeTags.forEach(tag => {
          if (fruit.safe_tags.includes(tag)) {
            score += 2;
            matchedTags.push(tag);
          }
        });
      }

      // 当季加分
      const currentMonth = new Date().getMonth() + 1;
      if (fruit.season && fruit.season.includes(currentMonth)) {
        score += 1;
        matchedTags.push('当季水果');
      }

      // 营养价值加分
      if (fruit.nutrition) {
        fruit.nutrition.forEach(n => {
          if (n.percentage >= 70) score += 0.5;
        });
      }

      return {
        ...fruit,
        matchScore: score,
        matchedTags: matchedTags
      };
    });

    // 按匹配分数排序
    scoredFruits.sort((a, b) => b.matchScore - a.matchScore);

    // 取前10个最匹配的水果
    const recommendedFruits = scoredFruits.slice(0, 10).map(fruit => ({
      ...fruit,
      nutrition_tags: [
        ...fruit.matchedTags,
        ...(fruit.nutrition ? fruit.nutrition.map(n => `${n.name}含量${n.percentage}%`) : [])
      ].slice(0, 3) // 最多显示3个标签
    }));

    this.setData({ 
      recommendedFruits,
      loading: false
    });

    // 输出调试信息
    console.log('Selected tags:', selectedTags);
    console.log('Safe tags:', safeTags);
    console.log('Danger tags:', dangerTags);
    console.log('Filtered fruits:', filteredFruits.length);
    console.log('Recommended fruits:', recommendedFruits);
  },

  goToTags: function() {
    wx.switchTab({
      url: '/pages/tags/tags'
    });
  },

  goToDetail: function(e) {
    const fruit = e.currentTarget.dataset.fruit;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${fruit.id}`
    });
  },

  loadSelectedTags: function() {
    const savedTags = wx.getStorageSync('selectedTags') || [];
    this.setData({
      selectedTags: savedTags
    });
    this.updateRecommendations();
  },

  onSearchInput: function(e) {
    const keyword = e.detail.value.trim();
    this.setData({ searchKeyword: keyword });
    
    if (!keyword) {
      this.setData({ searchResults: [] });
      return;
    }

    const fruits = app.globalData.fruitsData || [];
    const results = fruits.filter(fruit => {
      // 搜索水果名称
      if (fruit.name.includes(keyword)) return true;
      
      // 搜索英文名称
      if (fruit.english_name && fruit.english_name.toLowerCase().includes(keyword.toLowerCase())) return true;
      
      // 搜索别名
      if (fruit.aliases && fruit.aliases.some(alias => alias.includes(keyword))) return true;
      
      // 搜索营养标签
      if (fruit.nutrition_tags && fruit.nutrition_tags.some(tag => tag.includes(keyword))) return true;
      
      return false;
    });

    this.setData({ searchResults: results });
  }
}) 