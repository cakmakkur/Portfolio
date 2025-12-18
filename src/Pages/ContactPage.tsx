import github__logo from "../Assets/github-hp.png";
import linked__in__logo from "../Assets/linkedin.svg";
import PhoneIcon from "../Assets/svg_repo/PhoneIcon";
import EmailIcon from "../Assets/svg_repo/EmailIcon";

export default function ContactPage() {
  return (
    <div className="contact__page__main">
      <div className="contact__info__div">
        <h2>Kürsat Cakmak</h2>
        <h4 style={{ display: "flex", alignItems: "center" }}>
          <PhoneIcon /> 0681 10590944
        </h4>
        <h4 style={{ display: "flex", alignItems: "center" }}>
          <EmailIcon /> cakmakkur@hotmail.com
        </h4>
        <div className="ext__links__div ext__links__div--contact">
          <a href="https://github.com/cakmakkur">
            <img height={30} src={github__logo} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/kursat-cakmak/">
            <img height={30} src={linked__in__logo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
