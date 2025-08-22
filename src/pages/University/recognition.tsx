import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { recognitionData } from "@/utils/university";
import { ExternalLink } from "lucide-react";

const RecognitionPage = () => {
  const { language } = UseLanguage();
  const otherLanguage = language === "english" ? "hindi" : "english";

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-4xl font-bold text-center text-orange-500">
            {recognitionData.pageTitle[language]}
          </h1>

          {/* Table Section */}
          <div className="w-full overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-100 border-b-2 border-slate-200">
                <tr>
                  <th className="p-4 text-lg font-semibold text-slate-700">
                    {recognitionData.tableHeadings.body[language]}
                  </th>
                  <th className="p-4 text-lg font-semibold text-slate-700">
                    {recognitionData.tableHeadings.link[language]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {recognitionData.recognitions.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-200 hover:bg-slate-50"
                  >
                    <td className="p-4 align-top">
                      <p className="font-semibold text-slate-800 text-base">
                        {item.name[language]}
                      </p>
                      <p className="text-sm text-slate-500">
                        {item.name[otherLanguage]}
                      </p>
                    </td>
                    <td className="p-4 align-top">
                      <div className="flex flex-col items-start gap-2">
                        {item.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500 text-white font-semibold text-sm rounded-md shadow-sm hover:bg-orange-600 transition-colors duration-300"
                          >
                            {link.text[language]}
                            <ExternalLink size={14} />
                          </a>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default RecognitionPage;
