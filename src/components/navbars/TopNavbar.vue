<template>
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-Secondary" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link
                  class=" no-underline"
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.goto"
                  :class="[
                    item.goto === router.currentRoute.value.path
                      ? 'bg-Accent text-white'
                      : 'text-Primary hover:bg-Secondary hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  ]"
                  :aria-current="
                    item.goto === router.currentRoute.value.path
                      ? 'page'
                      : undefined
                  "
                  >{{ item.name }}</router-link
                >
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="inline-flex items-center justify-center rounded-md bg-Accent p-2 text-Primary hover:bg-Secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-Accent"
            >
              <span class="sr-only">Open main menu</span>
              <Bars3Icon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.goto === router.currentRoute.value.path
                ? 'bg-Accent text-white'
                : 'text-Primary hover:bg-Secondary hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
            :aria-current="
              item.goto === router.currentRoute.value.path ? 'page' : undefined
            "
            @click="goTo(item.goto)"
            >{{ item.name }}</DisclosureButton
          >
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import router from "@router";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps(["navigation"]);

function goTo(value) {
  router.push({
    path: value
  });
}
</script>
