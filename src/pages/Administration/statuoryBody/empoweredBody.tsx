import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { empoweredBodyData } from "@/utils/statuoryBodyData";

const EmpoweredBody = () => {
  const { language } = UseLanguage();
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Content Section */}
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-6 text-orange-500 text-center">
              {empoweredBodyData.title[language]}
            </h1>
            <div className="text-lg leading-relaxed text-black">
              <p className="mb-6">{empoweredBodyData.description[language]}</p>

              <ul className="list-disc list-inside space-y-4">
                <li>{empoweredBodyData.description[language]}</li>
                <li>{empoweredBodyData.description[language]}</li>
                <li>{empoweredBodyData.description[language]}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default EmpoweredBody;
