import Image from "next/image";

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
      <div className="p-4 bg-black/80 text-white w-80 rounded-2xl ">
        <div className="flex justify-between items-center">
          <div className="text-4xl">{projectTitle}</div>
          <Image
            src={projectLogo}
            width={52}
            height={52}
            alt="Picture of barnacle logo"
          />
        </div>
        <hr className="my-3 border-t border-gray-300" />
        <div className="text-xl">{projectDescription}</div>
      </div>
    </a>
  );
};
