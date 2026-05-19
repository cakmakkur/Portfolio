import laptop_top from "../Assets/laptop_top.png";
import laptop_bottom from "../Assets/laptop_bottom.png";
import smartphone from "../Assets/smartphone.png";
import githubIcon from "../Assets/github.svg";
import react_logo from "../Assets/icons/react.png";
import ts_logo from "../Assets/icons/ts.png";
import java_logo from "../Assets/java.svg";
import maven_logo from "../Assets/maven.png";
import postgres_logo from "../Assets/postgres.svg";
import springboot_logo from "../Assets/spring-boot.webp";
import junit_logo from "../Assets/icons/junit.png";

import img1 from "../Assets/carousel__images/bugnbass/bugnbass_1.png";
import img2 from "../Assets/carousel__images/bugnbass/bugnbass_2.png";
import img3 from "../Assets/carousel__images/bugnbass/bugnbass_3.png";
import img4 from "../Assets/carousel__images/bugnbass/mobile/bb_1.png";
import img5 from "../Assets/carousel__images/bugnbass/mobile/bb2.png";
import img6 from "../Assets/carousel__images/bugnbass/mobile/bb3.png";
import img7 from "../Assets/carousel__images/bugnbass/mobile/bb4.png";

import TypewriterTitle from "../Animations/TypewriterTitle";
import CarouselAnm from "../Animations/CarouselAnm";
import MobileCarouselAnm from "../Animations/MobileCarouselAnm";

import { useEffect, useRef, useState } from "react";
import { useLanguageContext } from "../GlobalContext/LanguageContext";

type ImageArrayType = string[];

export default function BugnBass() {
  const { language } = useLanguageContext();
  const [isHovering, setIsHovering] = useState("");
  const githubBtnRef = useRef<HTMLDivElement>(null);
  const viewProductBtnRef = useRef<HTMLDivElement>(null);

  const bugnbassImages: ImageArrayType = [img1, img2, img3];
  const bugnbassMobileImages: ImageArrayType = [img4, img5, img6, img7];

  function toggleFxBtn(arg: string) {
    setIsHovering(arg);
  }

  useEffect(() => {
    githubBtnRef.current?.classList.remove("button__wrapper--active");
    viewProductBtnRef.current?.classList.remove("button__wrapper--active");

    if (isHovering === "github") {
      githubBtnRef.current?.classList.add("button__wrapper--active");
    } else if (isHovering === "viewProduct") {
      viewProductBtnRef.current?.classList.add("button__wrapper--active");
    }
  }, [isHovering]);

  return (
    <div className="single__project__main">
      <div className="single__project__main__top">
        {language === "EN" ? (
          <span>Project Name:</span>
        ) : (
          <span>Projekttitel:</span>
        )}{" "}
        <div className="single__project__title__div">
          <TypewriterTitle text="Bug'n Bass" />
        </div>
      </div>
      <div className="single__project__main__bottom">
        <div className="single__product__left">
          <div className="laptop__top">
            <img className="laptop__scr" src={laptop_top} alt="" />
            <CarouselAnm images={bugnbassImages} />
            <img src={smartphone} alt="" className="smartphone__scr" />
            <MobileCarouselAnm images={bugnbassMobileImages} />
          </div>
          <div className="laptop__bottom">
            <img className="laptop__img3" src={laptop_bottom} alt="" />
          </div>
          <div className="laptop__shadow"></div>
          <div className="lefthand__links__div">
            <div
              ref={githubBtnRef}
              onMouseEnter={() => {
                toggleFxBtn("github");
              }}
              onMouseLeave={() => {
                toggleFxBtn("");
              }}
              className="button__wrapper"
            >
              {language === "EN" ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/cakmakkur/BugnBass-MusicStore"
                >
                  Go to<span>Github Repository</span>{" "}
                  <img width={30} src={githubIcon} alt="" />
                </a>
              ) : (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/cakmakkur/BugnBass-MusicStore"
                >
                  Zum<span>Github</span> gehen{" "}
                  <img width={30} src={githubIcon} alt="" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="single__product__right">
          {language === "EN" ? (
            <article className="product__description">
              <span className="product__description--accent--pr">
                Bug&apos;n Bass
              </span>{" "}
              is a full-stack music store application built with a Java Spring
              Boot backend, PostgreSQL database, and React + TypeScript
              frontend. Users can browse instruments, add items to the cart,
              place orders, and leave product reviews. <br /> <br /> I
              contributed core backend REST APIs, database design, and frontend
              integration for product listing, cart flow, and review handling.
            </article>
          ) : (
            <article className="product__description">
              <span className="product__description--accent--pr">
                Bug&apos;n Bass
              </span>{" "}
              ist eine Full-Stack-Musikshop-Anwendung mit Java Spring Boot
              Backend, PostgreSQL-Datenbank und React + TypeScript Frontend.
              Nutzer*innen können Instrumente durchsuchen, Artikel in den
              Warenkorb legen, Bestellungen aufgeben und Produktbewertungen
              hinterlassen.
              <br /> <br /> Ich habe die zentralen Backend-REST-APIs, das
              Datenbankdesign und die Frontend-Integration für Produktlisten,
              Warenkorb und Bewertungsfunktionen umgesetzt.
            </article>
          )}
          <div className="used__tech__div">
            <img
              className="tech__icon__img"
              height={35}
              src={java_logo}
              alt=""
            />
            <img
              className="tech__icon__img"
              height={35}
              src={springboot_logo}
              alt=""
            />
            <img
              className="tech__icon__img"
              height={35}
              src={postgres_logo}
              alt=""
            />
            <img
              className="tech__icon__img"
              height={35}
              src={maven_logo}
              alt=""
            />
            <img
              className="tech__icon__img"
              height={35}
              src={react_logo}
              alt=""
            />
            <img className="tech__icon__img" height={35} src={ts_logo} alt="" />
            <img
              className="tech__icon__img"
              height={35}
              src={junit_logo}
              alt=""
            />
          </div>
          <div className="product__links__div"></div>
        </div>
      </div>
      {language === "EN" ? (
        <div className="single__product__footer">
          <span>
            Project Year: <span>2026</span>
          </span>{" "}
          &copy; Kürsat Cakmak
        </div>
      ) : (
        <div className="single__product__footer">
          <span>
            Projektjahr: <span>2026</span>
          </span>{" "}
          &copy; Kürsat Cakmak
        </div>
      )}
    </div>
  );
}
