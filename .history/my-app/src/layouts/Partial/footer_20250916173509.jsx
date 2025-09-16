import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-3 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side */}
          <div className="text-gray-700 text-sm">
            {new Date().getFullYear()} &copy; {process.env}
          </div>

         
          <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
          
            <img
              src="/assets/images/neoehs.svg"
              className="h-6" // 25px approx
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
