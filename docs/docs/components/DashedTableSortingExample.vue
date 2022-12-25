<template>
  <VDatatable :headers="headers" :rows="rows" border-dashed />
</template>
<script setup>
import { users } from '../demo/users'

const headers = [
  {
    value: 'name',
    label: 'Name',
    sortable: true,
  },
  {
    value: 'email',
    label: 'Email',
    sortable: true,
  },
  {
    value: 'age',
    label: 'Age',
    sortable: true,
  },
]
const rows = users
</script>
