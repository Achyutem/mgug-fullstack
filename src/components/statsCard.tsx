import type { StatsCardProps } from "../utils/types";
import AnimatedCard from "./animatedCard";
import ModernCard from "./modernCards";

export default function StatsCard({
  number,
  label,
  icon,
  delay = 0,
}: StatsCardProps) {
  return (
    <AnimatedCard delay={delay}>
      <ModernCard className="text-center group">
        <div className="mb-4 flex justify-center">
          <div className="p-3 rounded-full bg-orange-600/20 text-orange-400 group-hover:bg-orange-600/30 group-hover:text-orange-300 transition-all duration-300">
            {icon}
          </div>
        </div>
        <div className="text-3xl font-bold text-white mb-2">{number}</div>
        <div className="text-gray-400 text-sm uppercase tracking-wide">
          {label}
        </div>
      </ModernCard>
    </AnimatedCard>
  );
}
