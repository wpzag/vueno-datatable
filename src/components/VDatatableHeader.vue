<script setup lang="ts">
import { randomId } from '@/helpers'
import { DTProvider } from '@/types/DataTableProps'
const dt = inject('datatable') as DTProvider
</script>
<template>
  <thead>
    <tr>
      <th
        v-for="header in dt.props.headers"
        :style="{
          width: header.width ?? '1%',
          textAlign: header.align ?? 'left',
        }"
        :key="randomId()"
      >
        <button
          :class="{
            'pointer-events-none': !header.sortable,
            'ml-5': header.align === 'center',
          }"
          @click.prevent="dt.sort(header)"
        >
          {{ header.label }}
          <div
            class="vn-sort-icon"
            v-if="
              dt.pagination.sortDirection !== null &&
              dt.pagination.sortBy === header.value
            "
            :class="
              dt.pagination.sortDirection === 'desc'
                ? 'rotate-180 '
                : 'rotate-0 '
            "
          >
            <div class="i-carbon-arrow-up" />
          </div>
        </button>
      </th>
    </tr>
  </thead>
</template>
