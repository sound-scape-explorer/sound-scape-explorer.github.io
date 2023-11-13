# Installing on Windows

## Compatibility

- [x] Windows 10
- [x] Windows 11

## Installation procedure

1. Click on the start menu (or press `⊞ Win` button on your keyboard)
2. Type `PowerShell`
3. Right-click on the `PowerShell` icon
4. Select `Run as Administrator` (this will open a new shell window)
5. Open a new tab in your web browser
6. Navigate to [chocolatey installation page](https://chocolatey.org/install)
7. Scroll the installation command
8. Copy the command
9. Paste it in your shell window
10. Press `Enter`
    a. At the end of the installation, enter the command `choco --version` to
    verify the installation
11. Install `Python`:

```powershell
choco install python3 --version=3.10.11 -y
```

> **Note**
>
> If you have a prior version of Python and want to uninstall it. Run the
> following command
>
> ```powershell
> choco uninstall python3
> ```

5. Install `Node.js`:

```powershell
choco install nodejs --version=16.20.0 -y
```

6. Install `ffmpeg`, `curl` and `pnpm`:

```powershell
choco install ffmpeg curl pnpm -y
```

7. Close the shell window.
8. Go to [Microsft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) and
   click on `Download Build Tools`
9. Run the executable and continue with the installation until you get the
   menu `Installing - Visual Studio Build Tools...`
10. Tick `Desktop development with C++` and press `Install`. The installation
    will take about 6 Gb of data.
11. Once installed, you can close the Visual Studio Build Tools window.
12. You can now [install SSE](https://github.com/sound-scape-explorer/sound-scape-explorer/wiki/install-sse).
