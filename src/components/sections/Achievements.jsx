import { achievements } from "../../data/portfolio";
import SectionTitle from "../ui/SectionTitle";
import useScrollReveal from "../../hooks/useScrollReveal";
import { FaTrophy, FaStar } from "react-icons/fa";

const Achievements = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="achievements" className="relative py-24 overflow-hidden bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Recognition & Awards" title="Achievements" />

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="relative clean-card bg-white rounded-2xl p-8 group overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Trophy decoration */}
              <div className="absolute -top-4 -right-4 text-8xl text-primary-500 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                <FaTrophy />
              </div>

              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-bg-alt flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-text-main font-bold text-lg mb-1 group-hover:text-primary-600 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-primary-600 text-sm font-medium mb-3">
                      {achievement.event}
                    </p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-xs ${
                            i < 4
                              ? "text-primary-500"
                              : "text-border-main"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative quote */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <blockquote className="text-text-muted text-lg font-medium italic max-w-lg mx-auto">
            &ldquo;Every achievement starts with the decision to try.&rdquo;
          </blockquote>
          <div className="mt-4 flex items-center justify-center gap-2 text-border-main">
            <span className="w-8 h-px bg-border-main" />
            <span className="text-xs text-primary-500">✿</span>
            <span className="w-8 h-px bg-border-main" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
