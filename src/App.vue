<script setup>
import { RouterLink, RouterView } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
</script>

<template>
  <div class="m-0 h-full flex flex-col justify-center items-center">
    <div class="w-4/6 p-12 mt-8  flex flex-col justify-center items-center border-4">
      <router-link
        class="mb-4 text-3xl text-center font-extrabold text-gray-900 dark:text-yellow-700 md:text-5xl lg:text-6xl"
        to="/"
      >
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r to-red-500 from-sky-400"
          >Pokemon Picker</span
        >
      </router-link>
      <p
        class="mt-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
      >
        This is a pokemon wiki for pokemon lovers, in it you can see your
        favorite pokemons and add them to a list to see them whenever you want.
      </p>
    </div>
    <router-view  class="mb-0 p-0 w-4/6"/>
  </div>
</template>

<style scoped></style>
