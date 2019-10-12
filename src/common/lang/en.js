export const lang = {
    mask: {
        title1: 'Under Development'
    },
    banner: {
        title2: '非同质数字资产标准和世界观系统',
        WhitePaper: 'White Paper',
        // 10-10
        createAssets: 'Create Assets',
        createAssetsDescribe: 'Click here to view and create NH Assets',
        tradingMarket: 'Market',
        tradingMarketDescribe: 'Click here to view and purchase NH Assets',
        crossLinkAcceptance: 'Cross-Chain Exchange',
        crossLinkAcceptanceDescribe: 'Click here to exchange different digital currencies',
    },
    Implementations: {
        title: 'Implementations',
    },
    Partners: {
        title: 'Partners',
    },
    commonContainer: [
        {
            title: "Multiverse Item Cross Game Transfer",
            imgName: "Cross-World-Item-Traveling",
            content: "Cocos-BCX introduces the concept of Multiverse, which defines the application scenarios, circulation rules and registration for the NH assets, as well as the basic information of the Multiverse (Multiverse ID) and its native token in circulation. Game assets are transferable across different games within the Multiverse.",
            routerUrl: 'https://github.com/cocos-bcx/1808/blob/master/README.md#Multiverse-System'
        },
        {
            title: "Smithy Mechanism",
            imgName: "Smithy-Mechanism",
            content: "The Smithy allows users to generate props by themselves. As one of the core functions of all games, the Smithy can be managed by game makers or by game guilds and designer studios.",
            routerUrl: 'https://www.cocosbcx.io/static/Whitepaper_en.pdf'
        },
        {
            title: "Nesting & Combination of Props",
            imgName: "Nested-Props-Combination",
            content: "Game props may be composed of multiple components and items. In Cocos-BCX, non-homogeneous digital assets of the blockchain game, i.e., props, can also be nested and combined. Each prop may involve multiple items. The main asset may contain one or more sub-assets, which may have further sub-assets.",
            routerUrl: 'https://github.com/cocos-bcx/1808/blob/master/README.md#Assets-Used-as-an-Embedded-or-Combined-Module-on-the-Blockchain'
        },
        {
            title: "Lease & Pledge, Timer",
            imgName: "Lease-Pledge",
            content: "Cocos-BCX provides operations that can be called by the contract and support the transfer of ownership and right of use, as well as operations that can enable a timed task, which can further specify the expiration of task execution.",
            routerUrl: 'https://github.com/cocos-bcx/1808/blob/master/README.md#Implementation-of-Complex-Business-Model'
        },
        {
            title: "Cross-Chain Asset Exchange",
            imgName: "Cross-Chain-Exchange",
            content: "Cocos-BCX provides a set of gateways for the exchange of coins and props across different on-chain games and platforms within the Multiverse.",
            routerUrl: 'https://www.cocosbcx.io/static/Whitepaper_en.pdf'
        }
    ],
    Partnership: 'For Partnership ',

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
            '0': 'The network is busy, please check your network connection',
            '-11': 'The account is locked or not logged in',
            '114': 'The account is locked or not logged in'
        },
        creatNHAssetOrder: {
            '1': 'Order submitted',
        },
        deleteNHAsset: {
            '1': 'Deleted successfully',
        },
        fillNHAssetOrder: {
            'orderhasexpired': 'Order expired',
            'InsufficientBalance': 'Insufficient balance',
            'selforder': 'You cannot fill the order created by yourself',
        },
        cancelNHAssetOrder: {
            '1': 'Canceled',
            '0': 'Order expired'
        },
        creatWorldView: {
            '1': 'Created successfully',
            '0': 'The Multiverse already exists',
            '2': 'Please register a developer account first',
            '3': 'Cannot start with a number',
            '131': 'The Multiverse cannot be empty',
        },
        registerCreator: {
            '1': 'Registered successfully',
            '0': 'You have already registered'
        }
    },
    
    // 10-10 
    myAssets: {
        title: 'My assets',
        createAssetsBtn: 'Create A New Asset',
        myAssetsTable: {
            tableHead: ['Thumbnail', 'NH Asset ID', 'Coin', 'Multiverse', 'Basic data', 'Operation']
        },
        createFirstAsset: {
            title: ' Try to create your first asset.'
        },
        step: [
            {
                key: 'Step 1. ',
                value: 'Register a developer account'
            },
            {
                key: 'Step 2. ',
                value: 'Create a Multiverse'
            },
            {
                key: 'Step 3. ',
                value: 'Start creating your asset.'
            }
        ]
    },
    common: {
        sellOut: 'Sell',
        discard: 'Discard',
        registerCreator: 'Register a developer account',
        createViewWorld: 'Create a Multiverse',
        createAsset: 'Create A New Asset',
        goback: 'Back',
        confirm: 'Confirm',
        removebtn: 'Delete',
        addbtn: 'Add',
        immediatePurchaseBtn: 'Buy Now',
        cancellationOfOrderBtn: 'Cancel the order'
    },

    sellOutAssets: {
        title: 'Fill in the trading info',
        price: 'Price',
        expiration: 'Expire in',
        expirationUnit: 'seconds',
        memo: 'Memo'
    },

    creatWorldView: {
        title: 'Fill in the trading info',
        worldViewName: 'Multiverse Name'
    },

    createassets: [
        {
            key: 'Category',
            placeholder: 'e.g. "bomb"'
        },
        {
            key: 'Quantity to be produced',
            placeholder: 'e.g. "1"'
        },
        {
            key: 'Coin',
            placeholder: 'e.g. "COCOS"'
        },
        {
            key: 'Multiverse',
            placeholder: 'Please select one'
        },
        {
            key: 'Thumbnail',
            placeholder: 'Select a file'
        },
        {
            key: 'Basic data'
        }
    ],
    tradingMarket: {
        title: 'Market',
        price: 'Price',
        seller: 'Seller',
        memo: 'Memo',

    }
}