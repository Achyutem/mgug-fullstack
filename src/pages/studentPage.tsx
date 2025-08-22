import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { studentLinksData } from "@/utils/studentHelp";
import type { LinkItem } from "@/utils/studentHelp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NewCard from "@/components/newCard";
import { studentZone } from "@/utils/student";

export default function StudentHelpPage() {
  const { language } = UseLanguage();
  // const t = studentZone[language]; // ❌ REMOVE THIS LINE

  const categories = Object.keys(studentLinksData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  useEffect(() => {
    const syncTabWithHash = () => {
      const hash = decodeURIComponent(window.location.hash.substring(1));
      if (hash && categories.includes(hash)) {
        setActiveTab(hash);
      } else {
        setActiveTab(categories[0]);
        window.history.replaceState(
          null,
          "",
          `#${encodeURIComponent(categories[0])}`
        );
      }
    };
    syncTabWithHash();
    window.addEventListener("hashchange", syncTabWithHash);
    return () => {
      window.removeEventListener("hashchange", syncTabWithHash);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabChange = (category: string) => {
    setActiveTab(category);
    window.location.hash = encodeURIComponent(category);
  };

  const gridVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        staggerChildren: 0.05,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  } as const;

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        {/* ✨ CORRECTED HEADER SECTION ✨ */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            <span className="bg-orange-500 bg-clip-text text-transparent">
              {studentZone.title[language]}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {studentZone.heading[language]}
          </p>
        </div>

        {/* Responsive Navigation Container */}
        <div className="max-w-7xl mx-auto mb-10 flex justify-center">
          {/* Mobile Dropdown Menu */}
          <div className="md:hidden w-full max-w-xs">
            <Select onValueChange={handleTabChange} value={activeTab}>
              <SelectTrigger className="w-full bg-orange-500/10 border-orange-600 text-slate-800 focus:ring-orange-500">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="bg-orange-100 border-orange-600 p-1">
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Tab Navigation */}
          <div className="hidden md:flex bg-orange-500/10 backdrop-blur-md p-2 rounded-xl shadow-inner-sm border border-orange-600 flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleTabChange(category)}
                className={`relative py-2 px-5 rounded-lg text-lg font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
                  activeTab === category
                    ? "text-white"
                    : "text-slate-700 hover:bg-orange-200"
                }`}
              >
                {activeTab === category && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-orange-500 rounded-lg"
                    style={{ borderRadius: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Animated Tab Content */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
            >
              {studentLinksData[activeTab as keyof typeof studentLinksData].map(
                (link: LinkItem) => (
                  <motion.div key={link.title} variants={cardVariants}>
                    <NewCard
                      href={link.href}
                      title={link.title}
                      icon={link.icon}
                    />
                  </motion.div>
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </MainLayout>
  );
}
