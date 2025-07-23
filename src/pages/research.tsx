import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { researchData } from "@/utils/aboutData";

const ResearchPage = () => {
  const { language } = UseLanguage();
  const content = researchData;

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              {content.pageTitle[language]}
            </h1>
            <div className="text-lg leading-relaxed text-gray-200 mb-12">
              {content.introParagraphs.map((para, index) => (
                <p key={index} className="mb-4">
                  {para[language]}
                </p>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-8 text-orange-400 text-center">
              {content.facilitiesHeading[language]}
            </h2>

            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-400">
                      <th className="p-4 w-20 font-semibold rounded-tl-xl">
                        {content.tableHeaders.sNo[language]}
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        {content.tableHeaders.equipment[language]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.equipmentList.map((item, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors"
                      >
                        <td className="p-4">{idx + 1}</td>
                        <td className="p-4">{item[language]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ResearchPage;
