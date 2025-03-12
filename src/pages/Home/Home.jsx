import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Team1 from "./assets/our management team1.jpg"
import Team2 from "./assets/our management team2.jpg"
import Banner1 from "./assets/1.png"
import Banner2 from "./assets/2.png"
import Banner3 from "./assets/3.png"
import About from "./assets/about_img.png"
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    document.title = "Home - Lnassociate"; // Dynamic Title
  }, []);

  return (
    <div>
      {/* First Section Img Slider */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">
                  Welcome to Ln Associate
                </h5>
                <h1 className="mb-0">Your Accounting Partner</h1>
              </div>

              <p className="mb-4">
                Our vision is to set Itself as benchmark in Accounting and Outsourcing industry. We help our clients to achieve their business objectives by providing innovative, Best in class Consulting services.
              </p>

              <div
                className="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded"
                  style={{ width: 60, height: 60,backgroundColor:"rgb(6,163,218)" }}
                >
                  <i className="fa fa-envelope text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Email us for inquiries</h5>
                  <h4 className="text-primary mb-0">info@lnassociate.com</h4>
                </div>
              </div>
              <div
                className="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.8s"
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded"
                  style={{ width: 60, height: 60,backgroundColor:"rgb(6,163,218)" }}
                >
                  <i className="fa fa-map-marker-alt text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Visit us</h5>
                  <h4 className="text-primary mb-0">Ahmedabad, Gujarat</h4>
                </div>
              </div>
            </div>

            {/* Img Carousel */}
            <div className="col-lg-5" style={{ minHeight: 500 }}>
              <div
                id="carouselExampleAutoplaying"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="2000">
                    <img
                      src={Banner3}
                      class="d-block w-100"
                      alt="About Ln Associate"
                    />
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img
                      src={Banner1}
                      class="d-block w-100"
                      alt="About Ln Associate"
                    />
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img
                      src={Banner2}
                      class="d-block w-100"
                      alt="About Ln Associate"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* About Us */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <h1 className="fw-bold text-primary text-uppercase">About Us</h1>
            <div className="col-lg-6" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src={About}
                  style={{ objectFit: "cover" }}
                  alt="About TaxWeb"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <p>
                <b>LN Associate</b> is a consultancy firm incorporated in March
                2016. It is a one stop solution with the sole purpose of
                assisting various business entities with tailor-made solutions
                in order to meet their unique visions and missions in
                continuously expanding market. We are committed to provide our
                clients with an independent assessment in their operations and
                organizational structures. We are offering various services such
                as Accounting, Tax Advisory, Audit, Payroll Processing and
                Allied services to Indian as well as International clients.{" "}
                <br></br>Along with designing pathways that transform Vision
                into Reality, as trusted advisors, we strive to attract and
                develop, the best professionals, to provide value added services
                to our clients in making the best financial decisions possible.
                Our Professionals keep themselves abreast of the latest changes
                and provide proper guidance so that our clients can make smart
                and timely decisions to get expected results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section Our Management Team */}
      <div className="text-center py-4 px-4" style={{backgroundColor:'rgb(244,244,244)'}}>
        <h1 className="fs-2 fs-sm-1 position-relative" style={{color:"rgb(6,163,218)"}}>
          Our Management Team
          <div
            className={`${styles["m-underline"]} position-absolute`}
            style={{
              marginTop: "14px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          ></div>
        </h1>

        <p className="fw-bold fs-5 mt-4 mt-md-5" >
          LN Associate is driven by two highly experienced professionals
          integrated together as a team.
        </p>

        <div className="d-flex align-items-center flex-column flex-md-row gap-md-5 mb-4 mb-md-2">
          <p className="mb-1">
            <span className="fw-bold">Jesal Rajpara:</span> He has completed his
            graduation in Commerce from Gujarat University. He also has
            completed intermediate level of Chartered Accountancy. He is in this
            field since 2008 with dynamic & rich experience in areas of
            accounting, auditing and taxation. His last assignment was as an
            Audit manager with G. K. Choksi & Co., a prestigious CA firm, having
            HO at Ahmedabad and branches in Mumbai, Delhi, etc.
          </p>
          <img
            src={Team1}
            className={`${styles["m-img"]} rounded-circle`}
          />
        </div>

        <div className="d-flex align-items-center flex-column flex-md-row gap-md-5">
          <img
            src={Team2}
            className={`${styles["m-img"]} rounded-circle mb-1`}
          />
          <p>
            <span className="fw-bold">Dhruv Shah:</span> He holds Bachelor’s
            degrees in Commerce from Gujarat University. Further he has also
            completed intermediate levels of Chartered Accountancy and Company
            Secretary. He is in this field since 2008 with dynamic & rich
            experience in areas of accounting, auditing and taxation. His last
            assignment was as a Senior Audit Executive with G. K. Choksi & Co.,
            a reputed CA firm, having HO at Ahmedabad and branches in Mumbai ,
            Delhi, etc.
          </p>
        </div>
      </div>

      {/* Our services */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h1 className="fw-bold text-primary text-uppercase">
              Our Services
            </h1>
          </div>
          <div className="row g-5">
            {/* First Card Business Registration */}
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <Link to="/business"
                style={{
                  borderRadius: "1.5rem",
                  backgroundColor: "#fff",
                  backgroundSize: "contain",
                  border: "1px solid lightgrey",
                  transition: "all 0.5s ease-in-out",
                  height: "300px",
                  backgroundImage:`url(/Card-bg.jpg)`,
                }}
                className="service-item d-flex flex-column align-items-center justify-content-center text-center"
              >
                <div className="service-icon">
                <i className="fa fa-search text-white" />
                </div>
                <h4 className="mb-3">Business Registration</h4>
                <p className="m-0">
                Company / LLP / Firm Registration, FSSAI, MSME Udyam Registration, IEC Code, Trade Mark, GST 
                </p>
              </Link>
            </div>

            {/* Second Card Accounting */}
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <Link to="/accounting"
                style={{
                  borderRadius: "1.5rem",
                  backgroundColor: "#fff",
                  backgroundSize: "contain",
                  border: "1px solid lightgrey",
                  transition: "all 0.5s ease-in-out",
                  height: "300px",
                  backgroundImage:`url(/Card-bg.jpg)`,
                }}
                className="service-item d-flex flex-column align-items-center justify-content-center text-center"
              >
                <div className="service-icon">
                <i className="fa fa-search text-white" />
                </div>
                <h4 className="mb-3">Accounting</h4>
                <p className="m-0">
                 Accounting and Finalizaion, Cash Flow, Fund Flow, Payroll Management,Vendor Payments
                </p>
              </Link>
            </div>

            {/* Third Card GST */}
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <Link to="/gst"
                style={{
                  borderRadius: "1.5rem",
                  backgroundColor: "#fff",
                  backgroundSize: "contain",
                  border: "1px solid lightgrey",
                  transition: "all 0.5s ease-in-out",
                  height: "300px",
                  backgroundImage:`url(/Card-bg.jpg)`,
                }}
                className="service-item d-flex flex-column align-items-center justify-content-center text-center"
              >
                <div className="service-icon">
                <i className="fa fa-search text-white" />
                </div>
                <h4 className="mb-3">GST</h4>
                <p className="m-0">
                 GST Registration, GST Return Filing, GST Refund, GST Annual Return, GST LUT filing, GST Tax Notices, GST Appeal
                </p>
              </Link>
            </div>

            {/* Fourth Cards Income Tax */}
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <Link to="/incometax"
                style={{
                  borderRadius: "1.5rem",
                  backgroundColor: "#fff",
                  backgroundSize: "contain",
                  border: "1px solid lightgrey",
                  transition: "all 0.5s ease-in-out",
                  height: "300px",
                  backgroundImage:`url(/Card-bg.jpg)`,
                }}
                className="service-item d-flex flex-column align-items-center justify-content-center text-center"
              >
                <div className="service-icon">
                <i className="fa fa-search text-white" />
                </div>
                <h4 className="mb-3">Income Tax</h4>
                <p className="m-0">
                  TDS Return, Business Return, Salary Return, NRI Returns, Income Tax Notices, Income Tax Appeal
                </p>
              </Link>
            </div>

            {/* Fifth Card Finance */}
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <Link to="/finance"
                style={{
                  borderRadius: "1.5rem",
                  backgroundColor: "#fff",
                  backgroundSize: "contain",
                  border: "1px solid lightgrey",
                  transition: "all 0.5s ease-in-out",
                  height: "300px",
                  backgroundImage:`url(/Card-bg.jpg)`,
                }}
                className="service-item d-flex flex-column align-items-center justify-content-center text-center"
              >
                <div className="service-icon">
                  <i className="fa fa-search text-white" />
                </div>
                <h4 className="mb-3">Finance</h4>
                <p className="m-0">
                  Term Loan, Working Capital Loan, Machinery Loan, Project Finance, Mortgage Loan, Start Up Finance
                </p>
              </Link>
            </div>

            {/* Sixth Card Audit */}
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <Link to="/audit"
                style={{
                  borderRadius: "1.5rem",
                  backgroundColor: "#fff",
                  backgroundSize: "contain",
                  border: "1px solid lightgrey",
                  transition: "all 0.5s ease-in-out",
                  height: "300px",
                  backgroundImage:`url(/Card-bg.jpg)`,
                }}
                className="service-item d-flex flex-column align-items-center justify-content-center text-center"
              >
                <div className="service-icon">
                  <i className="fa fa-search text-white" />
                </div>
                <h4 className="mb-3">Audit</h4>
                <p className="m-0">
                  Internal Audit, GST Audit, Audit Specified under other acts
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Experience */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h1 className="fw-bold text-primary text-uppercase">
              Our Experience
            </h1>
          </div>
          <div className="row g-5">
            {/* First Card */}
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div
                style={{
                  borderRadius: "1.5rem",
                  backgroundColor: "#fff",
                  backgroundSize: "contain",
                  border: "1px solid lightgrey",
                  transition: "all 0.5s ease-in-out",
                  height: "300px",
                  backgroundImage:`url(/Card-bg.jpg)`,
                }}
                className="service-item d-flex flex-column align-items-center justify-content-center text-center"
              >
                <div className="service-icon">
                  <i className="fa fa-shield-alt text-white" />
                </div>
                <h2 className="mb-3">500 +</h2>
                <p className="m-0">Happy Clients</p>
              </div>
            </div>

            {/* Second Card */}
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div
                style={{
                  borderRadius: "1.5rem",
                  backgroundColor: "#fff",
                  backgroundSize: "contain",
                  border: "1px solid lightgrey",
                  transition: "all 0.5s ease-in-out",
                  height: "300px",
                  backgroundImage:`url(/Card-bg.jpg)`,
                }}
                className="service-item d-flex flex-column align-items-center justify-content-center text-center"
              >
                <div className="service-icon">
                  <i className="fa fa-shield-alt text-white" />
                </div>
                <h2 className="mb-3">50 +</h2>
                <p className="m-0">Google Review</p>
              </div>
            </div>

            {/* Third Card */}
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div
                style={{
                  borderRadius: "1.5rem",
                  backgroundColor: "#fff",
                  backgroundSize: "contain",
                  border: "1px solid lightgrey",
                  transition: "all 0.5s ease-in-out",
                  height: "300px",
                  backgroundImage:`url(/Card-bg.jpg)`,
                }}
                className="service-item d-flex flex-column align-items-center justify-content-center text-center"
              >
                <div className="service-icon">
                  <i className="fa fa-shield-alt text-white" />
                </div>
                <h2 className="mb-3">10 +</h2>
                <p className="m-0">Years Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
