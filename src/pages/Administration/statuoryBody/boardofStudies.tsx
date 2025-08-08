import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { boardOfStudiesData } from "@/utils/statuoryBodyData";

const BoardOfStudies = () => {
  const { language } = UseLanguage();
  const sections = [
    boardOfStudiesData.ayurveda,
    boardOfStudiesData.medicalMicrobiology,
    boardOfStudiesData.medicalBiochemistry,
    boardOfStudiesData.biotechnology,
  ];

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-500 text-center">
              {boardOfStudiesData.title[language]}
            </h1>

            {sections.map((section, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-xl border border-orange-500 mb-8"
              >
                <h2 className="text-2xl font-semibold mb-4 text-orange-500">
                  {section.heading[language]}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-black">
                    <thead>
                      <tr className="bg-orange-500/20 text-orange-500">
                        <th className="p-4 font-semibold rounded-tl-xl">
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
                      {section.members.map((member, idx) => (
                        <tr
                          key={member.srNo}
                          className={`border-b border-slate-300 hover:bg-orange-200 transition-colors ${
                            idx === section.members.length - 1
                              ? "border-b-0"
                              : ""
                          }`}
                        >
                          <td
                            className={`p-4 ${
                              idx === section.members.length - 1
                                ? "rounded-bl-xl"
                                : ""
                            }`}
                          >
                            {member.srNo}
                          </td>
                          <td className="p-4">{member.name[language]}</td>
                          <td className="p-4">
                            {member.designation[language]}
                          </td>
                          <td
                            className={`p-4 ${
                              idx === section.members.length - 1
                                ? "rounded-br-xl"
                                : ""
                            }`}
                          >
                            {member.role[language]}
                          </td>
                        </tr>
                      ))}
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
};

export default BoardOfStudies;
