const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`clean-card overflow-hidden transition-all duration-300 p-6 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Card;
