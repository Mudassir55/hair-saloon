import React from "react";
import logo from "../assets/logo.png";
import instagram from "../assets/instagram.svg";

function Footer() {
  return (
    <footer className="bg-[#EDDBC8] pt-[60px] pb-[40px] px-[40px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-[40px]">
          <div className="w-[120px] h-[48px] relative overflow-hidden">
            <img
              src={logo}
              alt="Logo"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-auto object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[60px]">
          <div className="flex flex-col gap-2 text-[#4A4A4A]">
            <a
              href="mailto:Hello@copenhagengroomingclub.com"
              className="font-proxima text-[16px] leading-[22px] hover:text-[#2A2A2A] "
            >
              Hello@copenhagengroomingclub.com
            </a>
            <a
              href="tel:+31655605065"
              className="font-proxima text-[16px] leading-[22px] hover:text-[#2A2A2A] "
            >
              +31 655 60 50 65
            </a>
          </div>
          <div className="flex flex-col gap-2 text-[#4A4A4A]">
            <p className="flex items-center gap-2 font-proxima text-[16px] leading-[22px] hover:text-black transition-colors">
              Instagram
              <img src={instagram} alt="Instagram" className="w-5 h-5" />
            </p>

            <span className="font-proxima text-[16px] leading-[22px]">
              @CopenhagenGroomingClub
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-[#4A4A4A]">
          <span className="font-proxima text-[16px] leading-[22px]">
            © 2026 All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
