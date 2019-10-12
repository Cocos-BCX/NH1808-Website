import { Message } from 'element-ui';
import './bcx.min'
import './core.min'
import './plugin.min'
import { cacheSession, cacheKey } from './Utils'

let bcx = null

// 浏览器插件链接 定时器
let timer = null

// 浏览器插件链接 当前请求秒数
let requestSeconds = 0

// 浏览器插件链接 请求最大秒数
let requestSecondsMax = 3


// bcx对象初始化
export let initBcx = function () {
  
  cacheSession.remove(cacheKey.accountName)
  var _configParams = {
        default_ws_node: "ws://39.106.126.54:8049",
        ws_node_list: [{
                url: "ws://39.106.126.54:8049",
                name: "COCOS节点1"
            },
            {
                url: "ws://47.93.62.96:8049",
                name: "COCOS节点2"
            }
        ],
        networks: [{
            core_asset: "COCOS",
            chain_id: "7d89b84f22af0b150780a2b121aa6c715b19261c8b7fe0fda3a564574ed7d3e9"
        }],
        faucet_url: "http://47.93.62.96:8041",
        auto_reconnect: true,
        worker: false
        //app_keys:["5HxzZncKDjx7NEaEv989Huh7yYY7RukcJLKBDQztXAmZYCHWPgd"]
    };
    bcx = new BCX(_configParams);
}

// 浏览器插件链接
export let browserConnect = function (){
  
  return new Promise( async function(resolve, reject){
    if (window.BcxWeb) {

      bcx = window.BcxWeb
      bcx.getAccountInfo().then(res => {
        cacheSession.set(cacheKey.accountName, res.account_name)
        cacheSession.remove(cacheKey.myWorldView)
        resolve(true)
      }).catch(function (err) {
        resolve(false)
      })
    } else {
      clearInterval(timer)
      requestSeconds = 0
      timer = setInterval(() => {
        requestSeconds++
        if (requestSeconds >= requestSecondsMax) {
          
          Message({
            duration: 1200,
            message: '链接失败，请检查浏览器钱包是否正常打开',
            type: 'error',
          })
          clearInterval(timer)
          reject(false)
          return false
        } else {
          if (window.BcxWeb) {
            bcx = window.BcxWeb
            bcx.getAccountInfo().then(res => {
              clearInterval(timer)
              if (res.locked) {
                Message({
                  duration: 1200,
                  message: 'Account Locked',
                  type: 'error',
                })
                resolve(false)
              } else {
                cacheSession.set(cacheKey.accountName, res.account_name)
                cacheSession.remove(cacheKey.myWorldView)
                resolve(true)
              }
            }).catch(function (err) {
              clearInterval(timer)
              resolve(false)
            })
          }
        }
        
      }, 1000)
    }
    // resolve()
    // reject()
  })
  
  
  
}

// 桌面钱包链接
export let desktopConnect = function () {
  Cocosjs.plugins(new CocosBCX())
  Cocosjs.cocos.connect('My-App').then(connected => {
    if (!connected) {
      Message({
        duration: 1200,
        message: '链接失败，请检查桌面钱包是否正常打开',
        type: 'error',
      })
      return
    } else {
      const cocos = Cocosjs.cocos
      bcx = cocos.cocosBcx(bcx)
      bcx.getAccountInfo().then(res => {
        // window.account_name = res.account_name
        cacheSession.set(cacheKey.accountName, res[cacheKey.accountName])
        cacheSession.remove(cacheKey.myWorldView)
      }).catch(function (err) {
      })
    }
    
  }).catch(function (err) {
  })
}

// 查询开发者关联的世界观
export let queryNHCreator = function () {
  return new Promise(function(resolve, reject){
    if (window.BcxWeb) {
      bcx.queryNHCreator({
        account: cacheSession.get(cacheKey.accountName)
      }).then(res => {
        if (res.code == 1) {
          // cacheSession.set(cacheKey.myWorldView, res.data[cacheKey.myWorldView])
          resolve(res)
        } else {
          resolve(res)
        }
      }).catch(res => {
        reject(res)
      })
    } else {
      clearInterval(timer)
      browserConnect().then(res => {
        if (!res) return false
        bcx.queryNHCreator({
          account: cacheSession.get(cacheKey.accountName)
        }).then(res => {
          if (res.code == 1) {
            // cacheSession.set(cacheKey.myWorldView, res.data[cacheKey.myWorldView])
            resolve(res)
          } else {
            resolve(res)
          }
        }).catch(res => {
          reject(res)
        })
      })
    }
    
  })
}

// 注册开发者
export let registerCreator = function () {
  return new Promise(function(resolve, reject){
    bcx.registerCreator().then(res => {
      console.log(res)
      if (res.code == 1) {
        resolve(res)
      } else if (res.code == 402) {
        return false
      } else {
        
        Message({
          duration: 1200,
          message: 'error',
          type: 'error',
        })
      }
    });
  })
}


// 世界观创建  chukongtest1-test
export let creatWorldView = function (worldViewName) {
  return new Promise(function(resolve, reject){
    bcx.creatWorldView({
      worldView: worldViewName
    }).then(res => {
      resolve(res)
    }).catch(function (res) {
      console.log('--------creatWorldView-----错误原因：----------')
      console.log(res)
    })
  })
}


// 查询账户下所拥有的NH资产
export let queryAccountNHAssets = function (params) {
  return new Promise(function(resolve, reject){
    
    if (window.BcxWeb) {
      bcx.queryAccountNHAssets({
        account: cacheSession.get(cacheKey.accountName),
        page: params.page,
        pageSize: params.pageSize,
        worldViews: params.worldViews
      }).then(res => {
        resolve(res)
      }).catch(res=>{
        reject(res)
      })
    } else {
      browserConnect().then(res => {
        if (!res) return false
        bcx.queryAccountNHAssets({
          account: cacheSession.get(cacheKey.accountName),
          page: params.page,
          pageSize: params.pageSize,
          worldViews: params.worldViews
        }).then(res => {
          resolve(res)
        }).catch(res=>{
          reject(res)
        })
      })
    }
      
  })
  
}

// 创建资产
export let creatNHAsset = function (params) {
  return new Promise(function(resolve, reject){
    
    if (window.BcxWeb) {
      bcx.creatNHAsset({
        assetId: params.assetId,
        worldView: params.worldView,
        baseDescribe: params.baseDescribe,
        ownerAccount: cacheSession.get(cacheKey.accountName),
        NHAssetsCount: params.NHAssetsCount,
        // type: params.type,
        type: 0,
        // NHAssets: params.NHAssets
      }).then(res => {
        resolve(res)
      });
    } else {
      browserConnect().then(res => {
        if (!res) return false
        bcx.creatNHAsset({
          assetId: params.assetId,
          worldView: params.worldView,
          baseDescribe: params.baseDescribe,
          ownerAccount: cacheSession.get(cacheKey.accountName),
          NHAssetsCount: params.NHAssetsCount,
          // type: params.type,
          type: 0,
          // NHAssets: params.NHAssets
        }).then(res => {
          resolve(res)
        });
      })
      
    }
  })
}


// 查询(购买)全网NH资产售卖单
export let queryNHAssetOrders = function (params) {
  return new Promise(function(resolve, reject){
    bcx.queryNHAssetOrders({
      assetIds: params.assetIds,
      worldViews: params.worldViews,
      baseDescribe: params.baseDescribe,
      pageSize: params.pageSize,
      page: params.page
    }).then(res => {
      resolve(res)
    });
  })
}


// 查询链上发行的资产
export let queryAssets = function (symbol) {
  return new Promise( function(resolve, reject){
    bcx.queryAssets({ symbol: symbol }).then(res => {
      if (res.code == 1) {
        resolve(res)
      }
    });
  })
}


// NH资产购买
export let fillNHAssetOrder = function (orderId) {
  return new Promise( function(resolve, reject){
    bcx.fillNHAssetOrder({
      orderId: orderId,
      onlyGetFee: false,
      
    }).then(function (res) {
      resolve(res)
    })
  })
}
  
// 取消订单
export let cancelNHAssetOrder = function (orderId) {
  return new Promise( function(resolve, reject){
    bcx.cancelNHAssetOrder({
      orderId:orderId,
      }).then(function (res) {
        resolve(res)
      })
  })
}




// NH资产操作------NH出售单创建
export let creatNHAssetOrder = function (params) {
  return new Promise( function(resolve, reject){
    bcx.creatNHAssetOrder({
      otcAccount: params.otcAccount,
      orderFee: params.orderFee,
      price: params.price,
      priceAssetId: params.priceAssetId,
      expiration: params.expiration,
      memo: params.memo,
      NHAssetId: params.NHAssetId,
      onlyGetFee: false
    }).then(res => {
      resolve(res)
    });
  })
}



// NH资产操作--NH资产删除 [13, 15]  [13]
export let deleteNHAsset = function (NHAssetIds) {
  return new Promise( function(resolve, reject){
    bcx.deleteNHAsset({
      NHAssetIds: NHAssetIds
    }).then(res => {
      
      resolve(res)
    });
  })
}