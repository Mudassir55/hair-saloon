import React from "react";

import teamImage from "../assets/teamsectionimage.jpeg";
import teamMember1 from "../assets/teammember1.jpeg";
import teamMember2 from "../assets/teammember2.jpeg";
import teamMember3 from "../assets/teammember3.png";

function TeamSection() {
  return (
    <section className="bg-[#EDDBC8] py-[80px] lg:py-[160px]">
      <div className="max-w-[1280px] mx-auto px-10 flex flex-col gap-10">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row md:items-start gap-5">
          <div className="md:w-1/2">
            <h2 className="font-proxima font-medium text-[48px] leading-[72px] tracking-[-0.05em] text-[#4A4A4A]">
              Team
            </h2>
          </div>

          <div className="md:w-1/2">
            <p className="font-proxima text-[16px] leading-[22px] text-[#4A4A4A]">
              Our team shares the values of hospitality, generosity, and
              quality. They guide how guests are received, how the work is
              carried out, and how each visit is handled from start to finish.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="relative w-full aspect-[1200/680]">
            <img
              src={teamImage}
              alt="Team"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div>
            <div className="relative w-full aspect-[285/463]">
              <img
                src={teamMember1}
                alt="Samer"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-proxima text-[18px] leading-[24px] text-[#4A4A4A]">
                Samer
              </h3>
              <p className="font-proxima text-[14px] leading-[20px] text-[#4A4A4A]/70">
                Facial Specialist
              </p>
            </div>
          </div>
          <div>
            <div className="relative w-full aspect-[285/463]">
              <img
                src={teamMember2}
                alt="Adil"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-proxima text-[18px] leading-[24px] text-[#4A4A4A]">
                Adil
              </h3>
              <p className="font-proxima text-[14px] leading-[20px] text-[#4A4A4A]/70">
                Senior Barber
              </p>
            </div>
          </div>
          <div>
            <div className="relative w-full aspect-[285/463]">
              <img
                src={teamMember3}
                alt="Maya"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-proxima text-[18px] leading-[24px] text-[#4A4A4A]">
                Maya
              </h3>
              <p className="font-proxima text-[14px] leading-[20px] text-[#4A4A4A]/70">
                Grooming Consultant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
