import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { MediaCutting } from "@/utils/types";

interface MediaCardProps {
  cutting: MediaCutting;
}

const MediaCard: React.FC<MediaCardProps> = ({ cutting }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-orange-400 bg-transparent backdrop-blur-md p-4 transition-all duration-300 ease-in-out hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20"
        onClick={openModal}
      >
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={cutting.image_url}
            alt={cutting.paper_newspaper_name}
            className="h-auto w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-bold sm:text-2xl text-orange-500">
            {cutting.paper_newspaper_name}
          </h3>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={cutting.image_url}
                alt={cutting.paper_newspaper_name}
                className="h-auto max-h-[90vh] w-auto rounded-lg shadow-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute -top-4 -right-4 rounded-full bg-orange-500 p-2 text-white shadow-lg transition-transform hover:scale-110 hover:bg-orange-600"
                aria-label="Close image view"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MediaCard;
