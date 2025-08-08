import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { academicCalendarData } from "@/utils/student";

const AcademicCalendar = () => {
  const { language } = UseLanguage();
  const content = academicCalendarData;

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-500 text-center">
              {content.pageTitle[language]}
            </h1>

            <div className="p-6 sm:p-8 rounded-xl border border-orange-500">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-black">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-500">
                      <th className="p-4 font-semibold rounded-tl-xl">
                        {content.tableHeaders.session[language]}
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">
                        {content.tableHeaders.link[language]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.items.map((item, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-slate-300 hover:bg-orange-200 transition-colors"
                      >
                        <td className="p-4">{item.year}</td>
                        <td className="p-4">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm text-orange-600 hover:text-orange-700 underline"
                          >
                            {content.linkText[language]}
                          </a>
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

export default AcademicCalendar;
