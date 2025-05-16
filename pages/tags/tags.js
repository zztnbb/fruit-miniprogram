const app = getApp();

// 预定义的标签列表
const predefinedTags = {
  safe: [
    "无限制",
    "孕期",
    "糖尿病",
    "高血压",
    "免疫力提升",
    "贫血",
    "便秘",
    "咳嗽",
    "感冒期",
    "运动补充",
    "夏季消暑",
    "消化促进",
    "美容养颜",
    "抗氧化",
    "补血",
    "润肺",
    "减肥",
    "低热量",
    "维生素C",
    "维生素A",
    "补水",
    "四季水果",
    "春季水果",
    "夏季水果",
    "秋季水果",
    "冬季水果",
    "热带水果"
  ],
  danger: [
    "糖尿病",
    "胃病",
    "过敏体质",
    "口腔溃疡",
    "药物相互作用",
    "内热体质",
    "空腹",
    "与海鲜同食",
    "过量食用",
    "腹泻期",
    "肠胃不适者",
    "口腔敏感者",
    "高糖",
    "酸性水果",
    "脾胃虚寒"
  ]
};

Page({
  data: {
    safeTags: [],
    dangerTags: [],
    selectedTags: []
  },

  onLoad: function() {
    this.loadAllTags();
    // 加载已保存的标签
    const savedTags = wx.getStorageSync('selectedTags') || [];
    this.setData({
      selectedTags: savedTags
    });
  },

  loadAllTags: function() {
    // 获取所有水果数据
    const fruitsData = app.globalData.fruitsData || [];
    
    // 处理安全标签
    const safeTags = predefinedTags.safe.map(tagName => {
      const tagFruits = fruitsData.filter(fruit => 
        fruit.safe_tags && fruit.safe_tags.includes(tagName)
      ).map(fruit => fruit.id);
      
      return {
        id: `safe_${tagName}`,
        name: tagName,
        type: 'safe',
        selected: this.isTagSelected(`safe_${tagName}`),
        fruits: tagFruits
      };
    });
    
    // 处理危险标签
    const dangerTags = predefinedTags.danger.map(tagName => {
      const tagFruits = fruitsData.filter(fruit => 
        fruit.danger_tags && fruit.danger_tags.includes(tagName)
      ).map(fruit => fruit.id);
      
      return {
        id: `danger_${tagName}`,
        name: tagName,
        type: 'danger',
        selected: this.isTagSelected(`danger_${tagName}`),
        fruits: tagFruits
      };
    });
    
    this.setData({
      safeTags,
      dangerTags
    });
  },

  isTagSelected: function(tagId) {
    return this.data.selectedTags.some(tag => tag.id === tagId);
  },

  toggleTag: function(e) {
    const tag = e.currentTarget.dataset.tag;
    const selectedTags = [...this.data.selectedTags];
    const index = selectedTags.findIndex(t => t.id === tag.id);
    
    if (index === -1) {
      selectedTags.push(tag);
    } else {
      selectedTags.splice(index, 1);
    }
    
    this.setData({
      selectedTags
    });
    
    // 保存选择的标签
    wx.setStorageSync('selectedTags', selectedTags);

    // 更新标签的选中状态
    this.loadAllTags();
  },

  // 移除已选标签
  removeTag: function(e) {
    const tagId = e.currentTarget.dataset.tagId;
    const selectedTags = this.data.selectedTags.filter(tag => tag.id !== tagId);
    
    // 更新已选标签
    this.setData({
      selectedTags
    });
    
    // 保存到本地存储
    wx.setStorageSync('selectedTags', selectedTags);

    // 更新标签的选中状态
    this.loadAllTags();
  },

  // 提交选择
  onSubmit: function() {
    // 保存选择的标签
    const selectedTags = this.data.selectedTags;
    wx.setStorageSync('selectedTags', selectedTags);
    
    // 更新全局数据
    app.globalData.selectedTags = selectedTags;
    
    // 返回首页并刷新数据
    wx.switchTab({
      url: '/pages/index/index',
      success: () => {
        // 获取首页页面实例并刷新数据
        const pages = getCurrentPages();
        const indexPage = pages.find(page => page.route === 'pages/index/index');
        if (indexPage) {
          indexPage.setData({
            selectedTags: selectedTags
          }, () => {
            indexPage.updateRecommendations();
          });
        }
      }
    });
  }
}); 