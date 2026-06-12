import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import "./bookingtable.css";

const HIGHLIGHTED_ROW = 1;

export default function BookingTable({ bookings = [] }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Reset page when bookings data list changes
  useEffect(() => {
    setCurrentPage(1);
  }, [bookings]);

  const totalPages = Math.ceil(bookings.length / rowsPerPage);
  
  // Guard current page
  const maxPage = Math.max(1, totalPages);
  const activePage = currentPage > maxPage ? 1 : currentPage;

  const paginatedData = bookings.slice(
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowsChange = (rows) => {
    setRowsPerPage(rows);
    setCurrentPage(1);
  };

  const getStatusBadge = (status) => {
    // Map database status values to screenshot badges: Confirmed -> Booked, Failed -> Faild, etc.
    switch (status) {
      case "Confirmed":
        return <span className="b-badge b-badge--booked">Booked</span>;
      case "Pending":
        return <span className="b-badge b-badge--pending">Pending</span>;
      case "Failed":
      case "Cancelled":
        return <span className="b-badge b-badge--failed">Faild</span>;
      case "Refunded":
        return <span className="b-badge b-badge--refunded">Refunded</span>;
      default:
        return <span className="b-badge">{status}</span>;
    }
  };

  return (
    <div className="booking-table-wrapper">
      <div className="booking-scroll">
        <table className="booking-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Customer Name</th>
              <th>Booking Amount</th>
              <th>Date & Time</th>
              <th>Sub Status</th>
              <th>Sub Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={6} className="booking-empty">
                  No bookings found.
                </td>
              </tr>
            ) : (
              paginatedData.map((row, rowIndex) => {
                const isHighlighted = rowIndex === HIGHLIGHTED_ROW;
                return (
                  <tr
                    key={row.id ?? rowIndex}
                    className={isHighlighted ? "booking-row--highlighted" : ""}
                  >
                    <td><span className="booking-td-id">{row.id}</span></td>
                    <td className="booking-td-name">{row.name}</td>
                    <td>{row.amount}</td>
                    <td>{row.datetime || row.bookingDate}</td>
                    <td>{getStatusBadge(row.status)}</td>
                    <td>
                      <button
                        className={`booking-btn-view ${isHighlighted ? "booking-btn-view--dark" : ""}`}
                        onClick={() => {
                          if (row.status === "Failed" || row.status === "Cancelled") {
                            navigate(`/failed-booking/${row.id}`);
                          } else {
                            navigate(`/booking/${row.id}`);
                          }
                        }}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={activePage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        totalItems={bookings.length}
        onPageChange={handlePageChange}
        onRowsChange={handleRowsChange}
      />
    </div>
  );
}
