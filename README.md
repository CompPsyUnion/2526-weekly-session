# CPU 2526 Weekly Sharing Session

> 宁波诺丁汉大学计算机爱好者协会 Computer Psycho Union · 2025–2026 学年技术部 Weekly Sharing Session 资料归档

[English](#en-us) | [简体中文](#zh-cn)

---

## en-US

### Overview

This repository archives the materials, slides and notes of the **CPU Tech Department Weekly Sharing Session** series for the 2025–2026 academic year — 14 sessions in total (8 in autumn, 5 in spring, plus 1 further-study special co-organized with the Career Office), running from basic tooling to engineering practice and research.

### Sessions at a glance

| # | Date | Topic | Speakers | Route |
|---|------|-------|----------|-------|
| S01 | 2025-10-17 | Basic: VSCode, Markdown, Git & GitHub | Siyuan HE, Lijie ZHOU, Baicen LIU | [S01](./Routes/S01) |
| S02 | 2025-10-24 | Little Byte Challenge Workshop | — | [S02](./Routes/S02) |
| S03 | 2025-10-31 | Basic: GitHub; VSCode × Discord | Baicen LIU, Siyuan HE | [S03](./Routes/S03) |
| S04 | 2025-11-14 | Guest: From UNNC to Tech Giants in the Era of AI | Jun XIONG | [S04](./Routes/S04) |
| S05 | 2025-11-21 | Research Journey; GitHub Actions | Jiayi ZHANG, Robert HE | [S05](./Routes/S05) |
| S06 | 2025-11-28 | Basic: Linux; SSH | Hongxi LYU, Baicen LIU | [S06](./Routes/S06) |
| S07 | 2025-12-05 | Guest: A Beginner's Guide to AI Research | Mingche SU | [S07](./Routes/S07) |
| S08 | 2025-12-12 | Randomized Algorithms & Simulated Annealing | Yiming ZHANG | [S08](./Routes/S08) |
| S09 | 2026-03-06 | Docker and Docker Compose | Jiabao CAO, Siyuan HE | [S09](./Routes/S09) |
| S10 | 2026-03-13 | Talks: Tech Internship; Gradient Descent | Baicen LIU, Shengqin JIANG | [S10](./Routes/S10) |
| S11 | 2026-03-27 | AI Coding Workshop | Baicen LIU | [S11](./Routes/S11) |
| S12 | 2026-04-17 | Talks: Slidev; Computer Emergency Guide | Xiangqing SUN, Zhirui SHEN | [S12](./Routes/S12) |
| S13 | 2026-04-23 | Spotlight on CS Further Study (w/ Career Office) | 5 senior students | [S13](./Routes/S13) |
| S14 | 2026-04-30 | Agentic AI; Marp | Baicen LIU, Siyuan HE | [S14](./Routes/S14) |

### Repository structure

- [Contents/](./Contents/) — All course material files, organized **by course**. Each course directory is named `S##-YYYYMMDD-<CourseName>` (session number + session date + course name). Add or edit course files under the appropriate `Contents/<your-course>/` directory.
- [Routes/](./Routes/) — Routing/overview documents, organized **by session** (`S01`–`S14`). `Routes/` is the published routing tree; content maintainers usually should not edit `Routes/` directly — change the content in `Contents/` instead.

### Naming convention

Directories under `Contents/` follow the format **`S##-YYYYMMDD-<CourseName>`**:

- `S##` — the session sequence number (`S01`–`S14`)
- `YYYYMMDD` — the date that session was held
- `<CourseName>` — the course/topic name in PascalCase (e.g. `VSCode`, `Docker`, `GitHubAction`)

Example: `S09-20260306-Docker` = Session 9, held 2026-03-06, Docker course.

### Quick start (fork + local preview)

The full contribution workflow (fork → branch → edit `Contents/` → PR) is documented in [CONTRIBUTING.md](./CONTRIBUTING.md), including VSCode GUI instructions and repository conventions.

This repository uses git submodules — after cloning, run:

```bash
git submodule update --init
```

### Contact

- [Robert He](https://github.com/hnrobert) [hnrobert@qq.com](mailto:hnrobert@qq.com)

---

## zh-CN

### 概述

本仓库归档 **CPU 技术部 Weekly Sharing Session** 2025–2026 学年的全部材料、讲义与笔记——共 14 场（秋季 8 场、春季 5 场，外加 1 场与 Career Office 合作的升学专题），从基础工具一路铺到工程实践与科研。

### 周常一览

| # | 日期 | 主题 | 主讲人 | 路由 |
|---|------|------|--------|------|
| S01 | 2025-10-17 | Basic：VSCode、Markdown、Git & GitHub | 何思源、周立杰、刘百辰 | [S01](./Routes/S01) |
| S02 | 2025-10-24 | Little Byte Challenge Workshop | — | [S02](./Routes/S02) |
| S03 | 2025-10-31 | Basic：GitHub 入门；VSCode × Discord | 刘百辰、何思源 | [S03](./Routes/S03) |
| S04 | 2025-11-14 | 嘉宾：From UNNC to Tech Giants in the Era of AI | 熊军 | [S04](./Routes/S04) |
| S05 | 2025-11-21 | Research Journey；GitHub Actions | 张珈译、何思源 | [S05](./Routes/S05) |
| S06 | 2025-11-28 | Basic：Linux；SSH | 吕宏希、刘百辰 | [S06](./Routes/S06) |
| S07 | 2025-12-05 | 嘉宾：A Beginner's Guide to AI Research | 苏明澈 | [S07](./Routes/S07) |
| S08 | 2025-12-12 | 随机化算法与模拟退火 | 张亦鸣 | [S08](./Routes/S08) |
| S09 | 2026-03-06 | Docker and Docker Compose | 曹家宝、何思源 | [S09](./Routes/S09) |
| S10 | 2026-03-13 | Talks：技术实习；梯度下降 | 刘百辰、蒋昀祺 | [S10](./Routes/S10) |
| S11 | 2026-03-27 | AI Coding Workshop | 刘百辰 | [S11](./Routes/S11) |
| S12 | 2026-04-17 | Talks：Slidev；电脑急救指南 | 孙翔卿、沈知睿 | [S12](./Routes/S12) |
| S13 | 2026-04-23 | Spotlight on CS 升学（与 Career Office） | 5 位高年级同学 | [S13](./Routes/S13) |
| S14 | 2026-04-30 | Agentic AI；Marp | 刘百辰、何思源 | [S14](./Routes/S14) |

### 仓库结构

- [Contents/](./Contents/) — 课程内容文件，**按课程**组织。每个课程目录命名为 `S##-YYYYMMDD-<课程名>`（Session 编号 + 举办日期 + 课程名）。请在此目录的课程子目录新增或修改所有会议材料。
- [Routes/](./Routes/) — 路由/概要文档，**按 Session** 组织（`S01`–`S14`）。`Routes/` 是对外展示的路由树；单个课程编辑者通常不要直接修改 `Routes/`，请在 `Contents/` 修改内容。

### 命名规范

`Contents/` 下的目录遵循 **`S##-YYYYMMDD-<课程名>`** 格式：

- `S##` — Session 序号（`S01`–`S14`）
- `YYYYMMDD` — 该场 Session 的举办日期
- `<课程名>` — 课程/主题名，使用 PascalCase（如 `VSCode`、`Docker`、`GitHubAction`）

示例：`S09-20260306-Docker` = 第 9 场，2026-03-06 举办，Docker 课程。

### 快速使用（Fork + 本地预览）

完整的贡献工作流（Fork → 分支 → 在 `Contents/` 编辑 → PR）请参见 [CONTRIBUTING.md](./CONTRIBUTING.md)，含逐步操作与 VSCode GUI 示例。

本仓库使用了 git submodule，克隆后请执行：

```bash
git submodule update --init
```

### 联系方式

- [Robert He](https://github.com/hnrobert) [hnrobert@qq.com](mailto:hnrobert@qq.com)
