import type { Readme, Issue } from "./type";
import type { IssueQuery } from "./query";

// 环境变量
const { VITE_OWNER, VITE_BLOG_REPO } = import.meta.env;

/* 获取README -- 主要在个人介绍页面（About） */
export const getReadme = () => {
  return useGithubFetch<Readme>(
    `https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOG_REPO}/readme`,
  );
};

/* 获取Issus列表 */
export const getIssues = () => {
  return useGithubFetch<Issue[]>(
    `https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOG_REPO}/issues`,
  );
};

/* 搜索Issue */
export const searchIssues = (q: string, opt?: IssueQuery) => {
  // 拼接查询字符串
  let query = `?q=${q}+repo:${VITE_OWNER}/${VITE_BLOG_REPO}+is:issue+state:open`;
  // 如果有查询条件
  if (opt) {
    query += buildQueryStr(opt);
  }

  return useGithubFetch<Issue[]>(`https://api.github.com/search/issues${query}`);
};
