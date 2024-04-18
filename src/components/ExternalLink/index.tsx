import {SizeInfo} from '../SizeInfo';

interface Props {
  link: string;
  text: string;
  size?: string;
}

export const ExternalLink = ({link, text, size}: Props) => {
  return (
    <>
      <a
        href={link}
        target={'_blank'}
        rel={'noreferrer noopener'}
        itemProp={'url'}
      >
        {text}
      </a>
      {size && <SizeInfo size={size} />}
    </>
  );
};
