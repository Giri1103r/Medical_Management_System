import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-light py-3 mt-auto">
      <div className="container-fluid">
        <div className="row">
          {/* Left Side */}
          <div className="col-md-6">
            {new Date().getFullYear()} &copy; {import.meta.env.VITE_APP_NAME}
          </div>

          {/* Right Side (hidden by default) */}
          <div className="col-md-6 d-none">
            <div className="text-md-end footer-links d-none d-sm-block">
              Powered By{" "}
              <img
                src="/assets/images/neoehs.svg"
                height="25"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
