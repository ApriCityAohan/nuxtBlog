import type { Readme, IssueResult, Issue, Label, Milestone } from "./type";
import type { IssueQuery } from "./query";

// 环境变量
const { VITE_OWNER, VITE_BLOGS_REPO } = import.meta.env;

/* 获取README -- 主要在个人介绍页面（About） */
export const getReadme = () => {
  return useGithubFetch<Readme>(
    `https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOGS_REPO}/readme`,
  );
};

/* 获取Issus列表 */
export const getIssues = (query?: IssueQuery) => {
  // 拼接查询字符串
  const path = addSearchParamsToUrl(
    `https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOGS_REPO}/issues`,
    query,
  );

  return useGithubFetch<Issue[]>(path);
};

/* 获取单篇issue */
export const getIssue = (id: string) => {
  return useGithubFetch<Issue>(
    `https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOGS_REPO}/issues/${id}`,
  );
};

/* 搜索Issue */
export const searchIssues = (q: string, opt?: IssueQuery) => {
  // 拼接查询字符串
  let query = `?q=${q}+repo:${VITE_OWNER}/${VITE_BLOGS_REPO}+is:issue+state:open`;
  // 如果有查询条件
  if (opt) {
    query += buildQueryStr(opt);
  }

  return useGithubFetch<IssueResult>(`https://api.github.com/search/issues${query}`);
};

/* 获取标签 */
export const getLabels = () => {
  return useGithubFetch<Label[]>(
    `https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOGS_REPO}/labels`,
  );
};

/* 里程碑分类 */
export const getMilestones = () => {
  return useGithubFetch<Milestone[]>(
    `https://api.github.com/repos/${VITE_OWNER}/${VITE_BLOGS_REPO}/milestones`,
  );
};
