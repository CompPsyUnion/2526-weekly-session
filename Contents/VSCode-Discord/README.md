# Show your coding status on Discord with proxy, webhook and a simple VSCode plugin

This workshop will guide you through the steps to connect Visual Studio Code (VSCode) with Discord using proxy, webhook and a VSCode plugin, allowing you to display your coding activity as a rich presence status on your Discord profile and catch up with the developer community.

![Main Demo](./assets/images/discord-bot-example.png)

## Required Preparation

[Click to Download **VSCode installer**](https://code.visualstudio.com) and [Click to Download **Discord installer** and **SteamCommunity**](http://ug.link/hnrobert-nas/filemgr/share-download/?id=b80a41b4bd604b80945dcde6bde1d9c3)

- Just download the installers/packages that match your own computer's platform/architecture.
- **If you've already known how to connect to Discord under domestic network environment, you may skip the installation of SteamCommunity**, otherwise please have it prepared, and we will introduce more about its usage during the session
- If you are still not sure about how to set up the Proxy using SteamCommunity, please follow the steps in the [Background Knowledge](#usage-of-steamcommunity-as-a-proxy-provider) section below during the session.

## Background Knowledge

Discord is a popular communication platform among gamers and developers. It allows users to create servers, join communities, and communicate via text, voice, and video. One of its features is the ability to display rich presence status, which shows what a user is currently doing in supported applications. About how nice Discord is, we may introduce more about it after solving today's first issue - network.

It may not be difficult for you to notice that, after downloading the installer of Discord and installing it locally, when you're trying to connect to the Discord server, you may face the first issue in our today's session: **it may fail to connect under domestic network environment**. This is because Discord do not provide their service in some regions, and users may need to use a proxy service to access it.

### What is **Proxy Service**?

A **Proxy Service** is a service that allows users to connect to the internet through a server located in a different region or country. This can help bypass regional restrictions and access blocked content.

- Normally if you want to access a website, the diagram below shows how it works without Proxy:

  ```mermaid
  graph TD;
      User[User] -->|Request| Website[Website Server]
      Website -->|Response| User
  ```

- But when you don't have access to a specific website directly but a server located in one place can reach both you and the website you want to visit, you may use this server as a Proxy server. Now you're using a Proxy, and the diagram changes to:

  ```mermaid
  graph TD;
      User -->|Request| Proxy[Proxy Server]
      Proxy -->|Request| Website[Website Server]
      Website -->|Response| Proxy
      Proxy -->|Response| User
  ```

For example, now, through using a Proxy, you can route your internet traffic toward Discord through a server in a location where Discord is accessible, allowing them to connect to the Discord servers without issues.

Usually, there are many Proxy service providers available, both free and paid, legal and illegal. In this session, we will not recommend any specific Proxy service provider, but we will introduce a method to set up a Proxy using `SteamCommunity`, which is a legal and free option for users in domestic network environments.

### Usage of SteamCommunity as a Proxy Provider

SteamCommunity is a platform for gamers to connect and share content. It also provides a built-in proxy service that can be used to access blocked websites, including Discord.

> Meanwhile, not only Discord app, SteamCommunity can provide proxy service for other applications as well, such as web browsers, game launchers, etc.  
> Any application that sends internet traffic can potentially benefit from using SteamCommunity as a proxy, as long as SteamCommunity supports.

1. Download the zip package of SteamCommunity from [the link above](http://ug.link/hnrobert-nas/filemgr/share-download/?id=b80a41b4bd604b80945dcde6bde1d9c3). Just select the version that matches your operating system.
   ![Download SteamCommunity](assets/images/download-steamcommunity.png)
2. Extract the zip package to a local directory on your computer (to a location that is easy to remember, this is recommended). The default decompressor of your operating system should be fine.
3. Run the Programme

   - On Windows, double-click the `Steamcommunity_302.exe` file to launch the application. If any security warnings appear, confirm that you want to run the application.
   - On macOS or Linux, open a terminal, navigate to the extracted directory, and open the `运行.command` file using the `Terminal` app (which should be done so by default, so just double click and open would just be fine).

     - macOS has a security mechanism called Gatekeeper that may block applications from unidentified developers. If you encounter a warning when trying to run SteamCommunity, like this:
       ![macOS warning](./assets/images/steamcommunity-open-warning-macos.png)

       you can bypass this by following these steps:

       1. Open `System Preferences` and go to `Security & Privacy`.
       2. In the `General` tab, you should see a message about SteamCommunity being blocked. Click the `Open Anyway` button.
       3. Confirm your choice in the dialog that appears.

4. After launching SteamCommunity, you may see its main interface as shown below, now Click the `⚙️设置` button to open the settings panel.
   ![SteamCommunity Main Interface](./assets/images/steamcommunity-main-interface.png)
5. Select the website/application you want to use the proxy for (in this case, just select `Discord 语音` would be fine, you may also notice a Option called `GitHub`, that can also be helpful for you ;).
   ![SteamCommunity Settings](./assets/images/steamcommunity-settings.png)
6. Set your proxy server location by selecting a server from the `登录服务器` dropdown menu. Choose a server that is closer to you, meanwhile, where Discord is accessible, like Singapore or Japan, and Hong Kong may also be fine.
   ![SteamCommunity Proxy Server](./assets/images/steamcommunity-proxy-server.png)
7. Save your config using the button at the left-bottom corner, called `保存设置`, and you may return to the main interface and click the `启动服务` button to start the proxy service. If you see "服务已启动" message, that means the proxy service is running now.
   ![SteamCommunity launch service](./assets/images/steamcommunitu-launch-service.png)

### Why Discord?

Discord is widely used among developers and gamers for communication and collaboration. But why not other communication platforms like Slack or Microsoft Teams?

- **Developer Community**: Discord has a large and active developer community, which has led to the creation of various plugins and extensions that enhance its functionality, including the Discord Presence extension for VSCode. What's more, Discord has a open support for developers to create their own applications and integrations using the Discord API and interact with the Discord platform programmatically. Discord also embraces bots, which can automate tasks and provide additional features within servers.
- **Ease of Use**: Discord is known for its user-friendly interface and ease of use, making it accessible to both beginners and experienced users.
- **Rich Presence Feature**: Discord's rich presence feature allows users to display detailed information about their current activity, such as the file they are working on, the programming language they are using, and the time spent coding. This feature is not commonly found in other communication platforms.

![Discord Bot Example](./assets/images/discord-bot-example.png)

#### Registration and Setup of Discord Account

> FIRST, make sure you have completed the steps in the [Usage of SteamCommunity as a Proxy Provider](#usage-of-steamcommunity-as-a-proxy-provider) section above, so that you can access Discord without issues.

1. If you don't have a Discord account yet, go to [Discord's registration page](https://discord.com/register) and sign up for a new account using your own email address or school email. Just follow the instructions on the page to complete the registration process.
2. After registering, download and install the Discord application on your computer from [Discord's download page](https://discord.com/download).
3. Launch the Discord application and log in using your newly created account credentials.

#### Experience Discord Presence Extension and GitHub Integration

1. Make sure you have followed the steps above to set up Discord and SteamCommunity proxy service.
2. Launch Discord on your computer and try join a [Discord Server (right click and copy link)](https://discord.com/invite/5dVbWhEbQc) through the add button on the left, clicking the `Join Discord Server` button below, and paste the invite link you copied:
   ![Discord Join Server](./assets/images/discord-join-server.png)

   You may also just visit the link above in your web browser, make sure you're using your account that has just been registered or your account that you've always been using, and let it redirect you to your Discord app to join the server.

3. In the server, you can see the example of rich presence status (of me), and browse through the `#github` channel with a GitHub Bot installed and see how it has worked.
4. Try star [this repository](https://github.com/CompPsyUnion/2526-weekly-session) on GitHub, and see how the GitHub Bot in Discord notify the server about your action.
   ![GitHub Star](./assets/images/github-star.png)

   **Effect:**

   ![Discord GitHub Bot Effect](./assets/images/discord-github-bot-effect.png)

> Webhook is a way for applications to communicate with each other in real-time. In the context of Discord and GitHub, a Webhook Bot can be set up to send notifications to a Discord channel whenever certain events occur on a GitHub repository, such as new commits, pull requests, or issues.  
> Webhook is like a promise that one application makes to another application, saying "Hey, when this thing happens, I'll let you know by sending you a message." In this case, GitHub is promising to notify Discord whenever something important happens in the repository.
>
> We may introduce more about how to set up a Discord Webhook Bot for GitHub, even some further usage of webhook technology **in our future sessions**.

## Steps to Connect VSCode with Discord

### Discord and Proxy Setup

1. Make sure you have Discord installed on your computer and that you are logged into your account.
2. Make sure the SteamCommunity proxy service is running if you are in a domestic network environment, as described in the [Usage of SteamCommunity as a Proxy Provider](#usage-of-steamcommunity-as-a-proxy-provider) section above.

### VSCode Setup

1. Install Visual Studio Code (VSCode) on your computer if you haven't already.
2. Open VSCode and navigate to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3. In the search bar, type "Discord Presence" or use the plugin's ID `icrawl.discord-vscode` to find the Discord Presence extension.
   ![VSCode Plugin Install](./assets/images/vscode-plugin-install.png)
4. Click on the "Install" button to install the Discord Presence extension.
5. After installation, the Discord Presence extension should automatically connect to your Discord account, see the badge below:
   ![VSCode Discord Badge](./assets/images/vscode-discord-badge.png)

   If it shows "**Reconnect to Discord**", just click on it to reconnect. If it still fails to connect, please see the checklist below and retry after confirming all items are met:

   - The **Discord app** is running on your computer and you are logged in.
   - The SteamCommunity proxy service is running (if applicable).

6. Open a project or start coding in VSCode, and you should see your coding activity displayed as a rich presence status on your Discord profile.
   ![VSCode Discord Effect](./assets/images/vscode-discord-effect.png)
7. You can customize the settings of the Discord Presence extension by going to the Extensions view, finding the Discord Presence extension, and clicking on the gear icon to access its settings.
8. In the settings, you can configure options such as showing the file name, programming language, and time spent coding.
9. Enjoy sharing your coding status with your friends on Discord!

For more detailed instructions and troubleshooting, refer to the [official documentation of the Discord Presence extension](https://marketplace.visualstudio.com/items?itemName=icrawl.discord-vscode).
