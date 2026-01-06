import ReactPlayer from 'react-player';

export const VideoPlayer = ({src}: {src: string}) => {
  return (
    <ReactPlayer
      controls
      src={src}
      style={{width: '100%', height: 'auto', aspectRatio: '16/9'}}
    />
  );
};
