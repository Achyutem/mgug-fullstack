import { useState, useEffect } from "react";
import { FaBullhorn } from "react-icons/fa";
import type { NotificationItem } from "@/utils/types";

export default function Marquee() {
  const [items, setItems] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarqueeData = async () => {
      const API_URL = "https://mgug.ac.in/api/notificationsApi.php?type=4";
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setItems(Array.isArray(data) ? data.slice(0, 10) : []);
      } catch (error) {
        console.error("Failed to fetch marquee data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarqueeData();
  }, []);

  const marqueeItems = [...items, ...items];

  if (loading || items.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700 text-white flex items-center overflow-hidden h-12">
      <div className="bg-orange-500 text-black px-4 h-full flex items-center font-bold text-lg z-10">
        <FaBullhorn className="mr-2" />
        <span>LATEST</span>
      </div>
      <div className="relative flex-1 h-full">
        <div className="absolute top-0 left-0 w-full h-full flex items-center animate-marquee">
          {marqueeItems.map((item, index) => (
            <a
              key={`${item.pdf_path}-${index}`}
              href={item.pdf_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:underline whitespace-nowrap px-8 text-sm"
            >
              {item.notification_name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
