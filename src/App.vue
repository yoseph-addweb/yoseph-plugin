<template>
  <div class="bg-gray-200 pt-16 min-h-screen bg-dark">
    <div class="w-9/12 mx-auto">
      <h4 class="uppercase text-4xl font-bold">Web Ui documentation</h4>
      <p>
        Web UI library provides you a set of ready-made UI components like
        buttons, inputs, dialogs, etc.
      </p>
      <h2 class="text-lg mt-2 font-bold">Installation</h2>
      <p class="">To install the package, run the following command:</p>
      <img class="ml-24" src="/install.png" alt="" />

      <p class="">
        Import web ui package in your
        <span class="font-bold">'./src/main.ts' file</span>:
      </p>
      <img class="ml-24" src="/import.png" alt="" />
    </div>
    <div
      class="w-9/12 mx-auto bg-gray-100 shadow-lg mt-3"
      style="background-color: #fafafa"
    >
      <div class="p-5">
        <h3 class="font-bold uppercase text-2xl">Buttons</h3>
        <hr class="w-7/12" />
        <div class="p-5 pb-2 space-x-5">
          <!-- //Web Flat button -->
          <web-button> Flat btn </web-button>

          <!-- //Web button with background -->
          <web-button class="rounded-lg bg-pink-700">Rounded</web-button>

          <!-- //Web Rounded button -->
          <web-button class="rounded-full bg-blue-600">Rounded</web-button>

          <!-- //Web floating action button -->
          <web-fab class="bg-green-700">
            <template v-slot:icon>
              <svg
                class="w-3 mx-auto fill-white mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
                />
              </svg>
            </template>
          </web-fab>

          <web-fab class="w-12 h-12 bg-red-700">
            <svg
              class="w-3 mx-auto fill-white mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
              />
            </svg>
          </web-fab>

          <web-fab class="w-16 h-16 bg-purple-700">
            <svg
              class="w-4 mx-auto fill-white mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
              />
            </svg>
          </web-fab>

          <web-fab class="w-10 h-10 bg-transparent fill-black px-3">
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
              />
            </svg>
          </web-fab>
        </div>

        <div>
          <img src="/btn_code.png" alt="" class="px-10" />
        </div>

        <h3 class="font-bold uppercase text-2xl mt-8">Alerts</h3>
        <hr class="w-7/12" />
        <div class="p-5 space-y-5 w-10/12">
          <web-alert badge="New">
            Provided to you by addwebsolution.com -web-alert-
          </web-alert>

          <web-alert class="bg-red-500">
            Provided to you by addwebsolution.com -web-alert-
          </web-alert>

          <web-alert class="bg-indigo-500 w-10/12">
            Provided to you by addwebsolution.com -web-alert-
          </web-alert>
        </div>

        <h5 class="pl-5 uppercase text-lg text-gray-500">Alert messages</h5>
        <hr class="w-7/12" />
        <div class="p-5 space-y-5 w-10/12">
          <web-alert-message color="green" title="Addweb solution">
            Provided to you by addwebsolution.com -web-alert-message-
          </web-alert-message>

          <web-alert-message color="orange" title="Addweb solution">
            Provided to you by addwebsolution.com -web-alert-message-
          </web-alert-message>

          <web-alert-message color="red" title="Addweb solution">
            Provided to you by addwebsolution.com -web-alert-message-
          </web-alert-message>
        </div>

        <h3 class="font-bold uppercase text-2xl">Avatars</h3>
        <hr class="w-7/12" />
        <div class="p-5 space-x-5 w-10/12 flex">
          <web-avatar
            color="indigo"
            url="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          >
          </web-avatar>

          <web-avatar
            color="indigo"
            class="pt-7"
            url="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          >
            YH
          </web-avatar>
        </div>

        <h3 class="font-bold uppercase text-2xl">Heroes</h3>
        <hr class="w-5/12" />
        <div class="p-5 space-x-5">
          <web-banner
            title="Addweb solution"
            description="
            Browse 2728 of ready-made components in Tailwind. They are divided into UI libraries that our professional designers designed. Each of them has a resource of many variations of different types of components. Under each of them, there is a clear code created by our team of developers."
            color=""
            class="shadow-lg"
            alt_img="https://shuffle.dev/vendor/shuffle/img/elements/dots-red.svg"
          >
          </web-banner>
        </div>

        <h3 class="font-bold uppercase text-2xl">List groups</h3>
        <hr class="w-5/12" />
        <div class="p-5 space-x-5">
<web-list-group :items="items" @select="selectedItem">
</web-list-group>
        </div>

        <h3 class="font-bold uppercase text-2xl">Dropdowns</h3>
        <hr class="w-5/12" />
        <div class="p-5 space-x-5">
          <web-dropdown :items="items" @select="selectedItem"> </web-dropdown>
        </div>

        <h3 class="font-bold uppercase text-2xl">App bar</h3>
        <hr class="w-5/12" />
        <div class="p-5 space-y-5">
          <web-app-bar title="Add-web" :items="menu_items">
            <template #right-side>
              <div>
                <web-button class="bg-teal-400">Downloads</web-button>
              </div>
            </template>
          </web-app-bar>

          <web-app-bar title="Add-web" class="bg-pink-400 text-white">
            <template #right-side>
              <div>
                <web-button class="bg-teal-400">Downloads</web-button>
              </div>
            </template>
          </web-app-bar>
        </div>

        <h3 class="font-bold uppercase text-2xl">Breadcrumb</h3>
        <hr class="w-5/12" />
        <div class="p-5 space-y-5">
<web-breadcrumb class="border p-3">
  <web-breadcrumb-item
    label="Home"
    :first="true"
  ></web-breadcrumb-item>
  <web-breadcrumb-item label="About"></web-breadcrumb-item>
</web-breadcrumb>
        </div>

        <h3 class="font-bold uppercase text-2xl">Card</h3>
        <hr class="w-5/12" />
        <div class="p-5 space-y-5">
          <web-card>
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
              Members only
            </template>
            <template #title>
              Can coffee make you a better developer?
            </template>
            <template #description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </template>
          </web-card>
        </div>

        <h3 class="font-bold uppercase text-2xl">Pagination</h3>
        <hr class="w-5/12" />
        <div class="p-5 space-y-5">
          <span
            ><b class="uppercase">Selected page: </b>
            <b class="text-lg">{{ pagination.page }}</b></span
          >
          <web-pagination
            class="border p-3"
            :pagination="pagination"
          ></web-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";

const items = reactive([
  { label: "Item 1" },
  { label: "Item 2" },
  { label: "Item 3" },
  { label: "Item 4" },
  { label: "Item 5" },
  { label: "Item 6" },
]);

let pagination = reactive({
  total_items: 100,
  pages: 7,
  page: 1,
  items: 10,
  next_page: 2,
  previous_page: null,
});

const menu_items = reactive([
  { label: "Documents", link: "#Docs" },
  { label: "Examples", link: "#Examples" },
  { label: "Blog", link: "#Blog" },
]);

function selectedItem(item: { label: string }) {
  console.log(item);
}
</script>
