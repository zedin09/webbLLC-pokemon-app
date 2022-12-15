<script setup>
import { RouterLink, RouterView } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
</script>

<template>
  <div class="p-14">
    <router-link class="flex justify-center text-4xl text-yellow-700" to="/">Pokemon Picker</router-link>
  </div>
  <router-view />
</template>

<style scoped></style>
