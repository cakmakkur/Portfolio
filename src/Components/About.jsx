import { useLanguageContext } from "../GlobalContext/LanguageContext";

export default function About() {
  const { language } = useLanguageContext();

  if (language === "EN") {
    return (
      <p className="about__text">
        <span className="about-hello">Hello</span>
        <br />I am a Vienna-based full-stack software developer with a strong
        focus on <strong>Java</strong>, <strong>Spring Boot</strong>,{" "}
        <strong>REST APIs</strong>, <strong>SQL databases</strong>, and modern
        frontend technologies such as <strong>Angular</strong>,{" "}
        <strong>React</strong>, and <strong>TypeScript</strong>. I enjoy
        building reliable software across the full stack, from backend logic and
        database integration to clean, usable interfaces.
        <br /> <br />
        Through my software development apprenticeship and internship at
        Docolution GmbH, I gained hands-on experience working on enterprise
        business applications, <strong>CI/CD</strong> pipelines, automated
        testing, debugging, code reviews, and production release support in an
        agile team environment. I am especially interested in backend-oriented
        full-stack roles where I can continue developing my skills in{" "}
        <strong>Java/Spring</strong>, databases, cloud technologies, and
        scalable application architecture.
        <br /> <br />
        I am based in Vienna, Austria, with full unrestricted access to the
        Austrian labour market and EU long-term residence status. I am open to
        full-stack and backend-focused software developer positions in Austria,
        as well as hybrid or EU-remote opportunities.
        <br /> <br />
        Beyond technology, I play piano, enjoy visual arts and languages, and
        often bring the same curiosity and discipline into my technical work.
      </p>
    );
  } else {
    return (
      <p className="about__text">
        <span className="about-hello">Hallo</span>
        <br />
        Ich bin ein in Wien ansässiger Full-Stack Software Developer mit starkem
        Fokus auf <strong>Java</strong>, <strong>Spring Boot</strong>,{" "}
        <strong>REST APIs</strong>, <strong>SQL-Datenbanken</strong> und moderne
        Frontend-Technologien wie <strong>Angular</strong>,{" "}
        <strong>React</strong> und <strong>TypeScript</strong>. Mich
        interessiert die Entwicklung zuverlässiger Software über den gesamten
        Stack hinweg – von Backend-Logik und Datenbankintegration bis hin zu
        sauberen, benutzerfreundlichen Oberflächen.
        <br /> <br />
        Im Rahmen meiner Ausbildung zum Software Developer und meines Praktikums
        bei der Docolution GmbH konnte ich praktische Erfahrung mit
        Enterprise-Business-Anwendungen, <strong>CI/CD</strong>-Pipelines,
        automatisierten Tests, Debugging, Code Reviews und Production Release
        Support in einem agilen Team sammeln. Besonders interessieren mich
        backend-orientierte Full-Stack-Rollen, in denen ich meine Kenntnisse in{" "}
        <strong>Java/Spring</strong>, Datenbanken, Cloud-Technologien und
        skalierbarer Anwendungsarchitektur weiterentwickeln kann.
        <br /> <br />
        Ich bin in Wien, Österreich, ansässig und verfüge über uneingeschränkten
        Zugang zum österreichischen Arbeitsmarkt sowie den Status
        Daueraufenthalt-EU. Ich bin offen für Full-Stack- und
        backend-fokussierte Softwareentwickler-Positionen in Österreich sowie
        für hybride oder EU-remote Möglichkeiten.
        <br /> <br />
        Über die Technologie hinaus spiele ich Klavier, interessiere mich für
        bildende Kunst und Sprachen und bringe dieselbe Neugier und Disziplin
        auch in meine technische Arbeit ein.
      </p>
    );
  }
}
