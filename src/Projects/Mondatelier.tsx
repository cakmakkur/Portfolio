import laptop_top from "../Assets/laptop_top.png"
import laptop_bottom from "../Assets/laptop_bottom.png"
import smartphone from "../Assets/smartphone.png"
import githubIcon from "../Assets/github.svg"
import playIcon from "../Assets/play.svg"

import js_logo from "../Assets/icons/js.png";
import css_logo from "../Assets/icons/css.png";

import img1 from "../Assets/carousel__images/mondatelier/mondatelier_1.png";
import img2 from "../Assets/carousel__images/mondatelier/mondatelier_2.png";
import img3 from "../Assets/carousel__images/mondatelier/mondatelier_3.png";
import img4 from "../Assets/carousel__images/mondatelier/mondatelier_4.png";
import img5 from "../Assets/carousel__images/mondatelier/mobile/mondatelier_5.png";
import img6 from "../Assets/carousel__images/mondatelier/mobile/mondatelier_6.png";
import img7 from "../Assets/carousel__images/mondatelier/mobile/mondatelier_7.png";
import img8 from "../Assets/carousel__images/mondatelier/mobile/mondatelier_8.png";

import TypewriterTitle from "../Animations/TypewriterTitle"
import CarouselAnm from "../Animations/CarouselAnm";

import { useEffect, useRef, useState } from "react";
import MobileCarouselAnm from "../Animations/MobileCarouselAnm"

type ImageArrayType = string[]

export default function BuyBuyHomepage () {
  const [isHovering, setIsHovering] = useState('')
  const githubBtnRef = useRef<HTMLDivElement>(null)
  const youtubeBtnRef = useRef<HTMLDivElement>(null)

  const buybuyImages: ImageArrayType = [img1, img2, img3, img4];
  const buybuyMobileImages: ImageArrayType = [img5, img6, img7, img8]

  function toggleFxBtn (arg: string) {
    setIsHovering(arg)
  }

  useEffect(() => {
    githubBtnRef.current?.classList.remove('button__wrapper--active')
    youtubeBtnRef.current?.classList.remove('button__wrapper--active')

    if (isHovering === 'github') {
      githubBtnRef.current?.classList.add('button__wrapper--active')
    } else if (isHovering === 'youtube') {
      youtubeBtnRef.current?.classList.add('button__wrapper--active')
    }
  }, [isHovering])


  return (
    <div className="single__project__main">
      <div className="single__project__main__top">
        <span>Project Name:</span>
        <div className="single__project__title__div">
          <TypewriterTitle text="Mondatelier" />
        </div>
      </div>
      <div className="single__project__main__bottom">
        <div className="single__product__left">
          <div className="laptop__top">
            <img className="laptop__scr" src={laptop_top} alt="" />
            <CarouselAnm images={buybuyImages}/>
            <img src={smartphone} alt="" className="smartphone__scr" />
            <MobileCarouselAnm images={buybuyMobileImages}/>
          </div>
          <div className="laptop__bottom">
            <img className="laptop__img3" src={laptop_bottom} alt="" />
          </div>
          <div className="laptop__shadow"></div>
          <div className="lefthand__links__div">
            <div ref={githubBtnRef} onMouseEnter={() => {toggleFxBtn('github')}} onMouseLeave={() => {toggleFxBtn('')}} className="button__wrapper">
              <button>Viev<span>Repository</span>on Github <img width={30} src={githubIcon} alt="" />
              </button>
            </div>
            <div ref={youtubeBtnRef} onMouseEnter={() => {toggleFxBtn('youtube')}} onMouseLeave={() => {toggleFxBtn('')}} className="button__wrapper">
            <button>Watch <span>Demo</span>
              <img width={40} src={playIcon} alt="" />
            </button>
            </div>
          </div>
        </div>
      <div className="single__product__right">
          <article className="product__description">
            <span className="product__description--accent--pr">Buy-Buy</span> is an e-commerce website that sells imaginary musical instruments. It is created in <span className="product__description--accent">React</span> framework as an <span className="product__description--accent">SPA</span>  that renders on the client-side. It demonstrates the full functionality of a modern e-commerce website. <br /> <br /><span className="product__description--underline">Users can: </span> 
            <ul>
              <li>create and edit their account, search for products based on queries and filters,</li>
              <li>add products to and remove them from their cart</li>
              <li>view previously placed orders,</li>
              <li>view and submit reviews on products,</li>
              <li>and many more...</li>
            </ul>
              <br /> Buy-Buy Homepage is a part of a comprehensive project that also includes a <a href="">back-end</a> and an <a href="">administrative portal</a>. <br />  <br />Never provide any authentic data like personal info.
              <br /> <br /> Cookies are only used for essential functionality like persistent log-in and shopping cart.
              <br /> <br /> All the used assets like images and icons used are either created by me or sourced from novelty-free 3rd-party providers.
          </article>
          <div className="used__tech__div">
          <img className="tech__icon__img" height={45} src={js_logo} alt="" />
            <img className="tech__icon__img" height={45} src={css_logo} alt="" />
          </div>
          <div className="view__product__btn__div">
            <button>VIEW PROJECT</button>
          </div>
          <div className="product__links__div">
          </div>
        </div>
      </div>
      <div className="single__product__footer">
        <span> Project Year: <span>2024</span> </span> &copy; Kürsat Cakmak
      </div>
    </div>
   
  )
}