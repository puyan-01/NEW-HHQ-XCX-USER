<script lang="ts" setup>
import i18n from '@/language'
const { t } = i18n.global

onLoad(() => {
  uni.setNavigationBarTitle({
    title: t(`电子围栏`),
  })
})
</script>

<template>
  <view>
    <!-- electronic-fence 电子围栏 -->
    <view class="flex title">
      <text></text>
      <view class="iconfont icon-tianjia tianjia"></view>
    </view>
    电子围栏
  </view>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
}
.tianjia {
  color: #000000;
  font-size: 40rpx;
}
</style>
