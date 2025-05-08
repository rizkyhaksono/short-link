<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { navigateTo } from '#imports'
import Button from '~/components/ui/button/Button.vue'
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
  console.error('Failed to fetch short link:', e)
  error.value = true
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center ">
    <div class="w-full max-w-md p-8 rounded-xl shadow-lg">
      <div v-if="error" class="text-center">
        <div class="mb-6">
          <svg class="w-20 h-20 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 class="text-5xl font-bold mb-4">404</h1>
        <p class="text-lg mb-6">This short link appears to be invalid</p>
        <NuxtLink to="/redirect">
          <Button class="w-full" variant="default">Back to Home</Button>
        </NuxtLink>
      </div>
      <div v-else class="text-center">
        <div class="mb-6">
          <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 class="text-2xl font-semibold mb-4">Redirecting you to:</h1>
        <p class="font-medium mb-6 break-all">{{ link }}</p>
        <div class="flex justify-center space-x-3">
          <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0s"></div>
          <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
          <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
        </div>
      </div>
    </div>
  </div>
</template>