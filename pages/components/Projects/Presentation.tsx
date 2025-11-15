import Image from "next/image";
import React from "react";

interface ProjectProps {
  name: string;
  tech: string;
  description: string;
  link: string;
}

interface ProjectInfoProps {
  projectList: ProjectProps[];
}

const Presentation: React.FC<ProjectInfoProps> = ({ projectList }) => {
  return (
    <>
      <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-1">
        {projectList?.map((project, idx) => (
          <section
            key={idx}
            className="flex flex-col bg-white/80 rounded-md border border-gray-200 p-2 shadow-sm hover:shadow-md transition-shadow duration-200 w-full min-h-[10rem]"
          >
            <h3 className="font-semibold text-gray-800 text-lg">
              {project.name}
            </h3>
            <p className="mt-2 text-gray-700 text-sm">{project.description}</p>
            <p className="text-gray-500 text-xs italic mt-1">{project.tech}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-amber-500 text-sm hover:underline"
            >
              View Project
            </a>
          </section>
        ))}
      </section>
    </>
  );
};

export default Presentation;
