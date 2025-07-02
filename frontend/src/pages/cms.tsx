import { useEffect, useState } from "react";

interface Job {
  id: number;
  title: string;
  description: string;
  posted_at: string;
}

interface News {
  id: number;
  title: string;
  content: string;
  published_at: string;
}

interface GalleryItem {
  id: number;
  title: string;
  image_url: string;
  uploaded_at: string;
}

type Section = "news" | "jobs" | "gallery";

export default function PublicContent() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [activeSection, setActiveSection] = useState<Section>("news");

  const BASE_URL = "http://localhost:4000";

  useEffect(() => {
    fetch(`${BASE_URL}/api/jobs`)
      .then((res) => res.json())
      .then(setJobs)
      .catch(console.error);
    fetch(`${BASE_URL}/api/news`)
      .then((res) => res.json())
      .then(setNews)
      .catch(console.error);
    fetch(`${BASE_URL}/api/gallery`)
      .then((res) => res.json())
      .then(setGallery)
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      {/* Section Selector */}
      <div className="flex justify-center gap-4 mb-6">
        {(["news", "jobs", "gallery"] as Section[]).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              activeSection === section
                ? "bg-purple-600 text-white"
                : "bg-purple-100 text-purple-800 hover:bg-purple-200"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* News Section */}
      {activeSection === "news" && (
        <section>
          <h2 className="text-3xl font-bold text-purple-800 mb-4">
            📰 Latest News
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {news.map((n) => (
              <div
                key={n.id}
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-purple-800 mb-2">
                  {n.title}
                </h3>
                <p className="text-gray-600 text-sm">{n.content}</p>
                <p className="text-xs text-gray-500 mt-3">
                  Published: {new Date(n.published_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Jobs Section */}
      {activeSection === "jobs" && (
        <section>
          <h2 className="text-3xl font-bold text-purple-800 mb-4">
            💼 Job Openings
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {jobs.map((j) => (
              <div
                key={j.id}
                className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-purple-800 mb-2">
                  {j.title}
                </h3>
                <p className="text-gray-600 text-sm">{j.description}</p>
                <p className="text-xs text-gray-500 mt-3">
                  Posted: {new Date(j.posted_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {activeSection === "gallery" && (
        <section>
          <h2 className="text-3xl font-bold text-purple-800 mb-4">
            🖼️ Gallery
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={`${BASE_URL}/${item.image_url}`}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-medium text-purple-800">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Uploaded: {new Date(item.uploaded_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
