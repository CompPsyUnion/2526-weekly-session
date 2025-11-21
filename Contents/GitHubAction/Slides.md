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
- Q&A

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

- Automated processes defined by config files under this folder in your repo:

  ```text
  .github/workflows/
  ```

- Usually we define one workflow in one file, e.g., `put-an-elephant-in-a-fridge.yml`
- Each **workflow** is served as an independent automation
- **Jobs** under one **workflow** are triggered by the same **events**

---

## Events

- When to run workflows. like:

  > ```yaml
  > on:
  >   when-elephant-is-not-in-fridge:
  >   # joke, this does not exist in real GitHub Actions
  > ```

- Trigger workflows in GitHub:
  - `push`, `pull_request`, `release`, `schedule`, `workflow_dispatch`

---

## Jobs

- Independent units of work that run in a runner

```yaml
jobs:
  bring-elephant-indoor:
    runs-on: zoo
    # ...

  prepare-fridge:
    runs-on: indoor
    # ...

  send-the-elephant-into-the-fridge:
    runs-on: indoor
    # ...
```

---

## Runners

- Where do jobs run

  ```yaml
  runs-on: campus
  ```

- For GitHub Action, this is virtual environments for jobs, also defined in this way:

  ```yaml
  runs-on: windows-latest
  ```

---

## Steps

- Steps are `uses` or `run` commands, executed sequentially inside a job

```yaml
steps:
  - name: Open the fridge
    uses: pre-defined/open-fridge-action@v1

  - name: put the elephant in the fridge
    run: mv elephant.zip /fridge

  - name: Close the fridge
    uses: pre-defined/close-fridge-action@v1
```

---

## Matrix strategy

```yaml
strategy:
  matrix:
    places: [room01, room02, room03]
    fridges: [Xiaomi, SIEMENS]
```

- Run jobs across rooms/brands of fridges combos (2x3=6 jobs here)

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

> If you want to install python manually, you may use the following step:
>
> ```yaml
> - name: Set up Python Manually
>   run: |
>     sudo apt-get update
>     sudo apt-get install -y python3.11 python3.11-venv python3.11-dev
> ```
>
> That's why we use `actions/setup-python`, simple and stable.

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
- `PYTHONPATH` environment variable ensures `app/` is importable

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

<p align="center">
    <img src="./assets/images/running.png" alt="running" width="750"/>
</p>

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

- `strategy` and `needs` help with matrices and dependencies

  ```yaml
  strategy:
    matrix:
      os: [ubuntu-latest, macos-latest, windows-latest]
  needs: [build]
  ```

- Define environment variables for steps

  ```yaml
  env:
    PACKAGE_NAME: hello
  ```

- Use `if:` to conditionally run steps or jobs

  ```yaml
  if: github.event_name == 'push'
  ```

---

- Use `outputs` to pass data between jobs

  ```yaml
  outputs:
    package-path: ${{ steps.package.outputs.path }}
  ```

- Use `secrets` to store sensitive data

  ```yaml
  secrets:
    API_KEY: ${{ secrets.API_KEY }}
  ```

- Use `timeout-minutes` to limit job duration

  ```yaml
  timeout-minutes: 10
  ```

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

- Add tag (e.g., `v1.0.0`) and title

<p align="center">
    <img src="./assets/images/type-tag.png" alt="type-tag" width="700"/>
</p>

---

## Publish Release

- Use the tag and add a title & description, click to publish

<p align="center">
    <img src="./assets/images/publish-release.png" alt="publish-release" width="800"/>
</p>

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

## Useful Link

- GitHub Actions docs: https://docs.github.com/en/actions

---

## Q&A ;)

Any questions so far?

Ask what you want to do with GitHub Actions!

---

## The End

Thank you!
