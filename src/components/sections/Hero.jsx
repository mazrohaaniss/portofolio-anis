import { Link } from "react-scroll";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { personalInfo } from "../../data/portfolio";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-20 pb-16 overflow-hidden bg-bg-light"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Column 1: Intro Text & Socials (Left) */}
          <div className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 lg:space-y-8">
            
            {/* Socials (Horizontal) */}
            <div className="flex gap-4">
              <a
                href={personalInfo.instagramUrl || "https://instagram.com/mazrohaaniss"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://linkedin.com/in/mazrohaaniss"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-text-main text-white flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href={personalInfo.githubUrl || "https://github.com/mazrohaaniss"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 text-white flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <FaGithub size={18} />
              </a>
            </div>

            {/* Titles */}
            <div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-main tracking-tight leading-tight">
                Halo, Saya <br className="hidden lg:block" />
                <span className="text-primary-600">Mazroha Anis Sugesti</span>
              </h3>
            </div>

            {/* Description */}
            <p className="text-text-muted text-base lg:text-lg leading-relaxed font-medium max-w-xl">
              Saya adalah seseorang dengan pola pikir kreatif dan dorongan untuk mencapai hasil nyata. Minat utama saya berada di bidang <span className="text-text-main font-bold">pengembangan web</span>, didukung oleh pengalaman dalam <span className="text-text-main font-bold">desain UI/UX</span> dan penyelesaian masalah. Selain itu, saya juga memiliki ketertarikan pada pembuatan konten kreatif.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="/CV_Mazroha Anis Sugesti.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary-500 text-white font-bold rounded-full hover:bg-primary-600 hover:-translate-y-1 hover:shadow-xl transition-all shadow-primary-500/30 shadow-lg"
              >
                Download CV
              </a>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="px-8 py-3 bg-transparent border-2 border-primary-500 text-primary-600 font-bold rounded-full hover:bg-primary-50 hover:-translate-y-1 transition-all cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Column 2: Image (Right) */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center">
            {/* Aksen warna beige samar di belakang gambar */}
            <div className="absolute w-[120%] h-[120%] rounded-full bg-[#E5D3B3]/40 blur-3xl z-0" />
            <div className="absolute w-[100%] h-[100%] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-[#E5D3B3]/60 blur-xl z-0 animate-pulse" />
            
            <img 
              src="/IMG_8165.png" 
              alt={personalInfo.name} 
              className="relative z-10 w-[260px] sm:w-[300px] md:w-[380px] lg:w-[420px] h-auto object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
