import laptop_top from "../Assets/laptop_top.png";
import laptop_bottom from "../Assets/laptop_bottom.png";
import smartphone from "../Assets/smartphone.png";
import githubIcon from "../Assets/github.svg";
import playIcon from "../Assets/play.svg";
import check__yellow from "../Assets/checkLogo copy-yellow.svg";
import check__green from "../Assets/checkLogo-green.svg";

import ts_logo from "../Assets/icons/ts.png";
import sass_logo from "../Assets/icons/sass.png";
import vitest_logo from "../Assets/icons/vitest.png";
import node_logo from "../Assets/icons/node.png";
import express_logo from "../Assets/icons/express.png";
import react_logo from "../Assets/icons/react.png";

import img1 from "../Assets/carousel__images/buybuy_main/demo_buybuy_1.png";
import img2 from "../Assets/carousel__images/buybuy_main/demo_buybuy_2.png";
import img3 from "../Assets/carousel__images/buybuy_main/demo_buybuy_3.png";
import img4 from "../Assets/carousel__images/buybuy_main/demo_buybuy_4.png";
import img5 from "../Assets/carousel__images/buybuy_main/mobile/demo_buybuy_5.png";
import img6 from "../Assets/carousel__images/buybuy_main/mobile/demo_buybuy_6.png";
import img7 from "../Assets/carousel__images/buybuy_main/mobile/demo_buybuy_7.png";
import img8 from "../Assets/carousel__images/buybuy_main/mobile/demo_buybuy_8.png";

import TypewriterTitle from "../Animations/TypewriterTitle";
import CarouselAnm from "../Animations/CarouselAnm";
import MobileCarouselAnm from "../Animations/MobileCarouselAnm";

import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../GlobalContext/LanguageContext";

type ImageArrayType = string[];

export default function BuyBuyHomepage() {
  const { language } = useLanguageContext();

  const [isHovering, setIsHovering] = useState("");
  const [toggleVideo, setToggleVideo] = useState(false);
  const githubBtnRef = useRef<HTMLDivElement>(null);
  const youtubeBtnRef = useRef<HTMLDivElement>(null);
  const viewProductBtnRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  // const VideoPlayer = lazy(
  //   () => import("../Components/VideoPlayers/BuyBuyMainVideo")
  // );

  const buybuyImages: ImageArrayType = [img1, img2, img3, img4];
  const buybuyMobileImages: ImageArrayType = [img5, img6, img7, img8];

  function toggleFxBtn(arg: string) {
    setIsHovering(arg);
  }

  useEffect(() => {
    githubBtnRef.current?.classList.remove("button__wrapper--active");
    youtubeBtnRef.current?.classList.remove("button__wrapper--active");
    viewProductBtnRef.current?.classList.remove("button__wrapper--active");

    if (isHovering === "github") {
      githubBtnRef.current?.classList.add("button__wrapper--active");
    } else if (isHovering === "youtube") {
      youtubeBtnRef.current?.classList.add("button__wrapper--active");
    } else if (isHovering === "viewProduct") {
      viewProductBtnRef.current?.classList.add("button__wrapper--active");
    }
  }, [isHovering]);

  //video modal animation:
  const handleVideoButton = (arg: boolean) => {
    if (arg === true) {
      setToggleVideo(arg);
      setTimeout(() => {
        if (!videoRef.current) return;
        videoRef.current.style.transform = "scale(1)";
      }, 200);
    } else {
      if (!videoRef.current) return;
      videoRef.current.style.transform = "scale(0)";
      setTimeout(() => {
        setToggleVideo(arg);
      }, 200);
    }
  };

  return (
    <div className="single__project__main">
      <div className="single__project__main__top">
        {language === "EN" ? (
          <span>Project Name:</span>
        ) : (
          <span>Projekttitel:</span>
        )}
        <div className="single__project__title__div">
          <TypewriterTitle text="Buy-Buy" />
        </div>
      </div>
      <div className="single__project__main__bottom">
        <div className="single__product__left">
          <div className="laptop__top">
            <img className="laptop__scr" src={laptop_top} alt="" />
            <CarouselAnm images={buybuyImages} />
            <img src={smartphone} alt="" className="smartphone__scr" />
            <MobileCarouselAnm images={buybuyMobileImages} />
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
              <div>
                <img height={15} src={check__yellow} alt="yellow check icon" />{" "}
                Including tests
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
                <a href="https://github.com/cakmakkur/buybuy_main_MERN">
                  Go to<span>Github Repository</span>{" "}
                  <img width={30} src={githubIcon} alt="" />
                </a>
              ) : (
                <a href="https://github.com/cakmakkur/buybuy_main_MERN">
                  Zum<span>Github</span> gehen{" "}
                  <img
                    style={{ marginLeft: "20px" }}
                    width={30}
                    src={githubIcon}
                    alt=""
                  />
                </a>
              )}
            </div>
            <div
              ref={youtubeBtnRef}
              onMouseEnter={() => {
                toggleFxBtn("youtube");
              }}
              onMouseLeave={() => {
                toggleFxBtn("");
              }}
              className="button__wrapper"
            >
              {language === "EN" ? (
                <button onClick={() => handleVideoButton(true)}>
                  Watch<span>Demo</span>
                  <img width={40} src={playIcon} alt="" />
                </button>
              ) : (
                <button onClick={() => handleVideoButton(true)}>
                  <span>Beispielvideo</span>ansehen
                  <img
                    width={40}
                    style={{ marginLeft: "20px" }}
                    src={playIcon}
                    alt=""
                  />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="single__product__right">
          {language === "EN" ? (
            <article className="product__description">
              <span className="product__description--accent--pr">Buy-Buy</span>{" "}
              is an e-commerce website that sells imaginary musical instruments.
              It is created in{" "}
              <span className="product__description--accent">React</span>{" "}
              framework as an{" "}
              <span className="product__description--accent">SPA</span> that
              renders on the client-side. It demonstrates the full functionality
              (except payment) of a modern e-commerce website. <br /> <br />
              <span className="product__description--underline">
                Users can:{" "}
              </span>
              <ul>
                <li>create and edit their account,</li>
                <li>search for products based on queries and filters,</li>
                <li>add products to and remove them from their cart</li>
                <li>view previously placed orders,</li>
                <li>view and submit reviews on products,</li>
                <li>and many more...</li>
              </ul>
              <br /> Buy-Buy Homepage is a part of my comprehensive full-stack
              project Buy-Buy, a portfolio project that also includes an{" "}
              <a href="https://github.com/cakmakkur/buybuy_server_MERN">
                Express.js back-end
              </a>{" "}
              and an{" "}
              <Link to="/projects/buybuy-admin">administrator's portal</Link>.{" "}
              <br /> <br />
              <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                → While testing the website, don't provide any authentic data
                like personal info.
              </span>{" "}
              <br /> <br />
              <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                → Due to the small-scale nature of this project, server
                interruptions may take place. Please contact me in such case.
              </span>
              <br /> <br /> This site doesn't use any tracking cookies. They are
              only used for essential functionality.
              <br /> <br /> All the used assets like images and icons used are
              either created by me or sourced from novelty-free 3rd-party
              providers. Please consider asking for{" "}
              <Link to={"/contact"}>permission</Link> if you want to use an
              asset in your own projects.
            </article>
          ) : (
            <article className="product__description">
              <span className="product__description--accent--pr">Buy-Buy</span>{" "}
              ist eine E-Commerce-Website, die imaginäre Musikinstrumente
              verkauft. Sie wurde mit dem{" "}
              <span className="product__description--accent">React</span>{" "}
              Framework als{" "}
              <span className="product__description--accent">SPA</span>{" "}
              erstellt, das clientseitig gerendert wird. Sie demonstriert die
              vollständige (ausgenommen Zahlungen) Funktionalität einer modernen
              E-Commerce-Website. <br /> <br />
              <span className="product__description--underline">
                Benutzer können:{" "}
              </span>
              <ul>
                <li>ein Konto erstellen und bearbeiten,</li>
                <li>
                  nach Produkten basierend auf Anfragen und Filtern suchen,
                </li>
                <li>Produkte zum Warenkorb hinzufügen und daraus entfernen,</li>
                <li>frühere Bestellungen ansehen,</li>
                <li>Bewertungen zu Produkten ansehen und einreichen,</li>
                <li>und vieles mehr...</li>
              </ul>
              <br /> Die Buy-Buy Homepage ist Teil meines umfassenden
              Full-Stack-Projekts Buy-Buy, ein Portfolio-Projekt, das auch ein{" "}
              <a href="https://github.com/cakmakkur/buy-buy__server">
                Express.js Backend
              </a>{" "}
              und ein{" "}
              <Link to="/projects/buybuy-admin">Administrationsportal</Link>{" "}
              umfasst. <br /> <br />
              <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                → Beim Testen der Website bitte keine echten Daten wie
                persönliche Informationen angeben.
              </span>{" "}
              <br /> <br />
              <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                → Aufgrund der kleinen Größe dieses Projekts können
                Serverunterbrechungen auftreten. Bitte kontaktieren Sie mich in
                einem solchen Fall.
              </span>
              <br /> <br /> Diese Seite verwendet keine Tracking-Cookies. Sie
              werden nur für essentielle Funktionen verwendet.
              <br /> <br /> Alle verwendeten Assets wie Bilder und Symbole
              wurden entweder von mir erstellt oder stammen von gebührenfreien
              Drittanbietern. Bitte erwägen Sie, um{" "}
              <Link to={"/contact"}>Erlaubnis</Link> zu bitten, wenn Sie ein
              Asset in Ihren eigenen Projekten verwenden möchten.
            </article>
          )}
          <div className="used__tech__div">
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
              src={node_logo}
              alt=""
            />
            <img
              className="tech__icon__img"
              height={35}
              src={sass_logo}
              alt=""
            />
            <img
              className="tech__icon__img"
              height={35}
              src={express_logo}
              alt=""
            />
            <img
              className="tech__icon__img"
              height={35}
              src={vitest_logo}
              alt=""
            />
          </div>
          {/* <div className="view__product__btn__div">
            <div
              ref={viewProductBtnRef}
              onMouseEnter={() => {
                toggleFxBtn("viewProduct");
              }}
              onMouseLeave={() => {
                toggleFxBtn("");
              }}
              className="button__wrapper pr__button__wrapper"
            >
              <a
                href="https://buybuy.cakmakkursat.com/"
                className="view__product__btn"
              >
                {language === "EN" ? "VIEW PROJECT" : "PROJEKT ANSEHEN"}
              </a>
            </div>
          </div> */}
          <div className="product__links__div"></div>
        </div>
      </div>
      {language === "EN" ? (
        <div className="single__product__footer">
          <span>
            {" "}
            Project Year: <span>2024</span>{" "}
          </span>{" "}
          &copy; Kürsat Cakmak
        </div>
      ) : (
        <div className="single__product__footer">
          <span>
            {" "}
            Projektjahr: <span>2024</span>{" "}
          </span>{" "}
          &copy; Kürsat Cakmak
        </div>
      )}
      <Suspense fallback={<div className="video__modal__div">Loading...</div>}>
        {/* {toggleVideo ? (
          <div
            ref={videoRef}
            onClick={(e) => e.stopPropagation()}
            className="video__modal__div"
          >
            <button onClick={() => handleVideoButton(false)}>X</button>
            <VideoPlayer />
          </div>
        ) : (
          ""
        )} */}
      </Suspense>
    </div>
  );
}
