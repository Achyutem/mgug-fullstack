import NewCard from "@/components/newCard";
import MainLayout from "@/layouts/homeLayout";
import { ScholarshipLinksData } from "@/utils/studentHelp";

export default function Scholarship() {
  return (
    <MainLayout>
      <div className="min-h-screen py-16 px-4">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            <span className="bg-orange-500 bg-clip-text text-transparent">
              University Scholarships
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover a variety of scholarship opportunities designed to support
            students in achieving their academic goals. Learn about eligibility,
            application tips, success stories, and guidance to help you secure
            funding for your education.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {ScholarshipLinksData.map((link) => (
              <NewCard
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
