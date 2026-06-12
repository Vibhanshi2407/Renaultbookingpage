import "./pagination.css";

export default function Pagination({
  currentPage,
  totalPages,
  rowsPerPage,
  rowPerPage,
  totalItems,
  onPageChange,
  onRowsChange,
}) {
  const currentRowsPerPage = rowsPerPage || rowPerPage || 10;
  const currentTotalItems = totalItems || (totalPages * currentRowsPerPage) || 0;
  const calculatedTotalPages = totalPages || Math.ceil(currentTotalItems / currentRowsPerPage) || 1;

  // Generate smart page links: e.g. 1 2 3 ... 34
  const getPageNumbers = () => {
    const pages = [];
    if (calculatedTotalPages <= 7) {
      for (let i = 1; i <= calculatedTotalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", calculatedTotalPages);
      } else if (currentPage >= calculatedTotalPages - 3) {
        pages.push(
          1,
          "...",
          calculatedTotalPages - 4,
          calculatedTotalPages - 3,
          calculatedTotalPages - 2,
          calculatedTotalPages - 1,
          calculatedTotalPages
        );
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", calculatedTotalPages);
      }
    }
    return pages;
  };

  const startItem = (currentPage - 1) * currentRowsPerPage + 1;
  const endItem = Math.min(currentPage * currentRowsPerPage, currentTotalItems);

  return (
    <div className="pagination">
      {/* Items Range Info */}
      <span className="pagination-info">
        {currentTotalItems > 0 ? `${startItem}-${endItem} of ${currentTotalItems}` : "0-0 of 0"}
      </span>

      {/* Controls: Rows per page and page numbers */}
      <div className="pagination-controls">
        {onRowsChange && (
          <div className="row-per-page-selector">
            <select
              value={currentRowsPerPage}
              onChange={(e) => onRowsChange(Number(e.target.value))}
              className="pagination-select"
            >
              <option value={10}>10 Rows</option>
              <option value={20}>20 Rows</option>
              <option value={50}>50 Rows</option>
            </select>
          </div>
        )}

        {/* Previous Page Button */}
        <button
          className="pagination-arrow-btn"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {/* Page numbers */}
        {getPageNumbers().map((p, idx) => {
          if (p === "...") {
            return (
              <span key={`dots-${idx}`} className="pagination-dots">
                ...
              </span>
            );
          }
          return (
            <button
              key={p}
              className={`pagination-number-btn ${currentPage === p ? "active" : ""}`}
              onClick={() => onPageChange(p)}
            >
              {p}
            </button>
          );
        })}

        {/* Next Page Button */}
        <button
          className="pagination-arrow-btn"
          onClick={() => onPageChange(Math.min(calculatedTotalPages, currentPage + 1))}
          disabled={currentPage === calculatedTotalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}