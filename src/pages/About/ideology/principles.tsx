import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import { principles } from "@/utils/aboutData";
import RuleItem from "@/components/ruleItem";

const Principles = () => {
  const { language } = UseLanguage();
  const content = principles;
  const conceptLabels = ["I", "II", "III", "IV", "V", "VI", "VII"];

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-500 text-center">
              {content.pageTitle[language]}
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-300">
              <ul className="space-y-6 text-lg text-black">
                {content.concepts.map((concept, index) => (
                  <RuleItem key={index} label={conceptLabels[index]}>
                    <span>{concept[language]}</span>
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

export default Principles;
