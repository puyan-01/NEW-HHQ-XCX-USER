<!--
   terminal-setup 终端设置

-->
<template>
  <view class="body">
    <view class="content">
      <my-switch
        switchColor="var(--subject-color)"
        @switchChange="switchChange"
        :status="status"
      >
        haha 自定义内容
      </my-switch>
      <my-switch
        switchColor="var(--subject-color)"
        iconClass=""
        @switchChange="switchChange"
      ></my-switch>
      <my-switch
        switchColor="var(--subject-color)"
        @switchChange="switchChange"
      ></my-switch>
    </view>
  </view>
</template>

<script lang="ts" setup>
import i18n from '@/language'
const { t } = i18n.global

onLoad(() => {
  uni.setNavigationBarTitle({
    title: t(`终端设置`),
  })
})
const status = ref(true)

const switchChange = (e: boolean) => {
  console.log(`e --->`, e, '触发了点击')
}
</script>

<style lang="scss" scoped>
.content {
  padding: 0 10px;
}
</style>
