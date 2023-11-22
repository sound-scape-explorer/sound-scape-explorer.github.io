import {Icon} from '@iconify/react';

import styles from './styles.module.css';

interface Props {
  icon: string;
  color?: string;
}

const SimpleIcon = ({icon, color}: Props) => (
  <Icon
    className={styles.icon}
    icon={`simple-icons:${icon}`}
    style={{color: color}}
  />
);

export const ExcelIcon = () => (
  <SimpleIcon
    icon="microsoftexcel"
    color="#217346"
  />
);

export const PythonIcon = () => (
  <SimpleIcon
    icon="python"
    color="#FFD43B"
  />
);

export const StorageIcon = () => (
  <Icon
    className={styles.icon}
    icon="bi:type-h5"
    style={{color: '#28378C'}}
  />
);

export const WindowsIcon = () => (
  <SimpleIcon
    icon="windows10"
    color="#00ADEF"
  />
);

export const UbuntuIcon = () => (
  <SimpleIcon
    icon="ubuntu"
    color="#E95420"
  />
);

export const MacOsIcon = () => (
  <SimpleIcon
    icon="apple"
    color="#BFBFBF"
  />
);

export const HomebrewIcon = () => (
  <SimpleIcon
    icon="homebrew"
    color="#FBB040"
  />
);

export const CIcon = () => (
  <SimpleIcon
    icon="c"
    color="#003366"
  />
);

export const CurlIcon = () => (
  <SimpleIcon
    icon="curl"
    color="#00A7E1"
  />
);

export const FfmpegIcon = () => (
  <SimpleIcon
    icon="ffmpeg"
    color="#00ADEF"
  />
);

export const NodeIcon = () => (
  <SimpleIcon
    icon="nodedotjs"
    color="#68A063"
  />
);

export const PnpmIcon = () => (
  <SimpleIcon
    icon="pnpm"
    color="#F06292"
  />
);

export const BashIcon = () => (
  <SimpleIcon
    icon="gnubash"
    color="#4F5256"
  />
);

export const MicrosoftIcon = () => (
  <SimpleIcon
    icon="microsoft"
    color="#00A1F1"
  />
);

export const ChocolateyIcon = () => (
  <SimpleIcon
    icon="chocolatey"
    color="#724A7C"
  />
);

export const PowershellIcon = () => (
  <SimpleIcon
    icon="powershell"
    color="#012456"
  />
);

export const XcodeIcon = () => (
  <SimpleIcon
    icon="xcode"
    color="#007ACC"
  />
);

export const TerminalIcon = () => (
  <SimpleIcon
    icon="iterm2"
    color="#202B2D"
  />
);

export const NumPyIcon = () => (
  <SimpleIcon
    icon="numpy"
    color="#4D77CF"
  />
);

export const AppIcon = () => (
  <img
    className={styles.icon}
    src="/img/logo.png"
    role="img"
  />
);

export const FirefoxIcon = () => (
  <SimpleIcon
    icon="firefoxbrowser"
    color="#D86E1C"
  />
);

export const ChromeIcon = () => (
  <SimpleIcon
    icon="googlechrome"
    color="#1A73E9"
  />
);

export const SafariIcon = () => (
  <SimpleIcon
    icon="safari"
    color="#0FB0E6"
  />
);

export const PwaIcon = () => <SimpleIcon icon="pwa" />;

export const InstallIcon = () => (
  <Icon
    className={styles.icon}
    icon="ic:baseline-install-desktop"
  />
);

export const DiscordIcon = () => (
  <SimpleIcon
    icon="discord"
    color="#5865F2"
  />
);

export const GithubIcon = () => (
  <SimpleIcon
    icon="github"
    color="#181717"
  />
);
