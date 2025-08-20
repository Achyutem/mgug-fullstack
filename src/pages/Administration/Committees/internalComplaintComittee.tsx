import MainLayout from "@/layouts/homeLayout";
import {
  internalComplaintsCommitteeTitles,
  internalComplaintsCommitteeData,
} from "@/utils/committeeData";
import type { InternalCommitteeMember } from "@/utils/types";
import { UseLanguage } from "@/context/languageContext";

export default function InternalComplaintsCommittee() {
  const { language } = UseLanguage();
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-6xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-500 text-center">
              {internalComplaintsCommitteeTitles.heading[language]}
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-orange-500 bg-transparent shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-black min-w-[800px]">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-600">
                      <th className="p-4 font-semibold rounded-tl-xl w-16">
                        {
                          internalComplaintsCommitteeTitles.headers.srNo[
                            language
                          ]
                        }
                      </th>
                      <th className="p-4 font-semibold">
                        {
                          internalComplaintsCommitteeTitles.headers.name[
                            language
                          ]
                        }
                      </th>
                      <th className="p-4 font-semibold">
                        {
                          internalComplaintsCommitteeTitles.headers.role[
                            language
                          ]
                        }
                      </th>
                      <th className="p-4 font-semibold">
                        {
                          internalComplaintsCommitteeTitles.headers.contactNo[
                            language
                          ]
                        }
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        {
                          internalComplaintsCommitteeTitles.headers.emailId[
                            language
                          ]
                        }
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {internalComplaintsCommitteeData.map(
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      (member: InternalCommitteeMember, _index) => (
                        <tr
                          key={member.srNo}
                          className="border-b border-slate-200 last:border-b-0 hover:bg-orange-500/10 transition-colors"
                        >
                          <td className="p-4 text-center">{member.srNo}</td>
                          <td className="p-4">
                            <span className="font-bold text-slate-800">
                              {member.name[language]}
                            </span>
                          </td>
                          <td className="p-4">{member.role[language]}</td>
                          <td className="p-4">{member.contactNo}</td>
                          <td className="p-4">{member.emailId}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
