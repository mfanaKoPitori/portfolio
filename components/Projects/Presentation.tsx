import Image from "next/image";
import React from "react";

interface ProjectProps {
  name: string;
  pseudo: string;
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
      <section className="grid grid-cols-1 h-fit gap-1 space-y-1">
        {projectList?.map((project, idx) => (
          <section
            key={idx}
            className="flex flex-col h-fit justify-between bg-white/80 rounded-md border border-gray-200 py-4 px-6 shadow-sm hover:shadow-md transition-shadow duration-200 w-full min-h-[8rem]"
          >
            <section>
              <h3 className="font-semibold text-gray-800 text-md">
                {project.name}
              </h3>
              
              <section className="flex justify-between py-2">
                <section className="w-3/4 md:w-7/11">
                  <p className="text-gray-700 text-xs text-wrap w-7/11 mt-2">{project.description}</p>
                  <p className="text-gray-500 text-xs italic text-wrap w-7/11 mt-2">{project.tech}</p>
                </section>

                <section className="w-1/4 md:w-8/11">
                  <Image
                      src={`/images/projects/${project.pseudo}/${project.pseudo}_1.jpg`}
                      alt={`Headshot`}
                      className="md:hidden rounded-sm border-2  h-[60px] border-amber-400/60 backdrop-blur-md shadow-lg pointer-events-none"
                      width={60}
                      height={60}
                      draggable={false}
                  />

                  <section className="hidden md:flex md:space-x-4">
                    <Image
                      src={`/images/projects/${project.pseudo}/${project.pseudo}_1.jpg`}
                      alt={`project image 2`}
                      className="rounded-sm border-2  h-[60px] border-amber-400/60 backdrop-blur-md shadow-lg pointer-events-none"
                      width={60}
                      height={60}
                      draggable={false}
                    />

                    <Image
                      src={`/images/projects/${project.pseudo}/${project.pseudo}_2.jpg`}
                      alt={`Headshot`}
                      className="rounded-sm border-2  h-[60px] border-amber-400/60 backdrop-blur-md shadow-lg pointer-events-none"
                      width={60}
                      height={60}
                      draggable={false}
                    />

                    <Image
                      src={`/images/projects/${project.pseudo}/${project.pseudo}_3.jpg`}
                      alt={`Headshot`}
                      className="rounded-sm border-2  h-[60px] border-amber-400/60 backdrop-blur-md shadow-lg pointer-events-none"
                      width={60}
                      height={60}
                      draggable={false}
                    />

                    <Image
                      src={`/images/projects/${project.pseudo}/${project.pseudo}_4.jpg`}
                      alt={`Headshot`}
                      className="rounded-sm border-2  h-[60px] border-amber-400/60 backdrop-blur-md shadow-lg pointer-events-none"
                      width={60}
                      height={60}
                      draggable={false}
                    />
                  </section>
                </section>
              </section>
            </section>

            <section className="flex flex-wrap space-x-3">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-amber-500 text-md hover:underline"
              >
                Live Project
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-amber-500 text-md hover:underline"
              >
                Github Repo
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-amber-500 text-md hover:underline"
              >
                Documentation
              </a>
            </section>
          </section>
        ))}
      </section>
    </>
  );
};

export default Presentation;
