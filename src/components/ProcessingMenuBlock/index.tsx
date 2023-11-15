import {APP_DESCRIPTION} from '@site/constants';
import CodeBlock from '@theme/CodeBlock';

const code = `👋 Welcome to ${APP_DESCRIPTION}!

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
   Run digests
   ---------------
   Run all
   Export dataframe as .csv
   Export computation UMAPs as .npy
   Export mean distances matrix as .npy
   Repack storage with \`h5repack\` (UNIX only)
   ---------------
   Quit`;

export const ProcessingMenuBlock = () => (
  <CodeBlock language="bash">{code}</CodeBlock>
);
