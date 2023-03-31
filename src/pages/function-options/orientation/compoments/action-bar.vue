<template>
  <view>
    <!--  -->
    <view class="icon" @click="clickIcon">
      <view class="icon-top">
        <view class="iconfont icon-xunjianguiji icon-item" hover-class="hover"
          style="border-color: #2a82e4; font-size: 35rpx; color: #2a82e4"></view>
        <view class="iconfont icon-gengxin1 icon-item" hover-class="hover"
          style="border-color: #43cf7c; font-size: 45rpx; color: #43cf7c"></view>
        <view class="iconfont icon-daohangdizhi icon-item" hover-class="hover"
          style="border-color: #2a82e4; font-size: 35rpx; color: #2a82e4"></view>
      </view>
      <view class="icon-top">
        <view class="iconfont icon-yuyin icon-item" hover-class="hover"
          style="border-color: #00baad; font-size: 45rpx; color: #00baad">
        </view>
        <view class="iconfont icon-shezhi icon-item" hover-class="hover"
          style="border-color: #d43030; font-size: 45rpx; color: #d43030">
        </view>
        <view class="iconfont icon-yangshi_icon_tongyong_customer_service icon-item" hover-class="hover"
          style="border-color: #ff8d1a; font-size: 45rpx; color: #ff8d1a">
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const clickIcon = () => {
  // console.log(`1123 --->`, 1123)
}

</script>

<style lang="scss" scoped>
.icon {
  height: 100%;
  // display: flex;
  // background-color: $subject-color;
  // padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .icon-top {
    height: 45%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }

  .icon-top+.icon-top {
    margin-top: 25rpx;
  }

  .icon-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64rpx;
    width: 33.33%;
    border: 2rpx solid;

    border-radius: 50%;
    box-sizing: border-box;
  }

  .icon-item+.icon-item {
    margin-left: 60rpx;
  }
}
</style>
