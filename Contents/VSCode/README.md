# Visual Studio Code 使用指南（中文）

## 目录

- 介绍
- 安装与启动
- 界面与常用面板
- 命令面板与快速打开
- 文件与工作区管理
- 设置（settings.json）
- 常用扩展推荐
- 主题与配色方案
- 编辑技巧（多光标、代码片段）
- 调试入门（Node.js、Python）
- 集成终端与任务（tasks）
- Git 与版本控制
- 性能与故障排查
- 常用快捷键表
- 资源与学习路径

---

## 介绍

Visual Studio Code（VS Code）是一款轻量、可扩展且跨平台的代码编辑器，支持大量语言与调试扩展。适用于小型项目与大型工程开发。

---

## 安装与启动

- 官网下载：https://code.visualstudio.com/
- macOS：.zip 或 .dmg，拖入 Applications
- Windows：User/System 安装程序（.exe）
- Linux：.deb / .rpm / snap / apt 源
- 启动：命令行使用 `code .`（首次在 PATH 中启用需在 Command Palette 输入 "Shell Command: Install 'code' command in PATH"）

---

## 界面与常用面板

- 活动栏（左侧）：Explorer、Search、Source Control、Run、Extensions
- 侧边栏：当前活动的面板
- 编辑器区：标签式文件编辑
- 面板（底部）：终端、输出、调试控制台、问题（Problems）
- 状态栏（底部一行）：分支、编码、LF/CRLF、行列位置、语言模式

---

## 命令面板与快速打开

- 命令面板：Ctrl/Cmd + Shift + P，输入命令执行
- 快速打开文件：Ctrl/Cmd + P，用文件名或路径搜索
- 转到定义/符号：F12 / Ctrl/Cmd + 点击
- 文件大纲：Ctrl/Cmd + Shift + O

---

## 文件与工作区管理

- 单文件夹工作区：直接打开文件夹
- 多根工作区（Workspace）：File → Save Workspace As... 保存 `.code-workspace`
- 打开最近：Ctrl/Cmd + R
- 拖拽标签分栏、拖拽到不同编辑组实现并排编辑

---

## 设置（settings.json）

VS Code 支持用户级与工作区级设置。使用 JSON 编辑更精确。

示例（常用设置）：

```json
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "files.autoSave": "off",
  "files.exclude": {
    "**/.git": true,
    "**/node_modules": true
  },
  "editor.minimap.enabled": false
}
```

打开：Ctrl/Cmd + , 或通过命令面板 "Preferences: Open Settings (JSON)"

---

## 常用扩展推荐

- 代码质量与语言：ESLint、Prettier、Python、Pylance、Go

> UNNCers 别老想着装 Chinese 扩展，英文界面更符合编程习惯。
>
> 同时推荐的 Python 相关的拓展组合 ⬇️
>
> - ms-python.autopep8 # 自动格式化代码
> - ms-python.isort # 自动排序 import 语句
> - ms-python.vscode-pylance # 静态代码检查
>
> 以及啥项目都能用的 ⬇️
>
> - streetsidesoftware.code-spell-checker # 拼写检查
>
> 以及，为了更好地在 VS Code 中阅读 Markdown 文件（本教程使用的格式），推荐安装 ⬇️
>
> - bierner.markdown-mermaid # 支持 mermaid 流程图
> - yzhang.markdown-all-in-one # Markdown 增强，可选
> - DavidAnson.vscode-markdownlint # Markdown 语法检查，可选
>
> 以及，为了更好地阅读 Jupyter Notebook 文件（.ipynb），推荐安装拓展包 ⬇️
>
> - ms-toolsai.jupyter # Jupyter Notebook 支持

- 生产力：GitLens、Bracket Pair Colorizer、Path Intellisense
- 主题与图标：One Dark Pro、Material Icon Theme
- Docker、Remote - SSH、Live Share（协作）
  按需安装，避免扩展过多影响性能。

---

## 主题与配色方案

- 更换主题：Ctrl/Cmd + K, 然后 Ctrl/Cmd + T
- 字体与渲染：在 settings.json 配置 `editor.fontFamily`、`editor.fontLigatures`、`editor.fontSize`

---

## 编辑技巧

- 快速移动光标：
  - Ctrl/Option + 左/右/上/下（按词移动，通用）
  - Home/End（Windows 跳转行首/行尾）
  - Cmd + 左/右（macOS 跳转行首/行尾）
  - PgUp/PgDn（Windows 页上/页下）
  - Fn + 上/下（macOS 页上/页下）
  - Ctrl/Cmd + 上/下（跳转到文件开头/结尾）
- 选择文本：
  - Shift + 方向键（按字符选择）
  - Ctrl/Option + Shift + 左/右/上/下（按词选择）
  - Shift + Home/End（Windows 选择到行首/行尾）
  - Cmd + Shift + 左/右（macOS 选择到行首/行尾）
  - Shift + PgUp/PgDn（Windows 选择到页上/页下）
  - Cmd + Shift + 上/下（macOS 选择到文件开头/结尾）
- 查找与替换：
  - 查找：Ctrl/Cmd + F
  - 全局查找：Ctrl/Cmd + Shift + F
  - 替换：Ctrl/Cmd + Shift + H
- 多光标：
  - Alt/Option + 鼠标左键 或 Ctrl/Cmd + Alt + 下/上（新增光标）
  - Ctrl/Cmd + D 选择下一个相同词
- 上下交换行：Alt/Option + 上/下
- 复制行：Shift + Alt/Option + 上/下
- 删除行：Ctrl/Cmd + Shift + K
- 撤销：Ctrl/Cmd + Z
- 重做：Ctrl/Cmd + Shift + Z
- 快速重命名/重构：F2
- 智能补全：Ctrl/Cmd + I
- 格式化文档：Alt/Option + Shift + F（或使用格式化工具）

---

## 调试入门

创建 `.vscode/launch.json` 配置调试器。

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

- 集成终端：Ctrl/Cmd + ` （backtick）
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

## 常用快捷键（Windows / macOS）

- 打开文件：Ctrl + P / Cmd + P
- 命令面板：Ctrl + Shift + P / Cmd + Shift + P
- 保存：Ctrl + S / Cmd + S
- 查找：Ctrl + F / Cmd + F
- 全局查找：Ctrl + Shift + F / Cmd + Shift + F
- 终端切换：Ctrl + `/ Cmd +`
- 调试开始：F5
- 切换侧边栏：Ctrl + B / Cmd + B

---

## 常见问题与解决

- 无法启动：尝试 `code --verbose` 查看日志 （要先添加环境变量）
- 扩展崩溃：禁用扩展或在安全模式启动
- 代码补全/语法错误：检查语言服务器扩展是否启用并查看输出面板
- 终端编码问题：在 settings.json 设置 `terminal.integrated.env.*` 或修改 locale

---

## 资源与学习路径

- 官方文档：https://code.visualstudio.com/docs
- 调试、扩展开发、主题与 API 文档在官网有详细指南
- 推荐实践：使用 ESLint + Prettier，配置 CI/CD 前在本地格式化与测试

---

结语  
通过配置 settings、选择合适扩展与掌握快捷键，可以把 VS Code 打造成高效且个性化的开发环境。根据项目与语言需求逐步精简扩展，保持编辑器性能与可用性平衡。
