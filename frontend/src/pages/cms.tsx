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

export default function PublicContent() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
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
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-4 border-b pb-2">Latest News</h2>
        <ul className="space-y-4">
          {news.map((n) => (
            <li key={n.id} className="p-4 bg-white shadow rounded">
              <h3 className="text-xl font-semibold">{n.title}</h3>
              <p className="text-gray-600">{n.content}</p>
              <p className="text-sm text-gray-500 mt-2">
                Published: {new Date(n.published_at).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 border-b pb-2">Job Openings</h2>
        <ul className="space-y-4">
          {jobs.map((j) => (
            <li key={j.id} className="p-4 bg-white shadow rounded">
              <h3 className="text-xl font-semibold">{j.title}</h3>
              <p className="text-gray-600">{j.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Posted: {new Date(j.posted_at).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 border-b pb-2">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded overflow-hidden"
            >
              <img
                src={`${BASE_URL}/${item.image_url}`}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-500">
                  Uploaded: {new Date(item.uploaded_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
