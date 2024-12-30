<template>
  <div>{{ $route.params.id }} - 博客页面</div>
  <markdown />
</template>

<script setup lang="ts">
import { useCopyCode } from "markdown-it-copy-code";
const route = useRoute();

const { id } = route.params;

useHead({
  title: `Post ${id}`,
});

onMounted(() => {
  useCopyCode();
});
</script>

<style lang="scss" scoped></style>
