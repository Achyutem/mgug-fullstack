import type { ProgramCardProps } from "../utils/types";
import AnimatedCard from "./animatedCard";

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  icon,
  delay = 0,
}) => (
  <AnimatedCard delay={delay} className="h-full">
    <div className="h-full bg-transparent backdrop-blur-md border-2 border-orange-400 rounded-2xl p-6 text-left group transition-all duration-300 hover:border-orange-500 hover:bg-orange-100">
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-xl bg-orange-200 text-orange-500 group-hover:bg-orange-300 transition-colors duration-300 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </AnimatedCard>
);

export default ProgramCard;
