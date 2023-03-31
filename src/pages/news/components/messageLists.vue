<template>
  <view class="">
    <!--  -->

    <view class="scroll-view_H" :class="{ parent: parentShow }">
      <view class="list">
        <view
          class="list-item scroll-view-item"
          hover-class="hover"
          hover-start-time="5"
          hover-stay-time="10"
        >
          <view class="item-left z-9">
            <image :src="item.src" alt="" class="left-img" />
            <view class="left-right">
              <view class="item-title-top fz-16">
                {{ item.title }}
              </view>
              <view class="item-text-bottom fz-10">
                {{ item.text }}
              </view>
            </view>
          </view>
          <view class="item-right z-9">
            <view class="item-top">
              <view class="corner-mark fz-10">
                {{ item.cornerMark }}
              </view>
            </view>
            <view class="item-bottom fz-10">最近</view>
          </view>
        </view>
      </view>
      <view class="scroll-view-item_H control-Strip">
        <view class="control-Strip-content">
          <view
            class="control-Strip-item bg-place"
            hover-class="hover"
            hover-start-time="5"
            hover-stay-time="10"
          >
            <view class="iconfont icon-daohang daohang"></view>
          </view>
          <view
            class="control-Strip-item bg-del"
            hover-class="hover"
            hover-start-time="5"
            hover-stay-time="10"
            @click="onDelete(item.id)"
          >
            <view class="iconfont icon-shanchu shanchu"></view>
          </view>
        </view>
      </view>
    </view>
    <!-- scroll- -->
  </view>
</template>

<script lang="ts" setup>
interface Props {
  item: {
    id: number
    title: string
    text: string
    cornerMark: number
    src: string
  }
}

const props = defineProps<Props>()
const { item } = toRefs(props)

let parentShow = ref(false)

const emit = defineEmits(['del'])

const onDelete = (e: number) => {
  parentShow.value = true
  setTimeout(() => {
    emit('del', e)
  }, 500)
}
</script>

<style lang="scss" scoped>
.box-s {
  // rgba(166, 166, 166, 1);
  box-shadow: 20px 20px 0rpx red !important;
}

.parent {
  animation: fadeOut 0.8s linear;
}

.hover {
  transform: scale(0.95);
}

.scroll-view_H {
  white-space: nowrap;
  width: 100%;
  scroll-snap-type: x proximity;
  overflow-x: scroll;
  overflow-y: visible;
  &::-webkit-scrollbar {
    width: 10px;
  }
  .control-Strip {
    display: inline-block;
    height: 188rpx;
    width: 50%;
    vertical-align: top;

    .control-Strip-content {
      display: flex;
      padding-top: 20rpx;
      box-sizing: border-box;
      height: 100%;
      .control-Strip-item {
        width: 100%;
        border-radius: 25rpx;
        margin-left: 10rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
      }
    }
  }
  .scroll-view-item {
    scroll-snap-stop: always;
    scroll-snap-align: end;
  }
  .list {
    display: inline-block;
  }
  .list-item {
    margin-top: 20rpx;
    border-top-left-radius: 250rpx;
    border-bottom-left-radius: 250rpx;
    border-top-right-radius: 50rpx;
    border-bottom-right-radius: 50rpx;

    padding: 16rpx 22rpx;
    background-color: #fff;
    width: 722rpx;
    height: 168rpx;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .item-left {
      display: flex;
      .left-img {
        width: 104rpx;
        height: 104rpx;
        border-radius: 50%;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
      .left-right {
        margin-left: 12rpx;
        .item-title-top {
          color: rgba(0, 0, 0, 1);
        }
        .item-text-bottom {
          margin-top: 20rpx;
          color: rgba(166, 166, 166, 1);
          line-height: 150%;
          text-align: left;
          width: 450rpx;
          white-space: normal;
          word-wrap: break-word;
          word-break: break-all;
        }
      }
    }

    .item-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .item-top {
        display: flex;
        align-items: center;
        justify-content: center;
        .corner-mark {
          width: 28rpx;
          height: 28rpx;
          color: rgba(255, 255, 255, 1);
          background-color: rgba(233, 61, 61, 1);
          border-radius: 14rpx;
          text-align: center;
        }
      }
      .item-bottom {
        width: 48rpx;
        height: 36rpx;
        left: 662rpx;
        top: 420rpx;
        color: rgba(166, 166, 166, 1);
        text-align: left;
      }
    }
  }
}
.bg-place {
  background-color: #4b94fd;
  .daohang {
    font-size: 35px;
  }
}
.bg-del {
  background-color: #ff5a6b;
  .shanchu {
    font-size: 30px;
  }
}
</style>
