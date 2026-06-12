import "./failedbooking.css";
import { useParams, useNavigate } from "react-router-dom";
import { ALL_BOOKINGS } from "../../data/bookingsData";
import "./failedbooking.css";

export default function FailedBookingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const booking = ALL_BOOKINGS.find((b) => b.id === id);

  if (!booking) {
    return <h2>Booking not found</h2>;
  }

  const customer = booking.customerDetails;

  return (
    <div className="failed-booking-container">
      {/* Header */}
      <div className="failed-header">
            <button
          className="btn-back-icon"
          onClick={() => navigate("/dashboard")}
        >
          <img
            src=".././src/assets/Images/backarrow.png"
            alt="Back"
            className="back-icon"
          />  
        </button>

        <h1>
          {customer.firstName} {customer.lastName}
        </h1>
      </div>

      {/* Summary */}
      <div className="failed-summary">
        <div className="failed-summary-left">
          <h2>{booking.vehicleName}</h2>

          <div className="summary-item">

            <span>Booking ID</span>
            <span>{booking.id}</span>
          </div>

          <div className="summary-item">
            <span>Booking Date</span>
            <span>{booking.Date}</span>
          </div>

          <div className="summary-item">
            <span>Cancellation ID</span>
            <span>{booking.cancellationId}</span>
          </div>

          <div className="summary-item">
            <span>Refund Amount</span>
            <span>{booking.refundAmount}</span>
          </div>

          <div className="summary-item">
            <span>Refund Date</span>
            <span>{booking.refundDate}</span>
          </div>

          <div className="refund-alert">
           <span ><img
             src=".././src/assets/Images/failclock.png" 
             alt="clock"
            width={14} 
            height={14}
            />
            </span>
            
            Expected to credit refund before 05 May 2021
          </div>

          <div className="refund-reason">
            <h4>Not purchasing any car</h4>

            <p>
              <strong>Competition:</strong> TATA Nexon
            </p>

            <p>
              After reconsideration, I have decided to
              proceed with another vehicle purchase.
              Therefore, I am requesting cancellation
              of the Renault booking.
            </p>
          </div>
        </div>

        <div className="failed-summary-right">
          <img
            src=".././src/assets/Images/carrenoult.png"
            alt="Vehicle"
            className="failed-car-image"
          />

          <div className="cancelled-stamp">
           <img src=".././src/assets/Images/Cancelled.png">
           </img>
          </div>
        </div>
      </div>

      {/* Customer Details */}
      <div className="section">
        <h3>Customer Details</h3>

        <div className="customer-grid">
          <div>
            <span>Title</span>
            <strong>{customer.title}</strong>
          </div>

          <div>
            <span>First Name</span>
            <strong>{customer.firstName}</strong>
          </div>

          <div>
            <span>Last Name</span>
            <strong>{customer.lastName}</strong>
          </div>

          <div>
            <span>Email</span>
            <strong>{customer.email}</strong>
          </div>

          <div>
            <span>Mobile</span>
            <strong>{customer.phone}</strong>
          </div>

          <div>
            <span>Pin Code</span>
            <strong>{customer.pincode}</strong>
          </div>

          <div>
            <span>City</span>
            <strong>{customer.city}</strong>
          </div>

          <div>
            <span>Dealership</span>
            <strong>{customer.dealership}</strong>
          </div>
        </div>

        <div className="dealership-address-banner">
          <div className="dealer-icon-wrap">
            <img
              src=".././src/assets/Images/address.png"
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

      {/* Refund Timeline */}
      <div className="refund-status-section">
  <h2>Refund Status</h2>

  <div className="refund-timeline">

    {/* Step 1 */}
    <div className="refund-step">
      <div className="refund-step-number completed">1</div>

      <div className="refund-step-content">
        <h4>Booking cancelled</h4>

        <p className="refund-time">
          11:10 am | 12 Mar 2021
        </p>

        <div className="refund-details-row">
          <div>
            <span>Refund amount</span>
            <strong>₹30,000</strong>
          </div>

          <div>
            <span>Booking ID</span>
            <strong>#1234567890</strong>
          </div>
        </div>

        <p className="refund-note">
          Refund amount will appear on your same bank
          account within the next 5-7 days.
        </p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="refund-step">
      <div className="refund-step-number completed">2</div>

      <div className="refund-step-content">
        <h4>Refund initiated</h4>

        <p className="refund-time">
          03:00 pm | 12 Mar 2021
        </p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="refund-step">
      <div className="refund-step-number active">3</div>

      <div className="refund-step-content">
        <h4>Processing</h4>

        <p className="processing-text">
          Expected to credit refund before Fri,
          05 May 2021
        </p>
      </div>
    </div>

    {/* Step 4 */}
    <div className="refund-step">
      <div className="refund-step-number pending">4</div>

      <div className="refund-step-content refund-disabled">
        <h4>Refund credited</h4>
      </div>
    </div>

  </div>
</div>
    </div>
  );
}