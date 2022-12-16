<template>
  <div class="bg-neutral-100 flex justify-center flex-col items-center">
    <div
      class="w-3/12 bg-purple-100 m-8 shadow-2xl flex justify-center flex-col items-center"
      v-if="pokemon"
    >
      <div class="p-4 flex justify-center flex-col items-center">
        <h3 class="text-2xl text-green-900 uppercase">
          {{ pokemon.name }}
        </h3>
        <div class="flex justify-center">
          <img class="w-48" :src="pokemon.sprites.front_shiny" alt="" />
          <img class="w-48" :src="pokemon.sprites.back_shiny" alt="" />
        </div>
        <h3 class="text-yellow-400">Types</h3>
        <div v-for="(type, index) in pokemon.types" key="index">
          <h5 class="text-blue-900">
            {{ type.type.name }}
          </h5>
        </div>
        <h4>{{ list }}</h4>
        <basic-button @click="list.push(pokemon.name)" text="Add to favorites" />
        <!--Componente reusable-->
      </div>
      <pokemon-list />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { reactive, toRefs } from "vue";
import { storeToRefs } from "pinia";
import BasicButton from "../components/base/BasicButton.vue";
import PokemonList from "../components/PokemonList.vue";
import { usePokemonStore } from "../stores/counter.js";

export default {
  name: "About",
  components: {
    BasicButton,
    PokemonList,
  },
  setup() {
    const main = usePokemonStore();
    const { favoritePokemons } = storeToRefs(main);
    const route = useRoute();
    const state = reactive({
      pokemon: null,
      main: main,
      list: favoritePokemons
    });
    fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        /*          console.log(data)*/
        state.pokemon = data;
      });
    return { ...toRefs(state) };
  },
};
</script>

<style scoped></style>
