<!--
   mileage-statistics 里程统计
  -->
<script lang="ts" setup>
import i18n from '@/language'
import echarts from './components/echarts.vue'

const { t } = i18n.global
const mileageInfo = [
  {
    times: [
      {
        tim: '0:00-8:30',
        content: '停车8小时30分',
      },
      {
        tim: '8:30-9:02',
        content: '行驶里程33.4KM',
      },
      {
        tim: '9:02-18:30',
        content: '停车9小时27分',
      },
      {
        tim: '18:30-19:02',
        content: '行驶里程30.4KM',
      },
      {
        tim: '19:02-23:59',
        content: '停车4小时57分',
      },
    ],
  },
  {
    times: [
      {
        tim: '0:00-8:30',
        content: '停车8小时30分',
      },
      {
        tim: '8:30-9:02',
        content: '行驶里程33.4KM',
      },
      {
        tim: '9:02-18:30',
        content: '停车9小时27分',
      },
      {
        tim: '18:30-19:02',
        content: '行驶里程30.4KM',
      },
      {
        tim: '19:02-23:59',
        content: '停车4小时57分',
      },
    ],
  },
  {
    times: [
      {
        tim: '0:00-8:30',
        content: '停车8小时30分',
      },
      {
        tim: '8:30-9:02',
        content: '行驶里程33.4KM',
      },
      {
        tim: '9:02-18:30',
        content: '停车9小时27分',
      },
      {
        tim: '18:30-19:02',
        content: '行驶里程30.4KM',
      },
      {
        tim: '19:02-23:59',
        content: '停车4小时57分',
      },
    ],
  },
  {
    times: [
      {
        tim: '0:00-8:30',
        content: '停车8小时30分',
      },
      {
        tim: '8:30-9:02',
        content: '行驶里程33.4KM',
      },
      {
        tim: '9:02-18:30',
        content: '停车9小时27分',
      },
      {
        tim: '18:30-19:02',
        content: '行驶里程30.4KM',
      },
      {
        tim: '19:02-23:59',
        content: '停车4小时57分',
      },
    ],
  },
]

onLoad(() => {
  uni.setNavigationBarTitle({
    title: t(`里程统计`),
  })
})
</script>

<template>
  <view class="conent">
    <view class="echats">
      <echarts />
    </view>
    <view class="bottom" v-for="(item, index) in mileageInfo" :key="index">
      <view class="bottom-top">
        <span class="bottom-left">2023-1-1</span>
        <span class="bottom-right">
          行驶里程63.8KM
          <i class="iconfont right color icon-guiji" v-if="index == 0" />
          <i class="iconfont right color icon-qianjin" v-else />
        </span>
      </view>
      <view class="bottom-btm">
        <table class="bottom-table">
          <tr
            class="bottom-table-tr"
            v-for="(ite, index) in item.times"
            :key="index"
          >
            <td class="bottom-table-tr-td-left">
              <i
                class="iconfont left icon-yuandian-copy red"
                v-if="index % 2 == 0"
              />
              <i class="iconfont left icon-yuandian-copy green" v-else />
              {{ ite.tim }}
            </td>
            <td class="bottom-table-tr-td-right">{{ ite.content }}</td>
          </tr>
        </table>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.conent {
  width: 100%;
}

.echats {
  margin-top: 20rpx;
  background-color: white;
  width: 100%;
  height: 462rpx;
  left: -2rpx;
  top: 104rpx;
}

.color {
  color: #68b7f3;
}

.left {
  float: left;
}

.right {
  float: right;
}

.icon-guiji {
  padding-left: 20rpx;
  font-size: 28rpx;
}

.icon-qianjin {
  padding-left: 20rpx;
  font-size: 28rpx;
}

.icon-yuandian-copy {
  font-size: 24rpx;
  padding-right: 10rpx;
}

.red {
  color: #d43030;
}

.green {
  color: #43cf7c;
}

.bottom {
  margin-top: 26rpx;
  width: 100%;
  height: 336rpx;
  top: 592rpx;
  color: rgba(80, 80, 80, 1);
  background-color: rgba(255, 255, 255, 1);
  font-size: 28rpx;
  line-height: 150%;
  text-align: center;

  &-left {
    float: left;
  }

  &-right {
    padding-right: 20rpx;
    float: right;
  }

  &-top {
    padding: 0rpx 20rpx;
    height: 40rpx;
  }

  &-btm {
    padding-bottom: 2rpx;
  }

  &-table {
    width: 100%;

    &-tr {
      padding: 0rpx 40rpx;
      width: 100%;
      height: 50rpx;
      margin-top: 10rpx;
      &-td-left {
        float: left;
      }
      &-td-right {
        float: right;
      }
    }
  }
}
</style>
