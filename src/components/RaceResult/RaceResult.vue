<template>
  <div class="race-result" v-for="(race, index) in store.raceResults" :key="index">
    <Table
      :columns="RESULT_AND_SCHEDULE_TABLE_CONFIG.COLUMN"
      :data="tableData(race)"
      :custom-style="RESULT_AND_SCHEDULE_TABLE_CONFIG.CUSTOM_STYLE"
      vertical-border
    >
      <template #additional-header>
        <div class="result-header">{{generateTableHeaderContent(index)}}</div>
      </template>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Table } from "@/components";
import { useHorseGameStore } from "@/stores/useHorseGameStore.js";
import { RESULT_AND_SCHEDULE_TABLE_CONFIG } from "@/constants/constants.js";
import { generateTableHeaderContent } from "@/utils/utils.js";
import { IHorse } from "@/interfaces/index.js";

const store = useHorseGameStore();

const tableData = computed(() => {
  return (horse: IHorse) => {
    return horse.map((item, index) => {
      return {
        position: item.position,
        name: item.name
      }
    })
  }
})

</script>

<style scoped lang="scss">
.race-result {
  margin-bottom: 1rem;

  .result-header {
    background: #df735a;
    padding: 2px;
    display: flex;
    justify-content: center;
    font-weight: 600;
  }
}
</style>
