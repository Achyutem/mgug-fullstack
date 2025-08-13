import { useState, useEffect, useRef } from "react";
import { FaBullhorn, FaFileAlt, FaNewspaper } from "react-icons/fa";
import AnimatedCard from "@/components/animatedCard";
import type { NotificationItem } from "@/utils/types";
import { UseLanguage } from "@/context/languageContext";
import { HomePage } from "@/utils/mainPageData";

// Helper component defined in the same file
const NotificationColumn = ({
  title,
  icon,
  items,
  basePath,
  autoScroll = false,
}: {
  title: string;
  icon: React.ReactNode;
  items: NotificationItem[];
  basePath: string; // The base path for the links
  autoScroll?: boolean;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoScroll || isHovering || !scrollRef.current || items.length === 0) {
      return;
    }

    const scrollElement = scrollRef.current;
    let scrollInterval: NodeJS.Timeout;

    const startScrolling = () => {
      if (scrollElement.scrollHeight <= scrollElement.clientHeight) return;

      scrollInterval = setInterval(() => {
        if (scrollElement.scrollTop >= scrollElement.scrollHeight / 2) {
          scrollElement.scrollTop = 0;
        } else {
          scrollElement.scrollTop += 1;
        }
      }, 50);
    };

    startScrolling();

    return () => clearInterval(scrollInterval);
  }, [autoScroll, isHovering, items]);

  return (
    <div className="bg-transparent backdrop-blur-md border-2 border-orange-500 rounded-2xl p-8 sm:p-5 flex flex-col h-full transition-all duration-300 hover:border-orange-500">
      {/* The title is now wrapped in a link */}
      <a href={basePath}>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-orange-500 transition-colors hover:text-orange-600">
          {icon}
          {title}
        </h3>
      </a>
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="flex-grow overflow-y-auto max-h-80 sm:max-h-96 pr-1 sm:pr-2 scrollbar-none"
      >
        {items.length > 0 ? (
          <ul className="space-y-3">
            {items.map((item, index) => {
              const displayDate =
                item.notification_datetime_formatted.split(" ")[0];
              const itemSlug = item.pdf_path;

              return (
                <li key={`${item.pdf_path}-${index}`}>
                  <a
                    href={`${basePath}/${itemSlug}`}
                    className="block text-gray-700 hover:text-slate-900 hover:bg-orange-200 p-3 rounded-md transition-colors duration-300 border-b border-gray-300"
                  >
                    <span className="font-bold">{displayDate}</span> -{" "}
                    {item.notification_name}
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-gray-500 text-center pt-10">No new updates.</p>
        )}
      </div>
    </div>
  );
};

// Main export component
export default function Notifications() {
  const { language } = UseLanguage();
  const t = HomePage.notifications[language];

  const [examNotifs, setExamNotifs] = useState<NotificationItem[]>([]);
  const [notices, setNotices] = useState<NotificationItem[]>([]);
  const [news, setNews] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const API_BASE = "https://mgug.ac.in/api/notificationsApi.php?type=";
      try {
        const [examRes, noticeRes, newsRes] = await Promise.all([
          fetch(`${API_BASE}8`), // Exam Notifications
          fetch(`${API_BASE}2`), // Notices/Announcements
          fetch(`${API_BASE}1`), // News
        ]);
        const examData = await examRes.json();
        const noticeData = await noticeRes.json();
        const newsData = await newsRes.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const processAndDuplicate = (data: any) => {
          if (Array.isArray(data) && data.length > 0) {
            const topItems = data.slice(0, 10);
            return [...topItems, ...topItems];
          }
          return [];
        };

        setExamNotifs(processAndDuplicate(examData));
        setNotices(processAndDuplicate(noticeData));
        setNews(processAndDuplicate(newsData));
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section
      id="notifications"
      className="relative z-20 py-8 px-4 sm:py-8 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedCard className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            <span className="bg-orange-500 bg-clip-text text-transparent">
              {t.heading}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.description}
          </p>
        </AnimatedCard>

        {loading ? (
          <div className="text-center text-xl text-gray-600">
            {t.loadingText}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <NotificationColumn
              title={t.examTitle}
              icon={<FaFileAlt />}
              items={examNotifs}
              autoScroll={true}
              basePath="/schedule"
            />
            <NotificationColumn
              title={t.noticeTitle}
              icon={<FaBullhorn />}
              items={notices}
              autoScroll={true}
              basePath="/result"
            />
            <NotificationColumn
              title={t.newsTitle}
              icon={<FaNewspaper />}
              items={news}
              autoScroll={true}
              basePath="/news"
            />
          </div>
        )}
      </div>
    </section>
  );
}
