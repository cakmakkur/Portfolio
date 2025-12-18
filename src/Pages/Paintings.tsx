import { useState } from "react";
import BackgroundAnimation from "../Components/BackgroundAnimation";

export default function Paintings() {
  const paintings = ["painting-1.jpeg", "painting-2.jpeg"];
  const [currentPaintingIndex, setCurrentPaintingIndex] = useState(0);

  const prevIndex = currentPaintingIndex > 0 ? currentPaintingIndex - 1 : null;
  const nextIndex =
    currentPaintingIndex < paintings.length - 1
      ? currentPaintingIndex + 1
      : null;

  return (
    <div className="paintings-main-div">
      <BackgroundAnimation />
      <div className="painting-container">
        <img
          src={`/paintings/${paintings[currentPaintingIndex]}`}
          alt={`Painting ${currentPaintingIndex + 1}`}
        />

        {/* Preload previous image */}
        {prevIndex !== null && (
          <img
            src={`/paintings/${paintings[prevIndex]}`}
            alt=""
            style={{ display: "none" }}
          />
        )}

        {/* Preload next image */}
        {nextIndex !== null && (
          <img
            src={`/paintings/${paintings[nextIndex]}`}
            alt=""
            style={{ display: "none" }}
          />
        )}
      </div>
      <div className="button-overlay">
        <button
          onClick={() => {
            setCurrentPaintingIndex((prev) => {
              if (prev > 0) {
                return prev - 1;
              }
              return prev;
            });
          }}
          disabled={currentPaintingIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setCurrentPaintingIndex((prev) => {
              if (prev < paintings.length - 1) {
                return prev + 1;
              }
              return prev;
            });
          }}
          disabled={currentPaintingIndex === paintings.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
