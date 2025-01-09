<template>
  <ClientOnly>
    <div class="cursor-pointer opacity-70 transition-opacity hover:opacity-100" @click="handleDark">
      <Icon v-if="isDark" name="mingcute:moon-stars-line" size="24"></Icon>
      <Icon v-else name="mingcute:sun-fill" size="24"></Icon>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed(() => colorMode.preference === "dark");

const handleDark = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<style></style>
