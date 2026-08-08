import Image from "next/image";

export const Boat = () => {
  return (
    <Image
      src="/cartoon-boat.svg"
      alt="Sailboat"
      className="w-full h-auto animate-boat"
      width={480}
      height={420}
    />
  );
};
