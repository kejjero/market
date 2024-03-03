<template>
  <button :class="$style.button">
    <slot />
  </button>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
@import "AppButton.module.scss";
</style>