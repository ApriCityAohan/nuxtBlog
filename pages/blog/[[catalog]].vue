<template>
  <div class="px-12">
    <div class="max-w-3xl mx-auto text-black">
      <SubNav />
      <Divider>
        <template #content>
          <div class="mx-4">
            A total of <b>{{ searchResult?.total_count }}</b> articles
          </div>
        </template>
      </Divider>
      <ul class="posts-list">
        <template v-for="issue in issuesList" :key="issue.id">
          <div v-if="issue.isMarked" class="years relative pointer-events-none select-none h-20">
            <span class="year-stroke font-bold font-mono text-transparent opacity-15 absolute">{{
              issue.year
            }}</span>
          </div>
          <IssueCell v-else :issue="issue" />
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { searchIssues } from "@/api";
import gsap from "gsap";

const route = useRoute();
// 编目参数
const catalog = route.params.catalog as string;

useHead({
  title: catalog || "All",
});

// 搜索文章结果
const searchResult = ref();
// 文章列表
const issuesList = ref();

/**
 *  搜索文章
 *
 * @param q 搜索关键字
 */
async function handleSearch(q: string) {
  // 如果有编目参数，则搜索该编目下的文章
  const { data } = catalog ? await searchIssues(q, { milestone: catalog }) : await searchIssues(q);
  // 搜索结果（需要展示数量用）
  searchResult.value = data.value;
  // 处理插入年份后的列表
  issuesList.value = insertYearToPosts(data.value?.items);
}

await handleSearch("");

let gsapCtx: gsap.Context;

onMounted(() => {
  gsapCtx = gsap.context(() => {
    gsap.from(".years", {
      duration: 0.5,
      y: 10,
      opacity: 0,
      stagger: 0.1,
      ease: "power1.in",
    });
    gsap.from(".posts-list li", {
      duration: 0.5,
      y: 10,
      opacity: 0,
      stagger: 0.1,
      ease: "power1.in",
    });
  });
});

onUnmounted(() => {
  gsapCtx.revert();
});
</script>

<style scoped lang="scss">
.zw {
  padding-top: var(--ah-header-height);
}

.year-stroke {
  top: -0.2em;
  left: -0.3em;
  font-size: 8em;
  -webkit-text-stroke: 2px rgba(170, 170, 170, 1);
}
</style>
