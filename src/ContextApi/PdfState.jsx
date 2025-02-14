import React, { useEffect, useState } from "react";
import PdfContext from "./PdfContext";
import html2pdf from "html2pdf.js";
import ReactDOMServer from "react-dom/server";

const PdfState = ({ children }) => {
  const [title, setTitle] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedDocuments, setSelectedDocuments] = useState("");
  const [triggerDownload, setTriggerDownload] = useState(false);

  useEffect(() => {
    if (triggerDownload) {
      generatePdf();
      setTriggerDownload(false);
    }
  }, [triggerDownload]); 


  const generatePdf = () => {
    // Convert JSX to Static HTML String
    const documentHtml = ReactDOMServer.renderToStaticMarkup(selectedDocuments);

    const content = `
      <div style="margin-top:10px; padding: 20px; font-family: Arial">
        <!-- Logo -->
        <div style="display: flex; justify-content: space-between;">
          <img src="/LN_ASSOCIATE_LOGO.png" alt="Logo" style="width: 300px;" />
          
          <!-- Phone Numbers -->
          <div>
            <p style= "margin-bottom:0; color: blue; font-weight: 700;">Phone No. +91 98989 53563</p>
            <p style="margin-bottom:0; color: blue; font-weight: 700;">Phone No. +91 90997 81323</p>
          </div>
        </div>

        <!-- Horizontal Line -->
        <div style="margin-top: 10px; height: 2px; background-color: red;"></div>

        <!-- Selected Documents -->
        <div style="margin-top: 20px; color: black; font-size: 14px;">
          ${documentHtml}
        </div>
      </div>
    `;

    const options = {
      filename: "Lnassociate.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 3, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(content).set(options).save();
  };


  return (
    <PdfContext.Provider
      value={{
        setSelectedDocuments,
        setTriggerDownload,
      }}
    >
      {children}
    </PdfContext.Provider>
  );
};

export default PdfState;
