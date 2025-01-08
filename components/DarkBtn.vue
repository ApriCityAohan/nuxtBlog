<template>
  <div class="cursor-pointer opacity-70 transition-opacity hover:opacity-100" @click="handleDark">
    <ClientOnly>
      <Icon v-show="$colorMode.value === 'dark'" name="mingcute:moon-stars-line" size="24"></Icon>
      <Icon v-show="$colorMode.value === 'light'" name="mingcute:sun-fill" size="24"></Icon>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

const handleDark = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<style></style>
