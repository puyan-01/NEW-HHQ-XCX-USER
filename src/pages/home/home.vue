<script setup lang="ts">
import ActionBar from './components/Action-bar.vue'
import messageField from './components/message-field.vue'
import { batteryWidth } from './use/use-refresh'

console.log(`home ====>`, new Date())

// 图片内容
const info = [
  {
    colorClass: 'uni-bg-red',
    url: 'https://ts2.cn.mm.bing.net/th?id=ORMS.f2fe23cb2da96cf70c3840a1a87893a5&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0',
    content: '内容 A',
  },
  {
    colorClass: 'uni-bg-green',
    url: 'https://th.bing.com/th/id/OIP.q1yZEba2uFBDsTBeG17OqQHaE8?w=251&h=180&c=7&r=0&o=5&pid=1.7',
    content: '内容 B',
  },
  {
    colorClass: 'uni-bg-blue',
    url: 'https://th.bing.com/th/id/OIP.25hdXls8OJ7Jp_ey2221mwHaEK?w=307&h=180&c=7&r=0&o=5&pid=1.7',
    content: '内容 C',
  },
]

onLoad(() => {
  batteryWidth.value = 90 // 初始化电量
})
</script>

<template>
  <view class="">
    <!-- 轮播图 -->
    <view class="uni-margin-wrap">
      <swiper
        class="swiper"
        circular
        :indicator-dots="true"
        :autoplay="true"
        :interval="2000"
        :duration="500"
      >
        <swiper-item
          v-for="(item, index) in info"
          :key="index"
        >
          <view
            :class="item.colorClass"
            class="swiper-item"
          >
            <image
              class="image"
              :src="item.url"
              mode="aspectFill"
            />
          </view>
        </swiper-item>
      </swiper>
    </view>
    <!-- 设备信息等 -->
    <messageField />
    <!-- 操作栏 页面跳转 -->
    <ActionBar />
  </view>
</template>

<style lang="scss" scoped>
.uni-bg {
  &-red {
    background-color: red;
  }

  &-green {
    background-color: green;
  }

  &-blue {
    background-color: blue;
  }
}

.uni-margin-wrap {
  width: 100%;
}

.swiper {
  height: 332rpx;
}

// .swiper-item {
//   display: block;
//   height: 320rpx;
//   line-height: 320rpx;
//   text-align: center;
// }
.swiper-item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #999;
  color: #fff;

  .image {
    width: 750rpx;
    height: 400upx;
  }
}
</style>
