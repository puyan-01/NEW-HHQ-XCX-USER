<script setup lang="ts">
import { updateData } from '@/pages/home/use/use-refresh'
import tabBarOverturn from '@/components/helang-tabBar/tab-bar-overturn.vue'
import home from '../home/home.vue'
import news from '../news/index.vue'
import my from '../my/my.vue'
import i18n from '@/language'
import { onPullDownRefresh, onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'

const currentView = ref('home')
const { t } = i18n.global

onShow(() => {
  uni.setNavigationBarTitle({
    title: t(`index.${currentView.value}`),
  })
})
const onCut = (event: string) => {
  currentView.value = event

  uni.setNavigationBarTitle({
    title: t(`index.${event}`),
  })
}
//#region 下拉刷新

const pullRefresh = () => {
  if (currentView.value === 'my') return uni.stopPullDownRefresh()

  if (currentView.value === 'home') updateData() //更新电池数据

  // uni.showLoading({
  //   title: '更新数据中',
  // })

  // 你的刷新过程
  setTimeout(() => {
    // uni.hideLoading()
  }, 1500)
}

// 下拉刷新生命周期
onPullDownRefresh(() => {
  uni.showNavigationBarLoading() // 设置导航栏加载

  console.log(`下拉刷新 ====>`, currentView.value)

  pullRefresh()

  setTimeout(function () {
    uni.stopPullDownRefresh()

    uni.hideNavigationBarLoading() // 取消导航栏加载
  }, 1500)
})
//#endregion
</script>

<template>
  <view class="">
    <text
      class="uniui-home home"
      style="font-size: 52rpx; color: aqua"
    ></text>
    1231231
    <!-- 页面内容插槽 -->
    <!-- 编写你的页面内容 -->
    <view v-show="currentView === 'home'">
      <home />
    </view>
    <view v-show="currentView === 'news'">
      <news />
    </view>
    <view v-show="currentView === 'my'">
      <my />
    </view>

    <tabBarOverturn @onCut="onCut"></tabBarOverturn>
  </view>
</template>

<style lang="scss"></style>
