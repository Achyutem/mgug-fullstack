import { FaStethoscope, FaAward } from "react-icons/fa";
import { LuHeartPulse } from "react-icons/lu";
import { FaBuildingColumns } from "react-icons/fa6";
import AnimatedCard from "@/components/animatedCard";
import ProgramCard from "@/components/programCard";
import { UseLanguage } from "@/context/languageContext";
import { HomePage } from "@/utils/mainPageData";

export default function Academic() {
  const { language } = UseLanguage();
  const t = HomePage.academic[language];

  return (
    <div>
      <section id="programs" className="relative z-20 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedCard className="text-center mb-16">
            {/* CHANGED: Text color for main heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              <span className="bg-orange-500 bg-clip-text text-transparent">
                {t.heading}
              </span>
            </h2>
            {/* CHANGED: Text color for description */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.description}
            </p>
          </AnimatedCard>
          <div className="grid md:grid-cols-2 gap-8">
            <ProgramCard
              title={t.medicalSurgeryTitle}
              description={t.medicalSurgeryDescription}
              icon={<FaStethoscope className="w-6 h-6" />}
              delay={0}
            />
            <ProgramCard
              title={t.managementCommerceTitle}
              description={t.managementCommerceDescription}
              icon={<FaBuildingColumns className="w-6 h-6" />}
              delay={200}
            />
            <ProgramCard
              title={t.alliedHealthTitle}
              description={t.alliedHealthDescription}
              icon={<LuHeartPulse className="w-6 h-6" />}
              delay={400}
            />
            <ProgramCard
              title={t.nursingBiomedicalTitle}
              description={t.nursingBiomedicalDescription}
              icon={<FaAward className="w-6 h-6" />}
              delay={600}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
