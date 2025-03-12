import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const Business = () => {
  useEffect(() => {
    document.title = "Business Registration - Lnassociate"; // Dynamic Title
  }, []);

  const services = [
    { id: 1, title: "Company / LLP / Firm Registration", logo: "/Assets/Business/Company_Registration.png" },
    { id: 2, title: "FSSAI", logo: "/Assets/Business/FSSAI.png" },
    { id: 3, title: "MSME Udyam Registration", logo: "/Assets/Business/MSME.png" },
    { id: 4, title: "IEC Code", logo: "/Assets/Business/IEC_Code.png" },
    { id: 5, title: "Trade Mark", logo: "/Assets/Business/Trademark.png" },
    // { id: 6, title: "GST", icon: "fa-search" },
  ];
  
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h2 className="fw-bold text-primary text-uppercase">
              Our Affordable Business Services
            </h2>
          </div>
          <div className="row g-5">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="col-lg-4 col-md-6 wow zoomIn"
                data-wow-delay={`${0.3 + index * 0.3}s`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Link
                  to={`/business/${service.id}`}
                  style={{
                    borderRadius: "1.5rem",
                    backgroundColor: "#fff",
                    backgroundSize: "contain",
                    border: "1px solid lightgrey",
                    transition: "all 200ms ease-in-out",
                    height: "300px",
                    backgroundImage: `url(/Card-bg.jpg)`,
                    transform: hoverIndex === index ? "scale(1.06)" : "scale(1)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                  className="service-item d-flex flex-column align-items-center justify-content-center text-center"
                >
                  <div style={{ maxHeight: "4rem", marginBottom: ".5rem" }}>
                    <img src={service.logo}
                      style={{ height: "100%" }}
                    />
                  </div>
                  <h4 className="mb-3" style={{ flexGrow: .1 }}>{service.title}</h4>
                  <div className="btn d-flex align-items-center  gap-2">
                    <i className="fa-solid fa-arrow-right-long" />
                    <p className="m-0">Explore</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
