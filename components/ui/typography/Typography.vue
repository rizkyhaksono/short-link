<script setup>
import { computed, defineProps } from "vue";
import clsx from "clsx";

const props = defineProps({
  variant: {
    type: String,
    default: "h1",
  },
  affects: {
    type: String,
    default: "default",
  },
  class: {
    type: String,
    default: "",
  },
});

const typographyVariants = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  inline: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
};

const affectsVariants = {
  default: "",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
  removePMargin: "[&:not(:first-child)]:mt-0",
};

const computedClasses = computed(() =>
  clsx(typographyVariants[props.variant], affectsVariants[props.affects], props.class)
);
</script>

<template>
  <component :is="variant" :class="computedClasses">
    <slot />
  </component>
</template>

<script>
export default {
  name: "Typography",
};
</script>