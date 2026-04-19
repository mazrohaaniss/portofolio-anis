const SectionTitle = ({ subtitle, title, align = "center" }) => {
  const alignClass = align === "center" ? "text-center" : "text-left";
  
  return (
    <div className={`mb-16 ${alignClass}`}>
      <span className="inline-block uppercase tracking-widest text-sm font-bold text-primary-600 mb-3">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-text-main leading-tight tracking-tight uppercase">
        {title}
      </h2>
      <div className={`mt-4 h-1.5 w-16 bg-primary-500 rounded-full ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionTitle;
