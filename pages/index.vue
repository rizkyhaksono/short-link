<script setup lang="ts">

</script>

<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
    <div class="flex flex-col bg-gray-100 p-4">
      <NuxtLink to="/about">About page</NuxtLink>
      <NuxtLink to="/counter">Counter page</NuxtLink>
    </div>
  </div>
</template>