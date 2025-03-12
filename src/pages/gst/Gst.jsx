import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Gst = () => {
  useEffect(() => {
    document.title = "GST - Lnassociate"; // Dynamic Title
  }, []);
  const services = [
    { id: 1, title: "GST Registration", logo: "/Assets/GST/GST-Registration.png" },
    { id: 2, title: "GST Return Filing", logo: "/Assets/GST/GST-Return.png" },
    { id: 3, title: "GST Refund", logo: "/Assets/GST/GST-Refund.png" },
    { id: 4, title: "GST Annual Return", logo: "/Assets/GST/GST-Annual-Return.png" },
    { id: 5, title: "GST LUT Filing", logo: "/Assets/GST/GST-Lut-Filing.png" },
    { id: 6, title: "GST Tax Notices", logo: "/Assets/GST/GST-Tax-Notices.png" },
    { id: 7, title: "GST Appeal", logo: "/Assets/GST/GST-Registratin.png" },
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
              Our Affordable GST Services
            </h2>
          </div>
          <div className="row g-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow zoomIn"
                data-wow-delay={`${0.3 + index * 0.3}s`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Link to={`/gst/${service.id}`}
                  style={{
                    borderRadius: "1.5rem",
                    backgroundColor: "#fff",
                    backgroundSize: "contain",
                    border: "1px solid lightgrey",
                    transition: "all 200ms ease-in-out",
                    height: "300px",
                    backgroundImage:`url(/Card-bg.jpg)`,
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

export default Gst;
