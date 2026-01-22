import heroBg from "../assets/storefront.jpg";
import logo from "../assets/logo.png";
import phone from "../assets/phone.svg";
import whatsapp from "../assets/whatsapp-icon.svg";
import calendar from "../assets/calendar.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="absolute inset-0 z-1 bg-black/40" />

      <header className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-4 lg:py-6 lg:pt-8">
        <nav className="flex items-center justify-between relative">
          <div className="hidden lg:flex gap-8 text-lg tracking-wider text-[#f4f1ee]">
            <a
              href="#services"
              className="hover:text-[#eddbc0] transition-colors"
            >
              Service
            </a>
            <a href="#about" className="hover:text-[#eddbc0] transition-colors">
              About
            </a>
          </div>

          <a
            href="/"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2"
          >
            <img src={logo} alt="Logo" className="w-50 invert brightness-100" />
          </a>

          <a href="/" className="lg:hidden">
            <img src={logo} alt="Logo" className="w-36 invert brightness-100" />
          </a>

          <div className="flex items-center gap-4">
            <a
              href="tel:+31655605065"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-[#f4f1ee]/40 flex items-center justify-center hover:bg-[#f4f1ee]/10 transition"
            >
              <img src={phone} alt="phone" className="invert h-5 w-5" />
            </a>

            <a
              href="https://wa.me/31655605065"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-[#f4f1ee]/40 flex items-center justify-center hover:bg-[#f4f1ee]/10 transition"
            >
              <img src={whatsapp} alt="whatsapp" className="invert h-6 w-6" />
            </a>

            <a
              href="https://www.fresha.com/book-now/copenhagen-grooming-club-hcyt95ec/all-offer?share=true&pId=2747789"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-[#f4f1ee]/40 flex items-center justify-center hover:bg-[#f4f1ee]/10 transition"
            >
              <img src={calendar} alt="calendar" className="invert h-6 w-6" />
            </a>
          </div>
        </nav>
      </header>

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-32 pb-20">
        <div className="max-w-5xl">
          <h1 className="font-proxima w-[80%] lg:w-[80%] text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-normal text-[#f4f1ee] leading-[0.95] tracking-tight">
            A place <br /> to slow down and <br /> leave sharper.
          </h1>

          <p className="font-proxima font-normal mt-8 md:mt-12 text-[#f4f1ee]/80 text-md md:text-lg max-w-md leading-relaxed">
            A boutique grooming space shaped around you.
            <br />
            Hospitality, craft, and care define the experience.
          </p>

          <div className="mt-10 md:mt-14">
            <a
              href="https://www.fresha.com/book-now/copenhagen-grooming-club-hcyt95ec/all-offer?share=true&pId=2747789"
              target="_blank"
              rel="noopener noreferrer"
              className="font-proxima inline-block bg-[#f4f1ee] text-[#1A1A1A] px-8 py-4 rounded-full text-sm hover:bg-[#eddbc0] transition-colors"
            >
              Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
