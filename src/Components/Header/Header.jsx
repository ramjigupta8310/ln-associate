import React from "react";
import { Link} from "react-router-dom";
import Logo from "../Assets/LN_ASSOCIATE_LOGO.png"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className="position-fixed top-0" style={{zIndex:999,width:"100vw"}}>
      {/* Top Header */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2 text-primary" />
                Ahmedabad, Gujarat, India
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2 text-primary" />
                +91 98989 53563
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2 text-primary" />
                +91 90997 81323
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2 text-primary" />
                info@lnassociate.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              {/* Twitter */}
              <Link
                to="#"
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              >
                <i className="fab fa-twitter fw-normal" />
              </Link>

              {/* Facebook */}
              <Link
                to="#"
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              >
                <i className="fab fa-facebook-f fw-normal" />
              </Link>

              {/* Instagram */}
              <Link
                to="#"
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              >
                <i className="fab fa-instagram fw-normal" />
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="container-fluid position-relative p-0 bg-white">
        <nav className="navbar navbar-expand-lg navbar-dark px-2 px-md-3 py-3 py-lg-0">
          <Link to="/"  className={`${styles["h-logo"]}`}>
             <img src={Logo}  />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>


          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              {/* Home */}
              <Link
                to="/"
                className={`nav-item nav-link text-dark ${styles["h-links"]}`}
                activeClassName="active"
              >
                Home
              </Link>

              {/* Business Registration */}
              <Link
                to="/business"
                className={`nav-item nav-link text-dark ${styles["h-links"]}`}
                activeClassName="active"
              >
                Business Registration
              </Link>

              {/* Accounting */}
              <Link
                to="/accounting"
                className={`nav-item nav-link text-dark ${styles["h-links"]}`}
                activeClassName="active"
              >
                Accounting
              </Link>

              {/* GST */}
              <Link
                to="/gst"
                className={`nav-item nav-link text-dark ${styles["h-links"]}`}
                activeClassName="active"
              >
                GST
              </Link>

              {/* Income Tax */}
              <Link
                to="/incometax"
                className={`nav-item nav-link text-dark ${styles["h-links"]}`}
                activeClassName="active"
              >
                Income Tax
              </Link>

              {/* Finance */}
              <Link
                to="/finance"
                className={`nav-item nav-link text-dark ${styles["h-links"]}`}
                activeClassName="active"
              >
                Finance
              </Link>

              {/* Audit */}
              <Link
                to="/audit"
                className={`nav-item nav-link text-dark ${styles["h-links"]}`}
                activeClassName="active"
              >
                Audit
              </Link>

              {/* Contact Uss */}
              <Link
                to="/contactUs"
                className={`nav-item nav-link text-dark ${styles["h-links"]}`}
                activeClassName="active"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
