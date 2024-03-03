<template>
  <AppHeader />
    <main class="container">
      <slot />
    </main>
  <AppFooter />
</template>

<script setup lang="ts">
import { AppHeader, AppFooter } from '@/widgets'
</script>