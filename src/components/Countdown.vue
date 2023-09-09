<template>
  <div class="count-down">
    <div class="count-down-item">
      <span class="num">{{ time.formattedHours }}</span>
      <span class="label">Hour</span>
    </div>

    <div class="count-down-item">
      <span class="num">{{ time.formattedMinutes }}</span>
      <span class="label">Min</span>
    </div>

    <div class="count-down-item">
      <span class="num">{{ time.formattedSeconds }}</span>
      <span class="label">Sec</span>
    </div>
  </div>
</template>

<script>
import {useTimeStore} from "../stores/useTimeStore.js";

export default {
  setup() {
    const time = useTimeStore();

    return {
      time
    };
  },
};
</script>
