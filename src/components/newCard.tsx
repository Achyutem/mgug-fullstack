import type { NewCardProps } from "@/utils/types";

const NewCard = ({ icon, title, href }: NewCardProps) => {
  return (
    <a
      href={href}
      className="group relative bg-orange-500/10 backdrop-blur-lg border border-orange-600 rounded-2xl p-6 text-center shadow-sm transition-all duration-300 ease-in-out hover:shadow-orange-500/20 hover:scale-105 hover:border-orange-500 hover:-translate-y-2 flex flex-col items-center justify-center"
    >
      <div className="text-4xl text-orange-600 transition-colors duration-300 group-hover:text-orange-500">
        {icon}
      </div>
      <h4 className="mt-4 text-base font-semibold leading-tight text-slate-800 transition-colors duration-300 group-hover:text-orange-600">
        {title}
      </h4>
    </a>
  );
};

export default NewCard;
