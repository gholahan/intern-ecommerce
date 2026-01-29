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
  totalPages,
}: PaginationProps) => {
    
  return (
    <div className="flex justify-center mt-6 space-x-4">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-100 border rounded disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from({ length: totalPages || 1 }, (_, i) => i + 1).map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => setPage(pageNum)}
          className={`px-4 py-2 border rounded ${
            page === pageNum ? 'bg-gray-300' : 'bg-gray-100'
          }`}
        >
          {pageNum}
        </button>
      ))}

      <button
        onClick={() => setPage(page + 1)}
        disabled={!hasNextPage}
        className="px-4 py-2 bg-gray-100 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
