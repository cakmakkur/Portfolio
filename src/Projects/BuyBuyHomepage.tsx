import laptop_top from "../Assets/laptop_top.png"
import laptop_bottom from "../Assets/laptop_bottom.png"
import githubIcon from "../Assets/github.svg"
import youtubeIcon from "../Assets/youtube.svg"

import ts_logo from "../Assets/icons/ts.png";
import sass_logo from "../Assets/icons/sass.png";
import vitest_logo from "../Assets/icons/vitest.png";
import node_logo from "../Assets/icons/node.png";
import js_logo from "../Assets/icons/js.png";
import css_logo from "../Assets/icons/css.png";
import express_logo from "../Assets/icons/express.png";
import react_logo from "../Assets/icons/react.png";



import TypewriterTitle from "../Animations/TypewriterTitle"
import CarouselAnm from "../Animations/CarouselAnm";

import { useEffect, useRef, useState } from "react";

export default function BuyBuyHomepage () {
  const [isHovering, setIsHovering] = useState('')
  const githubBtnRef = useRef(null)
  const youtubeBtnRef = useRef(null)

  function toggleFxBtn (arg) {
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
          <TypewriterTitle text="Buy-Buy" />
        </div>
      </div>
      <div className="single__project__main__bottom">
        <div className="single__product__left">
          <div className="laptop__top">
            <img className="laptop__scr" src={laptop_top} alt="" />
            <CarouselAnm/>
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
            <button>Watch <span>Demo</span> on YouTube 
              <img width={50} src={youtubeIcon} alt="" />
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
          <img className="tech__icon__img" height={45} src={react_logo} alt="" />
            <img className="tech__icon__img" height={45} src={js_logo} alt="" />
            <img className="tech__icon__img" height={45} src={ts_logo} alt="" />
            <img className="tech__icon__img" height={45} src={css_logo} alt="" />
            <img className="tech__icon__img" height={45} src={sass_logo} alt="" />
            <img className="tech__icon__img" height={45} src={vitest_logo} alt="" />


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