import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) {
    return null;
  }

  const handlePrevious = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNext = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-8 text-sm">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/70 text-slate-300 border border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700/90 transition-colors"
        aria-label="Previous Page"
      >
        <FaArrowLeft />
      </button>
      <span className="text-slate-400 font-medium tabular-nums">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/70 text-slate-300 border border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700/90 transition-colors"
        aria-label="Next Page"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};
