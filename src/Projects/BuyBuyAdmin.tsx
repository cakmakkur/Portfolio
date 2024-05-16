import laptop_top from "../Assets/laptop_top.png"
import laptop_bottom from "../Assets/laptop_bottom.png"
import githubIcon from "../Assets/github.svg"
import playIcon from "../Assets/play.svg"

import sass_logo from "../Assets/icons/sass.png";
import js_logo from "../Assets/icons/js.png";
import node_logo from "../Assets/icons/node.png";
import express_logo from "../Assets/icons/express.png";
import react_logo from "../Assets/icons/react.png";

import img1 from "../Assets/carousel__images/buybuy-admin/bb_admin_1.png";
import img2 from "../Assets/carousel__images/buybuy-admin/bb_admin_2.png";
import img3 from "../Assets/carousel__images/buybuy-admin/bb_admin_3.png";
import img4 from "../Assets/carousel__images/buybuy-admin/bb_admin_4.png";


import TypewriterTitle from "../Animations/TypewriterTitle"
import CarouselAnm from "../Animations/CarouselAnm";

import { useEffect, useRef, useState } from "react";

type ImageArrayType = string[]

export default function BuyBuyAdmin () {
  const [isHovering, setIsHovering] = useState('')
  const githubBtnRef = useRef<HTMLDivElement>(null)
  const youtubeBtnRef = useRef<HTMLDivElement>(null)

  const buybuyAdminImages: ImageArrayType = [img1, img2, img3, img4];

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
          <TypewriterTitle text="Buy-Buy (Admin)" />
        </div>
      </div>
      <div className="single__project__main__bottom">
        <div className="single__product__left">
          <div className="laptop__top">
            <img className="laptop__scr" src={laptop_top} alt="" />
            <CarouselAnm images={buybuyAdminImages}/>
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
            <span className="product__description--accent--pr">Buy-Buy Admin</span> is the administrator\'s portal of Buy-Buy, a comprehensive full-stack portfolio project that also includes a homepage and a server. <br /> <br /> On this portal, administrators can:
            <ul>
              <li>edit data of the existing products,</li>
              <li>create new products.</li>
            </ul>
            
            <span className="product__description--accent">React</span> <br /> <br />
            An Express.js server powers both the homepage and the admin\'s portal. It also hosts a simple database of products, reviews and users, handles their data securely and efficiently.
            <a>Go git repo</a>
          </article>
          <div className="used__tech__div">
          <img className="tech__icon__img" height={45} src={react_logo} alt="" />
            <img className="tech__icon__img" height={45} src={node_logo} alt="" />
            <img className="tech__icon__img" height={45} src={sass_logo} alt="" />
            <img className="tech__icon__img" height={45} src={js_logo} alt="" />
            <img className="tech__icon__img" height={45} src={express_logo} alt="" />

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