import React from "react";
import logo from "../assets/logo.png";
import instagram from "../assets/instagram.svg";

function Footer() {
  return (
    <footer className="bg-[#EDDBC8] pt-[60px] pb-[40px] px-[20px] md:px-[40px]">
      <div className="max-w-[1280px] mx-auto">

        {/* Logo */}
        <div className="mb-[40px] flex justify-start">
          <div className="w-[200px] h-[80px] relative overflow-hidden">
            <img
              src={logo}
              alt="Logo"
              className="absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 
              w-[200px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-6 mb-[60px] text-[#4A4A4A]">

          {/* Left */}
          <div className="flex flex-col gap-2 font-proxima text-[16px] leading-[22px]">
            <a
              href="mailto:Hello@copenhagengroomingclub.com"
              className="hover:text-[#2A2A2A]"
            >
              Hello@copenhagengroomingclub.com
            </a>
            <a
              href="tel:+31655605065"
              className="hover:text-[#2A2A2A]"
            >
              +31 655 60 50 85
            </a>
          </div>

          {/* Center - Cleaned Address */}
          <div className="font-proxima text-[16px] leading-[22px] text-left md:text-center"
            style={{ fontVariantLigatures: "none", fontFeatureSettings: "'liga' 0" }}
               >
            Overtoom 471 1054 LE <br />
             Oud West Amsterdam
          </div>
          {/* Right */}
          <div className="flex items-center gap-2 md:justify-start justify-start font-proxima text-[16px] leading-[22px]">
            <span>Instagram</span>
            <img src={instagram} alt="Instagram" className="w-5 h-5" />
          </div>
        </div>

        {/* Bottom */}
        <div className="font-proxima text-[16px] leading-[22px] text-[#4A4A4A]">
          Copenhagen Grooming Club <br />
          © 2026 All Rights Reserved
        </div>

      </div>
    </footer>
  );
}

export default Footer;