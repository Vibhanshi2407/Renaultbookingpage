import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ALL_BOOKINGS } from "../../data/bookingsData";
import "./bookingdetail.css";
import backarrow from "../../assets/Images/backarrow.png"
import car from "../../assets/Images/carrenoult.png"
import address from "../../assets/Images/address.png"

export default function BookingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const booking = ALL_BOOKINGS.find((b) => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!booking) {
    return (
      <div className="booking-detail-error">
        <h2>Booking Not Found</h2>
        <p>No booking found with ID: {id}</p>

        <button
          className="btn-back-action"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const customer = booking.customerDetails;

  return (
    <div className="booking-detail-container">
      {/* Header */}
      <div className="booking-detail-header">
        <button
          className="btn-back-icon"
          onClick={() => navigate("/dashboard")}
        >
          <img
            src={backarrow}
            alt="Back"
            className="back-icon"
          />  
        </button>

        <h1>
          {customer.firstName} {customer.lastName}
        </h1>
      </div>

      {/* Booking Summary */}
      <div className="booking-summary-card">
        <div className="booking-summary-left">
          <h2>{booking.vehicleName || "Duster R Pass"}</h2>

          <div className="summary-row">
             <span className="summary-label">Booking ID</span>

          <span className="status-badge">
            {booking.status}
          </span>           
            <span className="summary-value">{booking.id}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Booking Date</span>
            <span className="summary-value">{booking.Date}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Booking Amount</span>
            <span className="summary-amount">
              {booking.amount?.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="booking-summary-right">
          <img
            src={car}
            alt="Vehicle"
            className="vehicle-image"
           
          />
        </div>
      </div>

      {/* Customer Details */}
      <div className="detail-section-card">
        <h3>Customer Details</h3>

        <div className="customer-info-grid">
          <div className="info-field">
            <span className="field-label">Title</span>
            <span className="field-value">{customer.title}</span>
          </div>

          <div className="info-field">
            <span className="field-label">First Name</span>
            <span className="field-value">{customer.firstName}</span>
          </div>

          <div className="info-field">
            <span className="field-label">Last Name</span>
            <span className="field-value">{customer.lastName}</span>
          </div>

          <div className="info-field">
            <span className="field-label">Email ID</span>
            <span className="field-value">{customer.email}</span>
          </div>

          <div className="info-field">
            <span className="field-label">Mobile Number</span>
            <span className="field-value">{customer.phone}</span>
          </div>

          <div className="info-field">
            <span className="field-label">Pin Code</span>
            <span className="field-value">{customer.pincode}</span>
          </div>

          <div className="info-field">
            <span className="field-label">City</span>
            <span className="field-value">{customer.city}</span>
          </div>

          <div className="info-field">
            <span className="field-label">Dealership</span>
            <span className="field-value">{customer.dealership}</span>
          </div>
        </div>

        {/* Dealer Card */}
        <div className="dealership-address-banner">
          <div className="dealer-icon-wrap">
            <img
              src={address}
              alt="Dealer"
              className="dealer-icon"
            />
          </div>

          <div className="dealer-text-wrap">
            <h4>{customer.dealership}</h4>

            <p className="dealer-address">
              {customer.dealerAddress}
            </p>

            <p className="dealer-phone">
              {customer.dealerPhone}
            </p>
          </div>
        </div>
      </div>

      {/* Booking Status */}
      <div className="detail-section-card">
        <h3>Booking Status</h3>

        <div className="stepper-timeline">
          {booking.timeline.map((step, index) => (
            <div key={index} className="timeline-step">
              <div className="timeline-left-bar">
                <div
                  className={`timeline-dot ${
                    step.status === "completed"
                      ? "timeline-dot--completed"
                      : step.status === "active"
                      ? "timeline-dot--active"
                      : "timeline-dot--pending"
                  }`}
                >
                  {index + 1}
                </div>

                {index < booking.timeline.length - 1 && (
                  <div
                    className={`timeline-line ${
                      step.status === "completed"
                        ? "timeline-line--completed"
                        : ""
                    }`}
                  />
                )}
              </div>

              <div className="timeline-content">
                <h4>{step.label}</h4>

                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}