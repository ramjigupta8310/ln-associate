import React from "react";
import { Link } from "react-router-dom";
import Logo  from "../Assets/LN_ASSOCIATE_LOGO.png";

const Footer = () => {
  return (
    <div>
      <div>
        <div
          className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row gx-5">
              {/* First Section */}
              <div className="col-lg-4 col-md-6 footer-about my-3 my-lg-0">
                <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary">
                  <Link to="#" className="navbar-brand">
                    <img src={Logo} style={{width:"100%"}}/>
                  </Link>
                  <p className="mt-3 mb-4 px-2">
                    Our vision is to set Itself as benchmark in Accounting and
                    Outsourcing industry. We help our clients to achieve their
                    business objectives by providing innovative, Best in class
                    Consulting services.
                  </p>
                  <br />
                  <p />
                </div>
              </div>

              {/* Second Section */}
              <div className="col-lg-4 col-md-12 pt-0 py-lg-3 my-3 my-lg-0">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="text-light mb-0">Get In Touch</h3>
                </div>
                <div className="d-flex mb-2">
                  <i className="bi bi-geo-alt text-primary me-2" />
                  <p className="mb-0">Ahmedabad, Gujarat</p>
                </div>
                <div className="d-flex mb-2">
                  <i className="bi bi-envelope-open text-primary me-2" />
                  <p className="mb-0">info@lnassociate.com</p>
                </div>
                <div className="d-flex mb-2">
                  <i className="bi bi-telephone text-primary me-2" />
                  <p className="mb-0">+91 98989 53563</p>
                </div>
                <div className="d-flex mb-2">
                  <i className="bi bi-telephone text-primary me-2" />
                  <p className="mb-0">+91 90997 81323</p>
                </div>
                <div className="d-flex mt-4">
                  <a
                    className="btn btn-primary text-white btn-square me-2"
                    href="#"
                  >
                    <i className="fab fa-twitter fw-normal" />
                  </a>
                  <a
                    className="btn btn-primary text-white btn-square me-2"
                    href="#"
                  >
                    <i className="fab fa-facebook-f fw-normal" />
                  </a>
                  <a className="btn btn-primary text-white btn-square" href="#">
                    <i className="fab fa-instagram fw-normal" />
                  </a>
                </div>
              </div>

              {/* Third Section */}
              <div className="col-lg-4 col-md-12 pt-0 py-lg-3 my-3 my-lg-0">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="text-light mb-0">Quick Links</h3>
                </div>
                <div className="link-animated d-flex flex-column justify-content-start">
                  <Link to="/" className="text-light mb-2">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Home
                  </Link>
                  <Link to="/business" className="text-light mb-2">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Business
                  </Link>
                  <Link to="/gst" className="text-light mb-2">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    GST
                  </Link>
                  <Link to="/contactUs" className="text-light mb-2">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className="text-white py-2 text-center"
          style={{ backgroundColor: "#061429" }}
        >
          <span to="#" className="d-block">
            <Link to="/" className="text-white text-decoration-underline">
              © LN Associate India Private Limited
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
{
  /* <p className="mb-0">
            ©{" "}
            <a className="text-white border-bottom" href="#">
              TaxWeb India Private Limited
            </a>
            . All Rights Reserved.
            <br />
            Designed by{" "}
            <a className="text-white border-bottom" href="#">
              TaxWeb Team
            </a>
          </p> */
}
