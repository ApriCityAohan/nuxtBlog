<template>
  <div class="max-w-[70ch] mx-auto">
    <markdown :issue="data || ''" />
  </div>
</template>

<script setup lang="ts">
import { getIssue } from "@/api";
const route = useRoute();

const { id } = route.params;

const { data } = await getIssue(id as string);

useHead({
  title: data.value?.title,
});
</script>

<style lang="scss" scoped></style>
