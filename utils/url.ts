/**
 * 打包查询字符串
 *
 * @param obj
 * @returns string
 */
export function buildQueryStr(obj: any): string {
  let queryStr = "";

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      queryStr += `+${key}:${obj[key]}&`;
    }
  }

  return queryStr;
}

/**
 * 从 URL 中获取查询字符串
 *
 * @param url - URL
 * @param params - 查询字符串
 * @returns
 */
export function addSearchParamsToUrl(url: string, params?: Record<string, any>): string {
  if (!params) return url;

  // 创建 URLSearchParams 对象
  const searchParams = new URLSearchParams(params);

  // 遍历查询字符串
  for (const key in params) searchParams.set(key, params[key]);

  // 创建 URL 对象
  const urlObj = new URL(url);

  // 将查询字符串添加到 URL 对象中
  urlObj.search = searchParams.toString();

  return urlObj.toString();
}
