export const OceanWaves = () => {
  return (
    <svg
      viewBox="0 0 1440 490"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full transition duration-300 ease-in-out delay-150"
    >
      <path
        stroke="none"
        strokeWidth="0"
        fill="#0693e3"
        fillOpacity="0.53"
        className="animate-wave-back transition-all duration-300 ease-in-out delay-150"
      />

      <path
        stroke="none"
        strokeWidth="0"
        fill="#0693e3"
        className="animate-wave-front transition-all duration-300 ease-in-out delay-150"
      />
    </svg>
  );
};
