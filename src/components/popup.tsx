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
  const [open, setOpen] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hovering, setHovering] = useState(false);

  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // --- TEXT VARIABLES (shared) ---
  const ADMISSION_LINK =
    "https://mgug.ac.in/PDF/Instruction_for_MBBS_Admission_2025_26_Shri_Gorakshnath_Medical_College_Hospital_and_Research_Center.pdf";
  const ADMISSION_TEXT = "MBBS Admission Now Live for session 2025-26";
  const NOTICE_TEXT =
    "महायोगी गोरखनाथ विश्वविद्यालय गोरखपुर में सत्र 2025-26 हेतु प्रवेश तथा प्रवेश निरस्तीकरण के उपरांत शुल्क वापसी की प्रक्रिया दिनांक 08 नवंबर 2025 को बंद की जा रही है।";

  // Optional extra info block
  const InfoContent: FC = () => (
    <div className="space-y-3 text-sm text-gray-600">
      <p className="text-base font-semibold text-slate-800">
        Note: Admission to GNM course is conducted through UPSMF counselling only. For Apply Please: 
      </p>
      <a
        href="https://abvmucet25.co.in/gnm/registration?form=6"
        className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition active:scale-95"
      >
        Register Now
      </a>
    </div>
  );

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://mgug.ac.in/api/popupApi.php");
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data: ApiImage[] = await response.json();
        setImages(data.map((item) => item.popup_image_path));
      } catch (err) {
        console.error("Failed to fetch popup images:", err);
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
    setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  const ImageSlider = ({ isMobile = false }) => (
    <>
      <div
        className="relative w-full h-full"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {images.map((src, index) => (
          <a
            key={index}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View image ${index + 1} in a new tab`}
            className={`absolute inset-0 transition-all duration-500 ease-in-out cursor-pointer ${currentSlide === index
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
        ))}
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        aria-label="Previous image"
        className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 backdrop-blur-sm text-slate-800 shadow-md hover:bg-orange-100 transition-all duration-200 active:scale-95 ${!isMobile && "left-4 p-3"
          }`}
      >
        <FaArrowLeft className={isMobile ? "h-4 w-4" : "h-5 w-5"} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        aria-label="Next image"
        className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 backdrop-blur-sm text-slate-800 shadow-md hover:bg-orange-100 transition-all duration-200 active:scale-95 ${!isMobile && "right-4 p-3"
          }`}
      >
        <FaArrowRight className={isMobile ? "h-4 w-4" : "h-5 w-5"} />
      </button>

      {/* Dots */}
      <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 ${!isMobile && "bottom-5"
          }`}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-orange-500 w-4" : "bg-gray-400/70"
              }`}
          />
        ))}
      </div>
    </>
  );

  // --- MOBILE VIEW ---
  const MobileView = () => (
    <div className="flex flex-col h-full max-h-[90vh] overflow-y-auto">
      <div className="flex flex-col px-5 pt-5 pb-3">
        <DialogHeader className="text-left space-y-2">
          <DialogTitle className="text-xl font-bold text-orange-500">
            <a
              href={ADMISSION_LINK}
              className="inline-block rounded-lg bg-orange-500 px-5 py-2 text-white hover:bg-orange-600 transition-all duration-200 active:scale-95"
            >
              {ADMISSION_TEXT}
            </a>
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-700 leading-relaxed">
            <span className="text-black bg-red-500 px-1 mr-1">सूचना:</span>
            {NOTICE_TEXT}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex gap-3 justify-end">
          <a
            href="/student-zone"
            className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition active:scale-95"
          >
            Student Zone
          </a>
          <a
            href="/register"
            className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition active:scale-95"
          >
            Register Now
          </a>
        </div>
      </div>
      <div className="relative w-full h-[75vw] max-h-[400px] bg-slate-100 flex items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center justify-center space-y-3">
            <RingLoader color={"#f97316"} size={40} />
            <p className="text-sm font-medium text-orange-500">
              Loading Images...
            </p>
          </div>
        ) : images.length > 0 ? (
          <ImageSlider isMobile />
        ) : (
          <p className="text-gray-500">No images available.</p>
        )}
      </div>
    </div>
  );

  // --- DESKTOP VIEW ---
  const DesktopView = () => (
    <div className="grid grid-cols-2 h-full max-h-[80vh] overflow-hidden">
      <div className="relative flex items-center justify-center bg-slate-100">
        {loading ? (
          <div className="flex flex-col items-center space-y-4">
            <RingLoader color={"#f97316"} size={80} />
            <p className="text-lg font-semibold text-orange-500">
              Loading Images...
            </p>
          </div>
        ) : images.length > 0 ? (
          <ImageSlider />
        ) : (
          <p className="text-gray-500">No images available.</p>
        )}
      </div>
      <div className="flex flex-col p-8 overflow-y-auto">
        <DialogHeader className="text-left space-y-4">
          <DialogTitle className="text-3xl font-bold text-orange-500">
            <a
              href={ADMISSION_LINK}
              className="inline-block rounded-lg bg-orange-500 px-6 py-3 text-white hover:bg-orange-600 transition-all duration-200 active:scale-95"
            >
              {ADMISSION_TEXT}
            </a>
          </DialogTitle>
          <DialogDescription className="text-base text-gray-700 leading-relaxed">
            <span className="text-black bg-red-500 px-1 mr-1">सूचना:</span>
            {NOTICE_TEXT}
          </DialogDescription>
        </DialogHeader>

        <div className="my-6">
          <InfoContent />
        </div>

        <div className="mt-auto pt-4 flex gap-3 justify-end">
          <a
            href="/student-zone"
            className="rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white hover:bg-orange-600 transition active:scale-95"
          >
            Student Zone
          </a>
          <a
            href="/list-of-program"
            className="rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white hover:bg-orange-600 transition active:scale-95"
          >
            Admission
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="fixed top-4 right-4 z-50 rounded-lg bg-orange-500 px-4 py-2 text-sm text-white shadow-lg hover:bg-orange-600 active:scale-95 transition-all">
          Open Info
        </button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] sm:w-[90vw] md:max-w-4xl lg:max-w-6xl max-h-[95vh] overflow-hidden rounded-xl bg-white/90 backdrop-blur-lg p-0 border border-orange-600">
        <div className="md:hidden">
          <MobileView />
        </div>
        <div className="hidden md:block">
          <DesktopView />
        </div>
        <button
          className="absolute right-3 top-3 rounded-full bg-orange-500 z-10 p-2 text-white hover:bg-orange-500 hover:scale-110 transition border-2 border-black"
          onClick={() => setOpen(false)}
          aria-label="Close dialog"
        >
          <RxCross2 className="h-4 w-4" />
        </button>
      </DialogContent>
    </Dialog>
  );
};
