import MainLayout from "@/layouts/homeLayout";
import { IoMailOpenOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import {
  sgrcCommitteeTitles,
  sgrcCommitteeData,
  ombudspersonData,
} from "@/utils/committeeData";
import { UseLanguage } from "@/context/languageContext";

const SGRCAndOmbudsperson = () => {
  const { language } = UseLanguage();

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-500 text-center">
              {sgrcCommitteeTitles.heading[language]}
            </h1>

            {/* Table */}
            <div className="p-6 sm:p-8 rounded-xl border border-orange-500">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-black">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-500">
                      <th className="p-4 font-semibold rounded-tl-xl">
                        {sgrcCommitteeTitles.headers.srNo[language]}
                      </th>
                      <th className="p-4 font-semibold">
                        {sgrcCommitteeTitles.headers.name[language]}
                      </th>
                      <th className="p-4 font-semibold">
                        {sgrcCommitteeTitles.headers.designation[language]}
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        {sgrcCommitteeTitles.headers.role[language]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sgrcCommitteeData.map(
                      ({ srNo, name, designation, role }) => (
                        <tr
                          key={srNo}
                          className="border-b border-slate-300 hover:bg-orange-200 transition-colors"
                        >
                          <td className="p-4">{srNo}</td>
                          <td className="p-4">{name[language]}</td>
                          <td className="p-4">{designation[language]}</td>
                          <td className="p-4">{role[language]}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ombudsperson Section */}
            <div className="mt-10 bg-sky-200 border-l-4 border-sky-400 p-6 rounded-lg text-base text-sky-200">
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                {ombudspersonData.post[language]}
              </h2>
              <h2 className="text-xl font-semibold text-sky-600 mb-2">
                {ombudspersonData.name[language]}
              </h2>
              <p className="mb-1 text-sky-600">
                {ombudspersonData.designation[language]}
              </p>
              <p className="mb-1 flex items-center gap-2">
                <FiPhone size={18} className="text-sky-600" />
                <a
                  href={`tel:${ombudspersonData.contact.phone}`}
                  className="text-sky-600 font-bold hover:underline"
                >
                  {ombudspersonData.contact.phone}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <IoMailOpenOutline size={18} className="text-sky-600" />
                <a
                  href={`mailto:${ombudspersonData.contact.email}`}
                  className="underline text-sky-600"
                >
                  {ombudspersonData.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SGRCAndOmbudsperson;
