import GifCard from "../Components/GifCard";
import { useLanguageContext } from "../GlobalContext/LanguageContext";
import { useThemeContext } from "../GlobalContext/ThemeContext";

export default function UICatalog() {
  const { language } = useLanguageContext();

  return (
    <div className="ui-catalog-main">
      {language === "EN" ? (
        <div className="ui-catalogue-title">
          <h1>
            Discover My <span className="animated-text">UI</span> Design
          </h1>
          <h2>Hover over the cards to animate</h2>
        </div>
      ) : (
        <div>
          <h1>Entdecken</h1>
        </div>
      )}
      <GifCard
        key="ui-catalog-card-3"
        src="/ui/3.mp4"
        css="ui-catalog-card-3"
      />
      <GifCard
        key="ui-catalog-card-1"
        src="/ui/1.mp4"
        css="ui-catalog-card-1"
      />
      <GifCard
        key="ui-catalog-card-2"
        src="/ui/2.mp4"
        css="ui-catalog-card-2"
      />

      <GifCard
        key="ui-catalog-card-4"
        src="/ui/4.mp4"
        css="ui-catalog-card-4"
      />

      <GifCard
        key="ui-catalog-card-16"
        src="/ui/16.mp4"
        css="ui-catalog-card-16"
      />
      <GifCard
        key="ui-catalog-card-17"
        src="/ui/17.mp4"
        css="ui-catalog-card-17"
      />
      <GifCard
        key="ui-catalog-card-18"
        src="/ui/18.mp4"
        css="ui-catalog-card-18"
      />

      <GifCard
        key="ui-catalog-card-5"
        src="/ui/5.mp4"
        css="ui-catalog-card-5"
      />
      <GifCard
        key="ui-catalog-card-6"
        src="/ui/6.mp4"
        css="ui-catalog-card-6"
      />
      <GifCard
        key="ui-catalog-card-9"
        src="/ui/9.mp4"
        css="ui-catalog-card-9"
      />
      <GifCard
        key="ui-catalog-card-14"
        src="/ui/14.mp4"
        css="ui-catalog-card-14"
      />
      <GifCard
        key="ui-catalog-card-7"
        src="/ui/7.mp4"
        css="ui-catalog-card-7"
      />
      <GifCard
        key="ui-catalog-card-8"
        src="/ui/8.mp4"
        css="ui-catalog-card-8"
      />

      <GifCard
        key="ui-catalog-card-10"
        src="/ui/10.mp4"
        css="ui-catalog-card-10"
      />
      <GifCard
        key="ui-catalog-card-11"
        src="/ui/11.mp4"
        css="ui-catalog-card-11"
      />
      <GifCard
        key="ui-catalog-card-12"
        src="/ui/12.mp4"
        css="ui-catalog-card-12"
      />
      <GifCard
        key="ui-catalog-card-13"
        src="/ui/13.mp4"
        css="ui-catalog-card-13"
      />

      <GifCard
        key="ui-catalog-card-15"
        src="/ui/15.mp4"
        css="ui-catalog-card-15"
      />
      <img src="/ui/19.png" className="ui-catalog-card-19" alt="" />
      <img src="/ui/20.png" className="ui-catalog-card-20" alt="" />
    </div>
  );
}
