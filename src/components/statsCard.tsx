import type { StatsCardProps } from "../utils/types";
import AnimatedCard from "./animatedCard";

export default function StatsCard({
  number,
  label,
  icon,
  delay = 0,
}: StatsCardProps) {
  return (
    <AnimatedCard delay={delay}>
      <div className="bg-transparent backdrop-blur-md border-2 border-orange-400 rounded-2xl p-6 text-center group transition-all duration-300 hover:border-orange-500 hover:bg-orange-100">
        <div className="mb-4 flex justify-center">
          <div className="p-3 rounded-full bg-orange-200 text-orange-500 group-hover:bg-orange-300 transition-colors duration-300">
            {icon}
          </div>
        </div>
        <div className="text-3xl font-bold text-slate-800 mb-2">{number}</div>
        <div className="text-gray-500 text-sm uppercase tracking-wide">
          {label}
        </div>
      </div>
    </AnimatedCard>
  );
}
