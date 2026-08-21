import { Fraunces } from "next/font/google";
import { WavyBackground } from "@/app/components/ui/WavyBackground";

const fraunces = Fraunces({
  subsets: ["latin"],
});

const AboutPage = () => {
  return (
    <div className="px-6 min-h-[50vh] flex items-center justify-center py-6 relative w-full">
      <WavyBackground />

      {/* Changed max-w-[1600px] to max-w-3xl for a better reading width, and added relative z-10 to ensure it sits above the wavy background */}
      <div className="relative z-10 max-w-3xl mx-auto ring-2 ring-blue-500 bg-white inset-shadow-sm inset-shadow-blue-400 rounded-2xl px-8 py-12 md:px-16">
        <h1 className={`${fraunces.className} font-semibold text-4xl mb-6`}>
          About Me.
        </h1>

        {/* Removed max-w-md. Added space-y-5 to handle the spacing between paragraphs automatically, and increased line-height for readability */}
        <div className="text-neutral-600 space-y-5 leading-relaxed text-lg">
          <p>
            Hi, I'm Benjamin. I recently graduated from Boston University with a
            degree in Computer Engineering.
          </p>

          <p>
            I'm fascinated by the space where physical hardware meets
            high-performance software. I like having my hands in a little bit of
            everything—whether that's writing low-level C++ for embedded
            systems, automating lab robots with Python, or building full-stack
            web apps with Next.js and TypeScript.
          </p>

          <p>
            When I'm not in an IDE, you can usually find me tinkering with FPGA
            designs, exploring browser security internals, or just spending time
            by the ocean.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
