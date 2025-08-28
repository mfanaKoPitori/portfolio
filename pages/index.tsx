import Image from "next/image";
import WorkExperience from "./components/work_experience";

export default function Home() {
  return (
    <div className="grid space-y-2 py-4 lg:space-y-8 text-sm lg:text-lg w-11/12 sm:w-3/4 md:w-3/5 2xl:w-3/6 justify-self-center">
      <header className="grid justify-center justify-items-center space-y-4">
        <Image
          src="/headshot.jpg"
          width={120}
          height={120}
          alt="picture of raymond Mawina"
          className="rounded-full"
        />
        <h1 className="text-2xl lg:text-4xl font-bold">Raymond Mawina</h1>
      </header>
      <main className="grid space-y-4 p-4">
        <div className="grid space-y-2">
          <h2 className="font-bold text-xl lg:text-2xl">Biography</h2>
          <div className="space-y-2 mx-4">
            <p>
              I am a junior software developer based in Pretoria, South Africa.
            </p>

            <p>
              I specialize in backend because I love tinkering with complex
              systems that enable to the web and other systems.
            </p>
            <p>
              When I am not trying to be technical wizard, I sleep, walk the
              trails, or get deep into fiction/self-help books.
            </p>
          </div>
        </div>

        <div className="grid space-y-2">
          <h2 className="font-bold text-xl lg:text-2xl">Work Experience</h2>
          <div className="grid space-y-2 mx-4">
            <WorkExperience
              companyName="Umbono Cloud"
              role="Software Developer"
              imageName="/umbono_logo.webp"
              imageWidth={190}
              imageHeight={70}
              durationDur="Aug 2025 - Present"
              workHighlights={`I develop and maintain full-stack web applications and CRM integrations, and integrating platforms like Call Cabinet, Microsoft D365, Matrix42, and Zoho.`}
              skillsList="HTML, CSS, Tailwind CSS, Javascript, Typescript, React, Next.js, SQL, Python"
            />

            <WorkExperience
              companyName="Umuzi"
              role="Software Developer"
              imageName="/umuzi_logo.png"
              imageWidth={70}
              imageHeight={70}
              durationDur="Jul 2024 - Aug 2025"
              workHighlights={`I collaborated on developing and maintaining a kanban-board frontend, supported the data team with ETL workflows as a data engineer, and served as an instructor, code-reviwer and mentor for learnership students.`}
              skillsList="HTML, CSS, Tailwind CSS, Javascript, Typescript, React, SQL, Python, Django, Django Rest Framework"
            />
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
