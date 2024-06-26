import { useState, useEffect, useRef } from "react";
import ClipLoader from "react-spinners/ClipLoader";

type CarouselProps = {
  images: string[];
};

export default function CarouselAnm({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<undefined | number>(undefined);
  const [allImagesLoaded, setAllImagesLoaded] = useState<boolean>(false);

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
    if (imageLoaded.includes(false)) return;
    setAllImagesLoaded(true);
  }, [imageLoaded]);

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
    startSlide();
    return () => clearInterval(intervalRef.current);
  });

  useEffect(() => {
    if (carouselRef.current) {
      const newTranslate = currentIndex * -100;
      carouselRef.current.style.transform = `translateX(${newTranslate}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="carousel__wrapper">
      {allImagesLoaded ? (
        ""
      ) : (
        <div className="cliploader__div">
          <ClipLoader
            loading={true}
            color={"rgb(255, 122, 19)"}
            size={55}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div ref={carouselRef} className="carousel__div">
        {extendedImages.map((image, i) => (
          <img
            style={{ opacity: allImagesLoaded ? "1" : "0" }}
            key={i}
            src={image}
            alt=""
            onLoad={() => handleImageLoad(i)}
          />
        ))}
      </div>
    </div>
  );
}
