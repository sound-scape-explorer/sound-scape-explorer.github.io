import {APP_DESCRIPTION} from '@site/constants';
import CodeBlock from '@theme/CodeBlock';

const code = (version: Props['version']) => `Loading configuration...
Config loaded: /app/examples/campaigns/coral-reef-light/coral-reef-light.xlsx
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Setting                     ┃ Value                                                       ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ storage_path                │ /app/examples/campaigns/coral-reef-light/coral-reef-light.… │
│ audio_path                  │ /app/examples/campaigns/coral-reef-light/audio              │
│ expected_sample_rate        │ 44100                                                       │
│ timeline_origin             │ 2021-01-01 00:00:00                                         │
│ audio_host                  │                                                             │
│ timezone                    │ None                                                        │
│ computation_umap_dimensions │ 3                                                           │
│ computation_umap_iterations │ 10                                                          │
│ display_umap_seed           │ 42000                                                       │
└─────────────────────────────┴─────────────────────────────────────────────────────────────┘
👋 Welcome to ${APP_DESCRIPTION} v${version}!

State in storage:
❌ Missing
✅ Present

? Choose your action
❯ ✅ Refresh configuration
  ✅ Run extractions and aggregations
  ✅ Run reductions
  ---------------
  ✅ Run computation UMAPs and mean distances matrix (needed for autocluster and relative trajectories)
  Purge computation UMAPs and mean distances matrix
  ---------------
  ✅ Run autoclusters
  ✅ Run trajectories
  ✅ Run relative trajectories
  ✅ Run digests
  ---------------
  Run all
  ---------------
  Export dataframe as .csv
  Export computation UMAPs as .npy
  Export mean distances matrix as .npy
  Repack storage with \`h5repack\` (UNIX only)
  ---------------
  Fix audio on Windows for versions <=10.7.2
  ---------------
  Quit`;

interface Props {
  version: string;
}

export const ProcessingMenuBlock12_2_0 = ({version}: Props) => (
  <CodeBlock language="bash">{code(version)}</CodeBlock>
);
