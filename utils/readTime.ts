export function getReadTime(post: string) {
  if (!post) return 0;

  return Math.round(post.length / 700) + 1;
}
