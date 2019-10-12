<template>
<div>
    <div class="banner_box">
        <!-- <div class="lang-bar">
            <div class="currentAcount" v-if="!currentAccount">Login</div>
            <div class="currentAcount" v-if="currentAccount">hi~ {{currentAccount}}</div>
            <div class="lang">{{currentLang}}
                <div class="lang-drop">
                    <li @click="changeLang('zh')">中文</li>
                    <li @click="changeLang('en')">English</li>
                </div>
            </div>
        </div> -->
        <topheader></topheader>


        <div class="banner_title_1">COCOS 1808</div>
        
        <div v-if="$i18n.locale=='zh'">
            <div class="banner_title_2">非同质数字资产标准和世界观系统</div>
            <!-- <input type="file" id="avatar" value="上传图片">
            <img src="https://cocosbcx.oss-cn-beijing.aliyuncs.com/chain/20190917104642" alt=""> -->
            <div class="banner_title_3">Non-Homogeneous Asset Standard & The Multiverse System for DLT Network</div>
        </div>
        <div v-if="$i18n.locale=='en'" class="banner_title_en_2">Non-Homogeneous Asset Standard<br> & The Multiverse System for DLT Network</div>
        <a :href="$i18n.locale=='zh'? whitePaperGithubAddr.zh: whitePaperGithubAddr.en" class="banner_WhitePaper_entrance" target="_blank">
        <img class="skip-btn" src="../assets/images/skip-icon.png" alt=""/> {{$t('banner.WhitePaper')}}</a>

        <div class="business-entrance">
          <router-link class="business-entrance-main" to="/myassets">
            <img src="../assets/images/banner/chain-acceptance.png" alt="">
            <ul class="info">
              <p class="title">{{$t('banner.createAssets')}}</p>
              <li class="describe">{{$t('banner.createAssetsDescribe')}}</li>
            </ul>
            <!-- /myassets -->
            <router-link to="/myassets">
              <img class="arrow-right" src="../assets/images/arrow-right.png" alt="">
            </router-link>
            <!-- <a href="javascript:void(0);" @click="routerMyassets()">
              <img class="arrow-right" src="../assets/images/arrow-right.png" alt="">
            </a> -->
          </router-link>
          <router-link class="business-entrance-main" to="/tradingmarket">
            <img src="../assets/images/banner/trading-market.png" alt="">
            <ul class="info">
              <p class="title">{{$t('banner.tradingMarket')}}</p>
              <li class="describe">{{$t('banner.tradingMarketDescribe')}}</li>
            </ul>
            <a href="/tradingmarket">
              <img class="arrow-right" src="../assets/images/arrow-right.png" alt="">
            </a>
          </router-link>
          <div class="business-entrance-main developing">
            <div class="developing-mask">
                {{$t('mask.title1')}}...
            </div>
            <img src="../assets/images/banner/creating-assets.png" alt="">
            <ul class="info">
              <p class="title">{{$t('banner.crossLinkAcceptance')}}</p>
              <li class="describe">{{$t('banner.crossLinkAcceptanceDescribe')}}</li>
            </ul>
            
            <img class="arrow-right" src="../assets/images/arrow-right.png" alt="">
          </div>
        </div>
    </div>
    
    
    <!-- 多链实现 -->
    <div class='container-cocos1808'>
        <div class="container-title">
            <div class="title-main">
                <p class="title-content">{{$t('Implementations.title')}}</p>
                <div class="title-main-bg"></div>
            </div>
        </div>

        <div class="display-flex">
            <div class="col-4" v-for="(item, index) in ImplementationsInfo" :key="index" :class="{'dom-mask-show': item.ifUnderDevelopment}">
                <div class="dom-mask">
                    <p class="dom-mask-content">{{$t('mask.title1')}}</p>
                </div>
                <a :target="item.GitHubAddr=='javacript:void(0);'?'_self':'_blank'" :href="item.GitHubAddr">
                    <img :src="ImplementationsImgArr[item.imgName]" alt=""/>
                </a>
                
            </div>
        </div>
    </div>
    
    
    <!-- 表格 -->
    <div class='wp100-container banner-table-bg mart80'>
      <div class="table-container">
        <p class="main-title">{{$t('differenceTable.title')}}</p>
        <table class="table-main">
          <tr>
            <td class="slash">
              <p>{{$t('differenceTable.tableHead.first')[0]}}</p>
              <p>{{$t('differenceTable.tableHead.first')[1]}}</p>
            </td>
            <td>ERC-721</td>
            <td>ERC-1155</td>
            <td>ERC-998</td>
            <td>BCX-NHAS-1808</td>
          </tr>
          <tr v-for="(list, index) in $t('differenceTable.content')" :key="index">
            <td v-for="(li, listIndex) in list" :key="listIndex">{{li}}</td>
          </tr>
        </table>
      </div>
    </div>



    <div class="common-container" v-for="(item, index) in $t('commonContainer')" :key="index">
        <div v-if="index%2 == 0" class="display-flex">
            <div class="picture-main">
                <img :src="$i18n.locale=='zh'? mainZh[item.imgName] : mainEn[item.imgName]" alt=""/>
            </div>
            <div class="content-main">
                <p class="title">{{item.title}}</p>
                <p class="content">{{item.content}}</p>
                <a :href="item.routerUrl" target="_blank" class="more-btn"></a>
            </div>
        </div>
        <div v-if="index%2 != 0" class="display-flex">
            <div class="content-main">
                <p class="title">{{item.title}}</p>
                <p class="content">{{item.content}}</p>
                <a :href="item.routerUrl" target="_blank" class="more-btn"></a>
            </div>
            <div class="picture-main">
                <img :src="$i18n.locale=='zh'? mainZh[item.imgName] : mainEn[item.imgName]" alt=""/>
            </div>
        </div>
    </div>
    

    <div class="wp100-container banner-bg mart80">
        <!-- <div class="container-title">
            <div class="title-main">
                <p class="title-content">{{$t('Partners.title')}}</p>
                <div class="title-main-bg"></div>
            </div>
        </div> -->
        <div class="partners-container">

          <p class="main-title">{{$t('Partners.title')}}</p>
          <div class="container-cocos1808 display-flex">
              <a :target="item.router=='javacript:void(0);'?'_self':'_blank'" :href="item.router" class="col-5" v-for="(item, index) in PartnersInfo" :key="index">
                  <img :src="PartnersImgArr[item.imgName]" alt=""/>
              </a>
          </div>
          <div class="welcome">{{$t('Partnership')}}dev@cocosbcx.io</div>
        </div>
    </div>
        

</div>
</template>


<script>
import mainZh from '../assets/images/main/zh'
import mainEn from '../assets/images/main/en'
import ImplementationsImgArr from '../assets/images/Implementations'
import PartnersImgArr from '../assets/images/Partners'
import axios from 'axios'
import { browserConnect, queryNHCreator, registerCreator } from '../../libs/bcx.api'
import { cacheSession, cacheKey } from '../../libs/Utils'
import { Message } from 'element-ui';
import topheader from './common/TopHeader'
// cacheSession.set(cacheKey.accountName, res.account_name)
export default {
    data () {
        return {
            showcreateworldview: true,
            // currentAccount: '',
            // currentLang: 'English',
            mainZh: mainZh,
            mainEn: mainEn,
            ImplementationsImgArr: ImplementationsImgArr,
            PartnersImgArr: PartnersImgArr,
            whitePaperGithubAddr: {
                zh: 'https://github.com/cocos-bcx/1808/blob/master/README_cn.md',
                en: 'https://github.com/cocos-bcx/1808'
            },
            ImplementationsInfo: [
                {
                    imgName: 'ETH',
                    GitHubAddr: 'https://github.com/cocos-bcx/ERC-1808',
                    ifUnderDevelopment: false

                },
                {
                    imgName: 'EOS',
                    GitHubAddr: 'https://github.com/cocos-bcx/EOS-1808',
                    ifUnderDevelopment: false
                },
                {
                    imgName: 'COCOS',
                    GitHubAddr: 'https://github.com/cocos-bcx/1808',
                    ifUnderDevelopment: false
                },
                {
                    imgName: 'TRON',
                    GitHubAddr: 'javacript:void(0);',
                    ifUnderDevelopment: true
                }
            ],
            PartnersInfo: [
                {
                    imgName: 'Dapp',
                    router: 'https://dapp.review/'
                },
                {
                    imgName: 'bitpai',
                    router: 'https://bitpie.com/'
                },
                {
                    imgName: 'matrix',
                    router: 'http://matrixdapp.com/'
                },
                {
                    imgName: 'slowMist',
                    router: 'https://slowmist.io/'
                }, 
                {
                    imgName: 'Doscoin',
                    router: 'https://boscoin.io/'
                },
                {
                    imgName: 'tokenPocket',
                    router: 'https://www.tokenpocket.pro/'
                },
                {
                    imgName: 'lianwantang',
                    router: 'https://chainplay.fun/'
                },
                {
                    imgName: 'taiken',
                    router: 'http://www.tokenplanet.net/'
                },
                {
                    imgName: 'harmony',
                    router: 'https://harmony.one/'
                },
                {
                    imgName: 'cardmaker',
                    router: 'https://www.cardmaker.io/'
                },
                {
                    imgName: 'blocklords',
                    router: 'https://www.blocklords.io/'
                },
                {
                    imgName: 'opensea',
                    router: 'https://opensea.io/'
                },
                {
                    imgName: 'matic',
                    router: 'https://matic.network/'
                },
                {
                    imgName: 'bo',
                    router: 'https://cobo.com/'
                },
                {
                    imgName: 'infinitoWallet',
                    router: 'https://www.infinitowallet.io/'
                },
                {
                    imgName: 'alto',
                    router: 'http://alto.io/'
                },
                // {
                //     imgName: 'jimu',
                //     router: 'javacript:void(0);'
                // },
                // {
                //     imgName: 'tokenPocket',
                //     router: 'https://www.tokenpocket.pro/'
                // },
            ]
        }
    },
    watch: {
    },
    mounted(){
      let _this = this
      // document.getElementById('avatar').addEventListener('change', function (files) {
      //   console.log('-------------------')
      //   console.log(document.getElementById('avatar').files[0])
      //   _this.uploadImg(document.getElementById('avatar').files[0])
      // });
      // if (_this.currentAccount) {
      //   this.routerMyassets()
      // }
      // this.browserConnect()
    },
    methods: {
        // browserConnect: function () {
        //   let _this = this
        //   browserConnect().then(res => {
        //     if (res) {
        //       _this.currentAccount = cacheSession.get(cacheKey.accountName)
        //     }
        //   })
        // },
        routerMyassets: function () {
          let _this = this
          let currentAccount = cacheSession.get(cacheKey.accountName)
          if (currentAccount) {
            queryNHCreator().then(async res=>{
              if (res.code == 1) {
                console.log(res.data.world_view.length)
                let worldViewNum = res.data.world_view.length
                if (worldViewNum == 0) {
                    Message({
                      duration: 1200,
                      message: '需要创建世界观',
                      type: 'error',
                    })
                }
              } else if (res.code == 0) {
                let errorData = res.error
                if (errorData.code == 11) {
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
          }
        },
        // changeLang: function (params) {
        //     this.$i18n.locale = params
        //     if (this.$i18n.locale == 'zh') {
        //         this.currentLang = 'English'
        //     } else {
        //         this.currentLang = '中文'
        //     }
        // },
        uploadImg: function (files) {
          var formData = new FormData();
          formData.append("picture", files);
          axios.post('http://t.cocosbcx.net/api/v1/upload/', formData).then(function (response) {
          }).catch(function (error) {
            console.log('error');
            console.log(error);
          });
        },
        // getChildren: function (param) {
        //   console.log('---------param------------')
        //   console.log(param)
        //   if (param.code == 1) {
        //     this.showcreateworldview = false
        //     _this.$router.push('/myassets')
        //   }
          
        // }
    },
    components: {
      topheader: topheader
    }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dom-mask-show:hover .dom-mask{
    display: block;
}
.developing .developing-mask{
  position: absolute;
  width: 100%;
  height: 198px;
  line-height: 198px;
  top: 0;
  left: 0;
  background:rgba(56,66,210,0.6);
  z-index: 200;
  display: flex;
  color: rgba(255, 255, 255,1);
  font-size: 24px;
  text-align: center;
  display: none;
}
.developing:hover .developing-mask{
  display: block;
}
.dom-mask{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 200;
    display: none;
}
.dom-mask-content{
    position: absolute;
    top: 70%;
    left: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size: 16px;
}
/* 
.lang-bar{
  width: 1170px;
  margin: 0 auto;
  text-align: right;
}
.lang{
    width: 70px;
    height: 24px;
    line-height: 22px;
    border: 1px solid #fff;
    border-radius: 3px;
    margin: 20px auto 0;
    text-align: left;
    color: #fff;
    position: relative;
    text-indent: 0.7em;
    display: inline-block;
}
.currentAcount{
    height: 24px;
    line-height: 22px;
    margin-top: 20px;
    margin-right: 20px;
    text-align: left;
    color: #fff;
    display: inline-block;
    font-size: 14px;
}
.lang:hover .lang-drop{
    display: block;
}
.lang-drop{
    width: 70px;
    position: absolute;
    top: 22px;
    left: -1px;
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    border-radius: 3px;
    overflow: hidden;
    background: #61d4f2;
    display: none;
}
.lang-drop li{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #fff;
    border-bottom:  1px solid #fff;
    cursor: pointer;
}
.lang:after{
    content: "";
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: #fff transparent transparent;
    position: absolute;
    top: 10px;
    right: 3px;
} */
.banner_box{
  margin: auto;
  height: 700px;
  overflow: hidden;
  background: url('../assets/images/banner.png') no-repeat center center;
}
.banner_title_1 {
  width: 100%;
  height:59px;
  font-size:42px;
  /* font-weight:600; */
  color:rgba(255,255,255,1);
  line-height:59px;
  text-align: center;
  margin-top: 104px;
}
.banner_title_2 {
  width: 100%;
  height:48px;
  font-size:40px;
  /* font-weight:600; */
  color:rgba(255,255,255,1);
  line-height:48px;
  text-align: center;
  margin-top: 8px;
}
.banner_title_en_2 {
  margin: 7px auto 0;
  height: 78px;
  font-size: 26px;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height: 39px;
  text-align: center;
}
.banner_title_3 {
  width: 100%;
  height:35px;
  font-size:18px;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:40px;
  text-align: center;
}
.banner_WhitePaper_entrance {
  width: 180px;
  height: 18px;
  font-size: 18px;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:18px;
  margin: 64px auto 0;
  display: block;
  text-align: center;
}
.skip-btn {
  height: 18px;
  margin-right: 10px;
  vertical-align: -15%;
}
.business-entrance{
  margin-top: 49px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
}
.business-entrance-main{
  width:275px;
  height:200px;
  background:rgba(0,0,0,0.4);
  border-radius:4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
  margin-right: 32px;
  border:1px solid rgba(157,157,158,0.4);
  position: relative;
}
.arrow-right{
  width:24px;
  height:18px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -12px;
}
.business-entrance-main:hover{
  background:rgba(56,66,210,0.6);
}
.business-entrance-main:last-child{
  margin-right: 0;
}
.business-entrance-main .info{ 
  width: 168px;
  margin-left: 15px;
}
.business-entrance-main .info .title{
  height:28px;
  font-size:20px;
  font-weight:600;
  color:rgba(255,255,255,1);
  line-height:28px;
}
.business-entrance-main .info .describe{
  height:20px;
  font-size:14px;
  font-weight:400;
  color:rgba(226,226,226,1);
  line-height:20px;
  margin-top: 12px;
}
/* banner结束 */



.table-container{
  width: 100%;
  padding-top: 128px;
  padding-bottom: 73px;
}
.main-title{
  height:56px;
  font-size:40px;
  font-weight:600;
  color:rgba(255,255,255,1);
  line-height:56px;
  text-align: center;
}
table,tr,td{
  box-sizing: border-box;
  width: 230px;
}
table.table-main{
  border-collapse:collapse;
  width: 1200px;
  margin: 60px auto 0;
  color:rgba(255,255,255,1);
  font-size:26px;
  border-bottom:1px solid rgba(59,69,194,1);
  border-right:1px solid rgba(59,69,194,1);
  font-size: 20px;
}
table.table-main tr:nth-child(odd) td{
  background:rgba(248,248,249,0.08);
}
table.table-main tr:nth-child(even) td{
  background: rgba(6,13,23, 0.5);
}

table.table-main tr td:last-child{
  color:rgba(131,139,255,1);
}
table.table-main tr td{
  position: relative;
  text-align: center;
  height: 110px;
  padding-left: 10px;
  padding-right: 10px;
}
table.table-main tr:nth-child(1) td{
  height: 88px;
  line-height: 88px;
  background:rgba(67,78,255,1);
  color: #fff;
}
table.table-main tr td:nth-child(1){
  width: 220px;
  border-right:1px solid rgba(59,69,194,1);
  background:rgba(109,111,144,0.4);
  font-size: 24px;
}
table.table-main tr:nth-child(1) td{
  height: 88px;
  font-size: 26px;
}
table.table-main tr:nth-child(1) td:nth-child(1){
  background:rgba(67,78,255,1);
}

table.table-main tr:nth-child(1) td.slash:before{
  content: "";
  position: absolute;
  width: 1px;
  height: 236px;
  top:0;
  left:0;
  background-color: #363D9D;
  display: block;
  transform: rotate(-68deg);
  transform-origin: top;
}
table.table-main tr:nth-child(1) td p{
  height: 44px;
  line-height: 44px;
  color: #fff;
  font-size:26px;
}
table.table-main tr:nth-child(1) td p:nth-child(1){
  text-align: right;
  padding-right: 20px;
  line-height: 220%;
}
table.table-main tr:nth-child(1) td p:nth-child(2){
  text-align: left;
  padding-left: 20px;
  line-height: 150%;
}


.partners-container{
  padding-top: 75px;
}

.common-container {
  width: 1170px;
  margin: 50px auto 0;
  background:rgba(249,249,249,1);
  border:1px solid rgba(226,226,226,1);
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 24px;
  padding-right: 24px;
}
.display-flex {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.common-container .picture-main {
  width: 564px;
  height: 318px;
}
.common-container .picture-main img{
  width: 564px;
  height: 318px;
}
.common-container .content-main{
  width: 514px;
  height: 318px;
  position: relative;
}
.common-container .content-main .more-btn{
  width:85px;
  height:28px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: url('../assets/images/more-btn.png') no-repeat center center;
  background-size: 100% 100%;
  display: block;
}
.common-container .content-main .title{
  width: 100%;
  height: 74px;
  line-height: 74px;
  font-size:22px;
  font-weight:500;
  color:rgba(51,51,51,1);
  text-align: left;
}
.common-container .content-main .content{
  width: 100%;
  height: 196px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(51,51,51,1);
  line-height: 36px;
  text-align: left;
}

.container-cocos1808{
  width: 1170px;
  margin: 65px auto 0;
}
.display-flex{
  display: flex;
  flex-wrap: wrap;
}
.col-4{
  width: 270px;
  margin-right: 30px;
  margin-top: 50px;
  position: relative;
}
.col-4 a img{
  width: 100%;
}
.col-4:hover{
  box-shadow:0px 2px 12px 0px #d0d0d0;
}
.col-4:nth-child(4n+0){
  margin-right: 0;
}


.col-5{
  width: 210px;
  margin-right: 30px;
  margin-bottom: 50px;
  display: flex;
}
.col-5 img{
  width: 100%;
  cursor: pointer;
}
.col-5:hover{
  box-shadow:0px 2px 12px 0px #d0d0d0;
}
.col-5:nth-child(5n+0){
  margin-right: 0;
}


.welcome{
  /* height: 107px;
  line-height: 107px; */
  font-size:18px;
  font-weight:400;
  color:rgba(88,88,88,1);
  text-align: center;
  padding-bottom: 90px;
}


@media screen and (max-width: 1400px){
  /* 公共部分 */
  /* 公共部分结束 */


  .lang-bar{
    width: 877px;
    margin: 0 auto;
    text-align: right;
  }
  .common-container{
    width: 877px;
    margin: 50px auto 0;
    background:rgba(249,249,249,1);
    border:1px solid rgba(226,226,226,1);
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 24px;
    padding-right: 24px;
    /* display: flex;
    justify-content: space-between;
    box-sizing: border-box; */
  }
  .common-container .picture-main{
    width: 423px;
    height: 238px;
  }
  .common-container .picture-main img{
    width: 423px;
    height: 238px;
  }
  .common-container .content-main{
    width: 385px;
    height: 238px;
    position: relative;
  }
  .common-container .content-main .more-btn{
    width:85px;
    height:28px;
    position: absolute;
    right: 0;
    bottom: 0;
    background: url('../assets/images/more-btn.png') no-repeat center center;
    background-size: 100% 100%;
    display: block;
  }
  .common-container .content-main .title{
    width: 100%;
    height: 55px;
    line-height: 55px;
    font-size:20px;
    font-weight:500;
    color:rgba(51,51,51,1);
    text-align: left;
  }
  .common-container .content-main .content{
    width: 100%;
    height: 196px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(51,51,51,1);
    line-height: 22px;
    text-align: left;
  }

  .container-cocos1808{
    width: 877px;
    margin: 48px auto 0;
  }

  
  .col-4{
    width: 202px;
    margin-right: 23px;
    margin-top: 30px;
  }
  .col-5{
    width: 157px;
    margin-right: 23px;
    margin-bottom: 37px;
  }

  /* 表格 */
  table.table-main {
    width: 877px;
    font-size: 14px;
  }
  table.table-main tr td[data-v-8dc7cce2]:nth-child(1){
    font-size: 20px;
  }
  table.table-main tr:nth-child(1) td p{
    font-size:20px;
  }
  table.table-main tr:nth-child(1) td{
    font-size: 20px;
  }



}




.wp100-container{
  width: 100%;
  border-radius:8px;
}
.banner-bg{
  background:rgba(20,24,64,1);
}
.banner-table-bg{
    background: url('../assets/images/banner-table.png') no-repeat center center;
    background-size: 100% 100%;
}
</style>

