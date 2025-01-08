<template>
  <div class="cursor-pointer opacity-70 transition-opacity hover:opacity-100" @click="handleDark">
    <ColorScheme placeholder="..." tag="span">
      <Icon :name="theme" size="24"></Icon>
    </ColorScheme>
  </div>
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
