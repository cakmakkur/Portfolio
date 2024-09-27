import laptop_top from "../Assets/laptop_top.png";
import laptop_bottom from "../Assets/laptop_bottom.png";
import githubIcon from "../Assets/github.svg";
import playIcon from "../Assets/play.svg";
import smartphone from "../Assets/smartphone.png";
import check__green from "../Assets/checkLogo-green.svg";

import ts_logo from "../Assets/icons/ts.png";
import sass_logo from "../Assets/icons/sass.png";
import next_logo from "../Assets/icons/nextjs.png";
import mongo_logo from "../Assets/icons/mongo.png";

import img1 from "../Assets/carousel__images/band/band_1.png";
import img2 from "../Assets/carousel__images/band/band_2.png";
import img3 from "../Assets/carousel__images/band/band_3.png";
import img4 from "../Assets/carousel__images/band/band_4.png";
import img5 from "../Assets/carousel__images/band/mobile/band_1.png";

import TypewriterTitle from "../Animations/TypewriterTitle";
import CarouselAnm from "../Animations/CarouselAnm";
import MobileCarouselAnm from "../Animations/MobileCarouselAnm";

import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { useLanguageContext } from "../GlobalContext/LanguageContext";

type ImageArrayType = string[];

export default function BandHomepage() {
  const { language } = useLanguageContext();
  const [toggleVideo, setToggleVideo] = useState(false);
  const [isHovering, setIsHovering] = useState("");
  const githubBtnRef = useRef<HTMLDivElement>(null);
  const youtubeBtnRef = useRef<HTMLDivElement>(null);
  const viewProductBtnRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const VideoPlayer = lazy(
    () => import("../Components/VideoPlayers/BandVideo")
  );

  const bandImages: ImageArrayType = [img1, img2, img3, img4];
  const bandMobileImages: ImageArrayType = [img5, img5, img5, img5];

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
          <TypewriterTitle text="Band Page&Dashboard" />
        </div>
      </div>
      <div className="single__project__main__bottom">
        <div className="single__product__left">
          <div className="laptop__top">
            <img className="laptop__scr" src={laptop_top} alt="" />
            <CarouselAnm images={bandImages} />
            <img src={smartphone} alt="" className="smartphone__scr" />
            <MobileCarouselAnm images={bandMobileImages} />
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
                <a href="https://github.com/cakmakkur/vierVorZwoelf">
                  Go to<span>Github Repository</span>{" "}
                  <img width={30} src={githubIcon} alt="" />
                </a>
              ) : (
                <a href="https://github.com/cakmakkur/vierVorZwoelf">
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
              <span className="product__description--accent--pr">
                Band Homepage & Dashboard
              </span>{" "}
              is an upcoming{" "}
              <span className="product__description--accent">Next.js</span> app
              which will serve as homepage for music bands. Fans will have an
              option to subscribe and contact the band. Besides, it will feature
              an internal management and communication dashbord accessible only
              to band members. <br />
              <br />
              <span className="product__description--underline">
                Band members will be able to:{" "}
              </span>
              <ul>
                <li>create and exchange playlists</li>
                <li>share and edit sheet music</li>
                <li>view and send mails internally and externally</li>
                <li>update the homepage</li>
                <li>create and schedule newsletters to members</li>
                <li>and many more...</li>
              </ul>
              <br /> <br />
              <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                → This project is still in development. However you can view
                some completed features in the video to have a feeling of its
                style and functionality.
              </span>
            </article>
          ) : (
            <article className="product__description">
              <span className="product__description--accent--pr">
                Band Homepage & Dashboard
              </span>{" "}
              ist eine kommende{" "}
              <span className="product__description--accent">Next.js</span> App,
              die als Homepage für Musikbands dienen wird. Fans haben die
              Möglichkeit, sich zu abonnieren und die Band zu kontaktieren.
              Zudem wird es ein internes Verwaltungs- und
              Kommunikationsdashboard geben, das nur für Bandmitglieder
              zugänglich ist.
              <br /> <br />
              <span className="product__description--underline">
                Bandmitglieder können:{" "}
              </span>
              <ul>
                <li>Playlisten erstellen und austauschen</li>
                <li>Noten teilen und bearbeiten</li>
                <li>Mails intern und extern ansehen und senden</li>
                <li>Die Homepage aktualisieren</li>
                <li>Newsletter für Mitglieder erstellen und planen</li>
                <li>und vieles mehr...</li>
              </ul>
              <br /> <br />
              <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                → Dieses Projekt befindet sich noch in der Entwicklung. Sie
                können jedoch einige fertiggestellte Funktionen im Video
                ansehen, um einen Eindruck von Stil und Funktionalität zu
                erhalten.
              </span>
            </article>
          )}
          <div className="used__tech__div">
            <img
              className="tech__icon__img"
              height={35}
              src={next_logo}
              alt=""
            />
            <img className="tech__icon__img" height={35} src={ts_logo} alt="" />
            <img
              className="tech__icon__img"
              height={35}
              src={mongo_logo}
              alt=""
            />
            <img
              className="tech__icon__img"
              height={35}
              src={sass_logo}
              alt=""
            />
          </div>
          <div className="view__product__btn__div">
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
                href="https://vier-vor-zwoelf.vercel.app/"
                className="view__product__btn"
              >
                {language === "EN" ? "VIEW PROJECT" : "PROJEKT ANSEHEN"}
              </a>
            </div>
          </div>
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
        {toggleVideo ? (
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
        )}
      </Suspense>
    </div>
  );
}
