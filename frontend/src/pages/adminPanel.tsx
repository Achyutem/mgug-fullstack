/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, type FormEvent } from "react";

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

export default function AdminPanel() {
  const [token, setToken] = useState("");
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [view, setView] = useState<ViewType>("news");
  const [news, setNews] = useState<News[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const endpointMap: Record<ViewType, string> = {
    news: "http://localhost:4000/api/news",
    jobs: "http://localhost:4000/api/jobs",
    gallery: "http://localhost:4000/api/gallery",
  };

  const fetchData = async () => {
    const res = await fetch(endpointMap[view], {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) {
      setError("Failed to fetch");
      return;
    }
    const data = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    view === "news"
      ? setNews(data)
      : view === "jobs"
      ? setJobs(data)
      : setGallery(data);
  };

  const handleLogin = async () => {
    try {
      const res = await fetch(endpointMap[view], {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error();
      setAuthenticated(true);
      fetchData();
    } catch {
      setError("Invalid token");
    }
  };

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const content = (
      form.elements.namedItem("description") as HTMLTextAreaElement
    ).value;

    const payload =
      view === "news" ? { title, content } : { title, description: content };

    const res = await fetch(endpointMap[view], {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      form.reset();
      fetchData();
    } else {
      setError("Create failed");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure?")) return;
    const res = await fetch(`${endpointMap[view]}/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) fetchData();
    else setError("Delete failed");
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(endpointMap.gallery, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    if (res.ok) {
      setFile(null);
      fetchData();
    } else {
      setError("Upload failed");
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  if (!isAuthenticated) {
    return (
      <div className="p-8 max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          className="border px-3 py-2 w-full mb-4"
          type="password"
          placeholder="Enter admin token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>

      <div className="flex gap-4 mb-6">
        {(["news", "jobs", "gallery"] as ViewType[]).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-4 py-2 rounded ${
              view === v ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {v.toUpperCase()}
          </button>
        ))}
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {view === "gallery" ? (
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mb-2"
          />
          <button
            onClick={handleUpload}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Upload Image
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {gallery.map((img) => (
              <div key={img.id} className="rounded shadow">
                <img
                  src={`/uploads/${img.filename}`}
                  className="w-full h-48 object-cover"
                  alt=""
                />
                <div className="flex justify-between p-2 text-sm">
                  <span>{new Date(img.uploaded_at).toLocaleDateString()}</span>
                  <button
                    className="text-red-600"
                    onClick={() => handleDelete(img.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={handleCreate} className="mb-6">
            <input
              name="title"
              placeholder="Title"
              required
              className="w-full p-2 mb-2 border"
            />
            <textarea
              name="description"
              placeholder={view === "news" ? "Content" : "Description"}
              required
              className="w-full p-2 mb-2 border"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Add {view.toUpperCase()}
            </button>
          </form>

          <ul className="space-y-4">
            {(view === "news" ? news : jobs).map((item: any) => (
              <li
                key={item.id}
                className="border rounded p-4 shadow-sm bg-white"
              >
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-gray-700">
                  {view === "news" ? item.content : item.description}
                </p>
                <small className="text-gray-500">
                  {view === "news"
                    ? new Date(item.published_at).toLocaleDateString()
                    : new Date(item.posted_at).toLocaleDateString()}
                </small>
                <br />
                <button
                  onClick={() => handleDelete(item.id)}
                  className="mt-2 text-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
