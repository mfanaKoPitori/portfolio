import Image from "next/image";
import React from "react";

interface AboutProps {
  name: string;
}

const Presentation: React.FC<AboutProps> = ({ name }) => {
  return (
    <>
      <section className="flex flex-col w-6/11 space-y-2 text-xs">
        <section className="flex flex-col lg:flex-row justify-between bg-white/80 rounded-md border border-gray-200 py-4 px-6">
          <section>
            <p>Raymond Mawina is an patient, open-minded, honest, hardworking individual.</p>
            <p>He likes seeking out problems and solving them.</p>
            <p>He is a bit shy, but with time he warms to you and starts communicating with confidence.</p>
            <p>He is passionable about tech, particularly software development.</p>
          </section>

          <section className="flex space-x-3">
            <p>Email</p>
            <p>Linkedin</p>
            <p>Phone Number</p>
            <p>Github</p>
          </section>
        </section>

        <section className="bg-white/80 rounded-md border border-gray-200 py-4 px-6">
          <h1>Educational History</h1>
          <section>
            <section>
                <h1>Mathematics and Science | 2005 - 2016 | Primary and High School | Completed</h1>
            </section>

            <section>
                <h1>Bachelors in Information Technology |  2018 - 2020 | University of Pretoria |  Incomplete</h1>
            </section>

            <section>
                <h1>National Certificate In Information Technology | 2022 - 2023 | Umuzi Photo Club | Completed</h1>
            </section>

            <section>
                <h1>Bsc in Informatics | 2026 - Present | University of South Africa | In program</h1>
            </section>
          </section>
        </section>

        <section className="bg-white/80 rounded-md border border-gray-200 py-4 px-6">
          <h1>Work Experience</h1>
          <section>
            <section>
                <h1>Field Worker | 2022 - 2022 | Statistics SA</h1>
            </section>
       
            <section>
                <h1>Software Developer Apprentice | 2022 - 2023 | Umuzi Photo Club</h1>
            </section>

            <section>
                <h1>Software Developer Intern | 2023 - 2023 | Umuzi Photo Club</h1>
            </section>

            <section>
                <h1>Junior Software Developer | 2023 - 2024 | Umuzi Photo Club</h1>
            </section>

            <section>
                <h1>Intermediate Software Developer | 2024 - Present | Umbono Cloud Services</h1>
            </section>
          </section>
        </section>


        <section className="bg-white/80 rounded-md border border-gray-200 py-4 px-6">
          <h1>Hobbies</h1>
          <section>
            <p>Professional wrestling Fanatic | WWE | AEW | NJPW</p>
            <p>Morning and evening jogging.</p>
            <p>Stretching and light cardio exercises.</p>
            <p>Baking bread, cookies and cakes.</p>
            <p>Moving picture | Asian Films | Anime </p>
          </section>
        </section>

        <section className="bg-white/80 rounded-md border border-gray-200 py-4 px-6">
          <h1>Skills</h1>
          <section>
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
