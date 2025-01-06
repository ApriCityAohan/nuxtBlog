<template>
  <footer class="py-5">
    <div class="flex gap-2 flex-col items-center justify-center opacity-70 text-sm md:flex-row">
      <NuxtLink
        to="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="__blank"
        class="underline"
        rel="noopener noreferrer"
      >
        CC BY-NC-SA 4.0
      </NuxtLink>
      <span>@{{ VITE_OWNER }}</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { VITE_OWNER } = import.meta.env;
</script>

<style lang="scss" scoped></style>
