import { useState, useEffect, useRef } from "react";

type CarouselProps = {
  images: string[]
}

export default function CarouselAnm({images}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<undefined | number>(undefined);

  const extendedImages = [...images, images[0]]

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
        {extendedImages.map((image, i) => (<img key={i} loading="lazy" src={image} alt="" />))}
      </div>
    </div>
  );
}
