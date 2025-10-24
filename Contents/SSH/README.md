# SSH (Secure Shell)

[English](#en-us) | [简体中文](#zh-cn)

## en-US

### Course Overview

This course introduces SSH (Secure Shell), a cryptographic network protocol for secure remote access and command execution on remote machines. SSH is essential for developers, system administrators, and anyone working with remote servers.

### Course Goals

By the end of this session, you will be able to:

- Understand what SSH is and why it's important
- Generate and manage SSH keys
- Connect to remote servers securely using SSH
- Configure SSH for better security and convenience
- Use SSH for common tasks like file transfer and port forwarding

### Prerequisites

- Basic command-line knowledge
- A terminal application (Linux/macOS Terminal, Windows PowerShell/WSL, or Git Bash)
- (Optional) Access to a remote server for practice

### Topics Covered

#### 1. Introduction to SSH

**What is SSH?**

SSH (Secure Shell) is a network protocol that provides a secure channel over an unsecured network. It uses encryption to protect communications between two systems, typically a client and a server.

**Why Use SSH?**

- **Security**: All data transmitted is encrypted
- **Authentication**: Multiple authentication methods including password and key-based
- **Integrity**: Ensures data hasn't been tampered with during transmission
- **Versatility**: Can be used for remote login, command execution, file transfer, and port forwarding

**Common Use Cases:**

- Remote server administration
- Secure file transfer (SCP, SFTP)
- Git repository operations
- Database connections
- Port forwarding and tunneling

#### 2. SSH Key Generation

SSH keys provide a more secure authentication method compared to passwords.

**Generating an SSH Key Pair:**

```bash
# Generate a new SSH key pair (default: RSA 3072-bit)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Or use RSA with 4096 bits
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

**Key Types:**

- **ed25519**: Modern, fast, and secure (recommended)
- **rsa**: Widely supported, use 4096-bit for security
- **ecdsa**: Good balance of security and performance

**During generation, you'll be asked:**

1. File location (default: `~/.ssh/id_ed25519` or `~/.ssh/id_rsa`)
2. Passphrase (optional but recommended for added security)

**Understanding Key Files:**

- `id_ed25519` or `id_rsa`: Your private key (keep this secret!)
- `id_ed25519.pub` or `id_rsa.pub`: Your public key (safe to share)

#### 3. Connecting to Remote Servers

**Basic SSH Connection:**

```bash
# Connect to a remote server
ssh username@hostname_or_ip

# Example
ssh john@example.com
ssh admin@192.168.1.100
```

**Using a Specific Port:**

```bash
# Default SSH port is 22, but some servers use different ports
ssh -p 2222 username@hostname
```

**Using a Specific Private Key:**

```bash
ssh -i ~/.ssh/custom_key username@hostname
```

#### 4. SSH Configuration

Create or edit `~/.ssh/config` to simplify SSH connections:

```ssh-config
# Example SSH config file

# Personal server
Host myserver
    HostName example.com
    User john
    Port 22
    IdentityFile ~/.ssh/id_ed25519

# GitHub
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_github

# Work server with jump host
Host workserver
    HostName internal.company.com
    User employee
    ProxyJump jumphost.company.com
```

**Benefits:**

- Simplify connections: `ssh myserver` instead of `ssh -p 22 john@example.com`
- Specify different keys for different hosts
- Configure proxy jumps and other advanced options

#### 5. Adding SSH Key to Remote Server

**Method 1: Using ssh-copy-id (Recommended)**

```bash
ssh-copy-id username@hostname
```

**Method 2: Manual Copy**

```bash
# Copy your public key content
cat ~/.ssh/id_ed25519.pub

# Then SSH into the server and append it to authorized_keys
mkdir -p ~/.ssh
echo "your-public-key-content" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

#### 6. SSH for Git

**Adding SSH Key to GitHub/GitLab:**

1. Copy your public key:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

2. Add it to your GitHub/GitLab account:
   - GitHub: Settings → SSH and GPG keys → New SSH key
   - GitLab: Preferences → SSH Keys → Add SSH Key

3. Test the connection:
   ```bash
   ssh -T git@github.com
   # or
   ssh -T git@gitlab.com
   ```

**Cloning Repositories with SSH:**

```bash
# Instead of HTTPS
git clone git@github.com:username/repository.git
```

#### 7. File Transfer with SSH

**Using SCP (Secure Copy):**

```bash
# Copy file to remote server
scp local_file.txt username@hostname:/remote/path/

# Copy file from remote server
scp username@hostname:/remote/file.txt ./local/path/

# Copy directory recursively
scp -r local_directory username@hostname:/remote/path/
```

**Using SFTP (SSH File Transfer Protocol):**

```bash
# Start SFTP session
sftp username@hostname

# SFTP commands
# put local_file.txt          # Upload file
# get remote_file.txt         # Download file
# ls                          # List remote files
# lls                         # List local files
# cd /remote/directory        # Change remote directory
# lcd /local/directory        # Change local directory
# exit                        # Close connection
```

#### 8. SSH Security Best Practices

**Key Management:**

- Keep private keys secure with appropriate permissions: `chmod 600 ~/.ssh/id_*`
- Use strong passphrases for private keys
- Use different keys for different purposes (work, personal, etc.)
- Regularly rotate keys (e.g., annually)

**Server Configuration (for server administrators):**

- Disable password authentication (use keys only)
- Change default SSH port from 22
- Use fail2ban or similar tools to prevent brute-force attacks
- Keep SSH server software updated
- Disable root login
- Use SSH protocol version 2 only

**Client Best Practices:**

- Verify host fingerprints on first connection
- Use SSH config file to manage connections
- Enable connection multiplexing for better performance
- Set connection timeouts appropriately

#### 9. Advanced SSH Features

**Port Forwarding:**

```bash
# Local port forwarding (access remote service locally)
ssh -L 8080:localhost:80 username@hostname

# Remote port forwarding (expose local service remotely)
ssh -R 8080:localhost:3000 username@hostname

# Dynamic port forwarding (SOCKS proxy)
ssh -D 1080 username@hostname
```

**SSH Tunneling:**

```bash
# Create SSH tunnel for database access
ssh -N -L 3306:localhost:3306 username@database-server
```

**SSH Agent:**

```bash
# Start SSH agent
eval "$(ssh-agent -s)"

# Add key to agent
ssh-add ~/.ssh/id_ed25519

# List loaded keys
ssh-add -l
```

**Connection Multiplexing:**

Add to `~/.ssh/config`:

```ssh-config
Host *
    ControlMaster auto
    ControlPath ~/.ssh/control-%r@%h:%p
    ControlPersist 10m
```

### Troubleshooting Common Issues

**Permission Denied (publickey)**

- Ensure public key is added to server's `~/.ssh/authorized_keys`
- Check permissions: private key should be 600, public key 644
- Verify you're using the correct key: `ssh -v username@hostname`

**Connection Timeout**

- Check network connectivity
- Verify correct hostname and port
- Check if firewall is blocking the connection
- Try with verbose mode: `ssh -vvv username@hostname`

**Host Key Verification Failed**

- Server's host key has changed (could be a security concern)
- If legitimate (e.g., server reinstalled), remove old key:
  ```bash
  ssh-keygen -R hostname
  ```

### Resources

**Documentation:**

- [OpenSSH Official Documentation](https://www.openssh.com/manual.html)
- [SSH.com SSH Protocol Introduction](https://www.ssh.com/academy/ssh/protocol)

**Tools:**

- OpenSSH (most common implementation)
- PuTTY (Windows SSH client)
- Termius (cross-platform SSH client with GUI)

**Learning Resources:**

- [SSH Academy](https://www.ssh.com/academy/ssh)
- [DigitalOcean SSH Tutorials](https://www.digitalocean.com/community/tags/ssh)

### Practice Exercises

1. **Basic Setup:**
   - Generate an SSH key pair
   - Add your public key to GitHub/GitLab
   - Clone a repository using SSH

2. **Remote Server:**
   - Connect to a remote server using SSH
   - Create an SSH config entry for easier access
   - Transfer files using SCP or SFTP

3. **Advanced:**
   - Set up SSH key-based authentication on a server
   - Configure SSH agent for key management
   - Create a local port forward to access a remote service

---

## zh-CN

### 课程概述

本课程介绍 SSH（Secure Shell，安全外壳），一种用于安全远程访问和在远程机器上执行命令的加密网络协议。SSH 对开发人员、系统管理员以及任何需要使用远程服务器的人来说都是必不可少的工具。

### 课程目标

在本次课程结束时，你将能够：

- 理解什么是 SSH 以及为什么它很重要
- 生成和管理 SSH 密钥
- 使用 SSH 安全地连接到远程服务器
- 配置 SSH 以提高安全性和便利性
- 使用 SSH 进行文件传输和端口转发等常见任务

### 先决条件

- 基本的命令行知识
- 终端应用程序（Linux/macOS 终端、Windows PowerShell/WSL 或 Git Bash）
- （可选）用于练习的远程服务器访问权限

### 涵盖的主题

#### 1. SSH 简介

**什么是 SSH？**

SSH（Secure Shell，安全外壳）是一种网络协议，通过不安全的网络提供安全通道。它使用加密来保护两个系统（通常是客户端和服务器）之间的通信。

**为什么使用 SSH？**

- **安全性**：所有传输的数据都经过加密
- **身份验证**：支持多种身份验证方法，包括密码和基于密钥的验证
- **完整性**：确保数据在传输过程中未被篡改
- **多功能性**：可用于远程登录、命令执行、文件传输和端口转发

**常见用例：**

- 远程服务器管理
- 安全文件传输（SCP、SFTP）
- Git 仓库操作
- 数据库连接
- 端口转发和隧道

#### 2. SSH 密钥生成

与密码相比，SSH 密钥提供了更安全的身份验证方法。

**生成 SSH 密钥对：**

```bash
# 生成新的 SSH 密钥对（默认：RSA 3072 位）
ssh-keygen -t ed25519 -C "your_email@example.com"

# 或使用 4096 位的 RSA
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

**密钥类型：**

- **ed25519**：现代、快速且安全（推荐）
- **rsa**：广泛支持，使用 4096 位确保安全
- **ecdsa**：安全性和性能的良好平衡

**生成过程中会询问：**

1. 文件位置（默认：`~/.ssh/id_ed25519` 或 `~/.ssh/id_rsa`）
2. 密码短语（可选但建议设置以增加安全性）

**理解密钥文件：**

- `id_ed25519` 或 `id_rsa`：你的私钥（保密！）
- `id_ed25519.pub` 或 `id_rsa.pub`：你的公钥（可以安全共享）

#### 3. 连接到远程服务器

**基本 SSH 连接：**

```bash
# 连接到远程服务器
ssh username@hostname_or_ip

# 示例
ssh john@example.com
ssh admin@192.168.1.100
```

**使用特定端口：**

```bash
# SSH 默认端口是 22，但一些服务器使用不同的端口
ssh -p 2222 username@hostname
```

**使用特定私钥：**

```bash
ssh -i ~/.ssh/custom_key username@hostname
```

#### 4. SSH 配置

创建或编辑 `~/.ssh/config` 以简化 SSH 连接：

```ssh-config
# SSH 配置文件示例

# 个人服务器
Host myserver
    HostName example.com
    User john
    Port 22
    IdentityFile ~/.ssh/id_ed25519

# GitHub
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_github

# 带跳板机的工作服务器
Host workserver
    HostName internal.company.com
    User employee
    ProxyJump jumphost.company.com
```

**好处：**

- 简化连接：使用 `ssh myserver` 而不是 `ssh -p 22 john@example.com`
- 为不同主机指定不同的密钥
- 配置代理跳转和其他高级选项

#### 5. 将 SSH 密钥添加到远程服务器

**方法 1：使用 ssh-copy-id（推荐）**

```bash
ssh-copy-id username@hostname
```

**方法 2：手动复制**

```bash
# 复制公钥内容
cat ~/.ssh/id_ed25519.pub

# 然后 SSH 到服务器并将其追加到 authorized_keys
mkdir -p ~/.ssh
echo "your-public-key-content" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

#### 6. SSH 用于 Git

**将 SSH 密钥添加到 GitHub/GitLab：**

1. 复制你的公钥：
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

2. 将其添加到你的 GitHub/GitLab 账户：
   - GitHub：设置 → SSH and GPG keys → New SSH key
   - GitLab：偏好设置 → SSH Keys → Add SSH Key

3. 测试连接：
   ```bash
   ssh -T git@github.com
   # 或
   ssh -T git@gitlab.com
   ```

**使用 SSH 克隆仓库：**

```bash
# 使用 SSH 而不是 HTTPS
git clone git@github.com:username/repository.git
```

#### 7. 使用 SSH 传输文件

**使用 SCP（安全复制）：**

```bash
# 复制文件到远程服务器
scp local_file.txt username@hostname:/remote/path/

# 从远程服务器复制文件
scp username@hostname:/remote/file.txt ./local/path/

# 递归复制目录
scp -r local_directory username@hostname:/remote/path/
```

**使用 SFTP（SSH 文件传输协议）：**

```bash
# 启动 SFTP 会话
sftp username@hostname

# SFTP 命令
# put local_file.txt          # 上传文件
# get remote_file.txt         # 下载文件
# ls                          # 列出远程文件
# lls                         # 列出本地文件
# cd /remote/directory        # 更改远程目录
# lcd /local/directory        # 更改本地目录
# exit                        # 关闭连接
```

#### 8. SSH 安全最佳实践

**密钥管理：**

- 使用适当的权限保护私钥：`chmod 600 ~/.ssh/id_*`
- 为私钥使用强密码短语
- 为不同用途使用不同的密钥（工作、个人等）
- 定期轮换密钥（例如每年一次）

**服务器配置（适用于服务器管理员）：**

- 禁用密码身份验证（仅使用密钥）
- 将默认 SSH 端口从 22 更改
- 使用 fail2ban 或类似工具防止暴力攻击
- 保持 SSH 服务器软件更新
- 禁用 root 登录
- 仅使用 SSH 协议版本 2

**客户端最佳实践：**

- 首次连接时验证主机指纹
- 使用 SSH 配置文件管理连接
- 启用连接复用以提高性能
- 适当设置连接超时

#### 9. SSH 高级功能

**端口转发：**

```bash
# 本地端口转发（本地访问远程服务）
ssh -L 8080:localhost:80 username@hostname

# 远程端口转发（远程暴露本地服务）
ssh -R 8080:localhost:3000 username@hostname

# 动态端口转发（SOCKS 代理）
ssh -D 1080 username@hostname
```

**SSH 隧道：**

```bash
# 为数据库访问创建 SSH 隧道
ssh -N -L 3306:localhost:3306 username@database-server
```

**SSH 代理：**

```bash
# 启动 SSH 代理
eval "$(ssh-agent -s)"

# 将密钥添加到代理
ssh-add ~/.ssh/id_ed25519

# 列出已加载的密钥
ssh-add -l
```

**连接复用：**

添加到 `~/.ssh/config`：

```ssh-config
Host *
    ControlMaster auto
    ControlPath ~/.ssh/control-%r@%h:%p
    ControlPersist 10m
```

### 常见问题排查

**Permission Denied (publickey)**

- 确保公钥已添加到服务器的 `~/.ssh/authorized_keys`
- 检查权限：私钥应为 600，公钥为 644
- 验证使用了正确的密钥：`ssh -v username@hostname`

**连接超时**

- 检查网络连接
- 验证主机名和端口是否正确
- 检查防火墙是否阻止连接
- 尝试详细模式：`ssh -vvv username@hostname`

**主机密钥验证失败**

- 服务器的主机密钥已更改（可能存在安全问题）
- 如果是合法的（例如服务器重新安装），删除旧密钥：
  ```bash
  ssh-keygen -R hostname
  ```

### 资源

**文档：**

- [OpenSSH 官方文档](https://www.openssh.com/manual.html)
- [SSH.com SSH 协议介绍](https://www.ssh.com/academy/ssh/protocol)

**工具：**

- OpenSSH（最常见的实现）
- PuTTY（Windows SSH 客户端）
- Termius（跨平台带 GUI 的 SSH 客户端）

**学习资源：**

- [SSH Academy](https://www.ssh.com/academy/ssh)
- [DigitalOcean SSH 教程](https://www.digitalocean.com/community/tags/ssh)

### 练习题

1. **基础设置：**
   - 生成 SSH 密钥对
   - 将公钥添加到 GitHub/GitLab
   - 使用 SSH 克隆仓库

2. **远程服务器：**
   - 使用 SSH 连接到远程服务器
   - 创建 SSH 配置条目以便更轻松地访问
   - 使用 SCP 或 SFTP 传输文件

3. **高级：**
   - 在服务器上设置基于 SSH 密钥的身份验证
   - 配置 SSH 代理进行密钥管理
   - 创建本地端口转发以访问远程服务
