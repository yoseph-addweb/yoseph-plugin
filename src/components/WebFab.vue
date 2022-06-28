<template>
  <button
    class="bg-gray-600 hover:bg-gray-700 hover:fill-white font-bold shadow-lg rounded-full fill-white p-2"
    style="min-height: 40px; min-width: 40px"
  >
    <span class="items-center"> <slot name="icon"></slot></span>
    <slot />
  </button>
</template>
