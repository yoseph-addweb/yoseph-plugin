<template>
  <nav class="flex shadow-lg bg-white p-6">
    <div class="flex flex-wrap items-center mr-6">
      <slot name="logo">
        <web-fab
          class="bg-transparent hover:bg-gray-50 fill-gray-800 hover:fill-gray-800 mt-1 shadow-none"
        >
          <template #icon
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              class="w-7 text-black"
            >
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
            </svg>
          </template>
        </web-fab>
      </slot>
      <slot name="title">
        <span class="font-semibold text-xl mt-1 uppercase ml-2">{{
          title
        }}</span>
      </slot>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>

    <div class="block flex-grow lg:flex lg:items-center">
      <div class="text-sm lg:flex-grow">
        <a
          v-for="(item, index) in items"
          :key="index"
          :href="item.link"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
        >
          {{ item["label"] }}
        </a>
      </div>

      <slot name="right-side"></slot>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import type { PropType } from "@vue/runtime-core";

interface Item {
  label: string;
  link: string;
}

defineProps({
  title: {
    type: String,
  },
  items: {
    type: Array as PropType<Item[]>,
    default: () => [
      { label: "Docs", link: "#Docs" },
      { label: "Examples", link: "#Examples" },
      { label: "Blog", link: "#Blog" },
    ],
  },
});
</script>
