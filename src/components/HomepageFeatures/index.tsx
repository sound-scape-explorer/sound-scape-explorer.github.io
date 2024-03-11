import Heading from '@theme/Heading';
import clsx from 'clsx';
import {ComponentProps, ComponentType, ReactElement} from 'react';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: ComponentType<ComponentProps<'svg'>>;
  description: ReactElement;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Campaign',
    // eslint-disable-next-line no-undef
    Svg: require('@site/static/img/undraw_spreadsheets_re_alt0.svg').default,
    description: (
      <>
        Add audio files
        <br />
        Describe user labels
        <br />
        Define intervals & metrics
      </>
    ),
  },
  {
    title: 'Processing',
    // eslint-disable-next-line no-undef
    Svg: require('@site/static/img/undraw_data_processing_yrrv.svg').default,
    description: (
      <>
        Extract data with neural networks
        <br />
        Reduce spaces to visualisable dimensions
        <br />
        Apply statistics
      </>
    ),
  },
  {
    title: 'Visualisation',
    // eslint-disable-next-line no-undef
    Svg: require('@site/static/img/undraw_winter_designer_a-2-m7.svg').default,
    description: (
      <>
        Analyse data
        <br />
        Listen to intervals
        <br />
        Explore results
      </>
    ),
  },
];

function Feature({title, Svg, description}: Readonly<FeatureItem>) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
