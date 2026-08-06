export const OceanWaves = () => {
  return (
    <svg
      viewBox="0 0 1440 490"
      xmlns="http://www.w3.org/2000/svg"
      // w-full and h-full are the Tailwind equivalents of width="100%" height="100%"
      className="w-full h-full transition duration-300 ease-in-out delay-150"
    >
      {/* Back Wave (Slightly Transparent) */}
      <path
        stroke="none"
        strokeWidth="0"
        fill="#0693e3"
        fillOpacity="0.53"
        className="animate-wave-back transition-all duration-300 ease-in-out delay-150"
      />

      {/* Front Wave (Solid) */}
      <path
        stroke="none"
        strokeWidth="0"
        fill="#0693e3"
        className="animate-wave-front transition-all duration-300 ease-in-out delay-150"
      />
    </svg>
  );
};
