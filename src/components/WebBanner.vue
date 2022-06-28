<template>
  <div :class="[bgColor]" class="pb-6 w-full mb-6 bg-brand-blue rounded banner">
    <div
      class="w-9/12 mx-auto relative bg-white flex items-center rounded overflow-hidden"
      style="height: 450px"
    >
      <img class="absolute bottom-0 left-0 h-12 -mb-4" :src="alt_img" />
      <div
        class="absolute top-0 left-0 right-0 -mt-4 flex justify-end lg:justify-center"
      >
        <img class="h-12" :src="alt_img" />
      </div>
      <div class="py-24 w-full z-10">
        <div class="max-w-2xl text-sm mb-4 pl-24">
          <h2 class="font-semibold text-xl mb-4">
            {{ title }}
          </h2>

          <p class="mb-4 text-secondary text-sm">
            {{ description }}
            <slot class="text"></slot>
          </p>
          <p class="mb-4 text-secondary text-sm">
            <slot class="text" name="action"> </slot>
          </p>
        </div>
      </div>
      <div class="absolute text-right right-0 z-0">
        <img class="w-9/12 float-right" :src="img" alt="" />
        <img class="absolute right-0 bottom-20 h-16 mt-5" :src="alt_img" />
        <div>
          <span
            class="relative inline-block mx-auto mt-4 py-2 px-3 bg-brand-blue-mid group-hover:bg-brand-blue-darker text-white text-xs font-semibold rounded"
          >
            <slot name="img-text">Image slogan goes here</slot>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
  img: {
    type: String,
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
