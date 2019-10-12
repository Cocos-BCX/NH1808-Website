<template>
<div class="mask-container" v-if="isshow">
  <div class="mask" @click="hideMask()"></div>
  <div class="container">
    <p class="title">{{$t('sellOutAssets.title')}}</p>
    <div class="input-bar">
      <p class="input-bar-head">{{$t('sellOutAssets.price')}}</p>
      <input type="text" class="input-bar-price" v-model="price">
      <el-select v-model="currentUnit" class="input-bar-unit-drop">
        <el-option
          v-for="item in unitList"
          :key="item.symbol"
          :label="item.symbol"
          :value="item.symbol">
        </el-option>
      </el-select>
    </div>
    <div class="input-bar">
      <p class="input-bar-head">{{$t('sellOutAssets.expiration')}}</p>
      <input type="text" class="input-bar-content" v-model="expiration">
      <p class="input-bar-unit">{{$t('sellOutAssets.expirationUnit')}}</p>
    </div>
    <div class="input-bar">
      <p class="input-bar-head">{{$t('sellOutAssets.memo')}}</p>
      <textarea class="textarea-bar-content" v-model="memo"></textarea>
    </div>
    <p class="input-error" v-if="errorInfo">{{errorInfo}}</p>
    <div class="btn-bar">
      <a href="javascript:void(0);" class="goback" @click="goback()">{{$t('common.goback')}}</a>
      <a href="javascript:void(0);" class="confirm" @click="confirm()">{{$t('common.confirm')}}</a>
    </div>
  </div>
</div>
</template>


<script>
import { creatWorldView, queryAssets, creatNHAssetOrder  } from '../../../libs/bcx.api'
import { Message } from 'element-ui';
export default {
    props: ['isshowmask', 'NHAssetId'],
    data () {
        return {
          errorInfo: '',
          isshow: false,
          viewworldname: '',

          unitList: [],
          currentUnit: '',
          price: '',
          expiration: '',
          memo: ''
        }
    },
    watch: {
      'isshowmask': function (val) {
        this.isshow = val
        this.queryAssets('')
      }
    },
    mounted(){
      // this.queryAssets('')
    },
    methods: {
      goback: function () {
        let _this = this
        this.$emit('listenChildren', false)
      },
      confirm: function () {
        let _this = this
        let params = {
          // 写死账户名  公司指定出售单账户
          otcAccount: 'otcaccount',
          orderFee: 0,
          price: this.price,
          priceAssetId: this.currentUnit,
          expiration: this.expiration,
          memo: this.memo,
          // id
          NHAssetId: this.NHAssetId,
          onlyGetFee: false
        }
        creatNHAssetOrder(params).then(function (res) {
          console.log(res)
          if (res.code == 1) {
            Message({
              duration: 1200,
              message: _this.$t('interFaceMessage.creatNHAssetOrder[1]'),
              type: 'success',
            })
            _this.$emit('listenChildren', res)
          } else if (res.code == 402) {
            _this.$emit('listenChildren', false)
          } else {
            _this.errorInfo = res.message
          }
        }).catch(function (params) {
          console.log('--------creatWorldView-------params--------')
          console.log(params)
        })
      },
      queryAssets(){
        let _this = this
        queryAssets('').then(function (res) {
          console.log('------------------')
          console.log(res)
          _this.unitList = res.data
          _this.currentUnit = res.data[0].symbol
        })
      },
      hideMask: function (){
        this.$emit('listenChildren', false)
      }
    }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mask-container{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
}
.mask{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.container{
  width:462px;
  /* height:326px; */
  background:rgba(255,255,255,1);
  box-shadow:0px 2px 20px 0px rgba(162,162,166,1);
  border-radius:4px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  position: absolute;
  top: 45%;
  left: 50%;
  margin-top: -163px;
  margin-left: -231px;
}
.container .title{
  width: 100%;
  height: 102px;
  line-height: 102px;
  text-align: center;
  font-size:20px;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.container .input-bar{
  width: 100%;
  margin-top: 20px;
  display: flex;
  position: relative;
}
.input-bar-head{
  width: 80px;
  height: 48px;
  line-height: 50px;
  font-size:16px;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.input-bar-content{
  width: 322px;
  height: 48px;
  line-height: 48px;
  font-size:16px;
  background:rgba(255,255,255,1);
  border-radius:4px;
  border:1px solid rgba(207,207,207,1);
  text-indent: 0.5em;
  color:rgba(51,51,51,1);
  box-sizing: border-box;
}
.textarea-bar-content{
  resize: none;
  width: 322px;
  height: 96px;
  line-height: 32px;
  font-size:16px;
  background:rgba(255,255,255,1);
  border-radius:4px;
  border:1px solid rgba(207,207,207,1);
  text-indent: 0.5em;
  color:rgba(51,51,51,1);
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
}
.input-bar-price{
  width: 210px;
  height: 48px;
  line-height: 48px;
  font-size:16px;
  background:rgba(255,255,255,1);
  border-radius:4px;
  border:1px solid rgba(207,207,207,1);
  text-indent: 0.5em;
  color:rgba(51,51,51,1);
  box-sizing: border-box;
}
.input-bar-unit-drop{
  width: 116px;
  height: 48px;
  line-height: 48px;
  font-size:16px;
  background:rgba(255,255,255,1);
  border-radius:4px;
  color:rgba(51,51,51,1);
}
.input-bar-unit{
  text-align: center;
  width: 60px;
  height: 44px;
  line-height: 46px;
  font-size:16px;
  background:rgba(255,255,255,1);
  border-radius:4px;
  color:rgba(51,51,51,1);
  position: absolute;
  right: 2px;
  top: 2px;
}
.input-error{
  width: 100%;
  line-height: 30px;
  font-size: 14px;
  color: #ff0000;
  text-indent: 90px;
}
.btn-bar{
  width: 100%;
  margin-top: 40px;
  text-align: center;
}
.btn-bar a{
  display: inline-block;
  width:116px;
  height:40px;
  line-height: 40px;
  text-align: center;
  border-radius:20px;
  margin-left: 40px;
  font-size:16px;
}
.btn-bar a:nth-child(1){
  margin-left: 0px;
}
.btn-bar a.confirm{
  background:rgba(67,78,255,1);
  color:rgba(255,255,255,1);
}
.btn-bar a.goback{
  border:1px solid rgba(67,78,255,1);
  color:rgba(67,78,255,1);
}
</style>

