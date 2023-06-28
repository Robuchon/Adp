<template>
  <div>
    <component
      :is="data.target"
      :data="data"
      :error="error"
      :value="modelValue"
      @action="$emit('update:modelValue', $event)"
    ></component>
  </div>
</template>

<script>
import * as input from "@components/inputs/inputsImports";

export default {
  components: {
    ...input,
  },
  props: ["data", "error", "modelValue"],
};
</script>
