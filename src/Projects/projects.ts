import buybuyImg from '../Assets/project_thumbnails/buybuy.png';
import buybuyAdminImg from '../Assets/project_thumbnails/buybuy-admin.png';
import schnapsenImg from '../Assets/project_thumbnails/schnapsen.png';
import mondatelierImg from '../Assets/project_thumbnails/mondatelier.png';
import portfolioImg from '../Assets/project_thumbnails/portfolio.png';

import tsIcon from '../Assets/icons/ts.png';
import sassIcon from '../Assets/icons/sass.png';
import vitestIcon from '../Assets/icons/vitest.png';
import nodeIcon from '../Assets/icons/node.png';
import jsIcon from '../Assets/icons/js.png';
import cssIcon from '../Assets/icons/css.png';
import expressIcon from '../Assets/icons/express.png';
import reactIcon from '../Assets/icons/react.png';

// import { useLanguageContext } from "../GlobalContext/LanguageContext";
// const {language} = useLanguageContext()


export const icons: IconType = {
  ts: tsIcon,
  sass: sassIcon,
  vitest: vitestIcon,
  node: nodeIcon,
  js: jsIcon,
  css: cssIcon,
  express: expressIcon,
  react: reactIcon,
};

type IconType = {
  [key: string]: string;
}


export const projects = [
  {
    title: "Buy-Buy E-Commerce",
    route: "/projects/buybuy-homepage",
    img: buybuyImg,
    technologies: ['react', 'ts', 'node', 'express', 'vitest', 'sass'],
    text: [
      "Buy-Buy is a modern e-commerce website that offers musical instruments from pianos to drums and more...",
      "Buy-Buy ist eine e-Kommerz Website, die diverse Musikinstrumente von unterschiedlichen Kategorien anbietet."
    ]
  },
  {
    title: "Buy-Buy Administrator",
    route: "/projects/buybuy-admin",
    img: buybuyAdminImg,
    technologies: ['react', 'node', 'sass', 'js', 'express'],
    text: [
      "Buy-Buy-Admin is the administrator's portal that takes care of editing, adding and removing the products.",
      "Buy-Buy-Admin ist die Admin-Plattform von Buy-Buy, die Inventarmanagement erleichtert."
    ]
  },
  {
    title: "Schnapsen",
    route: "/projects/schnapsen",
    img: schnapsenImg,
    technologies: ['react', 'js', 'sass'],
    text: [
      "Schnapsen is a small version of a well-known card game 66.",
      "Schnapsen ist eine kleine Version eines wohlbekannten Kartenspiels Schnapsen"
    ]
  },
  {
    title: "Mondatelier",
    route: "/projects/mondatelier",
    img: mondatelierImg,
    technologies: ['js', 'css'],
    text: [
      "Mondatelier is currently a personal exhibition platform that will turn itself into an artists' gathering platform.",
      "Aktuell ist Mondatelier eine persönliche Ausstellungsseite, die sich noch in Entwicklung zu einer Künstlerplattform befindet"
    ]
  },
  {
    title: "Portfolio",
    route: "/projects/portfolio",
    img: portfolioImg,
    technologies: ['react', 'sass', 'ts'],
    text: [
      "Portfolio is a personal portfolio website, coded by me. It is also available as standalone template",
      "Portfolio ist mein persönliches Portfolio. Es ist auch als Vorlage erhältlich."
    ]
  }

]