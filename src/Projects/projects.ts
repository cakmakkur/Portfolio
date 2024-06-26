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
import mongoIcon from '../Assets/icons/mongo.png'

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
  mongo: mongoIcon
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
      "Buy-Buy E-Commerce is the fronend of my demo project: a RESTful MERN e-commerce web application.",
      "Buy-Buy E-Commerce ist das Frontend meines Demo-Projekts: einer RESTful MERN E-Commerce-Webanwendung."
    ]
  },
  {
    title: "Buy-Buy Administrator",
    route: "/projects/buybuy-admin",
    img: buybuyAdminImg,
    technologies: ['react', 'node', 'sass', 'js', 'express', 'mongo'],
    text: [
      "Buy-Buy-Admin is the administrative interface for performing CRUD tasks on the Buy-Buy project.",
      "Buy-Buy-Admin ist die Administrationsoberfläche für die Durchführung von CRUD-Aufgaben im Buy-Buy-Projekt."
    ]
  },
  {
    title: "Schnapsen",
    route: "/projects/schnapsen",
    img: schnapsenImg,
    technologies: ['react', 'js', 'sass'],
    text: [
      "Schnapsen is a JavaScript-based, simplified version of the well-known card game Sixty-Six, where players can compete against the computer.",
      "Schnapsen ist eine JavaScript-basierte, vereinfachte Version des bekannten Kartenspiels Schnapsens, bei dem die Spieler gegen den Computer antreten können."
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
      "Portfolio is my personal portfolio website, designed and developed by me.",
      "Meine persönliche Portfolio-Website, die von mir entworfen und entwickelt wurde."
    ]
  }

]