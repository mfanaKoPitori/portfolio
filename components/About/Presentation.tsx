import Link from "next/link";
import Image from "next/image";
import React from "react";

import Wrestler from "@/icons/wrestling.svg";
import Formular1 from "@/icons/formula1.svg";
import Jogging from "@/icons/jogging.svg";
import Stretching from "@/icons/stretching.svg";

import Bread from "@/icons/bread.svg";
import Cake from "@/icons/cake.svg";
import Tea from "@/icons/tea.svg";

import SuperHero from "@/icons/superhero.svg";
import Horror from "@/icons/horror.svg";
import Naruto from "@/icons/naruto.svg";
import DragonBall from "@/icons/dragon_ball.svg";



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
      <section className="flex flex-col w-10/11 lg:w-8/11 xl:w-6/11 space-y-4 text-xs text-gray-600 p-2">
        <section className="rounded-md border border-gray-300/20 py-3 px-6 text-gray-600 bg-gray-100/10">
          <section className="p-2 space-y-1 text-wrap text-center w-full lg:w-3/5 justify-self-center">
            <p>He is a backend developer with 4 years of work experience. He writes most of his code in node.js and python. He is huge advocate for clean code and test-driven development. He enjoys solving katas in his spare time.  </p>
          </section>
        </section>

        <section className="rounded-md border border-gray-300/20 py-3 px-6 text-gray-500/90 bg-gray-100/10">
          <h1 className="font-mono">Work Experience</h1>
          <section className="columns-1 md:columns-2 px-2 my-2 space-y-2 w-full md:gap-2">
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
          <section className="flex flex-col px-2 my-2 space-y-2 text-gray-600">
            <p>Frontend: HTML, CSS, Tailwind,  Javascript, Typescript, React</p>
            <p>Backend: Node.js, Express, Python, Flask, FastAPI, Django REST</p>
            <p>Databases: MySQL, Postgres, MongoDB, redis</p>
            <p>Messaging Queues: RabbitMq, Kafka</p>
            <p>Cloud: AWS, GCP</p>
          </section>
        </section>

        <section className="rounded-md border border-gray-300/20 py-3 px-6 text-gray-500/90 bg-gray-100/10">
          <h1 className="font-mono">Educational History</h1>
          <section className="columns-1 md:columns-2 px-2 my-2 space-y-2 w-full md:gap-2">
            {educationInfo.map((education) => 
              (<section className="bg-gray-200/10 border border-gray-400/20 p-2 rounded-md columns-1 sm:columns-2 lg:columns-2 w-full grid sm:flex sm:justify-between">
                  <section className="w-full sm:w-2/3 lg:w-3/4">
                    <p className="text-gray-600">{education.course}</p>
                    <p>{education.school_name}</p>
                  </section>

                  <section className="w-full sm:w-1/3 lg:w-1/3 grid sm:justify-end">
                      <p>{education.period}</p>
                      <p className={`w-fit rounded-full ${education.completion_status ? "text-gray-400/80":""}`}>{education.completion_status ? "Completed": "Incomplete"}</p>
                  </section>
              </section>
              )
            )}
          </section>
        </section>

        <section className="rounded-md border border-gray-300/20 py-3 px-6 text-gray-500/90 bg-gray-100/10">
          <h1 className="font-mono">Projects</h1>
          <section className="grid space-x-2 space-y-2 py-2">
            <section className="rounded-md border border-gray-300/20 py-3 px-6 text-gray-500/90 bg-gray-100/10">
              <h1 className="font-mono">Project #1</h1>
              <section className="flex flex-col space-y-2 text-gray-600">
                <p>Frontend: HTML, CSS, Tailwind,  Javascript, Typescript, React</p>
                <p>Backend: Node.js, Express, Python, Flask, FastAPI, Django REST</p>
                <p>Databases: MySQL, Postgres, MongoDB, redis</p>
                <p>Messaging Queues: RabbitMq, Kafka</p>
                <p>Cloud: AWS, GCP</p>
              </section>
            </section>

            <section className="rounded-md border border-gray-300/20 py-3 px-6 text-gray-500/90 bg-gray-100/10">
              <h1 className="font-mono">Project #2</h1>
              <section className="flex flex-col space-y-2 text-gray-600">
                <p>Frontend: HTML, CSS, Tailwind,  Javascript, Typescript, React</p>
                <p>Backend: Node.js, Express, Python, Flask, FastAPI, Django REST</p>
                <p>Databases: MySQL, Postgres, MongoDB, redis</p>
                <p>Messaging Queues: RabbitMq, Kafka</p>
                <p>Cloud: AWS, GCP</p>
              </section>
            </section>

            <section className="rounded-md border border-gray-300/20 py-3 px-6 text-gray-500/90 bg-gray-100/10">
              <h1 className="font-mono">Project #3</h1>
              <section className="flex flex-col space-y-2 text-gray-600">
                <p>Frontend: HTML, CSS, Tailwind,  Javascript, Typescript, React</p>
                <p>Backend: Node.js, Express, Python, Flask, FastAPI, Django REST</p>
                <p>Databases: MySQL, Postgres, MongoDB, redis</p>
                <p>Messaging Queues: RabbitMq, Kafka</p>
                <p>Cloud: AWS, GCP</p>
              </section>
            </section>
          </section>
        </section>
      </section>
      
    </>
  );
};

export default Presentation;
