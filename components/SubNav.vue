<template>
  <nav class="dark:text-white">
    <ul class="flex gap-3 mb-3 text-2xl md:text-4xl mt-7" id="milestones-list">
      <li
        class="cursor-pointer transition-opacity"
        :class="!catalog ? 'font-bold' : 'opacity-30 hover:opacity-70'"
        @click="$router.push('/blog')"
      >
        <span>All</span>
      </li>
      <li
        v-for="item in milestones"
        :key="item.id"
        class="cursor-pointer transition-opacity"
        :class="catalog === item.title ? 'font-bold' : 'opacity-30 hover:opacity-70'"
        @click="$router.push(`/blog/${item.title}`)"
      >
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { getMilestones } from "@/api";
import gsap from "gsap";

// 获取所有编目
const { data: milestones } = await getMilestones();

const route = useRoute();
// 编目参数
const catalog = computed(() => (route.params.catalog ? String(route.params.catalog) : null));

let navCtx: gsap.Context;

onMounted(() => {
  navCtx = gsap.context(() => {
    gsap.from("#milestones-list li", {
      duration: 0.5,
      x: -10,
      stagger: 0.2,
    });
  });
});

onUnmounted(() => {
  navCtx.revert();
});
</script>

<style></style>
