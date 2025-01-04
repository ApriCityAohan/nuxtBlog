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
