import { useThemeContext } from "../GlobalContext/ThemeContext";
import darkModeIcon from "../Assets/dark_mode_icon";
import lightModeIcon from "../Assets/light_mode_icon";
import { useState, useRef } from "react";

export default function ThemeToggleButton() {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const optionRef = useRef<HTMLSpanElement>(null);
  const currentRef = useRef<HTMLSpanElement>(null);
  const { theme, toggleTheme } = useThemeContext();

  const toggleThemeOptions = () => {
    setTransitionEnabled(true);
    setIsThemeOpen(!isThemeOpen);
  };

  const currentButtonStyles = {
    backgroundColor: hover || isThemeOpen ? theme.menuBtnBgHl : undefined,
  };

  const optionButtonStyles = {
    backgroundColor: isThemeOpen ? theme.menuBtnBgHl : undefined,
  };

  const togglePageTheme = () => {
    if (optionRef.current && currentRef.current) {
      optionRef.current.classList.remove("switch__options--open");
      optionRef.current.classList.add("switch__options--closing");
      currentRef.current.classList.add("menu__switch__btn--closing");
    }

    setTimeout(() => {
      toggleTheme();
      setTransitionEnabled(false);
      setIsThemeOpen(false);
    }, 300);
  };

  return (
    <div className="menu__switch__div">
      <span
        ref={currentRef}
        style={currentButtonStyles}
        className={`menu__switch__btn 
            ${isThemeOpen ? "menu__switch__btn--open" : ""}
            `}
        onClick={() => toggleThemeOptions()}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {theme.type === "dark"
          ? darkModeIcon(theme.text)
          : lightModeIcon(theme.text)}
      </span>
      <span
        ref={optionRef}
        style={optionButtonStyles}
        onClick={() => togglePageTheme()}
        className={`switch__options ${
          isThemeOpen ? "switch__options--open" : ""
        } ${transitionEnabled ? "switch__options--transition" : ""}`}
      >
        {theme.type === "dark"
          ? lightModeIcon(theme.text)
          : darkModeIcon(theme.text)}
      </span>
    </div>
  );
}
