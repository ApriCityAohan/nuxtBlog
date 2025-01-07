import markdownIt from "markdown-it";
import PluginHighligh from "markdown-it-highlightjs";
// @ts-ignore
import PluginTaskCheck from "markdown-it-task-checkbox";
import PluginAnchor from "markdown-it-anchor";
import PluginToc from "markdown-it-toc-done-right";
import PluginCopy from "markdown-it-copy-code";
import "highlight.js/styles/atom-one-dark.css";
import "markdown-it-copy-code/styles/base.css";
import "markdown-it-copy-code/styles/large.css";

// Toc类型
interface TocType {
  html?: string;
  ast?: object;
}

export const toc = ref<TocType>({});

export const md = new markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  xhtmlOut: true,
})
  .use(PluginAnchor, {
    level: [2, 3, 4],
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: "#",
  })
  .use(PluginToc, {
    listType: "ul",
    callback(html: any, ast: any) {
      toc.value = { html, ast };
    },
  })
  .use(PluginTaskCheck)
  .use(PluginHighligh)
  .use(PluginCopy);