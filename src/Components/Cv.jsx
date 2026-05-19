import { LightTheme, useThemeContext } from "../GlobalContext/ThemeContext";
import { useLanguageContext } from "../GlobalContext/LanguageContext";

export default function Cv() {
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();

  const sectionTopClass = `cv__sub__top ${
    theme.type === "light" ? "cv__sub__top--light" : ""
  }`;

  const sectionLeftClass = `cv__sub__bottom__left ${
    theme.type === "light" ? "cv__sub__bottom__left--light" : ""
  }`;

  const sectionRightClass = `cv__sub__bottom__right ${
    theme.type === "light" ? "cv__sub__bottom__right--light" : ""
  }`;

  const linkColor = { color: LightTheme.secondary };

  if (language === "EN") {
    return (
      <div id="resume_start" className="cv__div">
        <h1 id="cv_start">resume</h1>

        <div className="cv__chapter__div">
          <section className={sectionTopClass}>
            <h3>Work Experience</h3>
          </section>

          <section className="cv__sub__bottom">
            <section className={sectionLeftClass}>06/2025 – 02/2026</section>
            <section className={sectionRightClass}>
              <span className="cv-accent">Software Developer – Intern</span>
              <br />
              <a
                style={{ textDecoration: "underline" }}
                href="https://www.docolution.com"
                target="_blank"
                rel="noreferrer"
              >
                <span style={linkColor}>Docolution GmbH</span>
              </a>{" "}
              Vienna, Austria
              <span style={{ display: "block", height: "10px" }}></span>
              <ul className="cv-work">
                <li>
                  Developed full-stack features using Java (Spring Boot) and
                  Angular for the internal business application People
                </li>
                <li>
                  Maintained and extended document analysis software Aly,
                  including bug fixes and feature enhancements
                </li>
                <li>
                  Built and integrated REST APIs and supported frontend-backend
                  communication
                </li>
                <li>
                  Worked with SQL and Liquibase for database design and schema
                  management
                </li>
                <li>
                  Contributed to CI/CD pipelines, automated testing, and
                  deployment processes using Bash/Batch scripting
                </li>
                <li>
                  Participated in debugging, code reviews, and production
                  release support in an Agile team
                </li>
              </ul>
            </section>
          </section>

          <section className="cv__sub__bottom">
            <section className={sectionLeftClass}>2015 – 2025</section>
            <section className={sectionRightClass}>
              <span className="cv-accent">
                Additional Professional Experience
              </span>
              <br />
              Vienna, Austria
              <span style={{ display: "block", height: "10px" }}></span>
              <ul className="cv-work">
                <li>
                  Customer-facing operational roles across hospitality and
                  retail in Vienna
                </li>
                <li>
                  Developed communication, teamwork, and high-pressure
                  problem-solving skills
                </li>
              </ul>
            </section>
          </section>
        </div>

        <div className="cv__chapter__div">
          <section className={sectionTopClass}>
            <h3>Education</h3>
          </section>

          <section className="cv__sub__bottom">
            <section className={sectionLeftClass}>03/2025 – 03/2026</section>
            <section className={sectionRightClass}>
              <span className="cv-accent">Junior Software Developer</span>
              <br />
              <a
                style={{ textDecoration: "underline" }}
                href="https://www.technikum-wien.at/"
                target="_blank"
                rel="noreferrer"
              >
                <span style={linkColor}>FH Technikum Wien</span>
              </a>
              , Vienna, Austria
              <ul className="cv-work">
                <li>
                  Focus: full-stack web development, Java, databases,
                  Linux/infrastructure, software architecture, Agile
                  development, and software testing
                </li>
              </ul>
            </section>
          </section>

          <section className="cv__sub__bottom">
            <section className={sectionLeftClass}>2017 – 2023</section>
            <section className={sectionRightClass}>
              <span className="cv-accent">Psychology Studies</span> coursework
              completed, no degree
              <br />
              <a
                style={{ textDecoration: "underline" }}
                href="https://www.univie.ac.at/en/"
                target="_blank"
                rel="noreferrer"
              >
                <span style={linkColor}>University of Vienna</span>
              </a>
              , Vienna, Austria
            </section>
          </section>

          <section className="cv__sub__bottom">
            <section className={sectionLeftClass}>2008 – 2012</section>
            <section className={sectionRightClass}>
              <span className="cv-accent">
                Yalova Termal High School for Natural Sciences
              </span>
            </section>
          </section>
        </div>

        <div className="cv__chapter__div">
          <section className={sectionTopClass}>
            <h3>Technical Skills</h3>
          </section>

          <section className="cv__sub__bottom">
            <section className={sectionLeftClass}></section>
            <section className={sectionRightClass}>
              <ul className="cv-work">
                <li>
                  <span className="cv-accent">Backend & Core:</span> Java,
                  Spring Boot, Maven, C#, Python
                </li>
                <li>
                  <span className="cv-accent">Frontend & UI:</span> Angular,
                  React, TypeScript, npm, SASS, Bootstrap
                </li>
                <li>
                  <span className="cv-accent">Data & Testing:</span> SQL,
                  Liquibase, NoSQL, JUnit, Mockito, Jasmine, Hibernate/JPA
                </li>
                <li>
                  <span className="cv-accent">DevOps & Workflow:</span> GitLab
                  CI/CD, Bash/Batch Scripting, Linux, Docker (Basics), AWS
                  (Basics), Jira, Slack
                </li>
              </ul>
            </section>
          </section>
        </div>

        <div className="cv__chapter__div">
          <section className={sectionTopClass}>
            <h3>Languages</h3>
          </section>

          <section className="cv__sub__bottom">
            <section className={sectionLeftClass}>German</section>
            <section className={sectionRightClass}>
              <span className="cv-accent">C1</span> – Advanced proficiency,
              comfortable in business settings
            </section>
          </section>

          <section className="cv__sub__bottom">
            <section className={sectionLeftClass}>English</section>
            <section className={sectionRightClass}>
              <span className="cv-accent">C2</span> – Fluent in all professional
              and technical contexts
            </section>
          </section>

          <section className="cv__sub__bottom">
            <section className={sectionLeftClass}>Turkish</section>
            <section className={sectionRightClass}>
              <span className="cv-accent">Native</span>
            </section>
          </section>
        </div>

        <div className="cv__chapter__div">
          <section className={sectionTopClass}>
            <h3>Personal</h3>
          </section>

          <section className="cv__sub__bottom">
            <section className={sectionLeftClass}></section>
            <section className={sectionRightClass}>
              I am interested in software development, creative problem-solving,
              music, visual arts, and languages. I play piano, occasionally play
              in a hobby jazz band, and work on personal software projects in my
              free time.
            </section>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div id="resume_start" className="cv__div">
      <h1 id="cv_start">lebenslauf</h1>

      <div className="cv__chapter__div">
        <section className={sectionTopClass}>
          <h3>Berufserfahrung</h3>
        </section>

        <section className="cv__sub__bottom">
          <section className={sectionLeftClass}>06/2025 – 02/2026</section>
          <section className={sectionRightClass}>
            <span className="cv-accent">Software Developer – Praktikant</span>
            <br />
            <a
              style={{ textDecoration: "underline" }}
              href="https://www.docolution.com"
              target="_blank"
              rel="noreferrer"
            >
              <span style={linkColor}>Docolution GmbH</span>
            </a>{" "}
            Wien, Österreich
            <span style={{ display: "block", height: "10px" }}></span>
            <ul className="cv-work">
              <li>
                Entwicklung von Full-Stack-Features mit Java (Spring Boot) und
                Angular für die interne Business-Anwendung People
              </li>
              <li>
                Wartung und Erweiterung der Dokumentenanalyse-Software Aly,
                einschließlich Fehlerbehebung und Feature-Erweiterungen
              </li>
              <li>
                Entwicklung und Integration von REST APIs sowie Unterstützung
                der Frontend-Backend-Kommunikation
              </li>
              <li>
                Arbeit mit SQL und Liquibase für Datenbankdesign und
                Schema-Management
              </li>
              <li>
                Mitwirkung an CI/CD-Pipelines, automatisierten Tests und
                Deployment-Prozessen mit Bash-/Batch-Skripting
              </li>
              <li>
                Teilnahme an Debugging, Code Reviews und Production Release
                Support in einem agilen Team
              </li>
            </ul>
          </section>
        </section>

        <section className="cv__sub__bottom">
          <section className={sectionLeftClass}>2015 – 2025</section>
          <section className={sectionRightClass}>
            <span className="cv-accent">Weitere Berufserfahrung</span>
            <br />
            Wien, Österreich
            <span style={{ display: "block", height: "10px" }}></span>
            <ul className="cv-work">
              <li>
                Kundennahe operative Tätigkeiten in Gastronomie und Handel in
                Wien
              </li>
              <li>
                Entwicklung von Kommunikationsfähigkeit, Teamarbeit und
                Problemlösungskompetenz unter hohem Arbeitsdruck
              </li>
            </ul>
          </section>
        </section>
      </div>

      <div className="cv__chapter__div">
        <section className={sectionTopClass}>
          <h3>Ausbildung</h3>
        </section>

        <section className="cv__sub__bottom">
          <section className={sectionLeftClass}>03/2025 – 03/2026</section>
          <section className={sectionRightClass}>
            <span className="cv-accent">Junior Software Developer</span>
            <br />
            <a
              style={{ textDecoration: "underline" }}
              href="https://www.technikum-wien.at/"
              target="_blank"
              rel="noreferrer"
            >
              <span style={linkColor}>FH Technikum Wien</span>
            </a>
            , Wien, Österreich
            <ul className="cv-work">
              <li>
                Schwerpunkt: Full-Stack-Webentwicklung, Java, Datenbanken,
                Linux/Infrastruktur, Softwarearchitektur, agile Entwicklung und
                Software-Testing
              </li>
            </ul>
          </section>
        </section>

        <section className="cv__sub__bottom">
          <section className={sectionLeftClass}>2017 – 2023</section>
          <section className={sectionRightClass}>
            <span className="cv-accent">Psychologiestudium</span>{" "}
            Lehrveranstaltungen abgeschlossen, kein Abschluss
            <br />
            <a
              style={{ textDecoration: "underline" }}
              href="https://www.univie.ac.at/en/"
              target="_blank"
              rel="noreferrer"
            >
              <span style={linkColor}>Universität Wien</span>
            </a>
            , Wien, Österreich
          </section>
        </section>

        <section className="cv__sub__bottom">
          <section className={sectionLeftClass}>2008 – 2012</section>
          <section className={sectionRightClass}>
            <span className="cv-accent">
              Yalova Termal Gymnasium für Naturwissenschaften
            </span>
          </section>
        </section>
      </div>

      <div className="cv__chapter__div">
        <section className={sectionTopClass}>
          <h3>Technische Kenntnisse</h3>
        </section>

        <section className="cv__sub__bottom">
          <section className={sectionLeftClass}></section>
          <section className={sectionRightClass}>
            <ul className="cv-work">
              <li>
                <span className="cv-accent">Backend & Core:</span> Java, Spring
                Boot, Maven, C#, Python
              </li>
              <li>
                <span className="cv-accent">Frontend & UI:</span> Angular,
                React, TypeScript, npm, SASS, Bootstrap
              </li>
              <li>
                <span className="cv-accent">Data & Testing:</span> SQL,
                Liquibase, NoSQL, JUnit, Mockito, Jasmine, Hibernate/JPA
              </li>
              <li>
                <span className="cv-accent">DevOps & Workflow:</span> GitLab
                CI/CD, Bash/Batch Scripting, Linux, Docker (Basics), AWS
                (Basics), Jira, Slack
              </li>
            </ul>
          </section>
        </section>
      </div>

      <div className="cv__chapter__div">
        <section className={sectionTopClass}>
          <h3>Sprachkenntnisse</h3>
        </section>

        <section className="cv__sub__bottom">
          <section className={sectionLeftClass}>Deutsch</section>
          <section className={sectionRightClass}>
            <span className="cv-accent">C1</span> – Fortgeschrittene
            Sprachkenntnisse, sicher im beruflichen und geschäftlichen Umfeld
          </section>
        </section>

        <section className="cv__sub__bottom">
          <section className={sectionLeftClass}>Englisch</section>
          <section className={sectionRightClass}>
            <span className="cv-accent">C2</span> – Fließend in allen
            beruflichen und technischen Kontexten
          </section>
        </section>

        <section className="cv__sub__bottom">
          <section className={sectionLeftClass}>Türkisch</section>
          <section className={sectionRightClass}>
            <span className="cv-accent">Muttersprache</span>
          </section>
        </section>
      </div>

      <div className="cv__chapter__div">
        <section className={sectionTopClass}>
          <h3>Persönliches</h3>
        </section>

        <section className="cv__sub__bottom">
          <section className={sectionLeftClass}></section>
          <section className={sectionRightClass}>
            Ich interessiere mich für Softwareentwicklung, kreatives
            Problemlösen, Musik, bildende Kunst und Sprachen. Ich spiele
            Klavier, gelegentlich in einer Hobby-Jazzband, und arbeite in meiner
            Freizeit an eigenen Softwareprojekten.
          </section>
        </section>
      </div>
    </div>
  );
}
