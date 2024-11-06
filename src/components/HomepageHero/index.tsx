import '@fontsource/merriweather';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {APP_NAME} from '@site/constants';
// @ts-expect-error: TS2307
import demo from '@site/static/img/demo.png';
import Logo from '@site/static/img/logo.svg';
// @ts-expect-error: TS2307
import Heading from '@theme/Heading';
import clsx from 'clsx';
import {Book} from 'react-feather';

import styles from './index.module.css';

export const HomepageHero = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading
          as="h1"
          className="hero__title"
        >
          <div className={styles.container}>
            <img
              src={demo}
              className={styles.demo}
              alt="demo"
            />
          </div>
          <Logo className={styles.logo} /> {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.tagline} using {APP_NAME} software.
        </p>
        <div className={styles.buttons}>
          <Link
            className={`button button--secondary button--lg ${styles.button}`}
            to="/docs"
          >
            Get started{' '}
            <Book
              size={16}
              className={styles.book}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
