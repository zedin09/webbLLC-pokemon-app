<template>
  <div v-for="(pokemon, index) in lista" :key="index">
    <p>pokemon.name</p>
  </div>
</template>

<script>
import { usePokemonStore } from "../stores/counter.js";
import { storeToRefs } from "pinia/dist/pinia";
import { reactive } from "vue";

export default {
  name: "PokemonList",
  setup() {
    const main = usePokemonStore();
    const { favoritePokemons } = storeToRefs(main);
    const state = reactive({
      pokemon: null,
      main: main,
      lista: favoritePokemons,
    });
  },
};
</script>

<style scoped></style>
