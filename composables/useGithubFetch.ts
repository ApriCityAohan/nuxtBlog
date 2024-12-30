const { VITE_GITHUB_TOKEN } = import.meta.env;

/**
 * 使用 GitHub API 进行数据获取
 * @param url - API 请求的 URL
 * @returns 返回包含数据的对象
 * @throws 当请求失败时，抛出错误
 */
export async function useGithubFetch<T>(url: string) {
  const { data, error } = await useFetch<T>(url, {
    // 请求头中添加 Authorization
    onRequest: ({ options }) => {
      options.headers.set("Authorization", `Bearer ${VITE_GITHUB_TOKEN}`);
    },
  });

  // 请求失败时，抛出错误
  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Github API 请求失败",
    });
  }

  // 返回数据
  return { data };
}
