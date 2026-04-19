import { useState } from "react";
import { experiences, organizations } from "../../data/portfolio";
import SectionTitle from "../ui/SectionTitle";
import { FaBriefcase, FaLaptopCode, FaProjectDiagram, FaUsers } from "react-icons/fa";
import useScrollReveal from "../../hooks/useScrollReveal";

const typeConfig = {
  internship: { icon: FaLaptopCode, label: "Internship", color: "#C9A96E" },
  project: { icon: FaProjectDiagram, label: "Project", color: "#8BAF8C" },
  work: { icon: FaBriefcase, label: "Work", color: "#C49A8A" },
};

const Experience = () => {
  const [ref, isVisible] = useScrollReveal();
  const [openItems, setOpenItems] = useState({});

  const toggle = (key) => setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section id="experience" className="relative py-28 overflow-hidden bg-bg-light">
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#E5D3B3]/15 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle subtitle="My journey so far" title="Experience" />

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* ─── Work Experience ─── */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <FaBriefcase className="text-primary-500" size={18} />
              <h3 className="text-2xl font-black text-text-main uppercase tracking-tight">Pengalaman Kerja</h3>
            </div>

            <div className="space-y-0">
              {experiences.map((exp, idx) => {
                const config = typeConfig[exp.type];
                const Icon = config.icon;
                const key = `exp-${exp.id}`;
                const isOpen = openItems[key];

                return (
                  <div key={exp.id} className="relative group pb-8 pl-5 border-l border-border-main">
                    {/* Small square dot */}
                    <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rotate-45 transition-all duration-300 ${isOpen ? "bg-primary-500" : "bg-white border border-primary-400 group-hover:bg-primary-400"}`} />

                    {/* Header — clickable */}
                    <button
                      onClick={() => toggle(key)}
                      className="w-full text-left flex items-start justify-between gap-4 group/btn"
                    >
                      <div>
                        <h4 className="text-text-main font-extrabold text-base leading-tight group-hover/btn:text-primary-600 transition-colors">{exp.title}</h4>
                        <p className="text-primary-600 text-sm font-semibold mt-0.5">{exp.company}</p>
                      </div>
                      <div className="shrink-0 flex flex-col items-end gap-1">
                        <span
                          className="text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                          style={{ color: config.color, background: config.color + "18" }}
                        >
                          {config.label}
                        </span>
                        <span className="text-text-muted text-xs font-bold">{exp.year}</span>
                      </div>
                    </button>

                    {/* Description — collapsible */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
                    >
                      <ul className="space-y-1.5 pl-1">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2 text-text-muted text-sm leading-relaxed">
                            <span className="text-primary-500 mt-1.5 shrink-0" style={{ fontSize: "5px" }}>●</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── Organizations ─── */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <FaUsers className="text-primary-500" size={18} />
              <h3 className="text-2xl font-black text-text-main uppercase tracking-tight">Organisasi</h3>
            </div>

            <div className="space-y-0">
              {organizations.map((org) => {
                const key = `org-${org.id}`;
                const isOpen = openItems[key];

                return (
                  <div key={org.id} className="relative group pb-8 pl-5 border-l border-border-main">
                    {/* Small square dot */}
                    <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rotate-45 transition-all duration-300 ${isOpen ? "bg-primary-500" : "bg-white border border-primary-400 group-hover:bg-primary-400"}`} />

                    {/* Header — clickable */}
                    <button
                      onClick={() => toggle(key)}
                      className="w-full text-left flex items-start justify-between gap-4 group/btn"
                    >
                      <div>
                        <h4 className="text-text-main font-extrabold text-base leading-tight group-hover/btn:text-primary-600 transition-colors">{org.role}</h4>
                        <p className="text-primary-600 text-sm font-semibold mt-0.5">{org.organization}</p>
                      </div>
                    </button>

                    {/* Description — collapsible */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
                    >
                      <ul className="space-y-1.5 pl-1">
                        {org.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2 text-text-muted text-sm leading-relaxed">
                            <span className="text-primary-500 mt-1.5 shrink-0" style={{ fontSize: "5px" }}>●</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
