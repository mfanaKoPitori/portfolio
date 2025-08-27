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
          <p>
            I am software developer based in Pretoria, South Africa. I love
            thinking super hard to come up with solutions that solve problems.
            When the solution approach is baked and ready, I write code to
            implement and create the end-product.
          </p>
        </div>

        <div className="grid space-y-4">
          <h2 className="font-bold text-xl lg:text-2xl">Work Experience</h2>
          <WorkExperience
            companyName="Umbono Cloud"
            role="Software Developer"
            imageName="/umbono_logo.webp"
            imageWidth={190}
            imageHeight={70}
            durationDur="Aug 2025 - Present"
            durationDesc="1 year 1 month"
            workHighlights={`I develop and maintain full-stack web applications and CRM integrations, and integrating platforms like Call Cabinet, Microsoft D365, Matrix42, and Zoho.`}
            skillsList="HTML, CSS, Tailwind CSS, Javascript, Typescript, SQL,Python,
                    Next.js, React"
          />

          <WorkExperience
            companyName="Umuzi"
            role="Software Developer & SME"
            imageName="/umuzi_logo.png"
            imageWidth={70}
            imageHeight={70}
            durationDur="Jul 2024 - Aug 2025"
            durationDesc="12 months"
            workHighlights={`I collaborated on developing and maintaining a Django-based Kanban board frontend, supported the data team with ETL workflows as a data engineer, and served as an instructor and mentor teaching programming concepts through practical and problem-solving sessions.`}
            skillsList="HTML, CSS, Tailwind CSS, Javascript, Typescript, SQL,
                    Python, React, Django, Django Rest Framework"
          />
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
