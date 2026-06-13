import { useState } from "react";
import "./dealerpage.css"
import AddDealer from "./add_dealer/Adddealer";
import DealerTable from "../../components/datatable/Dealertable";
import download from  "../../assets/Images/down.png"


export default function DealersPage() {
  const [isAddDealerOpen, setIsAddDealerOpen] = useState(false);
  

  return (
    <>
      <div className="dealer-header">
        <div className="left">
          <h2>Dealers</h2>
        </div>
        <div className="right">
          
            <button className="download">
           <img src={download}
           width={11} height={11}/>

              Download
            </button>
         
         
            <button className="adddealer" onClick={() => setIsAddDealerOpen(true)}>
              Add Dealer
            </button>
         
        </div>
      </div>
       <div className="dealertable">
       <DealerTable/>
       </div>

      {isAddDealerOpen && (
        <div className="modal-overlay" onClick={() => setIsAddDealerOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <AddDealer onClose={() => setIsAddDealerOpen(false)} />
          </div>
         
          
        </div>
      )}
    </>
  );
}