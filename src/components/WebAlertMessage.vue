<template>
  <div
    :class="[bgColor, textColor, borderColor]"
    class="border-l-4 p-4"
    role="alert"
  >
    <p class="font-bold" v-if="title">{{ title }}</p>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
  title: {
    type: String,
  },
  color: {
    type: String,
  },
});

let bgColor = computed(() => {
  if (props.color) {
    return `bg-${props.color}-100`;
  }
});

let textColor = computed(() => {
  if (props.color) {
    return `text-${props.color}-700`;
  }
});

let borderColor = computed(() => {
  if (props.color) {
    return `border-${props.color}-700`;
  }
});
</script>
