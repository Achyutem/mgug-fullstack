import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { inspirationAbodeData } from "@/utils/aboutData";

const InspirationAbode = () => {
  const { language } = UseLanguage();
  const content = inspirationAbodeData;

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto text-gray-100">
        <div className="flex flex-col items-center gap-10">
          {/* Page Title - Now used for the main heading */}
          <h1 className="text-4xl font-bold text-orange-400 text-center">
            {content.pageTitle[language]}
          </h1>

          {/* Image Section */}
          <div className="w-full max-w-4xl h-64 sm:h-80 md:h-96 rounded-xl shadow-lg overflow-hidden">
            <img
              src="/gorakhnathTemple.webp"
              alt="Inspiration Abode"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-full max-w-4xl text-left">
            <div className="text-lg leading-relaxed">
              {content.paragraphs.map((para, index) => (
                <p key={index} className="mb-6">
                  {para[language]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default InspirationAbode;
