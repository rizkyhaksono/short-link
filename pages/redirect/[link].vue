<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { navigateTo } from '#imports'
import type { SearchApiResponse } from '~/lib/types/api'

const router = useRouter()
const link = router.currentRoute.value.params.link
const error = ref(false)

try {
  const { data: linkData } = await $fetch<SearchApiResponse>(`http://api.link.natee.my.id/api/links/search`, {
    method: 'POST',
    body: {
      short_url: link,
    },
  })

  if (linkData?.original_url) {
    navigateTo(linkData.original_url, {
      external: true
    })
  } else {
    error.value = true
  }
} catch (e) {
  error.value = true
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div v-if="error" class="text-center">
      <h1 class="text-4xl font-bold text-red-500 mb-4">404</h1>
      <p class="text-gray-600">Short link not found</p>
      <NuxtLink to="/" class="mt-4 inline-block text-blue-500 hover:underline">
        Back to Home
      </NuxtLink>
    </div>
    <div v-else>
      <div class="text-center">
        <h1 class="text-xl mb-4">Redirecting to: {{ link }}</h1>
        <div class="flex justify-center space-x-2">
          <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0s"></div>
          <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
          <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
        </div>
      </div>
    </div>
  </div>
</template>