<script setup lang="ts">
import arrowLink from './components/arrow-link.vue'
import i18n from '@/language'
const { t } = i18n.global

const toLink = (e: string) => {
  const map = new Map([
    ['设备管理', 'terminal-setup'],
    ['功能设置', 'function-set'],
    ['服务中心', null],
    ['关于我们', null],
  ])

  if (map.get(e) === null) return
  uni.navigateTo({
    url: `/pages/function-options/${map.get(e)}/${map.get(e)}`,
  })
}
const toRegister = () => {
  console.log(`varName ====>`, '点击登录')
  uni.login({
    provider: 'univerify',
    univerifyStyle: {
      fullScreen: true,
    },
  })
}

</script>

<template>
  <view class="bg">
    <!-- 头像 和 展示栏-->
    <view class="head-portrait">
      <view class="head-portrait-content">
        <view class="head-portrait-left">
          <view class="right-name fz-18">
            /*-*/-
            <view> 什么什么你v </view>
          </view>
        </view>
        <view class="head-portrait-right" @click="toRegister">
          <image class="head-portrait-img" src="https://pic1.zhimg.com/80/v2-b0df584675ffd04182f9cd6253509e78_720w.webp"
            mode="aspectFit" lazy-load="false" binderror="" bindload="" />
        </view>
      </view>

      <!-- 展示栏 -->
      <view class="display-bar">
        <view class="display-bar-item"></view>
        <view class="display-bar-item"></view>
        <view class="display-bar-item"></view>
        <view class="display-bar-item"></view>
      </view>
    </view>
    <!-- 功能栏 -->
    <view class="function">
      <view class="function-content">
        <arrowLink title="设备管理" @click="toLink" />
        <arrowLink :title="t('my.功能设置')" @click="toLink('功能设置')" />
        <arrowLink title="服务中心" @click="toLink" />
        <arrowLink title="关于我们" @click="toLink" animation="revolve">
          <view class="iconfont icon-fenxiang fenxiang" />
        </arrowLink>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
view {
  line-height: 150%;
}

.head-portrait {
  background-color: $subject-color;
  padding: 60rpx;
  padding-bottom: 130rpx;

  &-content {
    display: flex;
    justify-content: space-between;
  }

  &-left {
    .right-name {
      width: 212rpx;
      height: 108rpx;
      letter-spacing: 2rpx;
      color: rgba(255, 255, 255, 1);
      text-align: left;
      font-weight: bold;
    }
  }

  &-right {
    .head-portrait-img {
      width: 136rpx;
      height: 136rpx;
      color: rgba(80, 80, 80, 1);
      background-color: rgba(255, 255, 255, 1);
      border-radius: 50%;
    }
  }

  .display-bar {
    position: absolute;
    // z-index: 2;
    width: 714rpx;
    height: 232rpx;
    left: 50%;
    transform: translateX(-50%);
    top: 272rpx;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 60rpx;
    box-shadow: 0rpx 10rpx 10rpx 0rpx rgba(166, 166, 166, 0.4);
    display: flex;
    justify-content: space-between;
    padding: 38rpx 58rpx;
    box-sizing: border-box;

    &-item {
      width: 122rpx;
      height: 156rpx;
      color: rgba(80, 80, 80, 1);
      background-color: rgba(229, 229, 229, 1);
      border-radius: 8rpx;
      font-size: 28rpx;
    }
  }
}

.function {
  box-sizing: border-box;
  height: 1040rpx;
  border-radius: 108rpx 108rpx 0 0;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0rpx 10rpx 10rpx 0rpx rgba(128, 128, 128, 0.15);
  padding-top: 248rpx;

  color: rgba(80, 80, 80, 1);

  &-content {
    width: 100%;
    height: 100%;
  }
}

.bg {
  background-color: $subject-color;
}

//#region icon
.qianjin {
  font-size: 30rpx;
  color: rgba(153, 153, 153, 1);
}

.fenxiang {
  color: $subject-color;
}

//#endregion
</style>
