---
marp: true
theme: default
paginate: true
html: true
mermaid: true
header: 'Docker Compose Workshop'
footer: '@CompPsyUnion · Weekly Session'
backgroundColor: '#f6f7fb'
---

<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre.mermaid").forEach((el) => {
    const code = el.textContent.trim();
    const container = document.createElement("div");
    container.classList.add("mermaid");
    container.textContent = code;
    el.replaceWith(container);
  });
  mermaid.init();
});
</script>

<style>
.columns {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}
.column {
  flex: 1;
  min-width: 0;
}
.column pre {
  margin-top: 0;
}
.column ul,
.column ol {
  margin-top: 0;
}
.column img {
  max-width: 100%;
}
section img {
  display: block;
  margin: 0 auto;
}
section li {
  line-height: 1.8;
}
section h2,
section h3,
section h4 {
  line-height: 1.4;
}
section p,
section strong,
section em {
  line-height: 1.6;
}
.mermaid {
  text-align: center;
}
</style>

<!-- _class: lead -->

# Docker Compose

**Elegant Orchestration from Single to Multi-Container Applications**

_Managing Multi-Container Applications with Declarative Configuration_

---

## Background: Single Container is Fine

**You're already familiar with:**

```bash
docker build
docker run
docker exec
docker network
docker volume
```

**But when your application needs:**

- Web service + Database + Cache
- Multiple interconnected containers

**Things get complicated...**

---

## Problem 1: Web + Database

**Traditional approach:**

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

---

## Pain Points

1. **Commands are too long** — hard to remember and maintain
2. **Startup order** — database might not be ready
3. **Network/Container names** — need manual management

4. **Environment switching** — test/production configs difficult
5. **State recovery** — difficult after restart

---

## A possible solution: Write a shell script

```bash
#!/bin/bash
# start.sh
docker run -d --name mysql \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -v mysql_data:/var/lib/mysql \
  mysql:8

docker run -d --name web \
  -p 8080:8080 \
  --link mysql:mysql \
  my-web-app
```

```bash
chmod +x start.sh
./start.sh
```

---

## And what about stopping, restarting, pulling new images?

```bash
# One bash script per action?
./stop.sh
./restart.sh
./pull.sh

# ... and so on
```

And you still need to manage networks, volumes, environment variables manually in these **scripts**

Still, you have no control over startup order, **ways to ensure database is ready before web starts** would be far more complex.

---

## Even worse, what about running this on another system?

```pwsh
# PowerShell on Windows
./start.ps1
./stop.ps1
./restart.ps1
./pull.ps1
```

---

## Solution 2

1. **Write a YAML file to describe "the entire application system"**
2. **Start with a python program to parse the config file into docker commands**
3. Run the program with params to specify your actions upon your application system (start/stop/restart/pull)

**Core Concepts:**

- **Service** is the core abstraction
- Handles: networks, dependency relations, lifecycle, unified start/stop

---

```yaml
# compose.yml
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

---

## One Command to Start

```bash
# In any folder with compose.yml
docker-compose up -d
```

**Compose automatically:**

- Creates a default network
- Uses service names as DNS
- Creates volumes
- Starts in dependency order

---

## Congrats! You've just invented Docker Compose v1! ;)

> Tips:
>
> - The actual implementation of Docker Compose is more complex and robust, with many features and edge cases handled
> - Docker Compose v2 is a complete rewrite in Go, with better performance and integration with Docker CLI
>
> ```bash
> # docker compose v1
> docker-compose up -d
>
> # docker compose v2 (recommended)
> docker compose up -d
> ```

---

## Problem 2: Container Communication

**Traditional approach:**

```bash
docker network create mynet
docker run --network mynet ...
```

**Pain points:**

- Network conflicts between projects
- Container IP changes
- DNS needs manual handling

---

## Compose's Solution

**Each project gets an isolated network**

- Network name: `projectname_default`
- Service name = DNS name

**Example:**

In `web` service, access database via `mysql:3306`

---

## Problem 3: Too Much Configuration?

**Traditional approach:**

```bash
docker run -e DB_HOST=xxx -e REDIS_HOST=xxx -e API_KEY=xxx ...
```

**Pain points:**

- Environment variables scattered
- Inconsistent between environments
- Not version-controlled

---

## Compose Solution

**Write configuration into files:**

```yaml
environment:
  DB_HOST: mysql
  DB_USER: root
```

**Or use `.env` file:**

```yaml
env_file:
  - .env
```

---

## Problem 4: Auto-Rebuild During Development?

**Compose supports `build` in configuration:**

```yaml
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8080:8080"
```

**Rebuild and start:**

```bash
docker compose up --build
```

---

## Problem 5: Multiple Environments?

**Multiple file override:**

```bash
docker-compose.yml         # Base configuration
docker-compose.prod.yml    # Production override
```

**Production startup:**

```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

---

## Problem 6: Service Dependencies

**`depends_on` only guarantees startup order, not readiness**

**Use `healthcheck` for true readiness:**

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

<div class="columns">
<div class="column">

**Suitable for:**

- Local development
- Small systems
- Single-machine deployment
- CI integration

</div>
<div class="column">

**Not suitable for:**

- Large-scale clusters
- (That's Kubernetes' domain)

</div>
</div>

---

<!-- _class: lead -->

# Hands-On Practice

**Let's experience Docker Compose in action!**

---

## Step 1: Create Your Repository

1. Visit [docker-tutorial](https://github.com/CompPsyUnion/docker-tutorial)
2. Click "Use this template" → "Create a new repository"

![h:400](https://maas-log-prod.cn-wlcb.ufileos.com/anthropic/1a7bfde7-9714-43c4-b61a-00d6c63e3ba7/create-repo-btn.png?UCloudPublicKey=TOKEN_e15ba47a-d098-4fbd-9afc-a0dcf0e4e621&Expires=1772464696&Signature=R2+0IZsTDrkqOZkz9GoqQjmp7f4=)

---

## Step 2: Open in Codespaces

1. Navigate to your newly created repository
2. Click the green "Code" button
3. Select "Codespaces" → "Create codespace on main"

**Benefits:**

- Cloud development environment
- No local Docker installation needed

---

## Step 3: Explore Project Structure

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

---

## Step 4: Start with Docker Compose

In the Codespaces terminal:

```bash
docker compose up -d
```

**Compose will:**

- Build required images
- Create networks
- Start all services in dependency order

---

## Step 5: Verify Services

**Check service status:**

```bash
docker compose ps
```

**View logs:**

```bash
docker compose logs -f
```

---

## Step 6: Port Forwarding

In Codespaces:

1. Click "Ports" tab in bottom panel
2. See forwarded ports list
3. Click link to access your application

**To share publicly:**

Right-click port → "Port Visibility" → "Public"

---

## Step 7: Cleanup

**Stop and remove containers:**

```bash
docker compose down
```

**Also remove volumes:**

```bash
docker compose down -v
```

---

<!-- _class: lead -->

# Summary

---

## Key Insights

1. **Compose is Not New Technology**

   It simply structures a bunch of `docker run` commands

2. **Only Three Core Abstractions**

   `services` · `networks` · `volumes`

3. **Declarative Configuration**

   Write down the state you want, Compose makes it happen

---

## Reference Resources

**Official Documentation:**

- [Docker Compose Official Docs](https://docs.docker.com/compose/)
- [Compose File Format Reference](https://docs.docker.com/compose/compose-file/)
- [Docker Official Getting Started](https://docs.docker.com/get-started/)

**Related Links:**

- [This Workshop Repository](https://github.com/CompPsyUnion/2526-weekly-session)
- [Docker Tutorial Template](https://github.com/CompPsyUnion/docker-tutorial)

---

<!-- _class: lead -->

# Thank You

**Questions?**

Feel free to ask during the session or discuss in our community
