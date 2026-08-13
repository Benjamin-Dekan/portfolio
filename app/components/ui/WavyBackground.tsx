export const WavyBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full text-blue-300/40"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 150C200 250 400 50 750 150C1100 250 1300 100 1540 150"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M-100 220C150 300 350 120 700 220C1050 320 1250 150 1540 220"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M-100 280C250 360 450 180 800 280C1150 380 1350 210 1540 280"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
