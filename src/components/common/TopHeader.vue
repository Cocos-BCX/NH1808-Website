<template>
<div class="lang-bar">
    <div class="currentAcount" v-if="!currentAccount">Login</div>
    <div class="currentAcount" v-if="currentAccount">hi~ {{currentAccount}}</div>
    <div class="lang">{{currentLang}}
        <div class="lang-drop">
            <li @click="changeLang('zh')">中文</li>
            <li @click="changeLang('en')">English</li>
        </div>
    </div>
</div>
</template>


<script>
import { browserConnect } from '../../../libs/bcx.api'
import { cacheSession, cacheKey } from '../../../libs/Utils'
export default {
    data () {
        return {
            currentAccount: '',
            currentLang: 'English',
        }
    },
    watch: {
    },
    mounted(){
      this.browserConnect()
    },
    methods: {
      browserConnect: function () {
        let _this = this
        browserConnect().then(res => {
          if (res) {
            _this.currentAccount = cacheSession.get(cacheKey.accountName)
          }
        })
      },
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
}
</style>

