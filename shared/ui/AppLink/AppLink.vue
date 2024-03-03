
<template>
  <NuxtLink :class="$style.link" :to="props.href">
    <slot/>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  href: String
})
</script>

<style lang="scss" module>
@import "AppLink.module";
</style>