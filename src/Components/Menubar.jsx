import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";
import LanguageToggleButton from "./LanguageToggleButton";
import mainImg from "../Assets/main.png";

export default function Menubar() {
  return (
    <nav className="menu__nav__div">
      <img width="40px" className="logo_img" src={mainImg} alt="Logo" />
      <Link className={`menu__home__btn `} to="/">
        HOME
      </Link>
      <Link className={`menu__contact__btn`} to="/contact">
        CONTACT
      </Link>
      <LanguageToggleButton />
      <ThemeToggleButton />
    </nav>
  );
}
