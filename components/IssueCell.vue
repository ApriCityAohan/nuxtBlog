<template>
  <li class="overflow-auto dark:text-white">
    <NuxtLink
      :to="`/p/${issue.number}`"
      class="w-full mb-6 flex flex-col transition-opacity opacity-70 hover:opacity-100 md:flex-row md:items-center md:gap-2"
    >
      <span class="text-sm op-70 font-mono">{{ formatDate(issue.created_at) }}</span>
      <span class="hidden md:inline">——</span>
      <span class="text-lg">{{ issue.title }}</span>
      <div></div>
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
const { issue } = defineProps(["issue"]);
</script>

<style></style>
