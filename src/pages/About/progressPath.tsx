import RuleItem from "@/components/ruleItem";
import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import { progressPathData } from "@/utils/aboutData";

const ProgressPath = () => {
  const { language } = UseLanguage();
  const content = progressPathData;

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              {content.pageTitle[language]}
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <ul className="space-y-6 text-lg text-gray-200">
                {content.points.map((point, index) => (
                  <RuleItem key={index} label={(index + 1).toString()}>
                    <span className="text-base">{point[language]}</span>
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

export default ProgressPath;
