<script lang="ts" setup>
import { Typography } from '@/components/ui/typography'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/vue'

const colorMode = useColorMode()
const navLinks = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About' }
]
</script>

<template>
  <nav class="p-4">
    <div class="container mx-auto flex justify-between items-center">
      <Typography variant="p" affects="large">RH</Typography>

      <div class="flex items-center space-x-4">
        <div class="hidden md:flex space-x-6">
          <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" :class="[
            'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline hover:underline-offset-4',
            { 'underline underline-offset-4': $route.path === link.path }
          ]">
            <Typography variant="p" affects="small">{{ link.text }}</Typography>
          </NuxtLink>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline">
              <Icon icon="radix-icons:moon"
                class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Icon icon="radix-icons:sun"
                class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span class="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem @click="colorMode.preference = 'light'">
              Light
            </DropdownMenuItem>
            <DropdownMenuItem @click="colorMode.preference = 'dark'">
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem @click="colorMode.preference = 'system'">
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </nav>
</template>