import { useState } from "react";
import { technicalSkills } from "../../data/portfolio";
import SectionTitle from "../ui/SectionTitle";
import useScrollReveal from "../../hooks/useScrollReveal";

const Skills = () => {
  const [ref, isVisible] = useScrollReveal();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="relative py-32 overflow-hidden bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          subtitle="What I can do" 
          title="Tools" 
          align="center" 
        />
        
        <div
          ref={ref}
          className={`mt-24 max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-16 gap-y-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {technicalSkills.map((skill, index) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill === skill.name;
            
            return (
              <div
                key={skill.name}
                className="relative group flex flex-col items-center justify-center cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Glow Effect */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-[30px] transition-all duration-500 pointer-events-none"
                  style={{ 
                    backgroundColor: skill.color,
                    opacity: isHovered ? 0.35 : 0.05,
                    transform: isHovered ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%) scale(0.8)'
                  }}
                />
                
                {/* Icon */}
                <div 
                  className="relative z-10 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)"
                  style={{
                    transform: isHovered ? 'scale(1.3) translateY(-8px)' : 'scale(1) translateY(0)',
                    color: skill.color
                  }}
                >
                  <Icon size={72} />
                </div>

                {/* Skill Name */}
                <span 
                  className="absolute -bottom-10 whitespace-nowrap font-extrabold text-sm tracking-[0.2em] uppercase transition-all duration-500"
                  style={{ 
                    color: skill.color,
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'translateY(0)' : 'translateY(-10px)'
                  }}
                >
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
