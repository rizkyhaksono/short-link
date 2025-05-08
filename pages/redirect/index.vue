<template>
  <LayoutsBaseLayout>
    <div class="mx-auto">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold">Redirect Short Link</h2>
        <p class="text-sm text-muted-foreground">
          Enter your short URL and we'll redirect you to the original destination link
        </p>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="space-y-4">
          <div class="space-y-2">
            <Label for="link">Your Short Link</Label>
            <Input id="link" v-model="linkInput" placeholder="Enter your short URL here" />
          </div>
          <Button type="submit" class="w-full">Go to Original Link</Button>
        </div>
      </form>
    </div>
  </LayoutsBaseLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'nuxt/app'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const router = useRouter()
const linkInput = ref('')

const handleSubmit = () => {
  if (linkInput.value) {
    router.push(`/redirect/${linkInput.value}`)
  }
}
</script>