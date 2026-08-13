import { OceanWaves } from "./components/ui/OceanWaves";
import { Boat } from "./components/ui/Boat";
import { EB_Garamond } from "next/font/google";

const eb_garamond = EB_Garamond({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div
        className={`${eb_garamond.className} flex flex-col justify-center items-center gap-1 min-h-[50vh]`}
      >
        <p className="md:text-7xl text-5xl">Benjamin Dekan</p>
        <p className="md:text-3xl text-xl">Frontend / full-stack developer</p>
        <p className="md:text-lg text-md">
          Building web apps with a focus on ocean themed side projects
        </p>
      </div>

      <div className="relative">
        <OceanWaves />
        <div className="absolute right-[20%] top-[53%] w-[15%] -translate-x-1/2">
          <Boat />
        </div>
      </div>
      <div className="flex flex-1 bg-linear-to-b min-h-[2000px] from-[#0693E3] to-blue-950"></div>
    </main>
  );
}
