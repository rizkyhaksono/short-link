<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { toTypedSchema } from '@vee-validate/zod'
import { useFetch } from '@vueuse/core'
import { useForm } from 'vee-validate'
import * as z from 'zod'

const { data } = await useFetch(`http://api.link.natee.my.id/api/links`)

const formSchema = toTypedSchema(z.object({
  short_url: z.string().min(2, 'Short link must be at least 2 characters').max(150).nonempty(),
  original_url: z.string().url('Must be a valid URL').max(150).nonempty(),
}))

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  const res = await $fetch(`http://api.link.natee.my.id/api/links`, {
    method: 'POST',
    body: {
      short_url: values.short_url,
      original_url: values.original_url,
    },
  })
})
</script>

<template>
  <LayoutsBaseLayout>
    <form @submit="onSubmit" class="space-y-6">
      <FormField v-slot="{ componentField }" name="short_url" :validate-on-blur="!isFieldDirty">
        <FormItem>
          <FormLabel>Short Link</FormLabel>
          <FormControl>
            <Input type="text" placeholder="https://link.natee.my.id/(your slug short link)" v-bind="componentField" />
          </FormControl>
          <FormDescription>
            The short link is the link that will be used to access the original link.
          </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="original_url" :validate-on-blur="!isFieldDirty">
        <FormItem>
          <FormLabel>Original Link</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Enter the original link" v-bind="componentField" />
          </FormControl>
          <FormDescription>
            The original link is the link that you want to shorten.
          </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit">
        Submit
      </Button>
    </form>
  </LayoutsBaseLayout>
</template>