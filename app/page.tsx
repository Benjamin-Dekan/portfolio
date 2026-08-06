import { OceanWaves } from "./components/ui/OceanWaves";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-1 min-h-[50vh]">
        <p className="text-5xl">Benjamin Dekan</p>
        <p className="text-2xl">Frontend / full-stack developer</p>
        <p>Building web apps with a focus on ocean themed side projects</p>
      </div>

      <div>
        <OceanWaves />
      </div>
      <div className="flex flex-1 bg-linear-to-b min-h-[1000px] from-[#0693E3] to-blue-950"></div>
    </main>
  );
}
