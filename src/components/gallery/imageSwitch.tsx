import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { Loader2, X } from "lucide-react";
import type { CoverFlowLightboxProps, GalleryImage } from "@/utils/types";

const SWIPE_CONFIDENCE_THRESHOLD = 10000;

const CoverFlowLightbox: React.FC<CoverFlowLightboxProps> = ({
  albumId,
  onClose,
}) => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!albumId) return;
    const fetchImages = async () => {
      setIsLoading(true);
      document.body.style.overflow = "hidden";
      try {
        const response = await fetch(
          `https://mgug.ac.in/api/imageApi.php?album_id=${albumId}`
        );
        const data = await response.json();
        setImages(data.images || []);
        setCurrentIndex(0);
      } catch (error) {
        console.error("Failed to fetch album images:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [albumId]);

  const changeImage = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") changeImage(1);
      else if (e.key === "ArrowLeft") changeImage(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length, onClose]);

  const onDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
      changeImage(1);
    } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
      changeImage(-1);
    }
  };

  return (
    <AnimatePresence>
      {albumId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/90 backdrop-blur-sm p-4 pt-20 sm:p-8 md:p-12"
          onClick={onClose}
        >
          {/* Main content container. This respects the parent's padding. */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full h-full flex flex-col bg-black/30 rounded-2xl shadow-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header is now part of this container, not the viewport */}
            <div className="flex-shrink-0 z-10 flex items-center justify-between p-4 border-b border-white/10 bg-black/20 backdrop-blur-sm">
              <div className="flex-1 min-w-0 pr-4">
                <p
                  className="text-white font-semibold text-base sm:text-lg leading-snug"
                  style={{ minHeight: "1.5rem" }}
                >
                  {images[currentIndex]?.image_name || "Loading..."}
                </p>
                <p className="text-gray-400 text-sm">
                  {images.length > 0
                    ? `${currentIndex + 1} / ${images.length}`
                    : ""}
                </p>
              </div>
              {/* FIXED: Close button is now red */}
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-black/40 text-red-500 hover:bg-red-500/20 hover:text-white transition-colors flex-shrink-0"
                aria-label="Close gallery"
              >
                <X size={24} />
              </button>
            </div>

            {/* Carousel Body */}
            <div
              className="flex-grow relative w-full h-full flex items-center justify-center overflow-hidden"
              style={{ perspective: "1200px" }}
            >
              {isLoading ? (
                <Loader2 className="h-12 w-12 animate-spin text-orange-400" />
              ) : (
                <AnimatePresence initial={false}>
                  {images.map((image, index) => {
                    const offset = index - currentIndex;
                    return (
                      <motion.div
                        key={image.image_id}
                        className="absolute w-[80vw] h-full max-w-4xl"
                        style={{ transformStyle: "preserve-3d" }}
                        initial={false}
                        animate={{
                          x: `${offset * 60}%`,
                          scale: offset === 0 ? 1 : 0.7,
                          rotateY: offset * -40,
                          opacity: Math.abs(offset) > 1 ? 0 : 1,
                          zIndex: images.length - Math.abs(offset),
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 25,
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={onDragEnd}
                      >
                        <img
                          src={image.image_url}
                          alt={image.image_name}
                          className="w-full h-full object-contain rounded-lg shadow-2xl pointer-events-none"
                          style={{
                            WebkitBoxReflect:
                              "below 10px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent), to(rgba(255,255,255,0.1)))",
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoverFlowLightbox;
