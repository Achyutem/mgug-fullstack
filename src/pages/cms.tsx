import { useEffect, useState } from "react";
import MainLayout from "@/layouts/homeLayout";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import type { Job, NewsItem } from "@/utils/types";

export interface GalleryItem {
  id: number;
  title: string;
  image_url: string;
  uploaded_at: string;
}

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) {
    return null;
  }

  const handlePrevious = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNext = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-8 text-sm">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/70 text-slate-300 border border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700/90 transition-colors"
        aria-label="Previous Page"
      >
        <FaArrowLeft />
      </button>
      <span className="text-slate-400 font-medium tabular-nums">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/70 text-slate-300 border border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700/90 transition-colors"
        aria-label="Next Page"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

type Section = "news" | "jobs" | "gallery";

export default function PublicContentPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  const [activeSection, setActiveSection] = useState<Section>("news");

  // Pagination state
  const [newsPage, setNewsPage] = useState(1);
  const [jobsPage, setJobsPage] = useState(1);
  const [galleryPage, setGalleryPage] = useState(1);

  const ITEMS_PER_PAGE_TABLE = 10;
  const ITEMS_PER_PAGE_GALLERY = 10;

  const API_BASE_URL = "https://mgug.ac.in/api";

  useEffect(() => {
    // Fetch Jobs
    fetch(`${API_BASE_URL}/notificationsApi.php?type=6`)
      .then((res) => res.json())
      .then(setJobs)
      .catch(console.error);

    // Fetch News
    fetch(`${API_BASE_URL}/notificationsApi.php?type=1`)
      .then((res) => res.json())
      .then(setNews)
      .catch(console.error);

    // Fetch Gallery
    fetch(`${API_BASE_URL}/galleryApi.php`) // Corrected likely endpoint
      .then((res) => res.json())
      .then(setGallery)
      .catch(console.error);
  }, []);

  const renderSectionTitle = (title: string) => (
    <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
      {title}
    </h1>
  );

  // Memoized calculation for displayed items
  const displayedNews = news.slice(
    (newsPage - 1) * ITEMS_PER_PAGE_TABLE,
    newsPage * ITEMS_PER_PAGE_TABLE
  );
  const displayedJobs = jobs.slice(
    (jobsPage - 1) * ITEMS_PER_PAGE_TABLE,
    jobsPage * ITEMS_PER_PAGE_TABLE
  );
  const displayedGallery = gallery.slice(
    (galleryPage - 1) * ITEMS_PER_PAGE_GALLERY,
    galleryPage * ITEMS_PER_PAGE_GALLERY
  );

  const renderNotificationTable = (items: (Job | NewsItem)[]) => (
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

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto">
        {/* Section Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {(["news", "jobs", "gallery"] as Section[]).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeSection === section
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/70 border border-slate-700"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {activeSection === "news" && (
          <div>
            {renderSectionTitle("Latest News")}
            {renderNotificationTable(displayedNews)}
            <Pagination
              currentPage={newsPage}
              totalItems={news.length}
              itemsPerPage={ITEMS_PER_PAGE_TABLE}
              onPageChange={setNewsPage}
            />
          </div>
        )}

        {activeSection === "jobs" && (
          <div>
            {renderSectionTitle("Job Openings")}
            {renderNotificationTable(displayedJobs)}
            <Pagination
              currentPage={jobsPage}
              totalItems={jobs.length}
              itemsPerPage={ITEMS_PER_PAGE_TABLE}
              onPageChange={setJobsPage}
            />
          </div>
        )}

        {activeSection === "gallery" && (
          <div>
            {renderSectionTitle("Gallery")}
            {displayedGallery.length > 0 ? (
              <>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  {displayedGallery.map((item) => (
                    <div
                      key={item.id}
                      className="bg-slate-900/50 rounded-lg border border-slate-700 overflow-hidden backdrop-blur-sm hover:border-orange-400/50 transition-colors group"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={item.image_url} // Assuming image_url is a full path now
                          alt={item.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-medium text-orange-400">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-2">
                          {`Published: ${new Date(
                            item.uploaded_at
                          ).toLocaleDateString()}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Pagination
                  currentPage={galleryPage}
                  totalItems={gallery.length}
                  itemsPerPage={ITEMS_PER_PAGE_GALLERY}
                  onPageChange={setGalleryPage}
                />
              </>
            ) : (
              <div className="text-center text-slate-500 p-10 border border-dashed border-slate-700 rounded-xl">
                No gallery items to show.
              </div>
            )}
          </div>
        )}
      </section>
    </MainLayout>
  );
}
