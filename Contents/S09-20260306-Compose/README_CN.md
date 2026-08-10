# Docker Compose：从单容器到多容器应用的优雅编排

本次工作坊将帮助你理解为什么需要 Docker Compose，以及如何使用它来优雅地管理多容器应用。如果你已经熟悉 Docker 基础命令（`docker build`、`docker run`、`docker exec` 等），但面对多容器场景时感到困惑，那么这次工作坊正是为你准备的。

## 前置要求

在参加本次工作坊之前，请确保你已经：

- 熟悉基本的 Docker 命令（`build`、`run`、`exec`、`network`、`volume`）
- 了解容器、镜像、网络和卷的基本概念

## 背景：单容器没问题，问题从多容器开始

假设你已经熟悉以下命令：

```bash
docker build
docker run
docker exec
docker network
docker volume
```

当你只运行单个容器时，一切都很好。但当你的应用需要 Web 服务 + 数据库 + 缓存时，事情开始变得复杂。

### 问题 1：Web + 数据库的场景

你写了一个 Web 服务，需要连接 MySQL。你会这样启动：

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

**朴素解决方案的痛点：**

1. 命令极长，难以记忆和维护
2. 启动顺序不可控（数据库可能还没准备好）
3. 网络名、容器名需要自己维护
4. 换环境（测试/生产）时配置难以管理
5. 重启后状态难以恢复

### Docker Compose 的思路

用一个 YAML 文件描述"整个应用系统"，而不是一个容器。

**核心思想：**

- **服务（Service）** 是核心抽象
- 每个服务本质是一个 `docker run` 的声明式版本
- Compose 负责自动创建网络、管理容器依赖、管理生命周期、统一启动/停止

**Compose 实现：**

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

启动只需一条命令：

```bash
docker compose up -d
```

---

## 问题 2：容器之间怎么通信？

### 传统做法

```bash
docker network create mynet
docker run --network mynet ...
```

**痛点：**

- 不同项目网络可能冲突
- 容器 IP 变动导致连接失败
- DNS 需要自己处理

### Compose 的解决方案

每个 Compose 项目自带一个隔离网络。服务名即 DNS 名称，在 `web` 服务中可以直接用 `mysql:3306` 访问数据库。

---

## 问题 3：配置太多怎么办？

### 传统方式

```bash
docker run -e DB_HOST=xxx -e REDIS_HOST=xxx -e API_KEY=xxx ...
```

**痛点：**

- 环境变量散落在命令行
- 生产/测试环境配置不一致
- 不方便版本控制

### Compose 解决方案

把配置写进文件，支持 `environment` 直接定义或使用 `env_file` 引用 `.env` 文件。

---

## 问题 4：开发时想自动重新构建怎么办？

### Compose 解决方式

支持 `build` 直接写进配置：

```yaml
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8080:8080"
```

启动并重建：`docker compose up --build`

---

## 问题 5：多环境怎么办？

**多文件覆盖：**

```bash
docker-compose.yml         # 基础配置
docker-compose.prod.yml    # 生产环境覆盖
```

生产环境启动：`docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d`

---

## 问题 6：服务依赖真的准备好了吗？

`depends_on` 只保证启动顺序，不保证服务已经 ready。使用 `healthcheck` 确保服务真正可用：

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

## 核心设计哲学

| Docker CLI | Docker Compose |
|------------|----------------|
| 面向容器 | 面向应用 |
| 命令驱动 | 声明式驱动 |
| 临时启动 | 生命周期管理 |
| 手动编排 | 自动编排 |

---

## 什么时候用 Compose？

**适合：**

- 本地开发
- 小型系统
- 单机部署
- CI 集成

**不适合：**

- 大规模集群（那是 Kubernetes 的领域）

---

## 动手实践

现在让我们通过实际操作来体验 Docker Compose 的魅力。我们将使用 [docker-tutorial](https://github.com/CompPsyUnion/docker-tutorial) 模板仓库来完成练习。

### 第一步：创建你自己的仓库

1. 访问 [docker-tutorial 仓库](https://github.com/CompPsyUnion/docker-tutorial)
2. 点击 "Use this template" → "Create a new repository"

   ![create-repo-btn](https://maas-log-prod.cn-wlcb.ufileos.com/anthropic/1a7bfde7-9714-43c4-b61a-00d6c63e3ba7/create-repo-btn.png?UCloudPublicKey=TOKEN_e15ba47a-d098-4fbd-9afc-a0dcf0e4e621&Expires=1772464696&Signature=R2+0IZsTDrkqOZkz9GoqQjmp7f4=)

3. 为你的仓库命名（建议设为 Public），然后点击 "Create repository"

### 第二步：在 Codespaces 中打开

1. 进入你刚创建的仓库
2. 点击绿色的 "Code" 按钮
3. 选择 "Codespaces" → "Create codespace on main"

这样你就可以在云端开发环境中直接操作，无需本地安装 Docker。

### 第三步：探索项目结构

在 Codespaces 中，你会看到以下文件：

```text
.
├── docker-compose.yml    # Docker Compose 配置文件
├── frontend/             # 前端服务
│   ├── Dockerfile
│   └── ...
├── backend/              # 后端服务
│   ├── Dockerfile
│   └── ...
└── README.md
```

### 第四步：使用 Docker Compose 启动项目

在 Codespaces 的终端中运行：

```bash
docker compose up -d
```

Compose 将自动：

- 构建所需镜像
- 创建网络
- 按依赖顺序启动所有服务

### 第五步：验证服务

查看服务状态：

```bash
docker compose ps
```

查看日志：

```bash
docker compose logs -f
```

### 第六步：端口转发与公网访问

在 Codespaces 中，当服务启动后：

1. 点击底部面板的 "Ports" 标签
2. 你会看到已转发的端口列表
3. 点击端口对应的链接，即可在浏览器中访问你的应用

如果需要公开分享，可以右键端口选择 "Port Visibility" → "Public"。

### 第七步：清理

完成后，停止并清理：

```bash
docker compose down
```

如需同时清理 volume：

```bash
docker compose down -v
```

---

## 总结

### 关键认知

1. **Compose 不是新技术** — 它只是把一堆 `docker run` 命令结构化了

2. **核心抽象只有三个**：`services`、`networks`、`volumes`

3. **声明式配置** — 写下你想要的状态，Compose 负责实现

---

## 参考资源

**官方文档：**

- [Docker Compose 官方文档](https://docs.docker.com/compose/)
- [Compose 文件格式参考](https://docs.docker.com/compose/compose-file/)
- [Docker 官方入门教程](https://docs.docker.com/get-started/)

**相关链接：**

- [本次工作坊仓库](https://github.com/CompPsyUnion/2526-weekly-session)
- [Docker Tutorial 模板仓库](https://github.com/CompPsyUnion/docker-tutorial)
- [Docker Desktop 下载](https://www.docker.com/products/docker-desktop/)
