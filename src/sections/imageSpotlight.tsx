import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { UseLanguage } from "@/context/languageContext";

interface ImageData {
  id: number;
  src: string;
  title: string;
}

const imageData: ImageData[] = [
  { id: 1, src: "/spotlight/president&cm.webp", title: "president with cm" },
  {
    id: 2,
    src: "/spotlight/president&gov.webp",
    title: "president with governor",
  },
  {
    id: 3,
    src: "/spotlight/presidentVisit.webp",
    title: "president visit at mgug",
  },
  {
    id: 4,
    src: "/spotlight/vc&gov.webp",
    title: "vice chancellor at mgug and governor",
  },
  { id: 5, src: "/spotlight/president.webp", title: "president at MGUG" },
  { id: 6, src: "/spotlight/cm.webp", title: "Chief Minister at MGUG" },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

export default function SectionCarousel() {
  const { language } = UseLanguage();
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const imageIndex =
    ((page % imageData.length) + imageData.length) % imageData.length;

  const title = {
    english: "Spotlight",
    hindi: "मुख्य झलकियाँ",
  }[language];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (isHovered) return;
    const intervalId = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered, page]);

  return (
    <section className="w-full bg-transparent py-8 px-1 md:px-4">
      <div className="mx-auto max-w-8xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-orange-500 md:text-5xl">
          {title}
        </h2>

        <div
          className="group relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border-3 border-orange-500 shadow-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={imageData[imageIndex].src}
              alt={imageData[imageIndex].title}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              className="absolute h-full w-full cursor-grab object-cover active:cursor-grabbing"
            />
          </AnimatePresence>

          {/* Controls */}
          <div
            className="absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-3 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={() => paginate(-1)}
          >
            <FaChevronLeft className="h-5 w-5 text-orange-500" />
          </div>
          <div
            className="absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-3 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={() => paginate(1)}
          >
            <FaChevronRight className="h-5 w-5 text-orange-500" />
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center space-x-2">
            {imageData.map((_, i) => (
              <button
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === imageIndex ? "w-6 bg-orange-500" : "w-2 bg-white/50"
                }`}
                onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
