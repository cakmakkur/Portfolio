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
    text: "lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorempraesentium sint fugit expedita recusandae at, temporibus nostrum"
  },
  {
    title: "Buy-Buy Administrator",
    route: "/projects/buybuy-admin",
    img: buybuyAdminImg,
    technologies: ['react', 'node', 'sass', 'js', 'express'],
    text: "lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorempraesentium sint fugit expedita recusandae at, temporibus nostrum"
  },
  {
    title: "Schnapsen",
    route: "/projects/schnapsen",
    img: schnapsenImg,
    technologies: ['react', 'js', 'sass'],
    text: "lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorempraesentium sint fugit expedita recusandae at, temporibus nostrum"
  },
  {
    title: "Mondatelier",
    route: "/projects/mondatelier",
    img: mondatelierImg,
    technologies: ['js', 'css'],
    text: "lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorempraesentium sint fugit expedita recusandae at, temporibus nostrum"
  },
  {
    title: "Portfolio",
    route: "/projects/portfolio",
    img: portfolioImg,
    technologies: ['react', 'sass', 'ts'],
    text: "lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorempraesentium sint fugit expedita recusandae at, temporibus nostrum"
  }

]