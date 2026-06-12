import { useState, useEffect } from "react";
import DEALERS from "../data/dealersData";



export default function useDealers() {
  const [dealers, setDealers]   = useState([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDealers(DEALERS);
      setLoading(false);
    }, 500);
  }, []);

  return { dealers, loading };
}