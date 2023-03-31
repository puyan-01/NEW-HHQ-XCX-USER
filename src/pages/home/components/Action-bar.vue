<script setup lang="ts">
import { updateData } from '../use/use-refresh'
const toJump = (e: string) => {
  if (e === '更新数据') return updateData()

  const map = new Map([
    ['行驶轨迹', 'traveling-track'],
    ['里程统计', 'mileage-statistics'],
    ['防盗拾音', 'anti-theft-recording'],
    ['终端设置', 'terminal-setup'],
    ['流量充值', 'traffic-recharge'],
    ['电子围栏', 'electronic-fence'],
    ['联系客服', 'contact-customer-cervice'],
  ])

  uni.navigateTo({
    url: `/pages/function-options/${map.get(e)}/${map.get(e)}`,
  })
}
</script>

<template>
  <view>
    <!--  -->
    <!-- 操作按钮 -->
    <view class="Action_bar-1">
      <view
        class="Action_bar bdr-15"
        style="width: 100%"
      >
        <view class="Action_bar-center">
          <!-- 行驶轨迹 -->
          <view
            class="Action_bar-item"
            hover-class="hover"
          >
            <view
              class="item"
              @click="toJump('行驶轨迹')"
            >
              <view class="icon huizhiguiji">
                <view class="iconfont icon-xunjianguiji" />
              </view>
              <view class="Action_bar-item-text">{{ $t('行驶轨迹') }}</view>
            </view>
          </view>
          <view
            class="Action_bar-item"
            hover-class="hover"
          >
            <view
              class="item"
              @click="toJump('里程统计')"
            >
              <view class="icon kltj">
                <view class="iconfont icon-kltj" />
              </view>
              <view class="Action_bar-item-text">{{ $t('里程统计') }}</view>
            </view>
          </view>
          <view
            class="Action_bar-item"
            hover-class="hover"
          >
            <view
              class="item"
              @click="toJump('防盗拾音')"
            >
              <view class="icon yuyin">
                <view class="iconfont icon-yuyin" />
              </view>
              <view class="Action_bar-item-text">{{ $t('防盗拾音') }}</view>
            </view>
          </view>
          <view
            class="Action_bar-item"
            hover-class="hover"
          >
            <view
              class="item"
              @click="toJump('终端设置')"
            >
              <view class="icon shezhi">
                <view class="iconfont icon-shezhi" />
              </view>
              <view class="Action_bar-item-text">{{ $t('终端设置') }}</view>
            </view>
          </view>
          <view
            class="Action_bar-item"
            hover-class="hover"
          >
            <view
              class="item"
              @click="toJump('流量充值')"
            >
              <view class="icon chongliuliang">
                <view class="iconfont icon-chongliuliang" />
              </view>
              <view class="Action_bar-item-text">{{ $t('流量充值') }}</view>
            </view>
          </view>
          <view
            class="Action_bar-item"
            hover-class="hover"
          >
            <view
              class="item"
              @click="toJump('电子围栏')"
            >
              <view class="icon dianziweilan">
                <view class="iconfont icon-dianziweilan" />
              </view>
              <view class="Action_bar-item-text">{{ $t('电子围栏') }}</view>
            </view>
          </view>
          <view
            class="Action_bar-item"
            hover-class="hover"
          >
            <view
              class="item"
              @click="toJump('更新数据')"
            >
              <view class="icon gengxin1">
                <view class="iconfont icon-gengxin1" />
              </view>
              <view class="Action_bar-item-text">{{ $t('更新数据') }}</view>
            </view>
          </view>
          <view
            class="Action_bar-item"
            hover-class="hover"
          >
            <view
              class="item"
              @click="toJump('联系客服')"
            >
              <view class="icon yangshi_icon">
                <view
                  class="iconfont icon-yangshi_icon_tongyong_customer_service"
                />
              </view>
              <view class="Action_bar-item-text">{{ $t('联系客服') }}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.Action_bar-1 {
  margin: 0 14rpx;
  box-sizing: border-box;
  width: 96.3%;
  height: 500rpx !important;
  .Action_bar {
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
    width: 100%;
    padding: 10rpx;
    // background-color: #2a82e4;
    border-bottom-left-radius: 100rpx;
    border-bottom-right-radius: 100rpx;
    box-shadow: 0rpx 12rpx 12rpx #dadada;

    height: 100%;
    .Action_bar-center {
      margin-top: 20rpx;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    &-item {
      box-sizing: border-box;
      width: 25%;
      height: 210rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      // .item {
      .icon {
        // background-color: #bfd9f7;
        width: 100%;
        // width: 100rpx;
        height: 100rpx;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #2a82e7;
        border-radius: 50%;
      }
      &-text {
        transform: translateY(35%);
        text-align: center;
        font-size: 24rpx;
        width: 100rpx;
        height: 60rpx;
        // }
      }
    }
  }
}

//#region icon 图标
.yangshi_icon {
  background-color: rgba(255, 141, 26, 0.44);
  .iconfont {
    color: #ff8d1a;
    font-size: 50rpx;
  }
}
.gengxin1 {
  background-color: rgba(67, 207, 124, 0.37);
  .iconfont {
    color: #50cf7d;
    font-size: 55rpx;
  }
}
.dianziweilan {
  background-color: rgba(42, 130, 228, 0.39);
  .iconfont {
    color: #3482e6;
    font-size: 55rpx;
  }
}
.chongliuliang {
  background-color: rgba(255, 87, 51, 0.44);
  .iconfont {
    color: rgba(255, 87, 51, 1);
    font-size: 55rpx;
  }
}
.shezhi {
  background-color: #eca3a3;
  .iconfont {
    color: #d4383e;
    font-size: 45rpx;
  }
}
.yuyin {
  background-color: rgba(0, 186, 173, 0.38);
  .iconfont {
    color: #00baad;
    font-size: 50rpx;
  }
}
.kltj {
  background-color: rgba(255, 141, 26, 0.47);
  .iconfont {
    color: #ff8d1a;
    font-size: 40rpx;
  }
}
.huizhiguiji {
  background-color: rgba(42, 130, 228, 0.3);
  .iconfont {
    color: #2a82e4;

    font-size: 40rpx;
  }
}
.signal-fill {
  margin-left: 5rpx;
  color: #2a82e4;
}
.weixing {
  margin-left: 5rpx;
  color: #43cf7c;
}

//#endregion
</style>
