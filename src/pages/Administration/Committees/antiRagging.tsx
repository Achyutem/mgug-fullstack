import MainLayout from "@/layouts/homeLayout";
import { FaPhoneAlt } from "react-icons/fa";
import {
  IoAlertCircleOutline,
  IoGlobeOutline,
  IoMailOpenOutline,
} from "react-icons/io5";
import type { Title } from "@/utils/types";
import { UseLanguage } from "@/context/languageContext";
import {
  AntiRaggingcommittee,
  antiRaggingContent,
  AntiRaggingsquad,
} from "@/utils/committeeData";

const AntiRagging = () => {
  const { language } = UseLanguage();
  const t = antiRaggingContent[language];

  return (
    <MainLayout>
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-black">
        {/* Top Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src="/anti-ragging.jpg"
            alt={
              language === "hindi"
                ? "रैगिंग विरोधी जागरूकता"
                : "Anti-Ragging Awareness"
            }
            width={1200}
            height={400}
            className="w-full object-cover"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-orange-500 mb-4 text-center uppercase">
          {t.heading}
        </h1>

        {/* Definition Section */}
        <div className="bg-red-900/30 border-l-4 border-red-500 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-orange-300 flex items-center gap-2">
            <IoAlertCircleOutline className="text-red-400" /> {t.whatIsRagging}
          </h2>
          <p>{t.raggingDefinition}</p>
        </div>

        {/* Guidelines & UGC Info */}
        <div className="space-y-6 mb-6">
          <p>{t.reportInstruction}</p>
          <ul className="list-disc list-inside space-y-1 pl-4 text-sm md:text-base">
            <li>{t.punishments.verbal}</li>
            <li>{t.punishments.severeVerbal}</li>
            <li>{t.punishments.physical}</li>
            <li>{t.punishments.sexual}</li>
          </ul>
        </div>

        {/* National Helpline */}
        <div className="bg-sky-800/40 p-4 rounded-lg border border-sky-600 mb-6">
          <h2 className="text-lg font-semibold mb-2 text-sky-300">
            {t.helpline.title}
          </h2>
          <p>
            <FaPhoneAlt className="inline w-4 h-4 mr-2 text-sky-300" />{" "}
            {t.helpline.tollFree}
          </p>
          <p>
            <IoMailOpenOutline className="inline w-4 h-4 mr-2 text-sky-300" />{" "}
            Email:{" "}
            <a
              href="mailto:helpline@antiragging.in"
              className="underline text-sky-200"
            >
              {t.helpline.email}
            </a>
          </p>
          <p>
            <IoGlobeOutline className="inline w-4 h-4 mr-2 text-sky-300" />
            Website:{" "}
            <a
              href="https://www.antiragging.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-sky-200"
            >
              {t.helpline.website}
            </a>
          </p>
        </div>

        {/* Report Button */}
        <div className="text-center mb-10">
          <a href="https://mgug.ac.in/academics/anti_rag_form.php">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow transition">
              {t.reportButton}
            </button>
          </a>
        </div>

        {/* Anti-Ragging Committee Table */}
        <h2 className="text-2xl font-semibold mb-2 text-orange-300">
          {t.committeeHeading}
        </h2>
        <TableList data={AntiRaggingcommittee} />

        {/* Anti-Ragging Squad Table */}
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-orange-300">
          {t.squadHeading}
        </h2>
        <TableList data={AntiRaggingsquad} />
      </section>
    </MainLayout>
  );
};

export default AntiRagging;

// Reusable table component
const TableList = ({
  data,
}: {
  data: Array<{ no: number; name: Title; designation: Title; phone: string }>;
}) => {
  const { language } = UseLanguage();

  return (
    <div className="overflow-x-auto rounded-lg border border-slate-700 mb-8">
      <table className="min-w-full text-left">
        <thead className="bg-orange-500/20 text-orange-500">
          <tr>
            <th className="p-4">
              {language === "hindi" ? "क्रमांक" : "S. No."}
            </th>
            <th className="p-4">{language === "hindi" ? "नाम" : "Name"}</th>
            <th className="p-4">
              {language === "hindi" ? "पदनाम" : "Designation"}
            </th>
            <th className="p-4">
              {language === "hindi" ? "संपर्क" : "Contact"}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ no, name, designation, phone }) => (
            <tr
              key={no}
              className="border-b border-slate-700 hover:bg-slate-800 transition"
            >
              <td className="p-4">{no}</td>
              <td className="p-4">{name[language]}</td>
              <td className="p-4">{designation[language]}</td>
              <td className="p-4 flex items-center gap-2">
                <FaPhoneAlt className="w-4 h-4 text-sky-300" />
                <span>{phone}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
