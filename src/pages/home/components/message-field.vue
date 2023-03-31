<script lang="ts" setup>
import { batteryWidth } from '../use/use-refresh'
import eAnimationNumber from '@/components/e-animation-number/e-animation-number.vue'

const toMap = () => {
  uni.navigateTo({
    url: `/pages/function-options/orientation/orientation`,
  })
}

</script>

<template>
  <view class="message">
    <!-- 信息栏 和 地图 -->
    <view class="message-shadow">
      <!-- 地图 -->
      <map name="" @click="toMap" :enable-scroll="false" />
      <view class="mask-layer" @click="toMap"></view>
      <view class="message-body bdr-15">
        <!-- 设备编号 -->
        <view class="message-body-item">
          <view class="message-body-item-title">
            {{ $t('equipment.number') }}:
          </view>
          <view class="message-body-item-text"> 580532451458 </view>
        </view>
        <!--  卫星定位 -->
        <view class="message-body-item">
          <view class="message-body-item-title"> {{ $t('卫星定位') }}: </view>
          <view class="message-body-item-text"> 2022-12-15 15:24:31 </view>
        </view>
        <!-- 设备状态 -->
        <view class="message-body-item">
          <view class="message-body-item-title">{{ $t('设备状态') }}: </view>
          <view class="message-body-item-text"> 静止10分钟 </view>
        </view>
        <!-- 电池 -->
        <view class="message-body-item">
          <view class="battery">
            <view class="battery-body" :style="{ width: `${batteryWidth}%` }">
            </view>
          </view>
          <view class="battery-text">
            <eAnimationNumber :stop="batteryWidth"></eAnimationNumber>%
          </view>
        </view>
        <view class="message-body-item">
          <view class="message-body-item-title">
            <view class="iconfont icon-signal-fill signal-fill"> </view>
          </view>
          <view class="message-body-item-text"> {{ $t('网络') }}1223 </view>
        </view>
        <view class="message-body-item">
          <view class="message-body-item-title">
            <view class="iconfont icon-weixing weixing"> </view>
          </view>
          <view class="message-body-item-text"> {{ $t('卫星') }}1223 </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.message {
  width: 100%;
  height: 30vh;
  padding: 20rpx 14rpx;
  box-sizing: border-box;
  position: relative;

  .message-shadow {
    box-shadow: 0rpx 8rpx 8rpx #dadada;
    height: 99%;
    border-bottom-left-radius: 10rpx;
    border-bottom-right-radius: 10rpx;
  }

  .mask-layer {
    position: absolute;
    z-index: 10;
    // background-color: rgb(219, 219, 219);
    width: 30%;
    height: 90%;
    left: 50%;
    // transform: skew(-40deg, 0deg);
    // background-color: #9b3030ed;
  }

  map {
    position: absolute;
    // z-index: 2;
    height: 90%;
    width: 90%;
    right: 0;
    margin-right: 10px;
  }

  &-body {
    background-image: linear-gradient(130deg, #d9d9d9ed 60%, #e5e5e500 20%);
    position: absolute;
    z-index: 9;
    box-sizing: border-box;
    width: 80%;
    height: 90%;
    // height: 170px;
    // background-color: #d9d9d9;
    display: flex;
    flex-direction: column;
    padding: 32rpx 24rpx;
    justify-content: space-between;
    &-item {
      display: flex;
      font-size: 24rpx;
      line-height: 1;
      color: #535353;
      &-title {
        // background-color: #fff;
        margin-right: 15rpx;
      }

      .battery {
        width: 197rpx;
        height: 50rpx;
        box-sizing: border-box;
        border-radius: 8px;
        border: 4rpx solid #fff;
        margin-right: 14rpx;
        &-body {
          transition: 1.2s all;
          transition-property: width;
          background-color: #43cf7c;
          width: 0%;
          height: 100%;
          border-radius: 5px;
          box-sizing: border-box;
        }
        &-text {
          font-size: 30rpx;
          line-height: 40rpx;
        }
      }
    }
  }
}
</style>
