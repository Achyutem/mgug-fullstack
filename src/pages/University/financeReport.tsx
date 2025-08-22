import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { auditReportsData } from "@/utils/university";
import { Download } from "lucide-react";

const FinancePage = () => {
  const { language } = UseLanguage();

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-8 max-w-3xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold text-center text-orange-500">
            {auditReportsData.pageTitle[language]}
          </h1>
          <h2 className="text-3xl font-semibold text-center text-slate-700">
            {auditReportsData.sectionHeading[language]}
          </h2>

          {/* Reports List */}
          <div className="w-full mt-4">
            {/* List Header */}
            <div className="flex items-center justify-between p-3 bg-slate-100 rounded-t-lg border-b-2 border-slate-200">
              <p className="w-1/2 text-lg font-semibold text-slate-700">
                {auditReportsData.tableHeadings.year[language]}
              </p>
              <p className="w-1/2 text-lg font-semibold text-slate-700 text-right">
                {auditReportsData.tableHeadings.link[language]}
              </p>
            </div>

            {/* List Items */}
            <div className="space-y-2">
              {auditReportsData.reports.map((report) => (
                <div
                  key={report.financialYear}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-slate-200 hover:border-orange-300 transition-all"
                >
                  <p className="text-lg font-medium text-slate-800">
                    {report.financialYear}
                  </p>
                  <a
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold text-sm rounded-md shadow-sm hover:bg-orange-600 transition-colors duration-300"
                  >
                    <Download size={16} />
                    {language === "english" ? "Download" : "डाउनलोड"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FinancePage;
