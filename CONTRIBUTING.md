# Contribution Guide

[English](#en-gb) | [简体中文](#zh-cn)

## en-GB

Welcome — thank you for contributing to the 2526-weekly-session repository.

This guide tells you how to claim tasks (issues), how to pick up work, the exact contribution workflow (fork, branch, edit, PR), the scoring rule for assigning issues, and repository structure information.

Repository summary

- Repository: `2526-weekly-session`
- Purpose: Collect and maintain session schedules, notes, and materials for 2526 Weekly Session. All course material files are stored in `Contents/` (organized by individual course); `Routes/` provides routing guidance documents for each weekly session (organized by session).

Claiming tasks (Issue pickup)

- Browse the repository Issues on GitHub. Look for issues labelled `good first issue`, `content`, `session`, or other open tasks.
- To claim a task, click "Assign yourself" on the issue (if available) or add a comment like "I will take this". Assigning yourself proactively is encouraged — it grants +5 points in our contributor scoring system (points are recorded when the PR that implements the issue is merged).
- We use GitHub Milestones to schedule and prioritize work. If an issue already includes a milestone, take note. If you need scheduling, ask in the issue comment.

Contribution process (step-by-step)

1. Fork the repository

   - Click "Fork" in the top-right of the GitHub repo to create your own copy.

2. Create a branch in your fork

   - Branch naming convention: `feature/<your-name>-<short-desc>` for new content; `fix/<your-name>-<short-desc>` for fixes.
   - Example: `feature/alice-data-ethics-session`
   - Using VS Code (GUI):
     - Clone your fork: on GitHub click the "Code" button on your fork, copy the URL; in VS Code open the Command Palette (F1) -> "Git: Clone", paste the URL, choose a local folder, then open the cloned repository.
     - Create a branch: click the current branch name in the status bar (bottom-left) and choose "Create Branch...", or run "Git: Create Branch..." from the Command Palette and enter `feature/<your-name>-<short-desc>`.

3. Add or edit files under `Contents/`

   - Session materials, images, and related assets must be placed under `Contents/<your-course>`.
   - In `Contents/<your-course>` add a `README.md` that describes the course outline and goals.
   - Use lowercase, kebab-case filenames for other files, e.g. `s2-quantum-scheduling.md`.
   - If you have images, put them in `Contents/<your-course>/images/` and reference them from your markdown.

   Note: this placement and naming convention is authoritative for all content in this repository.

4. Commit and push to your fork

   - Keep commit messages clear. We follow Angular / Conventional Commits style: use a type, optional scope, and a short imperative subject.
     Examples: `feat(s2): add quantum scheduling notes`, `fix(content): correct image path (Fixes #123)`, `docs: update README`.
   - Using VS Code (GUI):
     - Open the Source Control view (Ctrl+Shift+G). Stage changes by clicking the + icon next to files, or use the ellipsis menu (···) -> "Stage All Changes".
     - Enter a clear commit message in the message box and click the checkmark to commit.
     - Publish or push the branch: click "Publish Branch" in the status bar or use the ellipsis menu -> "Push". If prompted, choose your fork as the remote.

5. Open a Pull Request (PR)
   Using VS Code (GUI):

   - Open a PR from your fork branch into `CompPsyUnion/2526-weekly-session:main`.
   - PR title style: follow Conventional Commits (e.g. `feat(s2): short description` or `fix(scope): short description`).
   - In the PR description, include:
     - What you changed
     - Files to review
     - How to preview locally (if applicable)
     - Reference to related issue (e.g. `Fixes #<issue-number>`)

6. Review and address feedback

   - Reviewers/maintainers will comment on your PR. Push new commits to the same branch to address feedback.
   - If you need help implementing requested changes, ask on the PR.

7. Merge and cleanup

   - After approval and CI (if any) pass, a maintainer will merge the PR.
   - After merge, delete the branch in your fork.

8. Keep your fork synced with upstream

   - Using VS Code (GUI) / GitHub web:

     - Add or verify the upstream remote: open Source Control -> ellipsis (···) -> "Remote" -> "Add Remote..." and enter the upstream URL `https://github.com/CompPsyUnion/2526-weekly-session.git` with the name `upstream`.
     - Fetch upstream: ellipsis -> "Fetch" and select `upstream`.
     - Update your fork's `main`: switch to your `main` branch (click branch in status bar), then choose the branch menu -> "Merge Branch..." and select `upstream/main` to merge upstream changes into your local `main`.
     - After merging, push your updated `main` to your fork using "Push" or the status bar controls.

   - If you continue work after syncing, create a new `fix/` or `feature/` branch from your fork's `main`.

### PR checklist (what reviewers will look for)

- Are changes limited to the scope of the issue?
- Are new files placed under `Contents/` with reasonable names?
- Are images stored under `Contents/` with reasonable sizes?
- No secrets or sensitive data included.
- If the PR fixes an issue, does it reference `Fixes #...`?

### Scoring & incentives

- Claiming (assigning) an issue: +5 points (counted when a merged PR implements the issue).
- Being assigned an issue by us: +3 points (same counting).

### Maintainer contact

- [Robert He](https://github.com/hnrobert) [hnrobert@qq.com](mailto:hnrobert@qq.com)

## zh-CN

欢迎 — 感谢你为 2526-weekly-session 仓库做贡献。

本文档描述如何领取任务（Issues）、如何贡献内容、分支命名、PR 工作流、以及我们如何统计指派奖励（+5 分）。请严格按照步骤操作，以便团队统一管理和审查。

### 仓库摘要

- 仓库：`2526-weekly-session`
- 用途: 保存并维护 2526 Weekly Session 系列的周常日程、材料与笔记。所有课程材料文件放在 `Contents/` (按照每单个课程整理)；`Routes/` 提供每次周常的路由指导文档（按照每次周常整理）。

### 领取任务（Issue）

- 在 GitHub Issues 中查找任务。如果你对一些内容有兴趣，也可以选择提出一个新的 issue。
- 领取任务：在 issue 页面点击 "Assign yourself"（如果可用），或在评论中写明你将承担此任务。主动 assign 将获得 +5 CPU 技术部积分（PR 合并后计分），被动 assign 将获得 +3 分。
- 我们使用 Milestone 进行排期。若 issue 已设置里程碑，请注意；若需要排期，请在 issue 中请求。

### 贡献流程（逐步）

1. Fork 仓库

   - 在 GitHub 上点击右上角的 "Fork"。

2. 在你的 fork 创建分支

   - 分支命名约定：`feature/<你的名字>-<简短描述>`（新内容）；`fix/<你的名字>-<简短描述>`（修复）。
   - 示例：`feature/hnrobert-vscode-setup`
   - 使用 VS Code（图形界面）：

     - 克隆你的 Fork：在 GitHub Fork 页面点击 "Code" 复制仓库地址；在 VS Code 中按 F1 -> "Git: Clone"，粘贴地址并选择本地文件夹，克隆完成后打开仓库。
     - 创建分支：在状态栏点击当前分支名，选择 "Create Branch..."，输入 `feature/<你的名字>-<简短描述>` 并回车。

3. 在 `Contents/` 新增或编辑文件

   - 会话材料、图片等都应该放在 `Contents/<你的课程>` 下。
   - 在 `Contents/<你的课程>` 添加一个 `README.md` 介绍课程大纲和目标。
   - 其他文件名建议使用小写与中横线，例如 `s2-quantum-scheduling.md`。
   - 如有图片，放在 `Contents/<你的课程>/images/`，然后在你的 markdown 中引用即可。

4. 提交并推送到你的 fork

   - Commit 信息清晰：我们使用 Angular / Conventional Commits 规范：type(scope?): subject。
     示例：`feat(s2): 新增量子排期会话材料`、`fix(content): 修复图片路径 (Fixes #123)`、`docs: 更新 README`。
   - 使用 VS Code（图形界面）：
     - 打开 Source Control（Ctrl+Shift+G），将要提交的文件点击 + 进行暂存，或使用菜单中的 "Stage All Changes"。
     - 在提交消息框中输入消息，点击对勾提交。
     - 点击状态栏的 "Publish Branch" 或在菜单中选择 "Push"，将分支推送到你的 Fork。使用 "GitHub Pull Requests and Issues" 扩展可以直接在 VS Code 中创建 PR。

5. 创建 Pull Request（PR）

   - 在 GitHub 上从你的分支发起 PR，目标仓库为 `CompPsyUnion/2526-weekly-session:main`。
   - PR 标题应遵循 Conventional Commits 风格，例如 `feat(s2): ...` 或 `fix(scope): ...`，便于自动化统计与变更记录。
   - PR 描述应包含：你做了什么、需重点审阅的文件、如何本地预览（如有）、关联的 issue（如使用 `Fixes #<编号>`）。

6. 审查与处理反馈

   - 维护者/审阅者会在 PR 中提出建议或修改请求。请在同一分支下 push 新提交来处理这些反馈。
   - 如需帮助，可在 PR 中提问。

7. 合并与清理

   - 审核通过且 CI（如有）通过后，维护者会合并 PR。
   - 合并后请删除你 fork 中已合并的分支以保持整洁。

8. 同步你的 fork 与上游

   - 使用 VS Code（图形界面）/ GitHub web：

     - 在 VS Code 中通过 Source Control 的远程 (Remotes) 设置添加 `upstream`：Source Control -> ellipsis (···) -> "Remote" -> "Add Remote..."，输入名称 `upstream` 和 URL `https://github.com/CompPsyUnion/2526-weekly-session.git`。
     - 点击 ellipsis -> "Fetch" 并选择 `upstream` 来获取上游更新。切换到你的 `main` 分支后，通过分支菜单选择 "Merge Branch..." 并选择 `upstream/main` 完成合并。
     - 合并完成后使用 "Push" 将更新推送到你的 Fork 的 `main`。

   - 如果在同步后继续工作，请从你 fork 的 `main` 创建新的 `feature/` 或 `fix/` 分支。

### PR 检查清单（审阅关注点）

- 新文件是否放在 `Contents/` 并命名合理？
- Markdown 是否能正确渲染？（无断链或损坏图片）
- 图片是否储存在 `Contents/`，且尺寸/分辨率合适？
- 是否无意提交敏感信息或私有数据？
- 若修复 issue，PR 是否关联 `Fixes #...`？

### 加分规则与激励

- 积极 assign yourself 的 issue：+5 分（当实现该 issue 的 PR 合并后计分）。我们会在合并后统计并分配积分。
- 被我们 assign 的 issue：+3 分 (同上)

### 维护者联系方式

- [Robert He](https://github.com/hnrobert) [hnrobert@qq.com](mailto:hnrobert@qq.com)
