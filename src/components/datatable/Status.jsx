import "./status.css";
const STATUS_MAP = {
  Booked:   "badge--booked",
  Confirmed:"badge--booked",
  Pending:  "badge--pending",
  Failed:   "badge--failed",
  Refunded: "badge--refunded",
};
 
export default function StatusBadge({ status }) {
  const cls = STATUS_MAP[status] || "badge--default";
  return <span className={`badge ${cls}`}>{status}</span>;
}
 