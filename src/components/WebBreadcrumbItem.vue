<template>
  <li class="inline-flex items-center">
    <span class="mt-1" v-if="!first"
      ><slot name="divider">
        <span class="text-gray-400 mr-2">/</span>
      </slot></span
    >
    <a
      href="#"
      class="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    >
      <slot name="icon"></slot>
      {{ label }}
    </a>
  </li>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  first: {
    type: Boolean,
    default: false,
  },
});
</script>
