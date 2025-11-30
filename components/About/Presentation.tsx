import Image from "next/image";
import React from "react";

interface AboutProps {
  name: string;
}

const Presentation: React.FC<AboutProps> = ({ name }) => {
  return (
    <>
      <section className="flex flex-col w-6/11 space-y-2 text-xs">
        <section className="flex flex-col lg:flex-row justify-between bg-white/80 rounded-md border border-gray-200 py-3 px-4">
          <section className="flex flex-col px-2 space-y-2">
            <p>Raymond Mawina is an patient, open-minded, honest, hardworking individual.</p>
            <p>He likes seeking out problems and solving them.</p>
            <p>He is a bit shy, but with time he warms to you and starts communicating with confidence.</p>
            <p>He is passionable about tech, particularly software development.</p>
          </section>

          <section className="flex flex-col px-2 space-x-2 w-1/4 space-y-2">
            <section className="flex flex-col space-x-2">
              <p>rmawina@gmail.com</p>
              <p>0715666626</p>
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
          <section className="flex flex-col px-2 my-2 space-y-2">
            <section className="flex flex-col-4 space-x-2 w-7/8">
                <p className="w-2/5">Mathematics and Science</p>
                <p className="w-1/5">2005 - 2016</p>
                <p className="w-1/5">Primary and High School</p>
                <p className="w-1/5">Completed</p>
            </section>

            <section className="flex flex-col-4 space-x-2 w-7/8">
                <p className="w-2/5">Bachelors in Information Technology</p>
                <p className="w-1/5">2018 - 2020 </p>
                <p className="w-1/5">University of Pretoria </p>
                <p className="w-1/5">Incompleted</p>
            </section>

            <section className="flex flex-col-4 space-x-2 w-7/8">
                <p className="w-2/5">National Certificate In Information Technology</p>
                <p className="w-1/5">2022 - 2023</p>
                <p className="w-1/5">Umuzi Photo Club</p>
                <p className="w-1/5">Completed</p>
            </section>
          </section>
        </section>

        <section className="bg-white/80 rounded-md border border-gray-200 py-3 px-6">
          <h1>Work Experience</h1>
          <section className="flex flex-col px-2 my-2 space-y-2">
            <section className="flex flex-col-3 space-x-2 w-7/8">
                <p className="w-2/5">Field Worker </p>
                <p className="w-1/5">2022 - 2022</p>
                <p className="w-1/5">Statistics SA</p>
                <p className="w-1/5"></p>
            </section>

            <section className="flex flex-col-3 space-x-2 w-7/8">
                <p className="w-2/5">Software Developer Apprentice</p>
                <p className="w-1/5">2022 - 2023 </p>
                <p className="w-1/5">Umuzi Photo Club</p>
                <p className="w-1/5"></p>
            </section>

            <section className="flex flex-col-3 space-x-2 w-7/8">
                <p className="w-2/5">Software Developer Intern</p>
                <p className="w-1/5">2023 - 2023</p>
                <p className="w-1/5">Umuzi Photo Club</p>
                <p className="w-1/5"></p>
            </section>

            <section className="flex flex-col-3 space-x-2 w-7/8">
                <p className="w-2/5">Junior Software Developer</p>
                <p className="w-1/5">2023 - 2024</p>
                <p className="w-1/5">Umuzi Photo Club</p>
                <p className="w-1/5"></p>

            </section>

            <section className="flex flex-col-3 space-x-2 w-7/8">
                <p className="w-2/5">Intermediate Software Developer</p>
                <p className="w-1/5">2024 - Present</p>
                <p className="w-1/5">Umbono Cloud Services</p>
                <p className="w-1/5"></p>
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
            <p>Frontend: HTML, CSS, Tailwind, React</p>
            <p>Backend: Javascript, Typescript, Express, Python, Flask, FastAPI, Django REST</p>
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
