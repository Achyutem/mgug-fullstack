import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { ambulanceData } from "@/utils/student";

const AmbulancePage = () => {
  const { language } = UseLanguage();
  const content = ambulanceData;

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              {content.pageTitle[language]}
            </h1>

            {/* Image Section */}
            <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl shadow-lg overflow-hidden mb-10">
              <img
                src="/ambulance.jpg"
                alt="ambulance"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-lg leading-relaxed text-gray-200">
              {content.paragraphs.map((para, index) => (
                <p key={index} className="mb-4">
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

export default AmbulancePage;
