<template>
  <div
    class="overflow-hidden rounded-lg shadow-lg ring-1 ring-Primary ring-opacity-5"
  >
    <div class="mx-auto flex flex-col bg-white w-28 z-20">
      <div>
        <div class="grid">
          <div
            v-for="item in dataNav"
            :key="item.name"
            class="m-3 flex items-center text-center cursor-pointer"
            @click="goTo(item)"
          >
            <p class="mx-auto hover:text-Neutral">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@router";
const props = defineProps(["dataNav"]);
const emit = defineEmits(["action"]);

function goTo(value) {
  emit("action");
  router.push({
    name: value.goto,
    params: { view: value.param },
  });
}
</script>

<style lang="scss" scoped></style>
