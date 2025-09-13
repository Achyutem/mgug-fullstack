import type { Leader } from "@/utils/types";
import { FaQuoteLeft } from "react-icons/fa";

interface InspirationCardProps {
    inspiration: Leader;
    language: "hindi" | "english";
}

const InspirationCard: React.FC<InspirationCardProps> = ({
    inspiration,
    language,
}) => {
    return (
        <div className="flex-shrink-0 w-[90%] sm:w-80 md:w-96 snap-center bg-transparent backdrop-blur-md border-2 hover:border-orange-500 border-orange-400 hover:bg-orange-100 rounded-2xl p-6">
            <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-4">
                    <img
                        src={inspiration.image}
                        alt={inspiration.name[language]}
                        className="w-full h-full object-cover rounded-full"
                        loading="lazy"
                    />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                    {inspiration.name[language]}
                </h3>
                <p className="text-orange-500 font-medium mb-4">
                    {inspiration.title[language]}
                </p>

                <div className="relative mt-2">
                    <FaQuoteLeft className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-gray-200/70 -z-10" />
                    <p className="text-gray-600 text-sm leading-relaxed">
                        "{inspiration.statement[language]}"
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InspirationCard;

