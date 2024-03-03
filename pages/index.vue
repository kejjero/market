<template>
  <h1 class="red">Hello {{ counter.count }}!</h1>
  <button @click="counter.increment()">+</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<style>
.red {
  color: red;
}
</style>