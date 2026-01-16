import React from "react";

const Footer = () => {
  return (
    <div className="sidebar-footer pt-73 pe-30">
      <div className="footer-card">
        <div className="d-flex justify-content-between mb-20">
          <img src="/assets/icon/fill-up.svg" height={50} width={50} />
          <p className="fw-medium color-palette-1">
            Top Up &<br />
            Be The Winner
          </p>
        </div>
        <button
          type="button"
          className="btn btn-get-started w-100 fw-medium text-xs text-center text-white rounded-pill"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Footer;
