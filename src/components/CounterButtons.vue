<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <button id="decrement" @click="count--">-</button>
  {{ count }}
  <button id="increment" @click="count++">+</button>
</template>

<style scoped lang="scss">
button {
  border: none;
  background: #42b983;
  padding: 0.5rem 2rem;
  margin: 0.5rem;

  &:active {
    background: #21704d;
  }
}
</style>
