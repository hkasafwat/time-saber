<script>
import { ref } from "vue";

export default {
  setup() {
    const timeRunning = ref(false);
    const now = ref(0);
    const minutes = ref(25);
    const seconds = ref('00');
    const then = ref(0);
    const countdown = ref({});
    const interval = ref(0);

    const startTimer = () => {
      timeRunning.value = true;

      now.value = new Date().getTime();
      then.value = new Date();

      if(minutes.value > 59) {
        let hrs = Math.floor(parseInt(minutes.value) / 60);
        let mins = parseInt(minutes.value) % 60;
        let secs = parseInt(seconds.value);

        then.value.setHours(then.value.getHours() + hrs, then.value.getMinutes() + mins, then.value.getSeconds() + secs);
      } else {
        let mins = parseInt(minutes.value);
        let secs = parseInt(seconds.value);

        then.value.setMinutes(then.value.getMinutes() + mins, then.value.getSeconds() + secs);
      }

      interval.value = setInterval(function () {
        let millisecondsDiff =  then.value.getTime() - new Date().getTime();
        
        let mins = Math.floor(millisecondsDiff / 60000);
        let secs = ((millisecondsDiff % 60000) / 1000).toFixed(0);
        countdown.value = {"minutes": mins, "seconds": secs}
      }, 100);
    };

    const stopTimer = () => {
      clearInterval(interval.value);
      timeRunning.value = false;
    };

    return {
      timeRunning,
      countdown,
      minutes,
      seconds,
      startTimer,
      stopTimer,
    };
  },
};
</script>

<template>
  <div
    class="
      container
      bg-purple-100
      flex flex-col
      justify-center
      m-auto
      rounded
      shadow
      p-16
    "
  >
    <div class="flex flex-row m-auto">
      <div v-if="timeRunning" class="flex">
        <!-- <div class="text-8xl">{{ countdown.getMinutes() }}</div>
        <div class="text-8xl">:</div>
        <div class="text-8xl">
          {{
            countdown.getSeconds() > 9
              ? countdown.getSeconds()
              : "0" + countdown.getSeconds()
          }}
        </div> -->
        <div class="text-8xl">{{ countdown.minutes }}</div>
        <div class="text-8xl">:</div>
        <div class="text-8xl">
          {{
            countdown.seconds > 9
              ? countdown.seconds
              : "0" + countdown.seconds
          }}
        </div>
      </div>
      <div v-else class="flex">
        <!-- <div class="text-8xl hover:bg-purple-400 cursor-pointer">25</div>
        <div class="text-8xl">:</div>
        <div class="text-8xl hover:bg-purple-400 cursor-pointer">00</div> -->

        <div class="flex">
          <input class="w-44 text-8xl hover:bg-purple-400 cursor-pointer rounded shadow p-2 text-center" :placeholder="minutes" v-model="minutes">
          <div class="text-8xl mx-4">:</div>
          <input class="w-44 text-8xl hover:bg-purple-400 cursor-pointer rounded shadow p-2 text-center" :placeholder="seconds" v-model="seconds">
        </div>
      </div>
    </div>

    <div class="flex flex-row m-auto mt-10 space-x-3">
      <a
        href="#"
        @click="startTimer"
        class="bg-green-400 py-3 px-4 font-bold text-2xl rounded shadow"
        >Start</a
      >
      <a
        href="#"
        @click="stopTimer"
        class="bg-red-400 py-3 px-4 font-bold text-2xl rounded shadow"
        >Stop</a
      >
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
