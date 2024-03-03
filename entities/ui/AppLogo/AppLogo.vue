<template>
  <AppLink href="/">
    <img width="50" height="50" :class="$style.logo" alt="Логотип" src="@/shared/images/common/logo.svg" />
  </AppLink>
</template>

<script setup lang="ts">
import { AppLink } from '@/shared/ui'
</script>

<style lang="scss" module>
@import "AppLogo.module";
</style>