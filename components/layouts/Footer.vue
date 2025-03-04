<script lang="ts" setup>
import { Typography } from '@/components/ui/typography'
</script>

<template>
  <footer class="flex border-t border-gray-900/10 dark:border-gray-50/[0.2]">
    <div
      class="flex-1 justify-between max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row py-2 space-y-2 md:space-y-0 items-center text-xs text-center md:text-left text-gray-400">
      <NuxtLink href="https://github.com/rizkyhaksono" target="_blank">
        <Typography variant="p" affects="muted">Natee</Typography>
      </NuxtLink>
      <Typography variant="p" affects="muted">
        Copyright ©<span>{{ new Date().getFullYear() }}</span>
      </Typography>
    </div>
  </footer>
</template>