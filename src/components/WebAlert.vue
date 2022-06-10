<template>
  <div
    class="pl-2 bg-indigo-800 items-center text-indigo-100 shadow-lg rounded-full flex overflow-hidden"
  >
    <span
      v-if="badge"
      class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
      >New</span
    >
    <span class="font-semibold mr-2 text-left flex-auto"><slot></slot> </span>
    <div class="hover:bg-gray-100 hover:text-gray-800 hover:cursor-pointer p-2">
      <slot name="right-icon">
        <svg
          class="fill-current opacity-75 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
          />
        </svg>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  badge: {
    type: String,
  },
});
</script>
