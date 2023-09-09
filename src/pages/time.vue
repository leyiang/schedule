<template>
  <div class="time-page">
    <CountDown></CountDown>
  </div>
</template>

<script setup>
import CountDown from "../components/Countdown.vue";
</script>

<style scoped lang="scss">
$scale: 2;

.time-page {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.count-down {
  font-weight: 700;
  font-size: 4rem * $scale;
  display: flex;
}

:deep(.count-down .count-down-item) {
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem * $scale;
  text-align: center;
}

:deep(.count-down-item .num) {
  line-height: 1;
}

:deep(.count-down-item .label) {
  font-weight: 400;
  font-size: 1rem * $scale;
}
</style>