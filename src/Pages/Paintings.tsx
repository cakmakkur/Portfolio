import { useState } from "react";
import BackgroundAnimation from "../Components/BackgroundAnimation";

const paintings = [
  "painting-25.jpeg",
  "painting-36.png",
  "painting-2.jpeg",
  "painting-24.png",
  "painting-19.png",
  "painting-26.png",
  "painting-15.png",
  "painting-8.png",
  "painting-1.jpeg",
  "painting-23.jpeg",
  "painting-9.png",
  "painting-10.png",
  "painting-20.png",
  "painting-12.png",
  "painting-22.jpg",
  "painting-31.png",
  "painting-6.png",
  "painting-11.png",
  "painting-17.png",
  "painting-28.png",
  "painting-37.jpeg",
  "painting-13.png",
  "painting-18.png",
  "painting-38.png",
  "painting-7.png",
  "painting-4.png",
  "painting-3.jpeg",
  "painting-21.png",
  "painting-5.png",
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
