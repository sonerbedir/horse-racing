<template>
  <Table :custom-style="GENERAL_HORSE_TABLE_CONFIG.CUSTOM_STYLE" bordered :columns="GENERAL_HORSE_TABLE_CONFIG.COLUMN" :data="store.horses">
    <template #additional-header>
      <div class="table-title">
        {{ GENERAL_HORSE_TABLE_CONFIG.TITLE }}
      </div>
    </template>
  </Table>
</template>
<script setup lang="ts">
import {Table} from "@/components";
import { useHorseGameStore } from "@/stores/useHorseGameStore.js";
import { GENERAL_HORSE_TABLE_CONFIG } from "@/constants/constants.js";

const store = useHorseGameStore();
</script>

<style scoped lang="scss">
.table-title {
  position: sticky;
  top: 0;
  padding: 10px;
  background-color: #f0eb64;
  text-align: center;
}
</style>
