import { useEffect, useRef } from "react";
import GifCard from "../Components/GifCard";
import { useLanguageContext } from "../GlobalContext/LanguageContext";
import { useThemeContext } from "../GlobalContext/ThemeContext";

export default function UICatalog() {
  const { language } = useLanguageContext();
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div className="ui-catalog-main">
      {language === "EN" ? (
        <div className="ui-catalogue-title">
          <div
            style={{
              zIndex: "10",
              opacity: "0.09",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "250px",
              backgroundImage: "url(/bck.png)",
              backgroundSize: "contain",
              backgroundRepeat: "repeat",
              boxShadow: "0px 2px 15px 2px rgba(0, 0, 0, 0.5",
              padding: "20vh 0px",
              borderRadius: "10px",
            }}
          ></div>
          <h1>
            Discover My{" "}
            <span className="animated-text" style={{ fontWeight: "bold" }}>
              UI
            </span>{" "}
            Design
          </h1>
          <h3>Hover over the cards to animate</h3>
        </div>
      ) : (
        <div className="ui-catalogue-title">
          <div
            style={{
              zIndex: "10",
              opacity: "0.09",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "250px",
              backgroundImage: "url(/bck.png)",
              backgroundSize: "contain",
              backgroundRepeat: "repeat",
              boxShadow: "0px 2px 15px 2px rgba(0, 0, 0, 0.5",
              padding: "20vh 0px",
              borderRadius: "10px",
            }}
          ></div>
          <h1>
            Entdecke mein{" "}
            <span className="animated-text" style={{ fontWeight: "bold" }}>
              UI
            </span>{" "}
            Design
          </h1>
          <h3>Fahre mit der Maus über die Karten, um sie zu animieren</h3>
        </div>
      )}
      <div className="catalogue-styler"></div>
      <div className="catalogue-styler-2"></div>
      <div className="catalogue-styler-3"></div>

      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-3"
          src="/ui/3.mp4"
          css="ui-catalog-card-3"
        />
      </div>

      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-1"
          src="/ui/1.mp4"
          css="ui-catalog-card-1"
        />
      </div>
      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-2"
          src="/ui/2.mp4"
          css="ui-catalog-card-2"
        />
      </div>

      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-4"
          src="/ui/4.mp4"
          css="ui-catalog-card-4"
        />
      </div>

      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-16"
          src="/ui/16.mp4"
          css="ui-catalog-card-16"
        />
      </div>

      <div ref={addToRefs} className="card-wrapper">
        <div>
          <img src="/ui/loadingGif.gif" className="ui-catalog-card-24" alt="" />
          <span
            style={{
              display: "block",
              width: "200px",
              textAlign: "center",
              fontWeight: "600",
              color: "var(--primary)",
            }}
          >
            Loading...
          </span>
        </div>
      </div>

      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-17"
          src="/ui/17.mp4"
          css="ui-catalog-card-17"
        />
      </div>
      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-18"
          src="/ui/18.mp4"
          css="ui-catalog-card-18"
        />
      </div>

      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-5"
          src="/ui/5.mp4"
          css="ui-catalog-card-5"
        />
      </div>
      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-6"
          src="/ui/6.mp4"
          css="ui-catalog-card-6"
        />
      </div>
      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-9"
          src="/ui/9.mp4"
          css="ui-catalog-card-9"
        />
      </div>
      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-14"
          src="/ui/14.mp4"
          css="ui-catalog-card-14"
        />
      </div>
      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-7"
          src="/ui/7.mp4"
          css="ui-catalog-card-7"
        />
      </div>
      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-8"
          src="/ui/8.mp4"
          css="ui-catalog-card-8"
        />
      </div>

      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-10"
          src="/ui/10.mp4"
          css="ui-catalog-card-10"
        />
      </div>
      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-11"
          src="/ui/11.mp4"
          css="ui-catalog-card-11"
        />
      </div>
      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-12"
          src="/ui/12.mp4"
          css="ui-catalog-card-12"
        />
      </div>
      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-23"
          src="/ui/23.mp4"
          css="ui-catalog-card-23"
        />
      </div>
      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-22"
          src="/ui/22.mp4"
          css="ui-catalog-card-22"
        />
      </div>
      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-21"
          src="/ui/21.mp4"
          css="ui-catalog-card-21"
        />
      </div>
      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-13"
          src="/ui/13.mp4"
          css="ui-catalog-card-13"
        />
      </div>

      <div ref={addToRefs} className="card-wrapper">
        <GifCard
          key="ui-catalog-card-15"
          src="/ui/15.mp4"
          css="ui-catalog-card-15"
        />
      </div>
      <div ref={addToRefs} className="card-wrapper">
        <img src="/ui/19.png" className="ui-catalog-card-19" alt="" />
      </div>
      <div ref={addToRefs} className="card-wrapper">
        <img src="/ui/20.png" className="ui-catalog-card-20" alt="" />
      </div>
    </div>
  );
}
