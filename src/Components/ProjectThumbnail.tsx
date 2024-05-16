import { useEffect, useRef, useState } from "react";
import { useThemeContext } from "../GlobalContext/ThemeContext";
import { Link } from "react-router-dom";

import arrow from "../Assets/svg_repo/arrow_icon";
import { icons } from "../Projects/projects";


type ThumbnailProps = {
  key: number,
  title: string,
  route: string,
  img: string,
  technologies: string[],
  text: string,
}

const ProjectThumbnail: React.FC<ThumbnailProps> = ({title, route, img, technologies, text}) => {

  const { theme } = useThemeContext();
  const [isHovering, setIsHovering] = useState(false);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [fileIconBg, setFileIconBg] = useState(theme.background);

  const handleFileIconStyle = () => {
    if (!arrowRef.current || !titleRef.current) return
    if (isHovering) {
      setFileIconBg(theme.backgroundHighlight);
      arrowRef.current.style.transform = "rotate(-45deg) translateX(3px)";
      arrowRef.current.style.opacity = "1";
      titleRef.current.style.color = theme.primary;
    } else {
      setFileIconBg(theme.background);
      arrowRef.current.style.transform = "rotate(-45deg) translateX(0)";
      arrowRef.current.style.opacity = "0";
      titleRef.current.style.color = theme.highlight;
    }
  };

  useEffect(() => {
    handleFileIconStyle();
  }, [isHovering, theme]);

  return (
    <Link to={route}>
      <>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="project__div"
      >
        <section className="project__left">
          <img width="125px" src={img} alt="" />
        </section>
        <section className="project__right">
          <h4 ref={titleRef}>{title}</h4>
          <span
            style={{ "--spanAfterBg": fileIconBg } as React.CSSProperties}
            className="project__link__button"
          ></span>
          <span ref={arrowRef} className="project__link__arrow">
            {arrow(theme.text)}
          </span>

          <p>
            {text}
          </p>
          <div className="used__technologies">
            {technologies.map((t: string) => (
              <img key={t} height="25px" src={icons[t]} alt="" />
            ))}

          </div>
        </section>
      </div>
      <div className="between_tn_bar"></div>
      </>
    </Link>
  );
}

export default ProjectThumbnail