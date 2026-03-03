# Docker Compose: Elegant Orchestration from Single to Multi-Container Applications

This workshop will help you understand why you need Docker Compose and how to use it to elegantly manage multi-container applications. If you're already familiar with basic Docker commands (`docker build`, `docker run`, `docker exec`, etc.) but feel confused when facing multi-container scenarios, this workshop is exactly for you.

## Prerequisites

Before attending this workshop, please ensure you have:

- Familiarity with basic Docker commands (`build`, `run`, `exec`, `network`, `volume`)
- Understanding of basic concepts: containers, images, networks, and volumes

## Background: Single Container is Fine, Problems Start with Multiple Containers

Assuming you're already familiar with these commands:

```bash
docker build
docker run
docker exec
docker network
docker volume
```

When you're running a single container, everything works well. But when your application needs a web service + database + cache, things start to get complicated.

### Problem 1: Web + Database Scenario

You've written a web service that needs to connect to MySQL. You would start it like this:

```bash
docker run -d --name mysql \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -v mysql_data:/var/lib/mysql \
  mysql:8

docker run -d --name web \
  -p 8080:8080 \
  --link mysql:mysql \
  my-web-app
```

**Pain Points of the Naive Solution:**

1. Extremely long commands, hard to remember and maintain
2. Uncontrollable startup order (database might not be ready)
3. Network names and container names need manual management
4. Configuration difficult to manage across environments (test/production)
5. State difficult to restore after restart

### Docker Compose's Approach

Use a YAML file to describe "the entire application system" rather than a single container.

**Core Concepts:**

- **Service** is the core abstraction
- Each service is essentially a declarative version of `docker run`
- Compose automatically handles creating networks, managing container dependencies, managing lifecycle, and unified start/stop

**Compose Implementation:**

```yaml
services:
  mysql:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: 123456
    volumes:
      - mysql_data:/var/lib/mysql

  web:
    image: my-web-app
    ports:
      - "8080:8080"
    depends_on:
      - mysql

volumes:
  mysql_data:
```

Start with a single command:

```bash
docker compose up -d
```

---

## Problem 2: How Do Containers Communicate?

### Traditional Approach

```bash
docker network create mynet
docker run --network mynet ...
```

**Pain Points:**

- Network conflicts between different projects
- Container IP changes cause connection failures
- DNS needs manual handling

### Compose's Solution

Each Compose project comes with an isolated network. Service names become DNS names - in the `web` service, you can directly access the database via `mysql:3306`.

---

## Problem 3: Too Much Configuration?

### Traditionally using `docker run` with Environment Variables

```bash
docker run -e DB_HOST=xxx -e REDIS_HOST=xxx -e API_KEY=xxx ...
```

**Pain Points:**

- Environment variables scattered across command line
- Inconsistent configuration between production/test environments
- Not convenient for version control

### Compose Solution

Write configuration into files. Supports `environment` for direct definition or `env_file` to reference `.env` files.

---

## Problem 4: Auto-Rebuild During Development?

### Using `docker run` requires manual rebuilds

```bash
docker build -t my-web-app:v1 .
docker run ...
```

### Solution with Compose supports `build` directly in configuration

Support `build` directly in configuration:

```yaml
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8080:8080"
```

Start with rebuild: `docker compose up --build`

---

## Problem 5: Multiple Environments?

**Multiple File Override:**

```bash
docker-compose.yml         # Base configuration
docker-compose.prod.yml    # Production override
```

Production startup: `docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d`

---

## Problem 6: Is the Service Dependency Really Ready?

`depends_on` only guarantees startup order, not that the service is actually ready. Use `healthcheck` to ensure services are truly available:

```yaml
mysql:
  image: mysql:8
  healthcheck:
    test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
    interval: 5s
    retries: 5

web:
  depends_on:
    mysql:
      condition: service_healthy
```

---

## Core Design Philosophy

| Docker CLI | Docker Compose |
|------------|----------------|
| Container-oriented | Application-oriented |
| Command-driven | Declarative-driven |
| Temporary startup | Lifecycle management |
| Manual orchestration | Automatic orchestration |

---

## When to Use Compose?

**Suitable for:**

- Local development
- Small systems
- Single-machine deployment
- CI integration

**Not suitable for:**

- Large-scale clusters (that's Kubernetes' domain)

---

## Hands-On Practice

Now let's experience the power of Docker Compose through hands-on practice. We'll use the [docker-tutorial](https://github.com/CompPsyUnion/docker-tutorial) template repository.

### Step 1: Create Your Own Repository

1. Visit the [docker-tutorial repository](https://github.com/CompPsyUnion/docker-tutorial)
2. Click "Use this template" → "Create a new repository"

   ![create-repo-btn](https://maas-log-prod.cn-wlcb.ufileos.com/anthropic/1a7bfde7-9714-43c4-b61a-00d6c63e3ba7/create-repo-btn.png?UCloudPublicKey=TOKEN_e15ba47a-d098-4fbd-9afc-a0dcf0e4e621&Expires=1772464696&Signature=R2+0IZsTDrkqOZkz9GoqQjmp7f4=)

3. Give your repository a name (recommended to be Public), then click "Create repository"

### Step 2: Open in Codespaces

1. Navigate to your newly created repository
2. Click the green "Code" button
3. Select "Codespaces" → "Create codespace on main"

This gives you a cloud development environment without needing Docker installed locally.

### Step 3: Explore Project Structure

In Codespaces, you'll see the following files:

```text
.
├── docker-compose.yml    # Docker Compose configuration
├── frontend/             # Frontend service
│   ├── Dockerfile
│   └── ...
├── backend/              # Backend service
│   ├── Dockerfile
│   └── ...
└── README.md
```

### Step 4: Start the Project with Docker Compose

In the Codespaces terminal, run:

```bash
docker compose up -d
```

Compose will automatically:

- Build required images
- Create networks
- Start all services in dependency order

### Step 5: Verify Services

Check service status:

```bash
docker compose ps
```

View logs:

```bash
docker compose logs -f
```

### Step 6: Port Forwarding and Public Access

In Codespaces, after services start:

1. Click the "Ports" tab in the bottom panel
2. You'll see a list of forwarded ports
3. Click the link corresponding to a port to access your application in the browser

To share publicly, right-click the port and select "Port Visibility" → "Public".

### Step 7: Cleanup

When finished, stop and cleanup:

```bash
docker compose down
```

To also remove volumes:

```bash
docker compose down -v
```

---

## Summary

### Key Insights

1. **Compose is Not New Technology** — It simply structures a bunch of `docker run` commands

2. **Only Three Core Abstractions**: `services`, `networks`, `volumes`

3. **Declarative Configuration** — Write down the state you want, Compose makes it happen

---

## Reference Resources

**Official Documentation:**

- [Docker Compose Official Docs](https://docs.docker.com/compose/)
- [Compose File Format Reference](https://docs.docker.com/compose/compose-file/)
- [Docker Official Getting Started](https://docs.docker.com/get-started/)

**Related Links:**

- [This Workshop Repository](https://github.com/CompPsyUnion/2526-weekly-session)
- [Docker Tutorial Template Repository](https://github.com/CompPsyUnion/docker-tutorial)
- [Docker Desktop Download](https://www.docker.com/products/docker-desktop/)
