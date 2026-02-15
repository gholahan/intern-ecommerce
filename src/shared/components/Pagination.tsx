type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  hasNextPage: boolean;
  totalPages?: number;
};

const Pagination = ({
  page,
  setPage,
  hasNextPage,
  totalPages = 1,
}: PaginationProps) => {
  // Limit page buttons to a reasonable number
  const maxPagesToShow = 5;
  const startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  const adjustedStartPage = Math.max(1, endPage - maxPagesToShow + 1);
  
  const pageButtons = Array.from(
    { length: endPage - adjustedStartPage + 1 },
    (_, i) => adjustedStartPage + i
  );

  return (
    <div className="flex justify-center items-center mt-8 gap-2">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {adjustedStartPage > 1 && (
        <>
          <button
            onClick={() => setPage(1)}
            className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            1
          </button>
          {adjustedStartPage > 2 && <span className="px-2">...</span>}
        </>
      )}

      {pageButtons.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => setPage(pageNum)}
          className={`px-3 py-2 border rounded transition-colors ${
            page === pageNum
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white border-gray-300 hover:bg-gray-100'
          }`}
        >
          {pageNum}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2">...</span>}
          <button
            onClick={() => setPage(totalPages)}
            className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => setPage(page + 1)}
        disabled={!hasNextPage || page >= totalPages}
        className="px-4 py-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
