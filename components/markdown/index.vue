<template>
  <div class="prose">
    <DocRender :content="typeof issue === 'string' ? issue : issue?.body" />
  </div>
</template>

<script setup lang="ts">
import { useCopyCode } from "markdown-it-copy-code";
import type { Issue } from "@/api/type";
import DocRender from "./DocRender.vue";

const props = defineProps<{
  issue: Issue | string;
}>();

// 当组件彻底挂载
onMounted(() => {
  // 代码快复制
  useCopyCode();
});
</script>
