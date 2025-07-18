import type { FC } from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export const InfoPopup: FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [hovering, setHovering] = useState<boolean>(false);

  const images: string[] = [
    "/uploads/commerce.jpg",
    "/uploads/jobs.jpg",
    "/uploads/anesthesia.jpg",
  ];

  useEffect(() => {
    if (!open || hovering) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [open, hovering, images.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  const InfoContent: FC = () => (
    <div className="space-y-3 text-sm text-gray-200">
      <p className="text-base font-semibold text-gray-100">
        🏫 Tour our facilities and housing
      </p>
      <p>📅 July 12, 2025 • 🕘 10:00 AM – 4:00 PM</p>
      <p>📍 Main Campus, 123 University Ave</p>
      <p className="text-base font-semibold text-gray-100">🌟 Why Visit Us?</p>
    </div>
  );

  const MobileView = () => (
    <div className="flex flex-col h-full max-h-[90vh] overflow-y-auto scrollbar-hide">
      <div className="flex flex-col p-4 flex-1">
        <DialogHeader className="text-left">
          <DialogTitle className="text-xl font-bold text-orange-400 tracking-tight">
            🎓 Explore University Life
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm text-gray-300">
            Discover our vibrant campus through visuals and events.
          </DialogDescription>
        </DialogHeader>
        <div className="my-4">
          <InfoContent />
        </div>
        <div className="mt-4 pt-4 flex justify-end">
          <a
            href="/register"
            className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-orange-600 active:scale-95"
          >
            Register Now
          </a>
        </div>
      </div>
      <div className="relative w-full h-[80vw] sm:h-[60vw] max-h-[500px] flex-shrink-0 overflow-hidden">
        <div
          className="relative w-full h-full"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                currentSlide === index
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <img
                src={src}
                alt={`University photo ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/90 hover:bg-black/70 transition-all duration-200 active:scale-95"
          aria-label="Previous image"
        >
          <FaArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/90 hover:bg-black/70 transition-all duration-200 active:scale-95"
          aria-label="Next image"
        >
          <FaArrowRight className="h-4 w-4" />
        </button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-orange-500 w-4" : "bg-white/60"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const DesktopView = () => (
    <div className="grid grid-cols-2 h-full max-h-[80vh] overflow-hidden">
      <div className="relative flex items-center justify-center overflow-hidden">
        <div
          className="relative w-full h-full"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                currentSlide === index
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <img
                src={src}
                alt={`University photo ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white/90 hover:bg-orange-500/80 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          aria-label="Previous image"
        >
          <FaArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white/90 hover:bg-orange-500/80 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          aria-label="Next image"
        >
          <FaArrowRight className="h-5 w-5" />
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 hover:scale-110 ${
                currentSlide === index
                  ? "bg-orange-500 w-6"
                  : "bg-white/60 hover:bg-white/80"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col p-6 lg:p-8 overflow-y-auto">
        <DialogHeader className="text-left">
          <DialogTitle className="text-3xl lg:text-4xl font-bold text-orange-400 tracking-tight">
            🎓 Explore University Life
          </DialogTitle>
          <DialogDescription className="mt-3 text-base lg:text-lg text-gray-300 leading-relaxed">
            Discover our vibrant campus through stunning visuals and upcoming
            events.
          </DialogDescription>
        </DialogHeader>
        <div className="my-6 lg:my-8">
          <InfoContent />
        </div>
        <div className="mt-auto pt-6 flex justify-end">
          <a
            href="https://mgug.ac.in/academics/programmes_list.php"
            className="rounded-lg bg-orange-500 px-6 py-3 text-base lg:text-lg font-semibold text-white transition-all duration-200 hover:bg-orange-600 hover:scale-105 active:scale-95 shadow-lg"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="fixed top-4 right-4 z-50 rounded-lg bg-blue-600 px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-2 text-white shadow-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200">
          Open Info
        </button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[95vw] sm:w-[90vw] sm:max-w-[90vw] md:max-w-4xl lg:max-w-6xl max-h-[95vh] overflow-hidden rounded-xl bg-gray-900 p-0 text-white shadow-2xl border border-gray-700">
        <div className="md:hidden">
          <MobileView />
        </div>
        <div className="hidden md:block h-full">
          <DesktopView />
        </div>
        <button
          className="absolute right-3 top-3 z-20 rounded-full bg-red-600 p-2 text-white transition-all duration-200 hover:bg-red-700 hover:scale-110 active:scale-95 shadow-lg"
          onClick={() => setOpen(false)}
          aria-label="Close dialog"
        >
          <RxCross2 className="h-4 w-4" />
        </button>
      </DialogContent>
    </Dialog>
  );
};
