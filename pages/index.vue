<template>
  <NuxtLink to="/p/10"> 跳转博客页面 </NuxtLink>
  <Markdown :issue="readme" />
</template>

<script setup lang="ts">
import { getReadme } from "@/api";

const { data } = await getReadme();

const readme = new TextDecoder("utf-8").decode(
  new Uint8Array(
    atob(data!.value!.content)
      .split("")
      .map((c) => c.charCodeAt(0)),
  ),
);
</script>

<style lang="scss" scoped></style>
