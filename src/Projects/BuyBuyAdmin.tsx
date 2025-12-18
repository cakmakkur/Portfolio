import laptop_top from "../Assets/laptop_top.png";
import laptop_bottom from "../Assets/laptop_bottom.png";
import githubIcon from "../Assets/github.svg";

import sass_logo from "../Assets/icons/sass.png";
import js_logo from "../Assets/icons/js.png";
import node_logo from "../Assets/icons/node.png";
import express_logo from "../Assets/icons/express.png";
import react_logo from "../Assets/icons/react.png";
import mongo_logo from "../Assets/icons/mongo.png";

import img1 from "../Assets/carousel__images/buybuy-admin/bb_admin_1.png";
import img2 from "../Assets/carousel__images/buybuy-admin/bb_admin_2.png";
import img3 from "../Assets/carousel__images/buybuy-admin/bb_admin_3.png";
import img4 from "../Assets/carousel__images/buybuy-admin/bb_admin_4.png";

import TypewriterTitle from "../Animations/TypewriterTitle";
import CarouselAnm from "../Animations/CarouselAnm";

import { useEffect, useRef, useState } from "react";
import { useLanguageContext } from "../GlobalContext/LanguageContext";

type ImageArrayType = string[];

export default function BuyBuyAdmin() {
  const { language } = useLanguageContext();
  const [isHovering, setIsHovering] = useState("");
  const githubBtnRef = useRef<HTMLDivElement>(null);
  const youtubeBtnRef = useRef<HTMLDivElement>(null);
  const viewProductBtnRef = useRef<HTMLDivElement>(null);

  const buybuyAdminImages: ImageArrayType = [img1, img2, img3, img4];

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

  return (
    <div className="single__project__main">
      <div className="single__project__main__top">
        {language === "EN" ? (
          <span>Project Name:</span>
        ) : (
          <span>Projekttitel:</span>
        )}{" "}
        <div className="single__project__title__div">
          <TypewriterTitle text="Buy-Buy (Admin)" />
        </div>
      </div>
      <div className="single__project__main__bottom">
        <div className="single__product__left">
          <div className="laptop__top">
            <img className="laptop__scr" src={laptop_top} alt="" />
            <CarouselAnm images={buybuyAdminImages} />
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
                  href="https://github.com/cakmakkur/buybuy_admin_MERN"
                  target="_blank"
                >
                  Go to<span>Github Repository</span>{" "}
                  <img width={30} src={githubIcon} alt="" />
                </a>
              ) : (
                <a
                  href="https://github.com/cakmakkur/buybuy_admin_MERN"
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
          {language === "EN" ? (
            <article className="product__description">
              <span className="product__description--accent--pr">
                Buy-Buy Admin
              </span>{" "}
              is the administrator\&apos;s portal of Buy-Buy, a comprehensive
              full-stack portfolio project that also includes a homepage and a
              server. <br /> <br />{" "}
              <span className="product__description--underline">
                On this portal, administrators can:
              </span>
              <ul>
                <li>edit data of the existing products,</li>
                <li>create new products.</li>
              </ul>
              <br /> <br />
              <span className="product__description--accent">
                The Express.js
              </span>{" "}
              server that runs on Amazon EC2 powers both the homepage and the
              admin&apos;s portal. It is connected to a database on{" "}
              <span className="product__description--accent">MongoDB</span> that
              stores products, reviews and users info, handles their data
              securely and efficiently. The source code of the server can be
              viewed on a separate{" "}
              <a href="https://github.com/cakmakkur/buybuy_server_MERN">
                Github Repository.
              </a>{" "}
              <br /> <br />
              <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                → Due to the small-scale nature of this project, server
                interruptions may take place. Please contact me in such case.
              </span>
            </article>
          ) : (
            <article className="product__description">
              <span className="product__description--accent--pr">
                Buy-Buy Admin
              </span>{" "}
              ist das Administratorenportal von Buy-Buy, einem umfassenden
              Full-Stack-Portfolio-Projekt, das auch eine Homepage und einen
              Server umfasst. <br /> <br />{" "}
              <span className="product__description--underline">
                Auf diesem Portal können Administratoren:
              </span>
              <ul>
                <li>Daten bestehender Produkte bearbeiten,</li>
                <li>neue Produkte erstellen.</li>
              </ul>
              <br /> <br />
              Der{" "}
              <span className="product__description--accent">
                Express.js Server
              </span>{" "}
              betreibt sowohl die Homepage als auch das Administratorenportal.
              Er ist verbunden mit einer{" "}
              <span className="product__description--accent">MongoDB</span>{" "}
              Datenbank für Produkte, Bewertungen und Benutzerinformationen, und
              verwaltet deren Daten sicher und effizient. Der Quellcode des
              Servers kann in einem separaten{" "}
              <a href="https://github.com/cakmakkur/buybuy_server_MERN">
                Github-Repository
              </a>{" "}
              eingesehen werden. <br /> <br />
              <span style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                → Aufgrund der kleinen Größe dieses Projekts können
                Serverunterbrechungen auftreten. Bitte kontaktieren Sie mich in
                einem solchen Fall.
              </span>
            </article>
          )}
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
              src={node_logo}
              alt=""
            />
            <img
              className="tech__icon__img"
              height={35}
              src={sass_logo}
              alt=""
            />
            <img className="tech__icon__img" height={35} src={js_logo} alt="" />
            <img
              className="tech__icon__img"
              height={35}
              src={express_logo}
              alt=""
            />
            <img
              className="tech__icon__img"
              height={35}
              src={mongo_logo}
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
                href="https://buybuy-admin.cakmakkursat.com/"
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
    </div>
  );
}
