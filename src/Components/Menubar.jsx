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
      menuHomeBtnRef.current.style.transform = "translateY(0px)";
      menuContactBtnRef.current.style.transform = "translateY(0px)";
      menuExhibitionBtnRef.current.style.transform = "translateY(0px)";
      uiCatalogBtnRef.current.style.transform = "translateY(0px)";
      return;
    }

    const timeoutIdLogo = setTimeout(() => {
      logoImgRef.current.style.opacity = "1";
    }, 800);

    const timeoutIdHome = setTimeout(() => {
      menuHomeBtnRef.current.style.transform = "translateY(0px)";
    }, 1600);
    const timeoutIdExhibition = setTimeout(() => {
      menuExhibitionBtnRef.current.style.transform = "translateY(0px)";
    }, 1900);
    const timeoutIdUICatalog = setTimeout(() => {
      uiCatalogBtnRef.current.style.transform = "translateY(0px)";
    }, 2200);

    const timeoutIdContact = setTimeout(() => {
      menuContactBtnRef.current.style.transform = "translateY(0px)";
    }, 2500);

    return () => {
      clearTimeout(timeoutIdLogo);
      clearTimeout(timeoutIdHome);
      clearTimeout(timeoutIdContact);
      clearTimeout(timeoutIdExhibition);
      clearTimeout(timeoutIdUICatalog);
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
        className={`menu-button ${
          theme.type === "light" ? "animated-text" : "animated-text--dark"
        }`}
        style={{ fontWeight: "normal important!" }}
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
