// src/components/Pagination.jsx
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="back-button"
        >
          Previous
        </button>
        <span className="">
        {'  '} {currentPage}  of {totalPages}{'  '}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="back-button"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;