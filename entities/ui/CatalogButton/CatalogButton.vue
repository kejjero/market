
<template>
  <AppButton>
    <div :class="$style.catalog">
      <CatalogIcon />
      <span :class="$style.text">Каталог</span>
    </div>
  </AppButton>
</template>

<script setup lang="ts">
import { AppButton } from '@/shared/ui'
import { CatalogIcon } from '@/shared/ui/Icons'
</script>

<style lang="scss" module>
@import "CatalogButton.module.scss";
</style>