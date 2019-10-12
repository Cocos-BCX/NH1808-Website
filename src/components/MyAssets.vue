<template>
<div>
  <topheader></topheader>
  <createworldview :isshowmask='showcreateworldview' @listenChildren="getChildren"></createworldview>
  <sellOutAssets :isshowmask='showSellOutAssets' :NHAssetId="currentNHAssetId" @listenChildren="getSellOutChildren"></sellOutAssets>
  <div class="full-screen-bg"></div>
  <div class="title">{{$t('myAssets.title')}}</div>
  <div class="center-main">
    <div class="create-assets-bar">
      <a href="javascript:void(0);" @click="jumpCreateAssets()" class="create-assets-btn">{{$t('myAssets.createAssetsBtn')}} +</a>
      <!-- <router-link to="/createassets" class="create-assets-btn">创建新资产 +</router-link> -->
    </div>
    <div class="center-main">

      <table class="table-container" v-if="count" border="0" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <td v-for="(li, index) in $t('myAssets.myAssetsTable.tableHead')" :key="index">{{li}}</td>
            <!-- <td>缩略图</td>
            <td>NH资产ID </td>
            <td>通行资产 </td>
            <td>世界观  </td>
            <td>基础数据 </td>
            <td>操作</td> -->
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>
              <img src="../assets/images/mock-icon.png" alt="">
            </td>
            <td>4.2.17  </td>
            <td>COCOS  </td>
            <td>CCshooter  </td>
            <td>
              <json-viewer
              :value="viewJson"
              boxed
              sort
            ></json-viewer>
            </td>
            <td>
              <a href="javascript:void(0);" class="operation sell-out-btn">卖 出</a>
              <a href="javascript:void(0);" class="operation modify-btn">修 改</a>
              <a href="javascript:void(0);" class="operation discard-btn">丢 弃</a>
            </td>
          </tr> -->

          <tr v-for="(li, index) in myAccountNHAssets" :key="index">
            <td>
              <img v-if="!li.icon" src="../assets/images/assets-default-icon.png" alt="">
              <img v-if="li.icon" :src="li.icon" alt="">
            </td>
            <td>{{li.id}}</td>
            <td>{{li.asset_qualifier}}</td>
            <td>{{li.world_view}} </td>
            <td>
              <json-viewer
              :value="li.base_describe_json"
              boxed
              sort
            ></json-viewer>
            </td>
            <td>
              <a href="javascript:void(0);" @click="creatNHAssetOrder(li.id)" class="operation sell-out-btn">{{$t('common.sellOut')}}</a>
              <a href="javascript:void(0);" @click="deleteNHAsset(li.id)" class="operation discard-btn">{{$t('common.discard')}}</a>
            </td>
          </tr>


          

          
        </tbody>
      </table>
      
          
      <div class="create-first-asset" v-if="!count">
        <img src="../assets/images/empty-assets.png" class="empty-assets-icon" alt=""> 
        <p class="create-first-asset-content">{{$t('myAssets.createFirstAsset.title')}}</p>
        <ul class="create-first-asset-step">
          <li>
            <p class="step-head">
              <span>{{$t('myAssets.step[0].key')}}</span>
              {{$t('myAssets.step[0].value')}}
              <!-- <span>步骤1. </span>
              注册成为开发者  -->
            </p>
            <a class="asset-btn register-creator-btn" href="javascript:void(0);" @click="registerCreator()">{{$t('common.registerCreator')}}</a>
          </li>
          <li>
            <p class="step-head">
              <span>{{$t('myAssets.step[1].key')}}</span>
              {{$t('myAssets.step[1].value')}}
            </p>
            <a class="asset-btn create-view-world-btn" href="javascript:void(0);" @click="createWorldViewFn()">{{$t('common.createViewWorld')}}</a>
          </li>
          <li>
            <p class="step-head">
              <!-- <span>步骤3. </span>
              开始创建你的资产吧 -->
              <span>{{$t('myAssets.step[2].key')}}</span>
              {{$t('myAssets.step[2].value')}}
            </p>
            <a class="asset-btn create-asset-btn" href="javascript:void(0);" @click="jumpCreateAssets()">{{$t('common.createAsset')}}</a>
          </li>
        </ul>
      </div>
      <div class="paging-bar" v-if="count">
        
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            background
            class="marl20"
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="count">
          </el-pagination>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import { queryAccountNHAssets, queryNHCreator, registerCreator, creatNHAssetOrder, deleteNHAsset  } from '../../libs/bcx.api'
import { cacheSession, cacheKey } from '../../libs/Utils'
import createworldview from './common/CreatWorldView'
import SellOutAssets from './common/SellOutAssets'
import topheader from './common/TopHeader'
import { Message } from 'element-ui';
export default {
    data () {
        return {
          showcreateworldview: false,
          showSellOutAssets: false,

          currentNHAssetId: '',

          viewJson: {
            id: '5968fcad629fa84ab65a5247',
            firstname: 'Ada',
            lastname: 'Lovelace',
            awards: null,
            known: [
              'mathematics',
              'computing'
            ],
            position: {
              lat: 44.563836,
              lng: 6.495139
            },
            description: `Augusta Ada King, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852) was an English mathematician and writer,
            chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer,
            the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation,
            and published the first algorithm intended to be carried out by such a machine.
            As a result, she is sometimes regarded as the first to recognise the full potential of a "computing machine" and the first computer programmer.`,
            bornAt: '1815-12-10T00:00:00.000Z',
            diedAt: '1852-11-27T00:00:00.000Z'
          },
          
          count: 0,
          currentPage: 1,

          // page: 1,
          pageSize: 4,

          myAccountNHAssets: []
        }
    },
    watch: {
    },
    mounted(){
      this.queryAccountNHAssets()
    },
    methods: {
      // NH出售单创建
      creatNHAssetOrder:function (NHAssetId) {
        this.currentNHAssetId = NHAssetId
        this.showSellOutAssets = true
        return false
        // let _this = this
        // let currentAount = cacheSession.get(cacheKey.accountName)
        // let params = {
        //   // 写死账户名  公司指定出售单账户
        //   otcAccount: 'otcaccount',
        //   orderFee: 0,
        //   price: 10000,
        //   priceAssetId: 'COCOS',
        //   expiration: '3600',
        //   memo: '',
        //   // id
        //   NHAssetId: NHAssetId,
        //   onlyGetFee: false
        // }
        // creatNHAssetOrder(params).then(function (res) {
        //   console.log(res)
        //   if (res.code == 1) {
        //     console.log('-----------------------')
        //   }
        // })
      },
      deleteNHAsset(NHAssetIds){
        let _this = this
        let NHAssetId_arr = NHAssetIds.split(",")
        console.log(NHAssetId_arr)
        deleteNHAsset(NHAssetId_arr).then(function (res) {
          console.log('-----------deleteNHAsset-------------')
          console.log(res)
          if (res.code == 1) {
            console.log('-----------deleteNHAsset-------------')
            
            Message({
              duration: 1200,
              message: _this.$t('interFaceMessage.deleteNHAsset')[1],
              type: 'success',
            })
            _this.queryAccountNHAssets()
          } else if (res.code == 402) {
            return
          } else {
            Message({
              duration: 1200,
              message: res.message,
              type: 'error',
            })
          }
        })
      },


      // 查询账户下所拥有的NH资产
      queryAccountNHAssets: function () {
        let _this = this
        let params = {
          // account: currentAount,
          page: _this.currentPage,
          pageSize: _this.pageSize,
          worldViews: []
        }
        queryAccountNHAssets(params).then(res => {
              console.log('--------------queryAccountNHAssets----------------')
              console.log(res)
          if (res.code == 1) {
            for (let i = 0; i < res.data.length; i++) {
              res.data[i].base_describe
              res.data[i].base_describe_json = JSON.parse(res.data[i].base_describe)
              let iconPath = res.data[i].base_describe_json.icon
              if (iconPath) {
                if (iconPath.indexOf('http') > -1) {
                  res.data[i].icon = iconPath
                } else {
                  if (iconPath.indexOf('chain')>-1) {
                    res.data[i].icon = 'https://cocosbcx.oss-cn-beijing.aliyuncs.com/' + iconPath
                  } else {
                    res.data[i].icon = 'http://47.75.186.60/itemimgs/' + iconPath
                  }
                  
                }
              }
              
              
            }
            _this.myAccountNHAssets = []
            _this.myAccountNHAssets = res.data
            _this.count = res.total
          }
        })
      },
      jumpCreateAssets: function () {
        let _this = this
        let currentAccount = cacheSession.get(cacheKey.accountName)
        if (currentAccount) {
          queryNHCreator().then(async res=>{
            if (res.code == 1) {
              let worldViewNum = res.data.world_view.length
              if (worldViewNum == 0) {
                  Message({
                    duration: 1200,
                    message: '需要创建世界观',
                    type: 'error',
                  })
                  _this.createWorldViewFn()
              } else {
                _this.$router.push('/createassets')
              }
            } else if (res.code == 0) {
              let errorData = res.error
              if (errorData.message.indexOf('is not a nh_asset creater')>-1) {
                // message: is not a nh_asset creater   不是开发者
                Message({
                  duration: 1200,
                  message: '不是开发者',
                  type: 'error',
                })
                let data = await registerCreator()
                return false
              }
            }
          }).catch(function (res) {
            console.log('---------catch---------')
            console.log(res)
          })
        } else {
          Message({
            duration: 1200,
            message: '未登录',
            type: 'error',
          })
        }
      },
      // 注册开发者
      registerCreator(){
        registerCreator().then(res => {
          if (res.code == 1) {
            Message({
              duration: 1200,
              message: _this.$t('interFaceMessage.registerCreator[1]'),
              type: 'success',
            })
          } else {
            if (res.message.indexOf("world view name can't start whith a digit")>-1) {
              Message({
                duration: 1200,
                message: _this.$t('interFaceMessage.registerCreator[3]'),
                type: 'success',
              })
            } else {
              Message({
                duration: 1200,
                message: _this.$t('interFaceMessage.registerCreator[0]'),
                type: 'success',
              })
            }
            
          }
        })
      },
      createWorldViewFn() {
        this.showcreateworldview = true
      },
      getChildren (param) {
        this.showcreateworldview = false
        if (param) {
          if (param.code == 1) {
            // _this.$router.push('/myassets')
          }
        }
      },
      getSellOutChildren(param){
        let _this = this
        this.showSellOutAssets = false
        if (param) {
          if (param.code == 1) {
            console.log('------getSellOutChildren------')
            // _this.$router.push('/myassets')
          }
        } else {
          console.log('-----------------------')
        }
        this.queryAccountNHAssets()
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        let _this = this
        console.log(`当前页: ${val}`);
        this.currentPage = val
          _this.queryAccountNHAssets()
      },
    },
    components: {
      createworldview: createworldview,
      sellOutAssets: SellOutAssets,
      topheader: topheader
    }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.full-screen-bg{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/images/full-screen-bg.png') no-repeat center center;
  background-size: cover;
  z-index: -1;
}

.paging-bar{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  padding-bottom: 30px;
}

.title{
  padding-top: 70px;
  padding-bottom: 30px;
  /* height:56px; */
  font-size:40px;
  font-weight:600;
  color:rgba(255,255,255,1);
  line-height:56px;
  text-align: center;
}
.center-main{
  width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-items:center;
}

.create-assets-bar{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  align-items:center;

}
.create-assets-bar .create-assets-btn{
  height:46px;
  line-height: 46px;
  background:rgba(67,78,255,1);
  border-radius:4px;
  font-size:18px;
  font-weight:500;
  color:rgba(255,255,255,1);
  text-align: center;
  padding-left: 12px;
  padding-right: 12px;
}


.create-first-asset{
  width: 100%;
  background: #fff;
  padding-bottom: 128px;
  margin-top: 20px;
}
.create-first-asset .empty-assets-icon{
  width: 188px;
  height: 126px;
  margin: 69px auto 0;
  display: block;
}
.create-first-asset .create-first-asset-content{
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-top: 26px;
  color:rgba(126,138,163,1);
  font-size:24px;
  text-align: center;
}
.create-first-asset-step{
  width: 650px;
  margin: 50px auto 0;
}
.create-first-asset-step li{
  width: 100%;
  height: 54px;
  line-height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.create-first-asset-step li .step-head{
  height: 54px;
  line-height: 54px;
  font-size: 20px;
  color: #7E8AA3;
  display: flex;
}
.create-first-asset-step li .step-head span{
  font-size: 20px;
  color: #7E8AA3;
}
.create-first-asset-step li .asset-btn{
  min-width:148px;
  height:34px;
  line-height: 34px;
  border-radius:20px;
  border:1px solid rgba(67,78,255,1);
  font-size:16px;
  font-weight:600;
  color:rgba(67,78,255,1);
  text-align: center;
  padding-left: 48px;
  padding-right: 10px;
}
.register-creator-btn {
  background: url('../assets/images/register-creator-btn-icon.png') no-repeat 20px center;
}
.create-view-world-btn {
  background: url('../assets/images/create-view-world-btn-icon.png') no-repeat 20px center;
}
.create-asset-btn {
  background: url('../assets/images/create-asset-btn-icon.png') no-repeat 20px center;
}


table.table-container{
  width: 100%;
  margin-top: 14px;
}
table.table-container thead{
  background: #fff;
}
table.table-container thead tr td{
  height: 56px;
  line-height: 56px;
  box-sizing: content-box;
  text-align: center;
  border-bottom: 1px solid #ccc;
  font-size:18px;
  color:rgba(126,138,163,1);
}
table.table-container tbody tr{
  box-sizing: content-box;
  background: #fff;
}
table.table-container tbody tr td{
  padding-bottom: 26px;
  padding-top: 26px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  font-size:20px;
  font-weight:400;
  color:rgba(51,51,51,1);
}
table.table-container tbody tr td:nth-child(1) img{
  width: 85px;
  height: 85px;
}
table.table-container tbody tr td:nth-child(5){
  width: 100px;
}
.operation{
  width:82px;
  height:40px;
  line-height: 40px;
  text-align: center;
  margin-right: 20px;
  border-radius:20px;
  font-size:16px;
  display: inline-block;
}
.operation:last-child{
  margin-right: 0;
}
.sell-out-btn{
  background:rgba(67,78,255,1);
  color:rgba(255,255,255,1);
}
.modify-btn{
  border:1px solid rgba(67,78,255,1);
  color:rgba(67,78,255,1);
}
.discard-btn{
  background:rgba(90,103,128,1);
  color:rgba(255,255,255,1);
}


.paging-bar{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>

