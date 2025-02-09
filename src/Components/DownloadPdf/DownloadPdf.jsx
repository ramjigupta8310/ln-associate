// import React, { useContext, useEffect, useRef } from "react";
// import PdfContext from "../../ContextApi/PdfContext";
// import html2pdf from "html2pdf.js";
// import Logo from "/LN_ASSOCIATE_LOGO.png";

// const DownloadPdf = () => {
//   const {
//     selectedDocuments,
//     triggerDownload,
//     setTriggerDownload,
//   } = useContext(PdfContext);

//   const contentRef = useRef();

//   useEffect(() => {
//     if (triggerDownload) {
//       const options = {
//         margin:       10,          // Adjust margins
//         filename:     "Lnassociate.pdf",   // File name
//         image:        { type: "jpeg", quality: 1 },  // Image quality (1 = highest)
//         html2canvas:  { scale: 2 },           // Scale to increase resolution
//         jsPDF:        { unit: "mm", format: "a4", orientation: "portrait", dpi: 300 }, // DPI for print quality
//       };

//       // Trigger PDF download with increased quality
//       html2pdf().from(contentRef.current).set(options).save();

//       // Reset the trigger after download
//       setTriggerDownload(false);
//     }
//   }, [triggerDownload]);

//   return (
//     <div ref={contentRef} style={{ padding: "20px", fontFamily: "Arial", position:"relative", }}>
//       {/* Logo at top left */}
//       <img src={Logo} alt="Logo" style={{ width: "300px", }} />

//       {/* Phone numbers at top right */}
//       <div style={{ position: "absolute", right: 20, top: 30 }}>
//         <p style={{ marginBottom: 0, color: "blue", fontWeight:"700" }}>Phone No. +91 98989 53563</p>
//         <p style={{ marginBottom: 0, color: "blue", fontWeight:"700" }}>Phone No. +91 90997 81323</p>
//       </div>

//       {/* Horizontal Line */}
//       <div style={{ marginTop: 30, height:"2px", backgroundColor:"red" }}></div>

//       {/* Displaying selected documents */}
//       <div style={{ marginTop: 20, color: "black" }}>
//         {selectedDocuments}
//       </div>
//     </div>
//   );
// };

// export default DownloadPdf;
