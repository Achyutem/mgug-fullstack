/* eslint-disable @typescript-eslint/no-explicit-any */
import MainLayout from "@/layouts/homeLayout";
import { UseLanguage } from "@/context/languageContext";
import { admissionGuidelinesData } from "@/utils/admission";
import { Info, AlertTriangle, FileText } from "lucide-react";
import type { ContentBlock } from "@/utils/types";

// A helper component to render different content blocks
const BlockRenderer = ({ block }: { block: ContentBlock }) => {
  const { language } = UseLanguage();
  const content = block.content;

  switch (block.type) {
    case "heading":
      return (
        <h3 className="text-xl font-semibold mt-6 mb-2 text-slate-700">
          {(content as any)[language]}
        </h3>
      );

    case "paragraph":
      // Using 'whitespace-pre-line' to respect newlines in the data string
      return (
        <p className="text-slate-600 whitespace-pre-line">
          {(content as any)[language]}
        </p>
      );

    case "list":
      return (
        <ul className="list-none space-y-3 my-4">
          {(content as any[]).map((item, index) => (
            <li key={index} className="flex items-start">
              <FileText className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-slate-600 whitespace-pre-line">
                {item[language]}
              </span>
            </li>
          ))}
        </ul>
      );

    case "note":
      return (
        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 flex">
          <Info className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
          <p className="text-sm text-blue-800">{(content as any)[language]}</p>
        </div>
      );

    case "important":
      return (
        <div className="my-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 flex">
          <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
          <p className="text-sm text-yellow-800 whitespace-pre-line">
            {(content as any)[language]}
          </p>
        </div>
      );

    default:
      return null;
  }
};

const AdmissionGuidelinesPage = () => {
  const { language } = UseLanguage();

  return (
    <MainLayout>
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center text-orange-500 border-b-2 pb-4 border-orange-200">
            {admissionGuidelinesData.pageTitle[language]}
          </h1>

          {/* Guideline Sections */}
          <div className="space-y-10">
            {admissionGuidelinesData.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold mb-4 text-slate-800 bg-slate-100 p-3 rounded-lg">
                  {section.title[language]}
                </h2>
                <div className="space-y-4">
                  {section.blocks.map((block, blockIndex) => (
                    <BlockRenderer key={blockIndex} block={block} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AdmissionGuidelinesPage;
