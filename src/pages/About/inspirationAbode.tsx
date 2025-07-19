import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { inspirationAbodeData } from "@/utils/aboutData";

const InspirationAbode = () => {
  const { language } = UseLanguage();

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto text-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              {inspirationAbodeData.pageTitle[language]}
            </h1>

            <div className="text-lg leading-relaxed">
              {inspirationAbodeData.paragraphs.map((para, index) => (
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
