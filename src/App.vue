<template>
  <div class="flex min-h-screen flex-col justify-between">
    <NavbarTarget target="VitrineNavbar" :navigation="navigation"></NavbarTarget>
    <RouterView class="mx-auto"></RouterView>
    <Footer></Footer>
  </div>
</template>

<script setup>
import NavbarTarget from "@components/NavbarTarget.vue";
import { ref } from "vue";
import Footer from "./components/Footer.vue";

const navigation = ref([
  { name: "Home", goto: "/home" },
  { name: "Services", goto: "/services" },
  { name: "Contact", goto: "/Contact" },
]);
</script>
