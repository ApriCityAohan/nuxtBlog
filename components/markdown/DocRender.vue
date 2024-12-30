<template>
  <div v-html="mdContent"></div>
</template>

<script setup lang="ts">
import { md } from "./markdow-it";
import { useCopyCode } from "markdown-it-copy-code";

const { content } = defineProps(["content"]);

const mdContent = md.render(content || "暂无内容");

onMounted(() => {
  useCopyCode();
});
</script>
