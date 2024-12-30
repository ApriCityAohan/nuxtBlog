import type { Readme } from "./type";

import {} from "./query";

// 环境变量
const { VITE_OWNER, VITE_BLOG_REPO } = import.meta.env;

/* 获取README -- 主要在个人介绍页面（About） */
export const getReadme = () => {
  return useGithubFetch<Readme>(
    `https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOG_REPO}/readme`,
  );
};
