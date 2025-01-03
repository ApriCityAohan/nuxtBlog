<template>
  <div class="flex items-center text-lg md:text-xl font-bold m-8">
    <div class="flex-auto border-b border-dashed border-b-slate-500"></div>
    <div class="mx-4" v-if="title">{{ title }}</div>
    <slot name="content"></slot>
    <div class="flex-auto border-b border-dashed border-b-slate-500"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>

<style></style>
