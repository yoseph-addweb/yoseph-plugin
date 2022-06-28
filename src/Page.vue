<template>
  <div class="relative">
    <web-app-bar>
      <template #logo>
        <img
          src="https://www.addwebsolution.com/sites/default/files/Addweb-Solution.gif"
          class="h-12"
      /></template>
      <template #right-side>
        <web-button class="bg-blue-500 text-white rounded-full uppercase"
          >Contact us</web-button
        >
      </template>
    </web-app-bar>

    <web-banner
      title="Addweb solution"
      description="We serve all our clients even-handedly, irrespective of the size of their business, project or industry type. No wonder our portfolio today is wealthy enough to be boasted!."
      class="border-b"
      img="https://www.addwebsolution.com/sites/default/files/2022-04/Offshore-Development%20webp%20web.webp"
      alt_img="https://shuffle.dev/vendor/shuffle/img/elements/dots-red.svg"
    >
      <template #action>
        <a
          class="underline hover:no-underline font-semibold hover:cursor-pointer"
          ><strong>Contact us!</strong></a
        >
      </template>
    </web-banner>

    <div class="flex flex-wrap px-12">
      <web-card
        class="w-4/12"
        v-for="work in ourWorks"
        :key="work"
        :img="work.img"
      >
        <template #subtitle>
          <svg
            class="fill-current text-gray-500 w-3 h-3 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
            />
          </svg>
          {{ work.sub_title }}
        </template>
        <template #title> {{ work.title }} </template>
        <template #description> {{ work.description }} </template>
      </web-card>
    </div>

    <div class="w-8/12 mx-auto py-5 mt-5">
      <web-alert-message color="yellow" title="Addweb solution">
        Provided to you by addwebsolution.com -web-alert-message-
      </web-alert-message>
    </div>

    <web-fab class="bg-green-700 absolute -bottom-20 right-4">
      <template v-slot:icon
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
          <path
            d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
          />
        </svg>
      </template>
    </web-fab>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "@vue/reactivity";

const ourWorks = reactive([
  {
    title: "Marketing",
    sub_title: "Digital Marketing",
    img: "https://www.addwebsolution.com/sites/default/files/2021-12/Digital-Marketing.svg",
    description: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.`,
  },
  {
    title: "Consulting",
    sub_title: "Cloud Consulting",
    img: "https://www.addwebsolution.com/sites/default/files/2021-12/Blockchain-Development.svg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.`,
  },
  {
    title: "Startup",
    sub_title: "Startup solution",
    img: "https://www.addwebsolution.com/sites/default/files/2022-02/Startup%20Solution%20Menu%20Icon.svg",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.`,
  },
]);
</script>
