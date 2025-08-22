import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { accreditationData } from "@/utils/university";

const AccreditationPage = () => {
  const { language } = UseLanguage();

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-10">
          {/* Content Section */}
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-6 text-orange-500">
              {accreditationData.pageTitle[language]}
            </h1>
            <div className="text-lg leading-relaxed text-black space-y-4">
              <h2 className="text-2xl font-semibold text-slate-700">
                {accreditationData.statusHeading[language]}
              </h2>
              <p className="text-justify">
                {accreditationData.mainParagraph[language]}
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AccreditationPage;
