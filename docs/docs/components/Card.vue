<script setup>
import { ref } from 'vue'
const showCode = ref(false)
</script>

<template>
  <slot />

  <div class="vp-raw">
    <slot name="demo" />
  </div>

  <div
    class="flex items-center justify-end mt-6 text-gray-300 dark:text-gray-600"
    :class="{ '!text-primary': showCode }"
  >
    <div>
      <svg
        @click="showCode = !showCode"
        class="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M8.293 6.293L2.586 12l5.707 5.707l1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707l-1.414 1.414L18.586 12l-4.293 4.293z"
        />
      </svg>
    </div>
  </div>

  <div v-show="showCode" class="mt-2">
    <slot name="code" />
  </div>
</template>
