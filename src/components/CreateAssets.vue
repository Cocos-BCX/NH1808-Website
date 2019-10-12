<template>
<div>
  <div class="full-screen-bg"></div>
  <createworldview :isshowmask='showcreateworldview' @listenChildren="getChildren"></createworldview>
  <div class="create-assets-container">
    <div class="create-assets-main">
        <div class="form-bar">
          <p class="form-header">{{$t('createassets[0].key')}}</p>
          <input type="text" class="form-input" v-model="baseData.name" :placeholder="$t('createassets[0].placeholder')">
        </div>

        
        <div class="form-bar">
          <p class="form-header">{{$t('createassets[1].key')}}</p>
          <input type="text" class="form-input" v-model="NHAssetsCount" :placeholder="$t('createassets[1].placeholder')">
        </div>

        
        <div class="form-bar">
          <p class="form-header">{{$t('createassets[2].key')}}</p>
          <input type="text" class="form-input" v-model="assetId" :placeholder="$t('createassets[2].placeholder')">
        </div>

        
        <div class="form-bar">
          <p class="form-header">{{$t('createassets[3].key')}}</p>
          <!-- <input type="text" class="form-input"> -->
          
          <el-select v-model="worldView" class="form-select" placeholder="">
            <el-option
              v-for="item in myWorldView"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
          <a href="javascript:void(0);" class="form-create-world-view" @click="createWorldViewFn()">{{$t('common.createViewWorld')}} +</a>
        </div>

        
        <div class="form-bar">
          <p class="form-header">{{$t('createassets[4].key')}}</p>
          <!-- <input type="text" class="form-input" placeholder="如“炸弹”"> -->
          <div class="form-option">
            <img id="avatar-icon" src="../assets/images/updateImg.png" alt="">
            <input type="file" id="avatar" value="上传图片" placeholder="上传图片">
          </div>
        </div>

        <!-- <img src="https://cocosbcx.oss-cn-beijing.aliyuncs.com/chain/20190923143525" alt=""> -->
        
        <!-- <div class="form-bar">
          <p class="form-header">基础数据</p>
          <input type="text" class="form-input" placeholder="属性名">
        </div> -->

        
        <div class="form-bar">
          <p class="form-header">{{$t('createassets[5].key')}}</p>
          <div class="base-data-content">
              <ul class="base-date-display" v-for="(value, key) in baseData" v-if="baseData.length != 0" :key="key">
                <p class="base-date-display-remove">
                  <span class="base-date-display-text" @click="removeBaseData(key)">{{$t('common.removebtn')}}</span>
                </p>
                <li class="base-date-key-display">{{key}}</li>
                <li class="base-date-value-display">{{value}}</li>
              </ul>
              <input type="text" class="base-data-key-input" v-model="baseDataKey">
              <input type="text" class="base-data-value-input" v-model="baseDataValue">
              <ul class="base-date-add-btn">
                <a href="javascript:void(0);" class="add-btn" @click="addBaseData()">{{$t('common.addbtn')}} +</a>
              </ul>
          </div>
        </div>
    </div>
    <div class="submit-bar ">
      <a href="javascript:void(0);" class="base-btn go-back" @click="routerBack()">{{$t('common.goback')}}</a>
      <a href="javascript:void(0);" class="base-btn confirm" @click="confirmCreatNHAsset()">{{$t('common.confirm')}}</a>
    </div>
  </div>
</div>
</template>


<script>
import { queryNHCreator, creatNHAsset } from '../../libs/bcx.api'
import createworldview from './common/CreatWorldView'
export default {
    data () {
        return {
          // 显示创建世界观
          showcreateworldview: false,

          myWorldView: [],
          options: [],

          
          assetId: '',
          worldView: '',
          baseDescribe: '',
          NHAssetsCount: '',
          baseData: {},

          // 基础数据
          baseDataKey: '',
          baseDataValue: ''
        }
    },
    watch: {
    },
    mounted(){
      let _this = this
      this.queryNHCreator()
      document.getElementById('avatar').addEventListener('change', function (files) {
        console.log('-------------------')
        console.log(document.getElementById('avatar').files[0])
        _this.uploadImg(document.getElementById('avatar').files[0])
      });
    },
    methods: {
      // NH资产创建
      confirmCreatNHAsset(){
        let _this = this
        let baseDescribe = JSON.stringify(_this.baseData)
        let params = {
          
          assetId: this.assetId,
          worldView: this.worldView,
          baseDescribe: baseDescribe,
          NHAssetsCount: this.NHAssetsCount,
          // baseData: this.baseData
        }
        console.log(params)
        creatNHAsset(params).then(res => {
          console.log('--------creatNHAsset--------')
          console.log(res)
          if (res.code == 1) {
            _this.$router.back()
          }
        })
      },
      removeBaseData(key){
        let _this = this
        let json = _this.baseData
        delete json[key]
        _this.baseData = {}
        _this.baseData = json
        console.log(_this.baseData)
      },
      addBaseData(){
        let _this = this
        let json = _this.baseData
        json[_this.baseDataKey] = _this.baseDataValue
        _this.baseData = {}
        _this.baseData = json
        console.log(_this.baseData)
      },
      // 世界观列表
      queryNHCreator(){
        let _this = this
        queryNHCreator().then(res=>{
          console.log('----------queryNHCreator-----------')
          console.log(res)
          if (res.code == 1) {
            _this.myWorldView = res.data.world_view
            console.log('-----------_this.myWorldView------------')
            console.log(_this.myWorldView)
          }
        })

      },
      uploadImg: function (files) {
        let _this = this
        var formData = new FormData();
        formData.append("picture", files);
        this.$axios.post('http://t.cocosbcx.net/api/v1/upload/', formData).then(function (response) {
          console.log('then')
          console.log(response);
          let resData = response.data
          if (resData.code == 1) {
            console.log('--------resData.code-----------')
            console.log(resData.key)
            let json = _this.baseData
            json['icon'] = 'https://cocosbcx.oss-cn-beijing.aliyuncs.com/' + resData.key
            _this.baseData = {}
            _this.baseData = json
            console.log(_this.baseData)
          }
        }).catch(function (error) {
          console.log('error');
          console.log(error);
        });
      },
      routerBack(){
        let _this = this
        this.$router.back(-1)
      },
      
      createWorldViewFn() {
        this.showcreateworldview = true
      },
      getChildren (param) {
        let _this = this
        this.showcreateworldview = false
        if (param) {
          if (param.code == 1) {
            // _this.$router.push('/myassets')
            _this.queryNHCreator()
          }
        }
      },
    },
    components: {
      createworldview: createworldview,
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
.create-assets-container{
  position: fixed;
  top: 50%;
  left: 50%;
  width:830px;
  height:580px;
  margin-left: -415px;
  margin-top: -290px;
  background:rgba(255,255,255,1);
  box-shadow:0px 2px 13px 0px rgba(30,30,30,1);
  border-radius:4px;
}
.create-assets-main{
  padding-left: 58px;
  padding-right: 58px;
  padding-top: 62px;
  height: 500px;
  overflow-y: auto;
}
.create-assets-container .form-bar{
  width: 100%;
  display: flex;
  margin-top: 20px;
}
.create-assets-container .form-bar:first-child{
  margin-top: 0;
}
.form-header{
  width: 88px;
  height:48px;
  line-height: 48px;
  font-size:16px;
  font-weight:400;
  color:rgba(51,51,51,1);
}
.form-input{
  width:611px;
  height:48px;
  line-height: 48px;
  background:rgba(255,255,255,1);
  border-radius:4px;
  border:1px solid rgba(207,207,207,1);
  font-size:16px;
  font-weight:400;
  color:rgba(126,138,163,1);
  text-indent: 14px;
  box-sizing: border-box;
}
.form-option{
  width:611px;
  height:48px;
  line-height: 48px;
  background:rgba(255,255,255,1);
  border-radius:4px;
  font-size:16px;
  font-weight:400;
  color:rgba(126,138,163,1);
  box-sizing: border-box;
  position: relative;
}
.form-select{
  width:462px;
  height:48px;
  background:rgba(255,255,255,1);
  border-radius:4px;
}
.base-data-content{
  width: 611px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.base-date-display{
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.base-date-display .base-date-display-remove .base-date-display-text{
  height: 48px;
  line-height: 48px;
  font-size: 18px;
  color: #fff;
  margin-right: 20px;
  cursor: pointer;
}
.base-date-display .base-date-display-remove{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  line-height: 48px;
  background: #000;
  opacity: 0.3;
  z-index: 200;
  display: none;
  text-align: right;
}
.base-date-display:hover .base-date-display-remove{
  display: block;
}
.base-data-key-input{
  width: 293px;
  height:48px;
  line-height: 48px;
  background:rgba(255,255,255,1);
  border-radius:4px;
  font-size:16px;
  font-weight:400;
  color:rgba(126,138,163,1);
  margin-right: 20px;
  border:1px solid rgba(207,207,207,1);
  box-sizing: border-box;
  text-indent: 0.5em;
} 
.base-data-value-input{
  width: 293px;
  height: 48px;
  line-height: 48px;
  background:rgba(255,255,255,1);
  border-radius:4px;
  font-size:16px;
  font-weight:400;
  color:rgba(126,138,163,1);
  border:1px solid rgba(207,207,207,1);
  box-sizing: border-box;
  text-indent: 0.5em;
}
.base-date-key-display{
  width: 293px;
  height:48px;
  line-height: 48px;
  background:rgba(255,255,255,1);
  border-radius:4px;
  font-size:16px;
  font-weight:400;
  color:rgba(126,138,163,1);
  margin-right: 20px;
  text-indent: 0.5em;
}
.base-date-value-display{
  width: 293px;
  height:48px;
  line-height: 48px;
  background:rgba(255,255,255,1);
  border-radius:4px;
  font-size:16px;
  font-weight:400;
  color:rgba(126,138,163,1);
  text-indent: 0.5em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.base-date-add-btn{
  width: 100%;
  height: 60px;
  line-height: 40px;
  padding-bottom: 20px;
  text-align: right;
}
.base-date-add-btn .add-btn{
  font-size:16px;
  font-weight:500;
  color:rgba(67,78,255,1);
}
.form-select input {
  height:48px;
}
.form-create-world-view {
  width:150px;
  height:46px;
  line-height: 46px;
  background:rgba(67,78,255,1);
  border-radius:4px;
  font-size:18px;
  font-weight:500;
  color:rgba(255,255,255,1);
  text-align: center;
  margin-left: 14px;
}
.submit-bar {
  height: 80px;
  line-height: 80px;
  display: flex;
  justify-content: center;
}
.submit-bar .base-btn{
  width:116px;
  height:40px;
  line-height: 40px;
  display: inline-block;
  font-weight:600;
  font-size:16px;
  border-radius:20px;
  text-align: center;
}
.submit-bar .base-btn.confirm{
  color:rgba(255,255,255,1);
  background:rgba(67,78,255,1);
}
.submit-bar .base-btn.go-back{
  border:1px solid rgba(67,78,255,1);
  color:rgba(67,78,255,1);
  margin-right: 80px;
}
#avatar{
  display: block;
  height: 26px;
  width: 58px;
  opacity: 0;
  position: absolute;
  top: 50%;
  margin-top: -13px;
  z-index: 200;
}
#avatar-icon{
  display: block;
  height: 26px;
  width: 58px;
  position: absolute;
  top: 50%;
  margin-top: -13px;
  z-index: 100;
}
</style>

