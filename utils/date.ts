import { format, parseISO } from "date-fns";

/**
 * 格式化日期
 *
 * @param date
 * @param fmt
 * @returns string
 */
export function formatDate(date: string, fmt: string = "yyyy/MM/dd"): string {
  if (!date) return "";

  return format(parseISO(date), fmt);
}

/**
 * 插入年份到文章列表（返回新数组）
 *
 * @param posts
 * @returns any[]
 */
export function insertYearToPosts(posts: any[]): any[] {
  let currentYear = -1;

  return posts.reduce((posts: any, post: any) => {
    // 获取年份
    const year = new Date(post.created_at).getFullYear();
    // 如果年份不同，插入年份
    if (year !== currentYear && !isNaN(year)) {
      posts.push({
        isMarked: true,
        year,
      });
      // 更新当前年份
      currentYear = year;
    }
    // 插入文章
    posts.push(post);
    // 返回文章列表
    return posts;
  }, []);
}
