<script setup lang="ts">
import { DTProvider } from '@/types/DataTableProps'

const dt = inject('datatable') as DTProvider
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div
      v-for="row in unref(dt.rows)"
      :key="randomId()"
      class="bg-white shadow dark:bg-slate-800 p-4 rounded-lg space-y-5 overflow-hidden"
    >
      <div v-for="header in dt.props.headers" :key="randomId()">
        <div class="space-y-1">
          <div class="text-slate-400 dark:text-slate-600">
            {{ header.label }}
          </div>
          <div class="text-slate-700 dark:text-slate-400">
            <slot :item="row" :name="header.value">
              {{
                header.format
                  ? header.format(row[header.value])
                  : row[header.value]
              }}
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
