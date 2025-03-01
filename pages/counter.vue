<script setup lang="ts">
const counter = useState('counter', () => 0)
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
    <div class="flex flex-col bg-gray-100 p-4">
      <NuxtLink to="/">Home page</NuxtLink>
      <NuxtLink to="/about">About page</NuxtLink>
    </div>
  </div>
</template>
