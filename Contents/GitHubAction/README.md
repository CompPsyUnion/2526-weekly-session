# Introduction to GitHub Actions: Automate Your Workflow

![overview](./assets/images/overview.jpg)

## Contents

1. Welcome & Context (2 min)
2. What Is GitHub Actions? (5 min)
3. Core Concepts (8 min)
4. Demo: Reading a Simple Workflow (5 min)
5. Hands-On Practice (20 min)
6. Useful & Popular Actions, Best Practices and Q&A (10 min)

---

## Welcome & Context

This section introduces basic concepts and the practical goals for this workshop: create automations with GitHub Actions to test, lint, and package Python projects. We focus on a small demo and an extendable template repository so you can apply these workflows to your own projects.

## What Is GitHub Actions?

GitHub Actions is a platform that lets you automate your development workflow. Key features include:

- Events: trigger workflows on `push`, `pull_request`, `release`, `schedule`, or manual `workflow_dispatch`.
- Workflows: YAML files stored in `.github/workflows/` that define automated processes.
- Jobs: independent sets of steps that run in a virtual environment.
- Steps: shell commands or actions (reusable building blocks) executed inside a job.

## Core Concepts

- Runners: virtual machines provided by GitHub or self-hosted runners where job steps run.
- Matrix strategy: run jobs across multiple OSes and Python versions.
- Actions marketplace: pre-built actions for common tasks (setup-python, cache, upload-artifact, etc.).

## Demo: Reading a Simple Workflow

Below is a minimal workflow that runs tests and style checks on push and pull requests targeting `main`.

```yaml
# .github/workflows/test.yml
name: CI — Test & Lint
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: [3.10, 3.11]
    steps:
      - uses: actions/checkout@v4
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: ${{ matrix.python-version }}
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
      - name: Run autopep8 check
        run: |
          pip install autopep8
          autopep8 --diff --recursive .
      - name: Run autopep8 check (show diff)
        run: |
          pip install autopep8
          autopep8 --diff --recursive app tests
      - name: (Optional) Auto-fix formatting
        run: |
          pip install autopep8
          autopep8 --in-place --recursive app tests
      - name: Run tests
        run: pytest -q
```

---

## Example: Python Repository Structure (for the demo)

Use the following structure as a small template repository that includes tests and linting tooling, but not packaging.

```text
python-template/
├─ app/
│  └─ hello.py
├─ tests/
│  └─ test_hello.py
├─ requirements.txt
├─ setup.cfg
├─ README.md
└─ .github/
  └─ workflows/
   └─ test.yml    # test + autopep8 workflow (example)
```

### Example test & autopep8 workflow explanation

- This workflow uses `actions/setup-python` to install the required Python version.
- It installs dependencies from `requirements.txt`, runs `autopep8` to check style, and runs `pytest` to run unit tests.
- This ensures PRs and pushes to `main` are validated and styles are checked in CI.

---

## Hands-on: Local PyInstaller Packaging

You can build a standalone executable locally using PyInstaller. Follow these steps to package a Python script locally:

1. Install dependencies (use a virtual environment):

```bash
python -m venv .venv
source .venv/bin/activate   # macOS / Linux
# or .\.venv\Scripts\activate on Windows PowerShell
pip install -U pip
pip install pyinstaller
pip install -r requirements.txt   # if you have extra dependencies
```

1. Build a single-file executable (Linux/macOS/Windows):

```bash
pyinstaller --onefile app/hello.py
# output placed in dist/hello (or dist/hello.exe on windows)
```

1. Test the executable locally:

```bash
./dist/hello  # or .\dist\hello.exe on windows
```

Notes: For macOS packaging you may need to sign the binary or adjust entitlements if distributing beyond your machine. Building Windows executables should be done on a Windows runner or developer machine.

---

## Template Repository (without packaging workflow)

Provide a template repo that includes `test.yml` but intentionally does not include the packaging workflow. Use this as a safe starting point for students to extend.

Open the `python-template` folder under `Contents/GitHubAction/examples/python-template` in your workspace, then follow the steps below to add packaging.

---

## Simple Example: Sequential packaging for macOS arm64 and Windows x64

If you need a compact workflow that builds one macOS arm64 artifact and then a Windows x64 artifact sequentially, see the simple solution file:

- `Contents/GitHubAction/examples/python-template/solutions/package-simple.yml`

This workflow contains two jobs:

- `build-macos-arm64` — runs on a macOS runner and packages using PyInstaller with name `hello-macos-arm64`.
- `build-windows-x64` — depends on the macOS job and runs on a Windows runner; packages with name `hello-windows-x64`.

Notes & Caveats:

- Hosted GitHub Actions macOS runners may not always run on ARM64; confirm `uname -m` in your run (the simple workflow includes a check).
- GitHub hosted `windows-latest` runners are x86_64. If you explicitly require 32-bit (x86) Windows binaries, you'll need dedicated infrastructure or cross-compilation tools, since hosted Windows runners are x86_64.
- These jobs upload the resulting `dist` artifacts using `actions/upload-artifact`.

You can copy `package-simple.yml` into `.github/workflows/package.yml` in your repository to test it.

---

## Enhanced Example: Matrix packaging for multiple OSes and Python versions

Create a new workflow file `.github/workflows/package.yml` and add the following YAML. It will build a single file executable using PyInstaller and upload it as an artifact in the Actions run.

```yaml
name: Package — Build & Upload
on:
 workflow_dispatch:
 push:
  tags: ["v*", "release/*"]
jobs:
 package:
  runs-on: ${{ matrix.os }}
  strategy:
   matrix:
    os: [ubuntu-latest, windows-latest, macos-latest]
    python-version: [3.10, 3.11]
  steps:
   - uses: actions/checkout@v4
   - name: Set up Python
    uses: actions/setup-python@v4
    with:
     python-version: ${{ matrix.python-version }}
   - name: Install dependencies
    run: |
     pip install --upgrade pip
     pip install -r requirements.txt
   - name: Build with PyInstaller
    run: |
     pyinstaller --onefile app/hello.py -n hello-${{ matrix.os }}-${{ matrix.python-version }}
   - name: Upload packaged artifact
    uses: actions/upload-artifact@v4
    with:
     name: hello-${{ matrix.os }}-${{ matrix.python-version }}
     path: dist/hello-${{ matrix.os }}-${{ matrix.python-version }}
```

Notes:

- This builds single-file executables on each OS using PyInstaller and uploads them labeled with the OS and Python version.
- Make sure any native dependencies are provided in your build environment; using the same OS runner for distribution is the safest.

Optional: example snippet to create a GitHub Release and upload the package as a release asset:

```yaml
# in your packaging workflow after building the artifact
- uses: softprops/action-gh-release@v1
  with:
    tag_name: ${{ github.ref }}
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
- name: Upload release asset
  uses: softprops/action-gh-release@v1
  with:
    files: dist/hello-*
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## How to use the repository as a template

1. In GitHub, select 'Use this template' on the example repo to create your own copy.
1. Clone your copy locally and open it in the workspace (VS Code):

```bash
git clone https://github.com/<your-org>/<your-repo>.git
cd <your-repo>
code .
```

1. Add or edit `.github/workflows/package.yml` according to the example above to add packaging and artifact upload.
1. Commit and push your change to trigger the workflow:

```bash
git add .github/workflows/package.yml
git commit -m "Add packaging workflow"
git push
```

1. Watch Actions in the GitHub UI for job progress and artifacts.

Optional: If you prefer to upload build artifacts to a GitHub Release instead of plain artifacts, use `actions/create-release` and `actions/upload-release-asset` in your workflow.

---

## Q&A and Best Practices

- Keep CI jobs small and focused (test, lint, package, publish)
- Cache dependency installs where sensible to speed up workflows
- Use `actions/cache` for pip cache (pip cache is default for ephemeral runners, but caching wheels and pip cache can help)
- Use workflow_dispatch for manual releases

---

## Popular Actions and Links

- `actions/checkout` — checkout the repository
- `actions/setup-python` — set up Python
- `actions/upload-artifact` — upload artifacts
- `actions/cache` — cache dependencies
- `pytest` and `autopep8` for testing and automatic formatting

---

## Appendix: Example Files

See `Contents/GitHubAction/examples/python-template` for a minimal example you can open and customize.
The packaging workflow solution is available at `Contents/GitHubAction/examples/python-template/solutions/package.yml` if you'd like a reference implementation or to copy it into your repo.

If you want me to create the sample repo files and add workflows inside this workspace for demos and tests, I can do that next. Let me know and I'll implement the example template and package workflow for you.
