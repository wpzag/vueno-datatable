<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    @click="toggleDark()"
    class="fixed z-50 top-10 right-20 dark:text-white border-0 bg-transparent"
  >
    <i inline-block align-middle i="dark:carbon-moon carbon-sun" />

    <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
  </button>
</template>
