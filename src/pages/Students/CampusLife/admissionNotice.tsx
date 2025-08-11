import { useEffect, useState } from "react";
import { Pagination } from "@/components/pagination";
import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import type { MagazineTitles, AdmissionNoticeItem } from "@/utils/types";
import { admissionNoticeTitles } from "@/utils/student";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const ITEMS_PER_PAGE = 10;
const API_BASE_URL = "https://mgug.ac.in/api";

const renderAdmissionNoticeTable = (
  items: AdmissionNoticeItem[],
  titles: MagazineTitles["headers"],
  language: "hindi" | "english"
) => (
  <div className="p-6 sm:p-8 rounded-xl border border-orange-500 bg-transparent backdrop-blur-sm">
    <div className="overflow-x-auto">
      <table className="w-full text-left text-black">
        <thead>
          <tr className="bg-orange-500/20 text-orange-500">
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
              className="border-b border-slate-300 last:border-b-0 hover:bg-orange-200 transition-colors"
            >
              <td className="p-4">{item.notification_name}</td>
              <td className="p-4 text-sm text-gray-700">
                {item.notification_datetime_formatted}
              </td>
              <td className="p-4 text-center">
                <a
                  href={item.pdf_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                  >
                    <FileText className="h-4 w-4" />
                    <span>{language === "hindi" ? "देखें" : "View "}</span>
                  </Button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function AdmissionNoticePage() {
  const { language } = UseLanguage();
  const [notices, setNotices] = useState<AdmissionNoticeItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Assuming 'type=8' is for Admission Notices. You may need to verify this.
    fetch(`${API_BASE_URL}/notificationsApi.php?type=8`)
      .then((res) => res.json())
      .then((data) => {
        // Safeguard against non-array API responses
        if (Array.isArray(data)) {
          setNotices(data);
        } else {
          console.error(
            "API did not return an array for Admission Notices:",
            data
          );
          setNotices([]);
        }
      })
      .catch(console.error);
  }, []);

  const displayedNotices = notices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-orange-500 text-center">
          {admissionNoticeTitles.heading[language]}
        </h1>
        {renderAdmissionNoticeTable(
          displayedNotices,
          admissionNoticeTitles.headers,
          language
        )}
        <Pagination
          currentPage={currentPage}
          totalItems={notices.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      </section>
    </MainLayout>
  );
}
