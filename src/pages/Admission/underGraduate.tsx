import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import { underGraduateContent } from "@/utils/admission";
import RuleItem from "@/components/ruleItem";

const UnderGraduate = () => {
  const { language } = UseLanguage();
  const t = underGraduateContent;
  const programs = Object.values(t.programs);

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center uppercase">
              {t.heading[language]}
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <ul className="space-y-6 text-lg text-gray-200">
                {programs.map((program, index) => (
                  <RuleItem key={index} label={String.fromCharCode(97 + index)}>
                    <span className="font-bold text-orange-400">
                      {program.name[language]}
                    </span>
                    <br />
                    <span className="font-light">
                      {program.description[language]}
                    </span>
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

export default UnderGraduate;
