import React from "react";

interface YearSwitcherProps {
  years: number[];
  selectedYear: number;
  onSelectYear: (year: number) => void;
}

const YearSwitcher: React.FC<YearSwitcherProps> = ({
  years,
  selectedYear,
  onSelectYear,
}) => {
  return (
    <div className="flex items-center rounded-full bg-gray-100/80 backdrop-blur-sm p-1 border border-orange-500">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onSelectYear(year)}
          className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300
            ${
              selectedYear === year
                ? "text-white"
                : "text-gray-600 hover:text-orange-500"
            }
          `}
        >
          {selectedYear === year && (
            <span className="absolute inset-0 z-0 rounded-full bg-orange-500 shadow-md shadow-orange-500/30" />
          )}
          <span className="relative z-10">{year}</span>
        </button>
      ))}
    </div>
  );
};

export default YearSwitcher;
