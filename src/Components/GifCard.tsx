import { useRef, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface VideoCardProps {
  src: string;
  css?: string;
}

function VideoCard({ src, css }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

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
      {!videoLoaded && (
        <div className="cliploader__div--mobile">
          <ClipLoader
            loading={true}
            color={"rgb(255, 122, 19)"}
            size={55}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div className="gif-card__media" style={{ opacity: videoLoaded ? 1 : 0 }}>
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          width="100%"
          onLoadedData={() => setVideoLoaded(true)}
        />
      </div>
    </div>
  );
}

export default VideoCard;
