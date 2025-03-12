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
    // 6: "Gst Proprietorship",
  };

  const [selectedPlan, setSelectedPlan] = useState(defaultPlan[id]); // State to manage the selected plan
  const services = [
    { id: 1, title: "Company / LLP / Firm Registration" },
    { id: 2, title: "FSSAI" },
    { id: 3, title: "MSME Udyam Registration" },
    { id: 4, title: "IEC Code" },
    { id: 5, title: "Trade Mark" },
    // { id: 6, title: "GST" },
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
    "Proprietorship": (
      <ul>
        <li>
          ✔ ID PROOF:
          <ul className="list-unstyled">
            <li>1. Passport Size Photo</li>
            <li>2. Aadhar Card</li>
            <li>3. PAN Card</li>
          </ul>
        </li>
        <li>
          ✔ PROOF OF BUSINESS PLACE (ANY ONE):
          <ul className="list-unstyled">
            <li>1. Electricity Bill</li>
            <li>2. Legal Ownership Document</li>
            <li>3. Property Tax Receipt</li>
            <li>4. Municipal Khata Copy</li>
            <li>5. Rent/Lease Agreement</li>
          </ul>
        </li>
        <li>✔ NOTE: DEPENDING ON REQUIREMENT OF CLIENT</li>
      </ul>
    ),

    "Partnership": (
      <ul>
        <li>
          ✔ ID PROOF:
          <ul className="list-unstyled">
            <li>1. Passport Size Photo (Promoter/Partner)</li>
            <li>2. Aadhar Card (Promoter/Partner)</li>
            <li>3. PAN Card (Promoter/Partner)</li>
          </ul>
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
          ✔ PROOF OF IDENTITY (ANY ONE):
          <ul className="list-unstyled">
            <li>1. Voters Identity Card</li>
            <li>2. Passport</li>
            <li>3. Driving License (SELF ATTACHED)</li>
          </ul>
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE) (NOT OLDER THAN TWO MONTHS, SELF ATTACHED):
          <ul className="list-unstyled">
            <li>1. Bank Statement</li>
            <li>2. Electricity Bill</li>
            <li>3. Telephone Bill</li>
            <li>4. Mobile Bill</li>
          </ul>
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office:
          <ul className="list-unstyled">
            <li>1. Dastavej</li>
            <li>2. Municipal Tax Bill</li>
            <li>3. Rent Agreement with Rent Receipt of last month</li>
          </ul>
        </li>
        <li>
          ✔ Address Proof for Registered Office (NOT OLDER THAN 2 MONTHS):
          <ul className="list-unstyled">
            <li>1. Electricity Bill</li>
            <li>2. Telephone Bill</li>
            <li>3. Utility Bill</li>
            <li>4. Bank Statement</li>
          </ul>
        </li>
      </ul>
    ),

    "Pub Ltd Company": (
      <ul>
        <li>✔ PAN (SELF ATTACHED)</li>
        <li>✔ AADHAR CARD (SELF ATTACHED)</li>
        <li>✔ PASSPORT SIZE PHOTO</li>
        <li>
          ✔ PROOF OF IDENTITY (ANY ONE):
          <ul className="list-unstyled">
            <li>1. Voters Identity Card</li>
            <li>2. Passport</li>
            <li>3. Driving License (SELF ATTACHED)</li>
          </ul>
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE) (NOT OLDER THAN TWO MONTHS, SELF ATTACHED):
          <ul className="list-unstyled">
            <li>1. Bank Statement</li>
            <li>2. Electricity Bill</li>
            <li>3. Telephone Bill</li>
            <li>4. Mobile Bill</li>
          </ul>
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office:
          <ul className="list-unstyled">
            <li>1. Dastavej</li>
            <li>2. Municipal Tax Bill</li>
            <li>3. Rent Agreement with Rent Receipt of last month</li>
          </ul>
        </li>
        <li>
          ✔ Address Proof for Registered Office (NOT OLDER THAN 2 MONTHS):
          <ul className="list-unstyled">
            <li>1. Electricity Bill</li>
            <li>2. Telephone Bill</li>
            <li>3. Utility Bill</li>
            <li>4. Bank Statement</li>
          </ul>
        </li>
      </ul>
    ),

    OPC: (
      <ul>
        <li>✔ PAN (SELF ATTACHED)</li>
        <li>✔ AADHAR CARD (SELF ATTACHED)</li>
        <li>✔ PASSPORT SIZE PHOTO</li>
        <li>
          ✔ PROOF OF IDENTITY (ANY ONE):
          <ul className="list-unstyled">
            <li>1. Voters Identity Card</li>
            <li>2. Passport</li>
            <li>3. Driving License (SELF ATTACHED)</li>
          </ul>
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE) (NOT OLDER THAN TWO MONTHS, SELF ATTACHED):
          <ul className="list-unstyled">
            <li>1. Bank Statement</li>
            <li>2. Electricity Bill</li>
            <li>3. Telephone Bill</li>
            <li>4. Mobile Bill</li>
          </ul>
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office:
          <ul className="list-unstyled">
            <li>1. Dastavej</li>
            <li>2. Municipal Tax Bill</li>
            <li>3. Rent Agreement with Rent Receipt of last month</li>
          </ul>
        </li>
        <li>
          ✔ Address Proof for Registered Office (NOT OLDER THAN 2 MONTHS):
          <ul className="list-unstyled">
            <li>1. Electricity Bill</li>
            <li>2. Telephone Bill</li>
            <li>3. Utility Bill</li>
            <li>4. Bank Statement</li>
          </ul>
        </li>
      </ul>
    ),

    "Sec 8 Company Or Ngo Company": (
      <ul>
        <li>✔ PAN (SELF ATTACHED)</li>
        <li>✔ AADHAR CARD (SELF ATTACHED)</li>
        <li>✔ PASSPORT SIZE PHOTO</li>
        <li>
          ✔ PROOF OF IDENTITY (ANY ONE):
          <ul className="list-unstyled">
            <li>1. Voters Identity Card</li>
            <li>2. Passport</li>
            <li>3. Driving License (SELF ATTACHED)</li>
          </ul>
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE) (NOT OLDER THAN TWO MONTHS, SELF ATTACHED):
          <ul className="list-unstyled">
            <li>1. Bank Statement</li>
            <li>2. Electricity Bill</li>
            <li>3. Telephone Bill</li>
            <li>4. Mobile Bill</li>
          </ul>
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office:
          <ul className="list-unstyled">
            <li>1. Dastavej</li>
            <li>2. Municipal Tax Bill</li>
            <li>3. Rent Agreement with Rent Receipt of last month</li>
          </ul>
        </li>
        <li>
          ✔ Address Proof for Registered Office (NOT OLDER THAN 2 MONTHS):
          <ul className="list-unstyled">
            <li>1. Electricity Bill</li>
            <li>2. Telephone Bill</li>
            <li>3. Utility Bill</li>
            <li>4. Bank Statement</li>
          </ul>
        </li>
      </ul>
    ),

    LLP: (
      <ul>
        <li>✔ PAN (SELF ATTACHED)</li>
        <li>✔ AADHAR CARD (SELF ATTACHED)</li>
        <li>✔ PASSPORT SIZE PHOTO</li>
        <li>
          ✔ PROOF OF IDENTITY (ANY ONE):
          <ul className="list-unstyled">
            <li>1. Voters Identity Card</li>
            <li>2. Passport</li>
            <li>3. Driving License (SELF ATTACHED)</li>
          </ul>
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE) (NOT OLDER THAN TWO MONTHS, SELF ATTACHED):
          <ul className="list-unstyled">
            <li>1. Bank Statement</li>
            <li>2. Electricity Bill</li>
            <li>3. Telephone Bill</li>
            <li>4. Mobile Bill</li>
          </ul>
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office:
          <ul className="list-unstyled">
            <li>1. Dastavej</li>
            <li>2. Municipal Tax Bill</li>
            <li>3. Rent Agreement with Rent Receipt of last month</li>
          </ul>
        </li>
        <li>
          ✔ Address Proof for Registered Office (NOT OLDER THAN 2 MONTHS):
          <ul className="list-unstyled">
            <li>1. Electricity Bill</li>
            <li>2. Telephone Bill</li>
            <li>3. Utility Bill</li>
            <li>4. Bank Statement</li>
          </ul>
        </li>
      </ul>
    ),
    "Nidhi Company": (
      <ul>
        <li>✔ PAN (SELF ATTACHED)</li>
        <li>✔ AADHAR CARD (SELF ATTACHED)</li>
        <li>✔ PASSPORT SIZE PHOTO</li>
        <li>
          ✔ PROOF OF IDENTITY (ANY ONE):
          <ul className="list-unstyled">
            <li>1. Voters Identity Card</li>
            <li>2. Passport</li>
            <li>3. Driving License (SELF ATTACHED)</li>
          </ul>
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE) (NOT OLDER THAN TWO MONTHS, SELF ATTACHED):
          <ul className="list-unstyled">
            <li>1. Bank Statement</li>
            <li>2. Electricity Bill</li>
            <li>3. Telephone Bill</li>
            <li>4. Mobile Bill</li>
          </ul>
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office:
          <ul className="list-unstyled">
            <li>1. Dastavej</li>
            <li>2. Municipal Tax Bill</li>
            <li>3. Rent Agreement with Rent Receipt of last month</li>
          </ul>
        </li>
        <li>
          ✔ Address Proof for Registered Office (NOT OLDER THAN 2 MONTHS):
          <ul className="list-unstyled">
            <li>1. Electricity Bill</li>
            <li>2. Telephone Bill</li>
            <li>3. Utility Bill</li>
            <li>4. Bank Statement</li>
          </ul>
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
          ✔ PROOF OF IDENTITY (ANY ONE):
          <ul className="list-unstyled">
            <li>1. Voters Identity Card</li>
            <li>2. Passport</li>
            <li>3. Driving License (SELF ATTACHED)</li>
          </ul>
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE) (NOT OLDER THAN TWO MONTHS, SELF ATTACHED):
          <ul className="list-unstyled">
            <li>1. Bank Statement</li>
            <li>2. Electricity Bill</li>
            <li>3. Telephone Bill</li>
            <li>4. Mobile Bill</li>
          </ul>
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office:
          <ul className="list-unstyled">
            <li>1. Dastavej</li>
            <li>2. Municipal Tax Bill</li>
            <li>3. Rent Agreement with Rent Receipt of last month</li>
          </ul>
        </li>
        <li>
          ✔ Address Proof for Registered Office (NOT OLDER THAN 2 MONTHS):
          <ul className="list-unstyled">
            <li>1. Electricity Bill</li>
            <li>2. Telephone Bill</li>
            <li>3. Utility Bill</li>
            <li>4. Bank Statement</li>
          </ul>
        </li>
        <li>✔ NOTE: OTHER DOCUMENTS REQUIRED DEPENDING ON REQUIREMENT</li>
      </ul>
    ),
    NBFC: (
      <ul>
        <li>✔ PAN (SELF ATTACHED)</li>
        <li>✔ AADHAR CARD (SELF ATTACHED)</li>
        <li>✔ PASSPORT SIZE PHOTO</li>
        <li>
          ✔ PROOF OF IDENTITY (ANY ONE):
          <ul className="list-unstyled">
            <li>1. Voters Identity Card</li>
            <li>2. Passport</li>
            <li>3. Driving License (SELF ATTACHED)</li>
          </ul>
        </li>
        <li>
          ✔ RESIDENTIAL PROOF (ANY ONE) (NOT OLDER THAN TWO MONTHS, SELF ATTACHED):
          <ul className="list-unstyled">
            <li>1. Bank Statement</li>
            <li>2. Electricity Bill</li>
            <li>3. Telephone Bill</li>
            <li>4. Mobile Bill</li>
          </ul>
        </li>
        <li>✔ NOTE: ALL THE DIRECTOR AND SUBSCRIBER</li>
        <li>
          ✔ Ownership proof for Registered office:
          <ul className="list-unstyled">
            <li>1. Dastavej</li>
            <li>2. Municipal Tax Bill</li>
            <li>3. Rent Agreement with Rent Receipt of last month</li>
          </ul>
        </li>
        <li>
          ✔ Address Proof for Registered Office (NOT OLDER THAN 2 MONTHS):
          <ul className="list-unstyled">
            <li>1. Electricity Bill</li>
            <li>2. Telephone Bill</li>
            <li>3. Utility Bill</li>
            <li>4. Bank Statement</li>
          </ul>
        </li>
      </ul>
    ),

    "Conversion of Company": (
      <ul>
        <li>✔ DEPENDING ON REQUIREMENT OF CLIENT</li>
      </ul>
    ),

    "BASIC REGISTRATION": (
      <ul>
        <li>
          ✔ Required Documents:
          <ul className="list-unstyled">
            <li>1. PAN</li>
            <li>2. Aadhar</li>
            <li>3. Mobile No</li>
            <li>4. Email</li>
            <li>5. Name of Firm</li>
            <li>6. Address of Firm</li>
            <li>7. Passport Size Photo</li>
            <li>8. Light Bill of Firm</li>
            <li>9. Nature of Work</li>
          </ul>
        </li>
      </ul>
    ),

    "STATE REGISTRATION": (
      <ul>
        <li>
          ✔ Required Documents:
          <ul className="list-unstyled">
            <li>1. Plan of the processing unit showing dimensions and area allocation</li>
            <li>2. List of Directors/ Partners/ Proprietor with details (If Applicable)</li>
            <li>3. Name and list of equipment and machinery with installed capacity</li>
            <li>4. List of food categories to be manufactured</li>
            <li>5. Authority letter for responsible person (If Applicable)</li>
            <li>6. Analysis report of water used in the process</li>
            <li>7. Proof of possession of premises</li>
            <li>8. Partnership deed/ affidavit of proprietorship</li>
            <li>9. NOC and copy of license from the manufacturer (If Applicable)</li>
            <li>10. Certificate under Coop Act 1861/Multi-state Coop Act 2002 (If Applicable)</li>
            <li>11. Food safety management system plan or certificate</li>
          </ul>
        </li>
      </ul>
    ),

    "CENTRAL REGISTRATION": (
      <ul>
        <li>
          ✔ Required Documents:
          <ul className="list-unstyled">
            <li>1. Plan of the processing unit showing dimensions and area allocation</li>
            <li>2. List of Directors/ Partners/ Proprietor with details (If Applicable)</li>
            <li>3. Name and list of equipment and machinery with installed capacity</li>
            <li>4. List of food categories to be manufactured</li>
            <li>5. Authority letter for responsible person (If Applicable)</li>
            <li>6. Analysis report of water used in the process</li>
            <li>7. Source of raw material for milk, meat, etc.</li>
            <li>8. Recall plan (If Applicable)</li>
            <li>9. Ministry of Commerce Certificate for 100% EOU (If Applicable)</li>
            <li>10. NOC/PA document issued by FSSAI (If Applicable)</li>
            <li>11. IE code document issued by DGFT (If Applicable)</li>
            <li>12. Form IX</li>
            <li>13. Certificate from Ministry of Tourism (If Applicable)</li>
            <li>14. Proof of possession of premises (If Applicable)</li>
          </ul>
        </li>
      </ul>
    ),

    "MSME Proprietorship": (
      <ul>
        <li>
          ✔ NEW MSME:
          <ul className="list-unstyled">
            <li>1. Aadhar Card</li>
            <li>2. PAN Card</li>
            <li>3. Cancelled Cheque</li>
            <li>4. Business Name</li>
            <li>5. Electricity Bill (Business Place)</li>
            <li>6. Business Activity</li>
          </ul>
        </li>
        <li>
          ✔ UPDATE MSME:
          <ul className="list-unstyled">
            <li>1. MSME Registration Number</li>
            <li>2. Aadhar Card</li>
            <li>3. PAN Card</li>
            <li>4. Cancelled Cheque</li>
            <li>5. Business Name</li>
            <li>6. Electricity Bill (Business Place)</li>
            <li>7. Business Activity</li>
          </ul>
        </li>
      </ul>
    ),

    "MSME Partnership": (
      <ul>
        <li>
          ✔ NEW MSME:
          <ul className="list-unstyled">
            <li>1. Aadhar Card</li>
            <li>2. PAN Card</li>
            <li>3. Cancelled Cheque</li>
            <li>4. Business Name</li>
            <li>5. Electricity Bill (Business Place)</li>
            <li>6. Business Activity</li>
            <li>7. GST Certificate (Optional)</li>
          </ul>
        </li>
        <li>
          ✔ UPDATE MSME:
          <ul className="list-unstyled">
            <li>1. MSME Registration Number</li>
            <li>2. Aadhar Card</li>
            <li>3. PAN Card</li>
            <li>4. Cancelled Cheque</li>
            <li>5. Business Name</li>
            <li>6. Electricity Bill (Business Place)</li>
            <li>7. Business Activity</li>
            <li>8. GST Certificate (Optional)</li>
          </ul>
        </li>
      </ul>
    ),

    "MSME Private Limited Company": (
      <ul>
        <li>
          ✔ NEW MSME:
          <ul className="list-unstyled">
            <li>1. Aadhar Card</li>
            <li>2. PAN Card</li>
            <li>3. Cancelled Cheque</li>
            <li>4. Business Name</li>
            <li>5. Electricity Bill (Business Place)</li>
            <li>6. Business Activity</li>
            <li>7. GST Certificate (Optional)</li>
          </ul>
        </li>
        <li>
          ✔ UPDATE MSME:
          <ul className="list-unstyled">
            <li>1. MSME Registration Number</li>
            <li>2. Aadhar Card</li>
            <li>3. PAN Card</li>
            <li>4. Cancelled Cheque</li>
            <li>5. Business Name</li>
            <li>6. Electricity Bill (Business Place)</li>
            <li>7. Business Activity</li>
            <li>8. GST Certificate (Optional)</li>
          </ul>
        </li>
      </ul>
    ),

    "MSME LLP": (
      <ul>
        <li>
          ✔ NEW MSME:
          <ul className="list-unstyled">
            <li>1. Aadhar Card</li>
            <li>2. PAN Card</li>
            <li>3. Cancelled Cheque</li>
            <li>4. Business Name</li>
            <li>5. Electricity Bill (Business Place)</li>
            <li>6. Business Activity</li>
            <li>7. GST Certificate (Optional)</li>
          </ul>
        </li>
        <li>
          ✔ UPDATE MSME:
          <ul className="list-unstyled">
            <li>1. MSME Registration Number</li>
            <li>2. Aadhar Card</li>
            <li>3. PAN Card</li>
            <li>4. Cancelled Cheque</li>
            <li>5. Business Name</li>
            <li>6. Electricity Bill (Business Place)</li>
            <li>7. Business Activity</li>
            <li>8. GST Certificate (Optional)</li>
          </ul>
        </li>
      </ul>
    ),

    "Iec Proprietorship": (
      <ul>
        <li>
          ✔ NEW IEC CODE:
          <ul className="list-unstyled">
            <li>1. GST Certificate</li>
            <li>2. Aadhar Card</li>
            <li>3. PAN Card</li>
            <li>4. Cancel Check</li>
            <li>5. Electricity Bill (Business Place)</li>
            <li>6. Business Activity</li>
            <li>7. Mobile Number</li>
            <li>8. Email ID</li>
          </ul>
        </li>
        <li>
          ✔ UPDATE IEC CODE:
          <ul className="list-unstyled">
            <li>1. ID Password</li>
            <li>2. Old IEC Code</li>
            <li>3. GST Certificate</li>
            <li>4. Aadhar Card</li>
            <li>5. PAN Card</li>
            <li>6. Cancel Check</li>
            <li>7. Electricity Bill (Business Place)</li>
            <li>8. Business Activity</li>
            <li>9. Mobile Number</li>
            <li>10. Email ID</li>
          </ul>
        </li>
      </ul>
    ),

    "Iec Partnership": (
      <ul>
        <li>
          ✔ NEW IEC CODE:
          <ul className="list-unstyled">
            <li>1. Partnership Deed</li>
            <li>2. All Partner Aadhar Card</li>
            <li>3. All Partner PAN Card</li>
            <li>4. GST Certificate</li>
            <li>5. Electricity Bill (Business Place)</li>
            <li>6. Business Activity</li>
            <li>7. Mobile Number</li>
            <li>8. Email ID</li>
          </ul>
        </li>
        <li>
          ✔ UPDATE IEC CODE:
          <ul className="list-unstyled">
            <li>1. ID Password</li>
            <li>2. Old IEC Code</li>
            <li>3. Partnership Deed</li>
            <li>4. All Partner Aadhar Card</li>
            <li>5. All Partner PAN Card</li>
            <li>6. GST Certificate</li>
            <li>7. Electricity Bill (Business Place)</li>
            <li>8. Business Activity</li>
            <li>9. Mobile Number</li>
            <li>10. Email ID</li>
          </ul>
        </li>
      </ul>
    ),

    "Iec Private Limited Company": (
      <ul>
        <li>
          ✔ NEW IEC CODE:
          <ul className="list-unstyled">
            <li>1. All Director Aadhar Card</li>
            <li>2. All Director PAN Card</li>
            <li>3. Incorporation Certificate</li>
            <li>4. GST Certificate</li>
            <li>5. Electricity Bill (Business Place)</li>
            <li>6. Business Activity</li>
            <li>7. Mobile Number</li>
            <li>8. Email ID</li>
          </ul>
        </li>
        <li>
          ✔ UPDATE IEC CODE:
          <ul className="list-unstyled">
            <li>1. ID Password</li>
            <li>2. Old IEC Code</li>
            <li>3. All Director Aadhar Card</li>
            <li>4. All Director PAN Card</li>
            <li>5. Incorporation Certificate</li>
            <li>6. GST Certificate</li>
            <li>7. Electricity Bill (Business Place)</li>
            <li>8. Business Activity</li>
            <li>9. Mobile Number</li>
            <li>10. Email ID</li>
          </ul>
        </li>
      </ul>
    ),

    "Iec LLP": (
      <ul>
        <li>
          ✔ NEW IEC CODE:
          <ul className="list-unstyled">
            <li>1. Partnership Deed</li>
            <li>2. All Partner Aadhar Card</li>
            <li>3. All Partner PAN Card</li>
            <li>4. GST Certificate</li>
            <li>5. Electricity Bill (Business Place)</li>
            <li>6. Business Activity</li>
            <li>7. Mobile Number</li>
            <li>8. Email ID</li>
          </ul>
        </li>
        <li>
          ✔ UPDATE IEC CODE:
          <ul className="list-unstyled">
            <li>1. ID Password</li>
            <li>2. Old IEC Code</li>
            <li>3. Partnership Deed</li>
            <li>4. All Partner Aadhar Card</li>
            <li>5. All Partner PAN Card</li>
            <li>6. GST Certificate</li>
            <li>7. Electricity Bill (Business Place)</li>
            <li>8. Business Activity</li>
            <li>9. Mobile Number</li>
            <li>10. Email ID</li>
          </ul>
        </li>
      </ul>
    ),

    "Trademark": (
      <ul>
        <li>✔ Copy of Logo (Optional)</li>
        <li>✔ Udyog Aadhar Registration Certificate</li>
        <li>✔ Incorporation Certificate or Partnership Deed</li>
        <li>✔ Identity Proof of Signatory (All Partner/Person Self Certified)</li>
        <li>✔ Address Proof of Signatory (All Partner/Person Self Certified)</li>
        <li>✔ Applicant Partner/Person Name</li>
        <li>✔ Digital Signature</li>
      </ul>
    ),

    "Gst Proprietorship": (
      <ul>
        <li>
          ✔ ID PROOF:
          <ul className="list-unstyled">
            <li>1. Passport Size Photo</li>
            <li>2. Aadhar Card</li>
            <li>3. PAN Card</li>
          </ul>
        </li>
        <li>
          ✔ PROOF OF BUSINESS PLACE (ANY ONE):
          <ul className="list-unstyled">
            <li>1. Electricity Bill</li>
            <li>2. Legal Ownership Document</li>
            <li>3. Property Tax Receipt</li>
            <li>4. Municipal Khata Copy</li>
            <li>5. Rent/Lease Agreement / Consent Letter</li>
          </ul>
        </li>
      </ul>
    ),

    "Gst Partnership": (
      <ul>
        <li>
          ✔ ID PROOF:
          <ul className="list-unstyled">
            <li>1. Passport Size Photo (Promoter/Partner)</li>
            <li>2. Aadhar Card (Promoter/Partner)</li>
            <li>3. PAN Card (Promoter/Partner)</li>
            <li>4. Partnership Firm PAN Card</li>
          </ul>
        </li>
        <li>
          ✔ PROOF OF CONSTITUTION OF BUSINESS:
          <ul className="list-unstyled">
            <li>1. Partnership Deed</li>
            <li>2. Letter of Authorization</li>
          </ul>
        </li>
        <li>
          ✔ PROOF OF BUSINESS PLACE (ANY ONE):
          <ul className="list-unstyled">
            <li>1. Electricity Bill</li>
            <li>2. Legal Ownership Document</li>
            <li>3. Property Tax Receipt</li>
            <li>4. Municipal Khata Copy</li>
            <li>5. Rent/Lease Agreement</li>
          </ul>
        </li>
      </ul>
    ),

    "Gst Pvt Ltd Company": (
      <ul>
        <li>
          ✔ ID PROOF:
          <ul className="list-unstyled">
            <li>1. Passport Size Photo of Directors</li>
            <li>2. Aadhar Card of Directors</li>
            <li>3. PAN Card of Directors</li>
            <li>4. PAN Card of Company</li>
          </ul>
        </li>
        <li>
          ✔ PROOF OF CONSTITUTION OF BUSINESS:
          <ul className="list-unstyled">
            <li>1. Certificate of Incorporation</li>
            <li>2. Letter of Authorization</li>
          </ul>
        </li>
        <li>
          ✔ PROOF OF BUSINESS PLACE (ANY ONE):
          <ul className="list-unstyled">
            <li>1. Electricity Bill</li>
            <li>2. Legal Ownership Document</li>
            <li>3. Property Tax Receipt</li>
            <li>4. Municipal Khata Copy</li>
            <li>5. Rent/Lease Agreement / NOC</li>
          </ul>
        </li>
      </ul>
    ),

    "Gst LLP": (
      <ul>
        <li>
          ✔ ID PROOF:
          <ul className="list-unstyled">
            <li>1. Passport Size Photo (Promoter/Partner)</li>
            <li>2. Aadhar Card (Promoter/Partner)</li>
            <li>3. PAN Card (Promoter/Partner)</li>
            <li>4. PAN Card of Firm</li>
          </ul>
        </li>
        <li>
          ✔ PROOF OF CONSTITUTION OF BUSINESS:
          <ul className="list-unstyled">
            <li>1. Certificate of Incorporation</li>
            <li>2. Letter of Authorization</li>
          </ul>
        </li>
        <li>
          ✔ PROOF OF BUSINESS PLACE (ANY ONE):
          <ul className="list-unstyled">
            <li>1. Electricity Bill</li>
            <li>2. Legal Ownership Document</li>
            <li>3. Property Tax Receipt</li>
            <li>4. Municipal Khata Copy</li>
            <li>5. Rent/Lease Agreement / NOC</li>
          </ul>
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
    // "Gst Proprietorship": "₹ 3500 /- Only.",
    // "Gst Partnership": "₹ 3500 /- Only.",
    // "Gst Pvt Ltd Company": "₹ 3500 /- Only.",
    // "Gst LLP": "₹ 3500 /- Only.",
  };

  return (
    <>
      <div className="container py-5" style={{ marginTop: "7rem" }}>
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
            {/* {id === "6" && (
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
            )} */}
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
