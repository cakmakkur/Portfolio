import { useEffect, useState } from "react";
import LoadingHexagonal from "../utils/LoadingHexagonal";
import FxButton from "../Components/FXButton";
import { useThemeContext } from "../GlobalContext/ThemeContext";
import { paintings as paintingImages } from "../data/paintings";

export default function Exhibition() {
  const { theme } = useThemeContext();
  const [priorityLoadedCount, setPriorityLoadedCount] = useState(0);

  useEffect(() => {
    const firstTwo = paintingImages.slice(0, 2);
    const lastTwo = paintingImages.slice(-2);
    const prioritizedImages = [firstTwo[0], firstTwo[1], lastTwo[0], lastTwo[1]].filter(Boolean);
    const remaining = paintingImages.slice(2, -2);

    const preloadImages = prioritizedImages.map((src) => {
      const img = new Image();
      img.src = `/paintings/${src}`;
      img.onload = () => setPriorityLoadedCount((prev) => prev + 1);
      img.onerror = () => setPriorityLoadedCount((prev) => prev + 1);
      return img;
    });

    const remainingPreloads = remaining.map((src) => {
      const img = new Image();
      img.src = `/paintings/${src}`;
      return img;
    });

    return () => {
      [...preloadImages, ...remainingPreloads].forEach((img) => {
        img.src = "";
      });
    };
  }, []);

  const essentialReady = priorityLoadedCount >= 4;

  if (!essentialReady) {
    return (
      <div className="exhibition-loading-overlay">
        <LoadingHexagonal />
      </div>
    );
  }

  return (
    <div className="exhibition-main-div">
      <div className="exhibition-initial-buttons">
        <FxButton
          width="35vw"
          height="35vw"
          href=""
          onClick={() => alert("Coming up soon!")}
        >
          <div
            className={`exhibition-init-btn go-to-music-btn ${
              theme.type === "dark"
                ? "go-to-music-btn--dark"
                : "go-to-music-btn--light"
            }`}
          >
            <img
              src={
                theme.type === "dark" ? "/music-dark.svg" : "/music-light.svg"
              }
              alt=""
            />{" "}
            <br /> MUSIC
          </div>
        </FxButton>
        <FxButton width="35vw" height="35vw" to="/paintings">
          <div
            className={`exhibition-init-btn go-to-paintings-btn ${
              theme.type === "dark"
                ? "go-to-paintings-btn--dark"
                : "go-to-paintings-btn--light"
            }`}
          >
            <img
              src={
                theme.type === "dark"
                  ? "/painting-dark.svg"
                  : "/painting-light.svg"
              }
              alt=""
            />
            <br /> PAINTINGS
          </div>
        </FxButton>
      </div>
    </div>
  );
}
