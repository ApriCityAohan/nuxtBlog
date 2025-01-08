<template>
  <section class="max-w-3xl mx-auto px-4 py-8 md:px-0">
    <h1 class="text-xl md:text-3xl mb-[2em] font-bold">Search</h1>

    <!-- 搜索框 -->
    <SearchBar @search="handleSearch" />

    <!-- 标签 -->
    <ul class="flex gap-4 flex-wrap my-[2em]" id="labels">
      <li
        v-for="label in labels"
        :key="label.id"
        class="rounded-md px-2 py-1 cursor-pointer"
        :style="{ backgroundColor: `#${label.color}cc` }"
        @click="handleLabels(label.name)"
      >
        #{{ label.name }}
      </li>
    </ul>

    <!-- Issue文章列表 -->
    <ul id="issues">
      <IssueCell v-for="issue in issues" :key="issue.id" :issue="issue" />
    </ul>
  </section>
</template>

<script lang="ts" setup>
import gsap from "gsap";
import { getIssues, getLabels, searchIssues } from "@/api";

useHead({ title: "Search" });

// 获取所有 labels
const { data: labels } = await getLabels();

const issues = ref();

// dom 更新后执行动画
function animate() {
  nextTick(() => {
    gsap.from("#issues li", { opacity: 0, y: 20, duration: 0.7, stagger: 0.1 });
  });
}

// 获取所有 issues
async function handleLabels(label: string) {
  // 重置 issues
  issues.value = [];
  // 获取所有 issues
  const { data } = await getIssues({ labels: label });
  // 设置 issues
  issues.value = data.value;

  if (issues.value.length) animate();
}

// 搜索
async function handleSearch(q: string) {
  const { data } = await searchIssues(q);
  issues.value = data.value?.items;

  if (issues.value.length) animate();
}

onMounted(() => {
  gsap.from("#labels li", { opacity: 0, y: 20, duration: 0.8, stagger: 0.1 });
});
</script>

<style></style>
