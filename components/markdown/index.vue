<template>
  <div class="prose">
    <DocRender :content="s" />
  </div>
</template>

<script setup lang="ts">
import DocRender from "./DocRender.vue";

const s = `
# 998

\`\`\` js
console.log(1)
function a() {
  console.log(2)
}
a()
\`\`\`

- 1
- 2
- 3

[google](https://www.google.com)

\`console.log(1)\`

> 哈哈哈哈哈哈哈哈

![image](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)
`;
</script>
