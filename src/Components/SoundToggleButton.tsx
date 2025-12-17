import { useThemeContext } from "../GlobalContext/ThemeContext";
import { useState, useRef, useEffect } from "react";

interface SoundToggleButtonProps {
  toggleBgMusic: () => void;
  soundOn: boolean;
  setSoundOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SoundToggleButton({
  toggleBgMusic,
  soundOn,
  setSoundOn,
}: SoundToggleButtonProps) {
  const { theme } = useThemeContext();
  const [hover, setHover] = useState(false);

  //beginning- sliding into position animation:
  const buttonDivRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mountedBefore = sessionStorage.getItem("pageMountedBefore");
    if (mountedBefore === "true") {
      if (!buttonDivRef.current) return;
      buttonDivRef.current.style.transform = "translateY(0px)";
      return;
    }
    const timeoutId = setTimeout(() => {
      if (!buttonDivRef.current) return;
      buttonDivRef.current.style.transform = "translateY(0px)";
    }, 2200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div ref={buttonDivRef} className="menu__switch__div th__swich__div">
      {soundOn ? (
        <button
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          className="menu__switch__btn menu__switch__div-button"
          style={hover ? { backgroundColor: theme.menuBtnBgHl } : undefined}
          onClick={() => {
            setSoundOn(false);
            toggleBgMusic();
          }}
        >
          <img
            src={
              theme.type === "dark"
                ? "/sound-on-dark.svg"
                : "/sound-on-light.svg"
            }
            alt=""
          />
        </button>
      ) : (
        <button
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          className="menu__switch__btn menu__switch__div-button"
          style={hover ? { backgroundColor: theme.menuBtnBgHl } : undefined}
          onClick={() => {
            setSoundOn(true);
            toggleBgMusic();
          }}
        >
          <img
            src={
              theme.type === "dark"
                ? "/sound-off-dark.svg"
                : "/sound-off-light.svg"
            }
            alt=""
          />
        </button>
      )}
    </div>
  );
}
