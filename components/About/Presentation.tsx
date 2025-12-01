import Image from "next/image";
import React from "react";

interface EducationInstitutionProp {
  school_name: string;
  course: string;
  period: string;
  completion_status: boolean;
}

interface WorkExperienceProp {
  role: string;
  company_name: string;
  period: string;
}

interface AboutProps {
  educationInfo: EducationInstitutionProp[];
  workExperienceInfo: WorkExperienceProp[];
}

const Presentation: React.FC<AboutProps> = ({ educationInfo, workExperienceInfo }) => {
  return (
    <>
      <section className="flex flex-col w-full md:w-full lg:7/11 xl:w-8/11 space-y-2 text-xs text-gray-600">
        <section className="flex flex-col lg:flex-row justify-between bg-white/80 rounded-md border border-gray-200 py-3 px-4 space-y-4">
          <section className="flex flex-col px-2 space-y-1">
            <p>Raymond Mawina is an patient, open-minded, honest, hardworking individual.</p>
            <p>He likes seeking out problems and solving them.</p>
            <p>He is a bit shy, but with time he warms to you and starts communicating with confidence.</p>
            <p>He is passionable about tech, particularly software development.</p>
          </section>

          <section className="flex flex-col px-2 space-x-2 w-1/4 space-y-4">
            <section className="flex flex-col space-x-1">
              <p>0715666626</p>
              <p>rmawina@gmail.com</p>
            </section>

            <section className="flex flex-row justify-between space-x-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-amber-500 text-md hover:underline"
              >
                Linkedin
              </a>

              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-amber-500 text-md hover:underline"
              >
                Github
              </a>
            
            </section>
          </section>
        </section>

        <section className="bg-white/80 rounded-md border border-gray-200 py-3 px-6 text-gray-600">
          <h1 className="font-bold">Educational History</h1>
          <section className="columns-1 md:columns-2 px-2 my-2 space-y-2 w-full md:gap-2">
            {educationInfo.map((education) => 
              (<section className="bg-gray-400/10 p-2 rounded-md columns-1 sm:columns-2 lg:columns-2 w-full grid sm:flex sm:justify-between">
                  <section className="w-full sm:w-2/3 lg:w-3/4">
                    <p className="font-semibold">{education.course}</p>
                    <p>{education.school_name}</p>
                  </section>

                  <section className="w-full sm:w-1/3 lg:w-1/4 grid sm:justify-end">
                      <p className={`w-fit px-2 rounded-full ${education.completion_status ? "bg-green-700/10 text-green-600":"bg-red-700/10 text-red-600"}`}>{education.completion_status ? "Completed": "Incompleted"}</p>
                      <p className="px-2">{education.period}</p>
                  </section>
              </section>
              )
            )}
          </section>
        </section>

        <section className="bg-white/80 rounded-md border border-gray-200 py-3 px-6 text-gray-600">
          <h1 className="font-bold">Work Experience</h1>
          <section className="columns-1 md:columns-2 px-2 my-2 space-y-2 w-full md:gap-2">
            {workExperienceInfo.map((workExperience) => 
              (<section className="bg-gray-400/10 p-2 rounded-md columns-1 sm:columns-2 lg:columns-2 w-full grid sm:flex sm:justify-between">
                  <section className="w-full sm:w-2/3 lg:w-3/4">
                    <p className="font-semibold">{workExperience.role}</p>
                    <p>{workExperience.company_name}</p>
                  </section>

                  <section className="w-full sm:w-1/3 lg:w-1/4 grid sm:justify-end">
                      <p className="px-2">{workExperience.period}</p>
                  </section>
              </section>)
            )}
          </section>
        </section>


        <section className="bg-white/80 rounded-md border border-gray-200 py-3 px-6 text-gray-600">
          <h1 className="font-bold">Hobbies</h1>
          <section className="flex flex-col px-2 my-2 space-y-2">
            <p>Sports: Professional wrestling | F1 Racing</p>
            <p>Exercise: Morning and evening jogging | Stretching and light cardio exercises.</p>
            <p>Harmonic: Baking bread, cookies and cakes | Preparing and drink tea. </p>
            <p>Entertainment: Superhero Films | Horror Films | Asian Films | Anime | Manga. </p>
          </section>
        </section>

        <section className="bg-white/80 rounded-md border border-gray-200 py-3 px-6 text-gray-600">
          <h1 className="font-bold">Skills</h1>
          <section className="flex flex-col px-2 my-2 space-y-2">
            <p>Frontend: HTML, CSS, Tailwind,  Javascript, Typescript, React</p>
            <p>Backend: Express, Python, Flask, FastAPI, Django REST</p>
            <p>Databases: MySQL, Postgres, MongoDB, Redis</p>
            <p>Messaging Queues: RabbitMq, Kafka</p>
            <p>Cloud: AWS, GCP</p>
          </section>
        </section>
      </section>
      
    </>
  );
};

export default Presentation;
