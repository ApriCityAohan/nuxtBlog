<template>
  <div class="cursor-pointer opacity-70 transition-opacity hover:opacity-100" @click="handleDark">
    <Icon :name="theme" size="24"></Icon>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

const handleDark = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};

const theme = computed(() => {
  if (colorMode.value === "system") {
    return "mingcute:moonlight-line";
  }

  return colorMode.value === "dark" ? "mingcute:sun-line" : "mingcute:moon-stars-line";
});
</script>

<style></style>
