# Markdown 入门教程幻灯片使用说明

本目录包含使用 Marp/Reveal.js 等多平台环境呈现的幻灯片文档。

## 文件说明

 - `Markdown入门教程-幻灯.md`：主体幻灯片，基于 Marp Markdown 语法，可生成 PDF、HTML 或 PPTX。
 - `../themes/phycat-orange.css`：自定义主题，兼容 Typora 主题格式，同时为 Marp/Reveal.js 提供统一的配色与排版。

## 使用 pnpm 构建与预览

```powershell
pnpm install
pnpm run build    # 在 dist/ 输出 HTML、PDF、PPTX
pnpm run start    # 启动本地服务器并实时预览
```

> `pnpm run start` 会基于 Marp CLI 开启本地 8080 端口的实时预览，可配合浏览器/VS Code 查看。

## 其他快速预览方式

1. 安装 [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) 插件或 [Marp CLI](https://github.com/marp-team/marp-cli)。
2. 在 VS Code 中打开 `Markdown入门教程-幻灯.md`，点击右上角 **Marp: Open Preview** 即可实时预览。

## 导出为网页幻灯片

```powershell
npm install -g @marp-team/marp-cli
 marp slides/Markdown入门教程-幻灯.md --theme-set themes/phycat-orange.css --html
```

输出的 `.html` 文件可直接在浏览器中作为 Web Slides 播放。

## 导出为 PDF 或 PPTX

```powershell
marp slides/Markdown入门教程-幻灯.md --theme-set themes/phycat-orange.css --pdf
marp slides/Markdown入门教程-幻灯.md --theme-set themes/phycat-orange.css --pptx
```

## Typora 中使用主题

1. 将 `themes/phycat-orange.css` 复制到 Typora 的主题目录。
2. 在 Typora 中选择 **主题 → phycat-orange**。
3. 打开幻灯片 Markdown 文档，即可在 Typora 中享受一致的配色与排版体验。

> 如需在 Reveal.js 中使用，可通过 [reveal-md](https://github.com/webpro/reveal-md) 加载同一 Markdown 文件，并引入主题样式以获得一致视觉效果。
