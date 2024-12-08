import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((page) => page + 1);

  return (
    <div className="flex justify-center items-center mt-2 mb-4">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-1 rounded-l-md mr-1 text-xs md:py-1 md:px-2"
        >
          Prev
        </button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-1 rounded-md ${
            currentPage === page ? "bg-gray-300" : ""
          } text-xs md:py-1 md:px-2`}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-1 rounded-r-md ml-1 text-xs md:py-1 md:px-2"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
