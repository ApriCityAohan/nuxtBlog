<template>
  <div class="prose">
    <DocRender :content="issue" />
  </div>
</template>

<script setup lang="ts">
import { useCopyCode } from "markdown-it-copy-code";
import DocRender from "./DocRender.vue";

const props = defineProps<{
  issue: string;
}>();

// 当组件彻底挂载
onMounted(() => {
  // 代码快复制
  useCopyCode();
});
</script>
