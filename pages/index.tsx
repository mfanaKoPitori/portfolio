import Image from "next/image";

import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Project from "./components/Project";

export default function Home() {
  return (
    <section className="grid space-y-2 py-4 bg-gray-400/40 lg:space-y-8 text-xs w-11/12 sm:w-3/4 md:w-3/5 2xl:w-3/6 mt-2 mb-2 justify-self-center rounded-md">
      <header className="grid justify-center justify-items-center space-y-4">
        <Image
          src="/headshot.jpg"
          width={120}
          height={120}
          alt="picture of raymond Mawina"
          className="rounded-full"
        />
        <h1 className="font-bold">Raymond Mawina</h1>
      </header>
      <main className="grid space-y-4 p-4">
        <section className="grid space-y-2">
          <h2 className="font-bold">Biography</h2>
          <section className="space-y-2 mx-4">
            <p>
              I am a junior software developer based in Pretoria, South Africa.
            </p>

            <p>
              I specialize in backend because I love tinkering with complex
              systems that enable to the web and other systems.
            </p>
            <p>
              When not in my technical wizardry mode, you will find that I am
              sleeping, walking the trails, or deep into fiction/self-help
              books.
            </p>
          </section>
        </section>

        <section className="grid space-y-2">
          <h2 className="font-bold">Work Experience</h2>
          <section className="grid space-y-2 mx-4">
            <WorkExperience
              companyName="umbono cloud"
              role="Software Developer"
              imageName="/umbono_logo.webp"
              imageWidth={190}
              imageHeight={70}
              durationDur="Aug 2024 - Present"
              workHighlights={`I develop and maintain full-stack web applications and CRM integrations, and integrating platforms like Call Cabinet, Microsoft D365, Matrix42, and Zoho.`}
              skillsList="HTML, CSS, Tailwind CSS, Javascript, Typescript, React, Next.js, SQL, Python"
            />

            <WorkExperience
              companyName="umuzi.org"
              role="Software Developer"
              imageName="/umuzi_logo.png"
              imageWidth={70}
              imageHeight={70}
              durationDur="Aug 2023 - July 2024"
              workHighlights={`I collaborated on developing and maintaining a kanban-board frontend and internal systems, supported the data team with ETL workflows as a data engineer, and served as an instructor, code-reviewer and mentor for learnership students.`}
              skillsList="HTML, CSS, Tailwind CSS, Javascript, Typescript, React, SQL, Python, Django, Django Rest Framework"
            />
          </section>
        </section>

        <section className="grid space-y-2">
          <h2 className="font-bold">Education</h2>
          <section className="grid space-y-2 mx-4">
            <Education
              schoolName="mictseta"
              qualificationName="Systems Development"
              qualificationLevel="NQF5"
              imageName="/mictseta_logo.webp"
              imageWidth={70}
              imageHeight={70}
              durationDur="Sept 2021 - July 2023"
              courseHighlights={`Two year learnership programme cooperate-sponsored by equal-experts, and facilitated by tech-ed organization Umuzi.org.`}
              skillsList={
                "How to learn, How the internet works, Operating systems, Client side and server side scripting, System design and database design, Data structures and algorithms, Software testing and best practices, Software engineering, SDLC, Agile manifesto and agile processes, Peer code reviews, Mobile development, Data engineering"
              }
            />
          </section>
        </section>

        <section className="grid space-y-2">
          <h2 className="font-bold">Recent Projects</h2>
          <section className="grid space-y-2 mx-4">
            <Project
              projectName="Personal daily task planner"
              imageName="/personal_daily_task_planner_logo.webp"
              imageWidth={160}
              imageHeight={100}
              projectDesc={`A website that helps you keep track of your daily tasks.`}
              stackList={[
                "HTML",
                "CSS",
                "React",
                "Next.js",
                "Java",
                "Springboot",
              ]}
            />

            <Project
              projectName="Problem solve daily"
              imageName="/problem_solve_daily_logo.webp"
              imageWidth={160}
              imageHeight={100}
              projectDesc={`A mobile app that gives you a set of 2 problems a day to solve, and helps you to monitor your progress.`}
              stackList={[
                "React",
                "React Native",
                "React Native Expo",
                "SQLite",
                "Typescript",
                "Express.js",
              ]}
            />

            <Project
              projectName="Driving for brainaics"
              imageName="/driving_for_brainiacs_logo.webp"
              imageWidth={160}
              imageHeight={100}
              projectDesc={`A mobile app that helps you to prepare for your learners driving test.`}
              stackList={[
                "React",
                "React Native",
                "React Native Expo",
                "SQLite",
                "Python",
                "Django Rest Framework",
              ]}
            />
          </section>
        </section>
      </main>
    </section>
  );
}
