<script setup lang="ts">
import VDatatable from '@/components/VDatatable.vue'
import { DTHeader } from './types/DataTableProps'

const rows = [
  {
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/300',
    email: 'john.doe@example.com',
    age: 35,
    activated: true,
  },
  {
    name: 'Jane Smith',
    avatar: 'https://i.pravatar.cc/301',
    email: 'jane.smith@example.com',
    age: 28,
    activated: true,
  },
  {
    name: 'Bob Johnson',
    avatar: 'https://i.pravatar.cc/302',
    email: 'bob.johnson@example.com',
    age: 42,
    activated: false,
  },
  // Additional rows
  {
    name: 'Alice Williams',
    avatar: 'https://i.pravatar.cc/303',
    email: 'alice.williams@example.com',
    age: 29,
    activated: true,
  },
  {
    name: 'Mike Thompson',
    avatar: 'https://i.pravatar.cc/304',
    email: 'mike.thompson@example.com',
    age: 41,
    activated: false,
  },
  {
    name: 'Sarah Johnson',
    avatar: 'https://i.pravatar.cc/305',
    email: 'sarah.johnson@example.com',
    age: 33,
    activated: true,
  },
  {
    name: 'David Smith',
    avatar: 'https://i.pravatar.cc/306',
    email: 'david.smith@example.com',
    age: 38,
    activated: false,
  },
  {
    name: 'Jessica Williams',
    avatar: 'https://i.pravatar.cc/306',
    email: 'jessica.williams@example.com',
    age: 25,
    activated: true,
  },
  {
    name: 'James Thompson',
    avatar: 'https://i.pravatar.cc/307',
    email: 'james.thompson@example.com',
    age: 31,
    activated: false,
  },
  {
    name: 'Emily Johnson',
    avatar: 'https://i.pravatar.cc/308',
    email: 'emily.johnson@example.com',
    age: 27,
    activated: true,
  },
  {
    name: 'William Smith',
    avatar: 'https://i.pravatar.cc/309',
    email: 'william.smith@example.com',
    age: 35,
    activated: false,
  },
  {
    name: 'Ashley Williams',
    avatar: 'https://i.pravatar.cc/310',
    email: 'ashley.williams@example.com',
    age: 29,
    activated: true,
  },
  {
    name: 'Michael Thompson',
    avatar: 'https://i.pravatar.cc/311',
    email: 'michael.@example.com',
    age: 41,
    activated: false,
  },
  {
    name: 'Sarah Johnson',
    avatar: 'https://i.pravatar.cc/312',
    email: 'sera@exanoke@.com',
    age: 33,
    activated: true,
  },
]
const headers: DTHeader[] = [
  {
    value: 'name',
    label: 'Name',
  },

  {
    value: 'email',
    label: 'Email',
  },

  {
    value: 'age',
    label: 'Age',
    sortable: true,
  },
  {
    value: 'activated',
    label: 'Activated',
    align: 'center',
  },
]
</script>
<template>
  <div class="w-90% mx-auto mt-20">
    <VDarkModeSwitcher />
    <VDatatable
      :headers="headers"
      :rows="rows"
      class="font-sans"
      border-dashed
      :perPage="{
        default: 5,
        options: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
      }"
    >
      <template #activated="{ item }">
        <div class="text-center flex justify-center lt-lg:justify-start">
          <div
            class="w-2 h-2 rounded-full"
            :class="item.activated ? 'bg-green-4' : 'bg-red-4'"
          ></div>
        </div>
      </template>
      <template #name="{ item }">
        <div class="flex items-center gap-x-2">
          <img :src="item.avatar" class="w-12 h-12 rounded-lg" />
          <div class="ml-2">
            <div>{{ item.name }}</div>
            <div class="text-sm">
              <span class="text-black dark:text-stone-3">Email : </span
              ><span class="text-gray-4">{{ item.email }}</span>
            </div>
          </div>
        </div>
      </template>
    </VDatatable>
  </div>
</template>
<style>
body,
html {
  @apply p-0 m-0 dark:bg-[#242424];
}
</style>
