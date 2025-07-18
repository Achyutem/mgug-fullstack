import { useEffect, useState } from "react";
import { Pagination } from "@/components/pagination";
import type { NewsItem } from "@/utils/types";
import MainLayout from "@/layouts/homeLayout";

const ITEMS_PER_PAGE = 10;
const API_BASE_URL = "https://mgug.ac.in/api";

const renderNotificationTable = (items: NewsItem[]) => (
  <div className="p-6 sm:p-8 rounded-xl border border-slate-700 bg-black/20 backdrop-blur-sm">
    <div className="overflow-x-auto">
      <table className="w-full text-left text-gray-200">
        <thead>
          <tr className="bg-orange-500/20 text-orange-400">
            <th className="p-4 font-semibold rounded-tl-xl">Notification</th>
            <th className="p-4 font-semibold">Date</th>
            <th className="p-4 font-semibold rounded-tr-xl text-center">
              Link
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
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`${API_BASE_URL}/notificationsApi.php?type=1`)
      .then((res) => res.json())
      .then(setNews)
      .catch(console.error);
  }, []);

  const displayedNews = news.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <MainLayout>
      {/* This wrapper adds responsive horizontal padding */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
          Latest News
        </h1>
        {renderNotificationTable(displayedNews)}
        <Pagination
          currentPage={currentPage}
          totalItems={news.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      </section>
    </MainLayout>
  );
}
