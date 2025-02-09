import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Pages
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home';
import Business from './pages/business/Business';
import BusinessDetail from './pages/business/BusinessById';
import Accounting from './pages/accounting/Accounting';
import GST from './pages/gst/Gst';
import GstDetail from './pages/gst/GstById';
import IncomeTax from './pages/income-tax/IncomeTax';
import IncomeTaxDetail from './pages/income-tax/incomeTaxById';
import Finance from './pages/finance/Finance';
import Audit from './pages/audit/Audit';
import ContactUs from './pages/contactus/Contactus'
import ScrollToTop from './Components/ScrollToTop';


// Import Bootstrap Js
import "bootstrap/dist/js/bootstrap.bundle.min";

// Import CSS
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";

// Import Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";


const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* Common Header */}
        <Header />

        {/* Scroll To Top Functionality */}
        <ScrollToTop />

        {/* Route Definitions */}
        <div style={{ marginTop: "4rem", width: "98.8vw" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business" element={<Business />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/gst" element={<GST />} />
            <Route path="/incometax" element={<IncomeTax />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/business/:id" element={<BusinessDetail />} />
            <Route path="/gst/:id" element={<GstDetail />} />
            <Route path="/incometax/:id" element={<IncomeTaxDetail />} />
          </Routes>

          {/* Common Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
