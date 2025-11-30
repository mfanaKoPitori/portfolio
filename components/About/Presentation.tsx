import Image from "next/image";
import React from "react";

interface AboutProps {
  name: string;
}

const Presentation: React.FC<AboutProps> = ({ name }) => {
  return (
    <>
      <section className="flex flex-col w-full lg:w-6/11 space-y-2 text-xs">
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

        <section className="bg-white/80 rounded-md border border-gray-200 py-3 px-6">
          <h1>Educational History</h1>
          <section className="columns-1 lg:columns-2 px-2 my-2 space-y-2 w-full lg:gap-20">
            <section className="columns-2 lg:columns-2 w-full lg:flex lg:justify-between">
                <section>
                  <p>Mathematics and Science</p>
                  <p>Primary School</p>
                </section>

                <section className="w-full lg:w-1/4 grid justify-end">
                    <p>2005 - 2011</p>
                    <p>Completed</p>
                </section>
            </section>

            <section className="columns-2 lg:columns-2 w-full lg:flex lg:justify-between">
                <section>
                  <p>Mathematics and Science</p>
                  <p>High School</p>
                </section>

                <section className="w-full lg:w-1/4 grid justify-end">
                    <p>2012 - 2016</p>
                    <p>Completed</p>
                </section>
            </section>

            <section className="columns-2 lg:columns-2 w-full lg:flex lg:justify-between">
                <section>
                  <p>Bachelors in Information Technology</p>
                  <p>University of Pretoria</p>
                </section>

                <section className="w-full lg:w-1/4 grid justify-end">
                    <p>2018 - 2020</p>
                    <p>Incomplete</p>
                </section>
            </section>

            <section className="columns-2 lg:columns-2 w-full lg:flex lg:justify-between">
                <section>
                  <p>National Certificate In Information Technology</p>
                  <p>Umuzi Photo Club</p>
               
                </section>

                <section className="w-full lg:w-1/4 grid justify-end">
                    <p>2022 - 2023</p>
                    <p>Completed</p>
                </section>
            </section>
          </section>
        </section>

        <section className="bg-white/80 rounded-md border border-gray-200 py-3 px-6">
          <h1>Work Experience</h1>
          <section className="columns-1 lg:columns-2 px-2 my-2 space-y-2 w-full lg:gap-20">
            <section className="columns-2 lg:columns-2 w-full flex justify-between">
                <section className="w-full lg:w-3/4">
                  <p>Software Developer Apprentice</p>
                  <p>Umuzi Photo Club</p>
                </section>

                <section className="w-full lg:w-1/4 grid justify-end">
                    <p>2022 - 2023</p>
                </section>
            </section>

            <section className="columns-2 lg:columns-2 w-full flex justify-between">
                <section className="w-full lg:w-3/4">
                  <p>Software Developer Intern</p>
                  <p>Umuzi Photo Club</p>
                </section>

                <section className="w-full lg:w-1/4 grid justify-end">
                    <p>2023 - 2023</p>
                </section>
            </section>

            <section className="columns-2 lg:columns-2 w-full flex justify-between">
                <section className="w-full lg:w-3/4">
                  <p>Junior Software Developer</p>
                  <p>Umuzi Photo Club</p>
                </section>

                <section className="w-full lg:w-1/4 grid justify-end">
                    <p>2023 - 2024</p>
                </section>
            </section>

            <section className="columns-2 lg:columns-2 w-full flex justify-between">
                <section className="w-full lg:w-3/4">
                  <p>Intermediate Software Developer</p>
                  <p>Umbono Cloud Services</p>
                </section>

                <section className="w-full lg:w-1/4 grid justify-end">
                    <p>2024 - Present</p>
                </section>
            </section>
          </section>
        </section>


        <section className="bg-white/80 rounded-md border border-gray-200 py-3 px-6">
          <h1>Hobbies</h1>
          <section className="flex flex-col px-2 my-2 space-y-2">
            <p>Professional wrestling Fanatic | WWE | AEW | NJPW</p>
            <p>Morning and evening jogging.</p>
            <p>Stretching and light cardio exercises.</p>
            <p>Baking bread, cookies and cakes.</p>
            <p>Moving picture | Asian Films | Anime </p>
          </section>
        </section>

        <section className="bg-white/80 rounded-md border border-gray-200 py-3 px-6">
          <h1>Skills</h1>
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
