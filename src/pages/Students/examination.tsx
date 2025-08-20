import React from "react";
import { CalendarDays, FileText, BookOpenCheck } from "lucide-react";
import MainLayout from "@/layouts/homeLayout";

const examinationLinksData = [
  {
    title: "Schedule",
    href: "/schedule",
    icon: <CalendarDays size={40} />,
  },
  {
    title: "Result",
    href: "/result",
    icon: <FileText size={40} />,
  },
  {
    title: "Examination Manual",
    href: "/examination-manual",
    icon: <BookOpenCheck size={40} />,
  },
];

type ModernCardProps = {
  icon: React.ReactNode;
  title: string;
  href: string;
};

const ModernCard = ({ icon, title, href }: ModernCardProps) => {
  return (
    <a
      href={href}
      className="group relative bg-orange-500/10 backdrop-blur-lg border border-orange-600 rounded-2xl p-6 text-center shadow-sm transition-all duration-300 ease-in-out hover:shadow-orange-500/20 hover:border-orange-400 hover:-translate-y-2 flex flex-col items-center justify-center"
    >
      <div className="text-4xl text-orange-600 transition-colors duration-300 group-hover:text-orange-500">
        {icon}
      </div>
      <h4 className="mt-4 text-base font-semibold leading-tight text-slate-800 transition-colors duration-300 group-hover:text-orange-600">
        {title}
      </h4>
    </a>
  );
};

export default function Examination() {
  return (
    <MainLayout>
      <div className="min-h-screen py-16 px-4">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            <span className="bg-orange-500 bg-clip-text text-transparent">
              Examination Hub
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find all examination-related information here, from schedules and
            results to official guidelines.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {examinationLinksData.map((link) => (
              <ModernCard
                key={link.title}
                href={link.href}
                title={link.title}
                icon={link.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
