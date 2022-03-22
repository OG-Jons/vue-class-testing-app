<script setup lang="ts">
import CounterButtons from "./components/CounterButtons.vue";
import Pokedex from "./components/Pokedex.vue";
</script>

<template id="app">
  <CounterButtons />
  <Pokedex />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
