import type { ModernCardProps } from "../utils/types";

export default function ModernCard({
  children,
  className = "",
  hover = true,
}: ModernCardProps) {
  return (
    <div
      className={`bg-gray-900/50 border border-gray-800 rounded-2xl p-8 ${
        hover
          ? "hover:bg-gray-900/70 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1"
          : ""
      } transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
