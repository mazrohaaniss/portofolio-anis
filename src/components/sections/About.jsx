import { useState } from "react";
import { education, technicalSkills } from "../../data/portfolio";
import SectionTitle from "../ui/SectionTitle";
import useScrollReveal from "../../hooks/useScrollReveal";
import { FaGraduationCap, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const skillPages = [];
for (let i = 0; i < technicalSkills.length; i += 6) {
  skillPages.push(technicalSkills.slice(i, i + 6));
}

const About = () => {
  const [ref, isVisible] = useScrollReveal();
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [page, setPage] = useState(0);

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-bg-alt">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E5D3B3]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#E5D3B3]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle subtitle="Get to know me" title="About Me" align="center" />

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-start transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          {/* ═══ LEFT — TOOLS ═══ */}
          <div>
            {/* Label */}
            <p className="text-xs font-black text-primary-600 uppercase tracking-[0.4em] mb-10 text-center">Tools</p>

            {/* Icon grid — pure floating, no bg */}
            <div key={page} className="grid grid-cols-3 gap-x-10 gap-y-12 place-items-center animate-fade-in">
              {skillPages[page]?.map((skill) => {
                const Icon = skill.icon;
                const isHovered = hoveredSkill === skill.name;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-3 cursor-default"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div
                      className="transition-all duration-300"
                      style={{
                        transform: isHovered ? "translateY(-8px) scale(1.15)" : "scale(1)",
                        filter: isHovered ? `drop-shadow(0 12px 24px ${skill.color}60)` : "none",
                        opacity: isHovered ? 1 : 0.75,
                      }}
                    >
                      <Icon size={44} style={{ color: skill.color }} />
                    </div>
                    <span
                      className="text-[9px] font-black uppercase tracking-widest transition-all duration-300"
                      style={{ color: isHovered ? skill.color : "#b5b5b5" }}
                    >
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-3 mt-12">
              <button
                onClick={() => setPage((p) => (p - 1 + skillPages.length) % skillPages.length)}
                className="w-7 h-7 rounded-full border border-border-main flex items-center justify-center text-text-muted hover:border-primary-500 hover:text-primary-500 transition-all"
              >
                <FaChevronLeft size={9} />
              </button>
              <div className="flex gap-1.5">
                {skillPages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`rounded-full transition-all duration-300 ${i === page ? "w-5 h-1.5 bg-primary-500" : "w-1.5 h-1.5 bg-border-main hover:bg-primary-300"
                      }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setPage((p) => (p + 1) % skillPages.length)}
                className="w-7 h-7 rounded-full border border-border-main flex items-center justify-center text-text-muted hover:border-primary-500 hover:text-primary-500 transition-all"
              >
                <FaChevronRight size={9} />
              </button>
            </div>
          </div>

          {/* ═══ RIGHT — INFO ═══ */}
          <div className="flex flex-col gap-10">

            {/* Bio */}
            <div className="space-y-4">
              <p className="text-text-main text-base leading-relaxed font-medium">
                Lulusan <span className="font-bold">S1 Teknik Komputer</span> yang memiliki pengalaman di bidang pengembangan web, serta pelayanan pelanggan dan penjualan.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                Berpengalaman menggunakan{" "}
                <span className="font-semibold text-text-main">CodeIgniter, React.js, HTML, CSS, JavaScript, dan Figma</span>{" "}
                untuk mengembangkan serta merancang solusi digital. Memiliki kemampuan komunikasi, kerja sama tim, dan pemecahan masalah yang diperoleh dari pengalaman di bidang teknologi dan retail. Saat ini terbuka untuk mempelajari hal baru dan mengembangkan karier di berbagai bidang.
              </p>
            </div>

            {/* Stats — horizontal, no borders/cards */}
            <div className="flex gap-10">
              {[
                { n: "5+", l: "Projek" },
                { n: "2", l: "Penghargaan" },
                { n: "3.86", l: "IPK" },
              ].map((s, i) => (
                <div key={s.l} className={`cursor-default group ${i < 2 ? "pr-10 border-r border-border-main" : ""}`}>
                  <p className="text-3xl font-black text-primary-500 group-hover:scale-110 transition-transform inline-block">{s.n}</p>
                  <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-1">{s.l}</p>
                </div>
              ))}
            </div>

            {/* Thin divider */}
            <div className="h-px bg-border-main" />

            {/* Education */}
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <FaGraduationCap className="text-primary-500" size={13} />
                <span className="text-[11px] font-black text-text-main uppercase tracking-[0.35em]">Pendidikan</span>
              </div>

              {/* Side by side, no cards, just clean text */}
              <div className="grid grid-cols-2 gap-8">
                {education.map((edu) => (
                  <div key={edu.id} className="group">
                    <p className="text-[10px] font-black text-primary-600 uppercase tracking-widest mb-2">{edu.year}</p>
                    <h5 className="text-text-main font-extrabold text-sm leading-snug mb-0.5">{edu.degree}</h5>
                    <p className="text-text-muted text-xs">{edu.school}</p>
                    {edu.gpa && (
                      <p className="text-primary-500 text-xs font-black mt-2">IPK {edu.gpa}</p>
                    )}
                    {/* Thin accent line below */}
                    <div className="mt-3 h-0.5 w-8 bg-primary-500/30 group-hover:w-16 group-hover:bg-primary-500 transition-all duration-500 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
