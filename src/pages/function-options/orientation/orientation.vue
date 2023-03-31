<template>
  <!--
    定位

   -->
  <view class="bgc-e8 body">
    <map name="" class="body"> </map>
    <ww-bottom-drawerapp :proportionShow="0.6">
      <slot>
        <!--填入你的抽屉View-->
        <view class="drawerapp">
          <view class="drawerapp-item jcsb">
            <view class="item-left fw item-1">
              <text class="fw-100">【15】</text>
              <text class="item-text fz-16">580510587 </text>
            </view>
            <view class="item-right fz-12"> 静止3天12小时 </view>
          </view>
          <view class="drawerapp-item time">
            <view class="time-item">
              <!-- <view class="iconfont icon-shijian_o shijian_o" /> -->
              <view class="item-left"> 通讯时间： </view>
              <view class="item-right"> 2013-20-20 </view>
              <view class="item-right">18:04:51</view>
            </view>
            <view class="time-item">
              <text class="iconfont icon-signal-fill signal-fill" />
              <view class="item fz-12">
                网络
                <text>12</text>
              </view>
            </view>
          </view>
          <view class="drawerapp-item time">
            <view class="time-item">
              <!-- <view class="iconfont icon-weixing weixing" /> -->
              <view class="item-left weixing-text"> 卫星定位： </view>
              <view class="item-right"> 2013-20-20 </view>
              <view class="item-right"> 18:04:51 </view>
            </view>
            <view class="time-item">
              <view class="iconfont icon-weixing weixing" />
              <view class="item fz-12">
                卫星
                <text>12</text>
              </view>
            </view>
          </view>
          <view class="drawerapp-item site">
            <view class="site-left">
              <view class="iconfont icon-daohangdizhi icon daohangdizhi">
              </view>
            </view>
            <view class="site-right">
              <text style="margin-right: 10rpx">地址：</text>
              <text class="fz-12">
                广东省深圳市龙华区福城街道中志创意 产业园内（距离我0.01km）
              </text>
            </view>
          </view>
          <!-- 操作栏 -->
          <view class="drawerapp-item operation">
            <view class="operation-item left">
              <view class="operation-item-top item"></view>
              <view class="operation-item-bottom item">
                <view class="item">拾音关闭</view>
                <view class="item text">
                  今日里程 <view class="item-text"> - 0km</view>
                </view>
                <view class="item text">
                  总里程 <view class="item-text"> - 0km</view>
                </view>
              </view>
            </view>
            <view class="operation-item right">
              <!-- 电池 -->
              <view class="operation-item-top item">
                <view class="battery">
                  <view class="battery-kwh">
                    <text class="kwh">100%</text>
                  </view>
                </view>
              </view>
              <!-- 选项栏 -->
              <view class="operation-item-bottom item">
                <action-bar />
              </view>
            </view>
          </view>

          <view class="drawerapp-item"> </view>
        </view>
      </slot>
    </ww-bottom-drawerapp>
    <view class="bottom-cover"> </view>
  </view>
</template>

<script lang="ts" setup>
import actionBar from './compoments/action-bar.vue'
import i18n from '@/language'
const { t } = i18n.global

onLoad(() => {
  uni.setNavigationBarTitle({
    title: t(`定位`),
  })
})
</script>

<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 100vh;
}

.drawerapp {
  background-color: rgb(255, 255, 255);
  padding: 10rpx 40rpx;
  padding-bottom: 35rpx;
  padding-top: 30rpx;
  line-height: 1;
  font-size: 28rpx;

  &-item {
    display: flex;
    margin: 0 0 25rpx;

    .item-1 {
      font-size: 32rpx;

      .fw-100 {
        color: #505050;
        font-size: 28rpx;
      }

      &+.item-right {
        color: #a6a5a3;
      }

      .item-text {
        margin-left: 10rpx;
        letter-spacing: 1rpx;
      }
    }
  }

  .item-3 {
    .item {
      margin-left: 10rpx;
      margin-right: 50rpx;
    }
  }

  .time {
    // background-color: pink;
    font-size: 28rpx;
    justify-content: space-between;

    .time-item {
      display: flex;
      align-items: baseline;

      .item {
        margin-left: 10rpx;
      }
    }

    .item-left {
      margin-left: 5rpx;
      font-size: 28rpx;
    }

    .item-right {
      margin-left: 10rpx;
    }
  }

  .site {
    .site-left {
      margin-right: 8rpx;
    }

    .site-right {
      letter-spacing: 2rpx;
      font-size: 25rpx;

      line-height: 1.4;
    }
  }

  .operation {
    display: flex;
    width: 100%;
    height: 260rpx;

    .left {
      font-size: 24rpx;
    }

    .operation-item {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 20rpx;
      // background-color: pink;
      box-sizing: border-box;
      height: 100%;

      // background-color: pink;
      .item.text {
        display: flex;
        justify-content: space-between;

        .item-text {
          width: 65%;
        }
      }

      .item+.item {
        margin-top: 30rpx;
      }

      &-top {
        height: 55rpx;
        margin-bottom: 10rpx;
        // background-color: #a6a5a3;
      }

      &-bottom {
        flex: 1;
      }

      &.right {
        .battery {
          height: 100%;
          // background-color: #2a82e4;
          // box-sizing: border-box;
          border: 7rpx solid #e5e5e5;
          border-radius: 35rpx;

          .battery-kwh {
            background-color: #43cf7c;
            height: 100%;
            border-radius: 30rpx;
            width: 100%;
            align-items: center;
            display: flex;
            align-items: center;

            .kwh {
              margin-left: 40rpx;
              color: #ccf1db;
            }
          }
        }

        /*         .icon {
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
          .icon-item {
            display: flex;
            justify-content: center;
            align-items: center;
            // height: 80rpx;
            width: 33.33%;
            // background-color: #43cf7c;
            border: 2rpx solid;

            border-radius: 50%;
            box-sizing: border-box;
          }
          .icon-item + .icon-item {
            margin-left: 46rpx;
          }
        } */
      }
    }
  }
}

.bottom-cover {
  position: fixed;
  background-color: #fff;
  height: 5vh;
  bottom: 0;
  width: 94%;
  margin-left: 20rpx;
  margin-right: 20rpx;
  box-sizing: border-box;
  // padding: 20rpx;
}

//#region iconfont 图标
.daohangdizhi {
  height: 100%;
  color: #2a82e4;
}

.shijian_o {
  align-items: baseline;
  color: $subject-color;
  font-size: 38rpx;
  transform: scale(1.1);
}

.weixing {
  color: $subject-color;
  margin-left: 1rpx;
  margin-right: 2rpx;
}

//#endregion
</style>
