<script setup lang="ts">
import { DTProvider } from '@/types/DataTableProps'

const dt = inject('datatable') as DTProvider
</script>

<template>
  <div class="vn-cards-wrapper">
    <div v-for="row in unref(dt.rows)" :key="randomId()" class="vn-card">
      <div v-for="header in dt.props.headers" :key="randomId()">
        <div class="vn-card-label">
          {{ header.label }}
        </div>
        <div class="vn-card-value">
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
</template>
