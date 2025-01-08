<template>
  <div class="prose relative px-8 md:px-0">
    <!-- 文章标题 -->
    <DocTitle :issue="issue"></DocTitle>

    <!-- 文章目录 -->
    <DocToc></DocToc>

    <!-- 文章内容 -->
    <DocRender :content="typeof issue === 'string' ? issue : issue.body" />
  </div>
</template>

<script setup lang="ts">
import { useCopyCode } from "markdown-it-copy-code";
import type { Issue } from "@/api/type";
import DocRender from "./DocRender.vue";
import DocTitle from "./DocTitle.vue";
import DocToc from "./DocToc.vue";

const props = defineProps<{
  issue: Issue | string;
}>();

// 当组件彻底挂载
onMounted(() => {
  // 代码快复制
  useCopyCode();
});
</script>

<style lang="scss" scoped></style>
