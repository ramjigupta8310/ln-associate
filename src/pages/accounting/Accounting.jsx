import React, { useEffect } from 'react';

const Accounting = () => {
    useEffect(() => {
          document.title = "Accounting - Lnassociate"; // Dynamic Title
        }, []);

    const services = [
        { title: 'Accounting and Finalization', icon: 'fa-search' },
        { title: 'Cash Flow', icon: 'fa-search' },
        { title: 'Fund Flow', icon: 'fa-search' },
        { title: 'Payroll Management', icon: 'fa-search' },
        { title: 'Vendor Payments', icon: 'fa-search' },
    ];

    return (
        <div>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
                        <h2 className="fw-bold text-primary text-uppercase">Our Accounting Services</h2>
                    </div>
                    <div className="row g-5">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="col-lg-4 col-md-6 wow zoomIn"
                                data-wow-delay={`${0.3 + index * 0.3}s`}
                            >
                                <div
                                    style={{
                                        borderRadius: '20px',
                                        backgroundColor: '#fff',
                                        backgroundImage: 'url(/img/bg.jpg)',
                                        backgroundSize: 'contain',
                                        border: '1px solid lightgrey',
                                        transition: 'all 0.5s ease-in-out',
                                        height: '300px',
                                    }}
                                    className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center"
                                >
                                    <div className="service-icon">
                                        <i className={`fa ${service.icon} text-white`} />
                                    </div>
                                    <h4 className="mb-3">{service.title}</h4>
                                    <a className="btn btn-lg btn-primary rounded" href="#">
                                    <i class="fa-solid fa-arrow-right-long"/>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accounting;
