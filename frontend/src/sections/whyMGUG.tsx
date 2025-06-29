import { LuAward, LuMicroscope } from "react-icons/lu";
import { IoLibraryOutline } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { FaBuildingColumns } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import AnimatedCard from "@/components/animatedCard";
import FeatureCard from "@/components/featureCard";
import { UseLanguage } from "@/context/languageContext";
import { HomePage } from "@/utils/mainPageData";

export default function WhyMGUG() {
  const { language } = UseLanguage();
  const t = HomePage.whyMGUG[language];

  return (
    <div>
      <section className="relative z-20 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-orange-400  bg-clip-text text-transparent">
                {t.heading}
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.description}
            </p>
          </AnimatedCard>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<LuAward className="w-8 h-8" />}
              title={t.academicExcellenceTitle}
              description={t.academicExcellenceDescription}
              delay={0}
            />
            <FeatureCard
              icon={<LuMicroscope className="w-8 h-8" />}
              title={t.researchExcellenceTitle}
              description={t.researchExcellenceDescription}
              delay={200}
            />
            <FeatureCard
              icon={<FaBuildingColumns className="w-8 h-8" />}
              title={t.modernInfrastructureTitle}
              description={t.modernInfrastructureDescription}
              delay={400}
            />
            <FeatureCard
              icon={<BsGlobe className="w-8 h-8" />}
              title={t.globalPartnershipsTitle}
              description={t.globalPartnershipsDescription}
              delay={600}
            />
            <FeatureCard
              icon={<TbTargetArrow className="w-8 h-8" />}
              title={t.industryFocusedTitle}
              description={t.industryFocusedDescription}
              delay={800}
            />
            <FeatureCard
              icon={<IoLibraryOutline className="w-8 h-8" />}
              title={t.digitalLearningTitle}
              description={t.digitalLearningDescription}
              delay={1000}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
