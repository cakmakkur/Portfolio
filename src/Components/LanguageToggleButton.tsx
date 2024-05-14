import { useThemeContext } from "../GlobalContext/ThemeContext";
import { useState, useRef } from "react";
import { useLanguageContext } from "../GlobalContext/LanguageContext";
import languageIcon from "../Assets/language_icon";

export default function LanguageToggleButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const optionRef = useRef<HTMLSpanElement>(null);
  const currentRef = useRef<HTMLSpanElement>(null);
  const { theme } = useThemeContext();
  const { language, toggleLanguage } = useLanguageContext();

  const toggleOptions = () => {
    setTransitionEnabled(true);
    setIsOpen(!isOpen);
  };

  const currentButtonStyles = {
    backgroundColor: hover || isOpen ? theme.menuBtnBgHl : undefined,
  };

  const optionButtonStyles = {
    backgroundColor: isOpen ? theme.menuBtnBgHl : undefined,
  };

  const lgSpanStyles = {
    color: hover || isOpen ? theme.menuBtnTxHl : undefined,
  };

  const togglePageTheme = () => {
    if (optionRef.current && currentRef.current) {

    optionRef.current.classList.remove("switch__options--open");
    optionRef.current.classList.add("switch__options--closing");
    currentRef.current.classList.add("menu__switch__btn--closing");
    }

    setTimeout(() => {
      toggleLanguage();
      setTransitionEnabled(false);
      setIsOpen(false);
    }, 300);
  };

  return (
    <div className="menu__switch__div">
      {languageIcon(theme.text)}
      <span
        ref={currentRef}
        style={currentButtonStyles}
        className={`menu__switch__btn
            ${isOpen ? "menu__switch__btn--open" : ""}
            `}
        onClick={() => toggleOptions()}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {language === "EN" ? (
          <span style={lgSpanStyles}>EN</span>
        ) : (
          <span style={lgSpanStyles}>DE</span>
        )}
      </span>
      <span
        ref={optionRef}
        style={optionButtonStyles}
        onClick={() => togglePageTheme()}
        className={`switch__options ${isOpen ? "switch__options--open" : ""} ${
          transitionEnabled ? "switch__options--transition" : ""
        }`}
      >
        {language === "EN" ? (
          <span style={lgSpanStyles}>DE</span>
        ) : (
          <span style={lgSpanStyles}>EN</span>
        )}
      </span>
    </div>
  );
}
