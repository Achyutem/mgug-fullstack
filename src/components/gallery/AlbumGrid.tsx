import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useColor } from "color-thief-react";
import type { AlbumCardProps } from "@/utils/types";

const AlbumCard: React.FC<AlbumCardProps> = ({
  album,
  onSelectAlbum,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { data: dominantColor, loading: colorLoading } = useColor(
    album.album_thumb_url,
    "hex",
    {
      crossOrigin: "anonymous",
      quality: 10,
    }
  );

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    x.set(event.clientX - left - width / 2);
    y.set(event.clientY - top - height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // The className from props is applied here for grid styling
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelectAlbum(album.album_id)}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-full h-full object-cover transition-transform duration-300 group cursor-pointer"
      >
        {/* The dynamic glow effect is theme-agnostic and looks great here. */}
        <div
          className="absolute inset-[-10px] rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl"
          style={{
            backgroundColor:
              !colorLoading && dominantColor ? dominantColor : "#F97316", // Fallback is theme orange
          }}
        />
        {/* CHANGED: Border color to a subtle light theme variant. */}
        <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-300/50 w-full h-full">
          <img
            src={album.album_thumb_url}
            alt={album.album_name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {/* CHANGED: Softened the text overlay gradient slightly. */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white font-semibold text-base leading-tight drop-shadow-md">
              {album.album_name}
            </h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AlbumCard;
