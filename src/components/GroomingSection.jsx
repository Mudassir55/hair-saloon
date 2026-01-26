import React from "react";
import groomingImage from "../assets/groomsection.png";

const GroomingSection = () => {
  return (
    <section id="about" className="bg-[#EDDBC8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-40">
        <div className="flex flex-col md:flex-row md:items-start gap-10">
          <div className="md:w-1/2">
            <h2
              className="
              font-proxima
              font-medium
              text-[48px]
              leading-[72px]
              tracking-[-0.05em]
              text-[#4A4A4A]
            "
            >
              Where grooming
              <br />
              meets hospitality<br /> in Amsterdam.
            </h2>

            <p
              className="
              font-proxima-nova
              mt-8
              text-[16px]
              leading-[22px]
              tracking-normal
              text-[#4A4A4A]
              max-w-md
            "
            >
              Copenhagen Grooming Club is a grooming space shaped around
              precision and how guests are received. Skilled barbering is paired
              with a calm, host-led experience, where craft, care, and comfort
              guide your visit. The focus stays on you throughout the visit.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative aspect-[3/4] w-full">
              <img
                src={groomingImage}
                alt="Grooming Lounge Experience"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroomingSection;
