<!-- @format -->

<template>
  <view
    class="content"
    hover-class="both-sides"
    hover-start-time="5"
    hover-stay-time="10"
    @click="$emit('click', title)"
  >
    <view class="button-both-sides"></view>
    <view class="content-item">
      <view class="item-left">{{ title }}</view>
      <view class="item-right hover-qianjin" :class="animation">
        <slot>
          <view class="iconfont icon-qianjin qianjin" />
        </slot>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
interface Props {
  title?: string
  animation?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  animation: '',
})
const { title, animation } = toRefs(props)
</script>

<style lang="scss" scoped>
.content {
  position: relative;
}
.both-sides .hover-qianjin {
  transform: translateX(10%);
}
.both-sides .revolve {
  transition: 0.5s all;

  transform: translateX(0%) rotate(360deg);
}

.content-item {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 0;
  padding-left: 40rpx;
  padding-right: 34rpx;
  .item-left {
    font-size: 14px;
    line-height: 150%;
    text-align: left;
    z-index: 9;
  }
  .item-right {
    z-index: 9;
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    align-items: center;
    text-align: center;
  }
}
</style>
