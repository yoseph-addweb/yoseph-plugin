<template>
  <nav class="flex shadow border-b bg-white p-6">
    <div class="flex flex-wrap items-center mr-6">
      <slot name="logo">
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

    <div class="ml-auto text-right block flex-grow lg:flex lg:items-center">
      <div class="text-sm lg:flex-grow">
        <a
          v-for="(item, index) in items"
          :key="index"
          :href="item.link"
          class="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:underline"
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
