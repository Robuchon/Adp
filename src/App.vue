<template>
  <div class="flex min-h-screen flex-col justify-between">
    <NavbarTarget
      target="VitrineNavbar"
      :navigation="navigation"
    ></NavbarTarget>
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
  {
    name: "Services",
    goto: "/services",
    dataNav: [
      { name: "Covering", goto: "Services", param: "covering" },
      { name: "Adhesif", goto: "Services", param: "adhesif" },
      { name: "Transfert", goto: "Services", param: "transfert" },
      { name: "ect", goto: "Services", param: "ect" },
    ],
  },
  { name: "Contact", goto: "/Contact" },
]);
</script>
