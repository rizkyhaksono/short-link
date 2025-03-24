<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');
const router = useRouter();

const login = async () => {
  loading.value = true;
  errorMessage.value = '';

  try {
    const response = await $fetch('http://api.link.natee.me/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { email: email.value, password: password.value }
    });

    console.log('Login Success:', response);
    // document.cookie = `auth_link=${response?.token}; path=/; max-age=86400`;
    // router.push('/dashboard');
  } catch (error) {
    errorMessage.value = error || 'Login failed. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>

<script setup lang="ts">
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl">
          Login
        </CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button class="w-full">
          Sign in
        </Button>

      </CardFooter>
      <div class="mb-4 text-center text-sm">
        Don't have an account?
        <NuxtLink href="/auth/register" class="underline">
          Sign up
        </NuxtLink>
      </div>
    </Card>
  </div>
</template>
