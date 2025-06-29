import MainLayout from "@/layouts/homeLayout";

const academicData = [
  {
    year: "2024-2025",
    link: "https://mgug.ac.in/academics/Academic_Calendar_24-25.pdf",
  },
  {
    year: "2025-2026",
    link: "https://mgug.ac.in/academics/Academic_Calendar_25-26.pdf",
  },
];

export default function AcademicCalendar() {
  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl text-left">
            <h1 className="text-4xl font-bold mb-8 text-orange-400 text-center">
              Academic Calendar
            </h1>

            <div className="p-6 sm:p-8 rounded-xl border border-slate-700">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200">
                  <thead>
                    <tr className="bg-orange-500/20 text-orange-400">
                      <th className="p-4 font-semibold rounded-tl-xl">
                        Academic Session
                      </th>
                      <th className="p-4 font-semibold rounded-tr-xl">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {academicData.map((item, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-slate-700 hover:bg-gray-700/50 transition-colors"
                      >
                        <td className="p-4">{item.year}</td>
                        <td className="p-4">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm text-cyan-400 hover:text-blue-400 underline"
                          >
                            View
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
}
