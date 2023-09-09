import { defineStore } from 'pinia'
import {computed, ref} from "vue";

export const useTimeStore = defineStore('counter', () => {
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);

    const targetTime = new Date(); // Initialize targetTime with current date and time
    targetTime.setHours(22, 0, 0, 0); // Set target time to 10:00:00

    if (new Date().getHours() >= 22) {
        // If current time is after 10am, add one day to targetTime
        targetTime.setDate(targetTime.getDate() + 1);
    }

    const startCountdown = () => {
        // Update countdown immediately
        updateCountdown();

        // Start interval for updating countdown every second
        setInterval(updateCountdown, 1000);
    };

    const updateCountdown = () => {
        const currentTime = Date.now();
        const distance = targetTime - currentTime;

        if (distance < 0) {
            // Countdown completed
            days.value = 0;
            hours.value = 0;
            minutes.value = 0;
            seconds.value = 0;
        } else {
            days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
            hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
        }
    };

    const formatValue = (value) => {
        return value.toString().padStart(2, '0');
    };

    const formattedDays = computed(() => formatValue(days.value));
    const formattedHours = computed(() => formatValue(hours.value));
    const formattedMinutes = computed(() => formatValue(minutes.value));
    const formattedSeconds = computed(() => formatValue(seconds.value));

    startCountdown();

    return {
        formattedDays,
        formattedHours,
        formattedMinutes,
        formattedSeconds,
    }
})