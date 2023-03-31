<!-- @format -->

<template>
  <view class="helang-tab-bar">
    <view class="bar" :class="{ fixed: fixedBottom }">
      <view class="h-flex-x h-flex-3">
        <view
          class="item h-flex-x h-flex-center"
          v-for="(item, index) in tabList"
          :key="index"
          :class="{
            active: current === index,
          }"
          @click="change(index)"
        >
          <view>
            <view class="h-flex-x h-flex-center">
              <view class="icon">
                <view>
                  <view
                    class="icon-default h-flex-x h-flex-center iconSelected"
                  >
                    <view
                      class="iconfont fz52"
                      :class="item.icon"
                    />
                    <!-- <view
                      class="iconfont fz52 z999"
                      :class="item.iconSelected"
                      v-show="current === index"
                    /> -->
                  </view>

                  <!-- <view class="icon-selected h-flex-x h-flex-center">
                    <view class="iconfont fz52 z999" :class="item.iconSelected">
                    </view>
                  </view> -->
                </view>
              </view>
            </view>

            <view class="h-flex-x h-flex-center">
              {{ $t(item.text) }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
interface Props {
  fixedBottom?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  fixedBottom: true,
})
const { fixedBottom } = toRefs(props)

// 底部icon
const tabList = [
  {
    icon: 'icon-home1',
    iconSelected: 'icon-home-selected',
    text: 'index.home',
    id: 'home',
  },
  {
    icon: 'icon-chat-smile-2-line',
    iconSelected: 'icon-chat-smile-2-fill',
    text: 'index.news',
    id: 'news',
  },
  {
    icon: 'icon-user-line',
    iconSelected: 'icon-user-fill',
    text: 'index.my',
    id: 'my',
  },
]
const current = ref(0)
const prevIndex = ref(-1)
const emit = defineEmits(['onCut'])

const change = (index: number) => {
  if (current.value === index) return

  emit('onCut', tabList[index].id)
  prevIndex.value = current.value
  current.value = index
}
</script>

<style lang="scss" scoped>
.active .z999 {
  z-index: 999;
}

.active .iconSelected {
  color: var(--subject-color);
}

.fz52 {
  font-size: 52rpx;
}

// @import './helang-flex.scss';
/*
 *  uni-app flex 布局盒子
 *  作者:helang
 *  邮箱:helang.love@qq.com
*/

/* 分列式弹性盒子，以X轴从左到右排列 */
.h-flex-x {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  /* 水平左对齐 */
  &.h-flex-left {
    justify-content: flex-start;
  }

  /* 水平居中对齐 */
  &.h-flex-center {
    justify-content: center;
  }

  /* 水平右对齐 */
  &.h-flex-right {
    justify-content: flex-end;
  }

  /* 水平两端对齐 */
  &.h-flex-space {
    justify-content: space-between;
  }

  /* 垂直顶部对齐 */
  &.h-flex-top {
    align-items: flex-start;
    align-content: flex-start;
  }

  /* 垂直底部对齐 */
  &.h-flex-bottom {
    align-items: flex-end;
    align-content: flex-end;
  }

  /* 允许换行 */
  &.h-flex-wrap {
    flex-wrap: wrap;
  }

  /* 等比分列，2-6列 */
  @for $i from 2 through 6 {
    &.h-flex-#{$i} {
      & > view {
        width: calc(100% / $i);
      }
    }
  }

  /* 弹性元素 */
  & > .h-flex-item-grow {
    flex-grow: 1;
    width: 0;
  }
}

/* 分行式弹性盒子，以Y轴从上到下排列 */
.h-flex-y {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  /* 垂直居中对齐 */
  &.h-flex-center {
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  /* 水平左对齐 */
  &.h-flex-left {
    align-items: flex-start;
    align-content: flex-start;
  }

  /* 水平右对齐 */
  &.h-flex-right {
    align-items: flex-end;
    align-content: flex-end;
  }

  /* 垂直两端对齐 */
  &.h-flex-space {
    justify-content: space-between;
  }

  /* 垂直顶部对齐 */
  &.h-flex-top {
    justify-content: flex-start;
  }

  /* 垂直底部对齐 */
  &.h-flex-bottom {
    justify-content: flex-end;
  }

  /* 等比分行，2-6行 */
  @for $i from 2 through 6 {
    &.h-flex-#{$i} {
      & > view {
        height: calc(100% / $i);
      }
    }
  }

  /* 弹性元素 */
  & > .h-flex-item-grow {
    flex-grow: 1;
    height: 0;
  }
}

/**
 * 底部导通用样式
 * 作者：黄河爱浪
 * QQ：1846492969
 */

.helang-tab-bar {
  font-size: 28rpx;

  view {
    box-sizing: border-box;
  }

  // 点位符
  .placeholder {
    // height: 140rpx;
    box-sizing: content-box;
    padding-bottom: 0;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    width: 100%;
  }

  // 栏
  .bar {
    height: 140rpx;
    box-sizing: content-box;
    background-color: #fff;
    position: relative;

    // 固定底部定位
    &.fixed {
      position: fixed;
      bottom: 0;
      left: 0;
      //   padding-bottom: 40rpx;
      width: 750rpx;
    }
  }
}

.helang-tab-bar {
  .bar {
    border-top: 1rpx solid #e5e5e5;
  }

  .item {
    height: 100rpx;
    position: relative;
    color: #757575;
    font-size: 20rpx;
    line-height: normal;

    .icon {
      position: relative;
      width: 60rpx;
      height: 60rpx;
      margin: 0 auto;

      > view {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: 0.5s ease;
      }

      .icon-default {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        // color: #757575;
      }

      .icon-selected {
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        transform-style: preserve-3d;
        transform: rotateY(180deg);
        color: var(--subject-color);
      }
    }

    &.active {
      color: #757575;

      .icon {
        > view {
          transform: rotateY(180deg);
        }
      }
    }
  }
}
</style>
