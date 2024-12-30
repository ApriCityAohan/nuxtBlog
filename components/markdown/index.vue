<template>
  <div class="prose">
    <DocRender :content="issue" />
  </div>
</template>

<script setup lang="ts">
import DocRender from "./DocRender.vue";

const props = defineProps<{
  issue: string;
}>();
</script>
