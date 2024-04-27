import Head from '@docusaurus/Head';
import {APP_DESCRIPTION, APP_NAME} from '@site/constants';
import React, {useMemo} from 'react';

interface Props {
  title: string;
  pre?: string[];
  version?: string;
}

const divider = '|';
const addDivider = (s: string) => {
  return `${s} ${divider} `;
};

export const Title = ({title, pre, version}: Props) => {
  const complete = useMemo(() => {
    let string = '';

    string += title;

    if (pre) {
      for (const category of pre) {
        string = addDivider(string);
        string += category;
      }
    }

    if (version) {
      string = addDivider(string);
      string += `${APP_NAME} ${version}`;
    } else {
      string = addDivider(string);
      string += APP_DESCRIPTION;
    }

    return string;
  }, []);

  return (
    <>
      <Head>
        <title>{complete}</title>
      </Head>
    </>
  );
};
