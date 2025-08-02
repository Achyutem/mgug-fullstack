import type { FeatureCardProps } from "@/utils/types";
import AnimatedCard from "@/components/animatedCard";

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => (
  <AnimatedCard delay={delay} className="h-full">
    <div className="h-full bg-white/60 backdrop-blur-md border-2 border-orange-500/50 rounded-2xl p-6 md:p-8 text-center group transition-all duration-300 hover:border-orange-500">
      <div className="mb-6 flex justify-center">
        <div className="p-4 rounded-2xl bg-orange-200 text-orange-500 group-hover:bg-orange-300 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </AnimatedCard>
);

export default FeatureCard;
