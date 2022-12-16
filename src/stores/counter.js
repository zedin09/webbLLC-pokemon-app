import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePokemonStore = defineStore("counter", () => {
  const favoritePokemons = ref([]);
  return { favoritePokemons };
});
