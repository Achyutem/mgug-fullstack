import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { EOCPageTitles, PdfItem } from "@/utils/types";

const equalOpportunityCellData: PdfItem[] = [
  {
    title: {
      hindi: "समान अवसर प्रकोष्ठ और सामाजिक-आर्थिक रूप से वंचित समूह (एसईडीजी)",
      english:
        "Equal Opportunity Cell & Socio-Economically Disadvantaged Groups (SEDGs)",
    },
    pdf_url: "https://mgug.ac.in/PDF/Eoc.pdf",
  },
];

const pageTitles: EOCPageTitles = {
  heading: {
    hindi: "समान अवसर प्रकोष्ठ",
    english: "Equal Opportunity Cell",
  },
  headers: {
    title: { hindi: "शीर्षक", english: "Title" },
    link: { hindi: "लिंक", english: "Link" },
  },
};

export default function EqualOpportunityCellPage() {
  const { language } = UseLanguage();

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">
          <span className="bg-orange-500 bg-clip-text text-transparent">
            {pageTitles.heading[language]}
          </span>
        </h1>

        <div className="p-6 sm:p-8 rounded-2xl border-2 border-orange-500 bg-transparent backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-slate-800">
              <thead>
                <tr className="bg-orange-500/20 text-orange-600">
                  <th className="p-4 font-semibold rounded-tl-xl">
                    {pageTitles.headers.title[language]}
                  </th>
                  <th className="p-4 font-semibold rounded-tr-xl text-center w-40">
                    {pageTitles.headers.link[language]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {equalOpportunityCellData.map((item) => (
                  <tr
                    key={item.pdf_url}
                    className="border-b border-gray-200 last:border-b-0 hover:bg-orange-500/10 transition-colors"
                  >
                    <td className="p-4 font-medium">{item.title[language]}</td>
                    <td className="p-4 text-center">
                      <a
                        href={item.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button
                          variant="outline"
                          className="flex items-center gap-2 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                        >
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </Button>
                      </a>
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
}
