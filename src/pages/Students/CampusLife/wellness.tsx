import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2, Download } from "lucide-react";

import AnimatedCard from "@/components/animatedCard";
import MainLayout from "@/layouts/homeLayout";

import { UseLanguage } from "@/context/languageContext";
import { wellnessData } from "@/utils/student";
import type { FlyerContent } from "@/utils/types";

interface InfoCardProps {
  flyer: FlyerContent;
  downloadText: string;
  language: "english" | "hindi";
}

const InfoCard: React.FC<InfoCardProps> = ({
  flyer,
  downloadText,
  language,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-orange-500/20 hover:border-orange-500 group"
    >
      <div className="aspect-w-4 aspect-h-3 bg-gray-100">
        <img
          src={flyer.link}
          alt={flyer.title[language]}
          className="w-full h-full object-contain p-2"
          loading="lazy"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">
          {flyer.title[language]} {/* Use language-specific title */}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {flyer.description[language]}{" "}
          {/* Use language-specific description */}
        </p>
        <a
          href={flyer.link}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          <Download size={18} />
          {downloadText} {/* Use download text from props */}
        </a>
      </div>
    </motion.div>
  );
};

export default function CounsellingPage() {
  const { language } = UseLanguage(); // Get the current language
  const [flyers, setFlyers] = useState<FlyerContent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadFlyers = () => {
      setIsLoading(true);
      setTimeout(() => {
        setFlyers(wellnessData.flyers); // Load data from the new object
        setIsLoading(false);
      }, 500);
    };

    loadFlyers();
  }, []);

  // Adding a "no content" message to the data object is a good practice,
  // but for now, we'll handle it directly here.
  const noContentMessage = {
    english: "No support materials are available. Please check back later.",
    hindi: "कोई समर्थन सामग्री उपलब्ध नहीं है। कृपया बाद में दोबारा जांचें।",
  };

  return (
    <MainLayout>
      <section
        id="counselling-support"
        className="relative z-20 py-16 px-4 w-full"
      >
        <AnimatedCard className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            <span className="bg-orange-500 bg-clip-text text-transparent">
              {wellnessData.pageTitle[language]} {/* Dynamic Page Title */}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {wellnessData.pageSubtitle[language]} {/* Dynamic Page Subtitle */}
          </p>
        </AnimatedCard>

        <div className="max-w-7xl mx-auto px-4">
          {isLoading ? (
            <div className="flex h-64 w-full items-center justify-center">
              <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
            </div>
          ) : flyers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {flyers.map((flyer, index) => (
                <InfoCard
                  key={index}
                  flyer={flyer}
                  language={language}
                  downloadText="Download"
                />
              ))}
            </div>
          ) : (
            <div className="flex h-64 w-full items-center justify-center">
              <p className="text-gray-600 text-lg">
                {noContentMessage[language]}{" "}
                {/* Dynamic "No Content" Message */}
              </p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
