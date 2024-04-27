import Head from '@docusaurus/Head';
import {APP_DESCRIPTION} from '@site/constants';
import React, {useMemo} from 'react';

interface Props {
  title: string;
  pre?: string[];
}

const divider = '|';
const addDivider = (s: string) => {
  return `${s} ${divider} `;
};

export const Title = ({title, pre}: Props) => {
  const complete = useMemo(() => {
    let string = '';

    string += title;

    if (pre) {
      for (const category of pre) {
        string = addDivider(string);
        string += category;
      }
    }

    string = addDivider(string);
    string += APP_DESCRIPTION;

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
