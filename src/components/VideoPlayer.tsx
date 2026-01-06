import React, {useCallback, useMemo, useRef} from 'react';
import ReactPlayer from 'react-player';

interface Props {
  src: string;
  start?: number;
  end?: number;
  loop?: boolean;
  noControls?: boolean;
  autoplay?: boolean;
}

export function VideoPlayer({
  src,
  start = null,
  end = null,
  loop = false,
  noControls = false,
  autoplay = false,
}: Props) {
  const playerRef = useRef<HTMLVideoElement>(null);

  const actualSource = useMemo(() => {
    if (start !== null && end !== null) {
      return `${src}#t=${start},${end}`;
    }

    return src;
  }, [src, start, end]);

  const handleTimeUpdate = useCallback(
    async (event: React.SyntheticEvent<HTMLVideoElement>) => {
      if (!end || !playerRef.current) {
        return;
      }

      const currentTime = event.currentTarget.currentTime;

      if (currentTime >= end) {
        playerRef.current.currentTime = start || 0;
      }
    },
    [playerRef, start, end],
  );

  const handlePause = useCallback(async () => {
    if (!loop || !playerRef.current || start === null) {
      return;
    }

    playerRef.current.currentTime = start;
    await playerRef.current.play();
  }, [playerRef, loop, start]);

  const handleLoad = useCallback(() => {
    if (!autoplay) {
      return;
    }

    playerRef.current.play().then();
  }, []);

  return (
    <ReactPlayer
      ref={playerRef}
      controls={!noControls}
      src={actualSource}
      style={{width: '100%', height: 'auto', aspectRatio: '16/9'}}
      loop={loop}
      onTimeUpdate={end && loop ? handleTimeUpdate : undefined}
      onPause={loop ? handlePause : undefined}
      onReady={handleLoad}
      muted={autoplay}
    />
  );
}
