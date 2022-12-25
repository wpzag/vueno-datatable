<script setup lang="ts">
import { DTProvider } from '@/types/DataTableProps'

const { goToNextPage, goToPrevPage, updatePerPage, pagination, props } = inject(
  'datatable'
) as DTProvider
const isLastPage = computed(() => pagination.page === pagination.lastPage)
</script>
<template>
  <footer>
    <div>
      <select
        v-if="
          typeof props.perPage === 'object' && props.perPage.options.length > 1
        "
        :value="pagination.rowsPerPage"
        @change="
          updatePerPage(
            parseInt(($event?.target as HTMLSelectElement)?.value ?? 10)
          )
        "
      >
        <option v-for="item in props.perPage.options" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
    </div>

    <div class="flex gap-1 items-center">
      <div class="mx-2">
        {{ pagination.from ?? 0 }} - {{ pagination.to ?? pagination.total }} of
        {{ pagination.total }}
      </div>
      <button
        :class="{
          'opacity-50 pointer-events-none': pagination.page === 1,
        }"
        class="vn-navigation-btn"
        @click="goToPrevPage"
      >
        <div class="i-carbon-arrow-left"></div>
      </button>

      <button
        :class="{
          'opacity-50 pointer-events-none': isLastPage,
        }"
        :disabled="isLastPage"
        class="vn-navigation-btn"
        @click="goToNextPage"
      >
        <div class="i-carbon-arrow-right"></div>
      </button>
    </div>
  </footer>
</template>
