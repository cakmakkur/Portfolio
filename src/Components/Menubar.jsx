import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";
import LanguageToggleButton from "./LanguageToggleButton";
import { useThemeContext } from "../GlobalContext/ThemeContext";
import nameLogo__o from "../Assets/sig.png";
import nameLogo__b from "../Assets/sig.png";
import { useEffect, useRef } from "react";
import { useLanguageContext } from "../GlobalContext/LanguageContext";

export default function Menubar() {
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();
  const menuHomeBtnRef = useRef();
  const menuContactBtnRef = useRef();
  const menuExhibitionBtnRef = useRef();
  const uiCatalogBtnRef = useRef();
  const logoImgRef = useRef();

  //starting animation
  useEffect(() => {
    const mountedBefore = sessionStorage.getItem("pageMountedBefore");
    if (mountedBefore === "true") {
      logoImgRef.current.style.opacity = "1";
      // logoImgRef.current.style.transform = "scale(1)";
      menuHomeBtnRef.current.style.transform = "translateY(0px)";
      menuContactBtnRef.current.style.transform = "translateY(0px)";
      menuExhibitionBtnRef.current.style.transform = "translateY(0px)";
      uiCatalogBtnRef.current.style.transform = "translateY(0px)";
      return;
    }

    const timeoutId3 = setTimeout(() => {
      logoImgRef.current.style.opacity = "1";
      // logoImgRef.current.style.transform = "scale(1)";
    }, 1000);
    const timeoutId = setTimeout(() => {
      menuHomeBtnRef.current.style.transform = "translateY(0px)";
    }, 2000);
    const timeoutId2 = setTimeout(() => {
      menuContactBtnRef.current.style.transform = "translateY(0px)";
    }, 2300);
    const timeoutId4 = setTimeout(() => {
      menuExhibitionBtnRef.current.style.transform = "translateY(0px)";
    }, 2300);
    const timeoutId5 = setTimeout(() => {
      uiCatalogBtnRef.current.style.transform = "translateY(0px)";
    }, 2300);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      clearTimeout(timeoutId4);
      clearTimeout(timeoutId5);
    };
  }, []);

  return (
    <nav className="menu__nav__div">
      <img
        width="120px"
        className="logo_img"
        src={theme.type === "dark" ? nameLogo__b : nameLogo__o}
        alt="Logo"
        ref={logoImgRef}
      />
      <Link ref={menuHomeBtnRef} className={`menu-button`} to="/">
        HOME
      </Link>
      <Link
        ref={menuExhibitionBtnRef}
        className={`menu-button`}
        to="/exhibition"
      >
        EXHIBITION
      </Link>
      <Link
        ref={uiCatalogBtnRef}
        className={`menu-button animated-text`}
        style={{ fontWeight: "nurmal important!" }}
        to="/ui-catalog"
      >
        UI CATALOGUE
      </Link>
      <Link
        ref={menuContactBtnRef}
        className={`menu-button`}
        style={{ marginRight: "20px" }}
        to="/contact"
      >
        {language === "EN" ? "CONTACT" : "KONTAKT"}
      </Link>
      <LanguageToggleButton />
      <ThemeToggleButton />
    </nav>
  );
}
