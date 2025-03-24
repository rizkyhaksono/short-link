<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast/use-toast'
import Typography from '~/components/ui/typography/Typography.vue'

const { toast } = useToast()
</script>

<template>
  <LayoutsBaseLayout>
    <Typography variant="h3">About</Typography>
    <Typography variant="p">
      This web application is a simple URL shortener that allows you to shorten your long URLs into a shorter one.
    </Typography>
    <Button variant="outline" class="mt-5" @click="() => {
      toast({
        title: 'Hello, world!',
        description: 'This is a toast message.',
      });
    }">Show Toast</Button>
  </LayoutsBaseLayout>
</template>