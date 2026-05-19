import githubIcon from "../Assets/github.svg";
import csharp_logo from "../Assets/icons/c-sharp.png";
import { useEffect, useRef, useState } from "react";
import TypewriterTitle from "../Animations/TypewriterTitle";
import { useLanguageContext } from "../GlobalContext/LanguageContext";

export default function PrimalDomainsSimulator() {
  const { language } = useLanguageContext();
  const [isHovering, setIsHovering] = useState("");
  const githubBtnRef = useRef<HTMLDivElement>(null);

  function toggleFxBtn(arg: string) {
    setIsHovering(arg);
  }

  useEffect(() => {
    githubBtnRef.current?.classList.remove("button__wrapper--active");

    if (isHovering === "github") {
      githubBtnRef.current?.classList.add("button__wrapper--active");
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
          <TypewriterTitle text="Primal Domains" />
        </div>
      </div>
      <div className="single__project__main__bottom">
        <div className="single__product__left">
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
                  href="https://github.com/cakmakkur/PrimalDomainsSimulator"
                >
                  Go to<span>Github Repository</span>{" "}
                  <img width={30} src={githubIcon} alt="" />
                </a>
              ) : (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/cakmakkur/PrimalDomainsSimulator"
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
                Primal Domains Simulator
              </span>{" "}
              is a C# simulation project based on the mechanics of a strategy
              board game concept. Instead of focusing on a traditional web
              interface, the project concentrates on domain modeling, game
              logic, procedural interactions, and structured object-oriented
              architecture.
              <br /> <br />
              The simulator models players, board states, actions, cards,
              natural events, animals, and rule-based interactions to recreate
              the behavior of a complex turn-based system. The main focus is on
              clean domain structure, extensible logic, and the internal flow of
              a larger simulation engine.
              <br /> <br />
              This project is currently under active development and continues
              to evolve as the game mechanics, architecture, and simulation
              features are refined.
            </article>
          ) : (
            <article className="product__description">
              <span className="product__description--accent--pr">
                Primal Domains Simulator
              </span>{" "}
              ist ein C#-Simulationsprojekt, das auf den Mechaniken eines
              strategischen Brettspielkonzepts basiert. Statt sich auf eine
              klassische Weboberfläche zu konzentrieren, liegt der Fokus auf
              Domain Modeling, Spiellogik, prozeduralen Interaktionen und einer
              strukturierten objektorientierten Architektur.
              <br /> <br />
              Der Simulator modelliert Spieler, Spielfeldzustände, Aktionen,
              Karten, Naturereignisse, Tiere und regelbasierte Interaktionen, um
              das Verhalten eines komplexen rundenbasierten Systems abzubilden.
              Im Mittelpunkt stehen eine saubere Domain-Struktur, erweiterbare
              Logik und der interne Ablauf einer größeren Simulationsengine.
              <br /> <br />
              Dieses Projekt befindet sich aktuell in aktiver Entwicklung und
              wird kontinuierlich weiterentwickelt, während Spielmechaniken,
              Architektur und Simulationsfunktionen verfeinert werden.
            </article>
          )}
          <div className="used__tech__div">
            <img
              className="tech__icon__img"
              height={35}
              src={csharp_logo}
              alt=""
            />
          </div>
          <div className="product__links__div"></div>
        </div>
      </div>
      {language === "EN" ? (
        <div className="single__project__footer">
          <span>
            Project Year: <span>2026</span>
          </span>{" "}
          &copy; Kürsat Cakmak
        </div>
      ) : (
        <div className="single__project__footer">
          <span>
            Projektjahr: <span>2026</span>
          </span>{" "}
          &copy; Kürsat Cakmak
        </div>
      )}
    </div>
  );
}
