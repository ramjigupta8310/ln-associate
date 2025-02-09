import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us - Lnassociate"; // Dynamic Title
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Input Change Handle
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Submit Handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    const payload = {
      sender: { email: import.meta.env.VITE_BREVO_EMAIL_ID }, // Only email, no name
      to: [{ email: import.meta.env.VITE_BREVO_EMAIL_ID }], // Company Email (Receiver)
      replyTo: { email: formData.email }, // User's email for reply
      subject: formData.subject, //
      htmlContent: `<p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>From:</strong> ${formData.email}</p>
                    <p><strong>Message:</strong> ${formData.message}</p>`,
    };

    try {
      await axios.post("https://api.brevo.com/v3/smtp/email", payload, {
        headers: {
          "api-key": import.meta.env.VITE_BREVO_API_KEY,
        },
      });
      setResponseMessage("Message sent successfully!");
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form fields
    }
  };

  return (
    <div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
            <h1 className="mb-0">
              If You Have Any Query, Feel Free To Contact Us
            </h1>
          </div>
          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div
                className="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4 className="text-primary mb-0 fs-6">+91 98989 53563</h4>
                  <h4 className="text-primary mb-0 fs-6">+91 90997 81323</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="d-flex align-items-center wow fadeIn"
                data-wow-delay="0.4s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: 60, height: 60 }}
                >
                  <i className="fa fa-envelope-open text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Email to get free quote</h5>
                  <h4 className="text-primary mb-0 fs-6">
                    info@lnassociate.com
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="d-flex align-items-start wow fadeIn"
                data-wow-delay="0.8s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: 60, height: 60, flex: "none" }}
                >
                  <i className="fa fa-map-marker-alt text-white" />
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Visit our office</h5>
                  <h4 className="text-primary mb-0 fs-6">
                    34B, Sapnay Complex, Opp Suvidha Shopping centre, Suvidha
                    Cross Road Paldi, Ahmedabad, Gujarat-380007
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      rows={8}
                      name="message"
                      className="form-control"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                    {responseMessage && (
                      <p className="mt-3">{responseMessage}</p>
                    )}
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.134096993128!2d72.56571287531374!3d23.018848079176294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85027cfbffff%3A0xbd1817fa8d44faac!2sLN%20Associate!5e0!3m2!1sen!2sin!4v1738580870779!5m2!1sen!2sin"
                frameBorder={0}
                style={{ minHeight: 350, border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
