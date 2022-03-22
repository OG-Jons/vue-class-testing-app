<template>
  <h1>Pokedex thing</h1>
  <form @submit.prevent="search">
    <!--    Input field and submit button -->
    <input v-model="searchTerm" type="text" placeholder="Search for a Pokemon" />
    <button type="submit">Search</button>
  </form>
  <p v-if="searching">searching...</p>
  <div v-if="searchResult.pokemon && !searching">
    <p>{{ capitalized }}</p>
    <img :src="searchResult.pokemon.sprites.front_default" alt="Pokemon" />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { AxiosError, AxiosResponse } from "axios";
import axios from "axios";

const searchTerm = ref("");
const searching = ref(false);

const searchResult = reactive({
  pokemon: undefined as { name: string; sprites: { front_default: string } } | undefined,
});

const search = async () => {
  searching.value = true;
  await axios
    ?.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.value.toLowerCase()}`)
    .then((response: AxiosResponse) => {
      searchResult.pokemon = response.data;
      searching.value = false;
    })
    .catch((e: AxiosError) => {
      searching.value = false;
      if (e.response?.status === 404) {
        searchResult.pokemon = {
          name: "Pokemon not found",
          sprites: {
            front_default: "https://via.placeholder.com/150",
          },
        };
      }
    });
};

const capitalized = computed(
  () => `${searchResult.pokemon?.name.charAt(0).toUpperCase()}${searchResult.pokemon?.name.slice(1)}`,
);
</script>
