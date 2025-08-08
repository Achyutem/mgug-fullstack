import type { ModernCardProps } from "../utils/types";

export default function ModernCard({
  children,
  className = "",
}: ModernCardProps) {
  return (
    <div
      className={`bg-transparent backdrop-blur-md border-2 hover:border-orange-500 border-orange-400 hover:bg-orange-100 rounded-2xl p-8 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
