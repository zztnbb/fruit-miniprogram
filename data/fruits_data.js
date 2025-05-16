const fruitsData = {
  "fruits": [
    {
      "id": "mango",
      "name": "芒果",
      "image": "/images/芒果.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "夏季消暑", "美容养颜", "维生素C", "热带水果"],
      "danger_tags": ["糖尿病", "过敏体质", "高糖"],
      "season": "5-7月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 80,
          "value": "100g含维生素C 36.4mg",
          "benefits": "增强免疫力，促进胶原蛋白合成，抗氧化"
        },
        {
          "name": "膳食纤维",
          "percentage": 60,
          "value": "100g含膳食纤维 1.6g",
          "benefits": "促进肠道蠕动，预防便秘，控制血糖"
        },
        {
          "name": "维生素A",
          "percentage": 70,
          "value": "100g含维生素A 1342IU",
          "benefits": "保护视力，维持皮肤健康，增强免疫功能，促进生长发育，维持黏膜组织健康"
        },
        {
          "name": "叶酸",
          "percentage": 50,
          "value": "100g含叶酸 43μg",
          "benefits": "预防贫血，促进胎儿神经管发育"
        }
      ],
      "contraindications": "糖尿病患者慎食，芒果含糖量较高，可能导致血糖升高。",
      "selection_tips": "1. 看颜色：成熟芒果呈金黄色\n2. 闻气味：有浓郁芒果香\n3. 摸软硬：轻轻按压有弹性",
      "storage_tips": "1. 未成熟芒果室温放置\n2. 成熟后冷藏保存\n3. 避免与其他水果混放",
      "allergens": ["漆酚"],
      "beginner_friendly": true,
      "consumption_advice": "每次建议食用1个中等大小（约200克），糖尿病患者建议控制在100克以内",
      "consumption_frequency": "建议每周食用3-4次，夏季可适当增加"
    },
    {
      "id": "apple",
      "name": "苹果",
      "image": "/images/苹果.png",
      "safe_tags": ["无限制", "孕期", "糖尿病", "高血压", "便秘", "免疫力提升", "减肥", "低热量", "四季水果", "抗氧化"],
      "danger_tags": [],
      "season": "9-12月",
      "nutrition": [
        {
          "name": "膳食纤维",
          "percentage": 70,
          "value": "100g含膳食纤维 2.4g",
          "benefits": "促进肠道健康，降低胆固醇，控制血糖"
        },
        {
          "name": "钾",
          "percentage": 50,
          "value": "100g含钾 107mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "维生素C",
          "percentage": 40,
          "value": "100g含维生素C 4.6mg",
          "benefits": "抗氧化，增强免疫力，促进铁吸收"
        },
        {
          "name": "槲皮素",
          "percentage": 60,
          "value": "苹果皮中含量丰富",
          "benefits": "抗过敏，抗炎，保护心血管健康"
        }
      ],
      "contraindications": "无特殊禁忌，但建议适量食用。",
      "selection_tips": "1. 看颜色：色泽均匀\n2. 闻气味：有苹果香\n3. 摸硬度：结实有弹性",
      "storage_tips": "1. 室温或冷藏保存\n2. 避免阳光直射\n3. 单独存放",
      "allergens": [],
      "beginner_friendly": true,
      "region": "山东、陕西、甘肃等",
      "varieties": ["富士", "红星", "嘎啦", "黄元帅"],
      "consumption_advice": "每次建议食用1个中等大小（约200克），糖尿病患者建议控制在150克以内",
      "consumption_frequency": "建议每天食用1次，可长期坚持"
    },
    {
      "id": "pear",
      "name": "梨",
      "image": "/images/梨.png",
      "safe_tags": ["无限制", "孕期", "糖尿病", "高血压", "咳嗽", "便秘", "润肺", "秋季水果", "低热量"],
      "danger_tags": ["脾胃虚寒"],
      "season": "8-11月",
      "nutrition": [
        {
          "name": "膳食纤维",
          "percentage": 65,
          "value": "100g含膳食纤维 2.3g",
          "benefits": "润肠通便，降低胆固醇，控制血糖"
        },
        {
          "name": "铜",
          "percentage": 35,
          "value": "100g含铜 0.15mg",
          "benefits": "促进铁吸收，维持神经系统健康"
        },
        {
          "name": "维生素K",
          "percentage": 45,
          "value": "100g含维生素K 4.5μg",
          "benefits": "促进血液凝固，维护骨骼健康，预防骨质疏松，调节钙代谢"
        },
        {
          "name": "硼",
          "percentage": 30,
          "value": "梨中含量丰富",
          "benefits": "促进钙吸收，预防骨质疏松，维持内分泌平衡，促进大脑发育"
        }
      ],
      "contraindications": "无特殊禁忌，但脾胃虚寒者不宜多食。",
      "selection_tips": "1. 看外观：皮薄光滑\n2. 闻气味：甜香味浓\n3. 摸质地：有弹性不软烂",
      "storage_tips": "1. 常温保存1-2周\n2. 冷藏可保存1个月\n3. 避免与其他水果混放",
      "allergens": [],
      "beginner_friendly": true,
      "region": "河北、新疆、山东等",
      "varieties": ["鸭梨", "库尔勒香梨", "莱阳梨", "秋月梨"],
      "consumption_advice": "每次建议食用1个中等大小（约200克），脾胃虚寒者建议控制在100克以内",
      "consumption_frequency": "建议每周食用3-4次，秋季可适当增加"
    },
    {
      "id": "peach",
      "name": "桃子",
      "image": "/images/桃子.png",
      "safe_tags": ["无限制", "孕期", "便秘", "夏季消暑", "美容养颜", "维生素C", "夏季水果"],
      "danger_tags": ["糖尿病", "高糖", "过敏体质"],
      "season": "6-9月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 40,
          "value": "100g含维生素C 8.6mg",
          "benefits": "抗氧化，增强免疫力，促进胶原蛋白合成"
        },
        {
          "name": "胡萝卜素",
          "percentage": 50,
          "value": "100g含胡萝卜素 0.3mg",
          "benefits": "保护视力，抗氧化，增强免疫功能"
        },
        {
          "name": "钾",
          "percentage": 45,
          "value": "100g含钾 190mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "铁",
          "percentage": 30,
          "value": "100g含铁 0.3mg",
          "benefits": "预防贫血，促进氧气运输"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，桃子含糖量较高。",
      "selection_tips": "1. 看颜色：颜色鲜艳\n2. 闻气味：有浓郁甜香\n3. 轻压：稍软有弹性",
      "storage_tips": "1. 熟透的桃子冷藏存放\n2. 未熟的桃子室温放置\n3. 避免碰伤和堆叠",
      "allergens": ["桃蛋白"],
      "beginner_friendly": false,
      "region": "江苏、浙江、山东、北京等",
      "varieties": ["水蜜桃", "油桃", "蟠桃", "黄桃"],
      "consumption_advice": "每次建议食用1个中等大小（约150克），糖尿病患者建议控制在100克以内",
      "consumption_frequency": "建议每周食用2-3次，夏季可适当增加"
    },
    {
      "id": "grape",
      "name": "葡萄",
      "image": "/images/葡萄.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "贫血", "抗氧化", "美容养颜", "秋季水果", "补血"],
      "danger_tags": ["糖尿病", "高糖"],
      "season": "8-10月",
      "nutrition": [
        {
          "name": "多酚",
          "percentage": 75,
          "value": "100g含多酚类物质丰富",
          "benefits": "抗氧化，抗炎，保护心血管健康"
        },
        {
          "name": "白藜芦醇",
          "percentage": 85,
          "value": "特别是红葡萄皮中含量丰富",
          "benefits": "抗氧化，抗衰老，保护心血管，改善血液循环，调节血脂"
        },
        {
          "name": "维生素K",
          "percentage": 40,
          "value": "100g含维生素K 14.6μg",
          "benefits": "促进血液凝固，维护骨骼健康"
        },
        {
          "name": "铜",
          "percentage": 35,
          "value": "100g含铜 0.13mg",
          "benefits": "促进铁吸收，维持神经系统健康"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，葡萄含糖量高。",
      "selection_tips": "1. 看颜色：粒粒饱满有光泽\n2. 看果梗：梗部新鲜绿色\n3. 整串完整无霉点",
      "storage_tips": "1. 冷藏保存1-2周\n2. 清洗前不要摘粒\n3. 避免挤压",
      "allergens": [],
      "beginner_friendly": true,
      "region": "新疆、河北、山东、云南等",
      "varieties": ["阳光玫瑰", "巨峰", "红地球", "夏黑"],
      "consumption_advice": "每次建议食用15-20颗（约100克），糖尿病患者建议控制在50克以内",
      "consumption_frequency": "建议每周食用3-4次，秋季可适当增加"
    },
    {
      "id": "orange",
      "name": "橙子",
      "image": "/images/橙子.png",
      "safe_tags": ["无限制", "孕期", "感冒期", "免疫力提升", "维生素C", "冬季水果", "抗氧化"],
      "danger_tags": ["胃病", "酸性水果"],
      "season": "11月-次年2月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 90,
          "value": "100g含维生素C 53.2mg",
          "benefits": "增强免疫力，抗氧化，促进铁吸收"
        },
        {
          "name": "叶酸",
          "percentage": 40,
          "value": "100g含叶酸 30μg",
          "benefits": "预防贫血，促进胎儿神经管发育"
        },
        {
          "name": "钾",
          "percentage": 55,
          "value": "100g含钾 181mg",
          "benefits": "调节血压，维持心脏功能"
        },
        {
          "name": "钙",
          "percentage": 30,
          "value": "100g含钙 40mg",
          "benefits": "维护骨骼和牙齿健康"
        }
      ],
      "contraindications": "胃溃疡患者慎食，橙子的酸性可能刺激胃黏膜。",
      "selection_tips": "1. 看外皮：光滑有光泽\n2. 掂重量：同大小重的更好\n3. 按硬度：有弹性不软烂",
      "storage_tips": "1. 常温可存放一周左右\n2. 冰箱冷藏可保存两周\n3. 不宜冷冻保存",
      "allergens": ["柑橘类过敏原"],
      "beginner_friendly": true,
      "region": "江西赣州、重庆奉节、四川等",
      "varieties": ["赣南脐橙", "伦晚", "纽荷尔", "血橙"],
      "consumption_advice": "每次建议食用1个中等大小（约200克），胃病患者建议控制在100克以内",
      "consumption_frequency": "建议每周食用3-4次，冬季可适当增加"
    },
    {
      "id": "pomelo",
      "name": "柚子",
      "image": "/images/柚子.png",
      "safe_tags": ["无限制", "孕期", "高血压", "糖尿病", "免疫力提升", "低热量", "秋季水果", "维生素C"],
      "danger_tags": ["药物相互作用", "酸性水果"],
      "season": "9-12月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 80,
          "value": "100g含维生素C 40.0mg",
          "benefits": "增强免疫力，抗氧化，促进铁吸收"
        },
        {
          "name": "钾",
          "percentage": 55,
          "value": "100g含钾 216mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "膳食纤维",
          "percentage": 60,
          "value": "100g含膳食纤维 1.2g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "柚皮苷",
          "percentage": 70,
          "value": "柚子皮中含量丰富",
          "benefits": "抗氧化，降血压，保护心血管，改善血液循环，抗炎消肿"
        }
      ],
      "contraindications": "服用某些药物者需注意，柚子可能干扰药物代谢。",
      "selection_tips": "1. 看外形：饱满圆润\n2. 测重量：手感沉重\n3. 闻香气：有淡淡清香",
      "storage_tips": "1. 常温保存2-3周\n2. 冷藏可保存更久\n3. 切开后冷藏并包裹保鲜膜",
      "allergens": ["柑橘类过敏原"],
      "beginner_friendly": true,
      "region": "福建、广西、四川等",
      "varieties": ["琯溪蜜柚", "沙田柚", "文旦", "红心柚"],
      "consumption_advice": "每次建议食用2-3瓣（约100-150克）",
      "consumption_frequency": "建议每周食用2-3次，秋季可适当增加"
    },
    {
      "id": "tangerine",
      "name": "橘子",
      "image": "/images/橘子.png",
      "safe_tags": ["无限制", "孕期", "感冒期", "免疫力提升", "维生素C", "冬季水果", "抗氧化"],
      "danger_tags": ["胃病", "酸性水果"],
      "season": "10月-次年1月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 85,
          "value": "100g含维生素C 42.5mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "胡萝卜素",
          "percentage": 60,
          "value": "100g含胡萝卜素丰富",
          "benefits": "保护视力，抗氧化，增强免疫功能"
        },
        {
          "name": "钾",
          "percentage": 50,
          "value": "100g含钾 177mg",
          "benefits": "调节血压，维持心脏功能"
        },
        {
          "name": "叶黄素",
          "percentage": 45,
          "value": "橘子中含量丰富",
          "benefits": "保护眼睛健康，预防黄斑变性，抗氧化，改善夜视能力，保护视网膜"
        }
      ],
      "contraindications": "胃溃疡患者慎食，橘子的酸性可能刺激胃黏膜。",
      "selection_tips": "1. 看颜色：橙红均匀\n2. 看外皮：光滑细腻\n3. 摸软硬：微软有弹性",
      "storage_tips": "1. 室温可存放1-2周\n2. 冷藏可延长保存时间\n3. 保持干燥避免发霉",
      "allergens": ["柑橘类过敏原"],
      "beginner_friendly": true,
      "region": "浙江、四川、湖南等",
      "varieties": ["蜜橘", "丑橘", "耙耙柑", "沃柑"],
      "consumption_advice": "每次建议食用1个中等大小（约200克）",
      "consumption_frequency": "建议每周食用3-4次，冬季可适当增加"
    },
    {
      "id": "kiwi",
      "name": "猕猴桃",
      "image": "/images/猕猴桃.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "糖尿病", "便秘", "维生素C", "低热量", "秋季水果", "抗氧化"],
      "danger_tags": ["口腔敏感者", "过敏体质"],
      "season": "9-12月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 95,
          "value": "100g含维生素C 62.0mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "叶酸",
          "percentage": 45,
          "value": "100g含叶酸 25μg",
          "benefits": "预防贫血，促进胎儿神经管发育"
        },
        {
          "name": "钾",
          "percentage": 60,
          "value": "100g含钾 312mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "维生素E",
          "percentage": 40,
          "value": "100g含维生素E 1.5mg",
          "benefits": "抗氧化，保护细胞膜，延缓衰老，改善血液循环，维持生殖系统健康"
        }
      ],
      "contraindications": "口腔敏感者可能感到不适，因其含有蛋白酶。",
      "selection_tips": "1. 轻压测试：稍软有弹性\n2. 颜色均匀：无明显硬块\n3. 表面无损伤",
      "storage_tips": "1. 未熟时可与苹果放置加速成熟\n2. 成熟后冷藏保存\n3. 切开后需立即食用或冷藏",
      "allergens": ["猕猴桃蛋白"],
      "beginner_friendly": true,
      "region": "陕西周至、四川蒲江、湖北宜昌等",
      "varieties": ["徐香", "海沃德", "金艳", "红心猕猴桃"],
      "consumption_advice": "每次建议食用1个中等大小（约200克）",
      "consumption_frequency": "建议每周食用3-4次，秋季可适当增加"
    },
    {
      "id": "persimmon",
      "name": "柿子",
      "image": "/images/柿子.png",
      "safe_tags": ["无限制", "便秘", "贫血", "秋季水果", "维生素A", "抗氧化"],
      "danger_tags": ["空腹", "与海鲜同食", "糖尿病", "高糖"],
      "season": "10-12月",
      "nutrition": [
        {
          "name": "维生素A",
          "percentage": 80,
          "value": "100g含维生素A 81μg",
          "benefits": "保护视力，维持皮肤健康，增强免疫功能"
        },
        {
          "name": "维生素C",
          "percentage": 60,
          "value": "100g含维生素C 30mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "钾",
          "percentage": 55,
          "value": "100g含钾 170mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "锰",
          "percentage": 45,
          "value": "100g含锰 0.35mg",
          "benefits": "参与骨骼发育，抗氧化，促进新陈代谢"
        },
        {
          "name": "膳食纤维",
          "percentage": 70,
          "value": "100g含膳食纤维 3.6g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        }
      ],
      "contraindications": "不宜空腹食用，可能与胃酸反应形成胃柿石。不宜与海鲜同食。",
      "selection_tips": "1. 看颜色：橙红均匀\n2. 摸质地：软而不烂\n3. 无明显伤痕",
      "storage_tips": "1. 未完全成熟可室温放置\n2. 成熟后冷藏保存\n3. 可冷冻保存去涩",
      "allergens": [],
      "beginner_friendly": false,
      "region": "陕西、广西、河南等",
      "varieties": ["富平柿子", "磨盘柿", "火晶柿子", "牛心柿"],
      "consumption_advice": "每次建议食用1个中等大小（约200克）",
      "consumption_frequency": "建议每周食用2-3次，秋季可适当增加"
    },
    {
      "id": "jujube",
      "name": "枣",
      "image": "/images/枣.png",
      "safe_tags": ["无限制", "孕期", "贫血", "免疫力提升", "补血", "秋季水果", "维生素C", "抗氧化"],
      "danger_tags": ["肠胃不适者", "高糖"],
      "season": "8-10月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 100,
          "value": "100g鲜枣含维生素C 243mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成，促进铁吸收"
        },
        {
          "name": "铁",
          "percentage": 60,
          "value": "100g含铁 1.2mg",
          "benefits": "预防贫血，促进血红蛋白合成，增强免疫力"
        }
      ],
      "contraindications": "肠胃不适者不宜多食，枣含粗纤维较多。",
      "selection_tips": "1. 看颜色：红润有光泽\n2. 看外形：饱满无皱纹\n3. 闻香气：有淡淡甜香",
      "storage_tips": "1. 鲜枣短期内食用\n2. 可干制保存\n3. 鲜枣冷藏可保存1-2周",
      "allergens": [],
      "beginner_friendly": true,
      "region": "新疆、山西、河北等",
      "varieties": ["灰枣", "冬枣", "金丝小枣", "蜜枣"],
      "consumption_advice": "每次建议食用1个中等大小（约200克）",
      "consumption_frequency": "建议每周食用3-4次，秋季可适当增加"
    },
    {
      "id": "lychee",
      "name": "荔枝",
      "image": "/images/荔枝.png",
      "safe_tags": ["无限制", "孕期", "夏季消暑", "维生素C", "夏季水果", "热带水果"],
      "danger_tags": ["糖尿病", "过量食用", "内热体质", "高糖"],
      "season": "5-7月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 70,
          "value": "100g含维生素C 40mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成，促进铁吸收"
        },
        {
          "name": "铜",
          "percentage": 40,
          "value": "100g含铜 0.15mg",
          "benefits": "促进铁吸收，维持神经系统健康，参与能量代谢"
        }
      ],
      "contraindications": "不宜过量食用，可能导致'荔枝病'（低血糖症状）。糖尿病患者需控制食用量。",
      "selection_tips": "1. 看颜色：红色鲜艳\n2. 看外壳：凸起明显\n3. 摸质地：有弹性",
      "storage_tips": "1. 放冰箱保鲜袋内保存\n2. 最好3天内食用完\n3. 可浸泡淡盐水保鲜",
      "allergens": [],
      "beginner_friendly": false,
      "region": "广东、广西、福建、海南等",
      "varieties": ["妃子笑", "糯米糍", "桂味", "黑叶"],
      "consumption_advice": "每次建议食用1个中等大小（约200克）",
      "consumption_frequency": "建议每周食用2-3次，夏季可适当增加"
    },
    {
      "id": "longan",
      "name": "龙眼",
      "image": "/images/龙眼.png",
      "safe_tags": ["无限制", "贫血", "孕期", "免疫力提升", "补血", "夏季水果", "热带水果"],
      "danger_tags": ["内热体质", "糖尿病", "高糖"],
      "season": "7-9月",
      "nutrition": [
        {
          "name": "铁",
          "percentage": 45,
          "value": "100g含铁 0.9mg",
          "benefits": "预防贫血，促进血红蛋白合成，增强免疫力"
        },
        {
          "name": "维生素C",
          "percentage": 50,
          "value": "100g含维生素C 28mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成，促进铁吸收"
        }
      ],
      "contraindications": "内热体质者不宜多食，可能加重内热症状。",
      "selection_tips": "1. 看颜色：壳呈黄褐色\n2. 大小均匀：果肉饱满\n3. 无霉变黑斑",
      "storage_tips": "1. 连壳冷藏保存\n2. 去壳后迅速食用\n3. 可干制保存",
      "allergens": [],
      "beginner_friendly": true,
      "region": "福建、广东、广西等",
      "varieties": ["石硖龙眼", "福眼", "圆肉", "桂圆"],
      "consumption_advice": "每次建议食用1个中等大小（约200克）",
      "consumption_frequency": "建议每周食用2-3次，夏季可适当增加"
    },
    {
      "id": "banana",
      "name": "香蕉",
      "image": "/images/香蕉.png",
      "safe_tags": ["无限制", "孕期", "运动补充", "便秘", "高血压", "四季水果", "低热量", "热带水果"],
      "danger_tags": ["糖尿病", "高糖"],
      "season": "全年",
      "nutrition": [
        {
          "name": "钾",
          "percentage": 70,
          "value": "100g含钾 358mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质，促进肌肉收缩"
        },
        {
          "name": "镁",
          "percentage": 45,
          "value": "100g含镁 27mg",
          "benefits": "维持神经肌肉功能，促进骨骼健康，调节血糖水平"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，香蕉含糖量较高。",
      "selection_tips": "1. 看颜色：黄色带褐色斑点为佳\n2. 看蒂部：新鲜香蕉蒂部不干裂\n3. 闻气味：有甜香味",
      "storage_tips": "1. 室温下存放，避免阳光直射\n2. 不宜放入冰箱冷藏\n3. 可用保鲜袋包裹减缓成熟速度",
      "allergens": ["香蕉蛋白"],
      "beginner_friendly": true,
      "region": "广东、海南、云南等",
      "varieties": ["巴西蕉", "芭蕉", "小米蕉", "粉蕉"],
      "consumption_advice": "每次建议食用1个中等大小（约200克）",
      "consumption_frequency": "建议每天食用1次，可长期坚持"
    },
    {
      "id": "watermelon",
      "name": "西瓜",
      "image": "/images/西瓜.png",
      "safe_tags": ["无限制", "夏季消暑", "孕期", "低热量", "夏季水果", "补水"],
      "danger_tags": ["糖尿病", "腹泻期", "高糖"],
      "season": "5-8月",
      "nutrition": [
        {
          "name": "水分",
          "percentage": 95,
          "value": "100g含水分 95g",
          "benefits": "维持体液平衡，促进新陈代谢，调节体温，帮助排毒"
        },
        {
          "name": "茄红素",
          "percentage": 60,
          "value": "100g含茄红素 4.5mg",
          "benefits": "抗氧化，保护前列腺健康，预防心血管疾病，增强免疫力"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，西瓜含糖量较高。腹泻期间不宜食用。",
      "selection_tips": "1. 拍声音：声音清脆说明成熟度好\n2. 看花纹：花纹清晰明亮为佳\n3. 看蒂部：蒂部干枯卷曲说明成熟",
      "storage_tips": "1. 未切开可常温保存\n2. 切开后需冷藏并保鲜膜封住切口\n3. 不宜在太阳下曝晒",
      "allergens": [],
      "beginner_friendly": true,
      "region": "宁夏中卫、河南开封、海南等",
      "varieties": ["黑美人", "麒麟", "京欣", "甜王"],
      "consumption_advice": "每次建议食用1个中等大小（约200克）",
      "consumption_frequency": "建议每周食用2-3次，夏季可适当增加"
    },
    {
      "id": "pineapple",
      "name": "菠萝",
      "image": "/images/菠萝.png",
      "safe_tags": ["无限制", "消化促进", "免疫力提升", "维生素C", "夏季水果", "热带水果"],
      "danger_tags": ["口腔溃疡", "胃病", "过敏体质", "酸性水果"],
      "season": "4-7月",
      "nutrition": [
        {
          "name": "锰",
          "percentage": 75,
          "value": "100g含锰 1.5mg",
          "benefits": "参与骨骼发育，抗氧化，促进新陈代谢，维持神经系统健康"
        },
        {
          "name": "菠萝蛋白酶",
          "percentage": 90,
          "value": "有助于蛋白质分解",
          "benefits": "促进蛋白质消化吸收，抗炎消肿，改善血液循环"
        }
      ],
      "contraindications": "口腔溃疡或胃炎患者慎食，菠萝蛋白酶可能刺激黏膜。",
      "selection_tips": "1. 闻香味：有浓郁香甜气味\n2. 看叶片：易拔出的叶片表示成熟\n3. 轻敲声音：成熟的声音较沉闷",
      "storage_tips": "1. 切块后放盐水浸泡可去除部分菠萝酶\n2. 冷藏保存3-5天\n3. 切开后需尽快食用",
      "allergens": ["菠萝蛋白酶"],
      "beginner_friendly": false,
      "region": "广东徐闻、海南、广西等",
      "varieties": ["凤梨", "金菠萝", "菠萝蜜", "开心果菠萝"],
      "consumption_advice": "每次建议食用1个中等大小（约200克）",
      "consumption_frequency": "建议每周食用2-3次，夏季可适当增加"
    },
    {
      "id": "dragonfruit",
      "name": "火龙果",
      "image": "/images/火龙果.png",
      "safe_tags": ["无限制", "糖尿病", "便秘", "免疫力提升", "孕期", "低热量", "夏季水果", "热带水果", "抗氧化"],
      "danger_tags": [],
      "season": "6-10月",
      "nutrition": [
        {
          "name": "花青素",
          "percentage": 85,
          "value": "红肉品种含花青素丰富",
          "benefits": "抗氧化，保护心血管健康，抗炎，保护视力"
        },
        {
          "name": "膳食纤维",
          "percentage": 65,
          "value": "100g含膳食纤维 1.9g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇，预防便秘"
        }
      ],
      "contraindications": "无特殊禁忌，但食用红肉火龙果可能导致尿液变红。",
      "selection_tips": "1. 看外观：鳞片有弹性不干枯\n2. 轻压果肉：稍软有弹性\n3. 看颜色：红色较艳",
      "storage_tips": "1. 室温保存3-5天\n2. 冷藏可保存一周左右\n3. 切开后需冷藏并保鲜膜封好",
      "allergens": [],
      "beginner_friendly": true,
      "region": "广西、海南、云南等",
      "varieties": ["白肉火龙果", "红肉火龙果", "黄皮火龙果", "紫肉火龙果"],
      "consumption_advice": "每次建议食用1个中等大小（约200克）",
      "consumption_frequency": "建议每周食用3-4次，夏季可适当增加"
    },
    {
      "id": "strawberry",
      "name": "草莓",
      "image": "/images/草莓.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "便秘", "维生素C", "春季水果", "抗氧化", "美容养颜"],
      "danger_tags": ["过敏体质"],
      "season": "1-4月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 90,
          "value": "100g含维生素C 58.8mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成，促进铁吸收"
        },
        {
          "name": "多酚",
          "percentage": 75,
          "value": "富含花青素等抗氧化物质",
          "benefits": "抗氧化，抗炎，保护心血管健康，延缓衰老"
        }
      ],
      "contraindications": "部分人可能对草莓过敏，出现皮疹等症状。",
      "selection_tips": "1. 看颜色：鲜红均匀\n2. 看蒂部：绿色新鲜\n3. 无霉点和软烂",
      "storage_tips": "1. 不要洗后存放\n2. 冷藏可保存2-3天\n3. 可冷冻保存但口感会变差",
      "allergens": ["草莓过敏原"],
      "beginner_friendly": true,
      "region": "辽宁丹东、江苏句容、四川双流等",
      "varieties": ["丰香", "红颜", "章姬", "甜宝"],
      "consumption_advice": "每次建议食用1个中等大小（约200克）",
      "consumption_frequency": "建议每周食用2-3次，春季可适当增加"
    },
    {
      "id": "cherry",
      "name": "车厘子",
      "image": "/images/车厘子.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "贫血", "抗氧化", "夏季水果", "美容养颜"],
      "danger_tags": ["糖尿病", "高糖"],
      "season": "5-7月",
      "nutrition": [
        {
          "name": "花青素",
          "percentage": 85,
          "value": "100g含丰富花青素",
          "benefits": "抗氧化，保护心血管健康，抗炎，保护视力，改善认知功能"
        },
        {
          "name": "褪黑素",
          "percentage": 80,
          "value": "100g含褪黑素0.15mg",
          "benefits": "调节睡眠节律，抗氧化，增强免疫力，延缓衰老"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，樱桃含糖量较高。",
      "selection_tips": "1. 看颜色：深红有光泽\n2. 看果柄：新鲜绿色\n3. 果实饱满不干瘪",
      "storage_tips": "1. 不要洗后存放\n2. 冷藏保存3-5天\n3. 避免挤压和潮湿",
      "allergens": [],
      "beginner_friendly": false,
      "region": "山东烟台、辽宁大连、四川汉源等",
      "varieties": ["美早", "红灯", "拉宾斯", "萨米脱"],
      "consumption_advice": "每次建议食用1个中等大小（约200克）",
      "consumption_frequency": "建议每周食用2-3次，夏季可适当增加"
    },
    {
      "id": "pomegranate",
      "name": "石榴",
      "image": "/images/石榴.png",
      "safe_tags": ["无限制", "孕期", "贫血", "免疫力提升", "抗氧化", "美容养颜", "秋季水果", "补血"],
      "danger_tags": ["糖尿病", "高糖"],
      "season": "9-11月",
      "nutrition": [
        {
          "name": "鞣花酸",
          "percentage": 90,
          "value": "100g含鞣花酸丰富",
          "benefits": "抗氧化，抗炎，保护心血管健康，预防癌症，延缓衰老"
        },
        {
          "name": "铁",
          "percentage": 45,
          "value": "100g含铁 0.3mg",
          "benefits": "预防贫血，促进血红蛋白合成，增强免疫力，改善疲劳"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，石榴含糖量较高。",
      "selection_tips": "1. 看外观：皮薄色红\n2. 掂重量：相同大小重的果汁多\n3. 顶部开口：大而不封",
      "storage_tips": "1. 室温保存一周左右\n2. 冷藏可保存两周\n3. 果粒可剥出冷冻保存",
      "allergens": [],
      "beginner_friendly": false,
      "region": "四川会理、云南蒙自、陕西临潼等",
      "varieties": ["突尼斯", "大红袍", "红心石榴", "软籽石榴"],
      "consumption_advice": "每次建议食用1个中等大小（约200克）",
      "consumption_frequency": "建议每周食用2-3次，秋季可适当增加"
    },
    {
      "id": "loquat",
      "name": "枇杷",
      "image": "/images/枇杷.png",
      "safe_tags": ["无限制", "咳嗽", "孕期", "免疫力提升", "润肺", "春季水果", "维生素A"],
      "danger_tags": ["糖尿病", "高糖"],
      "season": "4-6月",
      "nutrition": [
        {
          "name": "胡萝卜素",
          "percentage": 65,
          "value": "100g含胡萝卜素丰富",
          "benefits": "保护视力，抗氧化，增强免疫功能，维持皮肤健康"
        },
        {
          "name": "钾",
          "percentage": 40,
          "value": "100g含钾 150mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质，促进肌肉收缩"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，枇杷含糖量较高。",
      "selection_tips": "1. 看颜色：橙黄均匀\n2. 表皮完整：无伤痕\n3. 果肉饱满：无瘪痕",
      "storage_tips": "1. 室温下可保存2-3天\n2. 冷藏可保存一周左右\n3. 避免挤压损伤",
      "allergens": [],
      "beginner_friendly": true,
      "region": "福建莆田、江苏洞庭山、浙江等",
      "varieties": ["白沙", "红肉", "早钱", "琵琶"],
      "consumption_advice": "每次建议食用1个中等大小（约200克）",
      "consumption_frequency": "建议每周食用2-3次，春季可适当增加"
    },
    {
      "id": "blueberry",
      "name": "蓝莓",
      "image": "/images/蓝莓.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "抗氧化", "美容养颜", "维生素C", "低热量", "夏季水果"],
      "danger_tags": ["过敏体质"],
      "season": "6-8月",
      "nutrition": [
        {
          "name": "花青素",
          "percentage": 90,
          "value": "100g含花青素 163mg",
          "benefits": "抗氧化，保护心血管健康，抗炎，保护视力，改善认知功能"
        },
        {
          "name": "维生素C",
          "percentage": 60,
          "value": "100g含维生素C 9.7mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成，促进铁吸收"
        }
      ],
      "contraindications": "部分人可能对蓝莓过敏，出现皮疹等症状。",
      "selection_tips": "1. 看颜色：深蓝紫色\n2. 看果粉：表面有白霜\n3. 果实饱满不干瘪",
      "storage_tips": "1. 冷藏保存3-5天\n2. 不要洗后存放\n3. 可冷冻保存",
      "allergens": ["蓝莓过敏原"],
      "beginner_friendly": true,
      "region": "云南、贵州、山东等",
      "varieties": ["北高丛", "南高丛", "兔眼蓝莓"],
      "consumption_advice": "每次建议食用1个中等大小（约200克）",
      "consumption_frequency": "建议每周食用3-4次，夏季可适当增加"
    },
    {
      "id": "guava",
      "name": "番石榴",
      "image": "/images/番石榴.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "维生素C", "热带水果", "低热量", "抗氧化"],
      "danger_tags": ["糖尿病", "高糖"],
      "season": "6月至次年1月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 90,
          "value": "100g含维生素C 228mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "膳食纤维",
          "percentage": 70,
          "value": "100g含膳食纤维 5.4g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "钾",
          "percentage": 60,
          "value": "100g含钾 417mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "叶酸",
          "percentage": 50,
          "value": "100g含叶酸 49μg",
          "benefits": "预防贫血，促进胎儿神经管发育"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，番石榴含糖量较高。",
      "selection_tips": "1. 看外观：表皮光滑无损伤\n2. 闻气味：有淡淡清香\n3. 轻压：有弹性不软烂",
      "storage_tips": "1. 未熟果室温放置\n2. 成熟后冷藏保存\n3. 避免挤压和潮湿",
      "allergens": [],
      "beginner_friendly": true,
      "region": "广东、福建、海南、台湾",
      "varieties": ["红心番石榴", "珍珠番石榴", "胭脂红番石榴", "水晶芭乐"],
      "consumption_advice": "每次建议食用1个中等大小（约200克），糖尿病患者建议控制在100克以内",
      "consumption_frequency": "建议每周食用3-4次"
    },
    {
      "id": "jackfruit",
      "name": "菠萝蜜",
      "image": "/images/菠萝蜜.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "维生素C", "热带水果", "抗氧化"],
      "danger_tags": ["糖尿病", "高糖", "过敏体质"],
      "season": "6-8月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 80,
          "value": "100g含维生素C 19.7mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "钾",
          "percentage": 70,
          "value": "100g含钾 303mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "膳食纤维",
          "percentage": 60,
          "value": "100g含膳食纤维 2.3g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "维生素B6",
          "percentage": 50,
          "value": "100g含维生素B6 0.3mg",
          "benefits": "促进蛋白质代谢，维持神经系统健康"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，菠萝蜜含糖量较高。部分人可能对菠萝蜜过敏。",
      "selection_tips": "1. 看外观：表皮完整无损伤\n2. 闻气味：有浓郁香气\n3. 轻敲：声音沉闷表示成熟",
      "storage_tips": "1. 未切开可常温保存\n2. 切开后需冷藏并保鲜膜封好\n3. 果肉可冷冻保存",
      "allergens": ["菠萝蜜蛋白"],
      "beginner_friendly": false,
      "region": "海南、广东、广西",
      "varieties": ["干苞菠萝蜜", "湿苞菠萝蜜", "泰国8号红肉"],
      "consumption_advice": "每次建议食用100-150克，糖尿病患者建议控制在50克以内",
      "consumption_frequency": "建议每周食用2-3次"
    },
    {
      "id": "mangosteen",
      "name": "山竹",
      "image": "/images/山竹.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "维生素C", "热带水果", "抗氧化", "美容养颜"],
      "danger_tags": ["糖尿病", "高糖"],
      "season": "5-9月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 85,
          "value": "100g含维生素C 12mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "膳食纤维",
          "percentage": 75,
          "value": "100g含膳食纤维 1.8g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "钾",
          "percentage": 60,
          "value": "100g含钾 48mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "山竹酮",
          "percentage": 90,
          "value": "山竹果皮中含量丰富",
          "benefits": "抗氧化，抗炎，保护心血管健康"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，山竹含糖量较高。",
      "selection_tips": "1. 看果蒂：绿色新鲜\n2. 看果皮：紫红色有光泽\n3. 轻压：有弹性不软烂",
      "storage_tips": "1. 冷藏保存3-5天\n2. 避免挤压和潮湿\n3. 不要剥皮后存放",
      "allergens": [],
      "beginner_friendly": true,
      "region": "海南、云南（进口为主）",
      "varieties": ["泰国山竹", "海南本地山竹"],
      "consumption_advice": "每次建议食用2-3个（约100-150克），糖尿病患者建议控制在50克以内",
      "consumption_frequency": "建议每周食用2-3次"
    },
    {
      "id": "waxberry",
      "name": "杨梅",
      "image": "/images/杨梅.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "维生素C", "抗氧化", "美容养颜", "夏季水果"],
      "danger_tags": ["糖尿病", "高糖", "胃病"],
      "season": "6-7月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 90,
          "value": "100g含维生素C 9mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "花青素",
          "percentage": 85,
          "value": "100g含花青素丰富",
          "benefits": "抗氧化，保护心血管健康，抗炎"
        },
        {
          "name": "钾",
          "percentage": 60,
          "value": "100g含钾 149mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "有机酸",
          "percentage": 70,
          "value": "100g含有机酸丰富",
          "benefits": "促进消化，增进食欲，帮助铁吸收"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，杨梅含糖量较高。胃病患者不宜空腹食用。",
      "selection_tips": "1. 看颜色：深红色有光泽\n2. 看果蒂：新鲜绿色\n3. 果实饱满不干瘪",
      "storage_tips": "1. 冷藏保存2-3天\n2. 不要洗后存放\n3. 可冷冻保存",
      "allergens": [],
      "beginner_friendly": true,
      "region": "浙江、福建、江苏",
      "varieties": ["东魁杨梅", "荸荠种"],
      "consumption_advice": "每次建议食用10-15颗（约100克），糖尿病患者建议控制在50克以内",
      "consumption_frequency": "建议每周食用2-3次"
    },
    {
      "id": "waxapple",
      "name": "莲雾",
      "image": "/images/莲雾.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "维生素C", "热带水果", "低热量", "夏季水果", "补水"],
      "danger_tags": ["糖尿病", "高糖"],
      "season": "5-7月",
      "nutrition": [
        {
          "name": "水分",
          "percentage": 95,
          "value": "100g含水分 90g",
          "benefits": "补充水分，促进新陈代谢，调节体温"
        },
        {
          "name": "维生素C",
          "percentage": 70,
          "value": "100g含维生素C 10mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "钾",
          "percentage": 60,
          "value": "100g含钾 100mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "膳食纤维",
          "percentage": 50,
          "value": "100g含膳食纤维 1.2g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，莲雾含糖量较高。",
      "selection_tips": "1. 看颜色：色泽均匀\n2. 看果蒂：新鲜绿色\n3. 轻压：有弹性不软烂",
      "storage_tips": "1. 冷藏保存3-5天\n2. 避免挤压和潮湿\n3. 不要洗后存放",
      "allergens": [],
      "beginner_friendly": true,
      "region": "海南、台湾、广东",
      "varieties": ["黑金刚", "牛奶莲雾"],
      "consumption_advice": "每次建议食用1-2个（约100-150克），糖尿病患者建议控制在50克以内",
      "consumption_frequency": "建议每周食用2-3次"
    },
    {
      "id": "durian",
      "name": "榴莲",
      "image": "/images/榴莲.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "维生素C", "热带水果", "抗氧化"],
      "danger_tags": ["糖尿病", "高糖", "高热量", "过敏体质"],
      "season": "6-8月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 80,
          "value": "100g含维生素C 19.7mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "钾",
          "percentage": 70,
          "value": "100g含钾 436mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "膳食纤维",
          "percentage": 60,
          "value": "100g含膳食纤维 3.8g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "硫胺素",
          "percentage": 50,
          "value": "100g含硫胺素 0.3mg",
          "benefits": "促进能量代谢，维持神经系统健康"
        }
      ],
      "contraindications": "糖尿病患者需严格控制食用量，榴莲含糖量和热量都很高。部分人可能对榴莲过敏。",
      "selection_tips": "1. 看外观：刺尖完整\n2. 闻气味：有浓郁香气\n3. 轻摇：果肉松动表示成熟",
      "storage_tips": "1. 未切开可常温保存\n2. 切开后需冷藏并保鲜膜封好\n3. 果肉可冷冻保存",
      "allergens": ["榴莲蛋白"],
      "beginner_friendly": false,
      "region": "海南、云南（进口为主）",
      "varieties": ["金枕", "猫山王", "苏丹王"],
      "consumption_advice": "每次建议食用1-2瓣（约50-100克），糖尿病患者建议控制在30克以内",
      "consumption_frequency": "建议每周食用1-2次"
    },
    {
      "id": "passionfruit",
      "name": "百香果",
      "image": "/images/百香果.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "维生素C", "热带水果", "抗氧化", "美容养颜"],
      "danger_tags": ["糖尿病", "高糖", "胃病"],
      "season": "7-9月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 90,
          "value": "100g含维生素C 30mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "膳食纤维",
          "percentage": 80,
          "value": "100g含膳食纤维 10.4g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "钾",
          "percentage": 70,
          "value": "100g含钾 348mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "类胡萝卜素",
          "percentage": 60,
          "value": "100g含类胡萝卜素丰富",
          "benefits": "抗氧化，保护视力，增强免疫功能"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，百香果含糖量较高。胃病患者不宜空腹食用。",
      "selection_tips": "1. 看外观：表皮皱缩\n2. 闻气味：有浓郁香气\n3. 轻摇：有声音表示果肉饱满",
      "storage_tips": "1. 常温保存3-5天\n2. 冷藏可保存1-2周\n3. 果肉可冷冻保存",
      "allergens": [],
      "beginner_friendly": true,
      "region": "广西、福建、云南",
      "varieties": ["紫香一号", "黄金百香果"],
      "consumption_advice": "每次建议食用1-2个（约50-100克），糖尿病患者建议控制在30克以内",
      "consumption_frequency": "建议每周食用2-3次"
    },
    {
      "id": "coconut",
      "name": "椰子",
      "image": "/images/椰子.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "维生素C", "热带水果", "补水", "四季水果"],
      "danger_tags": ["糖尿病", "高糖"],
      "season": "全年",
      "nutrition": [
        {
          "name": "水分",
          "percentage": 95,
          "value": "100g含水分 95g",
          "benefits": "补充水分，促进新陈代谢，调节体温"
        },
        {
          "name": "钾",
          "percentage": 80,
          "value": "100g含钾 356mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "镁",
          "percentage": 70,
          "value": "100g含镁 32mg",
          "benefits": "维持神经肌肉功能，促进骨骼健康，调节血糖水平"
        },
        {
          "name": "月桂酸",
          "percentage": 60,
          "value": "椰子油中含量丰富",
          "benefits": "抗菌，抗病毒，增强免疫力"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，椰子含糖量较高。",
      "selection_tips": "1. 看外观：无裂缝\n2. 摇声音：有椰汁声\n3. 看重量：手感沉重",
      "storage_tips": "1. 常温保存1-2周\n2. 冷藏可延长保存时间\n3. 开壳后需冷藏并尽快食用",
      "allergens": [],
      "beginner_friendly": true,
      "region": "海南、云南西双版纳",
      "varieties": ["青椰", "红椰"],
      "consumption_advice": "每次建议饮用200-300ml椰汁，糖尿病患者建议控制在100ml以内",
      "consumption_frequency": "建议每周饮用2-3次"
    },
    {
      "id": "wampee",
      "name": "黄皮",
      "image": "/images/黄皮.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "维生素C", "夏季水果", "抗氧化"],
      "danger_tags": ["糖尿病", "高糖"],
      "season": "7-8月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 85,
          "value": "100g含维生素C 35mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "钾",
          "percentage": 70,
          "value": "100g含钾 200mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "膳食纤维",
          "percentage": 60,
          "value": "100g含膳食纤维 2.1g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "黄酮类",
          "percentage": 75,
          "value": "黄皮中含量丰富",
          "benefits": "抗氧化，抗炎，保护心血管健康"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，黄皮含糖量较高。",
      "selection_tips": "1. 看颜色：金黄色\n2. 看果皮：光滑无损伤\n3. 轻压：有弹性不软烂",
      "storage_tips": "1. 冷藏保存3-5天\n2. 避免挤压和潮湿\n3. 不要洗后存放",
      "allergens": [],
      "beginner_friendly": true,
      "region": "广东、广西、福建",
      "varieties": ["鸡心黄皮", "冰糖黄皮"],
      "consumption_advice": "每次建议食用10-15颗（约100克），糖尿病患者建议控制在50克以内",
      "consumption_frequency": "建议每周食用2-3次"
    },
    {
      "id": "rambutan",
      "name": "红毛丹",
      "image": "/images/红毛丹.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "维生素C", "热带水果", "抗氧化"],
      "danger_tags": ["糖尿病", "高糖"],
      "season": "6-8月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 80,
          "value": "100g含维生素C 20mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "钾",
          "percentage": 75,
          "value": "100g含钾 140mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "膳食纤维",
          "percentage": 65,
          "value": "100g含膳食纤维 1.5g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "铁",
          "percentage": 60,
          "value": "100g含铁 0.35mg",
          "benefits": "预防贫血，促进造血功能"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，红毛丹含糖量较高。",
      "selection_tips": "1. 看颜色：鲜红色\n2. 看毛刺：完整不脱落\n3. 轻压：有弹性不软烂",
      "storage_tips": "1. 冷藏保存3-5天\n2. 避免挤压和潮湿\n3. 不要洗后存放",
      "allergens": [],
      "beginner_friendly": true,
      "region": "海南、云南（进口为主）",
      "varieties": ["泰国红毛丹", "海南红毛丹"],
      "consumption_advice": "每次建议食用5-8颗（约100克），糖尿病患者建议控制在50克以内",
      "consumption_frequency": "建议每周食用2-3次"
    },
    {
      "id": "prickly_pear",
      "name": "刺梨",
      "image": "/images/刺梨.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "维生素C", "抗氧化", "美容养颜", "秋季水果"],
      "danger_tags": ["过敏体质", "口腔溃疡"],
      "season": "8-10月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 100,
          "value": "100g含维生素C 2585mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成，促进铁吸收"
        },
        {
          "name": "多酚",
          "percentage": 90,
          "value": "100g含多酚类物质丰富",
          "benefits": "抗氧化，抗炎，保护心血管健康，延缓衰老"
        },
        {
          "name": "膳食纤维",
          "percentage": 70,
          "value": "100g含膳食纤维 4.1g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "钾",
          "percentage": 60,
          "value": "100g含钾 200mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        }
      ],
      "contraindications": "口腔溃疡患者慎食，刺梨的酸性可能刺激黏膜。部分人可能对刺梨过敏。",
      "selection_tips": "1. 看颜色：金黄色\n2. 看刺：完整不脱落\n3. 轻压：有弹性不软烂",
      "storage_tips": "1. 冷藏保存3-5天\n2. 避免挤压和潮湿\n3. 不要洗后存放",
      "allergens": ["刺梨蛋白"],
      "beginner_friendly": false,
      "region": "贵州、云南",
      "varieties": ["贵州刺梨", "云南刺梨"],
      "consumption_advice": "每次建议食用1-2个（约50-100克），可榨汁或泡水饮用",
      "consumption_frequency": "建议每周食用2-3次"
    },
    {
      "id": "yacon",
      "name": "雪莲果",
      "image": "/images/雪莲果.png",
      "safe_tags": ["无限制", "孕期", "糖尿病", "便秘", "低热量", "秋季水果", "补水"],
      "danger_tags": ["过敏体质"],
      "season": "10-12月",
      "nutrition": [
        {
          "name": "低聚果糖",
          "percentage": 90,
          "value": "100g含低聚果糖丰富",
          "benefits": "促进肠道益生菌生长，改善肠道健康，控制血糖"
        },
        {
          "name": "水分",
          "percentage": 85,
          "value": "100g含水分 90g",
          "benefits": "补充水分，促进新陈代谢，调节体温"
        },
        {
          "name": "膳食纤维",
          "percentage": 80,
          "value": "100g含膳食纤维 2.3g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "钾",
          "percentage": 60,
          "value": "100g含钾 150mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        }
      ],
      "contraindications": "部分人可能对雪莲果过敏。",
      "selection_tips": "1. 看外观：表皮光滑无损伤\n2. 看形状：均匀饱满\n3. 轻压：有弹性不软烂",
      "storage_tips": "1. 冷藏保存1-2周\n2. 避免阳光直射\n3. 不要洗后存放",
      "allergens": ["雪莲果蛋白"],
      "beginner_friendly": true,
      "region": "云南、四川",
      "varieties": ["云南雪莲果", "四川雪莲果"],
      "consumption_advice": "每次建议食用1个中等大小（约200克），可生食或煮食",
      "consumption_frequency": "建议每周食用2-3次"
    },
    {
      "id": "water_chestnut",
      "name": "荸荠",
      "image": "/images/荸荠.png",
      "safe_tags": ["无限制", "孕期", "糖尿病", "高血压", "便秘", "免疫力提升", "低热量", "秋季水果", "抗氧化"],
      "danger_tags": ["脾胃虚寒"],
      "season": "9-12月",
      "nutrition": [
        {
          "name": "膳食纤维",
          "percentage": 70,
          "value": "100g含膳食纤维 2.5g",
          "benefits": "促进肠道健康，降低胆固醇，控制血糖"
        },
        {
          "name": "钾",
          "percentage": 60,
          "value": "100g含钾 150mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "维生素C",
          "percentage": 50,
          "value": "100g含维生素C 15mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "磷",
          "percentage": 40,
          "value": "100g含磷 30mg",
          "benefits": "维护骨骼和牙齿健康，参与能量代谢"
        }
      ],
      "contraindications": "脾胃虚寒者不宜多食，荸荠性寒。",
      "selection_tips": "1. 看外观：皮薄光滑\n2. 闻气味：无异味\n3. 摸质地：坚实有弹性",
      "storage_tips": "1. 冷藏保存1-2周\n2. 避免阳光直射\n3. 保持干燥",
      "allergens": [],
      "beginner_friendly": true,
      "region": "江苏、浙江、福建等",
      "varieties": ["白荸荠", "红荸荠"],
      "consumption_advice": "每次建议食用5-10个（约100克），脾胃虚寒者建议控制在50克以内",
      "consumption_frequency": "建议每周食用2-3次，秋季可适当增加"
    },
    {
      "id": "lemon",
      "name": "柠檬",
      "image": "/images/柠檬.png",
      "safe_tags": ["无限制", "孕期", "感冒期", "免疫力提升", "维生素C", "四季水果", "抗氧化", "美容养颜"],
      "danger_tags": ["胃病", "酸性水果", "口腔溃疡"],
      "season": "全年",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 95,
          "value": "100g含维生素C 53mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成，促进铁吸收"
        },
        {
          "name": "柠檬酸",
          "percentage": 90,
          "value": "100g含柠檬酸丰富",
          "benefits": "促进消化，增强食欲，帮助铁吸收，抗氧化"
        },
        {
          "name": "钾",
          "percentage": 50,
          "value": "100g含钾 138mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "类黄酮",
          "percentage": 70,
          "value": "柠檬皮中含量丰富",
          "benefits": "抗氧化，抗炎，保护心血管健康"
        }
      ],
      "contraindications": "胃溃疡患者慎食，柠檬的酸性可能刺激胃黏膜。口腔溃疡患者不宜食用。",
      "selection_tips": "1. 看颜色：黄色均匀\n2. 闻气味：有柠檬香\n3. 摸软硬：结实有弹性",
      "storage_tips": "1. 室温可保存1-2周\n2. 冷藏可保存1个月\n3. 可切片冷冻保存",
      "allergens": ["柑橘类过敏原"],
      "beginner_friendly": true,
      "region": "四川、云南、广东等",
      "varieties": ["尤力克", "里斯本", "北京柠檬"],
      "consumption_advice": "每次建议食用1/2个（约50克），可泡水或榨汁饮用",
      "consumption_frequency": "建议每周食用3-4次，感冒期可适当增加"
    },
    {
      "id": "apricot",
      "name": "黄杏",
      "image": "/images/黄杏.png",
      "safe_tags": ["无限制", "孕期", "便秘", "免疫力提升", "维生素A", "夏季水果", "抗氧化", "美容养颜"],
      "danger_tags": ["糖尿病", "高糖", "过敏体质"],
      "season": "5-7月",
      "nutrition": [
        {
          "name": "维生素A",
          "percentage": 80,
          "value": "100g含维生素A 1926IU",
          "benefits": "保护视力，维持皮肤健康，增强免疫功能"
        },
        {
          "name": "膳食纤维",
          "percentage": 65,
          "value": "100g含膳食纤维 2g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "钾",
          "percentage": 55,
          "value": "100g含钾 259mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "铁",
          "percentage": 40,
          "value": "100g含铁 0.4mg",
          "benefits": "预防贫血，促进氧气运输"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，黄杏含糖量较高。",
      "selection_tips": "1. 看颜色：橙黄色均匀\n2. 闻气味：有杏香\n3. 轻压：稍软有弹性",
      "storage_tips": "1. 熟透的黄杏冷藏存放\n2. 未熟的黄杏室温放置\n3. 避免碰伤和堆叠",
      "allergens": ["杏蛋白"],
      "beginner_friendly": true,
      "region": "新疆、甘肃、陕西等",
      "varieties": ["金太阳", "红杏", "白杏"],
      "consumption_advice": "每次建议食用2-3个（约100克），糖尿病患者建议控制在50克以内",
      "consumption_frequency": "建议每周食用2-3次，夏季可适当增加"
    },
    {
      "id": "honeydew",
      "name": "哈密瓜",
      "image": "/images/哈密瓜.png",
      "safe_tags": ["无限制", "孕期", "夏季消暑", "免疫力提升", "维生素C", "夏季水果", "低热量", "补水"],
      "danger_tags": ["糖尿病", "高糖"],
      "season": "6-9月",
      "nutrition": [
        {
          "name": "水分",
          "percentage": 90,
          "value": "100g含水分 90g",
          "benefits": "补充水分，促进新陈代谢，调节体温"
        },
        {
          "name": "钾",
          "percentage": 65,
          "value": "100g含钾 228mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "维生素C",
          "percentage": 55,
          "value": "100g含维生素C 18mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "叶酸",
          "percentage": 45,
          "value": "100g含叶酸 19μg",
          "benefits": "预防贫血，促进胎儿神经管发育"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，哈密瓜含糖量较高。",
      "selection_tips": "1. 看颜色：黄绿色均匀\n2. 闻气味：有哈密瓜香\n3. 轻压：稍软有弹性",
      "storage_tips": "1. 未切开可常温保存\n2. 切开后需冷藏并保鲜膜封住切口\n3. 不宜在太阳下曝晒",
      "allergens": [],
      "beginner_friendly": true,
      "region": "新疆、甘肃、内蒙古等",
      "varieties": ["西州蜜", "金蜜", "红蜜"],
      "consumption_advice": "每次建议食用1片（约200克），糖尿病患者建议控制在100克以内",
      "consumption_frequency": "建议每周食用2-3次，夏季可适当增加"
    },
    {
      "id": "hawthorn",
      "name": "山楂",
      "image": "/images/山楂.png",
      "safe_tags": ["无限制", "孕期", "消化促进", "免疫力提升", "维生素C", "秋季水果", "抗氧化"],
      "danger_tags": ["胃病", "空腹", "糖尿病", "高糖"],
      "season": "9-11月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 85,
          "value": "100g含维生素C 53mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "膳食纤维",
          "percentage": 70,
          "value": "100g含膳食纤维 3.1g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "铁",
          "percentage": 60,
          "value": "100g含铁 0.9mg",
          "benefits": "预防贫血，促进氧气运输"
        },
        {
          "name": "黄酮类",
          "percentage": 80,
          "value": "山楂中含量丰富",
          "benefits": "抗氧化，抗炎，保护心血管健康，降血压"
        }
      ],
      "contraindications": "胃溃疡患者慎食，山楂的酸性可能刺激胃黏膜。不宜空腹食用。糖尿病患者需控制食用量。",
      "selection_tips": "1. 看颜色：红色均匀\n2. 闻气味：有山楂香\n3. 摸软硬：结实有弹性",
      "storage_tips": "1. 室温可保存1-2周\n2. 冷藏可保存1个月\n3. 可制成果干保存",
      "allergens": [],
      "beginner_friendly": true,
      "region": "山东、河北、山西等",
      "varieties": ["大金星", "小金星", "红果"],
      "consumption_advice": "每次建议食用5-10颗（约50克），糖尿病患者建议控制在30克以内",
      "consumption_frequency": "建议每周食用2-3次，秋季可适当增加"
    },
    {
      "id": "avocado",
      "name": "牛油果",
      "image": "/images/牛油果.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "美容养颜", "四季水果", "抗氧化"],
      "danger_tags": ["高热量", "过敏体质"],
      "season": "全年",
      "nutrition": [
        {
          "name": "健康脂肪",
          "percentage": 90,
          "value": "100g含健康脂肪 14.7g",
          "benefits": "降低胆固醇，保护心血管健康，提供能量"
        },
        {
          "name": "膳食纤维",
          "percentage": 75,
          "value": "100g含膳食纤维 6.7g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "钾",
          "percentage": 70,
          "value": "100g含钾 485mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "叶酸",
          "percentage": 60,
          "value": "100g含叶酸 81μg",
          "benefits": "预防贫血，促进胎儿神经管发育"
        }
      ],
      "contraindications": "牛油果热量较高，减肥者需控制食用量。部分人可能对牛油果过敏。",
      "selection_tips": "1. 看颜色：深绿色或紫黑色\n2. 闻气味：无异味\n3. 轻压：稍软有弹性",
      "storage_tips": "1. 未熟牛油果室温放置\n2. 熟透后冷藏保存\n3. 切开后需立即食用或冷藏",
      "allergens": ["牛油果蛋白"],
      "beginner_friendly": true,
      "region": "云南、海南（进口为主）",
      "varieties": ["哈斯", "富尔特", "培根"],
      "consumption_advice": "每次建议食用1/2个（约100克），减肥者建议控制在50克以内",
      "consumption_frequency": "建议每周食用2-3次"
    },
    {
      "id": "plum",
      "name": "李子",
      "image": "/images/李子.png",
      "safe_tags": ["无限制", "孕期", "便秘", "免疫力提升", "维生素C", "夏季水果", "抗氧化"],
      "danger_tags": ["糖尿病", "高糖", "胃病"],
      "season": "6-8月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 70,
          "value": "100g含维生素C 9.5mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "膳食纤维",
          "percentage": 65,
          "value": "100g含膳食纤维 1.4g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "钾",
          "percentage": 60,
          "value": "100g含钾 157mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "花青素",
          "percentage": 75,
          "value": "特别是红李子中含量丰富",
          "benefits": "抗氧化，保护心血管健康，抗炎"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，李子含糖量较高。胃病患者不宜空腹食用。",
      "selection_tips": "1. 看颜色：颜色均匀\n2. 闻气味：有李子香\n3. 轻压：稍软有弹性",
      "storage_tips": "1. 熟透的李子冷藏存放\n2. 未熟的李子室温放置\n3. 避免碰伤和堆叠",
      "allergens": ["李子蛋白"],
      "beginner_friendly": true,
      "region": "四川、云南、贵州等",
      "varieties": ["红李子", "黄李子", "黑李子"],
      "consumption_advice": "每次建议食用3-5个（约100克），糖尿病患者建议控制在50克以内",
      "consumption_frequency": "建议每周食用2-3次，夏季可适当增加"
    },
    {
      "id": "starfruit",
      "name": "杨桃",
      "image": "/images/杨桃.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "维生素C", "热带水果", "低热量", "抗氧化"],
      "danger_tags": ["糖尿病", "高糖", "肾病患者"],
      "season": "7-10月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 80,
          "value": "100g含维生素C 34.4mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "膳食纤维",
          "percentage": 60,
          "value": "100g含膳食纤维 2.8g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "钾",
          "percentage": 55,
          "value": "100g含钾 133mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "草酸",
          "percentage": 70,
          "value": "杨桃中含量丰富",
          "benefits": "肾病患者慎食，可能导致草酸钙结石"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，杨桃含糖量较高。肾病患者不宜食用，杨桃中的草酸可能导致草酸钙结石。",
      "selection_tips": "1. 看颜色：黄色均匀\n2. 闻气味：有杨桃香\n3. 摸软硬：结实有弹性",
      "storage_tips": "1. 室温可保存3-5天\n2. 冷藏可保存1周\n3. 避免挤压",
      "allergens": [],
      "beginner_friendly": true,
      "region": "广东、福建、海南等",
      "varieties": ["甜杨桃", "酸杨桃"],
      "consumption_advice": "每次建议食用1个（约100克），糖尿病患者建议控制在50克以内",
      "consumption_frequency": "建议每周食用2-3次"
    },
    {
      "id": "goji_berry",
      "name": "枸杞",
      "image": "/images/枸杞.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "抗氧化", "美容养颜", "四季水果", "补血"],
      "danger_tags": ["过敏体质"],
      "season": "全年",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 85,
          "value": "100g含维生素C 48.4mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "铁",
          "percentage": 70,
          "value": "100g含铁 6.8mg",
          "benefits": "预防贫血，促进氧气运输"
        },
        {
          "name": "胡萝卜素",
          "percentage": 80,
          "value": "100g含胡萝卜素丰富",
          "benefits": "保护视力，抗氧化，增强免疫功能"
        },
        {
          "name": "多糖",
          "percentage": 75,
          "value": "枸杞中含量丰富",
          "benefits": "增强免疫力，抗疲劳，保护肝脏"
        }
      ],
      "contraindications": "部分人可能对枸杞过敏。",
      "selection_tips": "1. 看颜色：红色均匀\n2. 闻气味：无异味\n3. 摸软硬：干燥不粘手",
      "storage_tips": "1. 密封保存\n2. 避免阳光直射\n3. 保持干燥",
      "allergens": ["枸杞蛋白"],
      "beginner_friendly": true,
      "region": "宁夏、甘肃、青海等",
      "varieties": ["宁夏枸杞", "黑枸杞"],
      "consumption_advice": "每次建议食用10-15克，可泡水或煮汤",
      "consumption_frequency": "建议每天食用1次，可长期坚持"
    },
    {
      "id": "papaya",
      "name": "木瓜",
      "image": "/images/木瓜.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "维生素C", "热带水果", "抗氧化", "美容养颜"],
      "danger_tags": ["糖尿病", "高糖", "过敏体质"],
      "season": "全年",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 85,
          "value": "100g含维生素C 60.9mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "维生素A",
          "percentage": 75,
          "value": "100g含维生素A 1094IU",
          "benefits": "保护视力，维持皮肤健康，增强免疫功能"
        },
        {
          "name": "木瓜蛋白酶",
          "percentage": 90,
          "value": "木瓜中含量丰富",
          "benefits": "促进蛋白质消化吸收，抗炎消肿，改善血液循环"
        },
        {
          "name": "叶酸",
          "percentage": 60,
          "value": "100g含叶酸 37μg",
          "benefits": "预防贫血，促进胎儿神经管发育"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，木瓜含糖量较高。部分人可能对木瓜过敏。",
      "selection_tips": "1. 看颜色：橙黄色均匀\n2. 闻气味：有木瓜香\n3. 轻压：稍软有弹性",
      "storage_tips": "1. 未熟木瓜室温放置\n2. 熟透后冷藏保存\n3. 切开后需立即食用或冷藏",
      "allergens": ["木瓜蛋白"],
      "beginner_friendly": true,
      "region": "海南、广东、云南等",
      "varieties": ["夏威夷木瓜", "泰国木瓜", "本地木瓜"],
      "consumption_advice": "每次建议食用1/2个（约200克），糖尿病患者建议控制在100克以内",
      "consumption_frequency": "建议每周食用2-3次"
    },
    {
      "id": "mulberry",
      "name": "桑葚",
      "image": "/images/桑葚.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "维生素C", "春季水果", "抗氧化", "美容养颜"],
      "danger_tags": ["糖尿病", "高糖"],
      "season": "4-6月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 80,
          "value": "100g含维生素C 36.4mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "花青素",
          "percentage": 85,
          "value": "桑葚中含量丰富",
          "benefits": "抗氧化，保护心血管健康，抗炎，保护视力"
        },
        {
          "name": "铁",
          "percentage": 65,
          "value": "100g含铁 1.85mg",
          "benefits": "预防贫血，促进氧气运输"
        },
        {
          "name": "膳食纤维",
          "percentage": 70,
          "value": "100g含膳食纤维 1.7g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，桑葚含糖量较高。",
      "selection_tips": "1. 看颜色：深紫色均匀\n2. 闻气味：有桑葚香\n3. 摸软硬：饱满有弹性",
      "storage_tips": "1. 冷藏保存2-3天\n2. 不要洗后存放\n3. 可冷冻保存",
      "allergens": [],
      "beginner_friendly": true,
      "region": "浙江、江苏、四川等",
      "varieties": ["白桑葚", "黑桑葚", "红桑葚"],
      "consumption_advice": "每次建议食用20-30颗（约100克），糖尿病患者建议控制在50克以内",
      "consumption_frequency": "建议每周食用2-3次，春季可适当增加"
    },
    {
      "id": "cherry_tomato",
      "name": "圣女果",
      "image": "/images/圣女果.png",
      "safe_tags": ["无限制", "孕期", "免疫力提升", "维生素C", "四季水果", "低热量", "抗氧化"],
      "danger_tags": ["过敏体质"],
      "season": "全年",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 75,
          "value": "100g含维生素C 13.7mg",
          "benefits": "增强免疫力，抗氧化，促进胶原蛋白合成"
        },
        {
          "name": "番茄红素",
          "percentage": 80,
          "value": "100g含番茄红素丰富",
          "benefits": "抗氧化，保护前列腺健康，预防心血管疾病"
        },
        {
          "name": "钾",
          "percentage": 60,
          "value": "100g含钾 237mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "膳食纤维",
          "percentage": 55,
          "value": "100g含膳食纤维 0.9g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        }
      ],
      "contraindications": "部分人可能对圣女果过敏。",
      "selection_tips": "1. 看颜色：红色均匀\n2. 闻气味：有番茄香\n3. 摸软硬：饱满有弹性",
      "storage_tips": "1. 室温可保存3-5天\n2. 冷藏可保存1周\n3. 避免挤压",
      "allergens": ["番茄过敏原"],
      "beginner_friendly": true,
      "region": "山东、辽宁、河北等",
      "varieties": ["红圣女果", "黄圣女果", "粉圣女果"],
      "consumption_advice": "每次建议食用10-15颗（约100克）",
      "consumption_frequency": "建议每周食用3-4次"
    },
    {
      "id": "fig",
      "name": "无花果",
      "image": "/images/无花果.png",
      "safe_tags": ["无限制", "孕期", "便秘", "免疫力提升", "维生素C", "夏季水果", "抗氧化"],
      "danger_tags": ["糖尿病", "高糖"],
      "season": "7-9月",
      "nutrition": [
        {
          "name": "膳食纤维",
          "percentage": 80,
          "value": "100g含膳食纤维 2.9g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        },
        {
          "name": "钾",
          "percentage": 65,
          "value": "100g含钾 232mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "钙",
          "percentage": 60,
          "value": "100g含钙 35mg",
          "benefits": "维护骨骼和牙齿健康"
        },
        {
          "name": "铁",
          "percentage": 55,
          "value": "100g含铁 0.37mg",
          "benefits": "预防贫血，促进氧气运输"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，无花果含糖量较高。",
      "selection_tips": "1. 看颜色：紫色或绿色均匀\n2. 闻气味：有无花果香\n3. 轻压：稍软有弹性",
      "storage_tips": "1. 室温可保存2-3天\n2. 冷藏可保存1周\n3. 可制成果干保存",
      "allergens": [],
      "beginner_friendly": true,
      "region": "新疆、甘肃、陕西等",
      "varieties": ["紫无花果", "绿无花果"],
      "consumption_advice": "每次建议食用2-3个（约100克），糖尿病患者建议控制在50克以内",
      "consumption_frequency": "建议每周食用2-3次，夏季可适当增加"
    },
    {
      "id": "cucumber",
      "name": "黄瓜",
      "image": "/images/黄瓜.png",
      "safe_tags": ["无限制", "孕期", "糖尿病", "高血压", "便秘", "免疫力提升", "低热量", "四季水果", "补水"],
      "danger_tags": [],
      "season": "全年",
      "nutrition": [
        {
          "name": "水分",
          "percentage": 95,
          "value": "100g含水分 96g",
          "benefits": "补充水分，促进新陈代谢，调节体温"
        },
        {
          "name": "维生素K",
          "percentage": 60,
          "value": "100g含维生素K 16.4μg",
          "benefits": "促进血液凝固，维护骨骼健康"
        },
        {
          "name": "钾",
          "percentage": 55,
          "value": "100g含钾 147mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "硅",
          "percentage": 50,
          "value": "黄瓜皮中含量丰富",
          "benefits": "促进胶原蛋白合成，维护皮肤健康"
        }
      ],
      "contraindications": "无特殊禁忌，但建议适量食用。",
      "selection_tips": "1. 看颜色：绿色均匀\n2. 闻气味：有黄瓜香\n3. 摸软硬：结实有弹性",
      "storage_tips": "1. 室温可保存3-5天\n2. 冷藏可保存1周\n3. 避免阳光直射",
      "allergens": [],
      "beginner_friendly": true,
      "region": "山东、河北、辽宁等",
      "varieties": ["青瓜", "白瓜", "小黄瓜"],
      "consumption_advice": "每次建议食用1根（约100克）",
      "consumption_frequency": "建议每周食用3-4次"
    },
    {
      "id": "yellow_peach",
      "name": "黄桃",
      "image": "/images/黄桃.png",
      "safe_tags": ["无限制", "孕期", "便秘", "夏季消暑", "美容养颜", "维生素C", "夏季水果"],
      "danger_tags": ["糖尿病", "高糖", "过敏体质"],
      "season": "6-9月",
      "nutrition": [
        {
          "name": "维生素C",
          "percentage": 45,
          "value": "100g含维生素C 9.9mg",
          "benefits": "抗氧化，增强免疫力，促进胶原蛋白合成"
        },
        {
          "name": "胡萝卜素",
          "percentage": 60,
          "value": "100g含胡萝卜素 0.4mg",
          "benefits": "保护视力，抗氧化，增强免疫功能"
        },
        {
          "name": "钾",
          "percentage": 50,
          "value": "100g含钾 190mg",
          "benefits": "调节血压，维持心脏功能，平衡电解质"
        },
        {
          "name": "膳食纤维",
          "percentage": 55,
          "value": "100g含膳食纤维 1.5g",
          "benefits": "促进肠道健康，控制血糖，降低胆固醇"
        }
      ],
      "contraindications": "糖尿病患者需控制食用量，黄桃含糖量较高。",
      "selection_tips": "1. 看颜色：金黄色均匀\n2. 闻气味：有桃香\n3. 轻压：稍软有弹性",
      "storage_tips": "1. 熟透的黄桃冷藏存放\n2. 未熟的黄桃室温放置\n3. 避免碰伤和堆叠",
      "allergens": ["桃蛋白"],
      "beginner_friendly": true,
      "region": "山东、河北、河南等",
      "varieties": ["黄金桃", "黄水蜜桃", "黄蟠桃"],
      "consumption_advice": "每次建议食用1个中等大小（约150克），糖尿病患者建议控制在100克以内",
      "consumption_frequency": "建议每周食用2-3次，夏季可适当增加"
    }
  ],
  "tags": {
    "safe": [
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
    "danger": [
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
  }
};

module.exports = {
  fruitsData: fruitsData
}; 