<template>
  <VDatatable :headers="headers" :rows="rows" />
</template>
<script setup>
import { users } from '../demo/users'

const headers = [
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
]
const rows = users
</script>
