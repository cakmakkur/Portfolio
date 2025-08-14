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
        Currently gaining hands-on experience at a tech company as part of my
        software development apprenticeship, I work with modern full-stack
        technologies and scripting tools in a strong engineering culture. I
        adapt fast, embrace challenges, and enjoy turning ideas into working
        solutions. <br /> <br /> Beyond technology, I am a dedicated piano
        player and art enthusiast, with a love for philosophy, politics, and
        languages. My creativity, discipline, and determination drive me to push
        boundaries and keep growing.
      </p>
    );
  } else {
    return (
      <p className="about__text">
        Ich bin ein engagierter und neugieriger Full-Stack-Entwickler in
        Ausbildung mit einer Leidenschaft dafür, Software zu schaffen, die vom
        Datenbank-Backend bis zur Benutzeroberfläche reibungslos funktioniert.
        Ich gehe den Dingen gerne auf den Grund, analysiere, wie Systeme im
        Hintergrund arbeiten, und treibe mich ständig dazu an, zu lernen, mich
        weiterzuentwickeln und echten Mehrwert zu liefern.
        <br /> <br />
        Derzeit sammle ich im Rahmen meiner Ausbildung zum Fachinformatiker für
        Anwendungsentwicklung praktische Erfahrung in einem Tech-Unternehmen.
        Dort arbeite ich mit modernen Full-Stack-Technologien und Skript-Tools
        in einer starken Engineering-Kultur. Ich passe mich schnell an, nehme
        Herausforderungen gerne an und habe Freude daran, Ideen in
        funktionierende Lösungen zu verwandeln.
        <br /> <br />
        Abseits der Technologie bin ich leidenschaftlicher Pianist und
        Kunstliebhaber, mit einem besonderen Interesse an Philosophie, Politik
        und Sprachen. Meine Kreativität, Disziplin und Entschlossenheit treiben
        mich dazu, Grenzen zu überschreiten und mich ständig weiterzuentwickeln.
      </p>
    );
  }
}
