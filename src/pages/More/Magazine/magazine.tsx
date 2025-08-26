import NewCard from "@/components/newCard";
import MainLayout from "@/layouts/homeLayout";
import { MagazineLinksData } from "@/utils/studentHelp";
import { UseLanguage } from "@/context/languageContext";
import { magazinePage } from "@/utils/moreData";

export default function Magazine() {
  const { language } = UseLanguage();
  return (
    <MainLayout>
      <div className="min-h-screen py-16 px-4">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            <span className="bg-orange-500 bg-clip-text text-transparent">
              {magazinePage.title[language]}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {magazinePage.desc[language]}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {MagazineLinksData.map((link) => (
              <NewCard
                key={link.title[language]}
                href={link.href}
                title={link.title[language]}
                icon={link.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
