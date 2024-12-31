<template>
  <div class="w-full pattern-cross-dots-md bg-gray-50 text-gray-400">
    <div
      class="introduce text-black font-sans flex flex-col items-center justify-center space-y-8 py-32"
    >
      <h1 class="text-3xl md:text-5xl font-semibold text-center flex justify-center" id="hello">
        <span>🎉</span>
        <p
          class="bg-gradient-to-r from-teal-500 via-cyan-500 to-pink-400 bg-clip-text text-transparent py-4"
        >
          Hi!! Welcome to my blog.
        </p>
        <span>🎉</span>
      </h1>
      <p class="text-2xl md:text-3xl font-bold" id="myName">
        <span class="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent"
          >I'm Aohan.</span
        >
      </p>
      <p class="text-xl md:text-2xl font-bold h-8" id="typing-text">一位爱动漫的人</p>
    </div>
    <div
      class="flex flex-col justify-center max-w-xl md:max-w-5xl mx-auto overflow-hidden text-black"
    >
      <Divider title="About Me" />
      <div class="p-4 border rounded-lg shadow-xl bg-slate-50" id="aboutMe">
        <markdown :issue="readme" />
      </div>
      <Divider />
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getReadme } from "@/api";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const { data } = await getReadme();

const readme = new TextDecoder("utf-8").decode(
  new Uint8Array(
    atob(data!.value!.content)
      .split("")
      .map((c) => c.charCodeAt(0)),
  ),
);

let gsapCtx: gsap.Context;

onMounted(() => {
  gsapCtx = gsap.context(() => {
    // introduce动画
    let introduceTl = gsap.timeline();
    introduceTl
      .from("#hello", { duration: 1, scale: 0, opacity: 0, y: 50 })
      .from("#myName", { duration: 1, scale: 0, opacity: 0, y: 50 });

    // Typing动画
    let typingTl = gsap.timeline({ repeat: 4, repeatDelay: 1 });
    typingTl
      .from("#typing-text", { duration: 1, text: "" })
      .to("#typing-text", { duration: 1, text: "一位FPS玩家" }, ">3")
      .to("#typing-text", { duration: 1, text: "一位魔兽玩家" }, ">3")
      .to("#typing-text", { duration: 2, text: "也是一位前端开发工程师" }, ">3");

    // aboutMe动画
    gsap.from("#aboutMe", {
      scrollTrigger: "#aboutMe",
      opacity: 0,
      y: 100,
      duration: 0.8,
    });
  });
});

onUnmounted(() => {
  gsapCtx.revert();
});
</script>

<style lang="scss" scoped>
.introduce {
  background: url("/assets/img/background.png") no-repeat center;
  background-size: cover;
}
</style>
