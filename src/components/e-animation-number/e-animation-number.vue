<!-- @format -->

<template>
  <text>{{ num }}</text>
</template>

<script setup lang="ts">
interface Props {
  start?: number
  stop: number
  speed?: number
}
const props = withDefaults(defineProps<Props>(), {
  start: 0,
  stop: 0,
  speed: 10,
})
const { start, stop, speed } = toRefs(props)

const num = ref(start.value)
const timer = ref(0)

const begin = (funSpeed = 100) => {
  if (num.value === stop.value) {
    clearTimeout(timer.value)
    return
  }

  timer.value = setTimeout(() => {
    if (stop.value > start.value && num.value < stop.value) {
      num.value = num.value + 1
    } else {
      num.value = num.value - 1
    }
    begin(funSpeed)
  }, funSpeed)
}

watch(stop, () => {
  begin(speed.value)
})
</script>
