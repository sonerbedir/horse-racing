<template>
  <div class="container">
    <div class="left-side">
      <GeneralHorsList />
    </div>
    <div class="right-side">
      <RaceBoard />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RaceBoard, GeneralHorsList } from "@/components";
import { useHorseGameStore } from "@/stores/useHorseGameStore.js";

const store = useHorseGameStore();

store.setInitialHorseList();

</script>

<style scoped lang="scss">
.container {
  margin: 10px 10px;
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-template-rows: 1fr;
  gap: 10px;
}
</style>
