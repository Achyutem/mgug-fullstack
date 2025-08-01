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
    <div className="flex items-center rounded-full bg-white/5 p-1 border border-white/10">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onSelectYear(year)}
          className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300
            ${
              selectedYear === year
                ? "text-white"
                : "text-gray-400 hover:text-white"
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
