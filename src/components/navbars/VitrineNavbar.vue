<template>
  <Disclosure as="nav" class="z-30" v-slot="{ open }">
    <div
      class="px-8 pt-4 md:px-8 md:pt-10 lg:px-24 xl:mx-auto xl:w-[1200px] xl:px-0"
    >
      <div class="flex flex-1 items-center justify-between">
        <PopoverGroup
          as="nav"
          class="mx-auto flex justify-center space-x-2 lg:space-x-8 xl:basis-1/2"
        >
          <div v-for="item in navigation">
            <div v-if="item.dataNav === undefined" class="flex w-24">
              <router-link
                :to="item.goto"
                class="my-auto block w-full rounded-md px-3 py-2 text-center text-base font-medium"
                :class="
                  item.goto === router.currentRoute.value.path
                    ? 'text-Neutral'
                    : 'text-Primary hover:bg-Secondary hover:text-Neutral'
                "
              >
                {{ item.name }}
              </router-link>
            </div>
            <Popover
              v-else
              class="flex w-24"
              @mouseleave="opendropdown = false"
            >
              <PopoverButton @mouseover="opendropdown = true">
                <p
                  class="my-auto block w-full rounded-md px-3 py-2 text-center text-base font-medium hover:bg-Secondary"
                  :class="
                    'Services' === router.currentRoute.value.name
                      ? 'text-Neutral'
                      : 'text-Primary hover:text-Neutral'
                  "
                >
                  Services
                </p>
              </PopoverButton>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="translate-y-5 opacity-0"
                enter-to-class="opacity-100 translate-y-0 translate-x-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0 translate-x-0"
                leave-to-class="translate-y-5 opacity-0"
              >
                <PopoverPanel
                  v-if="opendropdown"
                  class="absolute z-20 mt-10 -ml-2"
                  static
                >
                  <DropDown
                    class=""
                    :dataNav="item.dataNav"
                    @action="opendropdown = false"
                  ></DropDown>
                </PopoverPanel>
              </transition>
            </Popover>
          </div>
        </PopoverGroup>
        <!-- Mobile menu button -->
      </div>
    </div>
    <!-- Mobile menu -->
  </Disclosure>
</template>

<script setup>
import { ref } from "vue";
import router from "@router";

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Disclosure,
} from "@headlessui/vue";
import DropDown from "./vitrineComponents/DropDown.vue";

const props = defineProps(["navigation"]);
const opendropdown = ref(false);
</script>

<style lang="scss" scoped></style>
