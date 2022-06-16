<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
  >
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{
            (pagination?.items || 1) * (pagination?.page || 1)
          }}</span>
          to
          <span class="font-medium">{{
            (pagination?.items || 1) * (pagination?.page || 1) +
            (pagination?.items || 1)
          }}</span>
          of
          <span class="font-medium">{{ pagination?.total_items || 1 }}</span>
          results
        </p>
      </div>
      <div>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            @click="previous()"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            v-for="page in left_side"
            :key="page"
            @click="pagination.page = page"
            :class="{ 'bg-blue-200': pagination?.page == page }"
            class="bg-white cursor-pointer border-gray-300 text-gray-500 hover:bg-BLUE-200 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
          >
            {{ page }}
          </button>
          <span
            v-if="separator"
            class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
          >
            ...
          </span>
          <button
            v-for="page in right_side"
            :key="page"
            @click="pagination.page = page"
            :class="{ 'bg-blue-200': pagination?.page == page }"
            class="bg-white cursor-pointer border-gray-300 text-gray-500 hover:bg-blue-200 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
          >
            {{ page }}
          </button>
          <button
            href="#"
            @click="next()"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from "@vue/runtime-core";
import type { PropType } from "@vue/runtime-core";

interface Paginate {
  total_items: number;
  page: number;
  pages: number;
  next_page: number;
  items: number;
  previous_page: number;
}

const props = defineProps({
  pagination: {
    type: Object as PropType<Paginate>,
  },
});

let left_side = computed(() => {
  let counter = [];
  if ((props.pagination?.pages || 1) < 3) {
    return range(1, props.pagination?.pages || 1);
  }

  if ((props.pagination?.page || 1) <= 3) {
    return range(1, 3);
  }

  if ((props.pagination?.pages || 1) - (props.pagination?.page || 1) < 4) {
    counter = range(
      props.pagination?.page - 2 || 1,
      props.pagination?.pages || 1
    );
  } else {
    counter = range(
      props.pagination?.page || 1,
      (props.pagination?.page || 1) + 2
    );
  }
  counter.unshift(1);
  return counter;
});

let right_side = computed(() => {
  if ((props.pagination?.pages || 1) - (props.pagination?.page || 1) < 4)
    return;
  let counter = range(
    (props.pagination?.pages || 1) - 2,
    props.pagination?.pages || 1
  );
  return counter;
});

let separator = computed(() => {
  if ((props.pagination?.pages || 1) - (props.pagination?.page || 1) < 4) {
    return false;
  }
  return (props.pagination?.total_items || 1) > 6 ? true : false;
});

function range(start: number, end: number): Array<number> {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

function previous() {
  if(props.pagination?.page > 1) {
    props.pagination.page--;
  }
}

function next() {
  if(props.pagination.page < props.pagination.pages) {
    props.pagination.page++;
  }
}
</script>
