import { useState, useEffect, useCallback } from "react";
import { Loader2 } from "lucide-react";
import AnimatedCard from "@/components/animatedCard";
import MainLayout from "@/layouts/homeLayout";
import VideoCard from "@/components/gallery/videoCard";
import { Pagination } from "@/components/pagination";
import { UseLanguage } from "@/context/languageContext";
import { videoGalleryContent } from "@/utils/moreData";
import type { Video } from "@/utils/types";

export default function VideoGalleryPage() {
  const { language } = UseLanguage();
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 6;

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

  const currentVideos = videos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <MainLayout>
      <section id="video-gallery" className="relative z-20 py-16 px-4 w-full">
        <AnimatedCard className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            <span className="bg-orange-500 bg-clip-text text-transparent">
              {videoGalleryContent.title[language]}
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            {videoGalleryContent.subtitle[language]}
          </p>
        </AnimatedCard>

        <div className="max-w-7xl mx-auto px-4">
          {isLoading ? (
            <div className="flex h-64 w-full items-center justify-center">
              <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
            </div>
          ) : videos.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentVideos.map((video, index) => (
                  <VideoCard key={index} video={video} />
                ))}
              </div>

              <div className="mt-12">
                <Pagination
                  currentPage={currentPage}
                  totalItems={videos.length}
                  itemsPerPage={ITEMS_PER_PAGE}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          ) : (
            <div className="flex h-64 w-full items-center justify-center">
              <p className="text-gray-600">
                {videoGalleryContent.noVideos[language]}
              </p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
