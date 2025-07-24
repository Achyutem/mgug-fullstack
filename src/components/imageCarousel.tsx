import { useState, useEffect } from "react";

export default function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: "/university.webp", alt: "Aerial view of the university campus" },
    {
      src: "/yogiJi.webp",
      alt: "Yogi Adityanath giving speech",
    },
    { src: "/studentsInALab.webp", alt: "Students in a Lab" },
    { src: "/VCGivingSpeech.webp", alt: "Vice Chancellor giving speech" },
    { src: "/inaugration.webp", alt: "President visit at MGUG" },
    { src: "/nursing.webp", alt: "Event at MGUG" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl h-64 sm:h-72 md:h-96 lg:h-[28rem] rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/30 backdrop-blur-sm shadow-2xl"
      role="region"
      aria-label="Campus image carousel"
    >
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
              index === currentImage ? "bg-orange-400 w-6" : "bg-gray-600"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
