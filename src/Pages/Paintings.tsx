import { useState } from "react";
import BackgroundAnimation from "../Components/BackgroundAnimation";

const paintings = [
  "painting-1.jpeg",
  "painting-2.jpeg",
  "painting-3.jpeg",
  "painting-5.jpeg",
  "painting-6.jpeg",
  "painting-7.jpeg",
  "painting-8.jpeg",

  "painting-9.jpeg",
  "painting-10.jpeg",
  "painting-12.jpeg",
  "painting-15.jpeg",
  "painting-19.jpeg",
  "painting-20.jpeg",
  "painting-23.jpeg",
  "painting-24.jpeg",
  "painting-26.jpeg",
  "painting-28.jpeg",
  "painting-31.jpeg",
  "painting-36.jpeg",
  "painting-37.jpeg",
  "painting-17.jpeg",
  "painting-38.png",
];

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
