import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BusinessDetail.css"; // Assuming you have a CSS file for styling
import PdfContext from "../../ContextApi/PdfContext";

// Tiele Of The Page
const BusinessDetail = () => {
  useEffect(() => {
    document.title = "Business Registration - Lnassociate"; // Dynamic Title
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
    1: "Pvt Ltd Company",
    2: "BASIC REGISTRATION",
    3: "MSME Proprietorship",
    4: "Iec Proprietorship",
    5: "Trademark",
    6: "Gst Proprietorship",
  };

  const [selectedPlan, setSelectedPlan] = useState(defaultPlan[id]); // State to manage the selected plan
  const services = [
    { id: 1, title: "Company / LLP / Firm Registration" },
    { id: 2, title: "FSSAI" },
    { id: 3, title: "MSME Udyam Registration" },
    { id: 4, title: "IEC Code" },
    { id: 5, title: "Trade Mark" },
    { id: 6, title: "GST" },
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
        <li>✔ NOTE: DEPENDING ON REQUIREMENT OF CLIENT</li>
      </ul>
    ),
    Partnership: (
      <ul>
        <li>
          ✔ ID PROOF: 1. Passport Size Photo Promoter/ Partner, 2. Aadhar Card
          Promoter/ Partner, 3. Pan Card Promoter/ Partner
        </li>
        <li>✔ NOTE: OTHERS DEPENDING ON REQUIREMENT OF CLIENT</li>
      </ul>
    ),
    "Pvt Ltd Company": (
      <ul>
        <li>✔ PAN (SELF ATTACHED)</li>
        <li>✔ AADHAR CARD (SELF ATTACHED)</li>
        <li>✔ PASSPORT SIZE PHOTO</li>
        <li>
          ✔ PROOF OF IDENTITY (ANY ONE): 1. Voters Identity Card, 2. Passport,
          3. Driving License (SELF ATTACHED)
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE): 1. Bank Statement, 2. Electricity Bill,
          3. Telephone Bill, 4. Mobile Bill (NOT OLDER THAN TWO MONTHS, SELF
          ATTACHED)
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office: 1. Dastavej, 2. Municipal Tax
          Bill, 3. Rent Agreement with Rent Receipt of last month
        </li>
        <li>
          ✔ Address Proof for Registered Office: 1. Electricity Bill, 2.
          Telephone Bill, 3. Utility Bill, 4. Bank Statement (NOT OLDER THAN 2
          MONTHS)
        </li>
      </ul>
    ),
    "Pub Ltd Company": (
      <ul>
        <li>✔ PAN (SELF ATTACHED)</li>
        <li>✔ AADHAR CARD (SELF ATTACHED)</li>
        <li>✔ PASSPORT SIZE PHOTO</li>
        <li>
          ✔ PROOF OF IDENTITY (ANY ONE): 1. Voters Identity Card, 2. Passport,
          3. Driving License (SELF ATTACHED)
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE): 1. Bank Statement, 2. Electricity Bill,
          3. Telephone Bill, 4. Mobile Bill (NOT OLDER THAN TWO MONTHS, SELF
          ATTACHED)
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office: 1. Dastavej, 2. Municipal Tax
          Bill, 3. Rent Agreement with Rent Receipt of last month
        </li>
        <li>
          ✔ Address Proof for Registered Office: 1. Electricity Bill, 2.
          Telephone Bill, 3. Utility Bill, 4. Bank Statement (NOT OLDER THAN 2
          MONTHS)
        </li>
      </ul>
    ),
    OPC: (
      <ul>
        <li>✔ PAN (SELF ATTACHED)</li>
        <li>✔ AADHAR CARD (SELF ATTACHED)</li>
        <li>✔ PASSPORT SIZE PHOTO</li>
        <li>
          ✔ PROOF OF IDENTITY (ANY ONE): 1. Voters Identity Card, 2. Passport,
          3. Driving License (SELF ATTACHED)
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE): 1. Bank Statement, 2. Electricity Bill,
          3. Telephone Bill, 4. Mobile Bill (NOT OLDER THAN TWO MONTHS, SELF
          ATTACHED)
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office: 1. Dastavej, 2. Municipal Tax
          Bill, 3. Rent Agreement with Rent Receipt of last month
        </li>
        <li>
          ✔ Address Proof for Registered Office: 1. Electricity Bill, 2.
          Telephone Bill, 3. Utility Bill, 4. Bank Statement (NOT OLDER THAN 2
          MONTHS)
        </li>
      </ul>
    ),
    "Sec 8 Company Or Ngo Company": (
      <ul>
        <li>✔ PAN (SELF ATTACHED)</li>
        <li>✔ AADHAR CARD (SELF ATTACHED)</li>
        <li>✔ PASSPORT SIZE PHOTO</li>
        <li>
          ✔ PROOF OF IDENTITY (ANY ONE): 1. Voters Identity Card, 2. Passport,
          3. Driving License (SELF ATTACHED)
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE): 1. Bank Statement, 2. Electricity Bill,
          3. Telephone Bill, 4. Mobile Bill (NOT OLDER THAN TWO MONTHS, SELF
          ATTACHED)
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office: 1. Dastavej, 2. Municipal Tax
          Bill, 3. Rent Agreement with Rent Receipt of last month
        </li>
        <li>
          ✔ Address Proof for Registered Office: 1. Electricity Bill, 2.
          Telephone Bill, 3. Utility Bill, 4. Bank Statement (NOT OLDER THAN 2
          MONTHS)
        </li>
      </ul>
    ),
    LLP: (
      <ul>
        <li>✔ PAN (SELF ATTACHED)</li>
        <li>✔ AADHAR CARD (SELF ATTACHED)</li>
        <li>✔ PASSPORT SIZE PHOTO</li>
        <li>
          ✔ PROOF OF IDENTITY (ANY ONE): 1. Voters Identity Card, 2. Passport,
          3. Driving License (SELF ATTACHED)
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE): 1. Bank Statement, 2. Electricity Bill,
          3. Telephone Bill, 4. Mobile Bill (NOT OLDER THAN TWO MONTHS, SELF
          ATTACHED)
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office: 1. Dastavej, 2. Municipal Tax
          Bill, 3. Rent Agreement with Rent Receipt of last month
        </li>
        <li>
          ✔ Address Proof for Registered Office: 1. Electricity Bill, 2.
          Telephone Bill, 3. Utility Bill, 4. Bank Statement (NOT OLDER THAN 2
          MONTHS)
        </li>
      </ul>
    ),
    "Nidhi Company": (
      <ul>
        <li>✔ PAN (SELF ATTACHED)</li>
        <li>✔ AADHAR CARD (SELF ATTACHED)</li>
        <li>✔ PASSPORT SIZE PHOTO</li>
        <li>
          ✔ PROOF OF IDENTITY (ANY ONE): 1. Voters Identity Card, 2. Passport,
          3. Driving License (SELF ATTACHED)
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE): 1. Bank Statement, 2. Electricity Bill,
          3. Telephone Bill, 4. Mobile Bill (NOT OLDER THAN TWO MONTHS, SELF
          ATTACHED)
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office: 1. Dastavej, 2. Municipal Tax
          Bill, 3. Rent Agreement with Rent Receipt of last month
        </li>
        <li>
          ✔ Address Proof for Registered Office: 1. Electricity Bill, 2.
          Telephone Bill, 3. Utility Bill, 4. Bank Statement (NOT OLDER THAN 2
          MONTHS)
        </li>
        <li>✔ NOTE: OTHER DOCUMENTS REQUIRED DEPENDING ON REQUIREMENT</li>
      </ul>
    ),
    "Producer Company": (
      <ul>
        <li>✔ PAN (SELF ATTACHED)</li>
        <li>✔ AADHAR CARD (SELF ATTACHED)</li>
        <li>✔ PASSPORT SIZE PHOTO</li>
        <li>
          ✔ PROOF OF IDENTITY (ANY ONE): 1. Voters Identity Card, 2. Passport,
          3. Driving License (SELF ATTACHED)
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE): 1. Bank Statement, 2. Electricity Bill,
          3. Telephone Bill, 4. Mobile Bill (NOT OLDER THAN TWO MONTHS, SELF
          ATTACHED)
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office: 1. Dastavej, 2. Municipal Tax
          Bill, 3. Rent Agreement with Rent Receipt of last month
        </li>
        <li>
          ✔ Address Proof for Registered Office: 1. Electricity Bill, 2.
          Telephone Bill, 3. Utility Bill, 4. Bank Statement (NOT OLDER THAN 2
          MONTHS)
        </li>
        <li>✔ NOTE : OTHER DOCUMENTS REQUIRED DEPENDING ON REQUIREMENT</li>
      </ul>
    ),
    NBFC: (
      <ul>
        <li>✔ PAN (SELF ATTACHED)</li>
        <li>✔ AADHAR CARD (SELF ATTACHED)</li>
        <li>✔ PASSPORT SIZE PHOTO</li>
        <li>
          ✔ PROOF OF IDENTITY (ANY ONE): 1. Voters Identity Card, 2. Passport,
          3. Driving License (SELF ATTACHED)
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE): 1. Bank Statement, 2. Electricity Bill,
          3. Telephone Bill, 4. Mobile Bill (NOT OLDER THAN TWO MONTHS, SELF
          ATTACHED)
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office: 1. Dastavej, 2. Municipal Tax
          Bill, 3. Rent Agreement with Rent Receipt of last month
        </li>
        <li>
          ✔ Address Proof for Registered Office: 1. Electricity Bill, 2.
          Telephone Bill, 3. Utility Bill, 4. Bank Statement (NOT OLDER THAN 2
          MONTHS)
        </li>
      </ul>
    ),
    "Conversion Of Company": (
      <ul>
        <li>✔ DEPENDING ON REQUIREMENT OF CLIENT</li>
      </ul>
    ),

    "BASIC REGISTRATION": (
      <ul>
        <li>
          ✔ 1. Pan 2. Aadhar 3. Mobile no 4. Email 5. Name of firm 6. Address of
          firm 7. Passport size Photo 8. Light Bill of Firm 9. Nature of work
        </li>
      </ul>
    ),
    "STATE REGISTRATION": (
      <ul>
        <li>
          ✔ 1. Plan of the processing unit showing the dimensions and
          operation-wise area allocation 2. List of Directors/ Partners/
          Proprietor with address, contact details, and photo ID (If Applicable)
          3. Name and list of equipment and machinery used with the number and
          installed capacity 4. List of food category to be manufactured 5.
          Authority letter from manufacturer nominated a responsible person name
          and address (If Applicable) 6. Analysis report of water to be used in
          the process to confirm the portability 7. Proof of possession of
          premises 8. Partnership deed/ affidavit of proprietorship 9. NOC and
          copy of License from the manufacturer (If Applicable) 10. Copy of
          certificate obtained under Coop Act 1861/Multi state Coop Act 2002 (If
          Applicable) 11. Food safety management system plan or certificate
        </li>
      </ul>
    ),
    "CENTRAL REGISTRATION": (
      <ul>
        <li>
          ✔ 1. Plan of the processing unit showing the dimensions and
          operation-wise area allocation 2. List of Directors/ Partners/
          Proprietor with address, contact details, and photo ID (If Applicable)
          3. Name and list of equipment and machinery used with the number and
          installed capacity 4. List of food category to be manufactured 5.
          Authority letter from manufacturer nominated a responsible person name
          and address (If Applicable) 6. Analysis report of water to be used in
          the process to confirm the portability 7. Source of raw material for
          milk, meat etc 8. Recall plan wherever applicable (If Applicable) 9.
          Ministry of Commerce Certificate for 100% EOU (If Applicable) 10.
          NOC/PA document issued by FSSAI (If Applicable) 11. IE code document
          issued by DGFT (If Applicable) 12. Form IX 13. Certificate from
          Ministry of Tourism (If Applicable) 14. Proof of possession of
          premises (If Applicable)
        </li>
      </ul>
    ),
    "MSME Proprietorship": (
      <ul>
        <li>
          ✔ NEW MSME :- 1.Aadhar Card 2. Pan Card 3. Cancel Check 4. Business
          Name 5. Elecricticty Bill (Business Place) 6. Business Activity
        </li>
        <li>
          ✔ UPDATE MSME :- 1. Msme Regisration Number 2. Aadhar Card 3. Pan Card
          4. Cancel Check 5. Business Name 6 . Elecricticty Bill (Business
          Place) 7. Business Activity
        </li>
      </ul>
    ),
    "MSME Partnership": (
      <ul>
        <li>
          ✔ NEW MSME :- 1.Aadhar Card 2. Pan Card 3. Cancel Check 4. Business
          Name 5. Elecricticty Bill (Business Place) 6. Business Activity 7. GST
          Certificate (Optional)
        </li>
        <li>
          ✔ UPDATE MSME :- 1. Msme Regisration Number 2. Aadhar Card 3. Pan Card
          4. Cancel Check 5. Business Name 6 . Elecricticty Bill (Business
          Place) 7. Business Activity 8. GST Certificate (Optional)
        </li>
      </ul>
    ),
    "MSME Private Limited Company": (
      <ul>
        <li>
          ✔ NEW MSME :- 1.Aadhar Card 2. Pan Card 3. Cancel Check 4. Business
          Name 5. Elecricticty Bill (Business Place) 6. Business Activity 7. GST
          Certificate (Optional)
        </li>
        <li>
          ✔ UPDATE MSME :- 1. Msme Regisration Number 2. Aadhar Card 3. Pan Card
          4. Cancel Check 5. Business Name 6 . Elecricticty Bill (Business
          Place) 7. Business Activity 8. GST Certificate (Optional)
        </li>
      </ul>
    ),
    "MSME LLP": (
      <ul>
        <li>
          ✔ NEW MSME :- 1.Aadhar Card 2. Pan Card 3. Cancel Check 4. Business
          Name 5. Elecricticty Bill (Business Place) 6. Business Activity 7. GST
          Certificate (Optional)
        </li>
        <li>
          ✔ UPDATE MSME :- 1. Msme Regisration Number 2. Aadhar Card 3. Pan Card
          4. Cancel Check 5. Business Name 6 . Elecricticty Bill (Business
          Place) 7. Business Activity 8. GST Certificate (Optional)
        </li>
      </ul>
    ),
    "Iec Proprietorship": (
      <ul>
        <li>
          ✔ NEW ICE CODE :- 1. GST Certificate 2. Aadhar Card 3. Pan Card 4.
          Cancel Check 5. Elecricticty Bill (Business Place) 6. Business
          Activity 7. Moblie Number 8. Email Id
        </li>
        <li>
          ✔ UPDATE ICE CODE :- 1. Id Password 2. Old ICE Code 3. GST Certificate
          4. Aadhar Card 5. Pan Card 6. Cancel Check 7. Elecricticty Bill
          (Business Place) 8. Business Activity 9. Moblie Number 10. Mail Id
        </li>
      </ul>
    ),
    "Iec Partnership": (
      <ul>
        <li>
          ✔ NEW ICE CODE :- 1. Partnership Deed 2. All Partner Aadhar Card 3.
          All Partner Pan Card 4. GST Certificate 5. Elecricticty Bill (Business
          Place) 6. Business Activity 7. Moblie Number 8. Email Id
        </li>
        <li>
          ✔ UPDATE ICE CODE :- 1. Id Password 2. Old ICE Code 3. Partnership
          Deed 4. All Partner Aadhar Card 5. All Partner Pan Card 6. GST
          Certificate 7. Elecricticty Bill (Business Place) 8. Business Activity
          9. Moblie Number 10. Email Id
        </li>
      </ul>
    ),
    "Iec Private Limited Company": (
      <ul>
        <li>
          ✔ NEW ICE CODE :- 1. All Director Aadhar Card 2. All Director Aadhar
          Card 3. Incorporation Certificate 4. GST Certificate 5. Elecricticty
          Bill (Business Place) 6. Business Activity 7. Moblie Number 8. Email
          Id
        </li>
        <li>
          ✔ UPDATE ICE CODE :- 1. Id Password 2. Old ICE Code 3. All Director
          Aadhar Card 4. All Director Aadhar Card 5. Incorporation Certificate
          6. GST Certificate 7. Elecricticty Bill (Business Place) 8. Business
          Activity 9. Moblie Number 10. Email Id
        </li>
      </ul>
    ),
    "Iec LLP": (
      <ul>
        <li>
          ✔ NEW ICE CODE :- 1. Partnership Deed 2. All Partner Aadhar Card 3.
          All Partner Pan Card 4. GST Certificate 5. Elecricticty Bill (Business
          Place) 6. Business Activity 7. Moblie Number 8. Email Id
        </li>
        <li>
          ✔ UPDATE ICE CODE :- 1. Id Password 2. Old ICE Code 3. Partnership
          Deed 4. All Partner Aadhar Card 5. All Partner Pan Card 6. GST
          Certificate 7. Elecricticty Bill (Business Place) 8. Business Activity
          9. Moblie Number 10. Email Id
        </li>
      </ul>
    ),
    Trademark: (
      <ul>
        <li>✔ Copy of Logo (Optional)</li>
        <li>✔ Udyog Aadhar Registration Certificate</li>
        <li>✔ Incorporation Certificate or Partnership Deed</li>
        <li>
          ✔ Identity Proof of Signatory (All Partner/Person Self Certified)
        </li>
        <li>
          ✔ Address Proof of Signatory (All Partner/Person Self Certified)
        </li>
        <li>✔ Applicant Partner/Person Name</li>
        <li>✔ Digital Signature</li>
      </ul>
    ),
    "Gst Proprietorship": (
      <ul>
        <li>
          ✔ ID PROOF: 1. Passport Size Photo, 2. Aadhar Card , 3. Pan Card
        </li>
        <li>
          ✔ PROOF OF BUSSINESS PLACE ( ANY ONE ): 1. Electricity Bill, 2. Legal
          Ownership Document, 3. Property Tax Receipt , 4. Municipal Khata Copy
          , 5. Rent/lease Agreement / Consent Letter
        </li>
      </ul>
    ),
    "Gst Partnership": (
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
          , 5. Rent/lease Agreement
        </li>
      </ul>
    ),
    "Gst Pvt Ltd Company": (
      <ul>
        <li>
          ✔ ID PROOF : 1. Passport Size Photo Of Directors, 2. Aadhar Card Of
          Directors, 3. Pan Card Of Directors, 4. Pan Card Of Company.
        </li>
        <li>
          ✔ PROOF OF CONSTITUTION OF BUSSINESS : 1. Certificate Of Incorporation
          2. Letter Of Authorisation
        </li>
        <li>
          ✔ PROOF OF BUSSINESS PLACE ( ANY ONE ) : 1. Electricity Bill 2. Legal
          Ownership Document 3. Property Tax Receipt 4. Municipal Khata Copy 5 .
          Rent/lease Agreement/ Noc
        </li>
      </ul>
    ),
    "Gst LLP": (
      <ul>
        <li>
          ✔ ID PROOF : 1. Passport Size Photo Promoter/ Partner 2. Aadhar Card
          Promoter/ Partner 3. Pan Card Promoter/ Partner 4. Pan Card Of Firm
        </li>
        <li>
          ✔ PROOF OF CONSTITUTION OF BUSSINESS : 1. Certificate Of Incorporation
          2. Letter Of Authorisation
        </li>
        <li>
          ✔ PROOF OF BUSSINESS PLACE ( ANY ONE ) : 1. Electricity Bill 2. Legal
          Ownership Document 3. Property Tax Receipt 4. Municipal Khata Copy 5 .
          Rent/lease Agreement/ Noc
        </li>
      </ul>
    ),
  };

  const planPricing = {
    "Pvt Ltd Company": "₹ 7999 /- Only.",
    "Pub Ltd Company": "₹ 9999 /- Only.",
    OPC: "₹ 5999 /- Only.",
    "Sec 8 Company Or Ngo Company": "₹ 11999 /- Only.",
    LLP: "₹ 5999 /- Only.",
    "Nidhi Company": "₹ 16999 /- Only.",
    "Producer Company": "₹ 19999 /- Only.",
    NBFC: "₹ 29999 /- Only.",
    "Conversion of Company": "₹ 25099 /- Only.",
    Proprietorship: "₹ 999 /- Only.",
    Partnership: "₹ 1499 /- Only.",
    "BASIC REGISTRATION": "₹ 2499 /- Only.",
    "STATE REGISTRATION": "₹ 7999 /- Only.",
    "CENTRAL REGISTRATION": "₹ 14999 /- Only.",

    // MSME Price 
    "MSME Proprietorship": "₹ 1500 /- Only.",
    "MSME Partnership": "₹ 1500 /- Only.",
    "MSME Private Limited Company": "₹ 1500 /- Only.",
    "MSME LLP": "₹ 1500 /- Only.",

    // IEC Code Price 
    "Iec Proprietorship": "₹ 1500 /- Only.",
    "Iec Partnership": "₹ 1500 /- Only.",
    "Iec Private Limited Company": "₹ 1500 /- Only.",
    "Iec LLP": "₹ 1500 /- Only.",

    // Trade Mark Price
    Trademark: "₹ 10000 /- Only.",

    // GST Price
    "Gst Proprietorship": "₹ 3500 /- Only.",
    "Gst Partnership": "₹ 3500 /- Only.",
    "Gst Pvt Ltd Company": "₹ 3500 /- Only.",
    "Gst LLP": "₹ 3500 /- Only.",
  };

  return (
    <>
      <div className="container py-5" style={{marginTop:"7rem"}}>
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: 600 }}
        >
          <h2 className="fw-bold text-primary text-uppercase">
            {service.title}
          </h2>
        </div>

        <div className="pricing-container">
          <h3 className="pricing-title text-center">Pricing</h3>
          <h4 className="choose-plan-title text-center">Choose your Plan</h4>

          <div className="plan-selector">
            {/* Company/LLP/Firm Registration */}
            {id === "1" && (
              <>
                <button
                  className={`plan-btn ${selectedPlan === "Pvt Ltd Company" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("Pvt Ltd Company")}
                >
                  Pvt Ltd Company
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "Pub Ltd Company" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("Pub Ltd Company")}
                >
                  Pub Ltd Company
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "OPC" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("OPC")}
                >
                  OPC
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "Sec 8 Company Or Ngo Company"
                      ? "active"
                      : ""
                    }`}
                  onClick={() =>
                    handlePlanChange("Sec 8 Company Or Ngo Company")
                  }
                >
                  Sec 8 Company Or Ngo Company
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "LLP" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("LLP")}
                >
                  LLP
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "Nidhi Company" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("Nidhi Company")}
                >
                  Nidhi Company
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "Producer Company" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("Producer Company")}
                >
                  Producer Company
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "NBFC" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("NBFC")}
                >
                  NBFC
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "Conversion of Company" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("Conversion of Company")}
                >
                  Conversion of Company
                </button>
              </>
            )}

            {/* FSSAI Registration */}
            {id === "2" && (
              <>
                <button
                  className={`plan-btn ${selectedPlan === "BASIC REGISTRATION" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("BASIC REGISTRATION")}
                >
                  BASIC REGISTRATION
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "STATE REGISTRATION" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("STATE REGISTRATION")}
                >
                  STATE REGISTRATION
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "CENTRAL REGISTRATION" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("CENTRAL REGISTRATION")}
                >
                  CENTRAL REGISTRATION
                </button>
              </>
            )}

            {/* MSME Udyam Registration */}
            {id === "3" && (
              <>
                <button
                  className={`plan-btn ${selectedPlan === "MSME Proprietorship" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("MSME Proprietorship")}
                >
                  Proprietorship
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "MSME Partnership" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("MSME Partnership")}
                >
                  Partnership
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "MSME Private Limited Company" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("MSME Private Limited Company")}
                >
                  Private Limited Company
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "MSME LLP" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("MSME LLP")}
                >
                  LLP
                </button>
              </>
            )}

            {/* IEC Code Registration */}
            {id === "4" && (
              <>
                <button
                  className={`plan-btn ${selectedPlan === "Iec Proprietorship" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("Iec Proprietorship")}
                >
                  Proprietorship
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "Iec Partnership" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("Iec Partnership")}
                >
                  Partnership
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "Iec Private Limited Company" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("Iec Private Limited Company")}
                >
                  Private Limited Company
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "Iec LLP" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("Iec LLP")}
                >
                  LLP
                </button>
              </>
            )}

            {/* Trade Mark Registration */}
            {id === "5" && (
              <>
                <button
                  className={`plan-btn ${selectedPlan === "Trademark" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("Trademark")}
                >
                  Trademark
                </button>
              </>
            )}

            {/* GST Registration */}
            {id === "6" && (
              <>
                <button
                  className={`plan-btn ${selectedPlan === "Gst Proprietorship" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("Gst Proprietorship")}
                >
                  Proprietorship
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "Gst Partnership" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("Gst Partnership")}
                >
                  Partnership
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "Gst Pvt Ltd Company" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("Gst Pvt Ltd Company")}
                >
                  Private Limited Company
                </button>
                <button
                  className={`plan-btn ${selectedPlan === "Gst LLP" ? "active" : ""
                    }`}
                  onClick={() => handlePlanChange("Gst LLP")}
                >
                  LLP
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
            <button className="download-btn" onClick={handleDownloadClick}>
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessDetail;
