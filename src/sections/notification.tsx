import { useState, useEffect } from "react";
import { FaBullhorn, FaFileAlt, FaNewspaper } from "react-icons/fa";
import AnimatedCard from "@/components/animatedCard";
import type { NotificationItem } from "@/utils/types";
import { UseLanguage } from "@/context/languageContext";
import { HomePage } from "@/utils/mainPageData";

const NotificationColumn = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: NotificationItem[];
}) => {
  return (
    <div className="bg-white/60 backdrop-blur-md border-2 border-orange-500/50 rounded-2xl p-4 sm:p-5 flex flex-col h-full transition-all duration-300 hover:border-orange-500">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-orange-500">
        {icon}
        {title}
      </h3>
      <div className="flex-grow overflow-y-auto max-h-80 sm:max-h-96 pr-1 sm:pr-2">
        {items.length > 0 ? (
          <ul className="space-y-3">
            {items.map((item) => {
              const displayDate =
                item.notification_datetime_formatted.split(" ")[0];
              return (
                <li key={item.pdf_path}>
                  <a
                    href={item.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-700 hover:text-slate-900 hover:bg-orange-100/50 p-3 rounded-md transition-colors duration-300 border-b border-gray-200"
                  >
                    {`${displayDate} - ${item.notification_name}`}
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

        setExamNotifs(Array.isArray(examData) ? examData : []);
        setNotices(Array.isArray(noticeData) ? noticeData : []);
        setNews(Array.isArray(newsData) ? newsData : []);
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
      className="relative z-20 py-16 px-4 sm:py-24 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedCard className="text-center mb-16">
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
            />
            <NotificationColumn
              title={t.noticeTitle}
              icon={<FaBullhorn />}
              items={notices}
            />
            <NotificationColumn
              title={t.newsTitle}
              icon={<FaNewspaper />}
              items={news}
            />
          </div>
        )}
      </div>
    </section>
  );
}

// import { useState, useEffect } from "react";
// import { FaBullhorn, FaFileAlt, FaNewspaper } from "react-icons/fa";
// import AnimatedCard from "@/components/animatedCard";
// import type { NotificationItem } from "@/utils/types";
// import { UseLanguage } from "@/context/languageContext";
// import { HomePage } from "@/utils/mainPageData";

// const NotificationColumn = ({
//   title,
//   icon,
//   items,
// }: {
//   title: string;
//   icon: React.ReactNode;
//   items: NotificationItem[];
// }) => {
//   return (
//     <div className="bg-white/60 backdrop-blur-md border-2 border-orange-500/50 rounded-2xl p-5 flex flex-col h-full transition-all duration-300 hover:border-orange-500">
//       <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-orange-500">
//         {icon}
//         {title}
//       </h3>
//       <div className="flex-grow overflow-y-auto max-h-96 pr-2">
//         {items.length > 0 ? (
//           <ul className="space-y-3">
//             {items.map((item) => {
//               const displayDate =
//                 item.notification_datetime_formatted.split(" ")[0];
//               return (
//                 <li key={item.pdf_path}>
//                   <a
//                     href={item.pdf_url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block text-gray-700 hover:text-slate-900 hover:bg-orange-100/50 p-3 rounded-md transition-colors duration-300 border-b border-gray-200"
//                   >
//                     {`${displayDate} - ${item.notification_name}`}
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//         ) : (
//           <p className="text-gray-500 text-center pt-10">No new updates.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default function Notifications() {
//   const { language } = UseLanguage();
//   const t = HomePage.notifications[language];

//   const [examNotifs, setExamNotifs] = useState<NotificationItem[]>([]);
//   const [notices, setNotices] = useState<NotificationItem[]>([]);
//   const [news, setNews] = useState<NotificationItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const API_BASE = "https://mgug.ac.in/api/notificationsApi.php?type=";
//       try {
//         const [examRes, noticeRes, newsRes] = await Promise.all([
//           fetch(`${API_BASE}8`), // Exam Notifications
//           fetch(`${API_BASE}2`), // Notices/Announcements
//           fetch(`${API_BASE}1`), // News
//         ]);
//         const examData = await examRes.json();
//         const noticeData = await noticeRes.json();
//         const newsData = await newsRes.json();

//         setExamNotifs(Array.isArray(examData) ? examData : []);
//         setNotices(Array.isArray(noticeData) ? noticeData : []);
//         setNews(Array.isArray(newsData) ? newsData : []);
//       } catch (error) {
//         console.error("Failed to fetch notifications:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <section id="notifications" className="relative z-20 py-24 px-4">
//       <div className="max-w-7xl mx-auto">
//         <AnimatedCard className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
//             <span className="bg-orange-500 bg-clip-text text-transparent">
//               {t.heading}
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             {t.description}
//           </p>
//         </AnimatedCard>

//         {loading ? (
//           <div className="text-center text-xl text-gray-600">
//             {t.loadingText}
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <NotificationColumn
//               title={t.examTitle}
//               icon={<FaFileAlt />}
//               items={examNotifs}
//             />
//             <NotificationColumn
//               title={t.noticeTitle}
//               icon={<FaBullhorn />}
//               items={notices}
//             />
//             <NotificationColumn
//               title={t.newsTitle}
//               icon={<FaNewspaper />}
//               items={news}
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
