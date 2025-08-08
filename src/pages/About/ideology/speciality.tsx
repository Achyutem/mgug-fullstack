import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import { specialtyData } from "@/utils/aboutData";
import RuleItem from "@/components/ruleItem";

const Specialty = () => {
  const { language } = UseLanguage();
  const content = specialtyData;
  const specialtyLabels = ["I", "II", "III", "IV", "V"];

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
                {content.specialties.map((specialty, index) => (
                  <RuleItem key={index} label={specialtyLabels[index]}>
                    <span>{specialty[language]}</span>
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

export default Specialty;
