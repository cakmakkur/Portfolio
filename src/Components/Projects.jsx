import { useEffect, useRef, useState } from "react";
import { useThemeContext } from "../GlobalContext/ThemeContext";
import { Link } from "react-router-dom";

import arrow from "../Assets/svg_repo/arrow_icon";
import pr_buybuy from "../Assets/project_thumbnails/buybuy.png";
import pr_buybuy_admin from "../Assets/project_thumbnails/buybuy-admin.png";
import pr_schnapsen from "../Assets/project_thumbnails/schnapsen.png";
import pr_mondatelier from "../Assets/project_thumbnails/mondatelier.png";
import pr_portfolio from "../Assets/project_thumbnails/portfolio.png";

import ts_logo from "../Assets/icons/ts.png";
import sass_logo from "../Assets/icons/sass.png";
import vitest_logo from "../Assets/icons/vitest.png";
import node_logo from "../Assets/icons/node.png";
import js_logo from "../Assets/icons/js.png";
import css_logo from "../Assets/icons/css.png";
import express_logo from "../Assets/icons/express.png";
import react_logo from "../Assets/icons/react.png";

export default function Projects() {
  const { theme } = useThemeContext();
  const [isHovering, setIsHovering] = useState(false);
  const arrowRef = useRef(null);
  const titleRef = useRef(null);
  const [fileIconBg, setFileIconBg] = useState(theme.background);

  const handleFileIconStyle = () => {
    if (isHovering) {
      setFileIconBg(theme.backgroundHighlight);
      arrowRef.current.style.transform = "rotate(-45deg) translateX(3px)";
      arrowRef.current.style.opacity = 1;
      titleRef.current.style.color = theme.primary;
    } else {
      setFileIconBg(theme.background);
      arrowRef.current.style.transform = "rotate(-45deg) translateX(0)";
      arrowRef.current.style.opacity = 0;
      titleRef.current.style.color = theme.highlight;
    }
  };

  useEffect(() => {
    handleFileIconStyle(theme.background);
  }, [isHovering, theme]);

  return (
    <div id="projects_start" className="projects__main__div">
      <h1>Projects</h1>
      <Link to="/projects/buybuy-homepage">
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="project__div"
        >
          <section className="project__left">
            <img width="125px" src={pr_buybuy} alt="" />
          </section>
          <section className="project__right">
            <h4 ref={titleRef}>Buy-Buy E-Commerce</h4>
            <span
              style={{ "--spanAfterBg": fileIconBg }}
              className="project__link__button"
            ></span>
            <span ref={arrowRef} className="project__link__arrow">
              {arrow(theme.highlight)}
            </span>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              praesentium sint fugit expedita recusandae at, temporibus nostrum
            </p>
            <div className="used__technologies">
              <img height="25px" src={react_logo} alt="" />
              <img height="25px" src={ts_logo} alt="" />
              <img height="25px" src={node_logo} alt="" />
              <img height="25px" src={express_logo} alt="" />
              <img height="25px" src={vitest_logo} alt="" />
              <img height="25px" src={sass_logo} alt="" />
            </div>
          </section>
        </div>
      </Link>
      <Link to="/projects/buybuy-admin">
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="project__div"
        >
          <section className="project__left">
            <img width="125px" src={pr_buybuy_admin} alt="" />
          </section>
          <section className="project__right">
            <h4 ref={titleRef}>Buy-Buy Administrator</h4>
            <span
              style={{ "--spanAfterBg": fileIconBg }}
              className="project__link__button"
            ></span>
            <span ref={arrowRef} className="project__link__arrow">
              {arrow(theme.highlight)}
            </span>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              praesentium sint fugit expedita recusandae at, temporibus nostrum
            </p>
            <div className="used__technologies">
              <img height="25px" src={react_logo} alt="" />
              <img height="25px" src={node_logo} alt="" />
              <img height="25px" src={sass_logo} alt="" />
              <img height="25px" src={js_logo} alt="" />
              <img height="25px" src={express_logo} alt="" />
            </div>
          </section>
        </div>
      </Link>
      <Link to="/projects/schnapsen">
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="project__div"
        >
          <section className="project__left">
            <img width="125px" src={pr_schnapsen} alt="" />
          </section>
          <section className="project__right">
            <h4 ref={titleRef}>Schnapsen</h4>
            <span
              style={{ "--spanAfterBg": fileIconBg }}
              className="project__link__button"
            ></span>
            <span ref={arrowRef} className="project__link__arrow">
              {arrow(theme.highlight)}
            </span>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              praesentium sint fugit expedita recusandae at, temporibus nostrum
            </p>
            <div className="used__technologies">
              <img height="25px" src={react_logo} alt="" />
              <img height="25px" src={js_logo} alt="" />
              <img height="25px" src={sass_logo} alt="" />
            </div>
          </section>
        </div>
      </Link>
      <Link to="/projects/mondatelier">
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="project__div"
        >
          <section className="project__left">
            <img width="125px" src={pr_mondatelier} alt="" />
          </section>
          <section className="project__right">
            <h4 ref={titleRef}>Mondatelier</h4>
            <span
              style={{ "--spanAfterBg": fileIconBg }}
              className="project__link__button"
            ></span>
            <span ref={arrowRef} className="project__link__arrow">
              {arrow(theme.highlight)}
            </span>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              praesentium sint fugit expedita recusandae at, temporibus nostrum
            </p>
            <div className="used__technologies">
              <img height="25px" src={js_logo} alt="" />
              <img height="25px" src={css_logo} alt="" />
            </div>
          </section>
        </div>
      </Link>
      <Link to="/projects/portfolio">
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="project__div"
        >
          <section className="project__left">
            <img width="125px" src={pr_portfolio} alt="" />
          </section>
          <section className="project__right">
            <h4 ref={titleRef}>Portfolio</h4>
            <span
              style={{ "--spanAfterBg": fileIconBg }}
              className="project__link__button"
            ></span>
            <span ref={arrowRef} className="project__link__arrow">
              {arrow(theme.highlight)}
            </span>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              praesentium sint fugit expedita recusandae at, temporibus nostrum
            </p>
            <div className="used__technologies">
              <img height="25px" src={react_logo} alt="" />
              <img height="25px" src={sass_logo} alt="" />
              <img height="25px" src={ts_logo} alt="" />
            </div>
          </section>
        </div>
      </Link>
    </div>
  );
}
