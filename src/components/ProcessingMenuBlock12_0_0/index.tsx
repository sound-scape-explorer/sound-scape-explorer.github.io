import {APP_DESCRIPTION} from '@site/constants';
import CodeBlock from '@theme/CodeBlock';

const code = (
  version: Props['version'],
) => `👋 Welcome to ${APP_DESCRIPTION} v${version}!

┏━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ File    ┃ Path                                      ┃
┡━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ config  │ relative/or/absolute/path/to/config.xlsx  │
│ storage │ relative/or/absolute/path/to/storage.h5   │
└─────────┴───────────────────────────────────────────┘
? Choose your action  (Use arrow keys)
 ❯ Refresh configuration
   Run extractions and aggregations
   Run reductions
   ---------------
   Run computation UMAPs and mean distances matrix (needed for autocluster)
   Purge computation UMAPs and mean distances matrix
   ---------------
   Run autoclusters
   Run trajectories
   Run relative trajectories
   Run digests
   ---------------
   Run all
   ---------------
   Export dataframe as .csv
   Export computation UMAPs as .npy
   Export mean distances matrix as .npy
   Repack storage with \`h5repack\` (UNIX only)
   ---------------
   Quit`;

interface Props {
  version: string;
}

export const ProcessingMenuBlock12_0_0 = ({version}: Props) => (
  <CodeBlock language="bash">{code(version)}</CodeBlock>
);
