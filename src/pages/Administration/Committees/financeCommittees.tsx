import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import {
  financeCommitteeData,
  financeCommitteeTitles,
} from "@/utils/committeeData";
import type { CommitteeMember } from "@/utils/types";

const FinanceCommittee = () => {
  const { language } = UseLanguage();
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-500 text-center">
              {financeCommitteeTitles.heading[language]}
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-black">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-500">
                      <th className="p-4 font-semibold rounded-tl-xl">
                        {financeCommitteeTitles.headers.srNo[language]}
                      </th>
                      <th className="p-4 font-semibold">
                        {
                          financeCommitteeTitles.headers.nameDesignation[
                            language
                          ]
                        }
                      </th>
                      <th className="p-4 font-semibold">
                        {financeCommitteeTitles.headers.role[language]}
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        {financeCommitteeTitles.headers.status[language]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {financeCommitteeData.map((member: CommitteeMember) => (
                      <tr
                        key={member.srNo}
                        className={`border-b border-slate-700 hover:bg-gray-700/50 transition-colors ${
                          member.srNo === financeCommitteeData.length
                            ? "last:border-b-0"
                            : ""
                        }`}
                      >
                        <td
                          className={`p-4 ${
                            member.srNo === financeCommitteeData.length
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
                          {member.designation[language] && (
                            <>
                              <br />
                              <span className="font-medium text-sm text-gray-800">
                                {member.designation[language]}
                              </span>
                            </>
                          )}
                        </td>
                        <td className="p-4">{member.role[language]}</td>
                        <td
                          className={`p-4 ${
                            member.srNo === financeCommitteeData.length
                              ? "rounded-br-xl"
                              : ""
                          }`}
                        >
                          {member.status[language]}
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

export default FinanceCommittee;
