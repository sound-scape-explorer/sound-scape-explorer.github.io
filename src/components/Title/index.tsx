import Head from '@docusaurus/Head';
import {APP_DESCRIPTION} from '@site/constants';
import {useMemo} from 'react';

interface Props {
  children: string;
  categories?: string[];
}

export const Title = ({children, categories}: Props) => {
  const title = useMemo(() => {
    let string = '';
    const divider = '|';

    const addDivider = (s: string) => {
      return (s += ` ${divider} `);
    };

    string += children;

    if (categories) {
      for (const category of categories) {
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
        <title>{title}</title>
      </Head>
    </>
  );
};
