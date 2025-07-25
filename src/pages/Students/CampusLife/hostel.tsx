import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { hostelData } from "@/utils/student";
import type { HostelInfo } from "@/utils/types";

const HostelTable = ({
  hostelInfo,
  headers,
  language,
}: {
  hostelInfo: HostelInfo;
  headers: typeof hostelData.tableHeaders;
  language: "hindi" | "english";
}) => (
  <div>
    <h2 className="text-3xl font-bold mb-6 text-orange-400 text-center">
      {hostelInfo.heading[language]}
    </h2>
    <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-gray-200">
          <thead>
            <tr className="bg-orange-500/20 text-orange-400">
              <th className="p-4 font-semibold rounded-tl-xl">
                {headers.particulars[language]}
              </th>
              <th className="p-4 font-semibold">{headers.rooms[language]}</th>
              <th className="p-4 font-semibold rounded-tr-xl">
                {headers.capacity[language]}
              </th>
            </tr>
          </thead>
          <tbody>
            {hostelInfo.tableData.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors last:border-b-0"
              >
                <td className="p-4 font-semibold">
                  {row.particulars[language]}
                </td>
                <td className="p-4">{row.rooms}</td>
                <td className="p-4">{row.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const HostelPage = () => {
  const { language } = UseLanguage();
  const content = hostelData;

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-400 text-center">
            {content.pageTitle[language]}
          </h1>

          {/* Image Section */}
          {/* <div className="w-full max-w-4xl h-64 sm:h-80 md:h-96 rounded-xl shadow-lg overflow-hidden">
            <img
              src={content.image}
              alt={content.pageTitle[language]}
              className="w-full h-full object-cover"
            />
          </div> */}

          {/* Content Section */}
          <div className="w-full max-w-4xl text-left text-lg leading-relaxed text-gray-100">
            {content.introParagraphs.map((para, index) => (
              <p key={index} className="mb-4">
                {para[language]}
              </p>
            ))}

            <h2 className="text-3xl font-bold my-8 text-orange-400">
              {content.facilitiesHeading[language]}
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-200 mb-12">
              {content.facilitiesList.map((facility, index) => (
                <li key={index}>{facility[language]}</li>
              ))}
            </ul>

            <div className="space-y-12">
              <HostelTable
                hostelInfo={content.girlsHostel}
                headers={content.tableHeaders}
                language={language}
              />
              <HostelTable
                hostelInfo={content.boysHostel}
                headers={content.tableHeaders}
                language={language}
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HostelPage;
