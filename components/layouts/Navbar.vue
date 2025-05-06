<script lang="ts" setup>
import { ref } from 'vue'
import { useColorMode } from '#imports'
import { Icon } from '@iconify/vue'
import { Typography } from '@/components/ui/typography'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const colorMode = useColorMode()
const isMobileMenuOpen = ref(false)

const navLinks = [
  { path: '/', text: 'Home' },
  { path: '/redirect', text: 'Redirect' },
  { path: '/about', text: 'About' },
]
</script>

<template>
  <nav class="py-4">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-bold text-gray-900 dark:text-white">
        <img src="https://natee.my.id/favicon.ico" alt="Logo" class="size-8" />
      </NuxtLink>

      <!-- Desktop -->
      <div class="hidden md:flex items-center gap-2 space-x-2">
        <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path" class="relative group">
          <Typography variant="p" affects="small"
            class="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {{ link.text }}
          </Typography>
          <span
            class="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </NuxtLink>
        <!-- <NuxtLink to="/auth/login">
          <Button variant="default" size="sm">Login</Button>
        </NuxtLink> -->

        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="icon" class="relative">
              <Icon icon="radix-icons:moon"
                class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Icon icon="radix-icons:sun"
                class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span class="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem @click="colorMode.preference = 'light'"> Light </DropdownMenuItem>
            <DropdownMenuItem @click="colorMode.preference = 'dark'"> Dark </DropdownMenuItem>
            <DropdownMenuItem @click="colorMode.preference = 'system'"> System </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden flex items-center gap-2">
        <button class="md:hidden text-gray-700 dark:text-white focus:outline-none"
          @click="isMobileMenuOpen = !isMobileMenuOpen">
          <Icon icon="heroicons-outline:menu-alt-3" class="h-6 w-6" />
        </button>
        <div class="md:hidden flex justify-between items-center">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" size="icon">
                <Icon icon="radix-icons:moon"
                  class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Icon icon="radix-icons:sun"
                  class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span class="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem @click="colorMode.preference = 'light'"> Light </DropdownMenuItem>
              <DropdownMenuItem @click="colorMode.preference = 'dark'"> Dark </DropdownMenuItem>
              <DropdownMenuItem @click="colorMode.preference = 'system'"> System </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen"
      class="md:hidden mt-4 border border-gray-200 dark:border-gray-800 transition-all rounded-lg">
      <div class="p-4 flex flex-col space-y-4">
        <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path"
          class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          @click="isMobileMenuOpen = false">
          {{ link.text }}
        </NuxtLink>

        <!-- <div class="flex flex-col space-y-2">
          <NuxtLink to="/auth/login">
            <Button variant="outline" class="w-full">Login</Button>
          </NuxtLink>
          <NuxtLink to="/auth/register">
            <Button variant="default" class="w-full">Register</Button>
          </NuxtLink>
        </div> -->
      </div>
    </div>
  </nav>
</template>
