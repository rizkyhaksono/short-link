<script lang="ts" setup>
</script>

<template>
  <div class="flex min-h-screen justify-center">
    <div class="w-full max-w-screen-md px-4 flex-1">
      <LayoutsNavbar />
      <slot />
      <LayoutsFooter />
    </div>
  </div>
</template>