<script setup lang="ts">
// <!-- 底部弹窗 -->
import { language, languageIndex } from '../data' // 数据
interface Props {
  title?: string
  visibleState: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: '标题',
  visibleState: false,
})
const { title, visibleState } = toRefs(props)
const emit = defineEmits(['select', 'displayStatus'])

// 隐藏弹窗
const onPopoverShow = () => {
  emit('displayStatus', !visibleState.value)
}

// 选择语言

const select = (e: {}) => {
  emit('select', e)

  setTimeout(() => {
    onPopoverShow()
  }, 200)
}

</script>
<!-- 底部弹窗 -->
<template>
  <view class="bottom-popover" :class="{ 'popover-to-top': visibleState }">
    <view class="popover-title"> {{ title }} </view>
    <view class="popover-centent">
      <slot>
        <view class="popover-select" v-for="(item, index) in language" :key="index" hover-class="both-sides"
          @click="select(item)">
          <view class="button-both-sides"></view>
          <view class="select-data"> {{ item.text }} </view>
          <view class="select-selector" :class="{ borderColor: index === languageIndex }"></view>
        </view>
      </slot>
    </view>
    <view class="popover-cancel" @click="onPopoverShow">取消</view>
  </view>
  <!-- 遮罩层 -->
  <view class="mask-layer" @click="onPopoverShow" v-if="visibleState" />
</template>

<style lang="scss" scoped>
.borderColor {
  border-color: #569af6 !important;
}

.bottom-popover {
  transition: all 1s;
  bottom: -100%;
  // height: 40%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(255, 255, 255);
  width: 90vw;
  border-radius: 40rpx 40rpx 40rpx 40rpx;
  padding: 50rpx 0;
  display: flex;
  flex-direction: column;
  z-index: 9;

  .popover-title {
    text-align: center;
    font-size: 38rpx;
    font-weight: 900;
    margin: 50rpx 0;
  }

  .popover-centent {
    flex: 1;

    .popover-select {
      position: relative;
      padding: 0 50rpx;
      padding-bottom: 30rpx;
      padding-top: 30rpx;
      // background-color: #5e9ef1;
      font-weight: 400;
      display: flex;

      .select-data {
        flex: 1;
        font-size: 30rpx;
        line-height: 1;
        z-index: 9;
      }

      .select-selector {
        box-sizing: border-box;
        width: 30rpx;
        height: 30rpx;
        border-radius: 50%;
        border: 6rpx solid #e5e5e5;
        text-align: center;
        align-items: center;
        line-height: 1;
        vertical-align: bottom;
        z-index: 9;
      }
    }
  }

  .popover-cancel {
    color: #5e9ef1;
    font-weight: 900;
    text-align: center;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
  }
}

.popover-to-top {
  bottom: 40%;
  transform: translateX(-50%) translateY(90%);
}

.mask-layer {
  position: fixed;
  background-color: #0000003e;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 8;
}

//   动画
.both-sides .button-both-sides {
  transition: 0.2s all;
  left: 0;
  right: 0;
  opacity: 1;
}

.button-both-sides {
  transition: 0.2s all;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  background-color: #e5e5e568;
  // background-color: #ff3636;
  z-index: 1;
}
</style>
