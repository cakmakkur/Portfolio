import { useRef, useEffect, useState } from "react";
import { useScrollContext } from "../GlobalContext/ScrollPositionsContext";
import { useThemeContext } from "../GlobalContext/ThemeContext";
import { useLanguageContext } from "../GlobalContext/LanguageContext";

import LoadingHexagonal from "../utils/LoadingHexagonal";

import { projects } from "../Projects/projects";
import ProjectThumbnail from "../Components/ProjectThumbnail";
import Cv from "../Components/Cv";
import HomeChapterNav from "../Components/HomeChapterNav";
import About from "../Components/About";

import lebenslauf_bild from "../Assets/lebenslauf_bild.png";
import profilImg_tiny from "../Assets/lebenslauf_bild_tiny.png";
// import placeholder_logo from "../Assets/icons/react.png"
import github__logo from "../Assets/github-hp.png";
import linked__in__logo from "../Assets/linkedin.svg";

export default function Homepage() {
  const {
    setProjectsPosition,
    setResumePosition,
    setCurrentScrollPosition,
    setWindowWidth,
    windowWidth,
    newScrollPosition,
  } = useScrollContext();
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();

  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRightRef = useRef<HTMLDivElement>(null);

  const bildRef = useRef<HTMLImageElement>(null);
  const [isProfilImgLoading, setIsProfilImgLoading] = useState<boolean>(true);

  // Starting fade-in animation
  const mainPageRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [initialLoad, setInitialLoad] = useState<boolean>(false);
  useEffect(() => {
    const mountedBefore = sessionStorage.getItem("pageMountedBefore");
    if (mountedBefore === "true") {
      if (!mainPageRef.current) return;
      mainPageRef.current.style.opacity = "1";
    } else {
      timeoutRef.current = setTimeout(() => {
        sessionStorage.setItem("pageMountedBefore", "true");
        if (!mainPageRef.current) return;
        mainPageRef.current.style.opacity = "1";
      }, 2200);
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
    setInitialLoad(true);
  }, [initialLoad]);

  // Profil Picture Loading Animation
  useEffect(() => {
    if (!bildRef.current) return;
    const loaded = () => {
      setIsProfilImgLoading(false);
      bildRef.current?.classList.add("profil__img--active");
    };
    bildRef.current.addEventListener("load", loaded);

    return () => {
      if (!bildRef.current) return;
      bildRef.current.removeEventListener("load", loaded);
    };
  }, []);

  // Observer for headers
  const headerRef1 = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const headingElement = headerRef1.current;
    if (!headingElement) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.classList.toggle(
            "homepage__header--visible",
            e.isIntersecting
          );
        });
      },
      {
        rootMargin: "200px",
      }
    );
    observer.observe(headingElement);
    return () => {
      observer.unobserve(headingElement);
    };
  }, [headerRef1]);

  // Observer for project thumbnails

  const projectsContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!projectsContainerRef.current) return;

    const parentElement = projectsContainerRef.current;
    const children = parentElement.children;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.classList.toggle(
            "project__link__div--visible",
            e.isIntersecting
          );
        });
      },
      {
        threshold: 0.5,
      }
    );
    Array.from(children).forEach((child) => {
      observer.observe(child);
    });

    return () => {
      Array.from(children).forEach((child) => {
        observer.unobserve(child);
      });
    };
  }, [projectsContainerRef]);

  const getScrollPositions = () => {
    const projectsCurrentPosition =
      document.getElementById("projects_start")?.offsetTop;
    const resumeCurrentPosition =
      document.getElementById("cv_start")?.offsetTop;

    if (!projectsCurrentPosition || !resumeCurrentPosition) return;

    setProjectsPosition(projectsCurrentPosition - 30);
    setResumePosition(resumeCurrentPosition - 30);
    setWindowWidth(window.innerWidth);
  };

  const updateCurrentScrollPosition = () => {
    if (!scrollRef.current) return;
    if (window.innerWidth > 1070) {
      setCurrentScrollPosition(scrollRef.current.scrollTop);
    } else {
      setCurrentScrollPosition(window.scrollY);
    }
  };

  useEffect(() => {
    if (!scrollRef.current) return;
    if (window.innerWidth > 1070) {
      scrollRef.current.addEventListener("scroll", updateCurrentScrollPosition);
    } else {
      window.addEventListener("scroll", updateCurrentScrollPosition);
    }
    getScrollPositions();
    window.addEventListener("resize", getScrollPositions);
    return () => {
      window.removeEventListener("resize", getScrollPositions);
      window.removeEventListener("scroll", updateCurrentScrollPosition);
      scrollRef.current?.removeEventListener(
        "scroll",
        updateCurrentScrollPosition
      );
      setCurrentScrollPosition(0);
    };
  }, []);

  useEffect(() => {
    if (!newScrollPosition) return;
    scrollRef.current?.scrollTo({
      top: newScrollPosition,
      left: 0,
      behavior: "smooth",
    });
  }, [newScrollPosition]);

  // for transation of pseudo elements with gradient bg
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!sectionRightRef.current) return;
      sectionRightRef.current.style.transition = "0.3s";
      sectionRightRef.current.classList.add("home__right--active");
    }, 500);
    return () => {
      clearTimeout(timeoutId);
      if (!sectionRightRef.current) return;
      sectionRightRef.current.style.transition = "none";
      sectionRightRef.current.classList.remove("home__right--active");
    };
  }, [theme]);

  return (
    <>
      <div ref={mainPageRef} className="home__main">
        <div
          style={{ backgroundColor: theme.backgroundHighlight }}
          className="homepage-right-shape"
        ></div>

        <section className="home__left" style={{ zIndex: "2" }}>
          <div
            className="home__img_div"
            style={{
              backgroundImage: `url(${profilImg_tiny})`,
              backgroundSize: "cover",
              borderRadius: "50%",
            }}
          >
            {isProfilImgLoading ? <LoadingHexagonal /> : ""}
            <img
              className="profil__img"
              ref={bildRef}
              width={250}
              src={lebenslauf_bild}
              alt="profil picture"
            />
          </div>
          <h1>KÜRSAT CAKMAK</h1>
          <div>
            {language === "EN" ? (
              <h4>SOFTWARE DEVELOPER</h4>
            ) : (
              <h4>SOFTWAREENTWICKLER</h4>
            )}
            <div className="ext__links__div">
              <a href="https://github.com/cakmakkur" target="_blank">
                <img height={30} src={github__logo} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/kursat-cakmak/"
                target="_blank"
              >
                <img height={30} src={linked__in__logo} alt="" />
              </a>
            </div>
          </div>
          {windowWidth > 1070 ? <HomeChapterNav /> : ""}
        </section>
        {windowWidth <= 1070 ? <HomeChapterNav /> : ""}
        <section ref={sectionRightRef} className="home__right">
          <div ref={scrollRef} className="home__right__scrollable">
            <About />
            <div
              id="projects_start"
              ref={projectsContainerRef}
              className="projects__main__div"
            >
              {language === "EN" ? (
                <h1 ref={headerRef1}>projects</h1>
              ) : (
                <h1 ref={headerRef1}>projekte</h1>
              )}
              {projects.map((project, i) => (
                <ProjectThumbnail
                  key={i}
                  title={project.title}
                  route={project.route}
                  img={project.img}
                  technologies={project.technologies}
                  text={language === "EN" ? project.text[0] : project.text[1]}
                />
              ))}
            </div>
            <Cv />

            {language === "EN" ? (
              <a
                className="resume__dl__btn"
                download="Resume_Kursat_Cakmak.pdf"
                href="/resume_kursat_cakmak.pdf"
              >
                DOWNLOAD RESUMÈ
                <br />
                <span>as PDF File</span>
              </a>
            ) : (
              <a
                className="resume__dl__btn"
                download="Lebenslauf_Kursat_Cakmak.pdf"
                href="/lebenslauf_kursat_cakmak.pdf"
              >
                LEBENSLAUF HERUNTERLADEN
                <br />
                <span>als PDF-Datei</span>
              </a>
            )}
          </div>
        </section>
      </div>
      {/* {language === "EN" ? (
        <div className="homepage-footer">
          <span>
            {" "}
            Project Year: <span>2024</span>{" "}
          </span>{" "}
          &copy; Kürsat Cakmak
        </div>
      ) : (
        <div className="homepage-footer">
          <span>
            {" "}
            Projektjahr: <span>2024</span>{" "}
          </span>{" "}
          &copy; Kürsat Cakmak
        </div>
      )} */}
    </>
  );
}
