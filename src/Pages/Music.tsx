import { useState } from "react";
import BackgroundAnimation from "../Components/BackgroundAnimation";
import MusicPlayer from "../Components/MusicPlayer";
import { musicTracks } from "../data/music";

export default function Music() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = musicTracks[currentTrackIndex];

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-main-div">
      <BackgroundAnimation />

      <div className="music-container">
        <h1 className="music-title">MUSIC</h1>

        <div className="music-player-wrapper">
          <MusicPlayer
            track={currentTrack}
            isPlaying={isPlaying}
            onPlayToggle={handlePlayToggle}
          />
        </div>

        <div className="music-playlist">
          <h2>Playlist</h2>
          <ul className="music-track-list">
            {musicTracks.map((track, index) => (
              <li
                key={track.id}
                className={`music-track-item ${
                  index === currentTrackIndex ? "active" : ""
                }`}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentTrackIndex(index);
                }}
              >
                {track.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
