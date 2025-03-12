import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [iconSize, setIconSize] = useState("80px");

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth < 768 ? "50px" : "80px");
    };

    handleResize(); // Initial size set karne ke liye
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    <a
      href="https://wa.me/+919898953563"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "3vh",
        right: "1vw",
        zIndex: "9999",
      }}
    >
      <img
        src="/WhatsAppLogo.svg"
        alt="WhatsApp"
        style={{
          width: iconSize,
          height: iconSize,
          borderRadius: "50%",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </a>
  );
};

export default WhatsAppButton;
