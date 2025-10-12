import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [buttons, setButtons] = useState(["Skills", "Projects", "Experience"]);

  const [activeButton, setActiveButton] = useState<string | null>("Skills");
  const handleButtonClick = (button: string) => {
    setActiveButton(button === activeButton ? null : button);
  };

  return (
    <section className="flex flex-col items-center space-y-6 p-4 bg-gray-100 text-xs w-full max-w-4xl mx-auto min-h-screen">
      {/* ===== Header ===== */}
      <header className="relative flex flex-col lg:flex-row items-center justify-between gap-6 p-6 w-full bg-[url('/background.jpg')] bg-cover bg-center rounded-md shadow-md overflow-hidden">
        {/* Soft Overlay */}
        <section className="absolute inset-0 bg-slate-900/10 rounded-md" />

        {/* Profile Image */}
        <section className="relative z-10 flex justify-center w-full lg:w-1/3 -mt-4 lg:-mt-0">
          <section
            className="select-none"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            onMouseDown={(e) => e.preventDefault()}
          >
            <Image
              src="/headshot.png"
              width={200}
              height={200}
              alt="Picture of Raymond Mawina"
              draggable={false}
              className="rounded-full border-4 border-amber-200/60 backdrop-blur-sm shadow-lg pointer-events-none"
            />
          </section>
        </section>

        {/* Text Section */}
        <section className="relative z-10 grid space-y-3 p-5 bg-gray-600/40 backdrop-blur-sm rounded-lg text-left w-full lg:w-2/3">
          <h1 className="text-2xl font-bold text-center lg:text-left text-amber-500/70">
            Raymond Mawina
          </h1>

          <p className="leading-relaxed text-gray-200">
            I am a Software Developer based in Pretoria, South Africa.
          </p>

          <p className="leading-relaxed text-gray-200">
            I specialize in backend because I love tinkering with complex
            systems that enable the web and other platforms.
          </p>

          <p className="leading-relaxed text-gray-200">
            When not in my technical wizardry mode, you’ll find me sleeping,
            walking the trails, or deep into a book.
          </p>
        </section>
      </header>

      {/* ===== Main Content ===== */}
      <main className="flex justify-center w-full">
        <section className="flex flex-col w-full max-w-5xl bg-gray-50/80 border border-yellow-500/40 rounded-md p-5 shadow-md">
          {/* Navigation Tabs */}
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center sm:justify-around gap-3 w-full">
              {buttons.map((item) => (
                <li key={item}>
                  <button
                    className={`w-fit sm:w-24 text-sm py-2 px-4 rounded-t-md border-b-2 transition-colors duration-200 ${
                      activeButton === item
                        ? "border-amber-500 text-amber-600 font-semibold"
                        : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
                    }`}
                    onClick={() => {
                      if (activeButton !== item) handleButtonClick(item);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Active Section */}
          <section className="py-3 px-2 min-h-[24rem] lg:min-h-[30rem] max-h-[90vh] overflow-auto">
            {/* Skills */}
            {activeButton === "Skills" && (
              <div className="grid sm:grid-cols-1 lg:grid-cols-2  gap-6 w-full">
                {[
                  {
                    title: "Fundamentals",
                    items: [
                      "API Design",
                      "Functional & OO Programming",
                      "System Design & Analysis",
                      "Data Structures & Algorithms",
                      "Design Patterns",
                      "Databases: RDBMS & NoSQL",
                    ],
                  },
                  {
                    title: "Languages",
                    items: [
                      "HTML, CSS & Tailwind",
                      "Javascript & Typescript",
                      "Node.js, React, Redux & Next.js",
                      "Python, Flask & Django",
                      "Postgres, MySQL & MSSQL",
                    ],
                  },
                  {
                    title: "Tools",
                    items: [
                      "Linux & Windows",
                      "VSCode",
                      "Bash & Vim",
                      "Docker",
                      "Kubernetes",
                      "Terraform",
                    ],
                  },
                  {
                    title: "Cloud Stack",
                    items: ["AWS", "Microsoft Azure", "GCP"],
                  },
                ].map((section) => (
                  <div
                    key={section.title}
                    className="flex flex-col bg-white/80 rounded-md border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-200 w-full min-h-[14rem]"
                  >
                    <h3 className="font-semibold text-gray-800 text-lg border-l-4 border-purple-400 pl-3 mb-3">
                      {section.title}
                    </h3>
                    <ul className="flex flex-col gap-1 text-gray-700 text-sm list-disc list-inside">
                      {section.items.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Experience */}
            {activeButton === "Experience" && (
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    company: "Innovatech Labs",
                    role: "Software Engineer Intern",
                    duration: "Jun 2021 - Dec 2021",
                    responsibilities: [
                      "Developed internal tools using Django and React",
                      "Wrote unit tests to improve code coverage",
                      "Collaborated with team on system design proposals",
                    ],
                  },
                  {
                    company: "Tech Solutions Inc.",
                    role: "Backend Developer",
                    duration: "Jan 2022 - Present",
                    responsibilities: [
                      "Designed scalable APIs in Node.js and Python",
                      "Optimized database queries for large datasets",
                      "Implemented CI/CD pipelines using GitHub Actions",
                    ],
                  },
                ].map((exp, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col bg-white/80 rounded-md border border-gray-200 p-5 shadow-sm hover:shadow-lg transition-shadow duration-200 w-full min-h-[14rem]"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                      <h3 className="font-bold text-gray-800 text-lg">
                        {exp.role}
                      </h3>
                      <p className="text-gray-500 text-sm italic">
                        {exp.duration}
                      </p>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{exp.company}</p>
                    <ul className="mt-3 flex flex-col gap-1 text-gray-700 text-sm list-disc list-inside">
                      {exp.responsibilities.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {activeButton === "Projects" && (
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    name: "Weighbridge Website",
                    tech: "Next.js, TypeScript, Node.js",
                    description:
                      "Automates and digitizes weighbridge processes for mineral storage facilities.",
                    link: "#",
                  },
                  {
                    name: "Contact Center",
                    tech: "React, Node.js, AWS",
                    description:
                      "Cloud-based solution for proactive engagement and community management on LinkedIn.",
                    link: "#",
                  },
                  {
                    name: "Real-time Transcription Web App",
                    tech: "React, WebRTC, AWS Transcribe",
                    description:
                      "Captures and transcribes VoIP calls in real-time with a browser-based client.",
                    link: "#",
                  },
                  {
                    name: "Personal Portfolio Website",
                    tech: "Next.js, Tailwind CSS",
                    description:
                      "Showcases projects, skills, and professional experience with subtle animations.",
                    link: "#",
                  },
                ].map((project, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col bg-white/80 rounded-md border border-gray-200 p-5 shadow-sm hover:shadow-lg transition-shadow duration-200 w-full min-h-[14rem]"
                  >
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {project.name}
                    </h3>
                    <p className="text-gray-500 text-sm italic mt-1">
                      {project.tech}
                    </p>
                    <p className="mt-2 text-gray-700 text-sm">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 text-amber-500 text-sm hover:underline"
                    >
                      View Project
                    </a>
                  </div>
                ))}
              </div>
            )}
          </section>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="w-full">
        <section className="flex flex-col justify-center items-center text-center space-y-2 w-full max-w-5xl p-4 border border-amber-400/40 rounded-md shadow-sm mx-auto">
          <p className="text-gray-700 text-sm sm:text-base">
            🪄 Forged in code by{" "}
            <span className="font-semibold text-amber-500">
              LeGlaringWizard
            </span>{" "}
            · 2025
          </p>
        </section>
      </footer>
    </section>
  );
}
