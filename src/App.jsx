import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/layout/Applayout";
import BookingPage from "./pages/booking/Bookingpage";
import BookingDetail from "./pages/booking/bookingdetail";
import Pagination from "./components/datatable/Pagination";
import FailedBookingDetail from "./pages/booking/Failedbooking";
import DealersPage from "./pages/dealers/Dealerpage";
import DealerDetails from "./pages/dealers/Dealerdetail";
import DealerTable from "./components/datatable/Dealertable";
import EditDealer from "./pages/dealers/edit_dealer/Editdealer";

import './App.css';
import './mobile-responsive.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<BookingPage />} />
            <Route path="/booking/:id" element={<BookingDetail />} /> 
            <Route path="/failed-booking/:id" element={<FailedBookingDetail />} />
            <Route path="/dealers" element={<DealersPage/>}/>
            <Route path="/dealers/:id" element={<DealerDetails />} />
            <Route path="/dealers/:id/edit" element={<EditDealer />} />
          </Routes>
    
        </AppLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;




              
 
 
 
 
 
 

 

 

 
 
 
 
 
 
 
 
 

 
 
 

 


