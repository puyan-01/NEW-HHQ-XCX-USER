<!--
   traveling-track 行驶轨迹

  -->
<template>
  <view>
    <map
      name="map1"
      class="map"
      id="map1"
      :latitude="latitude"
      :longitude="longitude"
      :markers="covers"
      :polyline="polyline"
      style="width: 100%; height: 100vh"
    ></map>
  </view>
</template>

<script lang="ts" setup>
import i18n from '@/language'
const { t } = i18n.global
// const map1 = ref()
const latitude = 37.4820526
const longitude = 121.44577861
const covers = [
  {
    id: 1,
    longitude: 121.44820869,
    latitude: 37.48330837,
    width: 30,
    height: 30,
  },
]
const polyline = [
  {
    points: [
      {
        longitude: 121.44577861,
        latitude: 37.4820526,
      },
      {
        longitude: 121.44611657,
        latitude: 37.48207388,
      },
      {
        longitude: 121.44725382,
        latitude: 37.48224841,
      },
      {
        longitude: 121.44766152,
        latitude: 37.48237186,
      },
      {
        longitude: 121.44752741,
        latitude: 37.4827039,
      },
      {
        longitude: 121.44748986,
        latitude: 37.48299336,
      },
      {
        longitude: 121.44764543,
        latitude: 37.4831679,
      },
      {
        longitude: 121.44780636,
        latitude: 37.4831381,
      },
      {
        longitude: 121.44795656,
        latitude: 37.48312958,
      },
      {
        longitude: 121.4480263,
        latitude: 37.48316364,
      },
      {
        longitude: 121.44820869,
        latitude: 37.48330837,
      },
    ],
    color: '#31c27c',
    width: 5,
    arrowLine: true,
    borderWidth: 3, //线的边框宽度，还有很多参数，请看文档
    //  callout: { //自定义标记点上方的气泡窗口 点击有效
    //             content: '这是哪里', //文本
    //             color: '#ffffff', //文字颜色
    //             fontSize: 10, //文本大小
    //             borderRadius: 2, //边框圆角
    //             bgColor: '#00c16f', //背景颜色
    //             display: 'ALWAYS', //常显
    //           },
  },
]

onLoad(() => {
  uni.setNavigationBarTitle({
    title: t(`行驶轨迹`),
  })
  console.log('当前')
  // wx.getLocation({
  // // type: 'wgs84',
  //      altitude:true,
  //      success:function(res){
  //       console.log('当前位置的经度：' + res.longitude);
  //       console.log('当前位置的纬度：' + res.latitude);
  //       }
  //      });
  uni.getLocation({
    type: 'wgs84',
    success: function (res) {
      console.log('当前位置的经度：' + res.longitude)
      console.log('当前位置的纬度：' + res.latitude)
    },
    fail: function (res) {
      console.log('错误：' + res)
    },
  })
})
onMounted(() => {
  // console.log(` --->`, location)
  // console.log(` --->`, markers)
})
</script>

<style lang="scss" scoped></style>
