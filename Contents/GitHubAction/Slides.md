---
marp: true
theme: default
paginate: true
html: true
mermaid: true
header: 'GitHub Actions'
footer: '@CompPsyUnion · Weekly Session'
backgroundColor: '#f6f7fb'
---

<!-- Title -->

# GitHub Actions — Automate your workflow

![overview](./assets/images/overview.jpg)

---

## Agenda

- Welcome & Context
- What is GitHub Actions?
- Core Concepts
- Demo: Read a simple workflow
- Hands-On Practice
- Best Practices & Links

---

## Welcome & Context

- Create automations for test, lint, package

---

## What is GitHub Actions?

- CI/CD platform integrated with GitHub repos
- Automate your integration & development workflow on GitHub

---

## Core Concepts

- CI: Continuous Integration automates testing & validation of code changes
- CD: Continuous Deployment automates releasing code to production

---

## Workflows

```text
.github/workflows/*.yml
```

- Automated processes defined by YAML

---

## Events

- Trigger workflows: `push`, `pull_request`, `release`, `schedule`, `workflow_dispatch`

---

## Jobs

- Independent units of work that run in a runner

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    # steps, ...
```

---

## Steps

```yaml
steps:
  - name: Checkout
    uses: actions/checkout@v4
  - name: Run tests
    run: pytest
```

- Steps are `uses` or `run` commands

---

## Runners

```yaml
runs-on: ubuntu-latest
```

- Virtual environments for jobs

---

## Matrix strategy

```yaml
strategy:
  matrix:
    os: [ubuntu-latest, macos-latest, windows-latest]
    python: [3.8, 3.11]
```

- Run jobs across OS/Python combos (2x3=6 jobs here)

---

## Actions marketplace

- Pre-built actions for common tasks (setup-python, cache, upload-artifact)

---

## Demo: Reading a Simple Workflow (start)

- We'll open the tutorial repo and follow a short hands-on sequence.
- See links in Moodle or in the README to get started.
  ![h:400](./assets/images/moodle.png)

---

<!-- Tutorial - Quick Start -->

## Quick Start — Create a new repo

- Use "Use this template" → Create a new repository

![create-repo-btn](./assets/images/create-repo-btn.png)

---

## Quick Start — Name your repo

- Give a name & make it public (recommended)

<p align="center">
    <img src="./assets/images/create-repo.png" alt="create-repo" width="550"/>
</p>

---

## Open Codespaces (optional)

- Create a codespace on `main` to explore workflows online

![create-cs](./assets/images/create-cs.png)

---

## Repo — code, tests & assets

```text
.
├── LICENSE
├── README.md
├── .gitignore
├── app
│   ├── __init__.py
│   └── hello.py
├── assets
│   └── images
│       ├── open-in-workspace.png
│       └── workspace-structure.png
├── requirements.txt
├── solutions
│   ├── package-exercise-original.yml
│   └── package.yml
└── tests
    └── test_hello.py
```

---

## Repo — workflows

- Minimal Python template with `.github/workflows`

  ![workspace-structure](./assets/images/workspace-structure.png)

```text
.github/workflows/
  - package-matrix.yml
  - package.yml
  - test.yml
```

- CI definitions live under `.github/workflows`
- Each YAML file defines a workflow

---

## YAML basics

<p align="center">
    <img src="./assets/images/yaml.png" alt="yaml" />
</p>

- Key: values, indentation, lists, nested structures

---

## YAML — key/value

```yaml
name: CI — Test & Lint
```

- Workflow name displayed in the Actions UI

---

> PS: In YAML, strings do not need to be enclosed in quotes unless they contain special characters.  
> All of the following four lines are valid in YAML:
>
> ```yaml
> greeting: Hello
> greeting: Hello World
> greeting: "Hello World"
> path: "/home/user/my folder"
> ```
>
> But THIS is NOT valid:
>
> ```yaml
> path: /home/user/my folder # ❌
> ```

---

## YAML — nested keys

```yaml
on:
  push:
  pull_request:
    branches:
      - main
```

- `on:` defines events that trigger workflows
- `push:` and `pull_request:` are nested under `on:`
  meaning they are parallel triggers

> PS: the value of a key can be empty, as shown above.
> As long as the key is present, the event should trigger the workflow.

---

## YAML — lists & steps

```yaml
branches:
  - main
  - develop
```

**Or the following expression, they are equivalent**

```yaml
branches: [main, develop]
```

---

```yaml
steps:
  - name: Checkout Repo
    uses: actions/checkout@v4
  - name: Run tests
    run: pytest -q
```

If we convert the above to JSON, it would look like this:

```json
"steps": [
  {
    "name": "Checkout Repo",
    "uses": "actions/checkout@v4"
  },
  {
    "name": "Run tests",
    "run": "pytest -q"
  }
]
```

---

## Breakdown of test.yml

- Understanding a simple CI workflow

  ![workflow-structure](assets/images/workspace-structure.png)

- We'll read through `test.yml` step-by-step first.

---

## Workflow — Name

```yaml
name: CI — Test & Lint
```

- The workflow's display name in Actions UI

<p align="center">
    <img src="./assets/images/wf-name.png" alt="wf-name" width="1000"/>
</p>

---

## Workflow — Triggers

```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
```

- Triggers the workflow on pushes and PRs to `main`

---

## Jobs — top-level

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
```

- Each job runs on a runner; jobs can run in parallel

---

## Job — Runs-on

```yaml
runs-on: ubuntu-latest
```

- Choose `ubuntu`, `macos`, `windows`, or self-hosted runners

---

## Job — Steps (overview)

```yaml
jobs:
  test:
    # ...
    steps:
      - name: Checkout Repo
        # ...
      - name: Set up Python
        # ...
      - name: Install dependencies
        # ...
      - name: Run lint
        # ...
      - name: Run tests
        # ...
```

- Steps are executed sequentially inside a job

---

## Step: Checkout the repo

```yaml
- name: Checkout Repo
  uses: actions/checkout@v4
```

- Grants the job access to repository code

---

## Step: Set up Python

```yaml
- name: Set up Python
  uses: actions/setup-python@v4
  with:
    python-version: '3.11'
```

- Installs Python without manual commands

---

## Step: Install dependencies

```yaml
- name: Install dependencies
  run: |
    python -m pip install --upgrade pip
    pip install -r requirements.txt
```

- Ensures library dependencies are available

---

## Step: Run linting

```yaml
- name: Run autopep8 check
  run: |
    pip install autopep8
    autopep8 --diff --recursive app tests
```

- Keeps code style consistent

---

## Step: Run tests

```yaml
- name: Run tests
  env:
    PYTHONPATH: ${{ github.workspace }}
  run: pytest -q
```

- Executes test suite and reports failures

---

### How to package this project locally (for reference)

Usually we would build a standalone executable for such small project with PyInstaller.

On macOS/Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
.venv/bin/pip install -r requirements.txt
.venv/bin/pyinstaller --onefile app/hello.py
ls -la dist
```

On Windows PowerShell:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
.venv\Scripts\pip.exe install -r requirements.txt
.venv\Scripts\pyinstaller.exe --onefile app/hello.py
dir dist
```

---

## Exercise

But to upload your build artifacts every time to GitHub from local would be tedious, so we often automate this with GitHub Actions.

- Implement package.yml
- Commit your workflow updates & push (sync) to trigger the workflow run

<p align="center">
    <img src="./assets/images/commit.png" alt="commit" height="600"/>
</p>

---

## Watch workflow running

- Jobs show logs and status in Actions tab

![running](./assets/images/running.png)

---

## Watch workflow running - details

<p align="center">
    <img src="./assets/images/steps-running.png" alt="alt text" height="600"/>
</p>

---

## Packaging exercise — result

- Artifacts built & uploaded automatically

<p align="center">
    <img src="./assets/images/package-result.png" alt="package-result" width="700"/>
</p>

---

## More job features

```yaml
strategy:
  matrix:
    os: [ubuntu-latest, macos-latest, windows-latest]
needs: [build]
```

- `strategy` and `needs` help with matrices and dependencies

---

## Release flow (automatic packaging and upload assets to release)

The repository includes a workflow that automatically builds packages for multiple OS/Python combinations and attaches the build artifacts to a GitHub Release.

- `package-matrix.yml` — runs packaging on `ubuntu`, `macos`, and `windows` using a matrix and attaches the build artifacts to the release when the workflow is triggered by the `release` event.

---

## Release permission — Settings

- Wait, your workflow need some permissions to upload assets to release
- Grant "Read and write" to allow uploading release assets

<p align="center">
    <img src="./assets/images/setting-route.png" alt="setting-route" height="500"/>
</p>

---

## Release permission — Set workflow permissions

- Choose "Read and write permissions" and save

![read-and-write](./assets/images/read-and-write.png)

---

## Create Release — Start

![create-release-btn](./assets/images/create-release-btn.png)

- Click to start a new release

---

## Create Release — Tag & Title

![type-tag](./assets/images/type-tag.png)

- Add tag (e.g., `v1.0.0`) and title

---

## Publish Release

- Click to publish; workflows can auto-run on release

![publish-release](./assets/images/publish-release.png)

---

## Auto-build

![auto-build](./assets/images/auto-build.png)

- Click the Release title in Actions tab to see build progress

---

## Matrix success & artifacts

- Check artifacts and success across OSes

![matrix-succeed](./assets/images/matrix-succeed.png)

---

## Release Page & Artifacts

- Build artifacts are attached to the release

![release-page-final](./assets/images/release-page-final.png)

---

## Best Practices

- Keep CI jobs small
- Cache dependencies for speed
- Use marketplace actions for common tasks

---

## Popular Actions

- `actions/checkout` — checkout the repository
- `actions/setup-python` — set up Python
- `actions/setup-node` — set up Node.js
- `actions/setup-go` — set up Go
- `actions/setup-dotnet` — set up .NET
- `actions/upload-artifact` — upload artifacts
- `actions/cache` — cache dependencies
- `pytest` and `autopep8` for testing and automatic formatting

---

## Q&A ;)

Any questions so far?

Ask what you want to do with GitHub Actions!

---

## Useful Links

- GitHub Actions docs: https://docs.github.com/en/actions

---

## The End

Thank you!
