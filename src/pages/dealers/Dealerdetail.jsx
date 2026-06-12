import { useParams, useNavigate } from "react-router-dom";
import DEALERS from "../../data/delearData.js";
import "./dealerdetail.css";
import EditDealer from "./edit_dealer/Editdealer.jsx";


export default function DealerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dealer = DEALERS.find((d) => d.id === id);

  if (!dealer) {
    return <div className="dd-page">Dealer not found.</div>;
  }

  const isActive = dealer.status === "Active";

  return (
    <div className="dd-page">

      {/* ── Top bar ── */}
      <div className="dd-topbar">
        <div className="dd-title-row">
          <button className="dd-back-btn" onClick={() => navigate("/dealers")}>
            <img src=".././src/assets/Images/backarrow.png"/>
          </button>
          <h2 className="dd-heading">Dealer Details</h2>
        </div>

        <div className="dd-topbar-actions">
          {isActive ? (
            <button className="dd-btn-status dd-btn-status--inactive">
              Inactive
            </button>
          ) : (
            <button className="dd-btn-status dd-btn-status--active">
                <img src=".././src/assets/Images/tick.png"/>
               Active
            </button>
          )}
          
<button className="dd-btn-edit" onClick={() => navigate(`/dealers/${dealer.id}/edit`)}>
            <img src=".././src/assets/Images/edit.png"/>
            
            Edit Dealer
          </button>
        </div>
      </div>

      <div className="dd-name-row">
        <h3 className="dd-name">{dealer.name} - {dealer.id}</h3>
        <span className={`dd-badge ${isActive ? "dd-badge--active" : "dd-badge--inactive"}`}>
          {dealer.status}
        </span>
      </div>
      <div className="addressdealer">
        <img src=".././src/assets/Images/addr.png"/>
      </div>

      <div className="dd-grid">
        <div className="dd-field">
          <span className="dd-label">Merchant ID</span>
          <span className="dd-value">{dealer.id}</span>
        </div>
        <div className="dd-field">
          <span className="dd-label">Dealer Name</span>
          <span className="dd-value">{dealer.name}</span>
        </div>
        <div className="dd-field">
          <span className="dd-label">Email ID</span>
          <span className="dd-value">{dealer.email}</span>
        </div>
        <div className="dd-field">
          <span className="dd-label">Mobile Number</span>
          <span className="dd-value">{dealer.mobile}</span>
        </div>
        <div className="dd-field">
          <span className="dd-label">Pin Code</span>
          <span className="dd-value">302017</span>
        </div>
        <div className="dd-field">
          <span className="dd-label">Address</span>
          <span className="dd-value">No B/24, Govind Marg, Raja Park</span>
        </div>
        <div className="dd-field">
          <span className="dd-label">City</span>
          <span className="dd-value">{dealer.city}</span>
        </div>
      </div>

    </div>
  );
}