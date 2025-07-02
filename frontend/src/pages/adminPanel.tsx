/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, type FormEvent, useRef } from "react";

interface News {
  id: number;
  title: string;
  content: string;
  published_at: string;
}
interface Job {
  id: number;
  title: string;
  description: string;
  posted_at: string;
}
interface GalleryItem {
  id: number;
  filename: string;
  uploaded_at: string;
}
type ViewType = "news" | "jobs" | "gallery";

const Spinner = () => (
  <div className="flex justify-center items-center p-4">
    <div className="w-10 h-10 border-4 border-t-indigo-600 border-gray-200 rounded-full animate-spin"></div>
  </div>
);

const Alert = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => (
  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md mb-6 flex justify-between items-center">
    <div className="flex items-center">
      {/* Alert Icon */}
      <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0v-4zM9 14a1 1 0 112 0 1 1 0 01-2 0z"
          clipRule="evenodd"
        />
      </svg>
      <span>{message}</span>
    </div>
    <button onClick={onClose} className="text-red-500 hover:text-red-700">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
);

// A beautiful confirmation modal to replace the native `confirm()`.
const ConfirmationModal = ({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Are you sure?
        </h3>
        <p className="text-gray-600 mb-6">This action cannot be undone.</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default function AdminPanel() {
  const [token, setToken] = useState("");
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [view, setView] = useState<ViewType>("news");
  const [news, setNews] = useState<News[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);
  const createFormRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const endpointMap: Record<ViewType, string> = {
    news: "http://localhost:4000/api/news",
    jobs: "http://localhost:4000/api/jobs",
    gallery: "http://localhost:4000/api/gallery",
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(endpointMap[view], {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch data.");
      const data = await res.json();
      if (view === "news") setNews(data);
      else if (view === "jobs") setJobs(data);
      else setGallery(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(endpointMap.news, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Invalid token. Please try again.");
      setAuthenticated(true);
      await fetchData();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const content = (form.elements.namedItem("content") as HTMLTextAreaElement)
      .value;
    const payload =
      view === "news" ? { title, content } : { title, description: content };

    try {
      const res = await fetch(endpointMap[view], {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Create operation failed.");
      form.reset();
      await fetchData();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = async () => {
    if (itemToDelete === null) return;
    setLoading(true);
    try {
      const res = await fetch(`${endpointMap[view]}/${itemToDelete}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Delete operation failed.");
      await fetchData();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setItemToDelete(null);
      setLoading(false);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await fetch(endpointMap.gallery, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (!res.ok) throw new Error("Upload failed.");
      if (fileInputRef.current) fileInputRef.current.value = ""; // Reset file input
      setFile(null);
      await fetchData();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      setError("");
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, isAuthenticated]);

  // --- RENDER: UNAUTHENTICATED VIEW ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Admin Panel
            </h1>
            <p className="text-gray-500 mb-8">Please login to continue</p>
            {error && <Alert message={error} onClose={() => setError("")} />}
            <div className="space-y-6">
              <input
                type="password"
                placeholder="Enter Admin Token"
                className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none transition-colors"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              />
              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-md hover:shadow-lg disabled:bg-indigo-400 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-t-white border-gray-400 rounded-full animate-spin"></div>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDER: AUTHENTICATED VIEW ---
  return (
    <div className="min-h-screen bg-gray-50">
      <ConfirmationModal
        open={itemToDelete !== null}
        onClose={() => setItemToDelete(null)}
        onConfirm={confirmDelete}
      />
      {/* --- Header & Navigation Tabs --- */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-indigo-600">Dashboard</h1>
            <div className="flex items-center space-x-2 sm:space-x-4">
              {(["news", "jobs", "gallery"] as ViewType[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base font-semibold capitalize transition-all duration-300 border-b-4 ${
                    view === v
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-600 hover:bg-indigo-50 hover:border-indigo-200"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* --- Main Content Area --- */}
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {error && <Alert message={error} onClose={() => setError("")} />}

        {/* --- GALLERY VIEW --- */}
        {view === "gallery" && (
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Upload Image
              </h2>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <label className="w-full sm:w-auto">
                  <span className="sr-only">Choose file</span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-200 file:text-indigo-700 hover:file:bg-indigo-300"
                  />
                </label>
                <button
                  onClick={handleUpload}
                  disabled={!file || loading}
                  className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Upload
                </button>
              </div>
            </div>
            {loading ? (
              <Spinner />
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {gallery.map((img) => (
                  <div
                    key={img.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden group relative"
                  >
                    <img
                      src={`http://localhost:4000/uploads/${img.filename}`}
                      alt=""
                      className="w-full h-48"
                    />
                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all flex flex-col justify-between p-2">
                      <div className="self-end">
                        <button
                          onClick={() => setItemToDelete(img.id)}
                          className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <span className="text-xs font-medium text-white bg-black bg-opacity-50 rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {new Date(img.uploaded_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- NEWS & JOBS VIEW --- */}
        {view !== "gallery" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* --- FORM on the left --- */}
            <div className="lg:col-span-1">
              <form
                ref={createFormRef}
                onSubmit={handleCreate}
                className="bg-white p-6 rounded-lg shadow-md sticky top-24"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Add New {view === "news" ? "Article" : "Job"}
                </h2>
                <div className="space-y-6">
                  <input
                    name="title"
                    required
                    placeholder="Title"
                    className="w-full px-4 py-3 bg-gray-50 border rounded-lg border-indigo-300 focus:border-indigo-700 focus:outline-none transition-colors"
                  />
                  <textarea
                    name="content"
                    required
                    placeholder={view === "news" ? "Content" : "Description"}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border rounded-lg border-indigo-300 focus:border-indigo-700 focus:outline-none transition-colors"
                  />
                </div>
                <div className="mt-8 text-right">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* --- LIST on the right --- */}
            <div className="lg:col-span-2">
              {loading ? (
                <Spinner />
              ) : (
                <ul className="space-y-6">
                  {(view === "news" ? news : jobs).map((item: any) => (
                    <li
                      key={item.id}
                      className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <button
                          onClick={() => setItemToDelete(item.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-600 mb-4 whitespace-pre-wrap">
                        {view === "news" ? item.content : item.description}
                      </p>
                      <small className="text-gray-500">
                        Posted on:{" "}
                        {new Date(
                          view === "news" ? item.published_at : item.posted_at
                        ).toLocaleDateString()}
                      </small>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
