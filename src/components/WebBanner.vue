<template>
  <div :class="[bgColor]" class="p-6 w-9/12 mb-6 bg-brand-blue rounded">
    <div class="relative bg-white flex items-center rounded overflow-hidden">
      <img class="absolute bottom-0 left-0 h-12 -mb-4" :src="alt_img" />
      <div
        class="absolute top-0 left-0 right-0 h-12 -mt-4 flex justify-end lg:justify-center"
      >
        <img class="h-12" :src="alt_img" />
      </div>
      <div class="px-8 py-12 w-full">
        <div class="max-w-md text-sm mb-4 mx-auto">
          <h2 class="font-semibold text-xl mb-4">
            {{ title }}
          </h2>

          <p class="mb-4 text-secondary text-sm">
            {{ description }}
            <slot class="text"></slot>
          </p>
          <p class="mb-4 text-secondary text-sm">
            <slot class="text">
              <a
                class="underline hover:no-underline font-semibold hover:cursor-pointer"
                ><strong>Contact us!</strong></a
              >
            </slot>
          </p>
        </div>
      </div>
      <div class="hidden lg:block p-8 flex-shrink-0 ml-auto">
        <a class="relative group block w-64 h-64 text-center">
          <img class="absolute inset-0 ml-auto" :src="img" alt="" />
          <img class="relative inline-block mx-auto h-8 mt-5" :src="alt_img" />
          <div>
            <span
              class="relative inline-block mx-auto mt-4 py-2 px-3 bg-brand-blue-mid group-hover:bg-brand-blue-darker text-white text-xs font-semibold rounded"
            >
              <slot name="img-text">Try Shuffle Editor for Free</slot>
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
  img: {
    type: String,
    default:
      "https://shuffle.dev/vendor/shuffle/img/components/shuffle-editor.png",
  },
  alt_img: {
    type: String,
    default: "https://shuffle.dev/vendor/shuffle/img/elements/dots-red.svg",
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  color: {
    type: String,
  },
});

let bgColor = computed(() => {
  if (props.color) {
    return `bg-${props.color}-500`;
  }
});
</script>
