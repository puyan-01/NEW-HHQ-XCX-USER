const batteryWidth = ref(0) //电量数据

// 更新数据
const updateData = () => {
  batteryWidth.value = 0

  setTimeout(() => {
    batteryWidth.value = 90
  }, 2000)
}

export { batteryWidth, updateData }
