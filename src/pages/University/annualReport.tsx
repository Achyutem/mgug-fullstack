import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { annualReportsData } from "@/utils/university";
import { Download } from "lucide-react";

const AnnualReportsPage = () => {
  const { language } = UseLanguage();

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-8 max-w-3xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold text-center text-orange-500">
            {annualReportsData.pageTitle[language]}
          </h1>

          {/* Reports List */}
          <div className="w-full space-y-4">
            {annualReportsData.reports.map((report) => (
              <div
                key={report.title}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-slate-200 hover:border-orange-400 transition-all"
              >
                <p className="text-lg font-semibold text-slate-800">
                  {report.title}
                </p>
                <a
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold text-sm rounded-md shadow-sm hover:bg-orange-600 transition-colors duration-300"
                >
                  <Download size={16} />
                  {annualReportsData.linkText[language]}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AnnualReportsPage;
