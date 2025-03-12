import React, { useEffect, useState } from 'react';

const Audit = () => {
    useEffect(() => {
        document.title = "Audit - Lnassociate"; // Dynamic Title
    }, []);


    const services = [
        { title: 'Internal Audit', icon: 'fa-search' },
        { title: 'GST Audit', icon: 'fa-search' },
        { title: 'Audit Specified under other acts', icon: 'fa-search' },
    ];

    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
                        <h2 className="fw-bold text-primary text-uppercase">Our Audit Services</h2>
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
                                <div
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
                                        justifyContent: "space-between",
                                        cursor: "pointer"
                                    }}
                                    className="service-item d-flex flex-column align-items-center justify-content-center text-center"
                                >
                                    <div className="service-icon">
                                        <i className={`fa ${service.icon} text-white`} />
                                    </div>
                                    <h4 className="mb-3">{service.title}</h4>
                                    {/* <a className="btn btn-lg btn-primary rounded" href="#">
                                    <i class="fa-solid fa-arrow-right-long"/>
                                    </a> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Audit;
