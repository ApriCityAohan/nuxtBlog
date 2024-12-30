<template>
  <div>{{ $route.params.id }} - 博客页面</div>
  <!-- <markdown  /> -->
</template>

<script setup lang="ts">
const route = useRoute();

const { id } = route.params;

useHead({
  title: `Post ${id}`,
});
</script>

<style lang="scss" scoped></style>
