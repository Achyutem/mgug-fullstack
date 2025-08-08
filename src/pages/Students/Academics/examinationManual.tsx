import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { examinationManualData } from "@/utils/student";
import RuleItem from "@/components/ruleItem";

const ExaminationManual = () => {
  const { language } = UseLanguage();
  const content = examinationManualData;

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-500 text-center">
              {content.pageTitle[language]}
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-orange-500">
              <ul className="space-y-6 text-lg text-black">
                {content.sections.map((section, index) => (
                  <RuleItem key={index} label={String.fromCharCode(65 + index)}>
                    <strong>{section.heading[language]}</strong>
                    {section.intro && (
                      <p className="mt-2 text-base">
                        {section.intro[language]}
                      </p>
                    )}
                    <ul className="list-disc pl-6 mt-2 space-y-2 text-base">
                      {section.points.map((point, pIndex) => (
                        <li key={pIndex}>{point[language]}</li>
                      ))}
                    </ul>
                  </RuleItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ExaminationManual;
