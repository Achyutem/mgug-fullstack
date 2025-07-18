import { UseLanguage } from "@/context/languageContext";
import MainLayout from "@/layouts/homeLayout";
import { feeStructureTitles, feeStructureData } from "@/utils/admission";
import type { FeeStructureMember } from "@/utils/types";

const FeeStructure = () => {
  const { language } = UseLanguage();
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              {feeStructureTitles.heading[language]}
            </h1>
            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-400">
                      <th className="p-4 font-semibold rounded-tl-xl">
                        {feeStructureTitles.tableHeaders.srNo[language]}
                      </th>
                      <th className="p-4 font-semibold">
                        {feeStructureTitles.tableHeaders.program[language]}
                      </th>
                      <th className="p-4 font-semibold">
                        {feeStructureTitles.tableHeaders.seats[language]}
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        {feeStructureTitles.tableHeaders.fees[language]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructureData.map((program: FeeStructureMember) => (
                      <tr
                        key={program.srNo}
                        className={`border-b border-slate-700 hover:bg-gray-700/50 transition-colors ${
                          program.srNo === feeStructureData.length
                            ? "last:border-b-0"
                            : ""
                        }`}
                      >
                        <td
                          className={`p-4 ${
                            program.srNo === feeStructureData.length
                              ? "rounded-bl-xl"
                              : ""
                          }`}
                        >
                          {program.srNo}
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-orange-400">
                            {program.name[language]}
                          </span>
                        </td>
                        <td className="p-4">{program.seats}</td>
                        <td
                          className={`p-4 ${
                            program.srNo === feeStructureData.length
                              ? "rounded-br-xl"
                              : ""
                          }`}
                        >
                          {program.fees[language]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                {feeStructureTitles.note[language]}
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FeeStructure;
