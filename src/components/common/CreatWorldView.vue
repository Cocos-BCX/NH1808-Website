<template>
<div class="mask-container" v-if="isshow">
  <div class="mask" @click="hideMask()"></div>
  <div class="container">
    <p class="title">{{$t('creatWorldView.title')}}</p>
    <div class="input-bar">
      <p class="input-bar-head">{{$t('creatWorldView.worldViewName')}}</p>
      <input type="text" class="input-bar-content" v-model="viewworldname">
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
import { creatWorldView } from '../../../libs/bcx.api'
export default {
    props: ['isshowmask'],
    data () {
        return {
          errorInfo: '',
          isshow: false,
          viewworldname: ''
        }
    },
    watch: {
      'isshowmask': function (val) {
        console.log('val')
        console.log(val)
        this.errorInfo = ''
        this.viewworldname = ''
        this.isshow = val
      }
    },
    mounted(){
    },
    methods: {
      goback: function () {
        let _this = this
        this.$emit('listenChildren', false)
      },
      confirm: function () {
        let _this = this
        creatWorldView(_this.viewworldname).then(res => {
          console.log('--------creatWorldView-------res--------')
          console.log(res)
          if (res.code == 1) {
            _this.$emit('listenChildren', res)

          } else {
            if (res.message.indexOf('You\'re not a nh asset creator')>-1) {
              // _this.errorInfo = res.message
              _this.errorInfo = _this.$t('interFaceMessage.creatWorldView[2]')
            }
            
          }
          
        }).catch(function (params) {
          console.log('--------creatWorldView-------params--------')
          console.log(params)
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
  height:326px;
  background:rgba(255,255,255,1);
  box-shadow:0px 2px 20px 0px rgba(162,162,166,1);
  border-radius:4px;
  padding-left: 50px;
  padding-right: 50px;
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
  width: 282px;
  height: 48px;
  line-height: 48px;
  font-size:16px;
  background:rgba(255,255,255,1);
  border-radius:4px;
  border:1px solid rgba(207,207,207,1);
  text-indent: 0.5em;
  color:rgba(51,51,51,1);
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

