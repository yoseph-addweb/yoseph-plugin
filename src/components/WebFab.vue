<template>
  <button
    class="bg-gray-600 hover:bg-gray-700 hover:fill-white font-bold shadow-lg rounded-full fill-white p-1"
  >
    <span class="items-center"> <slot name="icon"></slot></span>
    <slot />
  </button>
</template>
