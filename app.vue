<script setup lang="ts">
useSeoMeta({
  title: 'Short Link - Natee',
  ogTitle: 'Short Link - Natee',
  description: 'Short link is a tool to shorten a long link',
  ogDescription: 'Short link is a tool to shorten a long link',
  ogImage: 'https://natee.me/favicon.ico',
})
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>