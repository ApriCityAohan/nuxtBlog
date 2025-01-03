import markdownIt from "markdown-it";
import PluginHighligh from "markdown-it-highlightjs";
// @ts-ignore
import PluginTaskCheck from "markdown-it-task-checkbox";
import PluginCopy from "markdown-it-copy-code";
import "highlight.js/styles/atom-one-dark.css";
import "markdown-it-copy-code/styles/base.css";
import "markdown-it-copy-code/styles/large.css";

export const md = new markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  xhtmlOut: true,
})
  .use(PluginTaskCheck)
  .use(PluginHighligh)
  .use(PluginCopy);
