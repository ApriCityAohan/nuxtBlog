<template>
  <ClientOnly>
    <div class="cursor-pointer opacity-70 transition-opacity hover:opacity-100" @click="handleDark">
      <Icon :name="theme" size="24"></Icon>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

const handleDark = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};

const theme = computed(() => {
  return colorMode.value === "dark" ? "mingcute:moon-stars-line" : "mingcute:sun-line";
});
</script>

<style></style>
