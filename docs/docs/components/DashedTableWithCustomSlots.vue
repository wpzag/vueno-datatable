<template>
  <VDatatable :headers="headers" :rows="rows" border-dashed perPage="5">
    <!-- modifying activated column -->
    <template #activated="{ item }">
      <div class="text-center flex justify-center lt-lg:justify-start">
        <div
          class="w-2 h-2 rounded-full"
          :class="item.activated ? 'bg-green-4' : 'bg-red-4'"
        ></div>
      </div>
    </template>

    <!-- modifying name column -->
    <template #name="{ item }">
      <div class="flex items-center gap-x-2">
        <img :src="item.avatar" class="w-12 h-12 rounded-lg" />
        <div class="ml-2">
          <div>{{ item.name }}</div>
          <div class="text-sm">
            <span class="text-gray-4">{{ item.email }}</span>
          </div>
        </div>
      </div>
    </template>
  </VDatatable>
</template>
<script setup>
import { users } from '../demo/users'

const rows = users
const headers = [
  {
    value: 'name',
    label: 'Name',
  },
  {
    value: 'company',
    label: 'Company',
    sortable: true,
  },
  {
    value: 'activated',
    label: 'Activated',
    align: 'center',
  },
]
</script>
