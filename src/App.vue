<script>
import { ref } from "vue";

export default {
  setup() {
    const timeRunning = ref(false);
    const now = ref(0);
    const minutes = ref(25);
    const seconds = ref(0);
    const then = ref(0);
    const countdown = ref({});
    const interval = ref(0);

    const startTimer = () => {
      timeRunning.value = true;

      now.value = new Date().getTime();
      then.value = new Date();
      console.log(minutes.value)
      console.log(seconds.value)
      console.log(then.value)
      then.value.setMinutes(then.value.getMinutes() + minutes.value, then.value.getSeconds() + seconds.value);
      console.log(then.value)

      interval.value = setInterval(function () {
        // countdown.value =  new Date(then.value.getTime() - new Date().getTime());
        let test =  then.value.getTime() - new Date().getTime();
        
        var minutes = Math.floor(test / 60000);
        var seconds = ((test % 60000) / 1000).toFixed(0);
        countdown.value = {"minutes": minutes, "seconds": seconds}
        // console.log(countdown.value)
        // console.log(minutes + ":" + (seconds < 10 ? '0' : '') + seconds);
        // console.log(minutes)
        
        // countdown.value =  ());
      }, 1000);
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
          <input class="container text-8xl hover:bg-purple-400 cursor-pointer" :placeholder="minutes" v-model="minutes">
          <div class="text-8xl">:</div>
          <input class="container text-8xl hover:bg-purple-400 cursor-pointer" :placeholder="seconds" v-model="seconds">
        </div>
      </div>
    </div>

    <div class="flex flex-row m-auto mt-10 space-x-3">
      <a
        href="#"
        @click="startTimer"
        class="bg-green-400 py-3 px-4 font-bold text-2xl rounded"
        >Start</a
      >
      <a
        href="#"
        @click="stopTimer"
        class="bg-red-400 py-3 px-4 font-bold text-2xl rounded"
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
