import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import { ResearchCommitteeData } from "@/utils/committeeData";
import type { ResearchCommitteeMember } from "@/utils/types";

export default function ResearchCommittee() {
  const { language } = UseLanguage();
  const sections = [
    ResearchCommitteeData.ayurveda,
    ResearchCommitteeData.alliedHealth,
    ResearchCommitteeData.pharma,
  ];

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-6xl text-left">
            <h1 className="text-4xl font-bold mb-12 text-orange-600 text-center">
              {ResearchCommitteeData.title[language]}
            </h1>

            {sections.map((section, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl border-2 border-orange-500 mb-10 bg-trasparent shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-6 text-orange-500">
                  {section.heading[language]}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-black min-w-[800px]">
                    <thead>
                      <tr className="bg-orange-500/20 text-orange-600">
                        <th className="p-4 font-semibold rounded-tl-xl w-20">
                          {section.headers.srNo[language]}
                        </th>
                        <th className="p-4 font-semibold">
                          {section.headers.name[language]}
                        </th>
                        <th className="p-4 font-semibold">
                          {section.headers.designation[language]}
                        </th>
                        <th className="p-4 font-semibold rounded-tr-xl">
                          {section.headers.role[language]}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.members.map(
                        (member: ResearchCommitteeMember) => (
                          <tr
                            key={member.srNo}
                            className="border-b border-slate-200 last:border-b-0 hover:bg-orange-500/10 transition-colors"
                          >
                            <td className="p-4 text-center">{member.srNo}</td>
                            <td className="p-4 font-semibold text-slate-800">
                              {member.name[language]}
                            </td>
                            <td className="p-4">
                              {member.designation[language]}
                            </td>
                            <td className="p-4">{member.role[language]}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
