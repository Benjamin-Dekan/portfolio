import Image from "next/image";
import { Cormorant, Inter } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

export const ProjectCard = ({
  projectTitle,
  projectDescription,
  projectLink,
  projectLogo,
}: {
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  projectLogo: string;
}) => {
  return (
    <a href={projectLink} target="_blank" rel="noopener noreferrer">
      <div className="p-4 bg-black/80 text-white w-80 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1.5">
        <div className="flex justify-between items-center">
          <div className={`${cormorant.className} text-4xl`}>
            {projectTitle}
          </div>
          <Image
            src={projectLogo}
            width={46}
            height={46}
            alt="Picture of barnacle logo"
          />
        </div>
        <hr className="my-3 border-t border-gray-300" />
        <div
          className={`${inter.className} text-lg `}
          style={{ fontWeight: 300 }}
        >
          {projectDescription}
        </div>
      </div>
    </a>
  );
};
