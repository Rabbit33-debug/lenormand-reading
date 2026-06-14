const cards = [
  {
    id: 1,
    name: "骑士",
    en: "Rider",
    symbol: "♘",
    keywords: ["消息", "到来", "行动"],
    tone: "positive",
    category: "movement",
    accent: "76, 154, 151",
    meaning: "新的动向正在靠近，事情不会一直停在原地。",
    advice: "先回应眼前的机会，再判断它值不值得深入。",
    shadow: "消息来得快，也可能还不够完整。"
  },
  {
    id: 2,
    name: "四叶草",
    en: "Clover",
    symbol: "♣",
    keywords: ["好运", "短机", "轻松"],
    tone: "positive",
    category: "luck",
    accent: "125, 161, 113",
    meaning: "短暂的好机会出现了，轻一点反而更容易抓住。",
    advice: "把握窗口期，不必把小事想得太重。",
    shadow: "幸运不会停留太久，犹豫会让机会变薄。"
  },
  {
    id: 3,
    name: "船",
    en: "Ship",
    symbol: "◇",
    keywords: ["远方", "迁移", "探索"],
    tone: "neutral",
    category: "travel",
    accent: "76, 154, 151",
    meaning: "这件事正在拉开距离，新的环境或更大的视野会带来答案。",
    advice: "把眼光放远，允许计划经过一段航程。",
    shadow: "期待远方时，别忽略现实的时间成本。"
  },
  {
    id: 4,
    name: "房子",
    en: "House",
    symbol: "⌂",
    keywords: ["安全", "家庭", "根基"],
    tone: "positive",
    category: "home",
    accent: "185, 121, 84",
    meaning: "核心议题落在稳定、归属与可依靠的基础上。",
    advice: "先稳住边界和日常，再谈扩张。",
    shadow: "过度求稳可能让你错过外面的空气。"
  },
  {
    id: 5,
    name: "树",
    en: "Tree",
    symbol: "♧",
    keywords: ["成长", "恢复", "长期"],
    tone: "positive",
    category: "growth",
    accent: "125, 161, 113",
    meaning: "答案需要时间生长，慢并不等于没有进展。",
    advice: "看长期趋势，照顾根部而不是只修剪表面。",
    shadow: "拖延太久会把耐心变成惯性。"
  },
  {
    id: 6,
    name: "云",
    en: "Clouds",
    symbol: "☁",
    keywords: ["迷雾", "迟疑", "不明"],
    tone: "challenging",
    category: "uncertainty",
    accent: "121, 126, 130",
    meaning: "信息尚未清晰，情绪或误解正在遮住重点。",
    advice: "先分辨事实与猜测，等雾散一点再下结论。",
    shadow: "越急着确定，越容易抓住错误线索。"
  },
  {
    id: 7,
    name: "蛇",
    en: "Snake",
    symbol: "∿",
    keywords: ["诱惑", "复杂", "隐患"],
    tone: "challenging",
    category: "hidden_risk",
    accent: "91, 132, 91",
    meaning: "局面里有绕路、试探或不完全坦白的成分。",
    advice: "保持优雅的警觉，不急着交出底牌。",
    shadow: "把直觉当证据，可能会误伤关系。"
  },
  {
    id: 8,
    name: "棺材",
    en: "Coffin",
    symbol: "▰",
    keywords: ["结束", "停顿", "转化"],
    tone: "challenging",
    category: "ending",
    accent: "109, 91, 103",
    meaning: "某个阶段正在收尾，旧模式需要真正结束。",
    advice: "允许事情完成它的告别，别急着补上空缺。",
    shadow: "结束不是失败，但抗拒结束会消耗更多。"
  },
  {
    id: 9,
    name: "花束",
    en: "Bouquet",
    symbol: "✽",
    keywords: ["礼物", "欣赏", "愉悦"],
    tone: "positive",
    category: "gift",
    accent: "189, 107, 115",
    meaning: "善意、赞美或令人轻松的回馈正在靠近。",
    advice: "接受好意，也把你的欣赏表达出来。",
    shadow: "漂亮的表面不一定等于长期承诺。"
  },
  {
    id: 10,
    name: "镰刀",
    en: "Scythe",
    symbol: "⌁",
    keywords: ["切断", "果断", "突变"],
    tone: "challenging",
    category: "cut",
    accent: "174, 89, 68",
    meaning: "需要快速决断，拖延会让代价变高。",
    advice: "把该断的线断干净，保留真正有用的部分。",
    shadow: "太急的动作会造成不必要的伤口。"
  },
  {
    id: 11,
    name: "鞭子",
    en: "Whip",
    symbol: "⥄",
    keywords: ["争执", "重复", "压力"],
    tone: "challenging",
    category: "conflict",
    accent: "170, 86, 86",
    meaning: "反复拉扯正在消耗能量，问题不是第一次出现。",
    advice: "停止无效循环，换一种谈法或处理规则。",
    shadow: "越想赢这一轮，越容易输掉整体关系。"
  },
  {
    id: 12,
    name: "鸟",
    en: "Birds",
    symbol: "⋁",
    keywords: ["对话", "焦虑", "双声"],
    tone: "neutral",
    category: "communication",
    accent: "113, 128, 151",
    meaning: "沟通很多，但其中夹杂着紧张、猜测或多方声音。",
    advice: "把话说短说清楚，别让情绪替你发言。",
    shadow: "过量讨论可能让重点越来越散。"
  },
  {
    id: 13,
    name: "孩子",
    en: "Child",
    symbol: "◌",
    keywords: ["开始", "单纯", "新鲜"],
    tone: "positive",
    category: "new",
    accent: "212, 168, 79",
    meaning: "这是一个早期状态，潜力存在，但还需要保护和学习。",
    advice: "用试验心态开始，不必要求它立刻成熟。",
    shadow: "天真可贵，但不能替代判断。"
  },
  {
    id: 14,
    name: "狐狸",
    en: "Fox",
    symbol: "△",
    keywords: ["策略", "观察", "自保"],
    tone: "neutral",
    category: "strategy",
    accent: "185, 121, 84",
    meaning: "局面需要更聪明的策略，也提醒你看清动机。",
    advice: "先观察利益结构，再决定如何行动。",
    shadow: "过度防备会让简单的事变复杂。"
  },
  {
    id: 15,
    name: "熊",
    en: "Bear",
    symbol: "◈",
    keywords: ["力量", "资源", "掌控"],
    tone: "positive",
    category: "power",
    accent: "141, 99, 69",
    meaning: "资源、权力或保护力量正在成为关键。",
    advice: "稳住你的筹码，不要轻易让出主导权。",
    shadow: "控制感太强时，关心也会变成压力。"
  },
  {
    id: 16,
    name: "星星",
    en: "Stars",
    symbol: "✦",
    keywords: ["愿景", "灵感", "指引"],
    tone: "positive",
    category: "hope",
    accent: "83, 137, 176",
    meaning: "愿景正在照亮方向，适合相信长期的可能性。",
    advice: "把理想拆成可以执行的小坐标。",
    shadow: "只看远景会忽略脚下的步骤。"
  },
  {
    id: 17,
    name: "鹳",
    en: "Stork",
    symbol: "↟",
    keywords: ["变化", "升级", "迁动"],
    tone: "positive",
    category: "change",
    accent: "76, 154, 151",
    meaning: "变化正在发生，旧位置不再完全适合你。",
    advice: "顺着新的节奏调整生活结构。",
    shadow: "改变需要落地，否则只是想象中的重启。"
  },
  {
    id: 18,
    name: "狗",
    en: "Dog",
    symbol: "●",
    keywords: ["忠诚", "陪伴", "信任"],
    tone: "positive",
    category: "loyalty",
    accent: "125, 161, 113",
    meaning: "可信任的人或稳定支持正在发挥作用。",
    advice: "靠近可靠的关系，也兑现你自己的承诺。",
    shadow: "习惯性的忠诚不该变成委屈自己。"
  },
  {
    id: 19,
    name: "高塔",
    en: "Tower",
    symbol: "▥",
    keywords: ["边界", "机构", "独立"],
    tone: "neutral",
    category: "structure",
    accent: "121, 126, 130",
    meaning: "规则、距离或正式结构正在影响这件事。",
    advice: "用制度和边界保护自己，别只靠感受判断。",
    shadow: "过度疏离会让你错过真实连接。"
  },
  {
    id: 20,
    name: "花园",
    en: "Garden",
    symbol: "✣",
    keywords: ["社交", "公开", "圈层"],
    tone: "positive",
    category: "community",
    accent: "125, 161, 113",
    meaning: "公开场域、社交网络或群体资源会带来线索。",
    advice: "走出去，让更多合适的人看见这件事。",
    shadow: "外界评价热闹，但不一定最懂你的核心需求。"
  },
  {
    id: 21,
    name: "山",
    en: "Mountain",
    symbol: "▲",
    keywords: ["阻碍", "延迟", "距离"],
    tone: "challenging",
    category: "obstacle",
    accent: "103, 116, 105",
    meaning: "眼前有现实阻力，需要耐心、路径和体力。",
    advice: "别硬撞，绕路、分段或等待都可能更有效。",
    shadow: "把阻碍神化，会让你低估自己的行动空间。"
  },
  {
    id: 22,
    name: "道路",
    en: "Crossroads",
    symbol: "⋔",
    keywords: ["选择", "分岔", "自由"],
    tone: "neutral",
    category: "choice",
    accent: "212, 168, 79",
    meaning: "你站在分岔口，重点不是完美答案，而是承担选择。",
    advice: "列出真正的代价，不要只比较想象中的好处。",
    shadow: "一直保留所有选项，也是一种选择。"
  },
  {
    id: 23,
    name: "老鼠",
    en: "Mice",
    symbol: "⋯",
    keywords: ["耗损", "焦虑", "流失"],
    tone: "challenging",
    category: "drain",
    accent: "134, 119, 107",
    meaning: "小消耗正在累积，真正的问题可能藏在细节里。",
    advice: "检查漏洞，先止损，再追求增长。",
    shadow: "焦虑会放大损失感，也会偷走判断力。"
  },
  {
    id: 24,
    name: "心",
    en: "Heart",
    symbol: "♡",
    keywords: ["爱", "热情", "真心"],
    tone: "positive",
    category: "love",
    accent: "189, 107, 115",
    meaning: "真诚的感受是核心，喜欢、热情或愿意靠近都很明确。",
    advice: "承认你在乎什么，再决定如何表达。",
    shadow: "只有心动还不够，关系仍需要现实承接。"
  },
  {
    id: 25,
    name: "戒指",
    en: "Ring",
    symbol: "○",
    keywords: ["承诺", "契约", "循环"],
    tone: "positive",
    category: "commitment",
    accent: "212, 168, 79",
    meaning: "承诺、合作或重复循环是这件事的核心结构。",
    advice: "看清你正在签下什么，也看清你想绑定什么。",
    shadow: "承诺带来稳定，也会带来义务。"
  },
  {
    id: 26,
    name: "书",
    en: "Book",
    symbol: "▤",
    keywords: ["秘密", "知识", "未知"],
    tone: "neutral",
    category: "secrets",
    accent: "113, 128, 151",
    meaning: "仍有未公开的信息，学习、调查或保密很重要。",
    advice: "先补齐知识，不要急着给未知贴标签。",
    shadow: "保密可以保护，也可能制造隔阂。"
  },
  {
    id: 27,
    name: "信",
    en: "Letter",
    symbol: "✉",
    keywords: ["文字", "通知", "记录"],
    tone: "neutral",
    category: "message",
    accent: "83, 137, 176",
    meaning: "文字、文件、通知或明确表达会成为关键证据。",
    advice: "把重要内容落到纸面或可追溯的记录里。",
    shadow: "字面信息未必包含全部语境。"
  },
  {
    id: 28,
    name: "男士",
    en: "Man",
    symbol: "♂",
    keywords: ["男性能量", "当事人", "主动"],
    tone: "neutral",
    category: "masculine",
    accent: "76, 154, 151",
    meaning: "主动、理性或某位关键男性角色正在被点亮。",
    advice: "看这个角色做了什么，而不是只听他说了什么。",
    shadow: "过度强调主动会忽略细腻感受。"
  },
  {
    id: 29,
    name: "女士",
    en: "Woman",
    symbol: "♀",
    keywords: ["女性能量", "当事人", "感受"],
    tone: "neutral",
    category: "feminine",
    accent: "189, 107, 115",
    meaning: "感受、接纳或某位关键女性角色正在被点亮。",
    advice: "听见内在感受，同时保留清醒判断。",
    shadow: "只照顾情绪，可能会延后必要行动。"
  },
  {
    id: 30,
    name: "百合",
    en: "Lily",
    symbol: "⚜",
    keywords: ["成熟", "和谐", "宁静"],
    tone: "positive",
    category: "harmony",
    accent: "185, 121, 84",
    meaning: "成熟、体面与长期秩序能让局面变得柔和。",
    advice: "放慢语气，用更成熟的方式处理欲望和边界。",
    shadow: "维持体面不等于压抑真实。"
  },
  {
    id: 31,
    name: "太阳",
    en: "Sun",
    symbol: "☉",
    keywords: ["成功", "清晰", "生命力"],
    tone: "positive",
    category: "success",
    accent: "212, 168, 79",
    meaning: "能量回升，事情有机会走向明朗和成功。",
    advice: "大胆站出来，把清楚的部分先做成。",
    shadow: "自信很好，但别让乐观替你省略细节。"
  },
  {
    id: 32,
    name: "月亮",
    en: "Moon",
    symbol: "☾",
    keywords: ["名望", "情绪", "直觉"],
    tone: "positive",
    category: "recognition",
    accent: "113, 128, 151",
    meaning: "情绪、直觉和外界认可都在影响判断。",
    advice: "尊重感受，也把它翻译成可执行的需求。",
    shadow: "太依赖氛围会让判断随情绪摇摆。"
  },
  {
    id: 33,
    name: "钥匙",
    en: "Key",
    symbol: "⚿",
    keywords: ["答案", "开启", "必然"],
    tone: "positive",
    category: "solution",
    accent: "212, 168, 79",
    meaning: "关键答案已经靠近，某个开口会让事情顺势展开。",
    advice: "抓住最关键的一步，别被旁枝拖走。",
    shadow: "找到钥匙后，仍然需要你亲手开门。"
  },
  {
    id: 34,
    name: "鱼",
    en: "Fish",
    symbol: "≋",
    keywords: ["财富", "流动", "丰盛"],
    tone: "positive",
    category: "abundance",
    accent: "76, 154, 151",
    meaning: "资源正在流动，金钱、机会或自由度与此相关。",
    advice: "让资源循环起来，别把丰盛锁死在一个渠道里。",
    shadow: "流动太大时，也需要清楚账目和边界。"
  },
  {
    id: 35,
    name: "锚",
    en: "Anchor",
    symbol: "⚓",
    keywords: ["稳定", "坚持", "工作"],
    tone: "positive",
    category: "stability",
    accent: "103, 116, 105",
    meaning: "稳定性和长期投入是这件事的支点。",
    advice: "把承诺落实到日程、流程和可持续的节奏。",
    shadow: "稳定如果失去弹性，也会变成停滞。"
  },
  {
    id: 36,
    name: "十字",
    en: "Cross",
    symbol: "✚",
    keywords: ["压力", "课题", "命题"],
    tone: "challenging",
    category: "burden",
    accent: "109, 91, 103",
    meaning: "这是一个较重的课题，需要诚实面对责任、信念或压力。",
    advice: "区分你该承担的，和你习惯替别人背的。",
    shadow: "痛苦有意义，但不必把痛苦当成唯一道路。"
  }
];

const extraCards = [
  {
    id: 37,
    name: "苹果",
    en: "Apple",
    symbol: "◍",
    keywords: ["诱因", "欲望", "选择"],
    tone: "neutral",
    category: "temptation",
    accent: "189, 107, 115",
    meaning: "看似甜美的选择正在吸引你，真正要看的不是诱惑本身，而是你为什么被它吸引。",
    advice: "承认渴望，再检查代价。",
    shadow: "如果只追求即时满足，后续容易出现反噬。"
  },
  {
    id: 38,
    name: "羔羊",
    en: "Lamb",
    symbol: "◔",
    keywords: ["柔软", "信任", "无害"],
    tone: "positive",
    category: "innocence",
    accent: "212, 168, 79",
    meaning: "柔软、善意或被保护的部分正在被看见。",
    advice: "让真诚留下来，但给真诚配上边界。",
    shadow: "过分退让会让别人误以为你没有底线。"
  },
  {
    id: 39,
    name: "照片",
    en: "Photo",
    symbol: "▧",
    keywords: ["记忆", "形象", "证据"],
    tone: "neutral",
    category: "memory",
    accent: "113, 128, 151",
    meaning: "过往影像、证据或他人眼中的样子正在影响判断。",
    advice: "回看记录，但不要被旧画面困住。",
    shadow: "怀旧会美化事实，也可能让你忽略当下变化。"
  },
  {
    id: 40,
    name: "游戏机",
    en: "Game Console",
    symbol: "▣",
    keywords: ["互动", "规则", "娱乐"],
    tone: "neutral",
    category: "play",
    accent: "76, 154, 151",
    meaning: "这件事带有游戏、测试或规则互动的性质。",
    advice: "先看清规则，再决定要不要继续玩。",
    shadow: "若只追求刺激，容易把真实需求藏在胜负后面。"
  },
  {
    id: 41,
    name: "衣柜",
    en: "Wardrobe",
    symbol: "▥",
    keywords: ["隐藏", "身份", "整理"],
    tone: "neutral",
    category: "concealment",
    accent: "185, 121, 84",
    meaning: "某些身份、选择或物品还没有被公开，需要整理后再呈现。",
    advice: "把藏着的东西分门别类，决定什么该留下、什么该拿出来。",
    shadow: "一直藏着会保护你，也会让别人无法真正理解你。"
  },
  {
    id: 42,
    name: "仙人掌",
    en: "Cactus",
    symbol: "⟡",
    keywords: ["防御", "耐旱", "刺"],
    tone: "challenging",
    category: "defense",
    accent: "125, 161, 113",
    meaning: "你或对方正在用防御保护脆弱部分，靠近需要更慢。",
    advice: "尊重保护机制，但不要让刺替你做所有决定。",
    shadow: "太强的防御会把支持也挡在外面。"
  },
  {
    id: 43,
    name: "旗帜",
    en: "Flag",
    symbol: "⚑",
    keywords: ["立场", "信号", "召集"],
    tone: "positive",
    category: "signal",
    accent: "174, 89, 68",
    meaning: "立场、目标或公开信号会让局面聚焦。",
    advice: "明确你代表什么，别让别人替你定义旗号。",
    shadow: "立场鲜明时，也要留出修正空间。"
  },
  {
    id: 44,
    name: "温泉",
    en: "Hot Spring",
    symbol: "♨",
    keywords: ["疗愈", "放松", "恢复"],
    tone: "positive",
    category: "healing",
    accent: "76, 154, 151",
    meaning: "恢复力正在回来，温和的环境比强行推进更有效。",
    advice: "先让身心回温，再谈下一步。",
    shadow: "舒服不等于问题已解决，恢复后仍要行动。"
  },
  {
    id: 45,
    name: "王冠",
    en: "Crown",
    symbol: "♛",
    keywords: ["权威", "荣耀", "资格"],
    tone: "positive",
    category: "authority",
    accent: "212, 168, 79",
    meaning: "权威、资格与被认可的位置正在成为重点。",
    advice: "承担你的分量，也确认这份荣耀是否符合你的价值。",
    shadow: "为了身份而硬撑，会让你远离真实需求。"
  },
  {
    id: 46,
    name: "火箭",
    en: "Rocket",
    symbol: "⇧",
    keywords: ["启动", "突破", "加速"],
    tone: "positive",
    category: "launch",
    accent: "83, 137, 176",
    meaning: "加速与突破的信号很强，事情可能突然进入执行期。",
    advice: "确认燃料和方向，再用速度打开局面。",
    shadow: "冲得太快会放大小偏差。"
  },
  {
    id: 47,
    name: "猫头鹰",
    en: "Owl",
    symbol: "◉",
    keywords: ["观察", "夜间", "智慧"],
    tone: "neutral",
    category: "wisdom",
    accent: "109, 91, 103",
    meaning: "需要安静观察，答案可能在别人忽略的暗处。",
    advice: "少一点即时反应，多一点深夜复盘。",
    shadow: "看得太多却不行动，会让洞察变成负担。"
  },
  {
    id: 48,
    name: "棋子",
    en: "Chess Piece",
    symbol: "♟",
    keywords: ["布局", "博弈", "位置"],
    tone: "neutral",
    category: "tactic",
    accent: "121, 126, 130",
    meaning: "每个人的位置、步数和交换条件都很关键。",
    advice: "别急着走最显眼的一步，先看三步之后。",
    shadow: "把一切都当博弈，会削弱真实连接。"
  }
];

const coverGlyphs = {
  1: "🐎",
  2: "🍀",
  3: "⛵",
  4: "🏠",
  5: "🌳",
  6: "☁️",
  7: "🐍",
  8: "⚰️",
  9: "💐",
  10: "🌾",
  11: "⛓️",
  12: "🐦",
  13: "🧸",
  14: "🦊",
  15: "🐻",
  16: "✨",
  17: "🪽",
  18: "🐕",
  19: "🗼",
  20: "🌿",
  21: "⛰️",
  22: "🛤️",
  23: "◦",
  24: "❤️",
  25: "💍",
  26: "📖",
  27: "✉️",
  28: "♂",
  29: "♀",
  30: "⚜️",
  31: "☀️",
  32: "🌙",
  33: "🗝️",
  34: "🐟",
  35: "⚓",
  36: "✝️",
  37: "🍎",
  38: "🕊️",
  39: "🖼️",
  40: "🎮",
  41: "🚪",
  42: "🌵",
  43: "🚩",
  44: "♨️",
  45: "👑",
  46: "🚀",
  47: "🦉",
  48: "♟️"
};

const toneLabels = {
  positive: "积极",
  neutral: "中性",
  challenging: "提醒"
};

const categoryProfiles = {
  movement: ["动作牌", "快速", "消息、邀请、外部推动先进入场域。"],
  luck: ["机会牌", "短期", "轻松的小窗口先打开，重点是及时接住。"],
  travel: ["空间牌", "中期", "距离、迁移、跨界或更大的视野正在改变答案。"],
  home: ["根基牌", "稳定", "安全感、住所、家庭或基础结构决定承接力。"],
  growth: ["长期牌", "缓慢", "身体、恢复、经验和时间会让结果逐渐成形。"],
  uncertainty: ["迷雾牌", "延迟", "信息不完整，情绪和误解需要先分离。"],
  hidden_risk: ["隐患牌", "迂回", "隐藏动机、诱惑或复杂关系需要谨慎辨认。"],
  ending: ["转化牌", "停顿", "旧阶段正在结束，空白期本身也是过程。"],
  gift: ["回馈牌", "短期", "善意、礼物、赞美或愉悦体验会软化局面。"],
  cut: ["决断牌", "突然", "切断、取舍和突发变化会把事情推向分界线。"],
  conflict: ["摩擦牌", "反复", "争执、压力和重复循环正在消耗能量。"],
  communication: ["沟通牌", "即时", "谈话、焦虑、多方声音和来回确认是重点。"],
  new: ["萌芽牌", "早期", "事情还小，还在学习和试探，需要保护潜力。"],
  strategy: ["策略牌", "观察", "利益结构、动机和自我保护需要被看见。"],
  power: ["资源牌", "持久", "资源、掌控、保护和权力关系正在定调。"],
  hope: ["愿景牌", "长期", "目标、灵感、远景和精神指引会给方向。"],
  change: ["变化牌", "渐进", "状态、环境或生活节奏正在换挡。"],
  loyalty: ["关系牌", "稳定", "信任、陪伴和长期可靠性比表面热度更重要。"],
  structure: ["结构牌", "长期", "制度、机构、距离和边界影响处理方式。"],
  community: ["公开牌", "外部", "社交、公众、圈层和平台会扩大影响。"],
  obstacle: ["阻碍牌", "延迟", "现实卡点需要绕路、拆分或等待时机。"],
  choice: ["岔路牌", "可变", "选择、自由和路径代价需要被放到桌面上。"],
  drain: ["耗损牌", "渐漏", "小损耗正在积累，越早查漏越好。"],
  love: ["情感牌", "当下", "真心、热情和在乎是核心，但需要现实承接。"],
  commitment: ["契约牌", "循环", "承诺、绑定、合作和重复模式构成主轴。"],
  secrets: ["隐藏牌", "未知", "知识、秘密或未公开信息需要进一步打开。"],
  message: ["文本牌", "很快", "文件、通知、记录和明确表达会成为证据。"],
  masculine: ["人物牌", "当事人", "主动、理性或某位关键男性角色被点亮。"],
  feminine: ["人物牌", "当事人", "感受、接纳或某位关键女性角色被点亮。"],
  harmony: ["成熟牌", "缓和", "体面、成熟、宁静和长期秩序能降噪。"],
  success: ["成功牌", "明朗", "清晰、生命力和被照亮的结果正在上升。"],
  recognition: ["感受牌", "周期", "直觉、情绪、名望和外界反馈影响判断。"],
  solution: ["关键牌", "突破", "核心解法已经露出，接下来要亲手打开。"],
  abundance: ["流动牌", "持续", "金钱、资源、机会和自由度正在流动。"],
  stability: ["锚定牌", "长期", "工作、坚持、节奏和可持续投入是支点。"],
  burden: ["课题牌", "沉重", "责任、信念和压力需要被拆分，而不是全扛。"],
  temptation: ["欲望牌", "短期", "诱因很甜，真正的问题是代价和边界。"],
  innocence: ["柔软牌", "当下", "信任、善意和被保护的部分需要被珍惜。"],
  memory: ["影像牌", "回溯", "记录、旧画面和他人印象正在影响当前判断。"],
  play: ["互动牌", "循环", "规则、试探、娱乐和胜负感会改变投入方式。"],
  concealment: ["整理牌", "内收", "隐藏身份、空间整理和未公开选择是重点。"],
  defense: ["防御牌", "缓慢", "保护机制很强，靠近需要耐心和边界。"],
  signal: ["立场牌", "公开", "目标、旗号、阵营和公开信号会召集资源。"],
  healing: ["恢复牌", "渐进", "放松、疗愈和回温比强行推动更有帮助。"],
  authority: ["权威牌", "成熟", "资格、荣誉、位置和责任需要相互匹配。"],
  launch: ["启动牌", "加速", "突破与执行力上升，但方向校准很重要。"],
  wisdom: ["观察牌", "夜间", "安静洞察、复盘和暗处信息会给答案。"],
  tactic: ["布局牌", "分步", "位置、交换条件和后续步数比单步输赢更关键。"]
};

[...cards, ...extraCards].forEach((card) => {
  card.cover = coverGlyphs[card.id] || card.symbol;
});

const spreads = {
  daily: {
    title: "每日一牌",
    positions: ["主牌"]
  },
  three: {
    title: "三牌线",
    positions: ["背景", "主牌", "走向"]
  },
  five: {
    title: "五牌建议",
    positions: ["起因", "近因", "主牌", "阻力", "建议"]
  },
  nine: {
    title: "九宫格",
    positions: ["外部氛围", "上方压力", "未来信号", "过去", "主牌", "未来", "根基", "下方资源", "结果"]
  }
};

const topicNames = {
  general: "综合",
  love: "感情",
  career: "事业",
  money: "金钱",
  social: "人际",
  self: "人生方向"
};

const topicLenses = {
  general: {
    movement: "先看正在靠近的新动向，再决定是否要接住它。",
    luck: "小机会会打开轻松的入口，适合先试一下。",
    travel: "答案来自更大的视野，距离会改变你的判断。",
    home: "稳定与归属是优先级，先确认什么能让你安心。",
    growth: "这件事是长期题，需要用养护而不是催促来处理。",
    uncertainty: "关键仍在迷雾里，先收集事实。",
    hidden_risk: "局面有绕行或隐藏动机，保持警觉。",
    ending: "旧阶段正在收束，留白本身也是答案。",
    gift: "善意和回馈会让局面柔软下来。",
    cut: "需要果断切换策略，拖延会变贵。",
    conflict: "重复拉扯是重点，先停止旧循环。",
    communication: "多方声音会浮现，清楚表达比反复解释更重要。",
    new: "事情还在早期，保护潜力比追求成熟更重要。",
    strategy: "用策略处理，不要只凭直觉冲进去。",
    power: "资源与主导权很关键，别轻易让出筹码。",
    hope: "愿景可行，但要拆成步骤。",
    change: "变化已经开始，适合顺势调整。",
    loyalty: "可靠支持会出现，也要看承诺是否相互。",
    structure: "规则、距离和边界正在定调。",
    community: "公开场域或圈层会带来线索。",
    obstacle: "现实阻力存在，绕路比硬碰更有效。",
    choice: "分岔口已经出现，选择比等待更重要。",
    drain: "细节正在漏能量，先止损。",
    love: "真心是核心，但仍需要现实承接。",
    commitment: "契约和承诺是关键，看清绑定条件。",
    secrets: "信息还没完全打开，先补知识。",
    message: "文字、文件或正式表达会成为关键。",
    masculine: "主动方或男性能量值得关注。",
    feminine: "感受与接纳正在提醒你。",
    harmony: "成熟处理能带来和缓局面。",
    success: "清晰与成功能量上升，可以更大胆。",
    recognition: "直觉与外界反馈都在影响方向。",
    solution: "关键答案已经露出一角。",
    abundance: "资源在流动，注意渠道和边界。",
    stability: "长期投入会带来稳定。",
    burden: "重课题需要诚实拆分责任。"
  },
  love: {
    movement: "关系里会有新的消息或邀约，回应速度会影响温度。",
    luck: "轻松互动比深挖答案更有利。",
    travel: "距离、异地或不同生活节奏会成为关系主题。",
    home: "安全感、相处空间和家庭议题很重要。",
    growth: "关系需要慢慢养，不适合催促定论。",
    uncertainty: "暧昧或误解还没散，先别把猜测当结论。",
    hidden_risk: "关系里可能有试探、隐瞒或第三种动机。",
    ending: "某种相处模式需要结束，才有新空间。",
    gift: "示好、约会和被欣赏的感觉会增强。",
    cut: "需要说清边界，或果断停止伤人的互动。",
    conflict: "反复争执说明旧问题还没真正处理。",
    communication: "聊天很多，但要留意焦虑是否盖过真心。",
    new: "关系还嫩，慢一点会更稳。",
    strategy: "看对方行动和动机，不只听甜话。",
    power: "保护欲、占有欲或掌控感可能放大。",
    hope: "对未来仍有期待，可以谈愿景。",
    change: "关系状态可能升级、搬动或换节奏。",
    loyalty: "信任和陪伴是最重要的答案。",
    structure: "边界、距离或身份定义需要更正式。",
    community: "社交圈、公开关系或朋友意见会影响走向。",
    obstacle: "现实距离或心理防线让靠近变慢。",
    choice: "你需要在关系选项或相处方式里做决定。",
    drain: "小失望正在消耗亲密感。",
    love: "心动是真的，接下来要看能否被行动承接。",
    commitment: "承诺、复合或关系定义会成为焦点。",
    secrets: "有些话还没说破，别急着逼问。",
    message: "一段文字、通知或对话会改变判断。",
    masculine: "主动方的态度和行动很关键。",
    feminine: "你的感受正在给出很准的线索。",
    harmony: "成熟、温柔和体面会让关系降温后回稳。",
    success: "关系有变明朗的机会。",
    recognition: "被看见、被珍惜的需求正在浮上来。",
    solution: "关键突破在一个明确选择或清楚表达里。",
    abundance: "情感能量很流动，但要避免泛滥和不定。",
    stability: "长期陪伴比短暂热烈更重要。",
    burden: "关系里有沉重课题，别独自承担全部。"
  },
  career: {
    movement: "工作上会有新任务、消息或面试邀约。",
    luck: "小机会值得试水，别等完美时机。",
    travel: "跨领域、外部市场或远程协作会带来机会。",
    home: "团队根基、办公环境或稳定岗位是重点。",
    growth: "职业发展是长期积累，别急于求成。",
    uncertainty: "职责、信息或方向暂不清晰。",
    hidden_risk: "职场关系或利益结构需要谨慎观察。",
    ending: "一个项目、岗位阶段或旧流程在收尾。",
    gift: "认可、机会或友善合作会出现。",
    cut: "需要快速取舍，砍掉低效任务。",
    conflict: "重复争论或流程摩擦正在消耗团队。",
    communication: "会议、沟通和多方意见是关键。",
    new: "新项目还在试验期，给它成长空间。",
    strategy: "靠策略与判断胜出，不靠蛮力。",
    power: "上级、资源和预算掌控会影响结果。",
    hope: "愿景清楚，适合做规划和定位。",
    change: "岗位、项目或工作方式可能调整。",
    loyalty: "可靠同事或长期客户会帮你稳住局面。",
    structure: "制度、审批、合同或组织层级很重要。",
    community: "曝光、人脉和行业场域会带来机会。",
    obstacle: "推进慢是现实问题，需要拆路障。",
    choice: "职业分岔口出现，比较路径的实际代价。",
    drain: "小问题正在消耗效率，先修漏洞。",
    love: "热情能带来动力，但也要看专业回报。",
    commitment: "合同、合作或长期绑定需要仔细看条款。",
    secrets: "还有隐藏信息，适合学习、调研或保密推进。",
    message: "邮件、文件或通知会成为节点。",
    masculine: "主动推动者或男性角色会影响局面。",
    feminine: "感受、协作和接纳度也影响成果。",
    harmony: "资历、成熟度和耐心会带来优势。",
    success: "有被看见和达成目标的机会。",
    recognition: "名声、评价和作品呈现很重要。",
    solution: "关键突破点已经出现。",
    abundance: "收入、资源和商业流量是重点。",
    stability: "长期岗位、流程和执行节奏会带来安全感。",
    burden: "责任较重，需要分清优先级。"
  },
  money: {
    movement: "钱款或机会会开始流动，但要确认来源。",
    luck: "短期小财或优惠可把握。",
    travel: "跨地区、物流、海外或远方资源影响财务。",
    home: "住房、家庭支出或固定资产是重点。",
    growth: "适合长期储蓄和慢慢累积。",
    uncertainty: "账目或预期还不清楚，先别冲动。",
    hidden_risk: "财务里有隐藏成本或不透明条件。",
    ending: "某笔支出、债务或旧财务模式需要停止。",
    gift: "礼物、奖金或轻松回报会出现。",
    cut: "果断止损或削减开销。",
    conflict: "钱容易引发争执，规则要写清楚。",
    communication: "付款、报价或协商需要确认细节。",
    new: "新财路刚开始，别投入过猛。",
    strategy: "理财或谈价需要策略。",
    power: "大额资源、资本或掌控权是核心。",
    hope: "财务目标可以更清晰地规划。",
    change: "收入结构或支出结构会调整。",
    loyalty: "可靠合作、老客户或稳定关系带来支持。",
    structure: "银行、税务、合同或制度影响钱流。",
    community: "人脉、市场和公开渠道带来财务机会。",
    obstacle: "资金推进会慢，需要耐心解决卡点。",
    choice: "财务选择摆在面前，别只看收益。",
    drain: "小额漏财正在累积，先查账。",
    love: "情感消费或价值感需求影响用钱。",
    commitment: "长期合约、订阅、贷款或绑定要审慎。",
    secrets: "隐藏条款、未公开信息或专业知识很重要。",
    message: "账单、合同、通知和凭证是关键。",
    masculine: "主动谈判或某位男性角色影响财务。",
    feminine: "安全感和消费欲望需要被看见。",
    harmony: "成熟稳定的财务安排更有利。",
    success: "有盈利、回报或现金流变亮的信号。",
    recognition: "声誉和作品价值会转化为收入。",
    solution: "关键财务解法已经出现。",
    abundance: "资源丰盛，但流动越大越要记账。",
    stability: "长期收入和稳定配置最值得重视。",
    burden: "债务、压力或责任型支出需要拆解。"
  },
  social: {
    movement: "会有人主动带来消息或连接。",
    luck: "轻松的缘分和临时邀约值得接住。",
    travel: "远方关系、跨圈层交流会影响你。",
    home: "熟人、家人或亲密小圈子是重点。",
    growth: "关系需要时间培养。",
    uncertainty: "对方态度或群体气氛还不明朗。",
    hidden_risk: "需要留意绕话、试探或利益交换。",
    ending: "一段关系模式或社交阶段正在淡出。",
    gift: "赞美、礼物或被欢迎的体验会出现。",
    cut: "该设边界时要设边界。",
    conflict: "反复争执容易把关系拉疲。",
    communication: "对话很多，别让闲言代替真相。",
    new: "新朋友或新圈层正在出现。",
    strategy: "社交里要看动机，也要保护自己。",
    power: "有影响力的人物会成为关键。",
    hope: "共同愿景能拉近距离。",
    change: "圈层和关系位置会调整。",
    loyalty: "真朋友和可靠同伴值得珍惜。",
    structure: "边界、身份和正式规则很重要。",
    community: "社群、活动和公开场合是主场。",
    obstacle: "距离或立场差异造成阻碍。",
    choice: "你需要选择靠近谁、远离谁。",
    drain: "小摩擦正在消耗关系。",
    love: "真诚好感是连接的中心。",
    commitment: "合作承诺或关系绑定会被提上来。",
    secrets: "有话没说开，先观察。",
    message: "一条消息会触发后续走向。",
    masculine: "主动方或男性角色很突出。",
    feminine: "感受型角色或女性角色很突出。",
    harmony: "成熟体面的相处方式最有利。",
    success: "社交能见度上升。",
    recognition: "你需要被看见，也会收到评价。",
    solution: "关键关系节点已经出现。",
    abundance: "人脉资源流动起来。",
    stability: "长期稳定的关系比热闹更可靠。",
    burden: "关系责任过重，别替所有人扛。"
  },
  self: {
    movement: "内在已经准备好向前一步。",
    luck: "给自己一点轻松，会比逼迫更有效。",
    travel: "换环境、学习或远行会刷新你。",
    home: "你正在寻找真正让自己安定的根。",
    growth: "成长是慢功夫，身体和心都需要时间。",
    uncertainty: "迷茫不是倒退，而是需要重新看清。",
    hidden_risk: "先看见自己的欲望和防御。",
    ending: "一个旧身份正在结束。",
    gift: "你值得接收赞美和美好的东西。",
    cut: "果断割舍消耗你的习惯。",
    conflict: "内在重复的拉扯需要换一种处理方式。",
    communication: "把心里的噪音写下来，会更清楚。",
    new: "允许自己笨拙地开始。",
    strategy: "自我保护要聪明，但别把心关死。",
    power: "拿回主导权，也照顾自己的力量感。",
    hope: "你的愿景仍然有光。",
    change: "你正在换一种生活节奏。",
    loyalty: "对自己保持忠诚。",
    structure: "边界和规律会保护你。",
    community: "合适的圈层会滋养你。",
    obstacle: "阻力是真实的，但它不是你的全部。",
    choice: "你可以选择更像自己的道路。",
    drain: "先处理漏能量的小事。",
    love: "承认你的喜欢、渴望与热情。",
    commitment: "重新确认你愿意对什么长期负责。",
    secrets: "还有一部分自己等待被理解。",
    message: "记录下来的想法会给你答案。",
    masculine: "练习主动表达和行动。",
    feminine: "练习接纳感受和需要。",
    harmony: "成熟不是压抑，而是温柔地自持。",
    success: "你的生命力正在回来。",
    recognition: "你渴望被看见，也需要先看见自己。",
    solution: "钥匙在你已经知道却还没执行的地方。",
    abundance: "你的资源比想象中更流动。",
    stability: "稳定节奏会支撑你。",
    burden: "卸下不属于你的重量。"
  }
};

const exactCombos = new Map([
  ["24-25", "心与戒指把情感推向承诺，适合谈关系定义、长期合作或共同约定。"],
  ["7-27", "蛇与信提醒你核对文字信息，漂亮话、暗示或片段消息里可能有误导。"],
  ["6-31", "云与太阳说明迷雾会散，但需要先熬过一段不确定。"],
  ["4-5", "房子与树强调根基、家族和长期稳定，答案在熟悉的土壤里生长。"],
  ["3-34", "船与鱼带来跨界资源、外地机会或资金流动，视野越大，水面越宽。"],
  ["10-33", "镰刀与钥匙是快刀开锁，果断切掉多余部分后，关键答案会出现。"],
  ["21-22", "山与道路表示选择被现实阻力挡住，先找可行路径，再谈理想选项。"],
  ["23-34", "老鼠与鱼指向财务漏损或资源流失，越早查账越好。"],
  ["16-32", "星星与月亮让愿景和直觉互相照亮，适合作品、曝光和灵感型决定。"],
  ["8-17", "棺材与鹳表示结束带来迁动，旧阶段收尾后，新节奏会接上。"],
  ["14-18", "狐狸与狗要分辨忠诚与利益，可靠的人经得起行动检验。"],
  ["11-12", "鞭子与鸟容易形成焦虑型争论，少说气话，多说规则。"],
  ["19-20", "高塔与花园连接机构与公众，适合处理平台、组织、社群或公开身份。"],
  ["26-27", "书与信提示隐藏信息将通过文字浮出，文件、记录和学习资料很关键。"],
  ["28-29", "男士与女士把焦点落在一组关系、一段对照或双方互动。"],
  ["30-31", "百合与太阳带来成熟而明亮的结果，坦荡和体面会赢。"],
  ["35-36", "锚与十字表示长期责任偏重，需要坚持，也需要减负。"],
  ["9-24", "花束与心是温柔示好，喜欢会通过礼物、赞美或体贴表现出来。"],
  ["2-15", "四叶草与熊是小机会遇到大资源，适合抓住贵人或预算窗口。"],
  ["1-3", "骑士与船带来远方消息、出行计划或跨地域进展。"],
  ["5-33", "树与钥匙说明长期修复有了关键解法，耐心会换来开口。"],
  ["7-26", "蛇与书指向隐藏动机或未公开知识，先查清楚再信任。"],
  ["18-25", "狗与戒指是可靠承诺，适合长期合作、忠诚关系和稳定约定。"],
  ["33-34", "钥匙与鱼是财务或资源方面的突破，关键渠道会打开。"],
  ["25-27", "戒指与信强调合同、承诺文本、申请或正式通知。"],
  ["22-33", "道路与钥匙说明真正的答案藏在一次清楚选择里。"],
  ["6-12", "云与鸟容易带来焦虑沟通，先确认事实，再回应情绪。"],
  ["20-24", "花园与心把好感带到公开场合，社交、活动或朋友圈有情感线索。"],
  ["15-34", "熊与鱼是大资源和大现金流，也提醒你别被压力推着走。"],
  ["3-4", "船与房子指向搬家、远方家庭、跨城稳定或对归属感的重新定义。"],
  ["7-37", "蛇与苹果把诱惑和隐藏动机叠在一起，越甜的入口越需要核对真实代价。"],
  ["18-38", "狗与羔羊强调可信任的温柔支持，关系里适合保留真诚，也要保留边界。"],
  ["32-39", "月亮与照片让旧形象、记忆和外界评价变得敏感，适合回看记录但不要沉迷旧画面。"],
  ["13-40", "孩子与游戏机让事情处在试验和互动阶段，先当成练习局，不急着定终局。"],
  ["26-41", "书与衣柜都指向隐藏信息，秘密需要整理，而不是一次性全部摊开。"],
  ["21-42", "山与仙人掌说明阻力和防御同时存在，靠近要慢，推进要找绕路。"],
  ["43-45", "旗帜与王冠把立场和权威连接起来，公开表达会带来位置，也会带来责任。"],
  ["5-44", "树与温泉是一组恢复信号，长期修复需要温和环境和持续照料。"],
  ["1-46", "骑士与火箭让消息和行动一起加速，适合启动，但要先校准方向。"],
  ["26-47", "书与猫头鹰适合深度学习、夜间复盘和暗处观察，答案不在最吵的地方。"],
  ["14-48", "狐狸与棋子提示策略博弈，先看利益位置，再决定下一步怎么走。"]
]);

const state = {
  spread: "daily",
  deck: [...cards],
  currentReading: null
};

const els = {
  body: document.body,
  question: document.querySelector("#question"),
  topic: document.querySelector("#topic"),
  deckMode: document.querySelector("#deckMode"),
  drawButton: document.querySelector("#drawButton"),
  shuffleButton: document.querySelector("#shuffleButton"),
  saveButton: document.querySelector("#saveButton"),
  spreadTitle: document.querySelector("#spreadTitle"),
  readingStamp: document.querySelector("#readingStamp"),
  readingColumn: document.querySelector("#readingColumn"),
  cardsStage: document.querySelector("#cardsStage"),
  polarityOverview: document.querySelector("#polarityOverview"),
  polarityEmoji: document.querySelector("#polarityEmoji"),
  polarityTitle: document.querySelector("#polarityTitle"),
  polarityText: document.querySelector("#polarityText"),
  summaryText: document.querySelector("#summaryText"),
  deepList: document.querySelector("#deepList"),
  comboList: document.querySelector("#comboList"),
  cardNotes: document.querySelector("#cardNotes"),
  emptyState: document.querySelector("#emptyState"),
  readingOutput: document.querySelector("#readingOutput"),
  deckMeter: document.querySelector(".deck-meter"),
  historyDrawer: document.querySelector("#historyDrawer"),
  historyList: document.querySelector("#historyList"),
  historyToggle: document.querySelector("#historyToggle"),
  closeHistory: document.querySelector("#closeHistory"),
  clearHistory: document.querySelector("#clearHistory"),
  themeToggle: document.querySelector("#themeToggle")
};

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function getActiveDeck() {
  return els.deckMode.value === "akashic" ? [...cards, ...extraCards] : cards;
}

function drawCards(count) {
  state.deck = shuffle(getActiveDeck());
  return state.deck.slice(0, count);
}

function padCardNumber(id) {
  return String(id).padStart(2, "0");
}

function buildCard(card, position, index, revealed = false) {
  const keywords = card.keywords.join(" · ");
  return `
    <div class="card-slot">
      <div class="position-label">${position}</div>
      <button class="oracle-card ${revealed ? "is-revealed" : ""}" type="button" style="--accent-rgb:${card.accent}" data-card-index="${index}" aria-label="${card.name}">
        <span class="card-inner">
          <span class="card-face card-back">
            <span class="card-back-mark">☾</span>
          </span>
          <span class="card-face card-front">
            <span class="card-number"><span>${padCardNumber(card.id)}</span><span>${card.en}</span></span>
            <span class="card-art">
              <span class="art-glyph">${card.cover || card.symbol}</span>
              <span class="art-title">${card.name}</span>
            </span>
            <span class="card-name"><strong>${card.name}</strong><span>${keywords}</span></span>
          </span>
        </span>
      </button>
    </div>
  `;
}

function syncSpreadLayout(spread) {
  els.readingColumn.className = `reading-column spread-${spread}`;
}

function renderCards(reading, revealed = false) {
  const spread = spreads[reading.spread];
  syncSpreadLayout(reading.spread);
  els.cardsStage.className = `cards-stage ${reading.spread}`;
  els.cardsStage.innerHTML = reading.cards
    .map((card, index) => buildCard(card, spread.positions[index], index, revealed))
    .join("");

  els.cardsStage.querySelectorAll(".oracle-card").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("is-revealed");
    });
  });
}

function revealCards() {
  els.cardsStage.querySelectorAll(".oracle-card").forEach((card, index) => {
    window.setTimeout(() => {
      card.classList.add("is-revealed");
    }, 180 + index * 140);
  });
}

function getToneSummary(cardsForReading) {
  const counts = cardsForReading.reduce(
    (acc, card) => {
      acc[card.tone] += 1;
      return acc;
    },
    { positive: 0, neutral: 0, challenging: 0 }
  );

  if (counts.positive > counts.challenging && counts.positive >= counts.neutral) {
    return "整体偏向打开与推进";
  }
  if (counts.challenging > counts.positive) {
    return "整体先要求你处理阻力和消耗";
  }
  return "整体处在观察、选择与调整之间";
}

function getToneCounts(cardsForReading) {
  return cardsForReading.reduce(
    (acc, card) => {
      acc[card.tone] += 1;
      return acc;
    },
    { positive: 0, neutral: 0, challenging: 0 }
  );
}

function getPolarity(reading) {
  const counts = getToneCounts(reading.cards);
  const total = reading.cards.length;
  const score = counts.positive - counts.challenging;
  const mainCard = reading.cards[getMainCardIndex(reading)];
  const mainToneText = toneLabels[mainCard.tone];
  const ratio = score / total;

  if (ratio >= 0.45) {
    return {
      className: "is-positive",
      emoji: "☀️",
      title: "整体牌面：积极",
      text: `积极牌 ${counts.positive} 张，中性牌 ${counts.neutral} 张，提醒牌 ${counts.challenging} 张。主牌${mainCard.name}为${mainToneText}能量，整组牌更偏向打开、推进和获得支持。`
    };
  }

  if (score > 0) {
    return {
      className: "is-positive",
      emoji: "🌤️",
      title: "整体牌面：中性偏积极",
      text: `积极牌 ${counts.positive} 张，中性牌 ${counts.neutral} 张，提醒牌 ${counts.challenging} 张。牌面有机会，但不是无条件顺利，要看你能否顺着主牌${mainCard.name}行动。`
    };
  }

  if (score === 0) {
    return {
      className: "is-balanced",
      emoji: "⚖️",
      title: "整体牌面：中性",
      text: `积极牌 ${counts.positive} 张，中性牌 ${counts.neutral} 张，提醒牌 ${counts.challenging} 张。牌面没有一边倒，主牌${mainCard.name}更像关键变量，结果取决于后续选择。`
    };
  }

  if (ratio <= -0.45) {
    return {
      className: "is-negative",
      emoji: "⛈️",
      title: "整体牌面：消极",
      text: `积极牌 ${counts.positive} 张，中性牌 ${counts.neutral} 张，提醒牌 ${counts.challenging} 张。提醒牌明显占上风，主牌${mainCard.name}要求先处理压力、阻碍或消耗，再谈推进。`
    };
  }

  return {
    className: "is-negative",
    emoji: "🌥️",
    title: "整体牌面：中性偏消极",
    text: `积极牌 ${counts.positive} 张，中性牌 ${counts.neutral} 张，提醒牌 ${counts.challenging} 张。牌面不是完全没机会，但阻力比助力更明显，主牌${mainCard.name}提示先降风险。`
  };
}

function getThemeLine(card, topic) {
  const lens = topicLenses[topic] || topicLenses.general;
  return lens[card.category] || topicLenses.general[card.category] || card.meaning;
}

function getCardProfile(card) {
  const [kind, tempo, focus] = categoryProfiles[card.category] || ["概念牌", "随牌阵", card.meaning];
  return { kind, tempo, focus };
}

function cleanEnding(text) {
  return String(text || "").replace(/[。！？；,.，;!?\s]+$/u, "");
}

function summarizeNames(cardsForReading) {
  return cardsForReading.map((card) => card.name).join("、");
}

function buildDeepInsights(reading) {
  const cardsForReading = reading.cards;
  const center = cardsForReading[Math.floor(cardsForReading.length / 2)];
  const first = cardsForReading[0];
  const last = cardsForReading[cardsForReading.length - 1];
  const centerProfile = getCardProfile(center);
  const firstProfile = getCardProfile(first);
  const lastProfile = getCardProfile(last);
  const counts = cardsForReading.reduce(
    (acc, card) => {
      acc[card.tone] += 1;
      return acc;
    },
    { positive: 0, neutral: 0, challenging: 0 }
  );
  const pressureCards = cardsForReading.filter((card) => card.tone === "challenging");
  const supportCards = cardsForReading.filter((card) => card.tone === "positive");
  const topicName = topicNames[reading.topic];

  const insights = [
    {
      title: `${center.name} · 核心课题`,
      text: `${centerProfile.kind}，时间感偏${centerProfile.tempo}。${centerProfile.focus} 放到${topicName}里看，${getThemeLine(center, reading.topic)}`
    },
    {
      title: "能量结构",
      text: `这组牌里积极牌 ${counts.positive} 张，中性牌 ${counts.neutral} 张，提醒牌 ${counts.challenging} 张。${
        supportCards.length ? `可借力的位置在${summarizeNames(supportCards)}。` : "这次更像观察局，先别急着求外部助力。"
      } ${
        pressureCards.length ? `需要小心的地方是${summarizeNames(pressureCards)}。` : "阻力不重，重点在行动节奏。"
      }`
    },
    {
      title: "时间与推进",
      text: `开端由${first.name}带出，节奏偏${firstProfile.tempo}；落点由${last.name}收束，节奏偏${lastProfile.tempo}。如果现实还没动，先看${firstProfile.focus}`
    },
    {
      title: "盲点追问",
      text: `${center.shadow} 可以追问自己：我现在最想确认的是事实、承诺、情绪，还是安全感？把问题说窄，牌面会更准。`
    }
  ];

  if (reading.spread === "nine") {
    const vertical = [cardsForReading[1], cardsForReading[4], cardsForReading[7]];
    const horizontal = [cardsForReading[3], cardsForReading[4], cardsForReading[5]];
    insights.push({
      title: "九宫轴线",
      text: `纵轴${summarizeNames(vertical)}看内在压力与根基，横轴${summarizeNames(horizontal)}看过去到未来的现实走向。中心牌${center.name}是两条轴线的交汇点。`
    });
  }

  return insights;
}

function getPairKey(a, b) {
  return [a.id, b.id].sort((left, right) => left - right).join("-");
}

function hasCategory(card, categories) {
  return categories.includes(card.category);
}

function genericCombo(a, b, topic) {
  const topicName = topicNames[topic];
  const obstacleCategories = ["uncertainty", "hidden_risk", "ending", "cut", "conflict", "obstacle", "drain", "burden", "defense", "temptation"];
  const resourceCategories = ["luck", "gift", "power", "hope", "loyalty", "success", "solution", "abundance", "stability", "healing", "authority", "signal"];
  const relationCategories = ["love", "commitment", "loyalty", "harmony", "gift", "innocence"];
  const movementCategories = ["movement", "travel", "change", "choice", "message", "launch"];
  const infoCategories = ["communication", "message", "secrets", "recognition", "memory", "concealment", "wisdom", "tactic", "play"];

  if (hasCategory(a, obstacleCategories) && hasCategory(b, resourceCategories)) {
    return `${a.name}先指出卡点，${b.name}给出可用资源；${topicName}上适合先止损，再借力推进。`;
  }
  if (hasCategory(b, obstacleCategories) && hasCategory(a, resourceCategories)) {
    return `${a.name}带来助力，但${b.name}提醒你别忽略隐性代价；${topicName}上要边推进边校准。`;
  }
  if (hasCategory(a, relationCategories) || hasCategory(b, relationCategories)) {
    return `${a.name}与${b.name}把关系质量放到台前；真诚之外，还要看承诺、边界和行动是否一致。`;
  }
  if (hasCategory(a, movementCategories) || hasCategory(b, movementCategories)) {
    return `${a.name}连接${b.name}，说明事情正在转向；别只看当下，留意下一步会把你带到哪里。`;
  }
  if (hasCategory(a, infoCategories) || hasCategory(b, infoCategories)) {
    return `${a.name}与${b.name}强调信息整理；说出口、写下来、查清楚，会比反复猜测更有用。`;
  }
  return `${a.name}与${b.name}互相补充：前者给出情境，后者给出落点，把两张牌放在一起看会更准确。`;
}

function getCombos(reading) {
  if (reading.cards.length === 1) {
    const card = reading.cards[0];
    return [
      {
        title: `${card.name}的核心提醒`,
        text: `${card.meaning} ${card.advice}`
      }
    ];
  }

  const pairs = [];
  for (let index = 0; index < reading.cards.length - 1; index += 1) {
    const first = reading.cards[index];
    const second = reading.cards[index + 1];
    const key = getPairKey(first, second);
    pairs.push({
      title: `${first.name} + ${second.name}`,
      text: exactCombos.get(key) || genericCombo(first, second, reading.topic)
    });
  }

  if (reading.spread === "nine") {
    const center = reading.cards[4];
    pairs.unshift({
      title: `九宫核心：${center.name}`,
      text: `${center.name}坐在中央，说明这次解读的重心是：${getThemeLine(center, reading.topic)}`
    });
  }

  return pairs.slice(0, 5);
}

function getMainCardIndex(reading) {
  if (reading.spread === "daily") return 0;
  if (reading.spread === "three") return 1;
  if (reading.spread === "five") return 2;
  if (reading.spread === "nine") return 4;
  return Math.floor(reading.cards.length / 2);
}

function getQuestionMode(question) {
  if (/会不会|是否|能不能|可不可以|要不要|该不该|有没有|是不是|能否/.test(question)) {
    return "yesNo";
  }
  if (/怎么|如何|怎么办|怎样|建议|方向|下一步/.test(question)) {
    return "advice";
  }
  if (/关系|感情|喜欢|复合|联系|他|她|爱/.test(question)) {
    return "relationship";
  }
  return "open";
}

function getVerdict(reading, mainCard) {
  const last = reading.cards[reading.cards.length - 1];
  const positiveScore = reading.cards.filter((card) => card.tone === "positive").length;
  const challengeScore = reading.cards.filter((card) => card.tone === "challenging").length;
  const mainProfile = getCardProfile(mainCard);

  if (mainCard.tone === "challenging" && challengeScore >= positiveScore) {
    return `偏向谨慎或暂缓。主牌${mainCard.name}本身属于${mainProfile.kind}，说明答案不是简单推进，而是先处理${mainCard.keywords.join("、")}背后的问题：${cleanEnding(mainProfile.focus)}。`;
  }
  if (last.tone === "challenging" && mainCard.tone !== "positive") {
    return `可以继续观察，但不宜急着定局。尾牌${last.name}把后续压力抬出来，表示事情会走到一个需要耐心处理的卡点。`;
  }
  if (mainCard.tone === "positive" && positiveScore >= challengeScore) {
    return `偏向可以推进。主牌${mainCard.name}给出正向核心，说明这件事不是没有门，关键是围绕${mainCard.keywords.join("、")}来打开。`;
  }
  if (last.tone === "positive") {
    return `有改善空间。虽然过程未必直线，但尾牌${last.name}给出较好的落点，结果更看你能否把主牌的提醒落实。`;
  }
  return `答案偏中性，需要根据行动调整。主牌${mainCard.name}不是直接说成败，而是在指出真正该处理的焦点。`;
}

function getSpreadContext(reading, mainIndex) {
  const cardsForReading = reading.cards;
  if (reading.spread === "daily") {
    return {
      before: [],
      after: [],
      axis: []
    };
  }

  if (reading.spread === "nine") {
    return {
      before: [cardsForReading[3]],
      after: [cardsForReading[5]],
      axis: [
        { title: "横轴", cards: [cardsForReading[3], cardsForReading[4], cardsForReading[5]], meaning: "从过去、主牌到未来，显示事情在现实层面的推进路径。" },
        { title: "纵轴", cards: [cardsForReading[1], cardsForReading[4], cardsForReading[7]], meaning: "从上方压力、主牌到下方资源，显示内在压力和可用支撑。" },
        { title: "四角", cards: [cardsForReading[0], cardsForReading[2], cardsForReading[6], cardsForReading[8]], meaning: "四角像环境边界，说明这件事被什么氛围包住。" }
      ]
    };
  }

  return {
    before: cardsForReading.slice(0, mainIndex),
    after: cardsForReading.slice(mainIndex + 1),
    axis: []
  };
}

function describeCardList(cardsForReading, topic) {
  if (!cardsForReading.length) return "";
  return cardsForReading
    .map((card) => `${card.name}代表${cleanEnding(getThemeLine(card, topic))}`)
    .join("；");
}

function describeMainPairs(reading, mainIndex) {
  const mainCard = reading.cards[mainIndex];
  const left = reading.cards[mainIndex - 1];
  const right = reading.cards[mainIndex + 1];
  const parts = [];

  if (left) {
    const key = getPairKey(left, mainCard);
    parts.push(`左邻${left.name}给主牌染上背景色：${exactCombos.get(key) || genericCombo(left, mainCard, reading.topic)}`);
  }

  if (right) {
    const key = getPairKey(mainCard, right);
    parts.push(`右邻${right.name}说明后续会怎样接住主牌：${exactCombos.get(key) || genericCombo(mainCard, right, reading.topic)}`);
  }

  return parts;
}

function buildSummary(reading) {
  const spread = spreads[reading.spread];
  const mainIndex = getMainCardIndex(reading);
  const mainCard = reading.cards[mainIndex];
  const mainProfile = getCardProfile(mainCard);
  const first = reading.cards[0];
  const last = reading.cards[reading.cards.length - 1];
  const context = getSpreadContext(reading, mainIndex);
  const question = reading.question.trim();
  const questionText = question ? `关于“${question}”，` : "";
  const questionMode = getQuestionMode(question);
  const tone = getToneSummary(reading.cards);
  const topicName = topicNames[reading.topic];
  const mainThemeLine = getThemeLine(mainCard, reading.topic);
  const pairDetails = describeMainPairs(reading, mainIndex);
  const paragraphs = [];

  if (reading.cards.length === 1) {
    paragraphs.push({
      title: "主牌回答",
      text: `${questionText}主牌是${mainCard.name}。它在${topicName}里给出的重点是：${mainThemeLine} ${getVerdict(reading, mainCard)}`
    });
    paragraphs.push({
      title: "细节落点",
      text: `${mainCard.name}的牌面关键词是${mainCard.keywords.join("、")}，属于${mainProfile.kind}，时间感偏${mainProfile.tempo}。这表示你现在要看的不是外部结果，而是${mainProfile.focus} ${mainCard.advice}`
    });
    paragraphs.push({
      title: "提醒",
      text: `${mainCard.shadow} 如果要让这张牌给出更准的答案，可以把问题继续缩小到一个具体选择或一个具体对象。`
    });
    return paragraphs;
  }

  paragraphs.push({
    title: "主牌回答",
    text: `${questionText}${spread.title}的主牌是${mainCard.name}，整组牌${tone}。${getVerdict(reading, mainCard)} 这张主牌在${topicName}主题下的直接回答是：${mainThemeLine}`
  });

  if (context.before.length) {
    paragraphs.push({
      title: "主牌之前",
      text: `主牌左侧是背景和起因：${describeCardList(context.before, reading.topic)}。它们说明你不是从空白处开始，而是带着这些前置信号走到${mainCard.name}。`
    });
  }

  if (pairDetails.length) {
    paragraphs.push({
      title: "邻牌修正",
      text: pairDetails.join(" ")
    });
  }

  if (context.after.length) {
    paragraphs.push({
      title: "后续走向",
      text: `主牌右侧是事件如何继续展开：${describeCardList(context.after, reading.topic)}。尤其尾牌${last.name}是落点，它提示：${getThemeLine(last, reading.topic)}`
    });
  }

  if (context.axis.length) {
    context.axis.forEach((axis) => {
      paragraphs.push({
        title: axis.title,
        text: `${axis.meaning} 这一轴是${summarizeNames(axis.cards)}，读法是：${axis.cards.map((card) => `${card.name}：${getThemeLine(card, reading.topic)}`).join("；")}`
      });
    });
  }

  paragraphs.push({
    title: questionMode === "yesNo" ? "倾向判断" : "行动建议",
    text: `${
      questionMode === "yesNo"
        ? "如果一定要给倾向，重点不是只看“是/否”，而是先做这个动作："
        : "下一步不要泛泛地等结果，请先做这个动作："
    }${mainCard.advice} 同时留意${mainCard.name}的阴影面：${mainCard.shadow}`
  });

  return paragraphs;
}

function renderReading(reading) {
  els.emptyState.hidden = true;
  els.readingOutput.hidden = false;
  els.saveButton.disabled = false;
  els.saveButton.textContent = "♡";
  const polarity = getPolarity(reading);
  els.polarityOverview.className = `polarity-overview ${polarity.className}`;
  els.polarityEmoji.textContent = polarity.emoji;
  els.polarityTitle.textContent = polarity.title;
  els.polarityText.textContent = polarity.text;
  els.summaryText.replaceChildren(
    ...buildSummary(reading).map((item) => {
      const paragraph = document.createElement("p");
      const title = document.createElement("strong");
      title.textContent = `${item.title}：`;
      paragraph.append(title, document.createTextNode(item.text));
      return paragraph;
    })
  );

  els.deepList.innerHTML = buildDeepInsights(reading)
    .map(
      (item) => `
        <article class="deep-item">
          <strong>${item.title}</strong>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");

  els.comboList.innerHTML = getCombos(reading)
    .map(
      (combo) => `
        <article class="combo-item">
          <strong>${combo.title}</strong>
          <p>${combo.text}</p>
        </article>
      `
    )
    .join("");

  els.cardNotes.innerHTML = reading.cards
    .map((card, index) => {
      const position = spreads[reading.spread].positions[index];
      const profile = getCardProfile(card);
      return `
        <article class="note-item">
          <strong>${position} · ${card.name}</strong>
          <div class="note-meta">
            <span>${toneLabels[card.tone]}</span>
            <span>${profile.kind}</span>
            <span>${profile.tempo}</span>
          </div>
          <p>${profile.focus}</p>
          <p>${getThemeLine(card, reading.topic)}</p>
          <p>${card.advice} ${card.shadow}</p>
        </article>
      `;
    })
    .join("");
}

function formatStamp(date = new Date()) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function createReading() {
  const spread = spreads[state.spread];
  const reading = {
    id: crypto.randomUUID(),
    spread: state.spread,
    topic: els.topic.value,
    deckMode: els.deckMode.value,
    question: els.question.value,
    cards: drawCards(spread.positions.length),
    createdAt: new Date().toISOString()
  };
  state.currentReading = reading;
  els.spreadTitle.textContent = spread.title;
  els.readingStamp.textContent = formatStamp();
  renderCards(reading);
  revealCards();
  window.setTimeout(() => renderReading(reading), 220 + reading.cards.length * 140);
}

function runShuffleAnimation() {
  state.deck = shuffle(getActiveDeck());
  els.deckMeter.classList.remove("is-shuffling");
  void els.deckMeter.offsetWidth;
  els.deckMeter.classList.add("is-shuffling");
}

function getSavedReadings() {
  try {
    return JSON.parse(localStorage.getItem("lenormand-readings") || "[]");
  } catch {
    return [];
  }
}

function setSavedReadings(readings) {
  localStorage.setItem("lenormand-readings", JSON.stringify(readings));
}

function saveCurrentReading() {
  if (!state.currentReading) return;
  const readings = getSavedReadings();
  const saved = [state.currentReading, ...readings.filter((item) => item.id !== state.currentReading.id)].slice(0, 18);
  setSavedReadings(saved);
  els.saveButton.textContent = "♥";
  renderHistory();
}

function restoreReading(reading) {
  state.currentReading = reading;
  state.spread = reading.spread;
  syncSpreadLayout(reading.spread);
  els.question.value = reading.question;
  els.topic.value = reading.topic;
  els.deckMode.value = reading.deckMode || "classic";
  els.spreadTitle.textContent = spreads[reading.spread].title;
  els.readingStamp.textContent = formatStamp(new Date(reading.createdAt));
  document.querySelectorAll(".spread-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.spread === reading.spread);
  });
  renderCards(reading, true);
  renderReading(reading);
  closeHistory();
}

function renderHistory() {
  const readings = getSavedReadings();
  if (!readings.length) {
    els.historyList.innerHTML = `<p class="history-empty">还没有保存的牌面。</p>`;
    return;
  }

  els.historyList.innerHTML = readings
    .map((reading) => {
      const names = reading.cards.map((card) => card.name).join(" · ");
      const question = reading.question.trim() || topicNames[reading.topic];
      const deckLabel = reading.deckMode === "akashic" ? "扩展48" : "经典36";
      return `
        <article class="history-item">
          <button type="button" data-history-id="${reading.id}">
            <strong>${formatStamp(new Date(reading.createdAt))} · ${spreads[reading.spread].title} · ${deckLabel}</strong>
            <p>${question}</p>
            <p>${names}</p>
          </button>
        </article>
      `;
    })
    .join("");

  els.historyList.querySelectorAll("[data-history-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const reading = getSavedReadings().find((item) => item.id === button.dataset.historyId);
      if (reading) restoreReading(reading);
    });
  });
}

function openHistory() {
  els.historyDrawer.classList.add("is-open");
  els.historyDrawer.setAttribute("aria-hidden", "false");
  renderHistory();
}

function closeHistory() {
  els.historyDrawer.classList.remove("is-open");
  els.historyDrawer.setAttribute("aria-hidden", "true");
}

function clearHistory() {
  setSavedReadings([]);
  renderHistory();
}

function applyTheme(theme) {
  els.body.classList.toggle("light", theme === "light");
  els.themeToggle.textContent = theme === "light" ? "☀" : "☾";
  localStorage.setItem("lenormand-theme", theme);
}

document.querySelectorAll(".spread-tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.spread = button.dataset.spread;
    syncSpreadLayout(state.spread);
    document.querySelectorAll(".spread-tab").forEach((tab) => tab.classList.remove("is-active"));
    button.classList.add("is-active");
    els.spreadTitle.textContent = spreads[state.spread].title;
  });
});

els.drawButton.addEventListener("click", () => {
  runShuffleAnimation();
  window.setTimeout(createReading, 220);
});

els.deckMode.addEventListener("change", runShuffleAnimation);
els.shuffleButton.addEventListener("click", runShuffleAnimation);
els.saveButton.addEventListener("click", saveCurrentReading);
els.historyToggle.addEventListener("click", openHistory);
els.closeHistory.addEventListener("click", closeHistory);
els.clearHistory.addEventListener("click", clearHistory);
els.themeToggle.addEventListener("click", () => {
  applyTheme(els.body.classList.contains("light") ? "dark" : "light");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeHistory();
});

applyTheme(localStorage.getItem("lenormand-theme") || "dark");
renderHistory();
