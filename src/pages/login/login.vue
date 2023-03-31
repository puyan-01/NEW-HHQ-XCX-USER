<!-- @format -->

<template>
  <view class="container">
    <view class="title">
      <template>登录授权</template>
      <text />
      <text />
    </view>
    <view class="cu-card">
      <view class="cu-item bg-img shadow-blur">
        <view class="cardTitle">扫码租售 随用随还</view>
      </view>
    </view>
    <view class="padding-xl">
      <button
        class="cu-btn block round bg-green lg mt10"
        open-type="getUserInfo"
        @getuserinfo="tryLoginMPWeixin"
      >
        <text class="cuIcon-weixin margin-right-xs" />
        微信快捷登录
      </button>
    </view>
    <view class="fixed-b padding-lg text-sm flex justify-center">
      <text class="text-grey">点击登录,即表示已阅读并同意</text>
      <text
        class="text-gray"
        @click="showAgree"
      >
        《法律条款与隐私政策》
      </text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { testGet } from '@/api/user'

const showAgree = () => {
  uni.navigateTo({
    url: '/pages/index/index',
  })
}

const tryLoginMPWeixin = async (e: any) => {
  const res = await testGet()

  console.log(`varName ====>`, e, res)

  return

  // uni.getUserProfile(options)
}
</script>

<style scoped lang="scss">
.container {
  background-color: #fff;
  height: 100vh;
}

.title {
  // margin: 50rpx;
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 30rpx;
  text-align: center;
}

.cu-item {
  /* background-image: url(https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg); */
  background-color: rgb(45, 190, 47);
}

.cardTitle {
  color: #fff;
  padding: 90upx 60upx;
  font-size: 40upx;
  font-weight: 300;
  transform: skew(-10deg, 0deg);
  position: relative;
  text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3);
}

.cardTitle::before {
  content: '';
  position: absolute;
  width: 60upx;
  height: 6upx;
  border-radius: 20upx;
  background-color: #fff;
  display: block;
  top: 60upx;
  left: 50upx;
  transform: skew(10deg, 0deg);
}

.cardTitle::after {
  content: '';
  position: absolute;
  width: 140upx;
  border-radius: 6upx;
  height: 24upx;
  background-color: #fff;
  display: block;
  bottom: 76upx;
  left: 90upx;
  transform: skew(10deg, 0deg);
  opacity: 0.1;
}
</style>
