<template>
  <view>
    <!-- contact-customer-cervice 联系客服 -->
    联系客服
  </view>
</template>

<script lang="ts" setup>
import i18n from '@/language'
const { t } = i18n.global
const t2 = i18n.global

onLoad(() => {
  uni.setNavigationBarTitle({
    title: t(`联系客服`),
  })
  const aa = 1

  const bb = 1

  console.log(`varName ====>`, t2, aa, bb)

})

</script>

<style lang="scss" scoped></style>
