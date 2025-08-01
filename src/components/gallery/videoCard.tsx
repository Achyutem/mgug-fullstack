import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Video } from "@/utils/types";
import { UseLanguage } from "@/context/languageContext";
import { videoGalleryContent } from "@/utils/moreData";

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = UseLanguage();

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const cleanDescription = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const description = cleanDescription(video.video_description);
  const isLongDescription = description.length > 150;

  return (
    <div className="relative w-full bg-slate-800/50 border border-slate-700 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-orange-500/20 hover:border-orange-500/50">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={video.video_share_code}
          title={video.video_title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
          {video.video_title}
        </h3>

        <AnimatePresence initial={false}>
          <motion.div
            key="content"
            initial="collapsed"
            animate={isExpanded ? "open" : "collapsed"}
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: {
                opacity: 1,
                height: isLongDescription ? "60px" : "auto",
              },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="relative overflow-hidden"
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>
          </motion.div>
        </AnimatePresence>

        {isLongDescription && (
          <button
            onClick={toggleExpanded}
            className="text-orange-400 font-semibold text-sm mt-3 hover:text-orange-300 transition-colors"
          >
            {isExpanded
              ? videoGalleryContent.readLess[language]
              : videoGalleryContent.readMore[language]}
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
