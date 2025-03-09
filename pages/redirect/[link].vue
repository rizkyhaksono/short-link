<script lang="ts" setup>

import { useRouter } from 'vue-router'
const router = useRouter()

const link = router.currentRoute.value.params.link
console.log(link)

</script>

<template>
  <div>
    <h1>Redirecting to: {{ link }}</h1>
  </div>
</template>