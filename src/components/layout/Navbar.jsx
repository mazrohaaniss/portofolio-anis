import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../../data/portfolio";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-light/90 backdrop-blur-md py-3 shadow-sm border-b border-border-main"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Empty left side */}
        <div className="w-10"></div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onSetActive={handleSetActive}
              className={`relative px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wide ${
                activeLink === link.to
                  ? "text-text-main"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              {link.name}
              {activeLink === link.to && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-500" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className="hidden md:block btn-primary text-sm !px-6 !py-2.5"
        >
          Let&apos;s Connect
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-main p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-bg-light shadow-lg transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 py-4 border-t border-border-main" : "max-h-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              onSetActive={handleSetActive}
              className={`px-4 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wide ${
                activeLink === link.to
                  ? "text-primary-600 bg-primary-500/10"
                  : "text-text-muted hover:text-text-main hover:bg-bg-alt"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setIsOpen(false)}
            className="btn-primary text-sm text-center mt-2"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
