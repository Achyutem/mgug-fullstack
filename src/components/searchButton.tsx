import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import type { SearchablePage } from "@/utils/types";
import React, { useEffect, useState, useRef } from "react";

export default function SearchDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchablePage[]>([]);
  const [allPages, setAllPages] = useState<SearchablePage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- NEW: State and refs for keyboard navigation ---
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // This effect runs only once to fetch the search data.
  useEffect(() => {
    fetch("/search-data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllPages(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch search data:", err);
        setError("could not load search index");
        setIsLoading(false);
      });
  }, []);

  // This effect performs the search whenever the query changes.
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = allPages.filter(
      (page) =>
        (page.title || "").toLowerCase().includes(q) ||
        (page.content || "").toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query, allPages]);

  // --- NEW: Effect to reset highlight when results change ---
  useEffect(() => {
    setHighlightedIndex(0);
    // Reset the refs array whenever the results change
    itemRefs.current = itemRefs.current.slice(0, results.length);
  }, [results]);

  // --- NEW: Effect to handle keyboard events (Arrow, Enter, Escape) ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open || results.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % results.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex(
          (prev) => (prev - 1 + results.length) % results.length
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        const selected = results[highlightedIndex];
        if (selected) {
          window.location.href = selected.path;
          setOpen(false);
        }
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, results, highlightedIndex, setOpen]);

  // --- NEW: Effect to scroll the highlighted item into view ---
  useEffect(() => {
    if (results.length > 0) {
      const ref = itemRefs.current[highlightedIndex];
      if (ref) {
        ref.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [highlightedIndex, results]);

  const highlight = (text: string, keyword: string): React.ReactNode => {
    if (!keyword.trim()) return <span>{text}</span>;
    const regex = new RegExp(`(${keyword})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <mark key={i} className="bg-orange-400 text-black px-1 rounded-sm">
          {part}
        </mark>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  const getSnippet = (
    content: string,
    keyword: string
  ): React.ReactNode | null => {
    const lowerContent = content.toLowerCase();
    const lowerKeyword = keyword.toLowerCase();
    const index = lowerContent.indexOf(lowerKeyword);
    if (index === -1) return null;
    const contextWindow = 50;
    const start = Math.max(0, index - contextWindow);
    const end = Math.min(
      content.length,
      index + keyword.length + contextWindow
    );
    return (
      <p className="text-sm text-gray-700 mt-2 leading-tight">
        ...{highlight(content.substring(start, end), keyword)}...
      </p>
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-xl p-0 overflow-hidden bg-white/80 backdrop-blur-lg text-slate-800 border border-gray-200/80 shadow-2xl shadow-black/10"
        showCloseButton={false}
      >
        {/* CHANGED: Input container styles */}
        <div className="border-b border-gray-200 p-4">
          <Input
            autoFocus
            placeholder="Search the university website..."
            className="text-sm bg-white text-slate-900 placeholder:text-gray-500 border-orange-500 focus-visible:ring-orange-500 focus-visible:ring-[1.5px] focus-visible:border-orange-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div
          className="max-h-[400px] overflow-y-auto p-4 space-y-2"
          id="search-results-container"
        >
          {isLoading ? (
            <p className="text-gray-500 text-sm text-center pt-4">
              Loading search index...
            </p>
          ) : error ? (
            <p className="text-red-600 text-sm text-center pt-4">{error}</p>
          ) : !query.trim() ? (
            <p className="text-gray-500 text-sm text-center pt-4">
              Start typing to search...
            </p>
          ) : results.length === 0 ? (
            <p className="text-gray-600 text-sm text-center pt-4">
              No results found for "{query}".
            </p>
          ) : (
            results.map((item, index) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                // CHANGED: Search result item styles
                className={`block p-3 rounded-lg transition-all ${
                  index === highlightedIndex
                    ? "bg-orange-100/70 ring-2 ring-orange-500"
                    : "hover:bg-gray-100/70"
                }`}
              >
                <div className="font-semibold text-orange-500">
                  {highlight(item.title, query)}
                </div>
                {getSnippet(item.content, query)}
              </a>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
