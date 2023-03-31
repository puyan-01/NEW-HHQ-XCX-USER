<template>
  <view>
    <!--  -->
    <view class="content">
      <view
        class="content-item"
        hover-class="hover"
        @click="switchChange"
      >
        <view class="content-item-left">
          <slot>
            <view
              class="iconfont tuichudenglu"
              :class="iconClass"
              v-if="iconClass"
            />
            <view class="content-item-text">
              开启状态：{{ status ? 'ON' : 'OFF' }}
            </view>
          </slot>
        </view>
        <view class="content-item-right">
          <view class="right-text">
            <switch
              :color="switchColor"
              style="transform: scale(0.8)"
              :checked="switch_checked"
            ></switch>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
interface Props {
  switchColor?: string
  iconClass?: string
  status?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  switchColor: '',
  iconClass: '',
  status: false,
})
const { switchColor, iconClass, status } = toRefs(props)

const switch_checked = ref(status.value || false)

const emit = defineEmits(['switchChange']) // 事件

const switchChange = () => {
  switch_checked.value = !switch_checked.value
  emit('switchChange', switch_checked.value)
}
// 监听数据变化
watch(status, () => {
  switch_checked.value = status.value
  emit('switchChange', switch_checked.value)
})
</script>

<style lang="scss" scoped>
.content {
  margin-top: 10px;
  color: #8f969c;
  &-item {
    border-radius: 10rpx;
    border-bottom: 1rpx solid #f8f8f8;
    border-top: 1rpx solid #f8f8f8;
    display: flex;
    justify-content: space-between;
    line-height: 1;
    font-style: 32rpx;
    padding: 20rpx 30rpx;
    background-color: #fff;
    // text-align: center;
    align-items: center;
    &-left {
      display: flex;
    }
    .iconfont + &-text {
      margin-left: 15rpx;
    }
    &-right {
      display: flex;
    }
    .right-text {
      width: 128rpx;
    }
  }
  .switch {
    width: 150rpx;
  }
}
</style>
