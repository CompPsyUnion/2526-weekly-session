# Visual Studio Code Guide (English)

## Table of Contents

- [Visual Studio Code Guide (English)](#visual-studio-code-guide-english)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation and Launch](#installation-and-launch)
  - [Interface and Common Panels](#interface-and-common-panels)
  - [Command Palette and Quick Open](#command-palette-and-quick-open)
  - [Files and Workspace Management](#files-and-workspace-management)
    - [Short exercise](#short-exercise)
  - [Settings (settings.json)](#settings-settingsjson)
    - [Recommended settings (strongly recommended)](#recommended-settings-strongly-recommended)
  - [Recommended Extensions](#recommended-extensions)
  - [Themes and Color Schemes](#themes-and-color-schemes)
  - [Useful Shortcuts (Windows / macOS)](#useful-shortcuts-windows--macos)
    - [Editing tips](#editing-tips)
    - [Other common shortcuts](#other-common-shortcuts)
  - [Debugging Basics](#debugging-basics)
  - [Integrated Terminal and Tasks](#integrated-terminal-and-tasks)
  - [Git and Version Control](#git-and-version-control)
  - [Performance and Troubleshooting](#performance-and-troubleshooting)
  - [FAQs](#faqs)
  - [Resources and Learning Path](#resources-and-learning-path)
  - [Closing Remarks](#closing-remarks)

---

## Introduction

Visual Studio Code (VSCode) is a lightweight, extensible, cross-platform code editor that supports many languages and debugging extensions. It's suitable for small-to-medium projects and a lot of documentation work.

---

## Installation and Launch

- Official download: <https://code.visualstudio.com/>
- macOS: .zip or .dmg, drag to Applications
- Windows: User/System installers (.exe)
- Linux: .deb / .rpm / snap / apt sources
- Launch:
  - Use the `code` command in the terminal (if not installed into PATH, run `Shell Command: Install 'code' command in PATH` from the Command Palette `Ctrl/Cmd + Shift + P`). Then use `code .` to open the current folder in VSCode.
  - Or open the app from your system launcher.

---

## Interface and Common Panels

- Activity Bar (left): Explorer, Search, Source Control, Run, Extensions
- Sidebar: the currently active view
- Editor area: tabbed file editors
- Panel (bottom): Terminal, Output, Debug Console, Problems
- Status bar (bottom): branch, encoding, LF/CRLF, line/column, language mode

---

## Command Palette and Quick Open

- Command Palette: `Ctrl/Cmd + Shift + P` — type to run commands
- Quick open files: `Ctrl/Cmd + P` — search by file name or path
- Go to definition / symbol: `F12` / `Ctrl/Cmd + click`
- Outline: `Ctrl/Cmd + Shift + O`

---

## Files and Workspace Management

- Single-folder workspace: open a folder directly
- Multi-root workspace: `File → Save Workspace As...` to save a `.code-workspace`
- Recent: `Ctrl/Cmd + R`
- Drag editor tabs to split editors and create side-by-side views

### Short exercise

If you are not reading this inside a local clone of the `2526-weekly-session` repository, try this:

1. Open the repository page on GitHub: https://github.com/CompPsyUnion/2526-weekly-session
2. Click the green `Code` button and copy the HTTPS clone URL.
3. In VSCode open the Command Palette, run `Git: Clone`, paste the URL, and pick a local folder to clone into.
4. When cloning finishes, open the repository in a new window.
5. Open `Contents/VSCode/README.md` in the editor to continue reading.

---

## Settings (settings.json)

VSCode supports user-level and workspace-level settings using JSON.

- User settings: apply across all workspaces
- Workspace settings: apply to the current workspace and override user settings

Example recommended settings:

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

Open settings: `Ctrl/Cmd + ,` or `Preferences: Open Settings (JSON)` in the Command Palette

### Recommended settings (strongly recommended)

- Auto save: `"files.autoSave": "afterDelay"`
- Format on save: `"editor.formatOnSave": true`

---

## Recommended Extensions

> Prefer English UI for programming tasks — many extensions are designed for the English environment.

Suggested extensions:

- Language and tooling (choose as needed):

  - `ms-python.python` (Python support)
    - `ms-python.autopep8` (auto format)
    - `ms-python.isort` (import sorting)
    - `ms-python.vscode-pylance` (static analysis)
  - `ms-toolsai.jupyter` (Jupyter)
  - `ms-vscode.cpptools-extension-pack` (C/C++)
  - `ms-vscode.cmake-tools` (CMake)
  - `ms-vscode.makefile-tools` (Makefile)
  - `ms-vscode.go` (Go)
  - `DavidAnson.vscode-markdownlint` (Markdown linting)
  - `bierner.markdown-mermaid` (Mermaid diagrams)
  - `yzhang.markdown-all-in-one` (Markdown enhancements)

- Useful for most projects:
  - Remote development
    - `ms-vscode-remote.remote-ssh` (Remote SSH)
    - `ms-vscode-remote.remote-ssh-edit` (SSH editing)
    - `ms-vscode-remote.remote-containers` (Dev Containers)
    - `ms-vscode.remote-explorer` (Remote explorer)
    - `ms-vscode.remote-server` (Remote tunnels)
  - Inline error display: `usernamehw.errorlens`
  - File icons: `PKief.material-icon-theme`
  - Git/GitHub: `eamodio.gitlens`, `codezombiech.gitignore`, `github.vscode-pull-request-github`, `github.vscode-github-actions`, `github.copilot`, `github.copilot-chat`
  - Spell checking: `streetsidesoftware.code-spell-checker`
  - Path intellisense: `christian-kohler.path-intellisense`
  - Containers: `ms-azuretools.vscode-containers`
  - Live Share: `ms-vsliveshare.vsliveshare`

> Don't install too many extensions — pick what you need to avoid performance issues.

---

## Themes and Color Schemes

- Change theme: `Ctrl/Cmd + K` then `Ctrl/Cmd + T`
- Configure font and rendering with `editor.fontFamily`, `editor.fontLigatures`, `editor.fontSize` in settings

---

## Useful Shortcuts (Windows / macOS)

### Editing tips

- Fast cursor movement (common across OSes):
  - `Ctrl/Option + Left/Right` (move by word)
  - `Home / End` (Windows start/end of line)
  - `Cmd + Left/Right` (macOS start/end of line)
  - `PgUp / PgDn` (Windows page up/down)
  - `Fn + Up/Down` (macOS page up/down)
  - `Ctrl + Home/End` (Windows to file start/end)
  - `Cmd + Up/Down` (macOS to file start/end)
- Selecting text:
  - `Shift + Arrows`
  - `Ctrl/Option + Shift + Left/Right` (select by word)
  - `Shift + Home/End` (Windows select to line start/end)
  - `Cmd + Shift + Left/Right` (macOS select to line start/end)
  - `Shift + PgUp/PgDn`
  - `Fn + Shift + Up/Down` (macOS page selection)
  - `Ctrl + Shift + Home/End` (Windows select to file start/end)
  - `Cmd + Shift + Up/Down` (macOS select to file start/end)
- Find and replace:
  - Find: `Ctrl/Cmd + F`
  - Global find: `Ctrl/Cmd + Shift + F`
  - Replace: `Ctrl/Cmd + Shift + H`
- Multi-cursor:
  - `Alt/Option + Click` or `Ctrl/Cmd + Alt/Option + Down/Up` (add cursor)
  - `Ctrl/Cmd + D` (select next occurrence)
- Move line up/down: `Alt/Option + Up/Down`
- Duplicate line: `Shift + Alt/Option + Up/Down`
- Delete line: `Ctrl/Cmd + Shift + K`
- Undo: `Ctrl/Cmd + Z`
- Redo: `Ctrl/Cmd + Shift + Z`
- Rename / refactor: `F2`

### Other common shortcuts

- Open file: `Ctrl/Cmd + P`
- Command Palette: `Ctrl/Cmd + Shift + P`
- Save: `Ctrl/Cmd + S`
- Toggle terminal: `` Ctrl + ` ``
- Start debugging: `F5`
- Copilot accept suggestion: `Ctrl/Cmd + I`
- Open Copilot chat: `Ctrl/Cmd + Shift + I`
- Format document: `Alt/Option + Shift + F`

---

## Debugging Basics

Create `.vscode/launch.json` in your project to configure debug sessions.

Node.js example:

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

Python (with Microsoft Python extension): use the debug panel to create configurations; features include breakpoints, variable windows, Step Over/Into, and a REPL.

---

## Integrated Terminal and Tasks

- Toggle terminal: `` Ctrl + ` ``
- Multiple terminals and shell selection (bash, zsh, PowerShell)
- Tasks (`tasks.json`) for build and automation; example:

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

Run tasks via Terminal → Run Task or via shortcut (configurable)

---

## Git and Version Control

- Built-in Git panel shows changes, commits, branch switching, and merge tools
- Common operations: Stage (+), Commit, Push, Pull, Checkout, Create Branch
- Recommended extension: GitLens for history and blame annotations
- Commit message advice: short headline + detailed body (use multi-line commit editor)

---

## Performance and Troubleshooting

- Disable unnecessary extensions
- Check running extensions: Command Palette -> "Show Running Extensions"
- Start with `--disable-extensions` to diagnose extension issues
- Clean workspace settings: remove or review `.vscode` workspace settings (back up first)

---

## FAQs

- Won't start: try `code --verbose` (after installing code in PATH)
- Extension crashes: disable extension or start with extensions disabled
- Autocomplete / linter issues: ensure language server extension is enabled and check the Output panel
- Terminal encoding problems: configure `terminal.integrated.env.*` or locale settings

---

## Resources and Learning Path

- Official docs: <https://code.visualstudio.com/docs>
- Guides on debugging, extension development, and themes are available on the official site
- Recommended practice: use ESLint + Prettier and format before CI runs

---

## Closing Remarks

Customize VSCode with settings and extensions to match your workflow. Keep extensions minimal to preserve performance and keep your editor responsive.
