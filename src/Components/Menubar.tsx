import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";
import LanguageToggleButton from "./LanguageToggleButton";
import { useThemeContext } from "../GlobalContext/ThemeContext";
import SoundToggleButton from "./SoundToggleButton";
import nameLogo__o from "../Assets/sig.png";
import nameLogo__b from "../Assets/sig-d.png";
import { useEffect, useRef, useState } from "react";
import { useLanguageContext } from "../GlobalContext/LanguageContext";
import { useWindowSize } from "../utils/WIndowSize";

export default function Menubar() {
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const [soundOn, setSoundOn] = useState(false);

  const menuHomeBtnRef = useRef<HTMLAnchorElement | null>(null);
  const menuContactBtnRef = useRef<HTMLAnchorElement | null>(null);
  const menuExhibitionBtnRef = useRef<HTMLAnchorElement | null>(null);
  const uiCatalogBtnRef = useRef<HTMLAnchorElement | null>(null);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const menuRef = useRef<HTMLElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleBgMusic = () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.5;
    audioRef.current.loop = true;
    if (soundOn) {
      console.log("pause");
      audioRef.current.pause();
      setSoundOn(false);
    } else {
      console.log("play");
      audioRef.current.play();
      setSoundOn(true);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //starting animation
  useEffect(() => {
    const mountedBefore = sessionStorage.getItem("pageMountedBefore");
    if (!logoImgRef.current) return;
    if (!menuHomeBtnRef.current) return;
    if (!menuContactBtnRef.current) return;
    if (!menuExhibitionBtnRef.current) return;
    if (!uiCatalogBtnRef.current) return;

    if (mountedBefore === "true") {
      logoImgRef.current.style.opacity = "1";
      menuHomeBtnRef.current.style.transform = "translateY(0px)";
      menuContactBtnRef.current.style.transform = "translateY(0px)";
      menuExhibitionBtnRef.current.style.transform = "translateY(0px)";
      uiCatalogBtnRef.current.style.transform = "translateY(0px)";
      return;
    }
    const timeoutIdLogo = setTimeout(() => {
      if (!logoImgRef.current) return;
      logoImgRef.current.style.opacity = "1";
    }, 500);

    const timeoutIdHome = setTimeout(() => {
      if (!menuHomeBtnRef.current) return;
      menuHomeBtnRef.current.style.transform = "translateY(0px)";
    }, 1000);
    const timeoutIdExhibition = setTimeout(() => {
      if (!menuExhibitionBtnRef.current) return;

      menuExhibitionBtnRef.current.style.transform = "translateY(0px)";
    }, 1200);
    const timeoutIdUICatalog = setTimeout(() => {
      if (!uiCatalogBtnRef.current) return;
      uiCatalogBtnRef.current.style.transform = "translateY(0px)";
    }, 1400);

    const timeoutIdContact = setTimeout(() => {
      if (!menuContactBtnRef.current) return;
      menuContactBtnRef.current.style.transform = "translateY(0px)";
    }, 1600);

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
      if (!menuRef.current) return;
      menuRef.current.style.transform = "translateX(0%)";
    } else if (width < 1070) {
      if (!menuRef.current) return;
      menuRef.current.style.transform = "translateX(100%)";
    }
  }, [menuOpen]);

  useEffect(() => {
    if (width > 1070) {
      if (!menuRef.current) return;
      menuRef.current.style.transform = "translateX(0%)";
    } else {
      if (!menuRef.current) return;
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
        {/* <SoundToggleButton
          soundOn={soundOn}
          setSoundOn={setSoundOn}
          toggleBgMusic={toggleBgMusic}
        /> */}
      </nav>
      <audio ref={audioRef} src="/ringtone.mp3" preload="metadata" />
    </>
  );
}
