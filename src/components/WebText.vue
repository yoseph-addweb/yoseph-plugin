<template>
  <div class="relative">
    <div
      class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
    >
      <slot name="icon"></slot>
    </div>
    <input
      type="search"
      id="default-search"
      class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-lg py-6"
      :placeholder="placeholder"
    />
    <div class="absolute right-2.5 top-4">
      <slot name="btn"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
  color: {
    type: String,
  },
  placeholder: {
    type: String,
  },
});

let bgColor = computed(() => {
  if (props.color) {
    return `bg-${props.color}-700`;
  }
});

let textColor = computed(() => {
  if (props.color) {
    return `text-${props.color}-100 fill-${props.color}-100`;
  }
});

let borderColor = computed(() => {
  if (props.color) {
    return `border-${props.color}-700`;
  }
});
</script>
