<template>
  <div class="flex justify-center flex-col items-center">
    <div class="flex justify-center">
      <input
          type="text"
          placeholder="Enter a Pokemon here"
          class="mt-10 p-2 border-blue-500 border-2"
          v-model="text"
      />
    </div>
    <div class="flex justify-center">
      <router-link
          class="mb-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          :to="{name: 'Favorites'}"
      >Favorites</router-link
      >
    </div>
    <div class="w-4/6 mt-10 p-4 flex flex-wrap justify-center">
      <div
          class="ml-4 text-2x text-blue-500"
          v-for="(pokemon, index) in filteredPokemonList"
          :key="index"
      >
        <router-link :to="`/about/${urlIdLookup[pokemon.name]}`">
          {{ pokemon.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, toRefs, computed } from "vue";
import Favorites from "./Favorites.vue";

export default {
  name: "Home",
  components: {
    Favorites,
  },

  setup() {
    // reactive mantiene sincronía entre state y las zonas donde se referencie
    const state = reactive({
      pokemons: [],
      urlIdLookup: {},
      text: "",
      filteredPokemonList: computed(() =>
        updatePokemon()
      ) /*atributo que se recalcula en caso de ser necesario*/,
    });

    /*La función filtra al pokemon en función de su nombre de acuerdo a los datos
    ingresados en el input*/
    function updatePokemon() {
      if (!state.text) {
        return [];
      }
      return state.pokemons.filter((pokemon) =>
        pokemon.name.includes(state.text.toLocaleLowerCase())
      );
    }

    // Petición con método get a la url con unos pocos parámetros en la url
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0") // devuelve una promesa
      .then((res) => res.json()) // nuevamente devuelve una promesa
      .then((data) => {
        // devuelve finalmente los datos solicitados
        state.pokemons = data.results;
        state.urlIdLookup = data.results.reduce(
          // Añade a cada pokemon un atributo pokemon.name(key): index+1(value)
          (acc, curr, indx) => (acc = { ...acc, [curr.name]: indx + 1 }),
          {}
        );
      });
    return { ...toRefs(state) }; // desestructura state sin dañar la referencia reactiva
  },
};
</script>

<style scoped></style>
