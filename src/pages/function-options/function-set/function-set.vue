<!-- 功能设置 ---------------------------------->
<script setup lang="ts">
import { visibleState, language, languageIndex, languageChange } from './data'

import bottomPopover from './components/bottom-popover.vue'
import i18n from '@/language'
const { t } = i18n.global

// 退出登录
const clickQuit = () => {
  setTimeout(() => {
    uni.showModal({
      title: '标题',
      content: '确定退出登录?',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      },
    })
  }, 300)
}
// 初始化

onMounted(() => {
  languageIndex.value = i18n.global.locale.value === 'zh-Hans' ? 0 : 1
})
onShow(() => {
  uni.setNavigationBarTitle({
    title: t('my.功能设置'),
  })
  languageIndex.value = i18n.global.locale.value === 'zh-Hans' ? 0 : 1
})
</script>
<!-- 功能设置 ----------------------->
<template>
  <view class="body bgc-e8">
    <!-- 标题 -->
    <view class="title">
      <view class="title-top"> 超级管理员 </view>
      <view class="title-bottom"> 有域行,放心起 </view>
    </view>
    <!-- 内容 -->
    <view class="content">
      <view
        class="content-item"
        hover-class="hover"
        @click="visibleState = true"
      >
        <view class="content-item-left">
          <view class="iconfont icon-tuichudenglu tuichudenglu"></view>
          <view class="content-item-text"> {{ t('my.设置语言') }} </view>
        </view>
        <view class="content-item-right">
          <view class="right-text">
            {{ language[languageIndex].text }}
          </view>
        </view>
      </view>
      <view class="content-item" hover-class="hover">
        <view class="content-item-left">
          <view class="iconfont icon-Tab_zuoxiguanli Tab_zuoxiguanli"></view>
          <view class="content-item-text"> {{ t('联系客服') }} </view>
        </view>
        <view class="content-item-right">
          <view class="iconfont icon-xiangyoujiantou xiangyoujiantou" />
        </view>
      </view>
      <view class="content-item" hover-class="hover" @click="clickQuit">
        <view class="content-item-left">
          <view class="iconfont icon-tuichudenglu tuichudenglu"></view>
          <view class="content-item-text"> 分享 </view>
        </view>
        <view class="content-item-right">
          <view class="iconfont icon-xiangyoujiantou xiangyoujiantou" />
        </view>
      </view>
      <!-- 退出登录 -->
      <view class="content-item" hover-class="hover" @click="clickQuit">
        <view class="content-item-left">
          <view class="iconfont icon-tuichudenglu tuichudenglu"></view>
          <view class="content-item-text"> 退出登录 </view>
        </view>
        <view class="content-item-right">
          <view class="iconfont icon-xiangyoujiantou xiangyoujiantou" />
        </view>
      </view>
    </view>

    <bottom-popover
      :visibleState="visibleState"
      @display-status="visibleState = !visibleState"
      :current="languageIndex"
      @select="languageChange"
      :title="t('my.设置语言')"
    />
  </view>
</template>

<style lang="scss" scoped>
.body {
  height: calc(100vh - 110rpx);
  width: 100vw;
  .title {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &-top {
      font-size: 40rpx;
    }
  }
}
.content {
  margin-left: 30rpx;
  margin-right: 30rpx;
  color: #8f969c;
  &-item {
    border-radius: 10rpx;
    border-bottom: 1rpx solid #f8f8f8;
    border-top: 1rpx solid #f8f8f8;
    display: flex;
    justify-content: space-between;
    line-height: 1;
    font-style: 32rpx;
    padding: 20rpx 30rpx;
    background-color: #fff;
    &-left {
      display: flex;
    }
    &-text {
      margin-left: 15rpx;
    }
    &-right {
      display: flex;
    }
    .right-text {
      width: 128rpx;
    }
  }
}
//#region iconfont 图标库

.tuichudenglu {
  color: $subject-color;
  font-size: 34rpx;
  font-weight: 550;
}
.xiangyoujiantou {
  color: #8f969c;
  font-weight: 800;
  font-size: 30rpx;
  line-height: 1;
  transform: translateY(8%);
}
.Tab_zuoxiguanli {
  color: $subject-color;
}
//#endregion
</style>
