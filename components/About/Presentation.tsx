import React from "react";

import Header from "../Header/Index";



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

interface WorkExperienceProp {
  role: string;
  company_name: string;
  period: string;
}

interface techSkillProp {
  name: string;
}

interface techSkillCategoryProp {
  category: string;
  skills: techSkillProp[];
}


interface AboutProps {
  educationInfo: EducationInstitutionProp[];
  workExperienceInfo: WorkExperienceProp[];
  techSkillsInfo: techSkillCategoryProp[];
}

const Presentation: React.FC<AboutProps> = ({ educationInfo, workExperienceInfo, techSkillsInfo }) => {
  return (
    <>
      <section className="flex flex-col w-full p-2 lg:w-8/11 xl:w-6/11 space-y-4 text-xs text-gray-600  bg-gray-100">
        <Header />

        <section className="rounded-md border border-gray-300/20 py-3 px-6 text-gray-600 bg-gray-100/10">
          <section className="p-2 space-y-1 text-wrap text-center w-full sm:w-3/5 justify-self-center">
            <p>He is a backend developer with 4 years of work experience. He writes most of his code in node.js and python. He is huge advocate for clean code and test-driven development. He enjoys solving katas in his spare time.  </p>
          </section>
        </section>

        <section className="rounded-md border border-gray-300/20 py-3 px-6 text-gray-500/90 bg-gray-100/10">
          <h1 className="font-mono">Work Experience</h1>
          <section className="columns-1 md:columns-2 my-2 space-y-2 w-full md:gap-2">
            {workExperienceInfo.map((workExperience) => 
              (<section className="bg-gray-200/10 border border-gray-400/20 p-2 rounded-md columns-1 sm:columns-2 lg:columns-2 w-full grid sm:flex sm:justify-between">
                  <section className="w-full sm:w-2/3 lg:w-3/4">
                    <p className="text-gray-600">{workExperience.role}</p>
                    <p>{workExperience.company_name}</p>
                  </section>

                  <section className="w-full sm:w-1/3 lg:w-1/3 grid sm:justify-end">
                      <p>{workExperience.period}</p>
                  </section>
              </section>)
            )}
          </section>
        </section>

        <section className="rounded-md border border-gray-300/20 py-3 px-6 text-gray-500/90 bg-gray-100/10">
          <h1 className="font-mono">Technical Skills</h1>
          <section className="grid md:grid-cols-2 my-2 space-y-2">
            {techSkillsInfo.map((techSkillCategory, index) => (
              <section key={index} className="grid space-y-1">
                <p className="w-fit text-gray-600">{techSkillCategory.category}</p>
                <section className="flex flex-wrap gap-x-1 gap-y-1">
                  {techSkillCategory.skills.map((skill, index) => (
                    <p key={index} className="bg-gray-300/20 border-1 border-gray-300/60 rounded-full px-1 py-0.5">{skill.name}</p>  
                  ))}
                </section>
              </section>    
            ))}
          </section>
        </section>

        <section className="rounded-md border border-gray-300/20 py-3 px-6 text-gray-500/90 bg-gray-100/10">
          <h1 className="font-mono">Projects</h1>
          <section className="columns-1 flex flex-col md:columns-2 md:flex md:flex-row gap-x-2 py-2 gap-y-2">
            <section className="rounded-md border border-gray-300/20 p-2 text-gray-500/90 bg-gray-100/10 w-full md:w-1/2">
              <h1 className="">Project #1</h1>
              <section className="flex flex-col gap-y-2 text-gray-600">
                <p>Frontend: HTML, CSS, Tailwind,  Javascript, Typescript, React</p>
                <p>Backend: Node.js, Express, Python, Flask, FastAPI, Django REST</p>
                <p>Databases: MySQL, Postgres, MongoDB, redis</p>
                <p>Messaging Queues: RabbitMq, Kafka</p>
                <p>Cloud: AWS, GCP</p>
              </section>
            </section>

            <section className="rounded-md border border-gray-300/20 p-2 text-gray-500/90 bg-gray-100/10 w-full md:w-1/2">
              <h1 className="">Project #2</h1>
              <section className="flex flex-col gap-y-2 text-gray-600">
                <p>Frontend: HTML, CSS, Tailwind,  Javascript, Typescript, React</p>
                <p>Backend: Node.js, Express, Python, Flask, FastAPI, Django REST</p>
                <p>Databases: MySQL, Postgres, MongoDB, redis</p>
                <p>Messaging Queues: RabbitMq, Kafka</p>
                <p>Cloud: AWS, GCP</p>
              </section>
            </section>
          </section>
          <section className="flex justify-end space-x-4">
            <button>Prev</button>
            <button>Next</button>
          </section>
        </section>
      </section>
      
    </>
  );
};

export default Presentation;
