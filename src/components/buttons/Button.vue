<template>
  <div>
    <button v-if="data.disabled" class="loading btn"></button>
    <button v-else class="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>
