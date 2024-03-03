
<template>
  <header :class="$style.header">
    <div :class="['container', $style.wrapper]" >
      <AppLogo href="/" />
      <CatalogButton />
    </div>
  </header>
</template>

<script setup lang="ts">
import { AppLogo, CatalogButton } from '@/entities/ui'
</script>

<style lang="scss" module>
@import "AppHeader.module";
</style>