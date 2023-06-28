<template>
  <div class="mt-16 w-full max-w-7xl px-2">
    <div name="content" class="mx-auto flex flex-col items-center">
      <h1>{{ Txts[router.currentRoute.value.params.view][language].title }}</h1>
      <p class="mt-8 max-w-2xl">
        {{ Txts[router.currentRoute.value.params.view][language].subTitle }}
      </p>
    </div>
    <TabGroup as="div" class="mx-auto mt-8 flex flex-col-reverse">
      <!-- Image selector -->
      <div class="mx-auto mt-6 w-full max-w-2xl lg:max-w-none">
        <TabList class="grid grid-cols-3 gap-6 sm:grid-cols-6">
          <Tab
            v-for="image in Txts[router.currentRoute.value.params.view][
              language
            ].images"
            :key="image.id"
            class="relative flex h-32 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            v-slot="{ selected }"
          >
            <span class="sr-only">{{ image.name }}</span>
            <span class="absolute inset-0 overflow-hidden rounded-md">
              <img
                :src="image.src"
                alt=""
                class="h-full w-full object-cover object-center"
              />
            </span>
            <span
              :class="[
                selected ? 'ring-indigo-500' : 'ring-transparent',
                'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
              ]"
              aria-hidden="true"
            />
          </Tab>
        </TabList>
      </div>
      <div name="info" class="mx-auto flex flex-col items-center">
        <p class="mt-8 max-w-2xl">
          {{ Txts[router.currentRoute.value.params.view][language].info }}
        </p>
      </div>
      <TabPanels class="aspect-video mx-auto w-full max-w-xl">
        <TabPanel
          v-for="image in Txts[router.currentRoute.value.params.view][language]
            .images"
          :key="image.id"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="h-full w-full object-cover object-center sm:rounded-lg"
          />
        </TabPanel>
      </TabPanels>
    </TabGroup>
    <div name="desc" class="mx-auto flex flex-col items-center">
      <p
        v-for="item in Txts[router.currentRoute.value.params.view][language]
          .desc"
        class="mt-8 max-w-2xl"
      >
        <span class="text-Neutral">{{ item.span }}</span>
        {{ item.txt }}
      </p>
    </div>
    <Contact></Contact>
  </div>
</template>

<script setup>
import router from "@router";
import { ref, onMounted, watch } from "vue";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import Contact from "./Contact.vue";
import Txts from "./servicesPages/importsTxt.js";

const view = ref(Array);
const language = ref("fr");

watch(
  () => router.currentRoute.value.params.view,
  () => {
    view.value = router.currentRoute.value.params.view;
  },
);
onMounted(async () => {
  view.value = router.currentRoute.value.params.view;
  console.log(Txts[view.value][language.value]);
});
</script>

<style lang="scss" scoped></style>
