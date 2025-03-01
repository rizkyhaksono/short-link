<script setup lang="ts">
useSeoMeta({
  title: 'Short Link - Natee',
  ogTitle: 'Short Link - Natee',
  description: 'Short link is a tool to shorten a long link',
  ogDescription: 'Short link is a tool to shorten a long link',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>