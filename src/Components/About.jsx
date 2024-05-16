import { useLanguageContext } from "../GlobalContext/LanguageContext";

export default function About() {
  const { language } = useLanguageContext();

  return (
    <p className="about__text">
      {language === "EN"
        ? "This is currently a dummy text in English. Here will be information about my person. Some stuff that I did, some reasons why I did them! So prepare for a long story... Just kidding! It will be a short story. So short that it will not even feel like it has already begun. Now I copy all of this semi-random words and paste them to make the text larger without having to think about some more nonsense to type. This is currently a dummy text in English. Here will be information about my person. Some stuff that I did, some reasons why I did them! So prepare for a long story... Just kidding! It will be a short store. So short that it will not even feel like it has already begun. Now I copy all of this semi-random words and paste them to make the text larger without having to think about some more nonsense to type."
        : "Das ist im Moment ein Blindtext auf Deutsch. Da wird Informationen über mich angezeigt. Über Sachen die ich getan habe und über jene Gründe, warum ich diese getan habe. Also bereite dich auf eine lange Geschichte... Scherz! Es wird eine kurze sein. So kurz, dass man nicht mal Gefühl haben wird, dass es begonnen hätte. Nun werde ich all diese Halb-Zufallswörte kopieren und sie nochmal hinzufügen um den Text länger erscheinen zu lassen ohne mir weiteren Unsinn ausdenken zu müssen. Das ist im Moment ein Blindtext auf Deutsch. Da wird Informationen über mich angezeigt. Über Sachen die ich getan habe und über jene Gründe, warum ich diese getan habe. Also bereite dich auf eine lange Geschichte... Scherz! Es wird eine kurze sein. So kurz, dass man nicht mal Gefühl haben wird, dass es begonnen hätte. Nun werde ich all diese Halb-Zufallswörte kopieren und sie nochmal hinzufügen um den Text länger erscheinen zu lassen ohne mir weiteren Unsinn ausdenken zu müssen."}
    </p>
  );
}
