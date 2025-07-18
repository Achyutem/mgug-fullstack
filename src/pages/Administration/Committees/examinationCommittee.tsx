import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import { examinationCommitteeContent } from "@/utils/committeeData";

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

interface RuleItemProps {
  label: string;
  children: React.ReactNode;
}

const RuleItem = ({ label, children }: RuleItemProps) => (
  <li className="flex items-start">
    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-500/20 text-orange-400 font-semibold flex items-center justify-center mr-4 mt-1">
      {label}
    </div>
    <div className="flex-1">{children}</div>
  </li>
);

const ExaminationCommittee = () => {
  const { language } = UseLanguage();
  const t = examinationCommitteeContent[language];

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center uppercase">
              {t.heading}
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <ul className="space-y-6 text-lg text-gray-200">
                <RuleItem label="a">
                  {t.rules.a.description}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-base">
                    {t.rules.a.committeeMembers.map((member, index) => (
                      <div key={index} className="flex items-center">
                        <UserIcon />
                        <span>
                          {member.name[language]}
                          {member.designation[language] && (
                            <>
                              <br />
                              <span className="font-light text-sm">
                                {member.designation[language]}
                              </span>
                            </>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </RuleItem>

                <RuleItem label="b">{t.rules.b}</RuleItem>

                <RuleItem label="c">{t.rules.c}</RuleItem>

                <RuleItem label="d">{t.rules.d}</RuleItem>

                <RuleItem label="e">{t.rules.e}</RuleItem>

                <RuleItem label="f">{t.rules.f}</RuleItem>

                <RuleItem label="g">{t.rules.g}</RuleItem>

                <RuleItem label="h">
                  {t.rules.h.description}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-base">
                    {t.rules.h.boards.map((board, index) => (
                      <div key={index} className="flex items-center">
                        <UserIcon />
                        <span>{board.name[language]}</span>
                      </div>
                    ))}
                  </div>
                </RuleItem>

                <RuleItem label="i">{t.rules.i}</RuleItem>

                <RuleItem label="j">{t.rules.j}</RuleItem>

                <RuleItem label="k">{t.rules.k}</RuleItem>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ExaminationCommittee;
