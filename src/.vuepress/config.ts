import { defineUserConfig } from "vuepress";


import theme from "./theme.js";

export default defineUserConfig({
  base: "/hi-hub/",

  lang: "zh-CN",
  title: "VitaLab",
  description: "Simple Code, Deep Life.",

  theme,




  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
