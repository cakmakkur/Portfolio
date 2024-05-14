import { useThemeContext } from "../GlobalContext/ThemeContext";

export default function Cv() {
  const { theme } = useThemeContext();

  return (
    <div className="cv__div">
      <h1 id="cv_start">RESUME</h1>
      <div className="cv__chapter__div">
        <section
          className={`cv__sub__top ${
            theme.type === "light" ? "cv__sub__top--light" : ""
          }`}
        >
          <h3>Personal Information</h3>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            BIRTHDAY
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            14.02.1994
          </section>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            NATIONALITY
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Turkish
          </section>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            ADDRESS
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Hernalser Hauptstraße 221/7/13, 1170, WIEN
          </section>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            E-MAIL ADDRESS
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            cakmakkur@hotmail.com
          </section>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            RESIDENCE PERMISSION
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Daueraufenthalt - EU (Ausgestellt am 7.12.2021 Wien) <br />
            Mit unbeschränktem Zugang zum Arbeitsmarkt
          </section>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            MARITAL STATUS
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            In Partnership
          </section>
        </section>
      </div>
      <div className="cv__chapter__div">
        <section
          className={`cv__sub__top ${
            theme.type === "light" ? "cv__sub__top--light" : ""
          }`}
        >
          <h3>Education</h3>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            2008-2012
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Highschool of Natural Sciences, Yalova-Termal <br /> (Yalova-Termal
            Fen Lisesi)
          </section>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            2012-2015
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Electronical Engineering <br />
            Technical University Istanbul <br />
            <br /> (not graduated)
          </section>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            2017-2023
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Psychology <br /> University of Vienna <br /> (not graduated)
          </section>
        </section>
      </div>
      <div className="cv__chapter__div">
        <section
          className={`cv__sub__top ${
            theme.type === "light" ? "cv__sub__top--light" : ""
          }`}
        >
          <h3>Work Experience</h3>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            2015
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Waiter <br /> proStaff Catering
          </section>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            2015 - 2017
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Barista <br /> Starbucks Coffee
          </section>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            2017 - 2018
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Barista <br /> McDonald&apos;s
          </section>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            2018 - 2020
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Retail <br /> JuiceFactory
          </section>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            2023
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Daycare for Children <br /> Sternenwerkstad, Divina Art
          </section>
        </section>

        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            2021-current
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Waiter <br /> Kolar Beisl
          </section>
        </section>
      </div>
      <div className="cv__chapter__div">
        <section
          className={`cv__sub__top ${
            theme.type === "light" ? "cv__sub__top--light" : ""
          }`}
        >
          <h3>Languages</h3>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            GERMAN
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            C1 <br /> Latest Certificate: ÖSD-B2, 2015{" "}
          </section>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            ENGLISH
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            C1
          </section>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          >
            TURKISH
          </section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Native Language
          </section>
        </section>
      </div>
      <div className="cv__chapter__div">
        <section
          className={`cv__sub__top ${
            theme.type === "light" ? "cv__sub__top--light" : ""
          }`}
        >
          <h3>Interests & Projects</h3>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          ></section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Pianist in the jazz band &apos;Vier vor Zwölf&apos;
          </section>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          ></section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Programming
          </section>
        </section>
        <section className="cv__sub__bottom">
          <section
            className={`cv__sub__bottom__left ${
              theme.type === "light" ? "cv__sub__bottom__left--light" : ""
            }`}
          ></section>
          <section
            className={`cv__sub__bottom__right ${
              theme.type === "light" ? "cv__sub__bottom__right--light" : ""
            }`}
          >
            Painting <br />
            Digital Exposition: www.etwas.com{" "}
          </section>
        </section>
      </div>
    </div>
  );
}
