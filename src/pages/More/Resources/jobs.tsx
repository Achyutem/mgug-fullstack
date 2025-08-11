import { useEffect, useState } from "react";
import { Pagination } from "@/components/pagination";
import type { Job } from "@/utils/types";
import MainLayout from "@/layouts/homeLayout";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const ITEMS_PER_PAGE = 10;
const API_BASE_URL = "https://mgug.ac.in/api";

const renderNotificationTable = (items: Job[]) => (
  <div className="p-6 sm:p-8 rounded-2xl border-2 border-orange-500 bg-transparent backdrop-blur-md">
    <div className="overflow-x-auto">
      <table className="w-full text-left text-slate-800">
        <thead>
          <tr className="bg-orange-500/20 text-orange-600">
            <th className="p-4 font-semibold rounded-tl-xl">Job Title</th>
            <th className="p-4 font-semibold">Date Posted</th>
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
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                  >
                    <FileText className="h-4 w-4" />
                    <span>View</span>
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

export default function JobsSection() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`${API_BASE_URL}/notificationsApi.php?type=6`)
      .then((res) => res.json())
      .then(setJobs)
      .catch(console.error);
  }, []);

  const displayedJobs = jobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">
          <span className="bg-orange-500 bg-clip-text text-transparent">
            Job Openings
          </span>
        </h1>
        {jobs.length > 0 ? (
          <>
            {renderNotificationTable(displayedJobs)}
            <Pagination
              currentPage={currentPage}
              totalItems={jobs.length}
              itemsPerPage={ITEMS_PER_PAGE}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <div className="text-center text-gray-600 py-16">
            Loading job openings...
          </div>
        )}
      </section>
    </MainLayout>
  );
}
