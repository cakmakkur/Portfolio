import schnapsenImg from "../Assets/project_thumbnails/schnapsen.png";
import mondatelierImg from "../Assets/project_thumbnails/mondatelier.png";
import portfolioImg from "../Assets/project_thumbnails/portfolio.png";
import bandImg from "../Assets/project_thumbnails/band.png";
import bugnbassImg from "../Assets/project_thumbnails/bugnbass.png";
import primalDomainsImg from "../Assets/project_thumbnails/pd.png";

import tsIcon from "../Assets/icons/ts.png";
import sassIcon from "../Assets/icons/sass.png";
import vitestIcon from "../Assets/icons/vitest.png";
import nodeIcon from "../Assets/icons/node.png";
import jsIcon from "../Assets/icons/js.png";
import cssIcon from "../Assets/icons/css.png";
import expressIcon from "../Assets/icons/express.png";
import reactIcon from "../Assets/icons/react.png";
import mongoIcon from "../Assets/icons/mongo.png";
import nextjsIcon from "../Assets/icons/nextjs.png";
import javaIcon from "../Assets/java.svg";
import mavenIcon from "../Assets/maven.png";
import postgres from "../Assets/postgres.svg";
import springboot from "../Assets/spring-boot.webp";
import junitIcon from "../Assets/icons/junit.png";
import csharpIcon from "../Assets/icons/c-sharp.png";
import three from "../Assets/three.webp";

export const icons: IconType = {
  ts: tsIcon,
  sass: sassIcon,
  vitest: vitestIcon,
  node: nodeIcon,
  js: jsIcon,
  css: cssIcon,
  express: expressIcon,
  react: reactIcon,
  mongo: mongoIcon,
  next: nextjsIcon,
  maven: mavenIcon,
  java: javaIcon,
  postgres: postgres,
  springboot: springboot,
  junit: junitIcon,
  csharp: csharpIcon,
  three: three,
};

type IconType = {
  [key: string]: string;
};

export const projects = [
  {
    title: "Bug'n Bass",
    route: "/projects/bugnbass",
    img: bugnbassImg,
    technologies: [
      "java",
      "springboot",
      "postgres",
      "maven",
      "react",
      "ts",
      "junit",
    ],
    text: [
      "Bug'n Bass is a full-stack music store application built with a Java Spring Boot backend, PostgreSQL database, and React + TypeScript frontend. Users can browse instruments, add items to the cart, place orders, and leave product reviews.",
      "Bug'n Bass ist eine Full-Stack-Musikshop-Anwendung mit Java Spring Boot Backend, PostgreSQL-Datenbank und React + TypeScript Frontend. Nutzer*innen können Instrumente durchsuchen, Artikel in den Warenkorb legen, Bestellungen aufgeben und Produktbewertungen hinterlassen.",
    ],
  },
  {
    title: "Mondatelier / Lunr",
    route: "/projects/mondatelier",
    img: mondatelierImg,
    technologies: ["java", "springboot", "postgres", "three", "react"],
    text: [
      "Mondatelier/Lunr is artists' platfrom, where users create a portfolio, share and market their work, browse and create events, connect with other artists, watch live streams and much more. This project is currently in development.",
      "Mondatelier/Lunr ist eine Plattform für Künstlerinnen, auf der Nutzerinnen ein Portfolio erstellen, ihre Arbeiten teilen und vermarkten, Veranstaltungen durchsuchen und erstellen, sich mit anderen Künstler*innen vernetzen, Live-Streams ansehen und vieles mehr. Dieses Projekt befindet sich derzeit in der Entwicklung.",
    ],
  },
  {
    title: "Primal Domains Simulator",
    route: "/projects/primal-domains-simulator",
    img: primalDomainsImg,
    technologies: ["csharp"],
    text: [
      "Primal Domains Simulator is a C# simulation project that models domain mechanics and procedural interactions. It focuses on computational logic and algorithmic behavior rather than a traditional user interface.",
      "Primal Domains Simulator ist ein C#-Simulationsprojekt, das Domänenmechaniken und prozedurale Interaktionen modelliert. Es konzentriert sich auf rechnerische Logik und algorithmisches Verhalten statt auf eine klassische Benutzeroberfläche.",
    ],
  },
  {
    title: "Music Band App with Landing Page",
    route: "/projects/band-homepage",
    img: bandImg,
    technologies: ["next", "ts", "sass", "mongo"],
    text: [
      "Band Homepage+Dashboard is a Next.js app that it currently IN DEVELOPMENT. It will serve as a landing page for a music band and a dashboard for the band members to manage their content.",
      "Band Homepage + Dashboard ist eine Next.js-App, die sich derzeit IN ENTWICKLUNG befindet. Sie wird als Landingpage für eine Musikband dienen und ein Dashboard für die Bandmitglieder bieten, um ihre Inhalte zu verwalten.",
    ],
  },
  {
    title: "Schnapsen",
    route: "/projects/schnapsen",
    img: schnapsenImg,
    technologies: ["react", "js", "sass"],
    text: [
      "Schnapsen is a JavaScript-based, simplified version of the well-known card game Sixty-Six, where players can compete against the computer.",
      "Schnapsen ist eine JavaScript-basierte, vereinfachte Version des bekannten Kartenspiels Schnapsens, bei dem die Spieler gegen den Computer antreten können.",
    ],
  },

  {
    title: "Portfolio",
    route: "/projects/portfolio",
    img: portfolioImg,
    technologies: ["react", "sass", "ts"],
    text: [
      "Portfolio is my personal portfolio website, designed and developed by me.",
      "Meine persönliche Portfolio-Website, die von mir entworfen und entwickelt wurde.",
    ],
  },
];
