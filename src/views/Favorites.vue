<template>
  <div class="bg-gray-300 mb-0 flex flex-col justify-center items-center">
    <div class="pt-5 w-2/3 text-center">
      <h2
          class="text-4xl mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r to-red-500 from-sky-400"
      >
        These are your favorites pokemons
      </h2>
    </div>
    <div class="w-full mt-10 grid grid-cols-3">
      <div
          class="m-5 text-center flex flex-col justify-center items-center rounded-full bg-gradient-to-r from-indigo-500 to-blue-400"
          v-for="(pokemon, index) in list"
          :key="index"
      >
        <p class="text-opacity-50 mt-2 pt-1 font-bold text-blue-100">{{ pokemon.name }}</p>
        <img class="w-6/3" :src="pokemon.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { storeToRefs } from "pinia";
import BasicButton from "../components/base/BasicButton.vue";
import { usePokemonStore } from "../stores/counter.js";
import { useRoute } from "vue-router/dist/vue-router";

export default {
  name: "Favorites",
  components: {
    BasicButton,
  },
  setup() {
    const main = usePokemonStore();
    const { favoritePokemons } = storeToRefs(main);
    const route = useRoute();
    const state = reactive({
      main: main,
      list: favoritePokemons,
    });
    return { ...toRefs(state) };
  },
};
</script>
<style scoped></style>
