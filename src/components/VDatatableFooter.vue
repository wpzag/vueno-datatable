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
      <div
        relative
        v-if="
          typeof props.perPage === 'object' && props.perPage.options.length > 1
        "
      >
        <div
          class="absolute inset-y-0 right-0 flex items-center h-full pointer-events-none"
        >
          <div class="i-carbon-chevron-down text-sm mr-2"></div>
        </div>
        <select
          :value="pagination.rowsPerPage"
          @change="
            updatePerPage(
              parseInt(($event?.target as HTMLSelectElement)?.value ?? 10)
            )
          "
        >
          <option
            v-for="item in props.perPage.options"
            :key="item"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </div>
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
