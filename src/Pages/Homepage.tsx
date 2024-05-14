import { useRef, useEffect } from 'react'
import { useScrollContext } from '../GlobalContext/ScrollPositionsContext'
import { useThemeContext } from '../GlobalContext/ThemeContext'

import { projects} from "../Projects/projects"
import ProjectThumbnail from '../Components/ProjectThumbnail'
import Cv from '../Components/Cv'
import HomeChapterNav from '../Components/HomeChapterNav'
import About from '../Components/About'

import lebenslauf_bild from '../Assets/lebenslauf_bild.png'
import placeholder_logo from "../Assets/icons/react.png"


export default function Homepage () {
  const {setProjectsPosition, setResumePosition, setCurrentScrollPosition, newScrollPosition} = useScrollContext()
  const {theme} = useThemeContext()

  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRightRef = useRef<HTMLDivElement>(null)

  const getScrollPositions = () => {
    const projectsCurrentPosition = document.getElementById('projects_start')?.offsetTop
    const resumeCurrentPosition = document.getElementById('cv_start')?.offsetTop

    if (!projectsCurrentPosition || !resumeCurrentPosition) return 

    setProjectsPosition(projectsCurrentPosition - 10)
    setResumePosition(resumeCurrentPosition - 10)
  }

  const updateCurrentScrollPosition = () => {
    if (!scrollRef.current) return
    setCurrentScrollPosition(scrollRef.current.scrollTop)
  }

  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.addEventListener('scroll', updateCurrentScrollPosition);
    getScrollPositions();
    window.addEventListener('resize', getScrollPositions);
    return () => {
      window.removeEventListener('resize', getScrollPositions)
      scrollRef.current?.removeEventListener('scroll', updateCurrentScrollPosition);
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
    <div className="home__main">
      <section className="home__left">
        <div className="home__img_div">
          <img width={250} src={placeholder_logo} alt="" />
        </div>
        <h1>KÜRSAT CAKMAK</h1>
        <h4>JUNIOR FRONT-END WEB-DEVELOPER</h4>
        <HomeChapterNav/>
        <div className="home__chapters__display"></div>
      </section>
      <section ref={sectionRightRef} className="home__right">
        <div ref={scrollRef} className='home__right__scrollable'>
          <About/>
          <div id="projects_start" className="projects__main__div">
            <h1>Projects</h1>
            {projects.map((project, i) => (
              <ProjectThumbnail
                key={i}
                title={project.title} 
                route={project.route} 
                img={project.img}
                technologies={project.technologies}
                text={project.text}
              />
            ))}
          </div>
          <Cv/>
          <a className='resume__dl__btn' download="MyResume.pdf" href="/public/Lebenslauf.pdf">DOWNLOAD RESUMÈ <br /> <span>as PDF File</span></a>
        </div>
      </section>
    </div>
  )
}