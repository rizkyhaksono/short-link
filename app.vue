<script setup lang="ts">
useSeoMeta({
  title: 'Short Link - Natee',
  ogTitle: 'Short Link - Natee',
  description: 'Short link is a tool to shorten a long link',
  ogDescription: 'Short link is a tool to shorten a long link',
  ogImage: 'https://natee.me/favicon.ico',
})

import Toaster from '@/components/ui/toast/Toaster.vue'
</script>

<template>
  <Toaster />
  <NuxtLoadingIndicator />
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>