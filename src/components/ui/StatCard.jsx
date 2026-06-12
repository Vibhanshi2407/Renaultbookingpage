import "./statcard.css"
export default function StatCard({
  icon,
  label,
  value,
  active,
  onClick,
}) {
  return (
    <div
      className={`stat-card ${active ? "stat-card--active" : ""}`}
      onClick={onClick}
    >
      <img src={icon} alt={label} className="stat-card-icon" />
      <p className="stat-card-label">{label}</p>
      <h3 className="stat-card-value">{value}</h3>
    </div>
  );
}