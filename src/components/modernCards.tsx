import type { ModernCardProps } from "../utils/types";

export default function ModernCard({
  children,
  className = "",
}: ModernCardProps) {
  return (
    <div
      className={`bg-white/60 backdrop-blur-md border-2 hover:border-orange-500 border-orange-500/50 rounded-2xl p-8 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
