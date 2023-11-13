# Installing on macOS

## Compatibility

- [x] macOS 14
- [x] macOS Ventura 13.2.1

## Install requirements

1. Go to [brew.sh](https://brew.sh/) and follow the instructions to install
   Homebrew
2. Open a terminal
3. Install external libraries:

```bash
brew install gcc curl ffmpeg python@3.10 node@16 pnpm
```

4. Update your `$PATH`:

```bash
echo 'export PATH="/usr/local/opt/node@16/bin:$PATH" >> ~/.profile'
```

5. You can now [install SSE](https://github.com/sound-scape-explorer/sound-scape-explorer/wiki/install-sse)

## Xcode command line tools

If you encounter problems installing Homebrew, you need to install Xcode
command line tools.

> **Note**
>
> To check if Xcode command line tools are installed, run:
>
> ```bash
> xcode-select -p
> ```

1. Open a terminal
2. Run `xcode-select --install`
3. Continue to [Install requirements](#install-requirements)
