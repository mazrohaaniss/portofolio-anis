import { personalInfo } from "../../data/portfolio";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import useScrollReveal from "../../hooks/useScrollReveal";
import { FaEnvelope, FaPhone, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";

const contactLinks = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "bg-primary-500/20 text-primary-600",
  },
  {
    icon: FaPhone,
    label: "WhatsApp",
    value: personalInfo.phone,
    href: `https://wa.me/${personalInfo.phone.replace('+', '')}`,
    color: "bg-accent-green/20 text-accent-green",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: personalInfo.github,
    href: personalInfo.githubUrl,
    color: "bg-text-main/10 text-text-main",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: personalInfo.instagram,
    href: personalInfo.instagramUrl,
    color: "bg-accent-peach/20 text-accent-peach",
  },
];

const Contact = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-bg-alt">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Let's work together" title="Get In Touch" />

        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="clean-card bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-text-main mb-2 flex items-center justify-center gap-2 text-center">
                Let&apos;s Connect <span className="text-2xl">💌</span>
              </h3>
              <p className="text-text-muted mb-8 text-center leading-relaxed font-medium">
                Saya selalu terbuka untuk diskusi project baru, ide kreatif, atau kesempatan untuk berkontribusi dalam tim Anda.
              </p>

              <div className="space-y-4">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl border border-border-main hover:border-primary-500 bg-bg-light transition-all duration-300 group"
                    >
                      <div
                        className={`w-11 h-11 rounded-xl ${link.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-text-muted text-xs font-semibold uppercase">{link.label}</p>
                        <p className="text-text-main text-sm font-bold group-hover:text-primary-600 transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Fun card */}
            <Card className="!p-6 text-center bg-white">
              <p className="text-text-muted text-sm font-medium">
                Prefer a quick chat? Feel free to reach out on any platform! 
              </p>
              <div className="mt-3 flex items-center justify-center gap-1 text-primary-500 text-sm font-bold">
                <FaHeart className="text-xs animate-pulse text-accent-peach" />
                <span>I usually respond within 24 hours</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
