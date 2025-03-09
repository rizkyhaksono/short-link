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

import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  short_url: z.string().min(2, 'Short link must be at least 2 characters').max(150).nonempty(),
  original_url: z.string().url('Must be a valid URL').max(150).nonempty(),
}))

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>

<template>
  <LayoutsBaseLayout>
    <form @submit="onSubmit" class="space-y-6">
      <FormField v-slot="{ componentField }" name="short_url" :validate-on-blur="!isFieldDirty">
        <FormItem>
          <FormLabel>Short Link</FormLabel>
          <FormControl>
            <Input type="text" placeholder="https://link.natee.me/(your slug short link)" v-bind="componentField" />
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