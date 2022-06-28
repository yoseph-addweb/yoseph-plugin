<template>
  <div class="max-w-sm w-full lg:max-w-full lg:flex shadow-lg px-1">
    <img
      :src="img"
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-t border-b border-l border-gray-400"
    />
    <div
      class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <p class="text-sm text-gray-600 flex items-center">
          <slot name="subtitle"></slot>
        </p>
        <div class="text-gray-900 font-bold text-xl mb-2">
          <slot name="title"></slot>
        </div>
        <p class="text-gray-700 text-base">
          <slot name="description"></slot>
        </p>
        <div>
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
  color: {
    type: String,
  },
  img: {
    type: String,
  },
});

let bgColor = computed(() => {
  if (props.color) {
    return `bg-${props.color}-700`;
  }
});

let textBtn = computed(() => {
  if (props.text) {
    return `bg-white text-${props.color}-600 hover:bg-${props.color}-200 shadow-none`;
  }
});

let hoverClassesComputed = computed(() => {
  if (props.hoverClasses) return props.hoverClasses;
  return `hover:bg-${props.color}-500`;
});

let outlinedClassesComputed = computed(() => {
  if (props.hoverClasses) return props.hoverClasses;
  return `hover:bg-${props.color}-500`;
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
