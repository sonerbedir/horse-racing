<template>
  <div class="race-board-container" ref="boardRef">
    <div class="race-board">
      <div class="lane" v-for="(horse, index) in currentRaceHorse" :key="index+ '-' + horse.speed">
        <div class="lane-number">{{index + 1}}</div>
        <div class="lane-line"></div>
        <div
          class="horse running-animation"
          :style="[horseCustomStyle, {animationDuration: (200/horse.speed) + 's'}]"
        >
          <span v-if="horse.speed" class="horse-icon">
            <Horse :style="{ color: horse.color }" />
          </span>
        </div>
      </div>
    </div>
    <div :style="{height: 500 + 'px'}" class="finish-line"></div>
    <div class="lap-name">{{store.currentLapName}}</div>
    <div class="finish-text">FINISH</div>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted, computed} from "vue";
import { Horse } from '@/components'
import { IRaceHorse } from "@/interfaces/index.js";
import { useHorseGameStore } from "@/stores/useHorseGameStore.js";

const store = useHorseGameStore();

const boardRef = ref<HTMLElement | null>(null);
const finishLineHeight = ref<number>(0);
const boardWidth = ref<number>(0);

if (boardRef.value) {
  finishLineHeight.value = boardRef.value.offsetHeight
  boardWidth.value = boardRef.value.offsetWidth
}

onMounted(() => {
  if (boardRef.value) {
    finishLineHeight.value = boardRef.value.offsetHeight
    boardWidth.value = boardRef.value.offsetWidth
  }
});

const horseCustomStyle = computed(() => {
  return {
    '--board-width': boardWidth.value - 20 + 'px',
  }
})

const currentRaceHorse = computed<IRaceHorse[]>(() => store.getCurrentRacingHorses);

</script>

<style lang="scss" scoped>
.race-board-container {
  margin: 20px 20px 0 20px;
  .race-board {
    .lane {
      position: relative;
      .lane-number {
        position: absolute;
        width: 40px;
        height: 50px;
        background-color: #55783c;
        text-align: center;
        transform: rotate(-90deg);
        color: white;
        z-index: 2;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      .lane-line {
        height: 50px;

        &:nth-child(n +1) {
          border-top: 1px dashed #999;
          border-bottom: 1px dashed #999 ;
        }
      }
    }
  }

  .horse {
    position: absolute;
    top: 5px;
    left: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .finish-line {
    position: absolute;
    top: 109px;
    right: 30px;
    width: 2px;
    background-color: #fe3321;
  }

  .finish-text {
    display: flex;
    justify-content: flex-end;
    color: #fe3321;
    font-weight: bold;
  }

  .lap-name {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    bottom: 90px;
    color: #fe3321;
    font-weight: bold;
  }

  @keyframes horse-run {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(var(--board-width));
    }
  }

  .running-animation {
    animation-name: horse-run;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
}
</style>
