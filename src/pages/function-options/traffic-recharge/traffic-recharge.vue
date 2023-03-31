<template>
  <view>
    <!-- traffic-recharge 流量充值 -->
    流量充值
  </view>
</template>

<script lang="ts" setup>
import i18n from '@/language'
const { t } = i18n.global

onLoad(() => {
  uni.setNavigationBarTitle({
    title: t(`流量充值`),
  })
})
</script>

<style lang="scss" scoped></style>
