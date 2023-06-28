<template>
    <div class="flex flex-col justify-between p-2">
      <label
        class="text-base flex justify-between items-center font-normal text-Neutral"
        :for="data.name"
      >
        {{ data.label }}
        <span class="text-Error text-sm ml-2 font-normal" id="email-error">{{
          !error ? "" : error.message
        }}</span>
      </label>
  
      <input
        :id="data.name"
        :value="value"
        :placeholder="data.placeholder"
        @input="emit('action', $event.target.value)"
        class="rounded-xl text-base block w-full border-0 bg-Primary py-3 px-6 font-normal leading-none text-Accent file:border file:border-solid focus:ring-0"
      >
    </div>
  </template>
  
  <script setup>
  const props = defineProps(["data", "value", "error"]);
  const emit = defineEmits(["action"]);
  /** :data="inputExemple"
   * inputExemple: {
   *  label: "Exemple",
   *  name: "exemple",
   *  type: "text",
   *  value: "",
   * },
   */
  /** v-model="inputExemple.value"
   * ce qui va etre submit
   */
  /** :error="errors[exemple]"
   * retour de l'erreur
   */
  </script>
  