一、为什么已经会 Docker 还需要 Docker Compose？

假设你已经熟悉：

docker build
docker run
docker exec
docker network
docker volume

单容器没有问题。
问题从多个容器开始。

⸻

二、问题 1：我有一个 Web + 数据库

场景

你写了一个 Web 服务，需要连接 MySQL。

你会这样启动：

docker run -d --name mysql \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -v mysql_data:/var/lib/mysql \
  mysql:8

docker run -d --name web \
  -p 8080:8080 \
  --link mysql:mysql \
  my-web-app

⸻

朴素解决方案
 • 手动建网络
 • 手动管理容器顺序
 • 手动管理环境变量
 • 手动挂载 volume

⸻

痛点

 1. 命令极长
 2. 启动顺序不可控
 3. 网络名、容器名要自己维护
 4. 换环境（测试/生产）难管理
 5. 重启后状态难以恢复

⸻

Docker Compose 的思路

用一个 YAML 文件描述“整个应用系统”，而不是一个容器。

核心思想：
 • 服务（service）是核心抽象
 • 每个服务本质是一个 docker run 的声明式版本
 • Compose 负责：
 • 建网络
 • 管理容器依赖
 • 管理生命周期
 • 统一启动/停止

⸻

Compose 实现

version: "3.9"

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

启动：

docker compose up -d

Compose 自动：
 • 创建默认 network
 • 把服务名作为 DNS（web 可以用 mysql 访问）
 • 创建 volume
 • 按依赖顺序启动

⸻

三、问题 2：容器之间怎么通信？

你原来的做法

docker network create mynet
docker run --network mynet ...

你要记住：
 • 网络名
 • 子网
 • IP 分配

⸻

痛点
 • 不同项目网络冲突
 • 容器 IP 变动
 • DNS 需要自己处理

⸻

Compose 思路

每个 compose 项目自带一个隔离网络

默认规则：

项目名_default

服务名即 DNS 名称。

例如：

web -> mysql

访问地址直接：

mysql:3306

⸻

Compose 网络显式写法（进阶）

services:
  web:
    networks:
      - backend

  mysql:
    networks:
      - backend

networks:
  backend:

⸻

四、问题 3：配置太多怎么办？

传统方式

你可能写：

docker run -e DB_HOST=xxx -e REDIS_HOST=xxx ...

⸻

痛点
 • 环境变量散落
 • 生产测试不一致
 • 不方便版本控制

⸻

Compose 解决思路

把配置写进文件，可版本管理。

方式 1：environment

environment:
  DB_HOST: mysql
  DB_USER: root

方式 2：env_file

env_file:

- .env

.env：

DB_HOST=mysql
DB_USER=root

⸻

五、问题 4：开发时想自动重建怎么办？

你原来的方式

docker build .
docker stop
docker rm
docker run ...

⸻

痛点
 • 操作步骤多
 • 容器频繁删除重建
 • 本地开发不方便

⸻

Compose 思路

支持 build 直接写进配置：

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8080:8080"

启动：

docker compose up --build

Compose 自动：
 • 发现代码变动
 • 重建镜像
 • 重新创建容器

⸻

六、问题 5：多环境怎么办？

你会遇到：
 • dev
 • staging
 • production

⸻

传统做法

复制多个 run 脚本。

⸻

Compose 解决方案

多文件覆盖

docker-compose.yml
docker-compose.prod.yml

生产启动：

docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d

⸻

思路本质
 • 基础配置写通用
 • 生产覆盖资源限制、镜像 tag 等

⸻

七、问题 6：服务依赖真的准备好了吗？

depends_on 只保证启动顺序，不保证服务 ready。

⸻

更严谨的方式：healthcheck

mysql:
  image: mysql:8
  healthcheck:
    test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
    interval: 5s
    retries: 5

web 等待健康状态：

depends_on:
  mysql:
    condition: service_healthy

⸻

八、问题 7：资源限制如何做？

你可能会问：

如何限制 CPU / 内存？

deploy:
  resources:
    limits:
      cpus: "0.5"
      memory: 512M

注意：
 • deploy 在 Swarm 下才生效
 • 普通 compose 用：

mem_limit: 512m
cpus: 0.5

⸻

九、Compose 的核心设计哲学

Docker CLI Docker Compose
面向容器 面向应用
命令驱动 声明式驱动
临时启动 生命周期管理
手动编排 自动编排

⸻

十、一个完整的三层架构示例

version: "3.9"

services:
  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend

  backend:
    build: ./backend
    environment:
      DB_HOST: mysql
      REDIS_HOST: redis
    depends_on:
      - mysql
      - redis

  mysql:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: 123456
    volumes:
      - mysql_data:/var/lib/mysql

  redis:
    image: redis:7

volumes:
  mysql_data:

启动：

docker compose up -d

停止：

docker compose down

清理 volume：

docker compose down -v

⸻

十一、总结（关键认知）

1️⃣ Compose 不是新技术

它只是：

把一堆 docker run 命令结构化。

⸻

2️⃣ 核心抽象只有三个
 • services
 • networks
 • volumes

⸻

3️⃣ 你应该什么时候用 Compose？

✔ 本地开发
✔ 小型系统
✔ 单机部署
✔ CI 集成

不适合：

✘ 大规模集群（那是 Kubernetes 的领域）
