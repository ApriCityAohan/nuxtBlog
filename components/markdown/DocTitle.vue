<template>
  <div>
    <h1 class="my-[1em]">{{ issue.title }}</h1>
    <div class="opacity-70 mb-[4em]">
      <!-- time时间 -->
      <div class="flex justify-between">
        <div class="flex items-center">
          <Icon name="mingcute:calendar-month-line" class="mr-2"></Icon>
          <span>{{ formatDate(issue.created_at) }}</span>
          <Icon name="mingcute:time-line" class="ml-4 mr-2"></Icon>
          <span>{{ getReadTime(issue.body) }} mins read</span>
        </div>
        <NuxtLink :to="issue.html_url" target="_blank">
          See this issue <Icon name="mingcute:arrow-right-up-fill"></Icon>
        </NuxtLink>
      </div>

      <!-- tags标签 -->
      <div class="flex gap-2 my-[0.5em]">
        <NuxtLink
          v-for="label in issue.labels"
          :key="label.id"
          :to="`/tags/${label.name}`"
          class="px-2 dark:text-white rounded-md !no-underline"
          :style="{ backgroundColor: `#${label.color}77` }"
        >
          # {{ label.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { issue } = defineProps(["issue"]);
</script>

<style></style>
