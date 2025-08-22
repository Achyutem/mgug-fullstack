import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { feePolicyData } from "@/utils/student";

const FeePolicyPage = () => {
  const { language } = UseLanguage();

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center text-orange-500">
            {feePolicyData.pageTitle[language]}
          </h1>

          {/* Policy Sections */}
          <div className="space-y-8">
            {feePolicyData.sections.map((section, index) => (
              <div
                key={index}
                className="p-6 bg-transparent rounded-lg shadow-md border border-orange-600"
              >
                <h2 className="text-2xl font-semibold mb-4 text-slate-800">
                  {section.title[language]}
                </h2>

                {section.mainParagraph && (
                  <p className="mb-4 text-slate-800">
                    {section.mainParagraph[language]}
                  </p>
                )}

                {section.subsections && (
                  <div className="space-y-4 my-4">
                    {section.subsections.map((sub, subIndex) => (
                      <div key={subIndex} className="pl-4">
                        <h3 className="text-lg font-semibold text-slate-800">
                          {sub.title[language]}
                        </h3>
                        <ul className="list-none space-y-2 mt-2">
                          {sub.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-slate-800">
                              {point[language]}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {section.points && (
                  <ul className="list-none space-y-2 my-4 pl-4">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-slate-800">
                        {point[language]}
                      </li>
                    ))}
                  </ul>
                )}

                {section.note && (
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                    <p className="text-sm font-semibold text-yellow-800">
                      {section.note[language]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FeePolicyPage;
