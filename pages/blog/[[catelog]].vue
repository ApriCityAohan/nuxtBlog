<template>
  <div class="pattern-cross-dots-md bg-gray-50 text-gray-400 px-12">
    <div class="zw max-w-3xl mx-auto text-black">
      <SubNav />
      <Divider>
        <template #content>
          <div class="mx-4">A total of <b>17</b> articles</div>
        </template>
      </Divider>
      <ul id="blog-list">
        <li>1</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getIssues } from "@/api";
import gsap from "gsap";

let gsapCtx: gsap.Context;

const { data } = await getIssues();

onMounted(() => {
  gsapCtx = gsap.context(() => {
    gsap.from("#blog-list li", {
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
</style>
