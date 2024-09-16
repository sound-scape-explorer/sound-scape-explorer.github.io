import {APP_DESCRIPTION} from '@site/constants';
import CodeBlock from '@theme/CodeBlock';
import {useMemo} from 'react';

const code = (
  version: Props['version'],
  name: string,
) => `Loading configuration...
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
👋 Welcome to ${name} v${version}!

State in storage:
❌ Missing
✅ Present

? Choose your action
❯ Run all
  ---------------
  ❌ Refresh configuration
  ❌ Run extractions and aggregations
  ❌ Run reductions
  ---------------
  ❌ Run computation UMAPs and mean distances matrix (needed for autocluster and relative trajectories)
  Purge computation UMAPs and mean distances matrix
  ---------------
  ❌ Run autoclusters
  ❌ Run trajectories
  ❌ Run relative trajectories
  ❌ Run digests
  ---------------
  Export dataframe as .csv
  Export computation UMAPs as .npy
  Export mean distances matrix as .npy
  ---------------
  Quit`;

interface Props {
  version: string;
  isCse?: boolean;
}

export const ProcessingMenuBlock13_1_8 = ({version, isCse = false}: Props) => {
  const appName = useMemo(() => {
    if (isCse) {
      return 'CoralSoundExplorer';
    }

    return APP_DESCRIPTION;
  }, [isCse]);

  return <CodeBlock language="bash">{code(version, appName)}</CodeBlock>;
};
