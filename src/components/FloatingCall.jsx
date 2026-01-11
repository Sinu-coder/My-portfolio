import React from "react";
import "../assets/css/Floating.css";

function FloatingCall() {
  const handleCall = () => {
    window.location.href = "tel:+917846961860";
  };

  return (
    <div className="floating-call-wrapper" onClick={handleCall}>
      <div className="floating-call">
        <i className="bi bi-telephone-fill"></i>
      </div>
    </div>
  );
}

export default FloatingCall;
