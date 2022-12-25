<script setup lang="ts">
import { usePagination } from '@/composables/usePagination'
import type { DTProps } from '@/types/DataTableProps'
import { PropType } from 'vue'

const props = defineProps({
  headers: {
    type: Array as PropType<DTProps['headers']>,
    required: true,
  },
  rows: {
    type: Array as PropType<DTProps['rows']>,
    required: true,
    default: [],
  },
  noWrap: {
    type: Boolean,
    default: true,
  },
  striped: {
    type: Boolean,
    default: false,
  },
  borderDashed: {
    type: Boolean,
    default: false,
  },
  perPage: {
    type: String as PropType<DTProps['perPage']>,
    default: { default: 10, options: [10, 20, 30, 40, 50, 100] },
  },
})

const { pagination, goToNextPage, goToPrevPage, updatePerPage, sort } =
  usePagination(props)
const { rows } = useTableRows(props, pagination)
provide('datatable', {
  props,
  rows,
  pagination,
  goToNextPage,
  goToPrevPage,
  updatePerPage,
  sort,
})
const slots = useSlots()
</script>
<template>
  <div
    class="vn-datatable"
    :class="{ 'vn-striped': striped, 'vn-border-dashed': borderDashed }"
  >
    <VTableCards>
      <template v-for="field in Object.keys(slots)" v-slot:[field]="{ item }">
        <slot :name="field" :item="item" />
      </template>
    </VTableCards>

    <table :class="noWrap ? 'whitespace-nowrap' : 'table-auto'">
      <VDatatableHeader />
      <VDatatableBody>
        <template v-for="field in Object.keys(slots)" v-slot:[field]="{ item }">
          <slot :name="field" :item="item" />
        </template>
      </VDatatableBody>
    </table>
    <VDatatableFooter />
  </div>
</template>
