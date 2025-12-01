import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

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
      <section className="flex flex-col w-full lg:w-10/11 xl:w-6/11 space-y-2 text-xs text-gray-600">
        <section className="grid justify-center bg-white/80 rounded-md border border-gray-200 py-3 px-4">
          <section className="p-2 space-y-1 text-wrap text-center w-full lg:w-2/5 justify-self-center">
            <p>He is a patient, open-minded, honest, and hardworking individual who enjoys seeking out problems and solving them. Though a bit shy at first, he warms up over time and communicates with confidence. He is passionate about technology, especially software development.</p>
          </section>
          
          <section className="grid sm:flex justify-self-center space-x-2 lg:space-x-8 w-fit p-2">
            <Link
              href="mailto:rmawina@gmail.com"
              className="flex gap-0.5 items-center text-green-500 text-md hover:underline"
            >
              <Mail size={12} />
              rmawina@gmail.com
            </Link>

            <Link
              href="https://www.linkedin.com/in/raymond-mawina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-0.5 items-center text-green-500 text-md hover:underline"
            >
              <Linkedin size={12} />
              linkedin.com/in/raymond-mawina
            </Link>

            <Link
              href="https://github.com/ramoniee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-0.5 items-center text-green-500 text-md hover:underline"
            >
              <Github size={12} />
              github.com/ramoniee
            </Link>
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
