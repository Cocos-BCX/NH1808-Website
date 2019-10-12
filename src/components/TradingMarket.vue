<template>
<div class="">
  <div class="full-screen-bg"></div>
    <div class="title">{{$t('tradingMarket.title')}}</div>
    <div class="center-main">


      <!-- <div class="trading-container">
        <img src="../assets/images/mock-icon.png" class="icon" alt="">
        <p class="trading-title">宫崎骏(4.2.4177)</p>
        <ul class="mat10 trading-attr">
          <p>价格：</p>
          <p>30000 COCOS</p>
        </ul>
        <ul class="trading-attr">
          <p>卖家：</p>
          <p>test 1</p>
        </ul>
        <ul class="trading-attr">
          <p>备注：</p>
          <p>无</p>
        </ul>
        <a href="javascript:void(0);" class="pay-btn">立即购买</a>
      </div> -->


      <div class="trading-container" v-for="(li, index) in assetOrdersList" :key="index">
        <img src="../assets/images/mock-icon.png" class="icon" alt="">
        <p class="trading-title">{{li.base_describe_json.name}}({{li.id}})</p>
        <ul class="mat10 trading-attr">
          <p>{{$t('tradingMarket.price')}}：</p>
          <p>{{li.price_amount}} {{li.price_asset_symbol}}</p>
        </ul>
        <ul class="trading-attr">
          <p>{{$t('tradingMarket.seller')}}：</p>
          <p>{{li.seller_name}}</p>
        </ul>
        <ul class="trading-attr">
          <p>{{$t('tradingMarket.memo')}}：</p>
          <p>{{li.memo}}</p>
        </ul>
        <a href="javascript:void(0);" v-if="currentAccount != li.seller_name" class="pay-btn" @click="fillNHAssetOrder(li.id)">{{$t('common.immediatePurchaseBtn')}}</a>
        <a href="javascript:void(0);" v-if="currentAccount == li.seller_name" class="pay-btn"  @click="cancelNHAssetOrder(li.id)">{{$t('common.cancellationOfOrderBtn')}}</a>
      </div>


    </div>

    <div class="center-main">
      <div class="paging-bar">
        
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            background
            class="marl20"
            layout="prev, pager, next"
            :page-size="8"
            :total="count">
          </el-pagination>
      </div>

            <!-- :current-page.sync="currentPage"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange" -->
    </div>
</div>
</template>


<script>
import { queryNHAssetOrders, queryAssets, fillNHAssetOrder, cancelNHAssetOrder } from '../../libs/bcx.api'
import { cacheSession, cacheKey } from '../../libs/Utils'
export default {
    data () {
        return {
          count: 1000,
          currentPage: 1,
          pageSize:8,
          assetOrdersList: [],

          currentAccount: cacheSession.get(cacheKey.accountName)
        }
    },
    watch: {
    },
    mounted(){
      this.queryNHAssetOrders()
      this.queryAssets()
    },
    methods: {
      cancelNHAssetOrder(orderId){
        
        let _this = this
        cancelNHAssetOrder(orderId).then(function (res) {
          _this.queryNHAssetOrders()
        })
      },
      fillNHAssetOrder(orderId){
        let _this = this
        fillNHAssetOrder(orderId).then(function (res) {
          _this.queryNHAssetOrders()
        })
      },
      queryAssets(){
        queryAssets('1.3.0').then(function (res) {
          // console.log('-------queryAssets-------res-------')
          // console.log(res)
        })
      },

      queryNHAssetOrders(){
        let _this = this
        let params = {
          assetIds: '',
          worldViews: '',
          baseDescribe: '',
          pageSize: this.pageSize,
          page: this.currentPage
        }
        queryNHAssetOrders(params).then(res=>{
          if (res.code == 1) {
            for (let i = 0; i < res.data.length; i++) {
              res.data[i].base_describe
              res.data[i].base_describe_json = JSON.parse(res.data[i].base_describe)
              let iconPath = res.data[i].base_describe_json.icon
              if (iconPath) {
                if (iconPath.indexOf('http') > -1) {
                  res.data[i].icon = iconPath
                } else {
                  res.data[i].icon = 'http://47.75.186.60/itemimgs/' + iconPath
                }
              }
              
              
            }
          _this.assetOrdersList = res.data
            _this.count = res.total
          }
        })
      },
      
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        let _this = this
        console.log(`当前页: ${val}`);
        _this.currentPage = val
          _this.queryNHAssetOrders()
      },
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
  /* width: 1170px; */
  width: 1050px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-items:center;
}
.trading-container{
  width:240px;
  height:330px;
  background:rgba(255,255,255,1);
  box-shadow:0px 2px 13px 0px rgba(30,30,30,1);
  border-radius:4px;
  margin-right: 30px;
  margin-bottom: 35px;
}
.trading-container:nth-child(4n){
  margin-right: 0;
}
.trading-container .icon{
  width:85px;
  height:85px;
  margin: 24px auto 0;
  display: block;
}
.trading-container .trading-title{
  width: 100%;
  height:32px;
  font-size: 20px;
  font-weight:500;
  color:rgba(65,61,103,1);
  line-height:32px;
  margin: 14px auto 0;
  text-align: center;
  margin-bottom: 11px;
}
.trading-attr{
  width: 160px;
  height: 26px;
  line-height: 26px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items:center;
  margin: 0 auto;
}
.trading-attr p:first-child{
  font-size: 16px;
  width: 30%;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.trading-attr p:last-child{
  width: 70%;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.pay-btn{
  width:120px;
  height:35px;
  line-height: 35px;
  background:rgba(67,78,255,1);
  box-shadow:0px 2px 10px 0px rgba(203,203,203,1);
  border-radius:20px;
  margin: 25px auto 0;
  font-size:16px;
  font-weight:600;
  color:rgba(255,255,255,1);
  text-align: center;
  display: block;
  cursor: pointer;
}
@media screen and (max-width: 1400px){
  .center-main{
    width: 787px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items:center;
  }
    
  .title{
    padding-top: 52px;
    padding-bottom: 22px;
    /* height:56px; */
    font-size:30px;
    font-weight:600;
    color:rgba(255,255,255,1);
    line-height: 42px;
    text-align: center;
  }
  .trading-container{
    width: 180px;
    height: 247px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 13px 0px rgba(30,30,30,1);
    border-radius: 4px;
    margin-right: 22px;
    margin-bottom: 26px;
  }
  .trading-container:nth-child(4n){
    margin-right: 0;
  }
  .trading-container .icon{
    width:63px;
    height:63px;
    margin: 18px auto 0;
    display: block;
  }
  .trading-container .trading-title{
    width: 100%;
    height: 24px;
    font-size: 16px;
    font-weight:500;
    color:rgba(65,61,103,1);
    line-height: 24px;
    margin: 10px auto 0;
    text-align: center;
    margin-bottom: 8px;
  }
  .trading-attr{
    width: 120px;
    height: 20px;
    line-height: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items:center;
    margin: 0 auto;
  }
.trading-attr p:first-child{
  width: 30%;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.trading-attr p:last-child{
  width: 70%;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
  .pay-btn{
    width: 90px;
    height: 26px;
    line-height: 26px;
    background:rgba(67,78,255,1);
    box-shadow:0px 2px 10px 0px rgba(203,203,203,1);
    border-radius: 20px;
    margin: 19px auto 0;
    font-size: 12px;
    font-weight:600;
    color:rgba(255,255,255,1);
    text-align: center;
    display: block;
    cursor: pointer;
  }
}
</style>

