<template>
  <button
    :class="[
      bgColor,
      textColor,
      borderColor,
      textBtn,
      hoverClassesComputed,
      outlinedClassesComputed,
      { 'text-white': dark },
    ]"
    class="bg-gray-50 font-bold py-2 px-4 shadow-lg"
  >
    <div class="flex">
      <div class="-ml-1 mr-3 h-5 w-5" :class="[textColor]" v-if="icon">
        <slot name="icon"></slot>
      </div>
      <div v-if="loading" class="-ml-1 mr-3 h-5 w-5">
        <slot name="loading"
          ><svg
            class="animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </slot>
      </div>
      <slot />
    </div>
  </button>
</template>

<script lang="ts" setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
  color: {
    type: String,
  },
  hoverClasses: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
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
