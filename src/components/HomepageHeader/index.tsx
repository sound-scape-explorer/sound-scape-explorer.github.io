import '@fontsource/merriweather';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {APP_NAME} from '@site/constants';
import Logo from '@site/static/img/logo.svg';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import {Book} from 'react-feather';

import styles from './index.module.css';

export const HomepageHeader = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading
          as="h1"
          className="hero__title"
        >
          <Logo
            className={styles.logo}
            role="img"
          />{' '}
          {siteConfig.title}
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
