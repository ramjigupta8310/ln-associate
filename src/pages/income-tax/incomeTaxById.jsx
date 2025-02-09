import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "../business/BusinessDetail.css"; // Assuming you have a CSS file for styling
import PdfContext from "../../ContextApi/PdfContext";

const GstDetail = () => {
  const { id } = useParams(); // Get the `id` from the URL

  const{setTriggerDownload, setSelectedDocuments} =useContext(PdfContext);

  const handleDownloadClick = ()=>{
    setSelectedDocuments(planDocuments[selectedPlan])
    setTriggerDownload(true)
  }

  // Default Plans For Intial Page Rendering And To Active First Plan
  const defaultPlan = {
    1: "TDS Return",
    2: "Business Return",
    3: "Salary Return",
    4: "NRI Return",
    5: "Income Tax Notice",
    6: "GST Notices",
  };
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan[id]); // State to manage the selected plan
  const services = [
    { id: 1, title: "TDS Return" },
    { id: 2, title: "Business Return" },
    { id: 3, title: "Salary Return" },
    { id: 4, title: "NRI Returns" },
    { id: 5, title: "Income Tax Notices" },
    { id: 6, title: "Income Tax Appeal" },
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
    "TDS Return": (
      <ul>
        <li>PAN of the deductor and the deductee</li>
        <li>Amount of tax that is paid to the government</li>
        <li>TDS challan information</li>
        <li>
          In response to a notice received from Income Tax department-You need
          the details of the Original return or details of notice
        </li>
        <li>All Bank account information</li>
        <li>NOT : Documents are required depending on the business</li>
      </ul>
    ),
    "Business Return": (
      <ul>
        <li>PAN Copy</li>
        <li>Aadhaar Copy</li>
        <li>Bank Statements</li>
        <li>Details of Investments (Optional)</li>
        <li>Details of Insurance & Loans (Optional)</li>
        <li>NOT : Documents are required depending on the business</li>
      </ul>
    ),
    "Salary Return": (
      <ul>
        <li>Form 16 (Taxpayers having salary income) (Optional)</li>
        <li>PAN Copy</li>
        <li>Aadhaar Copy</li>
        <li>Bank Statements</li>
        <li>Details of Investments (Optional)</li>
        <li>Details of Insurance & Loans (Optional)</li>
      </ul>
    ),
    "NRI Return": (
      <ul>
        <li>
          The documents to be submitted include the passport to show the number
          of days spent outside India to qualify as an NRI. Besides this, the
          NRIs need to provide the statements for the demat accounts, for the
          transactions and bank accounts held in India, as well as the TDS
          certificates received from other parties
        </li>
      </ul>
    ),
    "Income Tax Notice": (
      <ul>
        <li>Documents are required depending on the Notice</li>
      </ul>
    ),
  };

  const planPricing = {
    "TDS Return": "₹ 4999 /- Only.",

    // Business Return Price 
    "Business Return": "₹ 2500 /- Above.",

    // Salary Return Price
    "Salary Return": "₹ 2500 /- Above.",

    // NRI Return Price
    "NRI Return": "₹ 4500 /- Only.",
    "Income Tax Notice": "₹ 1999 /- Only.",
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
                className={`plan-btn ${selectedPlan === "TDS Return" ? "active" : ""
                  }`}
                onClick={() => handlePlanChange("TDS Return")}
              >
                TDS Return
              </button>
            </>
          )}
          {id === "2" && (
            <>
              <button
                className={`plan-btn ${selectedPlan === "Business Return" ? "active" : ""
                  }`}
                onClick={() => handlePlanChange("Business Return")}
              >
                Business Return
              </button>
            </>
          )}
          {id === "3" && (
            <>
              <button
                className={`plan-btn ${selectedPlan === "Salary Return" ? "active" : ""
                  }`}
                onClick={() => handlePlanChange("Salary Return")}
              >
                Salary Return
              </button>
            </>
          )}
          {id === "4" && (
            <>
              <button
                className={`plan-btn ${selectedPlan === "NRI Return" ? "active" : ""
                  }`}
                onClick={() => handlePlanChange("NRI Return")}
              >
                NRI Return
              </button>
            </>
          )}
          {id === "5" && (
            <>
              <button
                className={`plan-btn ${selectedPlan === "Income Tax Notice" ? "active" : ""
                  }`}
                onClick={() => handlePlanChange("Income Tax Notice")}
              >
                Income Tax Notice
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
