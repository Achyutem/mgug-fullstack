import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import AnimatedCard from "@/components/animatedCard";
import MainLayout from "@/layouts/homeLayout";
import MediaCard from "@/components/gallery/mediaCard";
import { UseLanguage } from "@/context/languageContext";
import { mediaCoverageContent } from "@/utils/moreData";
import type { MediaCutting } from "@/utils/types";
import { Pagination } from "@/components/pagination";

const ITEMS_PER_PAGE = 10;

export default function MediaCoveragePage() {
  const { language } = UseLanguage();

  const [cuttings, setCuttings] = useState<MediaCutting[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMediaCuttings = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://mgug.ac.in/api/mediaCoverageApi.php"
        );

        if (!response.ok) throw new Error("Failed to fetch media data");

        const data = await response.json();

        setCuttings(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Media Coverage fetch error:", error);

        setCuttings([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMediaCuttings();
  }, []);

  const displayedCuttings = cuttings.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,

    currentPage * ITEMS_PER_PAGE
  );

  return (
    <MainLayout>
      <section id="media-coverage" className="relative z-20 py-16 px-4 w-full">
        <AnimatedCard className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              {mediaCoverageContent.title[language]}
            </span>
          </h2>

          <p className="text-lg text-gray-400">
            {mediaCoverageContent.subtitle[language]}
          </p>
        </AnimatedCard>

        <div className="max-w-7xl mx-auto px-4">
          {isLoading ? (
            <div className="flex h-64 w-full items-center justify-center">
              <Loader2 className="h-12 w-12 animate-spin text-orange-400" />
            </div>
          ) : cuttings.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {displayedCuttings.map((cutting, index) => (
                  <MediaCard key={index} cutting={cutting} />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalItems={cuttings.length}
                itemsPerPage={ITEMS_PER_PAGE}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <div className="flex h-64 w-full items-center justify-center">
              <p className="text-gray-400">
                {mediaCoverageContent.noCuttings[language]}
              </p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
