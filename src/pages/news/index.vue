<template>
  <view>
    <!-- 消息 -->
    <view class="content">
      <view class="list">
        <!-- 消息 -->
        <MessageLists
          @del="onDel"
          v-for="item in list"
          :key="item.id"
          :item="item"
        />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import MessageLists from './components/messageLists.vue'

let list = ref([
  {
    id: 1,
    cornerMark: 2,
    title: '你很好',
    text: `ninglofiogigeig..,;kgme;gmer;hgnelrerelgmer; rkhgndkhnAR;'/。`,
    src: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.EDxLlpw8Hq3z9HZVbMC9rgAAAA&w=176&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
  },
  {
    id: 2,
    cornerMark: 3,
    title: '你好嘛',
    text: '声明：（ZCOOL）内网友所发表的所有内容及言论仅代表其本人，并不反映任何,,,,,,,',
    src: 'https://pic1.zhimg.com/80/v2-b0df584675ffd04182f9cd6253509e78_720w.webp',
  },
  {
    id: 3,
    cornerMark: 1,
    title: '域行客服',
    text: '声明：（ZCOOL）内网友所发表的所有内容及言论仅代表其本人，并不反映任何,,,,,,,',
    src: 'https://ts4.cn.mm.bing.net/th?id=OIP-C.wdE_odnhX7D6lw7_xfPIcAAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
  },
])

const onDel = (e: number) => {
  const listIndex = list.value.findIndex((ele) => {
    return ele.id == e
  })

  list.value.splice(listIndex, 1)
  console.log(`list 222--->`, list)
}
</script>

<style lang="scss" scoped>
view {
  line-height: 150%;
}
.content {
  padding: 20rpx 14rpx;
}
</style>
