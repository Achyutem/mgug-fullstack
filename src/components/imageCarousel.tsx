import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

export default function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [
    { src: "/university.webp", alt: "Aerial view of the university campus" },
    { src: "/yogiJi.webp", alt: "Yogi Adityanath giving a speech" },
    { src: "/studentsInALab.webp", alt: "Students in a Lab" },
    { src: "/VCGivingSpeech.webp", alt: "Vice Chancellor giving a speech" },
    { src: "/inaugration.webp", alt: "Presidential visit at MGUG" },
    { src: "/nursing.webp", alt: "Event at MGUG" },
  ];

  useEffect(() => {
    const preloadImages = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(preloadImages)
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error("Failed to preload images", err);
        setIsLoading(false);
      });
  }, [images]);

  useEffect(() => {
    if (isLoading) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, isLoading]);

  return (
    <div
      className="relative w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl h-64 sm:h-72 md:h-96 lg:h-[28rem] rounded-2xl overflow-hidden border-2 border-amber-600 bg-gray-900/30 backdrop-blur-sm shadow-2xl flex items-center justify-center" // Added flex for centering loader
      role="region"
      aria-label="Campus image carousel"
    >
      {isLoading ? (
        <div className="flex h-screen w-full flex-col items-center justify-center space-y-4">
          <RingLoader color={"#f97316"} size={100} />
          <p className="text-xl font-semibold text-orange-500">
            image is loading...
          </p>
        </div>
      ) : (
        <>
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImage ? "bg-orange-500 w-6" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </>
      )}
    </div>
  );
}
