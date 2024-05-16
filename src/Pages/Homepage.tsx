import { useRef, useEffect, useState } from 'react'
import { useScrollContext } from '../GlobalContext/ScrollPositionsContext'
import { useThemeContext } from '../GlobalContext/ThemeContext'
import { useLanguageContext } from "../GlobalContext/LanguageContext";


import { projects} from "../Projects/projects"
import ProjectThumbnail from '../Components/ProjectThumbnail'
import Cv from '../Components/Cv'
import HomeChapterNav from '../Components/HomeChapterNav'
import About from '../Components/About'

import lebenslauf_bild from '../Assets/lebenslauf_bild.png'
// import placeholder_logo from "../Assets/icons/react.png"
import github__logo from "../Assets/github-hp.png"
import linked__in__logo from "../Assets/linkedin.svg"


export default function Homepage () {
  const {setProjectsPosition, setResumePosition, setCurrentScrollPosition, setWindowWidth, windowWidth, newScrollPosition} = useScrollContext()
  const {theme} = useThemeContext()
  const {language} = useLanguageContext()

  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRightRef = useRef<HTMLDivElement>(null)

  //starting animation
  const mainPageRef = useRef<HTMLDivElement>(null)
  const [initialLoad, setInitialLoad] =useState<boolean>(false)
  useEffect(() => {
    const mountedBefore = sessionStorage.getItem('pageMountedBefore')
    console.log('checking load')
    console.log(mountedBefore)
    if (mountedBefore === 'true') {
      if (!mainPageRef.current) return
      mainPageRef.current.style.opacity = '1'
    } else {
      const timeoutId = setTimeout(() => {
        sessionStorage.setItem('pageMountedBefore', 'true')
          if (!mainPageRef.current) return
          mainPageRef.current.style.opacity = '1'
        }, 3200);
        return () => {
          clearTimeout(timeoutId)
        }
    }
    setInitialLoad(true)
  }, [initialLoad])
  
  

  const getScrollPositions = () => {
    const projectsCurrentPosition = document.getElementById('projects_start')?.offsetTop
    const resumeCurrentPosition = document.getElementById('cv_start')?.offsetTop

    if (!projectsCurrentPosition || !resumeCurrentPosition) return 

    setProjectsPosition(projectsCurrentPosition - 10)
    setResumePosition(resumeCurrentPosition - 10)
    setWindowWidth(window.innerWidth)
  }

  const updateCurrentScrollPosition = () => {
    if (!scrollRef.current) return
    if (window.innerWidth > 1070) {
      setCurrentScrollPosition(scrollRef.current.scrollTop)
    } else {
      setCurrentScrollPosition(window.scrollY)
    }
  }

  useEffect(() => {
    if (!scrollRef.current) return
    if (window.innerWidth > 1070) {
      scrollRef.current.addEventListener('scroll', updateCurrentScrollPosition);
    } else {
      window.addEventListener('scroll', updateCurrentScrollPosition)
    }
    getScrollPositions();
    window.addEventListener('resize', getScrollPositions);
    return () => {
      window.removeEventListener('resize', getScrollPositions)
      window.removeEventListener('scroll', updateCurrentScrollPosition)
      scrollRef.current?.removeEventListener('scroll', updateCurrentScrollPosition);
      setCurrentScrollPosition(0)
    };
  }, []);


  useEffect(() => {
    if (!newScrollPosition) return
    scrollRef.current?.scrollTo({top: newScrollPosition, left: 0, behavior: "smooth"})
  }, [newScrollPosition])


  // for transation of pseudo elements with gradient bg
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!sectionRightRef.current) return
      sectionRightRef.current.style.transition = "0.3s";
      sectionRightRef.current.classList.add('home__right--active')
    }, 500);
    return () => {
      clearTimeout(timeoutId)
      if (!sectionRightRef.current) return
      sectionRightRef.current.style.transition = "none";
      sectionRightRef.current.classList.remove('home__right--active')
    }
  }, [theme])

  return (
    <div ref={mainPageRef} className="home__main">
      <section className="home__left">
        <div className="home__img_div">
          <img width={250} src={lebenslauf_bild} alt="" />
        </div>
        <h1>KÜRSAT CAKMAK</h1>
        {language === 'EN' ? <h4>JUNIOR FRONT-END WEB-DEVELOPER</h4> : <h4>JUNIOR FRONT-END WEBENTWICKLER</h4>}
        
        {windowWidth > 1070 ? <HomeChapterNav/> : ""}
        <div className="ext__links__div">
          <a href="https://github.com/cakmakkur"><img height={30} src={github__logo} alt="" /></a>
          
          <img height={30} src={linked__in__logo} alt="" />
        </div>
      </section>
      {windowWidth <= 1070 ? <HomeChapterNav/> : ""}
      <section ref={sectionRightRef} className="home__right">
        <div ref={scrollRef} className='home__right__scrollable'>
          <About/>
          <div id="projects_start" className="projects__main__div">
          {language === 'EN' ? <h1>Projects</h1> : <h1>Projekte</h1>}
            {projects.map((project, i) => (
              <ProjectThumbnail
                key={i}
                title={project.title} 
                route={project.route} 
                img={project.img}
                technologies={project.technologies}
                text={language === 'EN' ? project.text[0] : project.text[1]}
              />
            ))}
          </div>
          <Cv/>
          
          <a className='resume__dl__btn' download="MyResume.pdf" href="/public/Lebenslauf.pdf">{language === 'EN' ? 'DOWNLOAD RESUMÈ' : 'LEBENSLAUF HERUNTERLADEN'} <br /> <span>{language === 'EN' ? 'as PDF File' : 'als PDF-Datei'}</span></a>
        </div>
      </section>
    </div>
  )
}