import FxButton from "../Components/FXButton";
import { useThemeContext } from "../GlobalContext/ThemeContext";

export default function Exhibition() {
  const { theme } = useThemeContext();

  return (
    <div className="exhibition-main-div">
      This page is currently being built. Come back again soon!
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
        <FxButton
          width="35vw"
          height="35vw"
          href=""
          onClick={() => alert("Coming up soon!")}
        >
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
            />{" "}
            <br /> PAINTINGS
          </div>
        </FxButton>
      </div>
    </div>
  );
}
