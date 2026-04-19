import { FaHeart, FaGithub, FaInstagram, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import { personalInfo, navLinks } from "../../data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-light border-t border-border-main">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-text-main flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <div>
                <h3 className="font-extrabold tracking-tight text-2xl text-text-main uppercase">PORTFOLIO</h3>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Web Developer</p>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs font-medium">
              Menggabungkan kreativitas dan teknologi untuk menciptakan pengalaman digital yang menakjubkan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-text-main font-bold text-lg uppercase tracking-wide">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-text-muted hover:text-primary-600 text-sm font-semibold cursor-pointer transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-text-main font-bold text-lg uppercase tracking-wide">Connect</h4>
            <div className="flex gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-bg-alt border border-border-main flex items-center justify-center text-text-main hover:text-primary-600 hover:border-primary-500 hover:bg-white transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope size={16} />
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-bg-alt border border-border-main flex items-center justify-center text-text-main hover:text-primary-600 hover:border-primary-500 hover:bg-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href={personalInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-bg-alt border border-border-main flex items-center justify-center text-text-main hover:text-primary-600 hover:border-primary-500 hover:bg-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
            </div>
            <p className="text-text-muted font-medium text-sm">
              {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border-main flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted font-semibold text-sm flex items-center gap-1">
            © {currentYear} Made with <FaHeart className="text-primary-500 text-xs" /> by {personalInfo.nickname}
          </p>
          <p className="text-text-muted font-medium text-xs">
            Built with React.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
