<template>
<div>
    <div class="banner_box">
        <div class="lang-bar">
            <div class="lang">{{currentLang}}
                <div class="lang-drop">
                    <li @click="changeLang('zh')">中文</li>
                    <li @click="changeLang('en')">English</li>
                </div>
            </div>
        </div>
        
        <div class="banner_title_1">COCOS 1808</div>
        
        <div v-if="$i18n.locale=='zh'">
            <div class="banner_title_2">非同质数字资产标准和世界观系统</div>
            <div class="banner_title_3">Non-Homogeneous Asset Standard & The Multiverse System for DLT Network</div>
        </div>
        <div v-if="$i18n.locale=='en'" class="banner_title_en_2">Non-Homogeneous Asset Standard<br> & The Multiverse System for DLT Network</div>
        <a :href="$i18n.locale=='zh'? whitePaperGithubAddr.zh: whitePaperGithubAddr.en" class="banner_WhitePaper_entrance" target="_blank">
        <img class="skip-btn" src="../assets/images/skip-icon.png" alt=""/> {{$t('banner.WhitePaper')}}</a>
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
    
    <div class='container-cocos1808'>

        <div class="container-title">
            <div class="title-main">
                <p class="title-content">{{$t('Partners.title')}}</p>
                <div class="title-main-bg"></div>
            </div>
        </div>

        <div class="display-flex">
            <a :target="item.router=='javacript:void(0);'?'_self':'_blank'" :href="item.router" class="col-5" v-for="(item, index) in PartnersInfo" :key="index">
                <img :src="PartnersImgArr[item.imgName]" alt=""/>
            </a>
        </div>
    </div>

    <div class="welcome">{{$t('Partnership')}}dev@cocosbcx.io</div>
</div>
</template>


<script>
import mainZh from '../assets/images/main/zh'
import mainEn from '../assets/images/main/en'
import ImplementationsImgArr from '../assets/images/Implementations'
import PartnersImgArr from '../assets/images/Partners'
export default {
    data () {
        return {
            currentLang: 'English',
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
    },
    methods: {
        changeLang: function (params) {
            this.$i18n.locale = params
            if (this.$i18n.locale == 'zh') {
                this.currentLang = 'English'
            } else {
                this.currentLang = '中文'
            }
        }
    }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dom-mask-show:hover .dom-mask{
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
}
.banner_box{
  margin: auto;
  height: 366px;
  overflow: hidden;
  background: url('../assets/images/banner.png') no-repeat center center;
}
.banner_title_1 {
  width: 100%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin-top: 50px;
  font-size: 40px;
  color:rgba(97,212,242,1);
}
.banner_title_2 {
  width: 100%;
  height: 30px;
  font-size: 32px;
  font-weight:600;
  color:rgba(255,255,255,1);
  line-height: 30px;
  text-align: center;
  margin-top: 22px;
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
  height: 30px;
  font-size: 16px;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height: 23px;
  margin-top: 22px;
  text-align: center;
}
.banner_WhitePaper_entrance {
  width: 180px;
  height: 18px;
  font-size: 18px;
  font-weight:400;
  color:rgba(97,212,242,1);
  line-height:18px;
  margin: 45px auto 0;
  display: block;
  text-align: center;
}
.skip-btn {
  height: 18px;
  margin-right: 10px;
  vertical-align: -15%;
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
  margin-top: 50px;
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
  height: 107px;
  line-height: 107px;
  font-size:18px;
  font-weight:400;
  color:rgba(88,88,88,1);
  text-align: center;
}



/* 标题 */

.container-title{
  width: 100%;
  height: 54px;
  line-height: 54px;
  margin-top: 26px;
  border-bottom: 5px solid rgba(14,217,255,1);
}

.title-main{
  width: 202px;
  height: 54px;
  position: relative;
}
.title-main .title-content{
  margin-right: 10px;
  width: 222px;
  height: 54px;
  line-height: 54px;
  font-size:20px;
  font-weight:400;
  color:rgba(255,255,255,1);
  text-align: center;
}
.title-main .title-main-bg{
  position: absolute;
  bottom: 0;
  left: 10px;
  width: 202px;
  height: 54px;
  background:rgba(88,88,88,1);
  transform: skewX(-20deg);
  z-index: -100;
}
.title-main .title-main-bg-mask{
  position: absolute;
  top: 0;
  left: 104px;
  width: 202px;
  height: 54px;
  background:rgba(14,217,255,1);
  transform: skewX(-20deg);
  z-index: -200;
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
    margin-top: 37px;
  }
}

</style>

