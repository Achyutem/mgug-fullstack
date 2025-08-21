import { useEffect, useState } from "react";
import { Pagination } from "@/components/pagination";
import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { MagazineTable } from "./renderMagazine";
import type { BaseMagazineItem, MagazineTitles } from "@/utils/types";

const ITEMS_PER_PAGE = 10;
const API_BASE_URL = "https://mgug.ac.in/api";

type MagazinePageProps = {
  apiType: 13 | 14 | 15;
  pageTitles: MagazineTitles;
};

export default function MagazinePage({
  apiType,
  pageTitles,
}: MagazinePageProps) {
  const { language } = UseLanguage();
  const [magazines, setMagazines] = useState<BaseMagazineItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_BASE_URL}/notificationsApi.php?type=${apiType}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMagazines(data);
        } else {
          console.error(
            `API for type ${apiType} did not return an array:`,
            data
          );
          setMagazines([]);
        }
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [apiType]);

  const displayedMagazines = magazines.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8 text-orange-500 text-center">
          {pageTitles.heading[language]}
        </h1>

        {isLoading ? (
          <div className="text-center text-gray-600 py-16">
            Loading magazines...
          </div>
        ) : (
          <>
            <MagazineTable
              items={displayedMagazines}
              titles={pageTitles.headers}
              language={language}
            />
            <Pagination
              currentPage={currentPage}
              totalItems={magazines.length}
              itemsPerPage={ITEMS_PER_PAGE}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </section>
    </MainLayout>
  );
}
