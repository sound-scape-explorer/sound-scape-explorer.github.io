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
    color="#3776AB"
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
    color="#0078D6"
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
    color="#000000"
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
    color="#A8B9CC"
  />
);

export const CurlIcon = () => (
  <SimpleIcon
    icon="curl"
    color="#073551"
  />
);

export const FfmpegIcon = () => (
  <SimpleIcon
    icon="ffmpeg"
    color="#007808"
  />
);

export const NodeIcon = () => (
  <SimpleIcon
    icon="nodedotjs"
    color="#339933"
  />
);

export const PnpmIcon = () => (
  <SimpleIcon
    icon="pnpm"
    color="#F69220"
  />
);

export const BashIcon = () => (
  <SimpleIcon
    icon="gnubash"
    color="#4EAA25"
  />
);

export const MicrosoftIcon = () => (
  <SimpleIcon
    icon="microsoft"
    color="#5E5E5E"
  />
);

export const ChocolateyIcon = () => (
  <SimpleIcon
    icon="chocolatey"
    color="#80B5E3"
  />
);

export const PowershellIcon = () => (
  <SimpleIcon
    icon="powershell"
    color="#5391FE"
  />
);

export const XcodeIcon = () => (
  <SimpleIcon
    icon="xcode"
    color="#147EFB"
  />
);

export const TerminalIcon = () => (
  <SimpleIcon
    icon="iterm2"
    color="#000000"
  />
);

export const NumPyIcon = () => (
  <SimpleIcon
    icon="numpy"
    color="#013243"
  />
);

export const AppIcon = () => (
  <img
    className={styles.icon}
    src="/img/logo.png"
    alt="App Icon"
  />
);

export const FirefoxIcon = () => (
  <SimpleIcon
    icon="firefoxbrowser"
    color="#FF7139"
  />
);

export const ChromeIcon = () => (
  <SimpleIcon
    icon="googlechrome"
    color="#4285F4"
  />
);

export const SafariIcon = () => (
  <SimpleIcon
    icon="safari"
    color="#000000"
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

export const TypescriptIcon = () => (
  <SimpleIcon
    icon="typescript"
    color="#3178C6"
  />
);

export const VueIcon = () => (
  <SimpleIcon
    icon="vuedotjs"
    color="#4FC08D"
  />
);

export const NvidiaIcon = () => (
  <SimpleIcon
    icon="nvidia"
    color="#76B900"
  />
);

export const CseIcon = () => (
  <img
    className={styles.cseIcon}
    src="/img/cse/logo.svg"
    alt="CSE Icon"
  />
);

export const ElectronIcon = () => (
  <SimpleIcon
    icon="electron"
    color="#47848F"
  />
);

export const PyPiIcon = () => (
  <SimpleIcon
    icon="pypi"
    color="#3775A9"
  />
);

export const PdfIcon = () => (
  <SimpleIcon
    icon="adobeacrobatreader"
    color="#EC1C24"
  />
);
