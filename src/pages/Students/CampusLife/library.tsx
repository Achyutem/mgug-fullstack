import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { libraryData } from "@/utils/student";

const LibraryPage = () => {
  const { language } = UseLanguage();
  const content = libraryData;

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-500 text-center">
              {content.pageTitle[language]}
            </h1>
            <h2 className="text-3xl font-bold mb-6 text-orange-500">
              {content.heading[language]}
            </h2>
            <div className="text-lg leading-relaxed text-black mb-12">
              {content.introParagraphs.map((para, index) => (
                <p key={index} className="mb-4">
                  {para[language]}
                </p>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6 text-orange-500">
              {content.servicesHeading[language]}
            </h2>
            <div className="space-y-6 text-lg text-black">
              {content.services.map((service, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-orange-500">
                    {service.heading[language]}
                  </h3>
                  <p className="text-black mt-1">
                    {service.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default LibraryPage;
