import "./statcardrow.css";
import StatCard from "./StatCard";
import totalIcon from "../../assets/Images/total.png";
import bookedIcon from "../../assets/Images/booked.png";
import pendingIcon from "../../assets/Images/clock.png";
import refundIcon from "../../assets/Images/refund.png";

export default function StatCardRow({ counts = {}, activeFilter = null, onCardClick }) {
  const stats = [
    {
      icon: totalIcon,
      label: "Total Booking",
      value: counts.total || 0,
      active: activeFilter === null,
      filterKey: null,
    },
    {
      icon: bookedIcon,
      label: "Confirmed",
      value: counts.Confirmed || 0,
      active: activeFilter === "Confirmed",
      filterKey: "Confirmed",
    },
    {
      icon: pendingIcon,
      label: "Pending",
      value: counts.Pending || 0,
      active: activeFilter === "Pending",
      filterKey: "Pending",
    },
    {
      icon: refundIcon,
      label: "Refunded",
      value: counts.Refunded || 0,
      active: activeFilter === "Refunded",
      filterKey: "Refunded",
    },
  ];

  return (
    <div className="stat-card-row">
      {stats.map((s) => (
        <StatCard 
          key={s.label} 
          icon={s.icon} 
          label={s.label} 
          value={s.value} 
          active={s.active} 
          onClick={() => onCardClick(s.filterKey)}
        />
      ))}
    </div>
  );
}

