/* eslint-disable react/prop-types */


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  // Determine the range of page numbers to display
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-2 my-4">
      {/* Previous Button */}
      <button
        className={`px-3 py-1 border rounded ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-emerald-500 text-white hover:bg-emerald-600"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-3 py-1 border rounded ${
            currentPage === number
              ? "bg-emerald-700 text-white"
              : "bg-white text-emerald-500 hover:bg-emerald-500 hover:text-white"
          }`}
        >
          {number}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`px-3 py-1 border rounded ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-emerald-500 text-white hover:bg-emerald-600"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
