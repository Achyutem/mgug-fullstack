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
import { RingLoader } from "react-spinners";

type ApiImage = {
  popup_image_path: string;
};

export const InfoPopup: FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [hovering, setHovering] = useState<boolean>(false);

  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://mgug.ac.in/api/popupApi.php");
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data: ApiImage[] = await response.json();
        const imageUrls = data.map((item) => item.popup_image_path);
        setImages(imageUrls);
      } catch (error) {
        console.error("Failed to fetch popup images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (!open || hovering || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [open, hovering, images.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () =>
    images.length > 0 && setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    images.length > 0 &&
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  const InfoContent: FC = () => (
    <div className="space-y-3 text-sm text-gray-600">
      <p className="text-base font-semibold text-slate-800">
        🏫 Tour our facilities and housing
      </p>
      <p>📅 August 12, 2025 • 🕘 10:00 AM – 4:00 PM</p>
      <p>📍 Main Campus, Balapar, Gorakhpur</p>
      <p className="text-base font-semibold text-slate-800">🌟 Why Visit Us?</p>
    </div>
  );

  const ImageSlider = ({ isMobile = false }) => (
    <>
      <div
        className="relative w-full h-full"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {images.map((src, index) => (
          // --- CHANGE START ---
          // The div is now an anchor (<a>) tag to make the image clickable
          <a
            key={index}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View image ${index + 1} in a new tab`}
            className={`absolute inset-0 transition-all duration-500 ease-in-out cursor-pointer ${
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
          </a>
          // --- CHANGE END ---
        ))}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        aria-label="Previous image"
        className={
          isMobile
            ? "absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-transparent backdrop-blur-sm text-slate-800 border border-white/20 hover:bg-white/80 transition-all duration-200 active:scale-95"
            : "absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-transparent backdrop-blur-sm text-slate-800 border border-white/20 hover:bg-orange-500/10 hover:border-orange-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
        }
      >
        <FaArrowLeft className={isMobile ? "h-4 w-4" : "h-5 w-5"} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        aria-label="Next image"
        className={
          isMobile
            ? "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-transparent backdrop-blur-sm text-slate-800 border border-white/20 hover:bg-white/80 transition-all duration-200 active:scale-95"
            : "absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-transparent backdrop-blur-sm text-slate-800 border border-white/20 hover:bg-orange-500/10 hover:border-orange-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
        }
      >
        <FaArrowRight className={isMobile ? "h-4 w-4" : "h-5 w-5"} />
      </button>
      <div
        className={
          isMobile
            ? "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5"
            : "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
        }
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={
              isMobile
                ? `h-2 w-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-orange-500 w-4"
                      : "bg-gray-400/70"
                  }`
                : `h-3 w-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    currentSlide === index
                      ? "bg-orange-500 w-6"
                      : "bg-gray-400/70 hover:bg-gray-500/80"
                  }`
            }
          />
        ))}
      </div>
    </>
  );

  const MobileView = () => (
    <div className="flex flex-col h-full max-h-[90vh] overflow-y-auto scrollbar-hide">
      <div className="flex flex-col p-4 flex-1">
        <DialogHeader className="text-left">
          <DialogTitle className="text-xl font-bold text-orange-500 tracking-tight">
            <a
              href="https://mgug.ac.in/PDF/Instruction_for_MBBS_Admission_2025_26_Shri_Gorakshnath_Medical_College_Hospital_and_Research_Center.pdf"
              className="rounded-lg bg-orange-500 px-6 py-3 text-base lg:text-lg font-semibold text-white transition-all duration-200 hover:bg-orange-600 hover:scale-105 active:scale-95 shadow-lg"
            >
              MBBS Admission session 2025-26
            </a>
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm text-gray-600">
            <span className="text-black bg-red-500">सूचना:</span> महायोगी
            गोरखनाथ विश्वविद्यालय गोरखपुर में पीएचडी पाठ्यक्रम में प्रवेश के लिए
            प्रवेश परीक्षा 19 अगस्त 2025 को आयोजित की जाएगी।
          </DialogDescription>
        </DialogHeader>
        {/* <div className="my-4">
          <InfoContent />
        </div> */}
        <div className="mt-4 pt-4 gap-2 flex justify-end">
          <a
            href="/student-zone"
            className="rounded-lg bg-orange-500 px-6 py-3 text-base lg:text-lg font-semibold text-white transition-all duration-200 hover:bg-orange-600 hover:scale-105 active:scale-95 shadow-lg"
          >
            Student Zone
          </a>
          <a
            href="/register"
            className="rounded-md flex items-center bg-orange-500 px-4 py-2 text-base font-semibold text-white transition-colors duration-200 hover:bg-orange-600 active:scale-95"
          >
            Register Now
          </a>
        </div>
      </div>
      <div className="relative w-full h-[80vw] sm:h-[60vw] max-h-[500px] flex-shrink-0 overflow-hidden bg-slate-100/70 flex items-center justify-center">
        {loading ? (
          <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
            <RingLoader color={"#f97316"} size={50} />
            <p className="text-lg font-semibold text-orange-500">
              Loading Images...
            </p>
          </div>
        ) : images.length > 0 ? (
          <ImageSlider isMobile={true} />
        ) : (
          <p className="text-gray-500">No images available.</p>
        )}
      </div>
    </div>
  );

  const DesktopView = () => (
    <div className="grid grid-cols-2 h-full max-h-[80vh] overflow-hidden">
      <div className="relative flex items-center justify-center overflow-hidden bg-slate-100/70">
        {loading ? (
          <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
            <RingLoader color={"#f97316"} size={100} />
            <p className="text-xl font-semibold text-orange-500">
              Loading Images...
            </p>
          </div>
        ) : images.length > 0 ? (
          <ImageSlider isMobile={false} />
        ) : (
          <p className="text-gray-500">No images available.</p>
        )}
      </div>
      <div className="flex flex-col p-6 lg:p-8 overflow-y-auto">
        <DialogHeader className="text-left">
          <DialogTitle className="text-3xl lg:text-4xl font-bold text-orange-500 tracking-tight">
            <a
              href="https://mgug.ac.in/PDF/Instruction_for_MBBS_Admission_2025_26_Shri_Gorakshnath_Medical_College_Hospital_and_Research_Center.pdf"
              className="rounded-lg bg-orange-500 px-6 py-3 text-base lg:text-lg font-semibold text-white transition-all duration-200 hover:bg-orange-600 hover:scale-105 active:scale-95 shadow-lg"
            >
              MBBS Admission Now Live for session 2025-26
            </a>
          </DialogTitle>
          <DialogDescription className="mt-3 text-base lg:text-lg text-gray-600 leading-relaxed">
            <span className="text-black bg-red-500">सूचना:</span> महायोगी
            गोरखनाथ विश्वविद्यालय गोरखपुर में पीएचडी पाठ्यक्रम में प्रवेश के लिए
            प्रवेश परीक्षा 19 अगस्त 2025 को आयोजित की जाएगी।
          </DialogDescription>
        </DialogHeader>
        <div className="my-6 lg:my-8">
          <InfoContent />
        </div>
        <div className="mt-auto pt-6 gap-2 flex justify-end">
          <a
            href="/student-zone"
            className="rounded-lg bg-orange-500 px-6 py-3 text-base lg:text-lg font-semibold text-white transition-all duration-200 hover:bg-orange-600 hover:scale-105 active:scale-95 shadow-lg"
          >
            Student Zone
          </a>
          <a
            href="/list-of-program"
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
        <button className="fixed top-4 right-4 z-50 rounded-lg bg-orange-500 px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-2 text-white shadow-lg hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200">
          Open Info
        </button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[95vw] sm:w-[90vw] sm:max-w-[90vw] md:max-w-4xl lg:max-w-6xl max-h-[95vh] overflow-hidden rounded-xl bg-white/90 backdrop-blur-lg p-0 text-slate-800 shadow-2xl border border-orange-600">
        <div className="md:hidden">
          <MobileView />
        </div>
        <div className="hidden md:block h-full">
          <DesktopView />
        </div>
        <button
          className="absolute right-3 top-3 z-20 rounded-full bg-orange-500/80 p-2 text-white transition-all duration-200 hover:bg-orange-500 hover:scale-110 active:scale-95 shadow-lg"
          onClick={() => setOpen(false)}
          aria-label="Close dialog"
        >
          <RxCross2 className="h-4 w-4" />
        </button>
      </DialogContent>
    </Dialog>
  );
};
