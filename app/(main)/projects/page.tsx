import ProjectsBackground from "@/app/components/ui/ProjectsBackground";
import { ProjectCard } from "@/app/components/ui/ProjectCard";

const ProjectsPage = () => {
  return (
    <>
      <div className="relative flex flex-col w-full h-full">
        <ProjectsBackground />
      </div>

      <div className="max-w-[1600px] mx-auto flex gap-4 m-8">
        <ProjectCard
          projectLink="https://barnacle-one.vercel.app/"
          projectDescription="Barnacle is a movie discovery app that lets you search for movies and filter them by the streaming services you're actually subscribed to."
          projectTitle="Barnacle"
          projectLogo="/barnacle.svg"
        />
      </div>
    </>
  );
};

export default ProjectsPage;
