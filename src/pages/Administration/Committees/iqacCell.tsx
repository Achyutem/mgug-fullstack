import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import { iqacData, iqacTitles } from "@/utils/admission";
import type { IQACMember } from "@/utils/types";

const IQACPage = () => {
  const { language } = UseLanguage();
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-500 text-center">
              {iqacTitles.heading[language]}
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-orange-500">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-black">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-500">
                      <th className="p-4 font-semibold rounded-tl-xl">
                        {iqacTitles.headers.srNo[language]}
                      </th>
                      <th className="p-4 font-semibold">
                        {iqacTitles.headers.nameDesignation[language]}
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        {iqacTitles.headers.role[language]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {iqacData.map((member: IQACMember) => (
                      <tr
                        key={member.srNo}
                        className={`border-b border-slate-300 hover:bg-orange-200/50 transition-colors ${
                          member.srNo === iqacData.length
                            ? "last:border-b-0"
                            : ""
                        }`}
                      >
                        <td
                          className={`p-4 ${
                            member.srNo === iqacData.length
                              ? "rounded-bl-xl"
                              : ""
                          }`}
                        >
                          {member.srNo}
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-orange-500">
                            {member.name[language]}
                          </span>
                          {member.designation && (
                            <>
                              <br />
                              <span className="font-medium text-sm text-gray-800">
                                {member.designation[language]}
                              </span>
                            </>
                          )}
                        </td>
                        <td
                          className={`p-4 ${
                            member.srNo === iqacData.length
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
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default IQACPage;
