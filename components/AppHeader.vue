<template>
  <header class="w-full fixed backdrop-blur-md shadow-sm p-4 z-50 flex dark:text-white">
    <NuxtLink to="/">
      <NuxtImg
        src="https://avatars.githubusercontent.com/u/99794536?v=4&size=64"
        height="32"
        width="32"
        class="rounded-full"
      ></NuxtImg>
    </NuxtLink>
    <div class="m-auto"></div>
    <nav class="grid gap-5 grid-flow-col place-content-center">
      <NuxtLink to="/blog" class="opacity-70 transition-opacity hover:opacity-100">Blog</NuxtLink>
      <NuxtLink to="/search">
        <Icon
          name="mingcute:search-3-line"
          size="24"
          class="opacity-70 transition-opacity hover:opacity-100"
        ></Icon>
      </NuxtLink>
      <NuxtLink to="https://github.com/ApriCityAohan">
        <Icon
          name="mingcute:github-2-line"
          size="24"
          class="opacity-70 transition-opacity hover:opacity-100"
        ></Icon>
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
