<template>
  <div class="cursor-pointer opacity-70 transition-opacity hover:opacity-100" @click="handleDark">
    <!-- <ColorScheme placeholder="..." tag="span"> -->
    <Icon v-if="$colorMode.preference === 'dark'" name="mingcute:moon-stars-line" size="24"></Icon>
    <Icon name="mingcute:sun-fill" size="24"></Icon>
    <!-- </ColorScheme> -->
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

const handleDark = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<style></style>
