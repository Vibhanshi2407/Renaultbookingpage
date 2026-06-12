export const ALL_BOOKINGS = [
  {
    id: "BK101",
    name: "Rajendra Kumar",
    amount: "₹30,000",
    bookingDate: "12 Feb 2026",
    datetime: "12 Feb, Thu, 2:15 PM",
    status: "Confirmed",
    customerDetails: {
      title: "Mr.",
      firstName: "Rajendra",
      lastName: "Kumar",
      email: "rajendra.kumar@gmail.com",
      phone: "9234567812",
      city: "Kanpur",
      dealership: "Renault Kanpur",
      dealerAddress: "Plot No. 10 & 11, G.T. Road, Near Rama Devi, Kanpur, Uttar Pradesh, 208007",
      dealerPhone: "09462518486"
    },
    timeline: [
      { label: "Booking Initiated", desc: "Your booking has been initiated successfully.", status: "completed" },
      { label: "Payment Verified", desc: "Your payment has been verified successfully.", status: "completed" },
      { label: "Pending Confirmation", desc: "Awaiting verification from Renault Showroom.", status: "completed" },
      { label: "Booking Confirmed", desc: "Your booking is confirmed.", status: "active" }
    ]
  },
  {
    id: "BK102",
    name: "Rakesh Singh",
    amount: "₹30,000",
    bookingDate: "29 Apr 2026",
    datetime: "29 Apr, Wed, 6:30 PM",
    status: "Confirmed",
    customerDetails: {
      title: "Mr.",
      firstName: "Rakesh",
      lastName: "Singh",
      email: "rakesh.singh@gmail.com",
      phone: "9876543210",
      city: "Lucknow",
      dealership: "Renault Lucknow",
      dealerAddress: "Hazratganj Road, Near GPO, Lucknow, Uttar Pradesh, 226001",
      dealerPhone: "09839012345"
    },
    timeline: [
      { label: "Booking Initiated", desc: "Your booking has been initiated successfully.", status: "completed" },
      { label: "Payment Verified", desc: "Your payment has been verified successfully.", status: "completed" },
      { label: "Pending Confirmation", desc: "Awaiting verification from Renault Showroom.", status: "completed" },
      { label: "Booking Confirmed", desc: "Your booking is confirmed.", status: "active" }
    ]
  },

  {
    id: "BK104",
    name: "Anita Desai",
    amount: "₹30,000",
    bookingDate: "28 Apr 2026",
    datetime: "28 Apr, Tue, 11:30 AM",
    status: "Refunded",
    customerDetails: {
      title: "Mrs.",
      firstName: "Anita",
      lastName: "Desai",
      email: "anita.desai@yahoo.com",
      phone: "7766554433",
      city: "Mumbai",
      dealership: "Renault Mumbai West",
      dealerAddress: "S.V. Road, Bandra West, Mumbai, Maharashtra, 400050",
      dealerPhone: "0229876543"
    },
    refundDetails: {
      refundAmount: "₹30,000",
      refundRefId: "#BK104REF99",
      reason: "Non purchasing by user",
      cancellationCharge: "Cancellation - 70% Refund",
      details: "After cancellation, user wants to proceed with another vehicle purchase discount coupon request on completion of the refund of this booking."
    },
    timeline: [
      { label: "Booking Cancelled", desc: "Refund Amount: ₹30,000 | Ref ID: #BK104REF99", status: "completed" },
      { label: "Refund Initiated", desc: "Refund request created in gateway.", status: "completed" },
      { label: "Processing", desc: "Expected within 5 business days.", status: "active" },
      { label: "Refund Executed", desc: "Amount will be credited to bank.", status: "pending" }
    ]
  },
  {
    id: "BK105",
    name: "Suresh Kumar",
    amount: "₹30,000",
    bookingDate: "27 Apr 2026",
    datetime: "27 Apr, Mon, 4:10 PM",
    status: "Confirmed",
    customerDetails: {
      title: "Mr.",
      firstName: "Suresh",
      lastName: "Kumar",
      email: "suresh.kumar@rediffmail.com",
      phone: "9988776655",
      city: "Chennai",
      dealership: "Renault Chennai Central",
      dealerAddress: "Mount Road, Nandanam, Chennai, Tamil Nadu, 600035",
      dealerPhone: "0449876543"
    },
    timeline: [
      { label: "Booking Initiated", desc: "Your booking has been initiated successfully.", status: "completed" },
      { label: "Payment Verified", desc: "Your payment has been verified successfully.", status: "completed" },
      { label: "Pending Confirmation", desc: "Awaiting verification from Renault Showroom.", status: "completed" },
      { label: "Booking Confirmed", desc: "Your booking is confirmed.", status: "active" }
    ]
  },
  {
    id: "BK106",
    name: "Meera Patel",
    amount: "₹28,000",
    bookingDate: "25 Apr 2026",
    datetime: "25 Apr, Sat, 10:20 AM",
    status: "Pending",
    customerDetails: {
      title: "Miss",
      firstName: "Meera",
      lastName: "Patel",
      email: "meera.patel@gmail.com",
      phone: "9123456789",
      city: "Ahmedabad",
      dealership: "Renault Ahmedabad East",
      dealerAddress: "SG Highway, Bodakdev, Ahmedabad, Gujarat, 380054",
      dealerPhone: "0794561230"
    },
    timeline: [
      { label: "Booking Initiated", desc: "Your booking has been initiated successfully.", status: "completed" },
      { label: "Payment Verified", desc: "Your payment has been verified successfully.", status: "completed" },
      { label: "Pending Confirmation", desc: "Awaiting verification from Renault Showroom.", status: "active" },
      { label: "Booking Confirmed", desc: "Your booking will be confirmed soon.", status: "pending" }
    ]
  },
  {
    id: "BK107",
    name: "Sunita Mehra",
    amount: "₹30,000",
    bookingDate: "24 Apr 2026",
    datetime: "24 Apr, Fri, 3:30 PM",
    status: "Refunded",
    customerDetails: {
      title: "Mrs.",
      firstName: "Sunita",
      lastName: "Mehra",
      email: "sunita.mehra@gmail.com",
      phone: "8889990001",
      city: "Delhi",
            pincode: "302201",

      dealership: "Renault Delhi South",
      dealerAddress: "Okhla Industrial Area Phase 3, New Delhi, 110020",
      dealerPhone: "0112345678"
    },
    refundDetails: {
      refundAmount: "₹30,000",
      refundRefId: "#BK107REF22",
      reason: "Non purchasing by user",
      cancellationCharge: "Cancellation - 70% Refund",
      details: "User changed mind and requested cancellation before dealership confirmation."
    },
    timeline: [
      { label: "Booking Cancelled", desc: "Refund Amount: ₹30,000 | Ref ID: #BK107REF22", status: "completed" },
      { label: "Refund Initiated", desc: "Refund request created in gateway.", status: "completed" },
      { label: "Processing", desc: "Expected within 5 business days.", status: "active" },
      { label: "Refund Executed", desc: "Amount will be credited to bank.", status: "pending" }
    ]
  },
  {
    id: "BK108",
    name: "Amit Agarwal",
    amount: "₹20,000",
    bookingDate: "22 Apr 2026",
    datetime: "22 Apr, Wed, 1:15 PM",
    status: "Confirmed",
    customerDetails: {
      title: "Mr.",
      firstName: "Amit",
      lastName: "Agarwal",
      email: "amit.agarwal@gmail.com",
      phone: "7778889992",
      city: "Kolkata",
            pincode: "302201",

      dealership: "Renault Kolkata Salt Lake",
      dealerAddress: "Sector 5, Salt Lake, Kolkata, West Bengal, 700091",
      dealerPhone: "0339876543"
    },
    timeline: [
      { label: "Booking Initiated", desc: "Your booking has been initiated successfully.", status: "completed" },
      { label: "Payment Verified", desc: "Your payment has been verified successfully.", status: "completed" },
      { label: "Pending Confirmation", desc: "Awaiting verification from Renault Showroom.", status: "completed" },
      { label: "Booking Confirmed", desc: "Your booking is confirmed.", status: "active" }
    ]
  },
  {
    id: "BK109",
    name: "Alok Ranjan",
    amount: "₹30,000",
    bookingDate: "20 Apr 2026",
    datetime: "20 Apr, Mon, 12:45 PM",
    status: "Pending",
    customerDetails: {
      title: "Mr.",
      firstName: "Alok",
      lastName: "Ranjan",
      email: "alok.ranjan@gmail.com",
      phone: "9990001112",
      city: "Patna",
            pincode: "302201",

      dealership: "Renault Patna West",
      dealerAddress: "Bailey Road, Saguna More, Patna, Bihar, 801503",
      dealerPhone: "0612456789"
    },
    timeline: [
      { label: "Booking Initiated", desc: "Your booking has been initiated successfully.", status: "completed" },
      { label: "Payment Verified", desc: "Your payment has been verified successfully.", status: "completed" },
      { label: "Pending Confirmation", desc: "Awaiting verification from Renault Showroom.", status: "active" },
      { label: "Booking Confirmed", desc: "Your booking will be confirmed soon.", status: "pending" }
    ]
  },
  {
    id: "BK110",
    name: "Nisha Sharma",
    amount: "₹30,000",
    bookingDate: "18 Apr 2026",
    datetime: "18 Apr, Sat, 5:50 PM",
    status: "Refunded",
    customerDetails: {
      title: "Miss",
      firstName: "Nisha",
      lastName: "Sharma",
      email: "nisha.sharma@outlook.com",
      phone: "8881112223",
      city: "Pune",
            pincode: "302201",

      dealership: "Renault Pune Wakad",
      dealerAddress: "Wakad Chowk, Pune, Maharashtra, 411057",
      dealerPhone: "0209876543"
    },
    refundDetails: {
      refundAmount: "₹30,000",
      refundRefId: "#BK110REF77",
      reason: "Non purchasing by user",
      cancellationCharge: "Cancellation - 70% Refund",
      details: "Customer requested cancellation due to personal emergencies."
    },
    timeline: [
      { label: "Booking Cancelled", desc: "Refund Amount: ₹30,000 | Ref ID: #BK110REF77", status: "completed" },
      { label: "Refund Initiated", desc: "Refund request created in gateway.", status: "completed" },
      { label: "Processing", desc: "Expected within 5 business days.", status: "active" },
      { label: "Refund Executed", desc: "Amount will be credited to bank.", status: "pending" }
    ]
  },
   {
    id: "BK103",
    name: "Anita Desai",
    amount: "₹30,000",
    bookingDate: "28 Apr 2026",
    datetime: "28 Apr, Tue, 11:30 AM",
    status: "Refunded",
    customerDetails: {
      title: "Mrs.",
      firstName: "Anita",
      lastName: "Desai",
      email: "anita.desai@yahoo.com",
      phone: "7766554433",
      city: "Mumbai",
            pincode: "302201",

      dealership: "Renault Mumbai West",
      dealerAddress: "S.V. Road, Bandra West, Mumbai, Maharashtra, 400050",
      dealerPhone: "0229876543"
    },
    refundDetails: {
      refundAmount: "₹30,000",
      refundRefId: "#BK1032REF99",
      reason: "Non purchasing by user",
      cancellationCharge: "Cancellation - 70% Refund",
      details: "After cancellation, user wants to proceed with another vehicle purchase discount coupon request on completion of the refund of this booking."
    },
    timeline: [
      { label: "Booking Cancelled", desc: "Refund Amount: ₹30,000 | Ref ID: #BK1032REF99", status: "completed" },
      { label: "Refund Initiated", desc: "Refund request created in gateway.", status: "completed" },
      { label: "Processing", desc: "Expected within 5 business days.", status: "active" },
      { label: "Refund Executed", desc: "Amount will be credited to bank.", status: "pending" }
    ]
  },
   {
    id: "BK1904",
    name: "Anita Desai",
    amount: "₹50,000",
    bookingDate: "18 May 2026",
    datetime: "18 May, Tue, 11:30 AM",
    status: "Refunded",
    customerDetails: {
      title: "Mrs.",
      firstName: "Anita",
      lastName: "Desai",
      email: "anita.desai@yahoo.com",
      phone: "7766554433",
      city: "Mumbai",
      dealership: "Renault Mumbai West",
      dealerAddress: "S.V. Road, Bandra West, Mumbai, Maharashtra, 400050",
      dealerPhone: "0229876543"
    },
    refundDetails: {
      refundAmount: "₹30,000",
      refundRefId: "#BK1904REF99",
      reason: "Non purchasing by user",
      cancellationCharge: "Cancellation - 70% Refund",
      details: "After cancellation, user wants to proceed with another vehicle purchase discount coupon request on completion of the refund of this booking."
    },
    timeline: [
      { label: "Booking Cancelled", desc: "Refund Amount: ₹30,000 | Ref ID: #BK104REF99", status: "completed" },
      { label: "Refund Initiated", desc: "Refund request created in gateway.", status: "completed" },
      { label: "Processing", desc: "Expected within 5 business days.", status: "active" },
      { label: "Refund Executed", desc: "Amount will be credited to bank.", status: "pending" }
    ]
  },
   {
    id: "BK1034",
    name: "Anita Desai",
    amount: "₹120,000",
    bookingDate: "8 May 2026",
    datetime: "8 May, Tue, 11:30 AM",
    status: "Refunded",
    customerDetails: {
      title: "Mrs.",
      firstName: "Anita",
      lastName: "Desai",
      email: "anita.desai@yahoo.com",
      phone: "7766554433",
      city: "Mumbai",
      dealership: "Renault Mumbai West",
      dealerAddress: "S.V. Road, Bandra West, Mumbai, Maharashtra, 400050",
      dealerPhone: "0229876543"
    },
    refundDetails: {
      refundAmount: "₹30,000",
      refundRefId: "#BK1234REF99",
      reason: "Non purchasing by user",
      cancellationCharge: "Cancellation - 70% Refund",
      details: "After cancellation, user wants to proceed with another vehicle purchase discount coupon request on completion of the refund of this booking."
    },
    timeline: [
      { label: "Booking Cancelled", desc: "Refund Amount: ₹30,000 | Ref ID: #BK104REF99", status: "completed" },
      { label: "Refund Initiated", desc: "Refund request created in gateway.", status: "completed" },
      { label: "Processing", desc: "Expected within 5 business days.", status: "active" },
      { label: "Refund Executed", desc: "Amount will be credited to bank.", status: "pending" }
    ]
  },

   {
    id: "BK178",
    name: "Anita Desai",
    amount: "₹30,000",
    bookingDate: "09 Apr 2026",
    datetime: "09 Apr, Tue, 11:30 AM",
    status: "Refunded",
    customerDetails: {
      title: "Mrs.",
      firstName: "Anita",
      lastName: "Desai",
      email: "anita.desai@yahoo.com",
      phone: "7766554433",
      city: "Mumbai",
      dealership: "Renault Mumbai West",
      dealerAddress: "S.V. Road, Bandra West, Mumbai, Maharashtra, 400050",
      dealerPhone: "0229876543"
    },
    refundDetails: {
      refundAmount: "₹30,000",
      refundRefId: "#BK104REF99",
      reason: "Non purchasing by user",
      cancellationCharge: "Cancellation - 70% Refund",
      details: "After cancellation, user wants to proceed with another vehicle purchase discount coupon request on completion of the refund of this booking."
    },
    timeline: [
      { label: "Booking Cancelled", desc: "Refund Amount: ₹30,000 | Ref ID: #BK104REF99", status: "completed" },
      { label: "Refund Initiated", desc: "Refund request created in gateway.", status: "completed" },
      { label: "Processing", desc: "Expected within 5 business days.", status: "active" },
      { label: "Refund Executed", desc: "Amount will be credited to bank.", status: "pending" }
    ]
  },
   {
    id: "BK1204",
    name: "Anita Desai",
    amount: "₹90,000",
    bookingDate: "12 Apr 2026",
    datetime: "12 Apr, Tue, 11:30 AM",
    status: "Refunded",
    customerDetails: {
      title: "Mrs.",
      firstName: "Anita",
      lastName: "Desai",
      email: "anita.desai@yahoo.com",
      phone: "7766554433",
      city: "Mumbai",
      dealership: "Renault Mumbai West",
      dealerAddress: "S.V. Road, Bandra West, Mumbai, Maharashtra, 400050",
      dealerPhone: "0229876543"
    },
    refundDetails: {
      refundAmount: "₹30,000",
      refundRefId: "#BK1204REF99",
      reason: "Non purchasing by user",
      cancellationCharge: "Cancellation - 70% Refund",
      details: "After cancellation, user wants to proceed with another vehicle purchase discount coupon request on completion of the refund of this booking."
    },
    timeline: [
      { label: "Booking Cancelled", desc: "Refund Amount: ₹30,000 | Ref ID: #BK1204REF99", status: "completed" },
      { label: "Refund Initiated", desc: "Refund request created in gateway.", status: "completed" },
      { label: "Processing", desc: "Expected within 5 business days.", status: "active" },
      { label: "Refund Executed", desc: "Amount will be credited to bank.", status: "pending" }
    ]
  },

   {
    id: "BK1034",
    name: "Anita Desai",
    amount: "₹60,000",
    bookingDate: "22 Apr 2026",
    datetime: "22 Apr, Tue, 11:30 AM",
    status: "Refunded",
    customerDetails: {
      title: "Mrs.",
      firstName: "Anita",
      lastName: "Desai",
      email: "anita.desai@yahoo.com",
      phone: "7766554433",
      city: "Mumbai",
      dealership: "Renault Mumbai West",
      dealerAddress: "S.V. Road, Bandra West, Mumbai, Maharashtra, 400050",
      dealerPhone: "0229876543"
    },
    refundDetails: {
      refundAmount: "₹30,000",
      refundRefId: "#BK1034REF99",
      reason: "Non purchasing by user",
      cancellationCharge: "Cancellation - 70% Refund",
      details: "After cancellation, user wants to proceed with another vehicle purchase discount coupon request on completion of the refund of this booking."
    },
    timeline: [
      { label: "Booking Cancelled", desc: "Refund Amount: ₹30,000 | Ref ID: #BK104REF99", status: "completed" },
      { label: "Refund Initiated", desc: "Refund request created in gateway.", status: "completed" },
      { label: "Processing", desc: "Expected within 5 business days.", status: "active" },
      { label: "Refund Executed", desc: "Amount will be credited to bank.", status: "pending" }
    ]
  },
   {
    id: "BK184",
    name: "Anita Desai",
    amount: "₹80,000",
    bookingDate: "28 Apr 2026",
    datetime: "28 Apr, Tue, 11:30 AM",
    status: "Refunded",
    customerDetails: {
      title: "Mrs.",
      firstName: "Anita",
      lastName: "Desai",
      email: "anita.desai@yahoo.com",
      phone: "7766554433",
      city: "Mumbai",
      dealership: "Renault Mumbai West",
      dealerAddress: "S.V. Road, Bandra West, Mumbai, Maharashtra, 400050",
      dealerPhone: "0229876543"
    },
    refundDetails: {
      refundAmount: "₹30,000",
      refundRefId: "#BK104REF99",
      reason: "Non purchasing by user",
      cancellationCharge: "Cancellation - 70% Refund",
      details: "After cancellation, user wants to proceed with another vehicle purchase discount coupon request on completion of the refund of this booking."
    },
    timeline: [
      { label: "Booking Cancelled", desc: "Refund Amount: ₹30,000 | Ref ID: #BK104REF99", status: "completed" },
      { label: "Refund Initiated", desc: "Refund request created in gateway.", status: "completed" },
      { label: "Processing", desc: "Expected within 5 business days.", status: "active" },
      { label: "Refund Executed", desc: "Amount will be credited to bank.", status: "pending" }
    ]
  },
  {
    id: "BK111",
    name: "Rajendra Kumar",
    amount: "₹50,000",
    bookingDate: "10 Jan 2026",
    datetime: "10 Jan, Thu, 2:15 PM",
    status: "Confirmed",
    customerDetails: {
      title: "Mr.",
      firstName: "Rajendra",
      lastName: "Kumar",
      email: "rajendra.kumar@gmail.com",
      phone: "9234567812",
      city: "Kanpur",
      dealership: "Renault Kanpur",
      dealerAddress: "Plot No. 10 & 11, G.T. Road, Near Rama Devi, Kanpur, Uttar Pradesh, 208007",
      dealerPhone: "09462518486"
    },
    timeline: [
      { label: "Booking Initiated", desc: "Your booking has been initiated successfully.", status: "completed" },
      { label: "Payment Verified", desc: "Your payment has been verified successfully.", status: "completed" },
      { label: "Pending Confirmation", desc: "Awaiting verification from Renault Showroom.", status: "completed" },
      { label: "Booking Confirmed", desc: "Your booking is confirmed.", status: "active" }
    ]
  },
  {
    id: "BK112",
    name: "Rakesh Singh",
    amount: "₹38,000",
    bookingDate: "29 Jan 2026",
    datetime: "29 Jan, Wed, 6:30 PM",
    status: "Confirmed",
    customerDetails: {
      title: "Mr.",
      firstName: "Rakesh",
      lastName: "Singh",
      email: "rakesh.singh@gmail.com",
      phone: "9876543210",
      city: "Lucknow",
      dealership: "Renault Lucknow",
      dealerAddress: "Hazratganj Road, Near GPO, Lucknow, Uttar Pradesh, 226001",
      dealerPhone: "09839012345"
    },
    timeline: [
      { label: "Booking Initiated", desc: "Your booking has been initiated successfully.", status: "completed" },
      { label: "Payment Verified", desc: "Your payment has been verified successfully.", status: "completed" },
      { label: "Pending Confirmation", desc: "Awaiting verification from Renault Showroom.", status: "completed" },
      { label: "Booking Confirmed", desc: "Your booking is confirmed.", status: "active" }
    ]
  },
  {
    id: "BK113",
    name: "Pulkit Jaiswal",
    amount: "₹25,000",
    bookingDate: "19 Apr 2026",
    datetime: "19 Apr, Wed, 6:45 PM",
    status: "Failed",
    refundAmount: "₹28900",
    refundDate: "10 jun 2026",
    cancellationId:"311",
    customerDetails: {
      title: "Mr.",
      firstName: "Pulkit",
      lastName: "Jaiswal",
      email: "pulkit.j@gmail.com",
      phone: "8877665544",
      city: "Kanpur",
     pincode: "302201",

      dealership: "Renault Kanpur",
      dealerAddress: "Plot No. 10 & 11, G.T. Road, Near Rama Devi, Kanpur, Uttar Pradesh, 208007",
      dealerPhone: "09462518486"
    },
  },
  {
    id: "BK114",
    name: "Anita Desai",
    amount: "₹10,000",
    bookingDate: "28 Feb 2026",
    datetime: "28 Feb, Tue, 11:30 AM",
    status: "Refunded",
    customerDetails: {
      title: "Mrs.",
      firstName: "Anita",
      lastName: "Desai",
      email: "anita.desai@yahoo.com",
      phone: "7766554433",
      city: "Mumbai",
     pincode: "302201",

      dealership: "Renault Mumbai West",
      dealerAddress: "S.V. Road, Bandra West, Mumbai, Maharashtra, 400050",
      dealerPhone: "0229876543"
    },
    refundDetails: {
      refundAmount: "₹30,000",
      refundRefId: "#BK114REF99",
      reason: "Non purchasing by user",
      cancellationCharge: "Cancellation - 70% Refund",
      details: "After cancellation, user wants to proceed with another vehicle purchase discount coupon request on completion of the refund of this booking."
    },
    timeline: [
      { label: "Booking Cancelled", desc: "Refund Amount: ₹30,000 | Ref ID: #BK104REF99", status: "completed" },
      { label: "Refund Initiated", desc: "Refund request created in gateway.", status: "completed" },
      { label: "Processing", desc: "Expected within 5 business days.", status: "active" },
      { label: "Refund Executed", desc: "Amount will be credited to bank.", status: "pending" }
    ]
  },
  {
    id: "BK115",
    name: "Suresh Kumar",
    amount: "₹70,000",
    bookingDate: "27 Apr 2026",
    datetime: "27 Apr, Mon, 4:10 PM",
    status: "Confirmed",
    customerDetails: {
      title: "Mr.",
      firstName: "Suresh",
      lastName: "Kumar",
      email: "suresh.kumar@rediffmail.com",
      phone: "9988776655",
      city: "Chennai",
     pincode: "302201",

      dealership: "Renault Chennai Central",
      dealerAddress: "Mount Road, Nandanam, Chennai, Tamil Nadu, 600035",
      dealerPhone: "0449876543"
    },
    timeline: [
      { label: "Booking Initiated", desc: "Your booking has been initiated successfully.", status: "completed" },
      { label: "Payment Verified", desc: "Your payment has been verified successfully.", status: "completed" },
      { label: "Pending Confirmation", desc: "Awaiting verification from Renault Showroom.", status: "completed" },
      { label: "Booking Confirmed", desc: "Your booking is confirmed.", status: "active" }
    ]
  },
  {
    id: "BK116",
    name: "Meera Patel",
    amount: "₹28,000",
    bookingDate: "25 Mar 2026",
    datetime: "25 Mar, Sat, 10:20 AM",
    refundAmount: "₹28900",
    refundDate: "12 jun 2026",
    status: "Failed",
    cancellationId:"231",
    
    customerDetails: {
      title: "Miss",
      firstName: "Meera",
      lastName: "Patel",
      email: "meera.patel@gmail.com",
      phone: "9123456789",
      city: "Ahmedabad",
      pincode: "302201",
      dealership: "Renault Ahmedabad East",
      dealerAddress: "SG Highway, Bodakdev, Ahmedabad, Gujarat, 380054",
      dealerPhone: "0794561230"
    },
    timeline: [
      { label: "Booking Initiated", desc: "Your booking has been initiated successfully.", status: "completed" },
      { label: "Payment Verified", desc: "Your payment has been verified successfully.", status: "completed" },
      { label: "Pending Confirmation", desc: "Awaiting verification from Renault Showroom.", status: "active" },
      { label: "Booking Confirmed", desc: "Your booking will be confirmed soon.", status: "pending" }
    ]
  },


];
