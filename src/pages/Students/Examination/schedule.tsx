import { useEffect, useState } from "react";
import { Pagination } from "@/components/pagination";
import MainLayout from "@/layouts/homeLayout";
import type { ScheduleItem } from "@/utils/types";

const ITEMS_PER_PAGE = 10;
const API_BASE_URL = "https://mgug.ac.in/api";

const renderScheduleTable = (items: ScheduleItem[]) => (
  <div className="p-6 sm:p-8 rounded-2xl border-2 border-orange-500 bg-transparent backdrop-blur-md">
    <div className="overflow-x-auto">
      <table className="w-full text-left text-slate-800">
        <thead>
          <tr className="bg-orange-500/20 text-orange-600">
            <th className="p-4 font-semibold rounded-tl-xl">
              Schedule Details
            </th>
            <th className="p-4 font-semibold">Date Released</th>
            <th className="p-4 font-semibold rounded-tr-xl text-center">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.pdf_url}
              className="border-b border-gray-200 last:border-b-0 hover:bg-orange-200 transition-colors"
            >
              <td className="p-4 font-medium">{item.notification_name}</td>
              <td className="p-4 text-sm text-gray-600">
                {item.notification_datetime_formatted}
              </td>
              <td className="p-4 text-center">
                <a
                  href={item.pdf_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-orange-500 hover:text-orange-600 underline font-semibold"
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

export default function SchedulePage() {
  const [schedules, setSchedules] = useState<ScheduleItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`${API_BASE_URL}/notificationsApi.php?type=8`)
      .then((res) => res.json())
      .then(setSchedules)
      .catch(console.error);
  }, []);

  const displayedSchedules = schedules.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CHANGED: Wrapped heading in a gradient for consistency. */}
        <h1 className="text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            Schedules
          </span>
        </h1>
        {schedules.length > 0 ? (
          <>
            {renderScheduleTable(displayedSchedules)}
            <Pagination
              currentPage={currentPage}
              totalItems={schedules.length}
              itemsPerPage={ITEMS_PER_PAGE}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <div className="text-center text-gray-600 py-16">
            Loading schedules...
          </div>
        )}
      </section>
    </MainLayout>
  );
}
