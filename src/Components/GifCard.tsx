interface VideoCardProps {
  src: string;
  css?: string;
}

import { useRef } from "react";

function VideoCard({ src, css }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className={`gif-card ${css ?? ""}`}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <div className="gif-card__media">
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          width="100%"
        />
      </div>
    </div>
  );
}

export default VideoCard;
