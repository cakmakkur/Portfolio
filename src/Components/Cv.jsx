import { useThemeContext } from "../GlobalContext/ThemeContext";
import { useLanguageContext } from "../GlobalContext/LanguageContext";

export default function Cv() {
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();

  if (language === "EN") {
    return (
      <div id="resume_start" className="cv__div">
        <h1 id="cv_start">resume</h1>

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
              06/2025 – 02/2026
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Software Developer – Intern <br />
              <a
                style={{ textDecoration: "underline" }}
                href="https://www.docolution.com"
                target="_blank"
              >
                Docolution GmbH
              </a>{" "}
              Vienna, Austria
              <ul className="cv-work">
                <li>
                  Developed business management applications using Java, Spring
                  Boot, TypeScript, Angular, SQL, and Liquibase
                </li>
                <li>
                  Maintained Document Analyzer software (Aly): bug fixes,
                  feature enhancements, and production release support
                </li>
                <li>
                  Implemented CI/CD pipelines, automated testing, and Bash/Batch
                  scripting for deployment automation and task optimization
                </li>
                <li>
                  Wrote technical documentation and contributed to code reviews
                  in an agile team environment
                </li>
                <li>
                  Took ownership of full-stack solutions from database design to
                  UI implementation, delivering measurable business value
                </li>
              </ul>
            </section>
          </section>

          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              2021 – 2024
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Service Personal <br />
              <a
                style={{ textDecoration: "underline" }}
                href="https://www.docolution.com"
                target="_blank"
              >
                Kolar Beisl,
              </a>{" "}
              Vienna, Austria
              <ul className="cv-work">
                <li>
                  Provided attentive guest service and menu consultation in a
                  fast-paced international restaurant
                </li>
                <li>
                  Coordinated with team members to ensure efficient operations
                  and maintain a professional atmosphere
                </li>
              </ul>
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
              Child Care Worker <br />
              Divina Art, Vienna, Austria
              <ul className="cv-work">
                <li>Supervised children in a safe, engaging environment</li>
                <li>Conducted age-appropriate educational activities</li>
                <li>Supported social, emotional, and cognitive development</li>
              </ul>
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
              03/2025 – 03/2026
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Junior Software Developer <br />
              FH Technikum, Vienna, Austria
              <ul className="cv-work">
                <li>Full-Stack Web and Software Development</li>
                <li>Data Management</li>
                <li>Networking, Infrastructure & Linux</li>
                <li>Agile Development & Software Lifecycle Management</li>
                <li>Software Architecture and Design</li>
                <li>Agile Software Testing</li>
              </ul>
            </section>
          </section>

          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              2018 – 2022
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              University of Vienna, Vienna, Austria <br />
              BSc Psychology (not completed)
            </section>
          </section>

          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              2008 – 2012
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Yalova Termal High School for Natural Sciences
            </section>
          </section>
        </div>

        <div className="cv__chapter__div">
          <section
            className={`cv__sub__top ${
              theme.type === "light" ? "cv__sub__top--light" : ""
            }`}
          >
            <h3>Language</h3>
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
              C1 - Advanced proficiency, comfortable in business settings
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
              C2 - Fluent in all professional and technical contexts
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
            <h3>Languages & Technologies</h3>
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
              <ul className="cv-work">
                <li>Java, Spring Boot, Hibernate</li>
                <li>JS/TS, Angular, React, npm</li>
                <li>
                  HTML, CSS, SASS, Bootstrap, PostgreSQL, MySQL, MongoDB,
                  Liquibase
                </li>
                <li>Git, GitLab, CI/CD Pipelines</li>
                <li>Bash/Batch Scripting</li>
                <li>Maven, Docker, AWS</li>
                <li>Linux, Windows, macOS</li>
                <li>Agile/Scrum, Code Review</li>
              </ul>
            </section>
          </section>
        </div>
        <div className="cv__chapter__div">
          <section
            className={`cv__sub__top ${
              theme.type === "light" ? "cv__sub__top--light" : ""
            }`}
          >
            <h3>Personal</h3>
          </section>
          <section className="cv__sub__bottom"></section>
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
              I&apos;m a dedicated piano player and passionate about music and
              visual arts. I occasionally play in a hobby jazz band. I also like
              visual arts and paint traditionally and digitally.
              <br />
              Creativity fuels both my technical work and personal pursuits.{" "}
              <br />
              As a hobby project, I am working on an artists&apos; platform to
              share artwork and connect with fellow art enthusiasts.
            </section>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <div id="resume_start" className="cv__div">
        <h1 id="cv_start">lebenslauf</h1>

        <div className="cv__chapter__div">
          <section
            className={`cv__sub__top ${
              theme.type === "light" ? "cv__sub__top--light" : ""
            }`}
          >
            <h3>Berufserfahrung</h3>
          </section>

          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              06/2025 – 02/2026
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Software Developer – Praktikant <br />
              <a
                style={{ textDecoration: "underline" }}
                href="https://www.docolution.com"
                target="_blank"
              >
                Docolution GmbH,
              </a>{" "}
              Wien, Österreich
              <ul className="cv-work">
                <li>
                  Entwicklung von Business-Management-Anwendungen mit Java,
                  Spring Boot, TypeScript, Angular, SQL und Liquibase
                </li>
                <li>
                  Wartung der Dokumenten-Analyse-Software (Aly):
                  Fehlerbehebungen, Feature-Erweiterungen und Unterstützung bei
                  Produktiv-Releases
                </li>
                <li>
                  Implementierung von CI/CD-Pipelines, automatisierten Tests
                  sowie Bash-/Batch-Skripten zur Deployment-Automatisierung und
                  Aufgabenoptimierung
                </li>
                <li>
                  Erstellung technischer Dokumentation und Mitwirkung bei
                  Code-Reviews in einem agilen Teamumfeld
                </li>
                <li>
                  Eigenverantwortliche Umsetzung von Full-Stack-Lösungen von der
                  Datenbankgestaltung bis zur UI-Implementierung mit messbarem
                  geschäftlichem Mehrwert
                </li>
              </ul>
            </section>
          </section>

          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              2021 – 2024
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Servicepersonal <br />
              <a
                style={{ textDecoration: "underline" }}
                href="https://www.docolution.com"
                target="_blank"
              >
                Kolar Beisl,
              </a>{" "}
              Wien, Österreich
              <ul className="cv-work">
                <li>
                  Aufmerksame Gästebetreuung und Menüberatung in einem
                  schnelllebigen, internationalen Restaurantbetrieb
                </li>
                <li>
                  Enge Zusammenarbeit im Team zur Sicherstellung effizienter
                  Abläufe und eines professionellen Auftretens
                </li>
              </ul>
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
              Kinderbetreuer <br />
              Divina Art, Wien, Österreich
              <ul className="cv-work">
                <li>
                  Betreuung von Kindern in einem sicheren und anregenden Umfeld
                </li>
                <li>Durchführung altersgerechter pädagogischer Aktivitäten</li>
                <li>
                  Förderung der sozialen, emotionalen und kognitiven Entwicklung
                </li>
              </ul>
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
              03/2025 – 03/2026
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Junior Software Developer <br />
              FH Technikum, Wien, Österreich
              <ul className="cv-work">
                <li>Full-Stack Web- und Softwareentwicklung</li>
                <li>Datenmanagement</li>
                <li>Netzwerke, Infrastruktur und Linux</li>
                <li>Agile Entwicklung & Software-Lifecycle-Management</li>
                <li>Softwarearchitektur und -design</li>
                <li>Agiles Software-Testing</li>
              </ul>
            </section>
          </section>

          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              2018 – 2022
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Universität Wien, Wien, Österreich <br />
              Bachelorstudium Psychologie (nicht abgeschlossen)
            </section>
          </section>

          <section className="cv__sub__bottom">
            <section
              className={`cv__sub__bottom__left ${
                theme.type === "light" ? "cv__sub__bottom__left--light" : ""
              }`}
            >
              2008 – 2012
            </section>
            <section
              className={`cv__sub__bottom__right ${
                theme.type === "light" ? "cv__sub__bottom__right--light" : ""
              }`}
            >
              Yalova Termal Gymnasium für Naturwissenschaften
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
              C1 – Fortgeschrittene Sprachkenntnisse, sicher im beruflichen und
              geschäftlichen Umfeld
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
              C2 – Verhandlungssicher in allen beruflichen und technischen
              Kontexten
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
            <h3>Programmiersprachen & Technologien</h3>
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
              <ul className="ui-work">
                <li>Java, Spring Boot, Hibernate</li>
                <li>JS/TS, Angular, React, npm</li>
                <li>
                  HTML, CSS, SASS, Bootstrap, PostgreSQL, MySQL, MongoDB,
                  Liquibase
                </li>
                <li>Git, GitLab, CI/CD-Pipelines</li>
                <li>Bash/Batch-Skripting</li>
                <li>Maven, Docker, AWS</li>
                <li>Linux, Windows, macOS</li>
                <li>Agile/Scrum, Code Review</li>
              </ul>
            </section>
          </section>
        </div>
        <div className="cv__chapter__div">
          <section
            className={`cv__sub__top ${
              theme.type === "light" ? "cv__sub__top--light" : ""
            }`}
          >
            <h3>Persönliches</h3>
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
              Ich bin ein engagierter Pianist und leidenschaftlich an Musik und
              visueller Kunst interessiert. Gelegentlich spiele ich in einer
              Hobby-Jazzband. Außerdem beschäftige ich mich mit bildender Kunst
              und male sowohl traditionell als auch digital.
              <br />
              Kreativität prägt sowohl meine technische Arbeit als auch meine
              persönlichen Interessen.
              <br />
              Als Hobbyprojekt arbeite ich an einer Künstler*innen-Plattform, um
              Kunstwerke zu teilen und mich mit anderen Kunstinteressierten zu
              vernetzen.
            </section>
          </section>
        </div>
      </div>
    );
  }
}
