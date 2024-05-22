import { useLanguageContext } from "../GlobalContext/LanguageContext";

export default function About() {
  const { language } = useLanguageContext();

  if (language === "EN") {
    return (
      <p className="about__text">
        I started learning web development last fall when I decided to create a
        website for my personal art exhibition. The process fascinated me, and I
        quickly developed a passion for web development. Since then, I have
        immersed myself in various web technologies, working tirelessly to
        improve my knowledge and skills through hands-on projects. I love
        crafting accessible, fast websites that are equally stylish and
        user-friendly, making user experiences smooth and enjoyable. I enjoy
        connecting this to my appreciation of digital arts and animation. <br />{" "}
        <br />
        Currently, I am seeking a developer role where I can apply my skills and
        creativity to professional projects. As a side project, I plan to evolve
        my initial exhibition site into a platform for artists to meet and
        collaborate, reflecting my ongoing commitment to blending creativity
        with technology.
      </p>
    );
  } else {
    return (
      <p className="about__text">
        Ich begann letzten Herbst mit dem Erlernen der Webentwicklung, als ich
        beschloss, eine Website für meine persönliche Kunstausstellung zu
        erstellen. Der Prozess faszinierte mich, und ich entwickelte schnell
        eine Leidenschaft für die Webentwicklung. Seitdem habe ich mich intensiv
        mit verschiedenen Webtechnologien beschäftigt und unermüdlich daran
        gearbeitet, mein Wissen und meine Fähigkeiten durch praktische Projekte
        zu verbessern. Ich liebe es, zugängliche, schnelle Websites zu
        erstellen, die gleichermaßen stilvoll und benutzerfreundlich sind, und
        die ein reibungsloses und angenehmes Benutzererlebnis bieten. Ich
        verbinde dies gerne mit meiner Wertschätzung für digitale Kunst und
        Animation. <br />
        <br />
        Derzeit suche ich eine Entwicklerstelle, in der ich meine Fähigkeiten
        und Kreativität in professionelle Projekte einbringen kann. Als
        Nebenprojekt plane ich, meine anfängliche Ausstellungs-Website zu einer
        Plattform für Künstler weiterzuentwickeln, auf der sie sich vernetzen
        und zusammenarbeiten können, was mein fortwährendes Engagement für die
        Verbindung von Kreativität und Technologie widerspiegelt.
      </p>
    );
  }
}
