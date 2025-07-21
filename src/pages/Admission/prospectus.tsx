import { useEffect, useState } from "react";
import { Pagination } from "@/components/pagination";
import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { prospectusTitles } from "@/utils/urlData";
import type { MagazineTitles, ProspectusItem } from "@/utils/types";

const ITEMS_PER_PAGE = 10;
const API_BASE_URL = "https://mgug.ac.in/api";

const renderProspectusTable = (
  items: ProspectusItem[],
  titles: MagazineTitles["headers"],
  language: "hindi" | "english"
) => (
  <div className="p-6 sm:p-8 rounded-xl border border-slate-700 bg-black/20 backdrop-blur-sm">
    <div className="overflow-x-auto">
      <table className="w-full text-left text-gray-200">
        <thead>
          <tr className="bg-orange-500/20 text-orange-400">
            <th className="p-4 font-semibold rounded-tl-xl">
              {titles.title[language]}
            </th>
            <th className="p-4 font-semibold">{titles.date[language]}</th>
            <th className="p-4 font-semibold rounded-tr-xl text-center">
              {titles.link[language]}
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.pdf_url}
              className="border-b border-slate-700 last:border-b-0 hover:bg-gray-700/50 transition-colors"
            >
              <td className="p-4">{item.notification_name}</td>
              <td className="p-4 text-sm text-slate-400">
                {item.notification_datetime_formatted}
              </td>
              <td className="p-4 text-center">
                <a
                  href={item.pdf_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-cyan-400 hover:text-cyan-300 underline font-semibold"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function ProspectusPage() {
  const { language } = UseLanguage();
  const [prospectus, setProspectus] = useState<ProspectusItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`${API_BASE_URL}/notificationsApi.php?type=11`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProspectus(data);
        } else {
          console.error("API did not return an array for Prospectus:", data);
          setProspectus([]);
        }
      })
      .catch(console.error);
  }, []);

  const displayedProspectus = prospectus.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
          {prospectusTitles.heading[language]}
        </h1>
        {renderProspectusTable(
          displayedProspectus,
          prospectusTitles.headers,
          language
        )}
        <Pagination
          currentPage={currentPage}
          totalItems={prospectus.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      </section>
    </MainLayout>
  );
}
