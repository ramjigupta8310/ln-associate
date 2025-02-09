import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Business = () => {
    useEffect(() => {
      document.title = "Business Registration - Lnassociate"; // Dynamic Title
    }, []);

  const services = [
    { id: 1, title: "Company / LLP / Firm Registration", icon: "fa-search" },
    { id: 2, title: "FSSAI", icon: "fa-search" },
    { id: 3, title: "MSME Udyam Registration", icon: "fa-search" },
    { id: 4, title: "IEC Code", icon: "fa-search" },
    { id: 5, title: "Trade Mark", icon: "fa-search" },
    { id: 6, title: "GST", icon: "fa-search" },
  ];

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
              >
                <Link
                  to={`/business/${service.id}`}
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "#fff",
                    backgroundImage: "url(/img/bg.jpg)",
                    backgroundSize: "contain",
                    border: "1px solid lightgrey",
                    transition: "all 0.5s ease-in-out",
                    height: "300px",
                  }}
                  className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center"
                >
                  <div className="service-icon">
                    <i className={`fa ${service.icon} text-white`} />
                  </div>
                  <h4 className="mb-3">{service.title}</h4>
                  <div className="btn btn-lg btn-primary rounded">
                  <i class="fa-solid fa-arrow-right-long"/>
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
