const Badge = ({ children, variant = "primary", className = "" }) => {
  const variants = {
    primary: "bg-primary-500/10 text-primary-600 border border-primary-500/20",
    accent: "bg-accent-peach/10 text-accent-peach border border-accent-peach/20",
    coral: "bg-accent-green/10 text-accent-green border border-accent-green/20",
    glass: "bg-bg-light border border-border-main text-text-muted",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
