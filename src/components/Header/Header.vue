<template>
  <header>
    <h2>Horse Racing</h2>
    <div class="header-right-section">
      <Button
        v-if="store.raceResults.length"
        :text="BUTTON_TEXT.RESULT"
        size="small"
        @click="openRaceResults"
      />
      <Button
        v-if="isRaceScheduleCreated"
        :text="BUTTON_TEXT.SCHEDULE"
        size="small" @click="openRaceSchedule"
      />
      <Button
        :disabled="isRaceScheduleCreated"
        :text="BUTTON_TEXT.GENERATE"
        size="small" @click="generateProgram"
      />
      <Button
        :disabled="store.isRaceStart || !isRaceScheduleCreated"
        :text="BUTTON_TEXT.START"
        size="small"
        @click="onClickStart"
      />
    </div>
    <Drawer v-model="isOpenDraw">
      <template #header>
        <h2> {{isRaceScheduleOpen ? TITLE_TEXT.SCHEDULE : TITLE_TEXT.RESULTS}}</h2>
      </template>
      <template #body>
        <RaceSchedule v-if="isRaceScheduleOpen" />
        <RaceResults v-if="isRaceResultsOpen" />
      </template>
    </Drawer>
  </header>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { Button, Drawer, RaceSchedule, RaceResults } from '@/components/index.js'
import { useHorseGameStore } from "@/stores/useHorseGameStore.js";
import { BUTTON_TEXT, TITLE_TEXT } from "@/constants/constants.js";

const store = useHorseGameStore();

const isOpenDraw = ref<boolean>(false);
const isRaceScheduleOpen = ref<boolean>(false);
const isRaceResultsOpen = ref<boolean>(false);

const onClickStart = () => {
  store.startRace()
}

const openRaceSchedule = () => {
  isRaceResultsOpen.value = false;
  isOpenDraw.value = true;
  isRaceScheduleOpen.value = true;
}

const openRaceResults = () => {
  isRaceScheduleOpen.value = false;
  isOpenDraw.value = true;
  isRaceResultsOpen.value = true;
}

const generateProgram = () => {
  store.generateRaceSchedule()
}

const isRaceScheduleCreated = computed(() => {
  return (store.raceSchedule && store.raceSchedule.length > 0)
})

</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  background: $color-light-coral-primary;
  padding: 20px 10px;

  .header-right-section {
    display: flex;
    gap: 5px;
  }
}
</style>
