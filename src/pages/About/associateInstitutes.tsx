import RuleItem from "@/components/ruleItem";
import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import { institutionsData } from "@/utils/aboutData";

const InstitutionsPage = () => {
  const { language } = UseLanguage();
  const content = institutionsData;

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
                {content.institutions.map((item, index) => (
                  <RuleItem key={index} label={(index + 1).toString()}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-500 transition-colors"
                    >
                      {item.name[language]}
                    </a>
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

export default InstitutionsPage;
