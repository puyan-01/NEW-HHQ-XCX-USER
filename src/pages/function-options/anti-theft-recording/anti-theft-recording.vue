<template>
  <view>
    <!-- Anti-theft-recording 防盗录音 -->
    Anti-theft-recording 防盗录音
  </view>
</template>

<script lang="ts" setup>
import i18n from '@/language'
const { t } = i18n.global

onLoad(() => {
  uni.setNavigationBarTitle({
    title: t(`防盗录音`),
  })
})
</script>

<style lang="scss" scoped></style>
