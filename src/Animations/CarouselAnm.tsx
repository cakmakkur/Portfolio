import { useState, useEffect, useRef } from "react";
import ClipLoader from "react-spinners/ClipLoader";

type CarouselProps = {
  images: string[];
};

export default function CarouselAnm({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<undefined | number>(undefined);

  const [imageLoaded, setImageLoaded] = useState<boolean[]>(
    Array(images.length).fill(false)
  );

  const extendedImages = [...images, images[0]];

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

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
        {extendedImages.map((image, i) => (
          <img
            style={{
              backgroundImage: imageLoaded[i]
                ? "none"
                : "url('../Assets/main-o.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            src={image}
            alt=""
            onLoad={() => handleImageLoad(i)}
          />
        ))}
      </div>
    </div>
  );
}
