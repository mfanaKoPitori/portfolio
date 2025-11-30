import Image from "next/image";
import React from "react";

interface AboutProps {
  name: string;
}

const Presentation: React.FC<AboutProps> = ({ name }) => {
  return (
    <>
      <section className="flex flex-col w-full lg:w-6/11 space-y-2 text-xs text-gray-600">
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
          <section className="columns-1 lg:columns-2 px-2 my-2 space-y-2 w-full lg:gap-2">
            <section className="bg-gray-400/10 p-2 rounded-md columns-2 lg:columns-2 w-full flex justify-between">
                <section>
                  <p className="font-semibold">Mathematics and Science</p>
                  <p>Primary School</p>
                </section>

                <section className="w-1/3 lg:w-1/4 grid justify-end">
                    <p className="bg-green-400/10 px-1 w-fit h-fit rounded-md text-green-600">Completed</p>
                    <p className="px-1">2005 - 2011</p>
                </section>
            </section>

            <section className="bg-gray-400/10 p-2 rounded-md columns-2 lg:columns-2 w-full flex justify-between">
                <section>
                  <p className="font-semibold">Mathematics and Science</p>
                  <p>High School</p>
                </section>

                <section className="w-1/3  lg:w-1/4 grid justify-end">
                    <p className="bg-green-400/10 px-1 w-fit h-fit rounded-md text-green-600">Completed</p>
                    <p className="px-1">2012 - 2016</p>   
                </section>
            </section>

            <section className="bg-gray-400/10 p-2 rounded-md columns-2 lg:columns-2 w-full flex justify-between">
                <section>
                  <p className="font-semibold">Bachelors in Information Technology</p>
                  <p>University of Pretoria</p>
                </section>

                <section className="w-1/3 lg:w-1/4 grid justify-end">
                    <p className="bg-red-400/10 px-1 w-fit h-fit rounded-md text-red-600">Incomplete</p>
                    <p className="px-1">2018 - 2020</p>
                </section>
            </section>

            <section className="bg-gray-400/10 p-2 rounded-md columns-2 lg:columns-2 w-full flex justify-between">
                <section>
                  <p className="font-semibold">NCIT In Information Technology</p>
                  <p>Umuzi Photo Club</p>
               
                </section>

                <section className="w-1/3 lg:w-1/4 grid justify-end">
                    <p className="bg-green-400/10 px-1 w-fit h-fit rounded-md text-green-600">Completed</p>
                    <p className="px-1">2022 - 2023</p>
                </section>
            </section>
          </section>
        </section>

        <section className="bg-white/80 rounded-md border border-gray-200 py-3 px-6 text-gray-600">
          <h1 className="font-bold">Work Experience</h1>
          <section className="columns-1 lg:columns-2 px-2 my-2 space-y-2 w-full lg:gap-2">
            <section className="bg-gray-400/10 p-2 rounded-md columns-2 lg:columns-2 w-full flex justify-between">
                <section className="w-full lg:w-3/4">
                  <p className="font-semibold">Software Developer Apprentice</p>
                  <p>Umuzi Photo Club</p>
                </section>

                <section className="w-full lg:w-1/4 grid justify-end">
                    <p>2022 - 2023</p>
                </section>
            </section>

            <section className="bg-gray-400/10 p-2 rounded-md columns-2 lg:columns-2 w-full flex justify-between">
                <section className="w-full lg:w-3/4">
                  <p className="font-semibold">Software Developer Intern</p>
                  <p>Umuzi Photo Club</p>
                </section>

                <section className="w-full lg:w-1/4 grid justify-end">
                    <p>2023 - 2023</p>
                </section>
            </section>

            <section className="bg-gray-400/10 p-2 rounded-md columns-2 lg:columns-2 w-full flex justify-between">
                <section className="w-full lg:w-3/4">
                  <p className="font-semibold">Junior Software Developer</p>
                  <p>Umuzi Photo Club</p>
                </section>

                <section className="w-full lg:w-1/4 grid justify-end">
                    <p>2023 - 2024</p>
                </section>
            </section>

            <section className="bg-gray-400/10 p-2 rounded-md columns-2 lg:columns-2 w-full flex justify-between">
                <section className="w-full lg:w-3/4">
                  <p className="font-semibold">Intermediate Software Developer</p>
                  <p>Umbono Cloud Services</p>
                </section>

                <section className="w-full lg:w-1/4 grid justify-end">
                    <p>2024 - Present</p>
                </section>
            </section>
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
