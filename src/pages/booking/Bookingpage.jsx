import StatCardRow from "../../components/ui/StatCardRow";
import { ALL_BOOKINGS } from "../../data/bookingsData";
import calendarIcon from "../../assets/Images/calendar.png";
import BookingTable from "../../components/datatable/Bookingtable";
import "./bookingpage.css";
import { useState } from "react";

export default function BookingPage() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [dateRange, setDateRange] = useState("Last 90 Days");

  const filterBookingsByDateRange = (bookings, range) => {
    if (range === "All") return bookings;

    const refDate = new Date("2026-06-11T23:59:59");

    return bookings.filter((b) => {
      const bDate = new Date(b.bookingDate);
      if (isNaN(bDate.getTime())) return true;

      const diffTime = refDate - bDate;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);

      if (range === "Last 7 Days") {
        return diffDays >= 0 && diffDays <= 7;
      }
      if (range === "Last 30 Days") {
        return diffDays >= 0 && diffDays <= 30;
      }
      if (range === "Last 90 Days") {
        return diffDays >= 0 && diffDays <= 90;
      }
      if (range === "This Year") {
        return bDate.getFullYear() === refDate.getFullYear();
      }
      return true;
    });
  };

  const dateFilteredBookings = filterBookingsByDateRange(ALL_BOOKINGS, dateRange);

  const counts = {
    total: dateFilteredBookings.length,
    Confirmed: dateFilteredBookings.filter((b) => b.status === "Confirmed").length,
    Pending: dateFilteredBookings.filter((b) => b.status === "Pending").length,
    Refunded: dateFilteredBookings.filter((b) => b.status === "Refunded").length,
  };

  const finalFilteredBookings = activeFilter === null
    ? dateFilteredBookings
    : dateFilteredBookings.filter((b) => b.status === activeFilter);

  const handleCardClick = (filterKey) => {
    setActiveFilter(filterKey);
  };

  return (
    <div className="booking-page-container">
      <div className="booking-page-header">
        <h2>Dashboard</h2>

        {/* Right Side Controls */}
        <div className="header-actions">
          <div className="date-range-box">
            <img
              src={calendarIcon}
              alt="Calendar"
              className="calendar-icon"
            />
            <select
              className="date-select"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="Last 7 Days">Last 7 Days</option>
              <option value="Last 30 Days">Last 30 Days</option>
              <option value="Last 90 Days">Last 90 Days</option>
              <option value="This Year">This Year</option>
              <option value="All">All Bookings</option>
            </select>
          </div>

          <button
            className="btn-download"
            onClick={() => alert(`Download triggered for ${dateRange}`)}
          >
            Download
          </button>
        </div>
      </div>

      {/* Stats Cards summary row */}
      <StatCardRow
        counts={counts}
        activeFilter={activeFilter}
        onCardClick={handleCardClick}
      />

      <h3>Total Booking Details</h3>

      {/* Bookings table list */}
      <BookingTable bookings={finalFilteredBookings} />
    </div>
  );
}
