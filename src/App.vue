<script lang="ts" setup>
import i18n from '@/language/index'
import { getCurrentInstance } from 'vue'
import { onShow, onHide, onLaunch } from '@dcloudio/uni-app'

onLaunch(() => {
  let language = uni.getStorageSync('language')

  let applicationLocale = language ? language : uni.getLocale()

  if (applicationLocale === 'zh-Hans' || applicationLocale === 'zh-CN') {
    uni.setLocale('zh-Hans')
    i18n.global.locale.value = 'zh-Hans'
  } else {
    uni.setLocale('en')
    i18n.global.locale.value = 'en'
  }
  let token = uni.getStorageSync('TOKEN__')

  console.log(`token ====>`, token)

  // 没有token 跳转登录
  // if (!token) {
  //   uni.redirectTo({ url: 'pages/login/login' })
  // }

  // const app = getApp()

  // app.globalData.StatusBar = 66;

  //导航栏高度
  uni.getSystemInfo({
    success: function (e) {
      if (!e.statusBarHeight) return
      if (!e.titleBarHeight) return
      // 获取 appContext  上下文
      const res = getCurrentInstance()

      if (!res) return
      const appContext = res.appContext
      // #ifndef MP

      appContext.config.globalProperties.StatusBar = e.statusBarHeight

      if (e.platform == 'android') {
        appContext.config.globalProperties.CustomBar = e.statusBarHeight + 50
      } else {
        appContext.config.globalProperties.CustomBar = e.statusBarHeight + 45
      }
      // #endif
      // #ifdef MP-WEIXIN
      appContext.config.globalProperties.StatusBar = e.statusBarHeight
      let custom = wx.getMenuButtonBoundingClientRect()

      appContext.config.globalProperties.Custom = custom
      appContext.config.globalProperties.CustomBar =
        custom.bottom + custom.top - e.statusBarHeight
      // #endif
      // #ifdef MP-ALIPAY
      appContext.config.globalProperties.StatusBar = e.statusBarHeight
      appContext.config.globalProperties.CustomBar =
        e.statusBarHeight + e.titleBarHeight
      // #endif
    },
  })
})
onShow(() => {
  console.log('App Show-->')
})

onHide(() => {
  console.log('App Hide --')
})
</script>
<style lang="scss">
@import '@/style/iconfont/iconfont.css';

.container {
  padding: 30rpx;
}

page {
  background: #f1f1f1;
}
</style>
