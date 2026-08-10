# Introduction to GitHub Actions: Automate Your Workflow

![overview](./assets/images/overview.jpg)

## Contents

1. Welcome & Context (2 min)
2. What Is GitHub Actions? (5 min)
3. Core Concepts (5 min)
4. Demo: Reading a Simple Workflow (8 min)
5. Hands-On Practice (20 min)
6. Useful & Popular Actions, Best Practices and Q&A (10 min)

---

## Welcome & Context

This section introduces basic concepts and the practical goals for this workshop: create automations with GitHub Actions to test, lint, and package Python projects. We focus on a small demo and an extendable template repository so you can apply these workflows to your own projects.

## What Is GitHub Actions?

GitHub Actions is a platform that lets you automate your development workflow. Key features include:

- Workflows: YAML files stored in `.github/workflows/` that define automated processes.
- Jobs: independent sets of steps that run in a virtual environment.
- Steps: shell commands or actions (reusable building blocks) executed inside a job.

## Core Concepts

- CI: Continuous Integration automates testing and validation of code changes.
- CD: Continuous Deployment automates releasing code to production.
- Runners: virtual machines provided by GitHub or self-hosted runners where job steps run.
- Events: trigger workflows on `push`, `pull_request`, `release`, `schedule`, or manual `workflow_dispatch`.
- Matrix strategy: run jobs across multiple OSes and Python versions.
- Actions marketplace: pre-built actions for common tasks (setup-python, cache, upload-artifact, etc.).

## Demo: Reading a Simple Workflow + Hands-On Practice

From now on, you can move to our [tutorial repository](https://github.com/CompPsyUnion/github-action-tutorial) and follow along the readme in the tutorial repo. Return here afterwards for the final sections.

## Q&A and Best Practices

- Keep each CI job small and focused (test, lint, package, publish)
- Cache dependency installs where sensible to speed up workflows
- Use `actions/cache` for pip cache (pip cache is default for ephemeral runners, but caching wheels and pip cache can help)
- Use workflow_dispatch for manual releases

---

## Popular Actions and Links

- `actions/checkout` — checkout the repository
- `actions/setup-python` — set up Python
- `actions/setup-node` — set up Node.js
- `actions/setup-go` — set up Go
- `actions/setup-dotnet` — set up .NET
- `actions/upload-artifact` — upload artifacts
- `actions/cache` — cache dependencies
- `pytest` and `autopep8` for testing and automatic formatting

## Useful Links

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
