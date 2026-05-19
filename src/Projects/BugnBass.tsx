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
import check__green from "../Assets/checkLogo-green.svg";

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
          <div className="laptop__shadow">
            <div className="feature__checks">
              <div>
                <img height={15} src={check__green} alt="green check icon" />{" "}
                Responsive Design
              </div>
            </div>
          </div>
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
              is a full-stack e-commerce application designed for browsing,
              reviewing, and purchasing musical instruments. Users can explore
              products, manage their shopping cart, place orders, and leave
              reviews for individual items.
              <br /> <br />
              The application combines a Java Spring Boot backend, PostgreSQL
              database, and React + TypeScript frontend, covering the full
              development flow from database design and REST API implementation
              to interactive frontend functionality.
              <br /> <br />I contributed to the core backend REST APIs, database
              structure, and frontend integration for product listings, cart
              workflows, order handling, and product reviews.
            </article>
          ) : (
            <article className="product__description">
              <span className="product__description--accent--pr">
                Bug&apos;n Bass
              </span>{" "}
              ist eine Full-Stack-E-Commerce-Anwendung zum Durchsuchen, Bewerten
              und Kaufen von Musikinstrumenten. Nutzer*innen können Produkte
              entdecken, ihren Warenkorb verwalten, Bestellungen aufgeben und
              Bewertungen zu einzelnen Artikeln hinterlassen.
              <br /> <br />
              Die Anwendung kombiniert ein Java Spring Boot Backend, eine
              PostgreSQL-Datenbank und ein React + TypeScript Frontend und deckt
              damit den vollständigen Entwicklungsprozess von Datenbankdesign
              und REST-API-Implementierung bis hin zu interaktiver
              Frontend-Funktionalität ab.
              <br /> <br />
              Ich habe an den zentralen Backend-REST-APIs, der Datenbankstruktur
              und der Frontend-Integration für Produktlisten, Warenkorb-Abläufe,
              Bestellverarbeitung und Produktbewertungen mitgewirkt.
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
