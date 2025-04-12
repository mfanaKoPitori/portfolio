import Image from "next/image";

export default function Home() {
  return (
    <div className="grid space-y-2 py-4 lg:space-y-8 text-sm lg:text-lg w-11/12 md:w-2/3 justify-self-center">
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
            I am a human born, raised and based in Gauteng, South Africa. I work
            as a software developer and I am a passionate problem solver.
          </p>
        </div>

        <div className="grid space-y-4">
          <h2 className="font-bold text-xl lg:text-2xl">Work Experience</h2>
          <div className="grid space-y-4 bg-gray-300/50 rounded-md">
            <p className="bg-blue-300 h-2 rounded-t-md"></p>
            <div className="px-4 mb-4 space-y-4">
              <span className="grid space-y-2 lg:flex lg:justify-between font-bold">
                <div className="grid space-y-2 lg:flex lg:space-x-4  lg:items-start">
                  <div className="h-18 w-52 bg-black rounded-md p-1 justify-items-center">
                    <Image
                      src="/umbono_logo.webp"
                      height={70}
                      width={200}
                      alt="umbono_logo"
                      className="bg-black rounded-md p-1"
                    />
                  </div>
                  <div>
                    <p className="text-lg lg:text-xl">Umbono Cloud</p>
                    <h2 className="text-md lg:text-lg">Software Developer</h2>
                  </div>
                </div>
                <div>
                  <p className="text-lg lg:text-xl">Aug 2025 - Present</p>
                  <h2 className="flex text-md lg:text-lg lg:justify-self-end">
                    9 months
                  </h2>
                </div>
              </span>

              <div className="grid space-y-2">
                <div className="flex flex-cols-2 bg-gray-300/60 rounded-md">
                  <p className="bg-red-400 w-1.5 rounded-bl-md rounded-tl-md"></p>
                  <p className="w-11/12 p-2 text-left">
                    I develop and mantain frontend websites and applications
                    build with html, css, tailwind, next.js. The websites
                    consume data from databases and api's.
                  </p>
                </div>

                <div className="flex flex-cols-2 bg-gray-300/60 rounded-md">
                  <p className="bg-red-400 w-1.5 rounded-bl-md rounded-tl-md"></p>
                  <p className="w-11/12 p-2 text-left">
                    I develop and mantain backend api's build in nodejs and
                    expressjs. I use the database MySQL. Most of the api's we
                    build are supported by AWS Infrastructure, such as RDS.
                  </p>
                </div>

                <div className="flex flex-cols-2 bg-gray-300/60 rounded-md">
                  <p className="bg-red-400 w-1.5 rounded-bl-md rounded-tl-md"></p>
                  <p className="w-11/12 p-2 text-left">
                    I develop and mantain CRM Integrations, most for call center
                    clients. I've worked with platforms such as Call Cabinet,
                    Microsoft's D365, Matrix 42 and Zoho.
                  </p>
                </div>
              </div>

              <div className="flex">
                <p className="bg-purple-400/80 w-2 rounded-l-md"></p>
                <div className="grid w-full bg-gray-300/80 p-2 rounded-md space-x-1 text-sm lg:text-lg lg:text-md font-bold">
                  <h3 className="grid justify-center bg-gray-400/30 p-1 rounded-t-md">
                    Skills
                  </h3>
                  <p className="grid whitespace-normal break-words p-1 justify-center text-gray-900">
                    HTML, CSS, Tailwind CSS, Javascript, Typescript, SQL,Python,
                    Next.js, React
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid space-y-4 bg-gray-300/50 rounded-md ">
            <p className="bg-blue-300 h-2 rounded-t-md"></p>
            <div className="grid px-4 mb-4 space-y-4">
              <span className="grid space-y-2 lg:flex lg:justify-between font-bold">
                <div className="grid space-y-2 lg:flex lg:space-x-4 items-start">
                  <div className="h-18 w-52 bg-black rounded-md p-1 justify-items-center">
                    <Image
                      src="/umuzi_logo.png"
                      height={70}
                      width={70}
                      alt="umuzi logo"
                      className="bg-black rounded-md p-1"
                    />
                  </div>

                  <div>
                    <p className="text-lg lg:text-xl">Umuzi.org</p>
                    <h2 className="text-md lg:text-lg">
                      Software Developer & SME
                    </h2>
                  </div>
                </div>
                <div>
                  <p className="text-lg lg:text-xl">Jul 2024 - Aug 2025</p>
                  <h2 className="flex text-md lg:text-lg lg:justify-self-end">
                    1 year 1 month
                  </h2>
                </div>
              </span>

              <div className="grid space-y-2">
                <div className="flex flex-cols-2 bg-gray-300/60 rounded-md">
                  <p className="bg-red-400 w-1.5 rounded-bl-md rounded-tl-md"></p>
                  <p className="w-11/12 p-2 text-left">
                    I worked with a team to develop and mantained a frontend
                    kanban board website build with html, css, tailwind, django.
                    The websites consume data from databases and api's.
                  </p>
                </div>

                <div className="flex flex-cols-2 bg-gray-300/60 rounded-md">
                  <p className="bg-red-400 w-1.5 rounded-bl-md rounded-tl-md"></p>
                  <p className="w-11/12 p-2 text-left">
                    I supported the data team in the role of a data engineer. I
                    was responsible for helping with the data pulling, cleaning
                    and storing, developing ETL workflows.
                  </p>
                </div>

                <div className="flex flex-cols-2 bg-gray-300/60 rounded-md">
                  <p className="bg-red-400 w-1.5 rounded-bl-md rounded-tl-md"></p>
                  <p className="w-11/12 p-2 text-left">
                    I also worked as instructor, mentor and subject matter
                    expert. Helping cohorts of learnership program students with
                    learning basic and advanced programming concepts by
                    conducting practical sessions and problem solving sessions.
                  </p>
                </div>
              </div>

              <div className="flex">
                <p className="bg-purple-400/80 w-2 rounded-l-md"></p>
                <div className="grid w-full bg-gray-300/80 p-2 rounded-md space-x-1 text-sm lg:text-lg lg:text-md font-bold">
                  <h3 className="grid justify-center bg-gray-400/30 p-1 rounded-t-md">
                    Skills
                  </h3>
                  <p className="grid whitespace-normal break-words p-1 justify-center text-gray-900">
                    HTML, CSS, Tailwind CSS, Javascript, Typescript, SQL,
                    Python, React, Django, Django Rest Framework
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
