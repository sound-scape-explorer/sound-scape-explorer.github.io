import '@fontsource/merriweather';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {APP_NAME} from '@site/constants';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {HomepageHeader} from '@site/src/components/HomepageHeader';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${APP_NAME}`}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
