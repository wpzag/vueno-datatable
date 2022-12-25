<script setup lang="ts">
import { DTProvider } from '@/types/DataTableProps'

const dt = inject('datatable') as DTProvider
</script>
<template>
  <tbody>
    <tr v-for="row in unref(dt.rows)" :key="randomId()">
      <td
        v-for="header in dt.props.headers"
        :style="{
          width: header.width ?? '1%',
          textAlign: header.align ?? 'left',
        }"
        :key="randomId()"
      >
        <slot :item="row" :name="header.value">
          {{
            header.format ? header.format(row[header.value]) : row[header.value]
          }}
        </slot>
      </td>
    </tr>
  </tbody>
</template>
