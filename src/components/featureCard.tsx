import type { FeatureCardProps } from "@/utils/types";
import AnimatedCard from "@/components/animatedCard";
import ModernCard from "@/components/modernCards";

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => (
  <AnimatedCard delay={delay}>
    <ModernCard className="h-full group">
      <div className="mb-6 flex justify-center">
        <div className="p-4 rounded-2xl bg-orange-500 text-white group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-4 text-center">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-center">{description}</p>
    </ModernCard>
  </AnimatedCard>
);

export default FeatureCard;
