import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";
import LanguageToggleButton from "./LanguageToggleButton";
import { useThemeContext } from "../GlobalContext/ThemeContext";
import nameLogo__o from "../Assets/sig.png";
import nameLogo__b from "../Assets/sig.png";
import { useEffect, useRef, useState } from "react";
import { useLanguageContext } from "../GlobalContext/LanguageContext";
import { useWindowSize } from "../utils/WIndowSize";

export default function Menubar() {
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();
  const menuHomeBtnRef = useRef();
  const menuContactBtnRef = useRef();
  const menuExhibitionBtnRef = useRef();
  const uiCatalogBtnRef = useRef();
  const logoImgRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const { width } = useWindowSize();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

  useEffect(() => {
    if (menuOpen && width < 1070) {
      menuRef.current.style.transform = "translateX(0%)";
    } else if (width < 1070) {
      menuRef.current.style.transform = "translateX(100%)";
    }
  }, [menuOpen]);

  useEffect(() => {
    if (width > 1070) {
      menuRef.current.style.transform = "translateX(0%)";
    } else {
      menuRef.current.style.transform = "translateX(100%)";
    }
  }, [width]);

  return (
    <>
      <button onClick={toggleMenu} className="menubar-burger-button">
        {theme.type === "dark" ? (
          <img src="/burger-dark.svg" alt="Logo" />
        ) : (
          <img
            src="/burger-light.svg"
            alt="Logo"
            style={{ filter: "invert(1)" }}
          />
        )}
      </button>
      <nav ref={menuRef} className="menu__nav__div">
        <img
          width="120px"
          className="logo_img"
          src={theme.type === "dark" ? nameLogo__b : nameLogo__o}
          alt="Logo"
          ref={logoImgRef}
        />
        <Link
          onClick={() => {
            setMenuOpen(false);
          }}
          ref={menuHomeBtnRef}
          className={`menu-button`}
          to="/"
        >
          HOME
        </Link>
        <Link
          onClick={() => {
            setMenuOpen(false);
          }}
          ref={menuExhibitionBtnRef}
          className={`menu-button`}
          to="/exhibition"
        >
          EXHIBITION
        </Link>
        <Link
          onClick={() => {
            setMenuOpen(false);
          }}
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
          onClick={() => {
            setMenuOpen(false);
          }}
          ref={menuContactBtnRef}
          className={`menu-button menu-button-contact`}
          to="/contact"
        >
          {language === "EN" ? "CONTACT" : "KONTAKT"}
        </Link>
        <LanguageToggleButton />
        <ThemeToggleButton />
      </nav>
    </>
  );
}
