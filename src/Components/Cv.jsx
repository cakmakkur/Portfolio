import { useThemeContext } from "../GlobalContext/ThemeContext";
import { useLanguageContext } from "../GlobalContext/LanguageContext";

export default function Cv() {
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();

  if (language === "EN") {
    return (
      <div id="resume_start" className="cv__div">
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
              RESIDENCE PERMISSION
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Permanent Residence Persmission - EU (Issued on 7.12.2021 Vienna){" "}
              <br />
              With unrestricted access to the labor market
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
              Highschool of Natural Sciences, Yalova-Termal <br />{" "}
              (Yalova-Termal Fen Lisesi)
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
              2017
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Biologische Landwirtschaft <br /> Am Seebacher Hof, Bad
              Mitterndorf
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
              Child Care <br /> Sternenwerkstatt, Divina Art
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
            <h3>Language Skills</h3>
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
              C1 written and spoken <br /> Latest Certificate: ÖSD-B2, 2015{" "}
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
              C1 written and spoken
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
            >
              ⏺
            </section>
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
            >
              ⏺
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Web Development
            </section>
          </section>
          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              ⏺
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Painting <br />
              <span style={{ fontSize: "0.8rem", textDecoration: "underline" }}>
                Online Exposition: ausstellung.cakmakkursat.com
              </span>
            </section>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <div id="resume_start" className="cv__div">
        <h1 id="cv_start">LEBENSLAUF</h1>
        <div className="cv__chapter__div">
          <section
            className={`cv__sub__top ${
              theme.type === "light" ? "cv__sub__top--light" : ""
            }`}
          >
            <h3>Persönliche Information</h3>
          </section>
          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              GEBURTSTAG
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
              STAATSANGEHÖRIGKEIT
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Türkisch
            </section>
          </section>
          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              ADRESSE
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
              AUFENTHALTSTITEL
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
              FAMILIENSTAND
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              In Partnerschaft
            </section>
          </section>
        </div>
        <div className="cv__chapter__div">
          <section
            className={`cv__sub__top ${
              theme.type === "light" ? "cv__sub__top--light" : ""
            }`}
          >
            <h3>Ausbildung</h3>
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
              Gymnasium, Yalova-Termal <br /> (Yalova-Termal Fen Lisesi)
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
              Psychologie <br /> Universität Wien <br /> (nicht abgeschlossen)
            </section>
          </section>
        </div>
        <div className="cv__chapter__div">
          <section
            className={`cv__sub__top ${
              theme.type === "light" ? "cv__sub__top--light" : ""
            }`}
          >
            <h3>Berufliche Erfahrungen</h3>
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
              Kellner <br /> proStaff Catering
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
              2017
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Biologische Landwirtschaft <br /> Am Seebacher Hof, Bad
              Mitterndorf
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
              Handel <br /> JuiceFactory
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
              Kinderbetreuung <br /> Sternenwerkstatt, Divina Art
            </section>
          </section>

          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              2021-laufend
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Kellner <br /> Kolar Beisl
            </section>
          </section>
        </div>
        <div className="cv__chapter__div">
          <section
            className={`cv__sub__top ${
              theme.type === "light" ? "cv__sub__top--light" : ""
            }`}
          >
            <h3>Sprachkenntnisse</h3>
          </section>
          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              DEUTSCH
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              C1 in Wort und Schrift <br /> Aktuellstes Zertifikat: ÖSD-B2, 2015
            </section>
          </section>
          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              ENGLISCH
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              C1 in Wort und Schrift
            </section>
          </section>
          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              TÜRKISCH
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Muttersprache
            </section>
          </section>
        </div>
        <div className="cv__chapter__div">
          <section
            className={`cv__sub__top ${
              theme.type === "light" ? "cv__sub__top--light" : ""
            }`}
          >
            <h3>Interessen & Projekte</h3>
          </section>
          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              ⏺
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Pianist in der Jazz-band &apos;Vier vor Zwölf&apos;
            </section>
          </section>
          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              ⏺
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Webentwicklung
            </section>
          </section>
          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              ⏺
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Malerei <br />
              <span style={{ fontSize: "0.8rem", textDecoration: "underline" }}>
                Online-Ausstellung: ausstellung.cakmakkursat.com
              </span>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
