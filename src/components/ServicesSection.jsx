import React from "react";

import servicesBg from "../assets/hairwashsanctuary.jpg";
import servicesBgMobile from "../assets/relaximage.png";

function ServicesBlock({ title, description, imageDesktop, imageMobile }) {
  return (
    <section id="services" className="relative min-h-screen w-full">
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src={imageDesktop}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 md:hidden">
        <img
          src={imageMobile}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 min-h-screen flex items-end p-10">
        <div className="bg-[#EDDBC8] rounded-[40px] p-10 w-[498px] max-w-full">
          <h2 className="font-proxima font-medium text-[24px] leading-[30px] text-[#4A4A4A] tracking-normal">
            {title}
          </h2>

          <p className="mt-4 font-proxima text-[16px] leading-[22px] text-[#4A4A4A] tracking-normal">
            {description}
          </p>

          <a
            href="https://www.fresha.com/book-now/copenhagen-grooming-club-hcyt95ec/all-offer?share=true&pId=2747789"
            target="_blank"
            rel="noopener noreferrer"
            className="
            font-proxima
              inline-block
              mt-6
              bg-[#4A4A4A]
              text-[#F5F0E8]
              px-6
              py-[17px]
              rounded-full
              text-sm
              font-medium
              tracking-wide
              hover:bg-black
              transition-colors
            "
          >
            Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <>
      <ServicesBlock
        title="Our Services"
        description="Hair, beard, and facial treatments shaped around craft, care, and comfort, combining skilled barbering with a host-led approach. The focus stays on quality, not speed, and on how you’re treated from arrival to finish."
        imageDesktop={servicesBg}
        imageMobile={servicesBgMobile}
      />
      <ServicesBlock
        title="Relax, Unwind"
        description="Every service ends with time in our zero-gravity massage chairs. Built into the visit, this final moment helps release tension through the body, leaving you lighter, settled and ready to step back out."
        imageDesktop={servicesBgMobile}
        imageMobile={servicesBgMobile}
      />
    </>
  );
}

export default ServicesSection;
