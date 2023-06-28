<template>
  <div>
    <component
      :is="target"
      :navigation="navigation"
    ></component>
  </div>
</template>

<script>
import * as navbar from "@components/navbars/navbarImports";

export default {
  components: {
    ...navbar,
  },
  props: ["target", "navigation"],
};
</script>
