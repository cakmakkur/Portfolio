import { useLanguageContext } from "../GlobalContext/LanguageContext";

export default function About() {
  const { language } = useLanguageContext();

  if (language === "EN") {
    return (
      <p className="about__text">
        I am a driven and curious full-stack developer in training with a
        passion for creating software that works flawlessly from the database to
        the user interface. I dig deep into how systems work behind the scenes
        and constantly push myself to learn, improve, and deliver real value.
        <br /> <br />
        Beginning my developer journey independently, I&apos;ve created
        web-based games, landing pages, and e-commerce sites, refining my skills
        in full-stack technologies. Currently gaining hands-on experience at a
        tech company as part of my software development apprenticeship: I work
        with modern full-stack technologies and scripting tools in a strong
        engineering culture. I adapt fast, embrace challenges, and enjoy turning
        ideas into working solutions. <br /> <br /> Beyond technology, I am a
        dedicated piano player and art enthusiast, with a love for philosophy,
        politics, and languages. My creativity, discipline, and determination
        drive me to push boundaries and keep growing.
      </p>
    );
  } else {
    return (
      <p className="about__text">
        Ich bin ein motivierter und neugieriger Full-Stack-Entwickler in
        Ausbildung mit einer Leidenschaft dafür, Software zu entwickeln, die von
        der Datenbank bis zur Benutzeroberfläche einwandfrei funktioniert. Ich
        gehe den Systemen hinter den Kulissen auf den Grund und bemühe mich
        ständig, zu lernen, mich zu verbessern und echten Mehrwert zu liefern.
        <br /> <br />
        Meine Entwicklerreise begann ich eigenständig und habe dabei webbasierte
        Spiele, Landingpages und E-Commerce-Websites erstellt und meine
        Fähigkeiten in Full-Stack-Technologien verfeinert. Derzeit sammle ich
        praktische Erfahrung in einem Technologieunternehmen im Rahmen meiner
        Ausbildung zum Softwareentwickler: Ich arbeite mit modernen
        Full-Stack-Technologien und Skript-Tools in einer starken
        Engineering-Kultur. Ich passe mich schnell an, gehe Herausforderungen
        offen an und setze Ideen gern in funktionierende Lösungen um.
        <br /> <br />
        Über die Technologie hinaus bin ich ein engagierter Klavierspieler und
        Kunstliebhaber und interessiere mich für Philosophie, Politik und
        Sprachen. Meine Kreativität, Disziplin und Entschlossenheit treiben mich
        an, Grenzen zu überschreiten und kontinuierlich zu wachsen.
      </p>
    );
  }
}
