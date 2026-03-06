# Docker Quick Start

---

[中文版本 (Chinese Version)](README.md)

---

## Environment Problems in Development

As a developer, imagine the following scenario:

One day, you suddenly have an idea at home to write a small game with a `mixed multilingual environment` on `your own computer` to show your friends and demonstrate the `superiority` of being a programmer.

But when you take this small game to your friend's house with a USB drive, you find that their computer is actually `Windows 11`, while your own computer is `macOS`.

Unfortunately, you also `didn't write a requirements.txt file in your folder`, so it's hard to figure out what dependencies this game needs.

Suddenly, your attempt to show off turns into an embarrassing situation (annoyed).

### Is there any way to `solve these problems`?

To this, I can only say:

### Yes, there is, my friend

This is where our famous `Docker` comes into play (dog head).

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

It's best if you can install Docker on your local machine for this weekly session (great joy).

### What if you don't have it, do you have to give up learning? (sad)

Don't worry, we've already prepared for this.

### In this weekly session, you can learn through GitHub Codespaces in our repository

If you'd like, you can first install Docker Desktop according to the tutorial below.

---

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

If version information appears, the installation was successful (applause)

After downloading, please remember to restart your computer, then go directly to the following repository:

<https://github.com/CompPsyUnion/docker-tutorial>

Clone this repository to your local machine

```bash
git clone https://github.com/CompPsyUnion/docker-tutorial.git
```

Then you can prepare to start learning Docker.

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

After downloading, you might be wondering what Docker is and why it can be an important savior for environment-related problems.

Next, I'll briefly introduce the relevant background of Docker and what it actually is.

## Docker Background Knowledge

Simply put, Docker is a lightweight containerization technology and platform used to solve common environment problems in programming.

It packages applications, dependencies, and user-space environments together in a container.

Subsequently, if you need to run this application on another computer, you just need to run this container without worrying about the application's environment issues.

Today, we will learn how to use Docker to build a container and how to use this container to run our applications.

---

Now that we've covered the basic concept, let's talk about Docker's historical background.

---

## The Origin of Docker

dotCloud is a cloud-based application platform that allows developers to deploy and manage applications in the cloud.

Hykes noticed that when running applications on dotCloud, different applications required different dependencies and runtime environments, which were often difficult to coexist in the same system.

This led to environment configuration problems because different applications might require different environments.

To solve this problem, Hykes began thinking about how to package applications and their environments together so they could run anywhere.

Furthermore, Hykes decided to create a new tool for packaging applications and their environments.

And the name of a dock worker is exactly Docker. Hykes thought this name was very appropriate for the tool's functionality, so he named the tool Docker.

Thus, Docker was born.

---

At this point, someone might say:

> Why can't virtual machines solve this problem? Isn't it also a famous containerization technology?

Next, I'll briefly introduce the differences between Docker and virtual machines, as well as Docker's advantages.

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

These advantages have led to widespread adoption and recognition of Docker among developers. It leads the pack in environment handling.

![meme](./image/guide03.gif)

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
Now that we've covered the architecture, let's get to the `most most most most most important` part: Docker's workflow.

---

## Docker's Workflow

Docker's workflow is primarily as follows:

1. **Build an image**: Developers define the application's environment and dependencies by writing a Dockerfile, then build the image using the `docker build` command.
2. **Distribute the image**: The built image can be uploaded to a Docker Registry for other users to use.
3. **Run a container**: Users can pull images from the Registry and run containers using the `docker run` command.
4. **Manage containers**: Users can manage running containers using commands like `docker ps`, `docker stop`, `docker restart`, etc.

In this weekly session, considering most people's situations (i.e., using Codespaces), we will only consider the `pull` operation for Docker image distribution. Interested friends can check the Docker official documentation to further learn how to fully utilize the powerful tool of Docker Registry.

---

At this point, someone might ask:

> You haven't explained what containers and images are yet.

Don't worry, I'll explain these two concepts now to help you understand later.

**~~Damn, can't be lazy anymore (sad)~~**

### What is a Container

A container is simply a set of processes, but unlike regular processes, these processes have some restrictions:

- Cannot see files outside the image (unless you use volumes, which we'll mention later)
- Relies on the image's system files to run, using the Linux kernel to execute processes (regardless of the current device's system type)

It is precisely because of these restrictions that containers can run on any device without worrying about environment issues.

---

### What is an Image

An image (read-only) consists of multiple layers (recorded in multiple files), each recording different container information

> Why read-only? Of course, to ensure the image doesn't get modified, otherwise the image would be polluted, which would affect the operation of other containers that depend on this image.

For example:

- The first layer records the user-space file system (e.g., ubuntu:22.04)
- The second layer records the language environment (e.g., python 3.10)
- The third layer ....

Images can be ported to a new device through compression and decompression

A container is then created on the new device to run the project's content

#### It's okay if these concepts are not immediately understood; they don't significantly affect the use of Docker

~~But I think you all understand now (seriously)~~

---

Next are some specific operations

We will learn Docker's basic operations through a specific example.

---

### Example Application: Flask Application

Next, please go to the repository to complete the relevant practical exercises:

### <https://github.com/CompPsyUnion/docker-tutorial>

~~Actually, this is the one I asked you to prepare earlier.~~

If you're practicing with Codespaces, you don't need to do anything else because if you followed my previous tutorial `(you did, right?)`, you're already in the correct location.

After completing the exercises, you now have basic Docker operation skills and can perform packaging operations according to your needs.

In your future coding career, please enjoy the journey of being fearless of environment issues.

---

Here are some additional resources you can refer to in your future learning:

## Docker Related Technical Websites

- [Docker Official Website](https://www.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

---
