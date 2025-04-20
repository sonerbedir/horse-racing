<template>
  <div class="race-schedule" v-for="(race, index) in store.raceSchedule" :key="index">
    <Table
      :columns="RESULT_AND_SCHEDULE_TABLE_CONFIG.COLUMN"
      :data="tableData(race)"
      :custom-style="RESULT_AND_SCHEDULE_TABLE_CONFIG.CUSTOM_STYLE"
      vertical-border
    >
      <template #additional-header>
        <div class="schedule-header">{{generateTableHeaderContent(index)}}</div>
      </template>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Table } from "@/components";
import { IHorse } from "@/interfaces/index.js";
import { RESULT_AND_SCHEDULE_TABLE_CONFIG } from "@/constants/constants.js";
import { generateTableHeaderContent } from "@/utils/utils.js";
import { useHorseGameStore } from "@/stores/useHorseGameStore.js";


const store = useHorseGameStore();

const tableData = computed(() => {
  return (horse: IHorse) => {
    return horse.horses.map((item, index) => {
      return {
        position: index + 1,
        name: item.name
      }
    })
  }
})
</script>

<style scoped lang="scss">
.race-schedule {
  margin-bottom: 1rem;

  .schedule-header {
    background: #df735a;
    padding: 2px;
    display: flex;
    justify-content: center;
    font-weight: 600;
  }
}
</style>
