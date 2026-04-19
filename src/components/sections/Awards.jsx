import { achievements } from "../../data/portfolio";
import SectionTitle from "../ui/SectionTitle";
import useScrollReveal from "../../hooks/useScrollReveal";
import { FaAward, FaTrophy, FaMedal } from "react-icons/fa";

const Awards = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="awards" className="relative py-28 overflow-hidden bg-bg-light">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E5D3B3]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionTitle subtitle="Recognitions" title="Awards & Achievements" align="center" />

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {achievements.map((item, index) => {
            const Icon = index === 0 ? FaTrophy : FaMedal;
            return (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-6 p-8 bg-white border border-border-main rounded-2xl transition-all duration-500 hover:border-primary-400 hover:shadow-[0_20px_40px_-15px_rgba(201,169,110,0.15)] hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon Container */}
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-bg-alt border border-border-main flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <Icon size={24} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-extrabold text-text-main mb-1.5 group-hover:text-primary-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold text-text-muted uppercase tracking-wider">
                    {item.event}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
