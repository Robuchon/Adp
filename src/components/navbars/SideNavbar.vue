<template>
  <!-- drawer init and show -->
  <div class="max-w-xs px-5 pt-2">
    <div
      class="relative mb-2 mr-2 inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-Secondary to-Primary p-0.5 text-sm font-medium text-Accent hover:text-white focus:outline-none focus:ring-4 focus:ring-Info dark:text-white dark:focus:ring-Info"
      :class="
        open ? '' : 'group group-hover:from-Secondary group-hover:to-Primary'
      "
    >
      <button
        id="updateProductButton"
        class="relative flex h-10 w-full items-center justify-center rounded-md text-center transition-all duration-75 ease-in"
        :class="
          open
            ? 'bg-opacity-0'
            : 'bg-white group-hover:bg-opacity-0 dark:bg-Accent'
        "
        type="button"
        @click="open === true ? (open = false) : (open = true)"
      >
        Navigation
      </button>
    </div>
  </div>

  <!-- drawer component -->
  <div
    id="drawer-update-product-default"
    class="fixed top-0 left-0 z-40 h-screen w-full max-w-xs overflow-y-auto bg-white p-4 transition-transform dark:bg-Accent border-r-2 border-Secondary"
    :class="open !== true ? '-translate-x-full' : ''"
  >
    <h5
      id="drawer-label"
      class="mb-6 inline-flex items-center text-sm font-semibold uppercase text-Primary"
    >
      Navigation
    </h5>
    <button
      type="button"
      data-drawer-dismiss="drawer-update-product-default"
      aria-controls="drawer-update-product-default"
      class="absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-Accent dark:hover:bg-gray-600 dark:hover:text-white"
      @click="open = false"
    >
      <svg
        aria-hidden="true"
        class="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Close menu</span>
    </button>
    <div class="flex flex-col">
      <div
        v-for="item in navigation"
        class="relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-Secondary to-Primary p-0.5 text-sm font-medium text-Accent hover:text-white focus:outline-none focus:ring-4 focus:ring-Info dark:text-white dark:focus:ring-Info"
        :class="
          item.goto === router.currentRoute.value.path
            ? ''
            : 'group group-hover:from-Secondary group-hover:to-Primary'
        "
      >
        <router-link
          :to="item.goto"
          class="relative flex h-10 w-full items-center justify-center rounded-md text-center transition-all duration-75 ease-in"
          :class="
            item.goto === router.currentRoute.value.path
              ? 'bg-opacity-0'
              : 'bg-white group-hover:bg-opacity-0 dark:bg-Accent'
          "
          @click="open = false"
          >{{ item.name }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "@router";

const props = defineProps(["navigation"]);

const open = ref(false);


</script>
