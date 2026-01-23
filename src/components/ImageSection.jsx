import React from "react";
import bgImage from "../assets/laptopimage.png";
import bgImage2 from "../assets/mobimage.png";

function ImageSection() {
  return (
    <section className="bg-[#EDDBC8]  border-y-1 border-gray-500 max-[1537px]:border-none ">
      <div
        className="
          relative overflow-hidden
          w-full
          max-w-[355px] h-[480px]
          mx-auto
          md:max-w-[780px] md:h-[460px]
          lg:max-w-full lg:h-[680px]
        "
      >
        <img
          src={bgImage2}
          alt="Mobile visual"
          className="absolute inset-0 w-full h-full object-cover lg:hidden"
        />
        <img
          src={bgImage}
          alt="Desktop visual"
          className="absolute inset-0 w-full h-full object-fill hidden lg:block"
        />
      </div>
    </section>
  );
}

export default ImageSection;
