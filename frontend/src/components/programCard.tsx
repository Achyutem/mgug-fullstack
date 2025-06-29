import type { ProgramCardProps } from "../utils/types";
import AnimatedCard from "./animatedCard";
import ModernCard from "./modernCards";

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  icon,
  delay = 0,
}) => (
  <AnimatedCard delay={delay}>
    <ModernCard className="group">
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-xl bg-orange-600/20 text-orange-400 group-hover:bg-orange-600/30 transition-all duration-300 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </ModernCard>
  </AnimatedCard>
);

export default ProgramCard;
