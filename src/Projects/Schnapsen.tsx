import laptop_top from "../Assets/laptop_top.png"
import laptop_bottom from "../Assets/laptop_bottom.png"
import githubIcon from "../Assets/github.svg"
import playIcon from "../Assets/play.svg"

import js_logo from "../Assets/icons/js.png";
import sass_logo from "../Assets/icons/sass.png";
import react_logo from "../Assets/icons/react.png";

import img1 from "../Assets/carousel__images/schnapsen/s1.png";
import img2 from "../Assets/carousel__images/schnapsen/s2.png";
import img3 from "../Assets/carousel__images/schnapsen/s3.png";
import img4 from "../Assets/carousel__images/schnapsen/s4.png";


import TypewriterTitle from "../Animations/TypewriterTitle"
import CarouselAnm from "../Animations/CarouselAnm";

import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { useLanguageContext } from "../GlobalContext/LanguageContext";

type ImageArrayType = string[]

export default function Schnapsen () {
  const {language} = useLanguageContext()
  const [toggleVideo, setToggleVideo] = useState(false)
  const [isHovering, setIsHovering] = useState('')
  const githubBtnRef = useRef<HTMLDivElement>(null)
  const playBtnRef = useRef<HTMLDivElement>(null)
  const viewProductBtnRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)


  const schnapsenImages: ImageArrayType = [img1, img2, img3, img4];

  const VideoPlayer = lazy(() => import('../Components/VideoPlayers/BuyBuyMainVideo'))

  function toggleFxBtn (arg: string) {
    setIsHovering(arg)
  }

  useEffect(() => {
    githubBtnRef.current?.classList.remove('button__wrapper--active')
    playBtnRef.current?.classList.remove('button__wrapper--active')
    viewProductBtnRef.current?.classList.remove('button__wrapper--active')

    if (isHovering === 'github') {
      githubBtnRef.current?.classList.add('button__wrapper--active')
    } else if (isHovering === 'play') {
      playBtnRef.current?.classList.add('button__wrapper--active')
    } else if (isHovering === 'viewProduct') {
      viewProductBtnRef.current?.classList.add('button__wrapper--active')
    }
  }, [isHovering])

    //video modal animation:
    const handleVideoButton = (arg: boolean) => {
      if (arg === true) {
        setToggleVideo(arg)
          setTimeout(() => {
            if (!videoRef.current) return
            videoRef.current.style.transform = "scale(1)"
          }, 200);
      } else {
        if (!videoRef.current) return
        videoRef.current.style.transform = "scale(0)"
        setTimeout(() => {
          setToggleVideo(arg)
        }, 200);
      }
    }


  return (
    <div className="single__project__main">
      <div className="single__project__main__top">
      {language === 'EN' 
          ? <span>Project Name:</span>
          : <span>Projekttitel:</span>
          }        <div className="single__project__title__div">
          <TypewriterTitle text="Schnapsen" />
        </div>
      </div>
      <div className="single__project__main__bottom">
        <div className="single__product__left">
          <div className="laptop__top">
            <img className="laptop__scr" src={laptop_top} alt="" />
            <CarouselAnm images={schnapsenImages}/>
          </div>
          <div className="laptop__bottom">
            <img className="laptop__img3" src={laptop_bottom} alt="" />
          </div>
          <div className="laptop__shadow"></div>
          <div className="lefthand__links__div">
            <div ref={githubBtnRef} onMouseEnter={() => {toggleFxBtn('github')}} onMouseLeave={() => {toggleFxBtn('')}} className="button__wrapper">
            {language === 'EN'
              ? <a href="https://github.com/cakmakkur/schnapsen">Go to<span>Github Repository</span> <img width={30} src={githubIcon} alt="" />
              </a>
              :  <a href="https://github.com/cakmakkur/schnapsen">Zum<span>Github</span> gehen <img style={{marginLeft: '20px'}} width={30} src={githubIcon} alt="" />
              </a>
            }
            </div>
            <div ref={playBtnRef} onMouseEnter={() => {toggleFxBtn('play')}} onMouseLeave={() => {toggleFxBtn('')}} className="button__wrapper">
            {language === 'EN'
              ? <button onClick={() => handleVideoButton(true)}>Watch<span>Demo</span>
              <img width={40} src={playIcon} alt="" />
            </button>
              : <button onClick={() => handleVideoButton(true)}><span>Beispielvideo</span>ansehen
              <img width={40} style={{marginLeft: '20px'}} src={playIcon} alt="" />
            </button>}
            </div>
          </div>
        </div>
      <div className="single__product__right">
            {language === 'EN'
              ? (
                <article className="product__description">
                <span className="product__description--accent--pr">Schnapsen</span> is a popular card game, played mainly in Bavaria. It is also known as <span className="product__description--accent"> the Game of 66</span>. This project demonstrates a short 2-player version of it, played agains the computer with a fixed difficulty. <br /> <br /> Player can choose between different textures for the table and different types of cards. The tutorial can be viewed anytime for a quick reference. The scoreboard displays the points of each player. The winner of 2 of 3 rounds wins the game! <br /> <br /> The project is build in <span className="product__description--accent">React</span> framework and intended only for wide-screen devices. <br /> <br />
                <span className="product__description--accent">→</span> This project is an ongoing project. In the future it will feature an online-mode, which will be playable against another player. It will also include differen difficulty settings for the CPU.
              </article>
              )
              : (
                <article className="product__description">
                  <span className="product__description--accent--pr">Schnapsen</span> ist ein beliebtes Kartenspiel, das hauptsächlich in Bayern gespielt wird. Es ist auch bekannt als <span className="product__description--accent">das Spiel der 66</span>. Dieses Projekt demonstriert eine kurze 2-Spieler-Version, die gegen den Computer mit einer festen Schwierigkeit gespielt wird. <br /> <br /> Der Spieler kann zwischen verschiedenen Texturen für den Tisch und verschiedenen Kartentypen wählen. Das Tutorial kann jederzeit zur schnellen Referenz angesehen werden. Die Anzeigetafel zeigt die Punkte jedes Spielers an. Der Gewinner von 2 von 3 Runden gewinnt das Spiel! <br /> <br /> Das Projekt ist im <span className="product__description--accent">React</span>-Framework gebaut und nur für Breitbildgeräte gedacht. <br /> <br />
                  <span className="product__description--accent">→</span> Dieses Projekt ist ein laufendes Projekt. In Zukunft wird es einen Online-Modus bieten, der gegen einen anderen Spieler spielbar sein wird. Es wird auch verschiedene Schwierigkeitsstufen für die CPU enthalten.
                </article>
              )
              }
          <div className="used__tech__div">
          <img className="tech__icon__img" height={35} src={react_logo} alt="" />
            <img className="tech__icon__img" height={35} src={js_logo} alt="" />
            <img className="tech__icon__img" height={35} src={sass_logo} alt="" />
          </div>
          <div className="view__product__btn__div">
          <div ref={viewProductBtnRef} onMouseEnter={() => {toggleFxBtn('viewProduct')}} onMouseLeave={() => {toggleFxBtn('')}} className="button__wrapper pr__button__wrapper">
              <a href="https://schnapsen.cakmakkursat.com/" className="view__product__btn">{language === 'EN' ? 'VIEW PROJECT' : 'PROJEKT ANSEHEN'}
              </a>
            </div>
          </div>
          <div className="product__links__div">
          </div>
        </div>
      </div>
      {language === 'EN'
        ? <div className="single__product__footer">
            <span> Project Year: <span>2024</span> </span> &copy; Kürsat Cakmak
          </div>
        : <div className="single__product__footer">
            <span> Projektjahr: <span>2024</span> </span> &copy; Kürsat Cakmak
          </div>
      }
      <Suspense fallback={<div className="video__modal__div">Loading...</div>}>
        {toggleVideo 
          ? <div onClick={(e) => e.stopPropagation()}     className="video__modal__div">
              <button onClick={() => handleVideoButton(false)}>X</button>
              <VideoPlayer/>
            </div>
          : ""
        }
      </Suspense>
    </div>
   
  )
}