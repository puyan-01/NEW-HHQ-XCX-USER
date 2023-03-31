<template>
  <view class="charts-box">
    <qiun-data-charts
      type="column"
      :opts="opts"
      :chartData="chartData"
      :canvas2d="true"
      canvasId="RSDhSldBYjYQKMipVXvYNGtTMBBIrXfL"
    />
  </view>
</template>

<script lang="ts" setup>
const chartData = ref({})
//您可以通过修改 config-ucharts.js 文件中下标为 ['column'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
const opts = {
  color: [
    '#43cf7c',
    '#91CB74',
    '#FAC858',
    '#EE6666',
    '#73C0DE',
    '#3CA272',
    '#FC8452',
    '#9A60B4',
    '#ea7ccc',
  ],
  padding: [20, 15, 10, 5],
  enableScroll: false,
  legend: {
    show: false,
  },
  xAxis: {
    disableGrid: true,
  },
  yAxis: {
    data: [
      {
        min: 0,
      },
    ],
  },
  extra: {
    column: {
      type: 'group',
      width: 20,
      activeBgColor: '#000000',
      activeBgOpacity: 0.08,
    },
  },
}

const getServerData = () => {
  //模拟从服务器获取数据时的延时
  //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
  let res = {
    categories: ['1日', '2日', '3日', '4日', '5日', '6日', '7日'],
    series: [
      {
        name: '目标值',
        data: [65, 30, 50, 105, 20, 85, 15],
      },
    ],
  }

  chartData.value = JSON.parse(JSON.stringify(res))
  console.log(123)
}

getServerData()
</script>

<style scoped>
/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
.charts-box {
  width: 100%;
  height: 462rpx;
}
</style>
