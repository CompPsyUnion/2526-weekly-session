# Docker Quick Start

---

[中文版本 (Chinese Version)](README.md)

---

## Environment Problems in Development

As a developer, have you ever encountered the following problems:

- **Complex environment configuration**: It takes a lot of time to set up a development environment on a new machine
- **Dependency conflicts**: Different projects may require different versions of dependencies, which are difficult to coexist on the same machine
- **Deployment issues**: Applications that run normally in the development environment have various problems in the production environment
- **Collaboration difficulties**: Inconsistent environments between team members lead to differences in code behavior

These problems seriously affect development efficiency and project stability, and Docker is a tool created to solve these problems.

![Docker Display Image](./image/image.png)

## In this weekly session, you will learn

- **What is Docker**

- **Core features of Docker**

- **Docker's historical background**

- **Advantages of Docker**

- **Docker's architecture**

- **Docker's workflow**

- **Basic Docker operations**

- **Docker network operations**

---

## Preparation

It's best if you can install Docker on your local machine for this weekly session.

If not, you can also learn through GitHub Codespaces during this session.

### Install Docker Desktop

Docker can run on Windows, macOS, and Linux.

You can download the Docker installer for your operating system from the official Docker website.

### Linux (Ubuntu 22.04 example)

```bash
# Download and execute the official installation script
curl -fsSL https://get.docker.com | sudo bash

# Add the current user to the docker group (sudo not required)
sudo usermod -aG docker $USER

# Log out and log back in for changes to take effect
newgrp docker
```

### Windows

<https://www.docker.com/products/docker-desktop/> → Download for Windows

Run the installer and check "Use WSL 2 instead of Hyper-V"

Restart your computer after completion

### macOS

Download from official website: <https://www.docker.com/products/docker-desktop/>

---

After installation, you can run the docker command in the command line to verify if the installation was successful.

```bash
docker --version
```

If version information appears, the installation was successful

---

If you don't want to install Docker locally, you can also learn in Codespaces.

Please go directly to the following repository:

<https://github.com/CompPsyUnion/docker-tutorial>

Click "Use this template" → "Open in a codespaces"

![use_this_template](./image/guide01.png)

Enter the following interface:

![codespaces interface](./image/guide02.png)

Then you can learn in Codespaces

---

## Docker Background Knowledge

Simply put, Docker is a lightweight containerization technology and platform used to solve common environment problems in programming.

It packages applications, dependencies, and user-space environments together in a container.

Subsequently, if you need to run this application on another computer, you just need to run this container without worrying about the application's environment issues.

Today, we will learn how to use Docker to build a container and how to use this container to run our applications.

---

## The Origin of Docker

dotCloud is a cloud-based application platform that allows developers to deploy and manage applications in the cloud.

Hykes noticed that when running applications on dotCloud, different applications required different dependencies and runtime environments, which were often difficult to coexist in the same system.

This led to environment configuration problems because different applications might require different environments.

To solve this problem, Hykes began thinking about how to package applications and their environments together so they could run anywhere.

Furthermore, Hykes decided to create a new tool for packaging applications and their environments.

Thus, Docker was born.

---

## Advantages of Docker

Docker stands out among containerization technologies for several reasons:

- Lightweight and fast
- Portability
- Isolation
- Scalability

Compared to virtual machines:

| Feature | Docker | Virtual Machine |
| :--- | :--- | :--- |
| Resource usage | Lightweight | Heavyweight |
| Startup speed | Fast | Slow |
| Portability | High | Low |
| Isolation | Process-level isolation | Complete isolation |
| Scalability | High | Limited |

These advantages have led to widespread adoption and recognition of Docker among developers.

---

Docker's advantages are also partly due to its architectural design.

## Docker's Architecture

Docker can be divided into the following components, which together form Docker's complete ecosystem:

- **Docker Client**: A command-line tool for users to interact with Docker, responsible for receiving user commands and sending them to the Docker Daemon for execution
- **Docker Daemon**: A background service process responsible for processing Docker Client instructions and managing resources such as images and containers
- **Docker Registry**: An image repository responsible for storing and distributing Docker images, similar to GitHub, with the most commonly used being the official Docker Hub
- **Docker Objects**: Core objects including images, containers, networks, volumes, etc.

Docker adopts a client-server architecture, where the Client communicates with the Daemon through a REST API, allowing Docker to be operated locally or remotely.

---
Now that we've covered the architecture, let's detail Docker's workflow.

## Docker's Workflow

Docker's workflow is primarily as follows:

1. **Build an image**: Developers define the application's environment and dependencies by writing a Dockerfile, then build the image using the `docker build` command.
2. **Distribute the image**: The built image can be uploaded to a Docker Registry for other users to use.
3. **Run a container**: Users can pull images from the Registry and run containers using the `docker run` command.
4. **Manage containers**: Users can manage running containers using commands like `docker ps`, `docker stop`, `docker restart`, etc.

In this weekly session, considering most people's situations, we will only consider the `pull` operation for Docker image distribution. Interested friends can check the Docker official documentation to further learn how to fully utilize the powerful tool of Docker Registry.

At this point, I think it's time to introduce the concepts of containers and images.

### What is a Container

A container is simply a set of processes, but unlike regular processes, these processes have some restrictions:

- Cannot see files outside the image by default
- Relies on the image's system files to run, using the Linux kernel to execute processes (regardless of the current device's system type)

It is precisely because of these restrictions that containers can run on any device without worrying about environment issues.

### What is an Image

An image consists of multiple layers (recorded in multiple files), each recording different container information

For example:

- The first layer records the user-space file system (e.g., ubuntu:22.04)
- The second layer records the language environment (e.g., python 3.10)
- The third layer ....

Images can be ported to a new device through compression and decompression

A container is then created on the new device to run the project's content

It's okay if these concepts are not immediately understood; they don't significantly affect the use of Docker.

---

Now for some specific operations

---

We will learn Docker's basic operations through a specific example.

### Example Application: Flask Application

First, we create a simple Flask application to demonstrate the use of Docker. Create a file named `app.py` with the following content:

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

To let Docker know how to build an image, we need to write a Dockerfile in the project (no extension)

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

Regarding the above code:

- `FROM`: Specifies the basic environment required for the project (such as Python version or C++ version)

- `WORKDIR`: Specifies the root directory of the project's workspace in the container

- `RUN`: Executes commands, here used to install Flask dependencies

- `COPY`: Copies files from the current folder (same level as Dockerfile) to the specified location in the container

- `ENV`: Adds environment variables

- `CMD`: Defines the default command to run when the container starts

With this Dockerfile, Docker knows what the corresponding image should look like.

### Basic Image Operations

#### Create

You can create an image by running the following command:

```bash
docker build -t my-flask-app:v1 .
```

Where:

- `-t` specifies the name of the image, generally in the format: `name:version`

#### View

To see how many images currently exist, you can run the following command:

```bash
docker images
```

#### Package

Package the image as a tar file (for cross-device physical transfer):

```bash
docker save -o my-flask-app-v1.tar my-flask-app:v1
```

#### Import tar Package

```bash
docker load -i my-flask-app-v1.tar
```

#### Delete

```bash
docker rmi -f my-flask-app:v1
```

Where `-f` means forced deletion, which is not needed under normal circumstances

Another way to clean up unused images:

```bash
docker image prune -a # -a: Clean up all unused images
```

You can package it into a tar file using the above command

Facilitates transfer between devices.

After the file is transferred to another device (must have Docker), use the command to decompress the tar file, and the image will exist on the new device

---

### Basic Container Operations

Commands related to containers are as follows:

#### Create Container

```bash
docker run -d --name my-flask-container -p 8080:5000 my-flask-app:v1
```

Regarding the above command, there are several points to explain:

- `-d`: Run in the background, do not display the simulated terminal in real-time

- `--name`: Custom container name (you can write whatever you want)

- `-p`: Port mapping (not needed if the packaged project does not involve network content like flask)

- `-v`: Volume (just kidding, not yet, will talk about it later (dog head))

#### View Container Status

```bash
docker ps # View running containers

docker ps -a # View all containers
```

#### Start Container

```bash
docker start container_name
```

After start, add your own defined container name

#### Run Internal Programs

```bash
# Enter the container's internal interactive terminal
docker exec -it container_name /bin/bash

# Execute a single command inside the container
docker exec container_name ls -la
```

#### View Container Logs

```bash
docker logs container_name

# View logs in real-time
docker logs -f container_name
```

#### Stop Container

There are two ways to stop a container:

1. Graceful stop (recommended):

```bash
docker stop container_name
```

1. Force stop:

```bash
docker kill container_name
```

#### Restart Container

```bash
docker restart container_name
```

#### Delete Container

Like images, there are two ways to delete containers:

```bash
docker rm -f my-flask-container # Force delete specified container

docker container prune # Clean up all stopped containers
```

Where `-f` means forced deletion. If you want a gentler way, just remove `-f`.

#### Volume Operations

Volumes are mechanisms in Docker for persisting data, which can share data between containers or between the host and containers.

```bash
# Create volume
docker volume create my-volume

# View volumes
docker volume ls

# View volume details
docker volume inspect my-volume

# Mount volume when running container
docker run -d --name my-container -v my-volume:/app/data my-image

# Mount host directory to container
docker run -d --name my-container -v /host/path:/container/path my-image

# Delete volume
docker volume rm my-volume

# Clean up unused volumes
docker volume prune
```

---

### Clean Up Images

If you need to delete an image, please first delete the containers corresponding to this image, then delete the image

---

## Docker Network

Docker provides multiple network modes for communication between containers:

- **bridge mode**: Default network mode, containers communicate with the host through a virtual network bridge
- **host mode**: Containers directly use the host network, best performance but poor isolation
- **none mode**: Containers have no network connection
- **overlay mode**: Used for multi-host Docker clusters

```bash
# Create network
docker network create my-network

# View networks
docker network ls

# Run container with specified network
docker run -d --name my-container --network my-network my-image

# Connect container to network
docker network connect my-network my-container

# Disconnect container from network
docker network disconnect my-network my-container

# Delete network
docker network rm my-network
```

---

The above are the basic operations of Docker, which you can adjust according to your needs.

Now that you have learned the basic operations of Docker, please enjoy the journey of being fearless of environment issues in your future coding career.

Here are some additional resources you can refer to in your future learning:

## Docker Related Technical Websites

- [Docker Official Website](https://www.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

---
