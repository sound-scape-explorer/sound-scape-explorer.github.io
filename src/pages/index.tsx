import '@fontsource/merriweather';
import '@fontsource/jetbrains-mono';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {APP_NAME} from '@site/constants';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {HomepageHero} from '@site/src/components/HomepageHero';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${APP_NAME}`}
      description={siteConfig.tagline}
    >
      <HomepageHero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
