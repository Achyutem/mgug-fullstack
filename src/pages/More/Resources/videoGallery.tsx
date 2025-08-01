import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import AnimatedCard from "@/components/animatedCard";
import MainLayout from "@/layouts/homeLayout";
import VideoCard from "@/components/gallery/videoCard";
import { UseLanguage } from "@/context/languageContext";
import { videoGalleryContent } from "@/utils/moreData";
import type { Video } from "@/utils/types";

export default function VideoGalleryPage() {
  const { language } = UseLanguage();
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://mgug.ac.in/api/videoApi.php");
        if (!response.ok) throw new Error("Failed to fetch video data");
        const data = await response.json();
        setVideos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Video Gallery fetch error:", error);
        setVideos([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <MainLayout>
      <section id="video-gallery" className="relative z-20 py-16 px-4 w-full">
        <AnimatedCard className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              {videoGalleryContent.title[language]}
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            {videoGalleryContent.subtitle[language]}
          </p>
        </AnimatedCard>

        <div className="max-w-7xl mx-auto px-4">
          {isLoading ? (
            <div className="flex h-64 w-full items-center justify-center">
              <Loader2 className="h-12 w-12 animate-spin text-orange-400" />
            </div>
          ) : videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <VideoCard key={index} video={video} />
              ))}
            </div>
          ) : (
            <div className="flex h-64 w-full items-center justify-center">
              <p className="text-gray-400">
                {videoGalleryContent.noVideos[language]}
              </p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
