import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

import AnimatedCard from "@/components/animatedCard";
import YearSwitcher from "@/components/gallery/yearSwitcher";
import MainLayout from "@/layouts/homeLayout";
import AlbumCard from "@/components/gallery/AlbumGrid";
import CoverFlowLightbox from "@/components/gallery/imageSwitch";
import { UseLanguage } from "@/context/languageContext";
import { galleryContent } from "@/utils/moreData";
import type { Album } from "@/utils/types";

const years = [2025, 2024];

export default function GalleryPage() {
  const { language } = UseLanguage();
  const [selectedYear, setSelectedYear] = useState<number>(years[0]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://mgug.ac.in/api/albumApi.php?album_year=${selectedYear}`
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setAlbums(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Gallery fetch error:", error);
        setAlbums([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAlbums();
  }, [selectedYear]);

  return (
    <MainLayout>
      <section id="gallery" className="relative z-20 py-16 px-4 w-full">
        <AnimatedCard className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              {galleryContent.title[language]}
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            {galleryContent.subtitle[language]}
          </p>
        </AnimatedCard>

        <div className="flex justify-center mb-12">
          <YearSwitcher
            years={years}
            selectedYear={selectedYear}
            onSelectYear={setSelectedYear}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          {isLoading ? (
            <div className="flex h-64 w-full items-center justify-center">
              <Loader2 className="h-12 w-12 animate-spin text-orange-400" />
            </div>
          ) : albums.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 grid-flow-dense gap-6">
              {albums.map((album, index) => {
                let className = "";
                if (albums.length > 4) {
                  if (index % 7 === 0) className = "md:col-span-2";
                  if (index % 7 === 4) className = "md:row-span-2";
                }

                return (
                  <AlbumCard
                    key={album.album_id}
                    album={album}
                    onSelectAlbum={setSelectedAlbumId}
                    className={className}
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex h-64 w-full items-center justify-center">
              <p className="text-gray-400">
                {galleryContent.noAlbums(selectedYear)[language]}
              </p>
            </div>
          )}
        </div>
      </section>

      <CoverFlowLightbox
        albumId={selectedAlbumId}
        onClose={() => setSelectedAlbumId(null)}
      />
    </MainLayout>
  );
}
