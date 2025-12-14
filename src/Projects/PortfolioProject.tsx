import laptop_top from "../Assets/laptop_top.png";
import laptop_bottom from "../Assets/laptop_bottom.png";
import smartphone from "../Assets/smartphone.png";
import githubIcon from "../Assets/github.svg";

import ts_logo from "../Assets/icons/ts.png";
import sass_logo from "../Assets/icons/sass.png";
import react_logo from "../Assets/icons/react.png";

import img1 from "../Assets/carousel__images/portfolio/portfolio_1.png";
import img2 from "../Assets/carousel__images/portfolio/portfolio_2.png";
import img3 from "../Assets/carousel__images/portfolio/portfolio_3.png";
import img4 from "../Assets/carousel__images/portfolio/portfolio_4.png";
import img5 from "../Assets/carousel__images/portfolio/mobile/portfolio_5.png";
import img6 from "../Assets/carousel__images/portfolio/mobile/portfolio_6.png";
import img7 from "../Assets/carousel__images/portfolio/mobile/portfolio_7.png";
import img8 from "../Assets/carousel__images/portfolio/mobile/portfolio_8.png";

import TypewriterTitle from "../Animations/TypewriterTitle";
import CarouselAnm from "../Animations/CarouselAnm";

import { useEffect, useRef, useState } from "react";
import { useLanguageContext } from "../GlobalContext/LanguageContext";
import MobileCarouselAnm from "../Animations/MobileCarouselAnm";

type ImageArrayType = string[];

export default function BuyBuyHomepage() {
  const { language } = useLanguageContext();

  const [isHovering, setIsHovering] = useState("");
  const githubBtnRef = useRef<HTMLDivElement>(null);
  const youtubeBtnRef = useRef<HTMLDivElement>(null);

  const buybuyImages: ImageArrayType = [img1, img2, img3, img4];
  const buybuyMobileImages: ImageArrayType = [img5, img6, img7, img8];

  function toggleFxBtn(arg: string) {
    setIsHovering(arg);
  }

  useEffect(() => {
    githubBtnRef.current?.classList.remove("button__wrapper--active");
    youtubeBtnRef.current?.classList.remove("button__wrapper--active");

    if (isHovering === "github") {
      githubBtnRef.current?.classList.add("button__wrapper--active");
    } else if (isHovering === "youtube") {
      youtubeBtnRef.current?.classList.add("button__wrapper--active");
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
          <TypewriterTitle text="Portfolio" />
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
                  href="https://github.com/cakmakkur/Portfolio"
                  target="_blank"
                >
                  Go to<span>Github Repository</span>{" "}
                  <img width={30} src={githubIcon} alt="" />
                </a>
              ) : (
                <a
                  href="https://github.com/cakmakkur/Portfolio"
                  target="_blank"
                >
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
          </div>
        </div>
        <div className="single__product__right">
          <article className="product__description">
            {language === "EN" ? (
              <span>
                <span className="product__description--accent--pr">
                  Portfolio
                </span>{" "}
                is this very website that I crafted to present myself{" "}
              </span>
            ) : (
              <span>
                {" "}
                <span className="product__description--accent--pr">
                  {" "}
                  Portfolio{" "}
                </span>{" "}
                ist diese Website, die ich selbst gestaltet habe, um mich zu
                präsentieren{" "}
              </span>
            )}
          </article>
          <div className="used__tech__div">
            <img
              className="tech__icon__img"
              height={35}
              src={react_logo}
              alt=""
            />
            <img
              className="tech__icon__img"
              height={35}
              src={sass_logo}
              alt=""
            />
            <img className="tech__icon__img" height={35} src={ts_logo} alt="" />
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
    </div>
  );
}
