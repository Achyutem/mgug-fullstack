import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { universityLogoData } from "@/utils/aboutData";

const UniversityLogo = () => {
  const { language } = UseLanguage();

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sticky Image on Large Screens */}
          <div className="w-full lg:w-1/3 max-w-sm mx-auto lg:mx-0">
            <div className="rounded-xl shadow-lg overflow-hidden bg-white p-4 lg:sticky lg:top-28">
              <img
                src={universityLogoData.image}
                alt="University Logo - Mahayogi Guru Gorakhnath"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Scrollable Text Content */}
          <div className="w-full lg:w-2/3 text-left text-lg leading-relaxed text-black">
            <h1 className="text-4xl font-bold mb-6 text-orange-500">
              {universityLogoData.pageTitle[language]}
            </h1>

            {universityLogoData.paragraphs.map((para, index) => (
              <p key={index} className="mb-4">
                {para.isQuote ? (
                  <span className="block mt-2 italic text-orange-500 whitespace-pre-line">
                    {para[language]}
                  </span>
                ) : (
                  para[language]
                )}
              </p>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default UniversityLogo;
