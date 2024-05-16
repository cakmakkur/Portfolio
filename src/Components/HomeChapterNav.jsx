import { useEffect, useRef, useState } from "react";
import { useScrollContext } from "../GlobalContext/ScrollPositionsContext";
import { useLanguageContext } from "../GlobalContext/LanguageContext";

export default function HomeChapterNav() {
  const [isHovering, setIsHovering] = useState("");
  const aboutBarRef = useRef(null);
  const projectsBarRef = useRef(null);
  const resumeBarRef = useRef(null);
  const aboutTextRef = useRef(null);
  const projectsTextRef = useRef(null);
  const resumeTextRef = useRef(null);

  const [currentChapter, setCurrentChapter] = useState("about");
  const { language } = useLanguageContext();

  const ignoreScrollCheck = useRef(false);
  const [ignoreScroll, setIgnoreScroll] = useState(false);

  const {
    windowWidth,
    currentScrollPosition,
    projectsPosition,
    resumePosition,
    setNewScrollPosition,
  } = useScrollContext();

  useEffect(() => {
    if (!currentScrollPosition) return;

    if (currentScrollPosition < projectsPosition - 100) {
      setCurrentChapter("about");
      return;
    } else if (currentScrollPosition < resumePosition - 100) {
      setCurrentChapter("projects");
      return;
    } else {
      setCurrentChapter("resume");
    }
  }, [currentScrollPosition, projectsPosition, resumePosition]);

  useEffect(() => {
    // if (windowWidth < 1070) return;
    if (ignoreScrollCheck.current) return;

    aboutBarRef.current.classList.remove("barDiv--active");
    projectsBarRef.current.classList.remove("barDiv--active");
    resumeBarRef.current.classList.remove("barDiv--active");
    aboutTextRef.current.classList.remove("textSpan--active");
    projectsTextRef.current.classList.remove("textSpan--active");
    resumeTextRef.current.classList.remove("textSpan--active");

    if (isHovering === "about" || currentChapter === "about") {
      aboutBarRef.current.classList.add("barDiv--active");
      aboutTextRef.current.classList.add("textSpan--active");
    }
    if (isHovering === "projects" || currentChapter === "projects") {
      projectsBarRef.current.classList.add("barDiv--active");
      projectsTextRef.current.classList.add("textSpan--active");
    }
    if (isHovering === "resume" || currentChapter === "resume") {
      resumeBarRef.current.classList.add("barDiv--active");
      resumeTextRef.current.classList.add("textSpan--active");
    }
  }, [currentChapter, isHovering, ignoreScroll]);

  const handleClick = (arg) => {
    if (windowWidth > 1070) {
      ignoreScrollCheck.current = true;
      setIgnoreScroll(true);

      if (arg === "about") {
        setNewScrollPosition(-10);
      } else if (arg === "projects") {
        setNewScrollPosition(projectsPosition);
      } else {
        setNewScrollPosition(resumePosition);
      }

      setTimeout(() => {
        ignoreScrollCheck.current = false;
        setIgnoreScroll(false);
      }, 600);

      setCurrentChapter(arg);
    } else {
      if (arg === "about") {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else if (arg === "projects") {
        document
          .getElementById("projects_start")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (arg === "resume") {
        document
          .getElementById("resume_start")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        setCurrentChapter("");
        return;
      }
      setCurrentChapter(arg);
    }
  };

  // don't 'highlight' current chapter in mobile mode
  // useEffect(() => {
  //   if (window.innerWidth < 1070) setCurrentChapter("");
  // }, []);

  return (
    <div className="chapterNavDiv">
      <div
        onMouseEnter={() => setIsHovering("about")}
        onMouseLeave={() => setIsHovering("")}
        className="chapterDiv"
        onClick={() => handleClick("about")}
      >
        <span ref={aboutTextRef} className="textSpan">
          {language === "EN" ? "About" : "Über mich"}
        </span>
        <div ref={aboutBarRef} className="barDiv"></div>
      </div>
      <div>
        <div
          onMouseEnter={() => setIsHovering("projects")}
          onMouseLeave={() => setIsHovering("")}
          className="chapterDiv"
          onClick={() => handleClick("projects")}
        >
          <span ref={projectsTextRef} className="textSpan">
            {language === "EN" ? "Projects" : "Projekte"}
          </span>
          <div ref={projectsBarRef} className="barDiv"></div>
        </div>
      </div>
      <div>
        <div
          onMouseEnter={() => setIsHovering("resume")}
          onMouseLeave={() => setIsHovering("")}
          className="chapterDiv"
          onClick={() => handleClick("resume")}
        >
          <span ref={resumeTextRef} className="textSpan">
            {language === "EN" ? "Resumè" : "Lebenslauf"}
          </span>
          <div ref={resumeBarRef} className="barDiv"></div>
        </div>
      </div>
    </div>
  );
}
