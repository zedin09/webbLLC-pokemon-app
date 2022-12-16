<template>
  <div class="bg-neutral-100 flex justify-center flex-col items-center">
    <div
      class="bg-gradient-to-r from-neutral-300 to-neutral-200 m-8 shadow-2xl flex justify-center flex-col items-center"
      v-if="pokemon"
    >
      <div class="p-4 flex justify-center flex-col items-center">
        <h3 class="text-3xl font-bold text-neutral-600 uppercase">
          {{ pokemon.name }}
        </h3>
        <div class="flex justify-center">
          <img class="w-48" :src="pokemon.sprites.front_shiny" alt="" />
          <img class="w-48" :src="pokemon.sprites.back_shiny" alt="" />
        </div>
        <h3 class="text-blue-500 font-bold">Types</h3>
        <div v-for="(type, index) in pokemon.types" key="index">
          <h5 class="text-neutral-500">
            {{ type.type.name }}
          </h5>
        </div>
        <basic-button
          @click="list.push({name:pokemon.name, img: pokemon.sprites.front_shiny})"
          text="Add to favorites"
        />
        <!--Componente reusable-->
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { reactive, toRefs } from "vue";
import { storeToRefs } from "pinia";
import BasicButton from "../components/base/BasicButton.vue";
import { usePokemonStore } from "../stores/counter.js";

export default {
  name: "About",
  components: {
    BasicButton,
  },
  setup() {
    const main = usePokemonStore();
    const { favoritePokemons } = storeToRefs(main);
    const route = useRoute();
    const state = reactive({
      pokemon: null,
      main: main,
      list: favoritePokemons,
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
