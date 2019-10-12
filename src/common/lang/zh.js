export const lang = {
    mask: {
        title1: '开发中'
    },
    banner: {
        WhitePaper: '白皮书',
        // 10-10
        createAssets: '创建资产',
        createAssetsDescribe: '点此查看和创建非同质资产',
        tradingMarket: '交易市场',
        tradingMarketDescribe: '点此查看和购买非同质资产',
        crossLinkAcceptance: '跨链承兑',
        crossLinkAcceptanceDescribe: '点此兑换不同的数字货币',
    },
    Implementations: {
        title: '多链实现',
    },
    Partners: {
        title: '合作伙伴',
    },
    commonContainer: [
        {
            title: "世界观和道具穿越",
            imgName: "Cross-World-Item-Traveling",
            content: "Cocos-BCX 引入了世界观的概念，世界观中定义了一类非同质数字资产的使用场景、流通规则、定制登记，以及世界观的基本信息即世界观 ID 以及世界流通代币符号等。世界观相同的游戏资产和道具可以在本世界观下的不同游戏世界中互通。",
            routerUrl: 'https://github.com/cocos-bcx/1808/blob/master/README_cn.md#%E4%B8%96%E7%95%8C%E8%A7%82%E7%B3%BB%E7%BB%9F'
        },
        {
            title: "铁匠铺机制",
            imgName: "Smithy-Mechanism",
            content: "“铁匠铺”的本质是一系列具有道具、装备制作权限的帐号和一系列合约，作为所有游戏世界的核心功能之一，铁匠铺可由游戏厂商管理，亦可由玩家公会、设计师工作室经营。Cocos-BCX 允许向铁匠铺授权世界观下的道具产出权限。",
            routerUrl: 'https://www.cocosbcx.io/static/Whitepaper_zh.pdf'
        },
        {
            title: "组合镶嵌",
            imgName: "Nested-Props-Combination",
            content: "游戏中装备道具可能是由多个组件、物品组合而成的，Cocos-BCX 设计中，区块链游戏的非同质数字资产，即道具也具备能够嵌套包含的特性。每一个道具都可以由多个道具组成，父级资产可以包含一个或多个子级资产，子级资产又可以包含其他的子级资产。",
            routerUrl: 'https://github.com/cocos-bcx/1808/blob/master/README_cn.md#%E5%9C%A8%E9%93%BE%E5%86%85%E5%B0%86%E8%B5%84%E4%BA%A7%E4%BD%9C%E4%B8%BA%E9%95%B6%E5%B5%8C%E5%93%81%E6%88%96%E6%A8%A1%E5%9D%97%E7%BB%84%E5%90%88%E4%BD%BF%E7%94%A8'
        },
        {
            title: "租赁抵押",
            imgName: "Lease-Pledge",
            content: "Cocos-BCX 链提供能够被合约调用的，能转移所有权和使用权的操作；提供能被合约调用的且能创建一个定时任务的操作；创建定时任务的操作时能够指定到期时会执行的任务 （如调用一个合约函数）。",
            routerUrl: 'https://github.com/cocos-bcx/1808/blob/master/README_cn.md#%E5%A4%8D%E6%9D%82%E4%B8%9A%E5%8A%A1%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%AE%9E%E7%8E%B0'
        },
        {
            title: "跨链承兑",
            imgName: "Cross-Chain-Exchange",
            content: "Cocos-BCX 提供一套承兑网关用于游戏金币和道具的自动化承兑，在统一的价值衡量体系下，实现链上不同游戏、不同平台间内容的平滑过度，可用于承兑的内容包括游戏金币、游戏装备数据等。",
            routerUrl: 'https://www.cocosbcx.io/static/Whitepaper_zh.pdf'
        }
    ],
    Partnership: '欢迎合作对接: ',

    differenceTable: {
        title: '1808标准与其他非同质资产的区别',
        tableHead: {
            first: ['资产', '特性'],
            other: ['ERC-721', 'ERC-1155', 'ERC-998', 'BCX-NHAS-1808']
        },
        content: [
            ['唯一性', '合约资产之间各不相同', '合约资产之间各不相同', '合约资产之间各不相同', '合约资产之间各不相同',],
            ['数据扩展性', '支持自定义的数据类型', '支持复数组自定义的数据类型', '支持自定义的数据类型', '支持多个可扩展的自定义数据域',],
            ['嵌套组合', '无原生的嵌套设计', '无原生的嵌套设计', '支持资产的嵌套组合等关联方式', '支持资产的嵌套组合等关联方式',],
            ['权限控制', '与同质资产相同的权限设计', '以白名单方式控制资产访问权限', '与同质资产相同的权限设计', '以扩展域数据控制资产访问权限',],
            ['与合约的关系', '数据存储在合约数据库中', '数据存储在合约数据库中', '数据存储在合约数据库中', '资产数据与合约分离，独立存在于链网络中',],
        ]
    },

    // 10-10 新增
    interFaceMessage: {
        common: {
            '0': '网络繁忙，请检查你的网络连接',
            '-11': '账户锁定或未登录',
            '114': '账户锁定或未登录'
        },
        creatNHAssetOrder: {
            '1': '挂单成功',
        },
        deleteNHAsset: {
            '1': '删除成功',
        },
        fillNHAssetOrder: {
            'orderhasexpired': '订单已失效',
            'InsufficientBalance': '余额不足',
            'selforder': '不能购买自己创建的订单',
        },
        cancelNHAssetOrder: {
            '1': '取消成功',
            '0': '订单已失效'
        },
        creatWorldView: {
            '1': '创建成功',
            '0': '世界观已存在',
            '2': '请先注册开发者',
            '3': '不能以数字开头',
            '131': '世界观不能为空',
        },
        registerCreator: {
            '1': '注册成功',
            '0': '您已经注册过了'
        }
    },
    
    // 10-10 
    myAssets: {
        title: '我的资产',
        createAssetsBtn: '创建新资产',
        myAssetsTable: {
            tableHead: ['缩略图', 'NH资产ID', '通行资产', '世界观', '基础数据', '操作']
        },
        createFirstAsset: {
            title: '试试创建你的第一笔资产吧'
        },
        step: [
            {
                key: '步骤1. ',
                value: '注册成为开发者'
            },
            {
                key: '步骤2. ',
                value: '创建一个世界观'
            },
            {
                key: '步骤3. ',
                value: '开始创建你的资产吧'
            }
        ]
    },
    common: {
        sellOut: '卖 出',
        discard: '丢 弃',
        registerCreator: '注册开发者',
        createViewWorld: '创建世界观',
        createAsset: '创建新资产',
        goback: '返 回',
        confirm: '确 认',
        removebtn: '删 除',
        addbtn: '添 加',
        immediatePurchaseBtn: '立即购买',
        cancellationOfOrderBtn: '取消订单'
    },

    sellOutAssets: {
        title: '填写交易信息',
        price: '价格',
        expiration: '过期时间',
        expirationUnit: '秒',
        memo: '备注'
    },

    creatWorldView: {
        title: '填写交易信息',
        worldViewName: '世界观名'
    },

    createassets: [
        {
            key: '类别名称',
            placeholder: '如“炸弹”'
        },
        {
            key: '生产数量',
            placeholder: '如“1”'
        },
        {
            key: '通行资产',
            placeholder: '如“COCOS”'
        },
        {
            key: '世界观',
            placeholder: '请选择'
        },
        {
            key: '缩略图',
            placeholder: '选择文件'
        },
        {
            key: '基础数据'
        }
    ],
    tradingMarket: {
        title: '交易市场',
        price: '价格',
        seller: '卖家',
        memo: '备注',

    }

}