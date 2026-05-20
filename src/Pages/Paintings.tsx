import { useEffect, useState } from "react";
import BackgroundAnimation from "../Components/BackgroundAnimation";
import { paintings } from "../data/paintings";

function getPosition(index: number, currentIndex: number, count: number) {
  const offset = (index - currentIndex + count) % count;
  if (offset === 0) return "middle";
  if (offset === 1) return "right";
  if (offset === count - 1) return "left";
  if (offset === 2) return "hidden-right";
  if (offset === count - 2) return "hidden-left";
  return "hidden";
}

export default function Paintings() {
  const [currentPaintingIndex, setCurrentPaintingIndex] = useState(0);
  const [priorityLoadedCount, setPriorityLoadedCount] = useState(0);

  useEffect(() => {
    let mounted = true;
    const prioritized = [
      paintings[0],
      paintings[1],
      paintings[paintings.length - 2],
      paintings[paintings.length - 1],
    ].filter(Boolean);

    const preloadPriority = prioritized.map((src) => {
      const img = new Image();
      img.src = `/paintings/${src}`;
      img.onload = () => {
        if (mounted) setPriorityLoadedCount((prev) => prev + 1);
      };
      img.onerror = () => {
        if (mounted) setPriorityLoadedCount((prev) => prev + 1);
      };
      return img;
    });

    const remaining = paintings.slice(2, -2).map((src) => {
      const img = new Image();
      img.src = `/paintings/${src}`;
      return img;
    });

    return () => {
      mounted = false;
      [...preloadPriority, ...remaining].forEach((img) => {
        img.src = "";
      });
    };
  }, []);

  const essentialReady = priorityLoadedCount >= 4;
  const loadingPercentage = Math.min(100, Math.round((priorityLoadedCount / 4) * 100));

  if (!essentialReady) {
    return (
      <div className="painting-loading-overlay">
        <div className="painting-loading-content">
          <div className="painting-loading-progress">
            <div
              className="painting-loading-progress__fill"
              style={{ width: `${loadingPercentage}%` }}
            />
          </div>
          <div className="painting-loading-progress__label">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  const prevPainting = () => {
    setCurrentPaintingIndex(
      (prev) => (prev - 1 + paintings.length) % paintings.length,
    );
  };

  const nextPainting = () => {
    setCurrentPaintingIndex((prev) => (prev + 1) % paintings.length);
  };

  return (
    <div className="paintings-main-div">
      <BackgroundAnimation />

      <div className="paintings-carousel">
        {paintings.map((painting, index) => {
          const position = getPosition(
            index,
            currentPaintingIndex,
            paintings.length,
          );
          if (position === "hidden") return null;

          return (
            <div
              key={painting}
              className={`painting-card painting-card--${position}`}
            >
              <img
                src={`/paintings/${painting}`}
                alt={`Painting ${index + 1}`}
              />
            </div>
          );
        })}
      </div>

      <div className="button-overlay">
        <button
          aria-label="previous"
          className="prev-button"
          onClick={prevPainting}
        ></button>
        <button
          aria-label="next"
          className="next-button"
          onClick={nextPainting}
        ></button>
      </div>
    </div>
  );
}
