import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../business/BusinessDetail.css"; // Assuming you have a CSS file for styling
import PdfContext from "../../ContextApi/PdfContext";

const GstDetail = () => {
  useEffect(() => {
    document.title = "GST - Lnassociate"; // Dynamic Title
  }, []);
  const { id } = useParams(); // Get the `id` from the URL
  
  const { setTriggerDownload, setSelectedDocuments } =
    useContext(PdfContext);

  // Handle Download Pdf
  const handleDownloadClick = () => {
    // Update The Context With Current PalanDocuments Details When Download Is Clicked
    setSelectedDocuments(planDocuments[selectedPlan]);
    setTriggerDownload(true)
  };


  // Default Plans For Intial Page Rendering And To Active First Plan
  const defaultPlan = {
    1: "Proprietorship",
    2: "GST Return Filing",
    3: "GST Refund",
    4: "GST Annual Return Filing",
    5: "GST LUT Filing",
    6: "GST Notices",
  };
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan[id]); // State to manage the selected plan

  const services = [
    { id: 1, title: "GST Registration", icon: "fa-search" },
    { id: 2, title: "GST Return Filing", icon: "fa-search" },
    { id: 3, title: "GST Refund", icon: "fa-search" },
    { id: 4, title: "GST Annual Return", icon: "fa-search" },
    { id: 5, title: "GST LUT filing", icon: "fa-search" },
    { id: 6, title: "GST Tax Notices", icon: "fa-search" },
    { id: 7, title: "GST Appeal", icon: "fa-search" },
  ];

  // Find the service based on the `id`
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return <div>Service not found!</div>; // If no service is found, display a message
  }

  // Function to handle plan selection
  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  // Conditional content based on plan selection
  const planDocuments = {
    Proprietorship: (
      <ul>
        <li>✔ ID PROOF: 1. Passport Size Photo, 2. Aadhar Card, 3. Pan Card</li>
        <li>
          ✔ PROOF OF BUSINESS PLACE (ANY ONE): 1. Electricity Bill, 2. Legal
          Ownership Document, 3. Property Tax Receipt, 4. Municipal Khata Copy,
          5. Rent/Lease Agreement
        </li>
      </ul>
    ),
    Partnership: (
      <ul>
        <li>
          ✔ ID PROOF : 1. Passport Size Photo Promoter/ Partner, 2. Aadhar Card
          Promoter/ Partner, 3. Pan Card Promoter/ Partner, 4. Partnership Firm
          Pan Card.
        </li>
        <li>
          ✔ PROOF OF CONSTITUTION OF BUSSINESS : 1. Partnership Deed, 2. Letter
          Of Authorisation.
        </li>
        <li>
          ✔ PROOF OF BUSSINESS PLACE ( ANY ONE ) : 1. Electricity Bill, 2. Legal
          Ownership Document, 3. Property Tax Receipt , 4. Municipal Khata Copy
          , 5. Rent/lease Agreement.
        </li>
      </ul>
    ),
    "Private Limited Company": (
      <ul>
        <li>
          ✔ ID PROOF : 1. Passport Size Photo Of Directors, 2. Aadhar Card Of
          Directors, 3. Pan Card Of Directors, 4. Pan Card Of Company.
        </li>
        <li>
          ✔ PROOF OF CONSTITUTION OF BUSSINESS : 1. Certificate Of Incorporation
          2. Letter Of Authorisation.
        </li>
        <li>
          ✔ PROOF OF BUSSINESS PLACE ( ANY ONE ) : 1. Electricity Bill 2. Legal
          Ownership Document 3. Property Tax Receipt 4. Municipal Khata Copy 5 .
          Rent/lease Agreement/ Noc.
        </li>
      </ul>
    ),
    LLP: (
      <ul>
        <li>
          ✔ ID PROOF : 1. Passport Size Photo Promoter/ Partner 2. Aadhar Card
          Promoter/ Partner 3. Pan Card Promoter/ Partner 4. Pan Card Of Firm.
        </li>
        <li>
          ✔ PROOF OF CONSTITUTION OF BUSSINESS : 1. Certificate Of Incorporation
          2. Letter Of Authorisation
        </li>
        <li>
          ✔ PROOF OF BUSSINESS PLACE ( ANY ONE ) : 1. Electricity Bill 2. Legal
          Ownership Document 3. Property Tax Receipt 4. Municipal Khata Copy 5 .
          Rent/lease Agreement/ Noc.
        </li>
      </ul>
    ),
    "GST Return Filing": (
      <ul>
        <li>Sales Invoice</li>
        <li>Purchases Invoice</li>
        <li>Gst Login ID & Password</li>
      </ul>
    ),
    "GST Refund": (
      <ul>
        <li>Declaration of GST RFD-01 – (Claimed out not exceed ITC)</li>
        <li>Undertaking as per notification No</li>
        <li>Statement -5B Rule 89(2) (g)</li>
        <li>Printout of GSTR- 3B/GSTR-3.</li>
        <li>Print out of GSTR RFD-01 & /ARN</li>
        <li>Undertaking of no prosecution Rule 91(i)</li>
        <li>Undertaking by claimant as per Para 2.0 of circular 24/2017</li>
      </ul>
    ),
    "GST Annual Return Filing": (
      <ul>
        <li>
          Details of total Inward and Outward Supplies in the scheduled
          Financial Year.
        </li>
        <li>Income Tax Credit Ledger for the scheduled Financial Year.</li>
        <li>GSTIN of Business Entity/Seller.</li>
        <li>GST Reconciliation Statement</li>
        <li>
          Details of the Block Credit, Capital Goods, and related documents.
        </li>
      </ul>
    ),
    "GST LUT Filing": (
      <ul>
        <li>Copy of GST Certificate</li>
        <li>PAN card of the entity</li>
        <li>KYC of the authorized person/signatory.</li>
        <li>Copy of the IEC code</li>
        <li>Canceled Cheque.</li>
        <li>Authorized letter</li>
        <li>GST RFD11 form</li>
      </ul>
    ),
    "GST Notices": (
      <ul>
        <li>Copy of GST Certificate</li>
        <li>PAN card of the entity</li>
      </ul>
    ),
  };

  const planPricing = {
    Proprietorship: "₹ 1999 /- Only.",
    Partnership: "₹ 2499 /- Only.",
    "Private Limited Company": "₹ 2999 /- Only.",
    LLP: "₹ 2999 /- Only.",

    // GST Return Filling Price
    "GST Return Filing": "₹ 13000 /- Only.",

    // GST Refund  Price
    "GST Refund": "₹ 25000 /- Only.",


    "GST Annual Return Filing": "₹ 2999 /- Only.",
    "GST LUT Filing": "₹ 999 /- Only.",
    "GST Notices": "₹ 1500 /- Only.",
  };

  return (
    <div className="container py-5" style={{marginTop:"7rem"}}>
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h2 className="fw-bold text-primary text-uppercase">{service.title}</h2>
      </div>

      <div className="pricing-container">
        <h3 className="pricing-title text-center">Pricing</h3>
        <h4 className="choose-plan-title text-center">Choose your Plan</h4>

        <div className="plan-selector">
          {id === "1" && (
            <>
              <button
                className={`plan-btn ${selectedPlan === "Proprietorship" ? "active" : ""
                  }`}
                onClick={() => handlePlanChange("Proprietorship")}
              >
                Proprietorship
              </button>
              <button
                className={`plan-btn ${selectedPlan === "Partnership" ? "active" : ""
                  }`}
                onClick={() => handlePlanChange("Partnership")}
              >
                Partnership
              </button>
              <button
                className={`plan-btn ${selectedPlan === "Private Limited Company" ? "active" : ""
                  }`}
                onClick={() => handlePlanChange("Private Limited Company")}
              >
                Private Limited Company
              </button>
              <button
                className={`plan-btn ${selectedPlan === "LLP" ? "active" : ""}`}
                onClick={() => handlePlanChange("LLP")}
              >
                LLP
              </button>
            </>
          )}
          {id === "2" && (
            <>
              <button
                className={`plan-btn ${selectedPlan === "GST Return Filing" ? "active" : ""
                  }`}
                onClick={() => handlePlanChange("GST Return Filing")}
              >
                GST Return Filing
              </button>
            </>
          )}
          {id === "3" && (
            <>
              <button
                className={`plan-btn ${selectedPlan === "GST Refund" ? "active" : ""
                  }`}
                onClick={() => handlePlanChange("GST Refund")}
              >
                GST Refund
              </button>
            </>
          )}
          {id === "4" && (
            <>
              <button
                className={`plan-btn ${selectedPlan === "GST Annual Return Filing" ? "active" : ""
                  }`}
                onClick={() => handlePlanChange("GST Annual Return Filing")}
              >
                GST Annual Return Filing
              </button>
            </>
          )}
          {id === "5" && (
            <>
              <button
                className={`plan-btn ${selectedPlan === "GST LUT Filing" ? "active" : ""
                  }`}
                onClick={() => handlePlanChange("GST LUT Filing")}
              >
                GST LUT Filing
              </button>
            </>
          )}
          {id === "6" && (
            <>
              <button
                className={`plan-btn ${selectedPlan === "GST Notices" ? "active" : ""
                  }`}
                onClick={() => handlePlanChange("GST Notices")}
              >
                GST Notices
              </button>
            </>
          )}
        </div>

        {/* Render Documents List */}
        <div className="documents-list">{planDocuments[selectedPlan]}</div>

        {/* Render Price */}
        <div className="price-section">
          <p className="price">{planPricing[selectedPlan]}</p>
          <p className="details-text">
            Our team will respond to you for further details
          </p>
          <button className="download-btn" onClick={handleDownloadClick}>Download</button>
        </div>
      </div>
    </div>
  );
};

export default GstDetail;
