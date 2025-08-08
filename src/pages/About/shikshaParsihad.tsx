import RuleItem from "@/components/ruleItem";
import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import { shikshaParishadData } from "@/utils/aboutData";

const ShikshaParishadCharter = () => {
  const { language } = UseLanguage();
  const content = shikshaParishadData;

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-4 text-orange-500 text-center">
              {content.pageTitle[language]}
            </h1>
            <p className="text-center text-black mb-8 max-w-3xl mx-auto">
              {content.subtitle[language]}
            </p>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-300">
              <ul className="space-y-6 text-lg text-black">
                {content.charterPoints.map((point, index) => (
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

export default ShikshaParishadCharter;
