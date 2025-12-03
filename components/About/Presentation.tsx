import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

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
      <section className="flex flex-col w-10/11 lg:w-8/11 xl:w-6/11 space-y-2 text-xs text-gray-600 p-2">
        <section className="rounded-md border border-rose-300/20 py-3 px-6 text-gray-600 bg-rose-100/10">
          <section className="p-2 space-y-1 text-wrap text-center w-full lg:w-3/5 justify-self-center">
            <p>He is a backend developer with 4 years of work experience. He writes most of his code in node.js and python. He is huge advocate for clean code and test-driven development. He enjoys solving katas in his spare time.  </p>
          </section>
          
          <section className="grid sm:flex justify-self-center space-x-2 lg:space-x-8 w-full p-2 space-y-2 lg:space-y-0">
            <Link
              href="mailto:rmawina@gmail.com"
              className="flex flex-col items-center text-md hover:underline w-full lg:w-1/3"
            >
              <Mail size={18} color="pink"/>
              rmawina@gmail.com
            </Link>

            <Link
              href="https://www.linkedin.com/in/raymond-mawina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-md hover:underline w-full lg:w-1/3"
            >
              <Linkedin size={18} color="pink"/>
              <p>linkedin.com/in/raymond-mawina</p>
            </Link>

            <Link
              href="https://github.com/ramoniee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-md hover:underline w-full lg:w-1/3"
            >
              <Github size={18} color="pink"/>
              github.com/ramoniee
            </Link>
          </section>
        </section>

        <section className="rounded-md border border-rose-300/20 py-3 px-6 text-gray-500/90 bg-rose-100/10">
          <h1 className="font-mono">Work Experience</h1>
          <section className="columns-1 md:columns-2 px-2 my-2 space-y-2 w-full md:gap-2">
            {workExperienceInfo.map((workExperience) => 
              (<section className="bg-rose-200/10 border border-rose-400/20 p-2 rounded-md columns-1 sm:columns-2 lg:columns-2 w-full grid sm:flex sm:justify-between">
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

        <section className="rounded-md border border-rose-300/20 py-3 px-6 text-gray-500/90 bg-rose-100/10">
          <h1 className="font-mono">Educational History</h1>
          <section className="columns-1 md:columns-2 px-2 my-2 space-y-2 w-full md:gap-2">
            {educationInfo.map((education) => 
              (<section className="bg-rose-200/10 border border-rose-400/20 p-2 rounded-md columns-1 sm:columns-2 lg:columns-2 w-full grid sm:flex sm:justify-between">
                  <section className="w-full sm:w-2/3 lg:w-3/4">
                    <p className="text-gray-600">{education.course}</p>
                    <p>{education.school_name}</p>
                  </section>

                  <section className="w-full sm:w-1/3 lg:w-1/3 grid sm:justify-end">
                      <p className={`w-fit rounded-full ${education.completion_status ? "text-pink-400/80":""}`}>{education.completion_status ? "Completed": "Incomplete"}</p>
                      <p>{education.period}</p>
                  </section>
              </section>
              )
            )}
          </section>
        </section>



        <section className="rounded-md border border-rose-300/20 py-3 px-6 text-gray-500/90 bg-rose-100/10">
          <h1 className="font-mono">Technical Skills</h1>
          <section className="flex flex-col px-2 my-2 space-y-2 text-gray-600">
            <p>Frontend: HTML, CSS, Tailwind,  Javascript, Typescript, React</p>
            <p>Backend: Express, Python, Flask, FastAPI, Django REST</p>
            <p>Databases: MySQL, Postgres, MongoDB, Redis</p>
            <p>Messaging Queues: RabbitMq, Kafka</p>
            <p>Cloud: AWS, GCP</p>
          </section>
        </section>

        <section className="rounded-md border border-rose-300/20 py-3 px-6 text-gray-500/90 bg-rose-100/10">
          <h1 className="font-mono mb-3">Hobbies and Interests</h1>

          <section className="columns-1 md:columns-4 px-2 space-y-4">

            {/* --- Sports --- */}
            <section className="break-inside-avoid">
              <section className="mt-1 space-y-2 justify-self-center">
                <section className="flex items-start gap-4">
                  <section className="flex flex-col items-center justify-center">
                    <Formular1 className="w-10 h-10 md:w-15 md:h-15" />
                    <p>F1</p>
                  </section>

                  <section className="flex flex-col items-center justify-center">
                    <Wrestler className="w-8 h-10 md:w-8 md:h-15"/>
                    <p>Lucha</p>
                  </section>
                </section>
              </section>
            </section>

            {/* --- Exercise --- */}
            <section className="break-inside-avoid">
              <section className="mt-1 space-y-2 justify-self-center">
                <section className="flex items-start gap-4">
                  <section className="flex flex-col items-center justify-center">
                    <Jogging className="w-8 h-10 md:w-8 md:h-15" />
                    <p>Jogging</p>
                  </section>


                  <section className="flex flex-col items-center justify-center">
                    <Stretching className="w-8 h-10 md:w-8 md:h-15" />
                    <p>Stretching</p>
                  </section>
                </section>
              </section>
            </section>

            {/* --- Harmonic --- */}
            <section className="break-inside-avoid">
              <section className="mt-1 space-y-2 justify-self-center">
                <section className="flex items-start gap-4">
                  <section className="flex flex-col items-center justify-center">
                    <Cake className="w-8 h-10 md:w-8 md:h-15" />
                    <p>Cake</p>
                  </section>

                  <section className="flex flex-col items-center justify-center">
                    <Tea className="w-8 h-10 md:w-8 md:h-15" />
                    <p>Tea</p>
                  </section>
                  
                  
                  
                </section>
              </section>
            </section>

            {/* --- Entertainment --- */}
            <section className="break-inside-avoid">
              <section className="mt-1 space-y-1 justify-self-center">
                <section className="flex items-start gap-4">
                  <section className="flex flex-col items-center justify-center">
                    <SuperHero className="w-8 h-10 md:w-8 md:h-15" />
                    <p>Heroes</p>
                  </section>

                  <section className="flex flex-col items-center justify-center">
                    <Horror className="w-8 h-10 md:w-8 md:h-15" />
                    <p>Horror</p>
                  </section>
                  
                  <section className="flex flex-col items-center justify-center">
                    <Naruto className="w-8 h-10 md:w-8 md:h-15" />
                    <p>Manga</p>
                  </section>
                </section>
              </section>
            </section>

          </section>
        </section>



      </section>
      
    </>
  );
};

export default Presentation;
