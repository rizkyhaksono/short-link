<script lang="ts" setup>

</script>

<template>
  <div class="min-h-screen grid place-items-center bg-gray-100/40 dark:bg-gray-900/40">
    <div class="w-full max-w-md space-y-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">

      <slot />
      <LayoutsFooter />
    </div>
  </div>
</template>
