<template>
  <div>
    <component
      :is="data.target"
      :data="data"
      @click="$emit('action')"
    >
      <span v-if="data.icon === 'all' || data.icon === 'left'">
        <slot></slot>
      </span>
      {{ data.text }}
      <span v-if="data.icon === 'all' || data.icon === 'right'">
        <slot></slot>
      </span>
    </component>
  </div>
</template>

<script>
import * as button from "@components/buttons/buttonsImports";

export default {
  components: {
    ...button,
  },
  props: ["data", "error", "modelValue"],
};
</script>
