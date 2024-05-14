import { useState, useEffect, useRef } from "react";

import img1 from "../Assets/carousel__images/buybuy_main/demo_buybuy_1.png";
import img2 from "../Assets/carousel__images/buybuy_main/demo_buybuy_2.png";
import img3 from "../Assets/carousel__images/buybuy_main/demo_buybuy_3.png";
import img4 from "../Assets/carousel__images/buybuy_main/demo_buybuy_4.png";

export default function CarouselAnm() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(undefined);

  useEffect(() => {
    startSlide();
    return () => clearInterval(intervalRef.current);
  });

  const startSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((current) => {
        if (currentIndex === 4 && carouselRef.current) {
          carouselRef.current.style.transition = "none";
          requestAnimationFrame(() => {
            const newTranslate = 0;
            if (carouselRef.current) {
              carouselRef.current.style.transform = `translateX(${newTranslate}vw)`;
              requestAnimationFrame(() => {
                if (carouselRef.current) {
                  carouselRef.current.style.transition =
                    "transform 1s ease-out";
                }
              });
            }
          });
          return 0;
        } else {
          return current + 1;
        }
      });
    }, 4000);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const newTranslate = currentIndex * -100;
      carouselRef.current.style.transform = `translateX(${newTranslate}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="carousel__wrapper">
      <div ref={carouselRef} className="carousel__div">
        <img loading="lazy" src={img1} alt="" />
        <img loading="lazy" src={img2} alt="" />
        <img loading="lazy" src={img3} alt="" />
        <img loading="lazy" src={img4} alt="" />
        <img loading="lazy" src={img1} alt="" />
      </div>
    </div>
  );
}
