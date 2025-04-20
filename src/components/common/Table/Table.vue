<template>
  <div class="insider-data-table-container" :style="cssProps">
    <div class="insider-data-table-container__table">
      <slot name="additional-header"></slot>
      <table>
        <thead v-if="columns?.length > 0">
        <tr class="insider-table-header-row">
          <th
            v-for="(column, index) in columns"
            :key=" column.dataIndex +`--${index}`"
            :style="column.style"
            :class="column.dataIndex + ' table-header-col'"
          >
            {{column.value}}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(rowData, rowIndex) in data" :key="rowData.dataIndex + `--${rowIndex}`">
          <td
            v-for="(column, index) in columns"
          >
            <div v-if="(!!$slots[column?.scopedSlots?.customRenderer])" :style="column?.scopedSlots.style">
              <slot :name="column?.scopedSlots?.customRenderer" :rowData="rowData"></slot>
            </div>
            <div v-else> {{rowData[column.dataIndex]}}</div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ITable } from '@/interfaces/index.js';
import { defaultStyles } from './assets/resources.js'
import { computed } from "vue";

const {
  customStyle,
  bordered = false,
  verticalBorder = false,
  data = [],
  columns = [],
} = defineProps<ITable>()

const cssProps = computed(() =>   {
  const styleObject = {...defaultStyles, ...customStyle};
  return {
    '--font-size': styleObject.fontSize,
    '--font-weight': styleObject.fontWeight,
    '--table-border': styleObject.tableBorder,
    '--table-border-radius': bordered && styleObject.tableBorderRadius,
    '--table-cell-padding': styleObject.tableCellPadding,
    '--table-header-background-color': styleObject.headerBackgroundColor,
    '--table-cell-alignment': styleObject.tableCellAlignment,
    '--header-cell-alignment': styleObject.headerCellAlignment,
    '--header-cell-padding': styleObject.headerCellPadding,
    '--table-background-color': styleObject.tableBackgroundColor,
    '--table-vertical-border': verticalBorder && styleObject.verticalBorderStyle,
    '--table-height': styleObject.tableHeight,
    '--table-width': styleObject.tableWidth,
  }
})

</script>

<style scoped lang="scss">
.insider-data-table-container {
  width: 100%;
  &__table {
    overflow-y: auto;
    overflow-x: auto;
    height: var(--table-height);
    position: relative;
    width: 100%;
    border: var(--table-border);
    border-radius: var(--table-border-radius);

    & > table {
      width: 100%;
      border-collapse: collapse;
      font-size: var(--font-size);
      font-weight: var(--font-weight);
      background-color: var(--table-background-color);
      border-radius: var(--table-border-radius);

      & > thead {
        border-radius: var(--table-border-radius);

        & > tr {
          & > th {
            text-align: var(--header-cell-alignment);
            padding: var(--header-cell-padding);
            background-color: var(--table-header-background-color);
          }

          & > th:not(:last-child) {
            border-right: var(--table-vertical-border);
          }
        }
        border-bottom: var(--table-border);
      }

      & > tbody {
        & > tr {
          & > td {
            padding: var(--table-cell-padding);
            text-align: var(--table-cell-alignment);
          }

          & > td:not(:last-child) {
            border-right: var(--table-vertical-border);
          }

        }

        & > tr:not(:last-child) {
          border-bottom: var(--table-border);
        }
      }
    }
  }
}
</style>
