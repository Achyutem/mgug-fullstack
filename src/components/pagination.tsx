import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePagination, DOTS } from "../utils/usePagination";

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

  const paginationRange = usePagination({
    currentPage,
    totalCount: totalItems,
    pageSize: itemsPerPage,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const onPrevious = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8 text-sm">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-white/70 text-gray-700 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200/70 transition-colors"
        aria-label="Previous Page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page Number Buttons */}
      <div className="flex items-center gap-2">
        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <span key={index} className="px-2 text-gray-500">
                &#8230;
              </span>
            );
          }

          const isActive = currentPage === pageNumber;
          return (
            <button
              key={index}
              onClick={() => onPageChange(pageNumber as number)}
              className={`flex items-center justify-center w-9 h-9 rounded-full border transition-colors duration-200
                ${
                  isActive
                    ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20"
                    : "bg-white/70 text-gray-700 border-gray-300 hover:bg-gray-200/70"
                }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-white/70 text-gray-700 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200/70 transition-colors"
        aria-label="Next Page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
