import { FaArrowRight } from "react-icons/fa";
import AnimatedCard from "@/components/animatedCard";
import ModernCard from "@/components/modernCards";
import { UseLanguage } from "@/context/languageContext";
import { HomePage } from "@/utils/mainPageData";

export default function Admission() {
  const { language } = UseLanguage();
  const t = HomePage.admission[language];

  return (
    <div>
      <section id="admissions" className="relative z-20 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedCard>
            <ModernCard className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
                {t.heading}
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                {t.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="https://admission.mgug.ac.in/">
                  <button className="px-6 sm:px-12 py-4 bg-orange-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 flex items-center justify-center w-auto">
                    {t.applyButton}
                    <FaArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <a href="https://admission.mgug.ac.in/doc/Prospectus_2025_Final_21-03-2025_Final.pdf">
                  <button className="px-6 sm:px-12 py-4 bg-transparent text-gray-700 border border-orange-500 rounded-xl font-semibold text-lg hover:text-orange-500 hover:bg-orange-50 hover:scale-105 transition-all duration-300 w-auto">
                    {t.brochureButton}
                  </button>
                </a>
              </div>
            </ModernCard>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}
