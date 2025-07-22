import MainLayout from "@/layouts/homeLayout";
import { governingBodyData } from "@/utils/statuoryBodyData";
import { UseLanguage } from "@/context/languageContext";
import RuleItem from "@/components/ruleItem";

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
  </svg>
);

const GoverningBody = () => {
  const { language } = UseLanguage();
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              {governingBodyData.title[language]}
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <ul className="space-y-6 text-lg text-gray-200">
                <RuleItem label="a">
                  {governingBodyData.composition[language].description}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-base">
                    {governingBodyData.composition[language].members.map(
                      (member, index) => (
                        <div key={index} className="flex items-center">
                          <UserIcon />
                          <span>{member}</span>
                        </div>
                      )
                    )}
                  </div>
                  <div className="mt-4 p-3 rounded-md bg-sky-900/50 border-l-4 border-sky-400 text-sky-200 text-base italic">
                    {governingBodyData.composition[language].note}
                  </div>
                </RuleItem>
                {governingBodyData.rules[language].map((rule, index) => (
                  <RuleItem key={index} label={rule.label}>
                    {rule.text}
                    {rule.note && (
                      <div className="mt-4 p-3 rounded-md bg-sky-900/50 border-l-4 border-sky-400 text-sky-200 text-base italic">
                        {rule.note}
                      </div>
                    )}
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

export default GoverningBody;
