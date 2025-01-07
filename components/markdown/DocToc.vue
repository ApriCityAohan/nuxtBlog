<template>
  <div
    class="absolute top-0 left-full h-full w-[20em] pl-[2em] opacity-30 hover:opacity-100 transition-opacity hidden md:block"
  >
    <div
      class="sticky top-32 w-[25em] max-h-[70vh] overflow-y-auto overscroll-contain"
      v-html="toc.html"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { toc } from "./markdown-it";
</script>

<style></style>
