<template>
  <div class="flex gap-5">
    <input
      v-model="q"
      type="text"
      class="search-input"
      placeholder="Search post title..."
      @keyup.enter="search"
    />
    <button class="search-button" @click="search">
      <Icon name="mingcute:search-ai-line"></Icon>
      Search
    </button>
  </div>
</template>

<script lang="ts" setup>
const q = ref(""); // search 参数

const emit = defineEmits<{ search: [q: string] }>();

function search() {
  emit("search", q.value);
}
</script>

<style lang="scss" scoped>
.search-input {
  @apply flex-1 px-4 py-1.5 outline-none rounded-md ring-1 ring-current text-gray-800 dark:text-gray-200 hover:text-gray-400 focus:text-gray-400 bg-transparent transition-colors;
}
.search-button {
  @apply flex items-center gap-1 px-4 rounded-md  ring-1 ring-current text-gray-800 dark:text-gray-200 hover:text-gray-400 bg-transparent transition-colors;
}
</style>
