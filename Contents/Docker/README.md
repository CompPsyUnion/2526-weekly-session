# Docker简单入门

---

[English Version](README-en.md)

---

这次的周常中将会介绍Docker这一开发必备的工具。让你能够学会通过Docker来构建、分发和运行容器化的应用，以此来防止由于环境不统一所导致的应用运行问题。

![Docker展示图](./image/image.png)

## 在本次周常中，你将学习到

- ### Docker是什么

- ### Docker的核心功能

- ### Docker的历史背景

- ### Docker的优势

- ### Docker的架构

- ### Docker的工作流程

- ### Docker基本操作

- ### Docker网络相关操作

---

## 准备

本次周常中，如果你自己能够在本机上安装Docker，那是再好不过了

如果没有，你也可以在本次周常中通过Github上的codespaces来进行学习

### 安装Docker Desktop

Docker 可以在 Windows、macOS 和 Linux 上运行。

你可以从 Docker 官方网站下载适用于你操作系统的 Docker 安装程序。

### Linux（以ubuntu22.04为例）

```bash
# 下载并执行官方安装脚本
curl -fsSL https://get.docker.com | sudo bash

# 把当前用户加入 docker 组（免 sudo）
sudo usermod -aG docker $USER

# 注销并重新登录生效
newgrp docker
```

### Windows

<https://www.docker.com/products/docker-desktop/> → Download for Windows

运行安装程序，勾选 Use WSL 2 instead of Hyper-V

完成后重启电脑即可

### macOS

官网下载：<https://www.docker.com/products/docker-desktop/>

---

安装完成后，你可以在命令行中运行 docker 命令来验证安装是否成功。

```bash
docker --version
```

如果出现版本信息，则说明安装成功

---

如果你不想要在本地安装Docker，你也可以在codespaces中进行学习，

请直接到如下仓库中：

<https://github.com/CompPsyUnion/docker-tutorial>

点击Use this template → Open in a codespaces

![use_this_template](./image/guide01.png)

进入如下界面：

![codespaces界面](./image/guide02.png)

随后就可以在codespaces中进行学习了

---

## Docker相关背景知识

简单的来说，Docker是一个比较轻量的容器化技术和平台，用于解决编程时常有的环境问题

它通过使用一个container，把应用，依赖和用户态环境包装到一起。

随后如果需要在另一台电脑上运行这个应用，只需要运行这个container即可，而不需要关心这个应用的环境问题。

而今天，我们要学习的便是如何运用Docker来构建一个container，以及如何利用这个container来运行我们的应用。

---

## Docker的起源

dotCloud 是一个基于云的应用程序平台，它允许开发人员在云端部署和管理应用程序。

Hykes 注意到，在 dotCloud 上运行应用程序时，不同应用需要不同的依赖和运行环境，而这些环境在同一系统中往往难以共存。

这导致了环境配置的问题，因为不同的应用程序可能需要不同的环境。

为了解决这个问题，Hykes 开始思考如何将应用程序和其环境打包在一起，以便在任何地方都可以运行。

进而，Hykes 决定创建一个新的工具，用于打包应用程序和其环境。

Docker就这样产生了

---

## Docker的优势

Docker能够在一众容器化技术中脱颖而出，主要有以下几个优势：

- 轻量级与快速
- 可移植性
- 隔离性
- 可扩展性

和虚拟机相比：

| 特性 | Docker | 虚拟机 |
| :--- | :--- | :--- |
| 资源占用 | 轻量级 | 重量级 |
| 启动速度 | 快速 | 缓慢 |
| 可移植性 | 高 | 低 |
| 隔离性 | 进程级隔离 | 完全隔离 |
| 可扩展性 | 高 | 有限 |

这些优势使得Docker在开发者中得到了广泛的应用和认可。

---

Docker的这些优势也一定程度上得益于它的架构设计。

## Docker的架构

Docker可以分为以下几个部分，它们共同构成了Docker的完整生态系统：

- **Docker Client**：用户与Docker交互的命令行工具，负责接收用户命令并发送给Docker Daemon执行
- **Docker Daemon**：后台运行的服务进程，负责处理Docker Client的指令，管理镜像、容器等资源
- **Docker Registry**：镜像仓库，负责存储和分发Docker镜像，类似于GitHub，最常用的是官方的Docker Hub
- **Docker Objects**：包括镜像(Images)、容器(Containers)、网络(Networks)、数据卷(Volumes)等核心对象

Docker采用客户端-服务器架构，Client通过REST API与Daemon通信，可以在本地或远程操作Docker。

---
讲完了架构，接下来我们将详细介绍Docker的工作流程。

## Docker的工作流程

Docker的工作流主要如下所示：

1. **构建镜像**：开发者通过编写Dockerfile来定义应用程序的环境和依赖，然后使用`docker build`命令构建镜像。
2. **分发镜像**：构建好的镜像可以上传到Docker Registry，供其他用户使用。
3. **运行容器**：用户可以从Registry拉取镜像，然后使用`docker run`命令运行容器。
4. **管理容器**：用户可以使用`docker ps`、`docker stop`、`docker restart`等命令来管理运行中的容器。

本次周常中，考虑到大多数人的情况，在Docker分发镜像这一个方面，我们只会考虑Docker的pull这一个操作，有兴趣的小伙伴可以查看Docker官方文档，进一步学习如何完全利用Docker Registry这一强大的工具

讲到这里，我认为是时候介绍一下容器和镜像这两个概念了。

### 什么是容器

容器简单来说就是一系列进程，但是和一般的进程不一样的是，这些进程被施加了一些限制：

- 无法看到除镜像以外的文件
- 依托镜像的系统文件来运行，用Linux内核来执行进程（不管当前的设备的系统是什么类型）

也正是由于这些限制，容器才可以在任意的设备中运行，不用去关心环境的问题。

---

### 什么是镜像

镜像（只读）由多层（分别在多个文件中记录）组成，每层分别记录不同的容器信息

例如：

- 第一层记录用户态文件系统（例如ubuntu：22.04）
- 第二层记录语言环境（例如python 3.10）
- 第三层 ....

通过压缩和解压缩可以将镜像移植到一台新设备上

在新设备上利用镜像就可以紧接着创建一个容器来运行项目的内容

#### 这些概念一时没理解也没关系，并不太影响Docker的使用

---

接下来是一些具体的操作

我们将通过一个具体的示例来学习Docker的基本操作。

---

### 示例应用：Flask应用

首先，我们创建一个简单的Flask应用，用于演示Docker的使用。创建一个名为`app.py`的文件，内容如下：

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello, Docker!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

### Dockerfile

为了让Docker知道要构建一个怎么样的镜像，我们需要在项目内编写Dockerfile文件（无后缀）

```dockerfile
#1. basic information
FROM python:3.10-slim

#2. set workspace
WORKDIR /app

#3. install dependencies
RUN pip install flask

#4. copy app.py to /app dir in the container
COPY app.py /app/

#5. set environment variables
ENV PYTHONUNBUFFERED=1  
#let python print log immediately

#6. define the command to run in default when container starts
CMD ["python", "app.py"]

```

针对上面这段代码：

- `FROM`: 说明基本的项目所需环境（如Python版本或C++版本）

- `WORKDIR`: 说明项目在容器中的工作空间的根目录

- `RUN`: 执行命令，这里用于安装Flask依赖

- `COPY`: 将当前文件夹（和Dockerfile同一级）的文件复制到指定的容器内位置

- `ENV`: 添加环境变量

- `CMD`: 定义当容器启动的时候默认运行的指令

有了这段Dockerfile，Docker就知道对应的镜像应该是怎么样的。

### 镜像基本操作

#### 创建

可以通过运行以下命令来进行镜像的创建：

```bash
docker build -t my-flask-app:v1 .
```

其中：

- `-t`说明这个镜像的名称，一般格式为：`名称：版本`

#### 查看

如果想要查看目前已存在多少镜像，可以运行以下指令：

```bash
docker images
```

#### 打包

将镜像打包为tar文件（用于跨设备物理传输）：

```bash
docker save -o my-flask-app-v1.tar my-flask-app:v1
```

#### 导入tar包

```bash
docker load -i my-flask-app-v1.tar
```

#### 删除

```bash
docker rmi -f my-flask-app:v1
```

其中 `-f` 是强制删除的意思,正常情况下无需添加 -f

还有一种方法来清除无用镜像：

```bash
docker image prune -a # -a :清除所有未使用的镜像
```

你可以通过上述命令对其进行打包成tar文件

便于设备之间的传输。

当文件传输到另一台设备之后（必须要有docker），用命令将tar文件进行解压，镜像就会在新设备上存在

---

### 容器基本操作

和容器相关的命令如下：

#### 创建容器

```bash
docker run -d --name my-flask-container -p 8080:5000 my-flask-app:v1
```

关于上述命令，有以下需要进行讲解的点：

- `-d`: 后台运行，不实时展示模拟终端

- `--name`: 自定义容器名（随便你写）

- `-p`: 端口映射（如果打包的项目不涉及flask等网络内容则不需要）

- `-v`: 数据卷（骗你的，现在还没有，等下再讲，先和你预告一下（狗头））

#### 查看容器状态

```bash
docker ps #查看运行中的容器

docker ps -a #查看所有的容器
```

#### 启动容器

```bash
docker start container_name
```

start后面接你自己定义的容器名

#### 运行内部程序

```bash
# 进入容器内部交互式终端
docker exec -it container_name /bin/bash

# 在容器内执行单个命令
docker exec container_name ls -la
```

#### 查看容器日志

```bash
docker logs container_name

# 实时查看日志
docker logs -f container_name
```

#### 关闭容器

关闭容器有两种方式：

1.优雅停止（推荐）：

```bash
docker stop container_name
```

2.暴力停止（迫不得已）：

```bash
docker kill container_name
```

#### 重启容器

```bash
docker restart container_name
```

#### 删除容器

和镜像一样，容器也有两种方式来删除：

```bash
docker rm -f my-flask-container #强制删除指定容器

docker container prune #清理所有停止运行的容器
```

其中 -f 是强制删除的意思，如果想要温和一些的方式，将 -f 去除即可。

#### 数据卷操作

数据卷是Docker中用于持久化数据的机制，可以在容器之间共享数据，也可以在主机和容器之间共享数据。

```bash
# 创建数据卷
docker volume create my-volume

# 查看数据卷
docker volume ls

# 查看数据卷详情
docker volume inspect my-volume

# 在运行容器时挂载数据卷
docker run -d --name my-container -v my-volume:/app/data my-image

# 挂载主机目录到容器
docker run -d --name my-container -v /host/path:/container/path my-image

# 删除数据卷
docker volume rm my-volume

# 清理未使用的数据卷
docker volume prune
```

在这里，`-v`的作用是说明容器内的目录和主机内的目录的映射关系，例如：

```bash
docker run -d --name my-container -v /host/path:/container/path my-image
```

就说明容器内的`/container/path`目录和主机内的`/host/path`目录是映射关系，容器内的文件变化会同步到主机内，主机内的文件变化也会同步到容器内。

---

## Docker网络

Docker提供了多种网络模式，用于容器之间的通信：

- **bridge模式**：默认网络模式，容器通过虚拟网络桥接与主机通信
- **host模式**：容器直接使用主机网络，性能最好但隔离性差
- **none模式**：容器没有网络连接
- **overlay模式**：用于多主机 Docker 集群

```bash
# 创建网络
docker network create my-network

# 查看网络
docker network ls

# 运行容器时指定网络
docker run -d --name my-container --network my-network my-image

# 连接容器到网络
docker network connect my-network my-container

# 断开容器与网络的连接
docker network disconnect my-network my-container

# 删除网络
docker network rm my-network
```

---

以上就是Docker的基本操作，你可以根据自己的需求进行调整。

现在你已经学会了Docker的基本操作，在之后的代码生涯中，请尽情享受无惧环境问题的旅途吧。

---

以下是一些额外的资源，你可以在之后的学习中进行参考：

## Docker相关技术网站

- [Docker官方网站](https://www.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker文档](https://docs.docker.com/)
- [Docker Compose文档](https://docs.docker.com/compose/)

---
