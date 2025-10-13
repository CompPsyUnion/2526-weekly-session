# Visual Studio Code 使用指南（中文）

## 目录

- [Visual Studio Code 使用指南（中文）](#visual-studio-code-使用指南中文)
  - [目录](#目录)
  - [介绍](#介绍)
  - [安装与启动](#安装与启动)
  - [界面与常用面板](#界面与常用面板)
  - [命令面板与快速打开](#命令面板与快速打开)
  - [文件与工作区管理](#文件与工作区管理)
    - [小练习](#小练习)
  - [设置（settings.json）](#设置settingsjson)
    - [常用设置（强烈推荐）](#常用设置强烈推荐)
  - [常用扩展推荐](#常用扩展推荐)
  - [主题与配色方案](#主题与配色方案)
  - [常用快捷键（Windows / macOS）](#常用快捷键windows--macos)
    - [编辑技巧](#编辑技巧)
    - [VSCode 其他常用快捷键](#vscode-其他常用快捷键)
  - [调试入门](#调试入门)
  - [集成终端与任务](#集成终端与任务)
  - [Git 与版本控制](#git-与版本控制)
  - [性能与故障排查](#性能与故障排查)
  - [常见问题与解决](#常见问题与解决)
  - [资源与学习路径](#资源与学习路径)
  - [结语](#结语)

---

## 介绍

Visual Studio Code（VSCode）是一款轻量、可扩展且跨平台的代码编辑器，支持大量语言与调试扩展。适用于中小型项目/工程开发，以及不少的文档工作。

---

## 安装与启动

- 官网下载：<https://code.visualstudio.com/>
- macOS：.zip 或 .dmg，拖入 Applications
- Windows：User/System 安装程序（.exe）
- Linux：.deb / .rpm / snap / apt 源
- 启动：
  - 命令行使用 `code` 命令（如果没添加到 `PATH`，需在 `Command Palette` (`Ctrl/Cmd + Shift + P` 打开) 输入 `Shell Command: Install 'code' command in PATH`）就可以在终端中使用 `code .` 命令启动 VSCode 并打开所在目录作为工作区。
  - 当然也可以直接双击应用图标启动

---

## 界面与常用面板

- 活动栏（左侧）：`Explorer`、`Search`、`Source Control`、`Run`、`Extensions`
- 侧边栏：当前活动的面板
- 编辑器区：标签式文件编辑
- 面板（底部）：终端、输出、调试控制台、问题（Problems）
- 状态栏（底部一行）：分支、编码、LF/CRLF、行列位置、语言模式

---

## 命令面板与快速打开

- 命令面板：`Ctrl/Cmd + Shift + P`，输入命令执行
- 快速打开文件：`Ctrl/Cmd + P`，用文件名或路径搜索
- 转到定义/符号：`F12` / `Ctrl/Cmd + 点击`
- 文件大纲：`Ctrl/Cmd + Shift + O`

---

## 文件与工作区管理

- 单文件夹工作区：直接打开文件夹
- 多根工作区（Workspace）：`File → Save Workspace As...` 保存 `.code-workspace`
- 打开最近：`Ctrl/Cmd + R`
- 拖拽标签分栏、拖拽到不同编辑组实现并排编辑

### 小练习

如果你不是在 `2526-weekly-session` 的本地仓库中阅读本指南，可以尝试以下步骤：

1. 在 GitHub 上找到 [本仓库](https://github.com/CompPsyUnion/2526-weekly-session)。
2. 找到绿色的 `Code` 按钮，点击并复制仓库的 https clone 链接。
3. 在本地 VSCode 中按照上面的教程打开命令面板，输入 `Git: Clone`，直接粘贴刚才复制的链接并选择一个本地文件夹进行克隆。
4. 克隆完成后，VSCode 会提示你是否打开该仓库，选择在新窗口打开即可。
5. 现在你可以在 `Contents/` 目录下找到各个课程的文件，找到我们的这篇教程 `Contents/VSCode/README.md` 并打开继续阅读。

---

## 设置（settings.json）

VSCode 支持用户级与工作区级设置。使用 JSON 编辑更精确。

- 用户设置（User settings）：对所有工作区生效。
- 工作区设置（Workspace settings）：仅适用于当前工作区，并会覆盖用户设置。

示例（常用设置）：

```json
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "files.autoSave": "afterDelay",
  "files.exclude": {
    "**/.git": true,
    "**/node_modules": true
  }
}
```

打开：`Ctrl/Cmd + ,` 或通过命令面板 `Preferences: Open Settings (JSON)`

### 常用设置（强烈推荐）

- 自动保存: `"files.autoSave": "afterDelay"` — 在用户停止输入后延时自动保存
- 保存自动格式化: `"editor.formatOnSave": true` — 保存时自动格式化代码

---

## 常用扩展推荐

> UNNCers 别老想着装 Chinese 扩展，英文界面更符合编程习惯。

- 代码质量与语言：(可以按照你的需要选择安装) ⬇️

  - `ms-python.python` (Python 语言支持)

    - `ms-python.autopep8` (自动格式化代码)
    - `ms-python.isort` (自动排序 import 语句)
    - `ms-python.vscode-pylance` (静态代码检查)

  - `ms-toolsai.jupyter` (Jupyter Notebook 支持)
  - `ms-vscode.cpptools-extension-pack` (C/C++ 支持)
  - `ms-vscode.cmake-tools` (CMake 支持)
  - `ms-vscode.makefile-tools` (Makefile 支持)
  - `ms-vscode.go` (Go 语言支持)
  - `DavidAnson.vscode-markdownlint` (Markdown 语法检查)
  - `bierner.markdown-mermaid` (markdown 支持 mermaid 流程图)
  - `yzhang.markdown-all-in-one` (Markdown 增强，可选)

- 啥项目都能用的 ⬇️

  - 远程开发

    - `ms-vscode-remote.remote-ssh` (远程 SSH)
    - `ms-vscode-remote.remote-ssh-edit` (远程 SSH 编辑)
    - `ms-vscode-remote.remote-containers` (远程容器)
    - `ms-vscode.remote-explorer` (远程资源管理器)
    - `ms-vscode.remote-server` (远程隧道 （支持非局域网设备远程连接）)

  - 报错 inline 显示

    - `usernamehw.errorlens` (报错 inline 显示)

  - 文件图标

    - `PKief.material-icon-theme` (文件图标主题)

  - Git / GitHub 相关

    - `eamodio.gitlens` (Git 增强 / inline 显示)
    - `codezombiech.gitignore` (.gitignore 模版支持)
    - `github.vscode-pull-request-github` (GitHub PR 管理)
    - `github.vscode-github-actions` (GitHub Actions 支持)
    - `github.copilot` (AI 编程助手)
    - `github.copilot-chat` (AI 编程助手聊天)

  - 拼写检查

    - `streetsidesoftware.code-spell-checker` (拼写检查)

  - 本地路径智能提示

    - `christian-kohler.path-intellisense` (路径补全)

  - 容器相关

    - `ms-azuretools.vscode-containers` (容器工具)

  - 实时协作

    - `ms-vsliveshare.vsliveshare` (实时协作开发)

> 其他拓展也可以参考别的类似教程，但要注意请**按需安装**，避免扩展过多影响性能。

---

## 主题与配色方案

- 你也可以在拓展商店中寻找喜欢的主题并更换：`Ctrl/Cmd + K`, 然后紧接着 `Ctrl/Cmd + T`
- 字体与渲染：在 settings (`Ctrl/Cmd + ,` 打开) 中搜索配置 `editor.fontFamily`、`editor.fontLigatures`、`editor.fontSize`

---

## 常用快捷键（Windows / macOS）

### 编辑技巧

- 快速移动光标 (操作系统级别通用)：
  - `Ctrl/Option + 左/右方向箭`（按词移动，通用）
  - `Home / End`（Windows 跳转行首/行尾）
  - `Cmd + 左/右`（macOS 跳转行首/行尾）
  - `PgUp/PgDn`（Windows 页上/页下）
  - `Fn + 上/下方向键`（macOS 页上/页下）
  - `Ctrl + Home/End`（Windows 跳转到文件开头/结尾）
  - `Cmd + 上/下`（macOS 跳转到文件开头/结尾）
- 选择文本：
  - `Shift + 方向键`（按字符选择）
  - `Ctrl/Option + Shift + 左/右`（按词选择）
  - `Shift + Home/End`（Windows 选择到行首/行尾）
  - `Cmd + Shift + 左/右`（macOS 选择到行首/行尾）
  - `Shift + PgUp/PgDn`（Windows 选择到页上/页下）
  - `Fn + Shift + 上/下`（macOS 选择到页上/页下）
  - `Ctrl + Shift + Home/End`（Windows 选择到文首/文尾）
  - `Cmd + Shift + 上/下`（macOS 选择到文件开头/结尾）
- 查找与替换：
  - 查找：`Ctrl/Cmd + F`
  - 全局查找：`Ctrl/Cmd + Shift + F`
  - 替换：`Ctrl/Cmd + Shift + H`
- 多光标：
  - `Alt/Option + 鼠标左键` 或 `Ctrl/Cmd + Alt/Option (macOS 额外再 + Shift) + 下/上`（新增光标）
  - `Ctrl/Cmd + D` 选择下一个相同词
- 上下交换行：`Alt/Option + 上/下`
- 复制行：`Shift + Alt/Option + 上/下`
- 删除行：`Ctrl/Cmd + Shift + K`
- 撤销：`Ctrl/Cmd + Z`
- 重做：`Ctrl/Cmd + Shift + Z`
- 快速重命名/重构：`F2`

### VSCode 其他常用快捷键

- 打开文件：`Ctrl/Cmd + P`
- 命令面板：`Ctrl/Cmd + Shift + P`
- 保存：`Ctrl/Cmd + S`
- 终端切换：`` Ctrl + ` ``
- 调试开始：`F5`
- Copilot 智能补全：`Ctrl/Cmd + I`
- Copilot 打开对话面板：`Ctrl/Cmd + Shift + I`
- 格式化文档：`Alt/Option + Shift + F`（或使用格式化工具）

---

## 调试入门

打开一个工作目录，在工作目录下创建 `.vscode/launch.json` 文件配置运行配置/调试器。

Node.js 示例：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/app.js",
      "cwd": "${workspaceFolder}"
    }
  ]
}
```

Python（使用 Microsoft Python 扩展）：

- 在调试面板点“创建配置”，选择 Python。
- 支持断点、变量窗口、Step Over/Into、REPL。

---

## 集成终端与任务

- 集成终端：`` Ctrl + ` ``（backtick，Tab 上面那个键，英文）
- 支持多个终端、Shell 切换（bash、zsh、PowerShell）
- 任务（tasks.json）用于自动构建、运行工具：

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "build",
      "type": "shell",
      "command": "npm run build",
      "group": "build"
    }
  ]
}
```

运行任务：Terminal → Run Task 或快捷键（可自定义）

---

## Git 与版本控制

- 内置 Git 面板显示变更、提交、分支切换、Merge 工具
- 常用操作：Stage（+）、Commit、Push、Pull、Checkout、Create Branch
- 推荐扩展：GitLens（可视化历史、作者和代码责任）
- 提交信息编写建议：使用简洁标题 + 详细描述（在多行 commit 编辑器中）

---

## 性能与故障排查

- 禁用不必要扩展
- 监测扩展性能：命令面板 -> "Show Running Extensions"
- 启动参数：`--disable-extensions` 用于排查扩展问题
- 清理工作区缓存：删除 `.vscode` 临时设置（注意备份 workspace 设置）

---

## 常见问题与解决

- 无法启动：尝试 `code --verbose` 查看日志 （要先添加环境变量）
- 扩展崩溃：禁用扩展或在安全模式启动
- 代码补全/语法错误：检查语言服务器扩展是否启用并查看输出面板
- 终端编码问题：在 settings.json 设置 `terminal.integrated.env.*` 或修改 locale

---

## 资源与学习路径

- 官方文档：<https://code.visualstudio.com/docs>
- 调试、扩展开发、主题与 API 文档在官网有详细指南
- 推荐实践：使用 ESLint + Prettier，配置 CI/CD 前在本地格式化与测试

---

## 结语

通过配置 settings、选择合适扩展与掌握快捷键，可以把 VSCode 打造成高效且个性化的开发环境。根据项目与语言需求逐步精简扩展，保持编辑器性能与可用性平衡。
