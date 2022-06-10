<template>
  <div
    :class="[bgColor, textColor, borderColor]"
    class="w-20 h-20 p-1 rounded-full ring-2 font-bold text-center text-2xl"
  >
    <slot>
      <img
        class="ring-gray-300 rounded-full dark:ring-gray-500"
        :src="url"
        alt="Bordered avatar"
      />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
  url: {
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
