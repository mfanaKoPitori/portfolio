import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [buttons, setButtons] = useState([
    "Skills",
    "Projects",
    "Work",
    "School",
    "Writing",
  ]);

  const [activeButton, setActiveButton] = useState<string | null>("Skills");
  const handleButtonClick = (button: string) => {
    setActiveButton(button === activeButton ? null : button);
  };

  const [showSkillCategory, setShowSkillCategory] = useState<Boolean>(false);
  const handleSkillCategoryToggle = () => {
    setShowSkillCategory(() => !showSkillCategory);
  };

  return (
    <section className="flex flex-col space-y-2 py-2 my-1 bg-gray-100 text-xs w-11/12 sm:w-3/4 md:w-3/5 2xl:w-3/6 justify-self-center rounded-md min-h-fit h-fit">
      <header className="justify-center justify-items-center space-y-2">
        <Image
          src="/headshot.jpg"
          width={120}
          height={120}
          alt="picture of raymond Mawina"
          className="rounded-full"
        />

        <section className="grid justify-self-center text-left space-y-2 w-10/11 lg:w-2/3 p-2 border-2 border-green-400/40 rounded-md">
          <h1 className="text-center font-bold">
            Raymond Mawina / GlaringWizard
          </h1>
          <p>I am a Software Developer based in Pretoria, South Africa.</p>

          <p>
            I specialize in backend because I love tinkering with complex
            systems that enable to the web and other systems.
          </p>

          <p>
            When not in my technical wizardry mode, you will find that I am
            sleeping, walking the trails, or deep into a book.
          </p>
        </section>
      </header>
      <main>
        <section className="flex flex-col justify-self-center text-left space-y-2 w-10/11 lg:w-2/3 py-1 px-2 border-2 border-yellow-500/60 rounded-md min-h-70 max-h-70 lg:min-h-100 lag:max-h-dvh ">
          <nav>
            <ul className="flex flex-wrap justify-between space-x-2 lg:space-x-2 w-full">
              {buttons.map((item) => (
                <li key={item}>
                  <button
                    className={`w-fit lg:w-16 text-xs py-1 px-2 border-b-2 border-blue-400/60 ${
                      activeButton === item ? "border-red-400/70" : ""
                    }`}
                    onClick={() => {
                      if (activeButton !== item) {
                        handleButtonClick(item);
                      }
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <section className="py-1 px-2">
            {activeButton === "Skills" && (
              //make this scrollable if too long
              <section className="grid space-y-2">
                <ul className="grid space-y-1">
                  <li>
                    <section>
                      <h3 className="font-bold">Fundamentals</h3>
                    </section>
                  </li>

                  <li>
                    <section>
                      <h3 className="font-bold">Tools</h3>
                    </section>
                  </li>

                  <li>
                    <section>
                      <h3 className="font-bold">Cloud Stack</h3>
                    </section>
                  </li>

                  <li>
                    <section>
                      <h3 className="font-bold">
                        Programming Languages{" "}
                        <button onClick={handleSkillCategoryToggle}>
                          {showSkillCategory ? `[hide]` : `[show]`}
                        </button>
                      </h3>

                      {showSkillCategory && (
                        <ul className="space-y-1 max-h-25 lg:max-h-40 min-h-25 lg:min-h-40 overflow-y-auto">
                          <li>
                            <section className="px-2">
                              <h4 className="font-bold">
                                JavaScript / TypeScript
                              </h4>
                              <section className="px-2">
                                <h5 className="font-bold">
                                  Frameworks & Libraries
                                </h5>
                                <ul className="px-2">
                                  <li>Node.js</li>
                                  <li>Express.js</li>
                                  <li>React</li>
                                  <li>Redux</li>
                                  <li>Next.js</li>
                                </ul>
                              </section>
                            </section>
                          </li>

                          <li>
                            <section className="px-2">
                              <h4 className="font-bold">
                                JavaScript / TypeScript
                              </h4>
                              <section className="px-2">
                                <h5 className="font-bold">
                                  Frameworks & Libraries
                                </h5>
                                <ul className="px-2">
                                  <li>Node.js</li>
                                  <li>Express.js</li>
                                  <li>React</li>
                                  <li>Redux</li>
                                  <li>Next.js</li>
                                </ul>
                              </section>
                            </section>
                          </li>

                          <li>
                            <section className="px-2">
                              <h4 className="font-bold">
                                JavaScript / TypeScript
                              </h4>
                              <section className="px-2">
                                <h5 className="font-bold">
                                  Frameworks & Libraries
                                </h5>
                                <ul className="px-2">
                                  <li>Node.js</li>
                                  <li>Express.js</li>
                                  <li>React</li>
                                  <li>Redux</li>
                                  <li>Next.js</li>
                                </ul>
                              </section>
                            </section>
                          </li>
                        </ul>
                      )}
                    </section>
                  </li>

                  <li>
                    <section>
                      <h3 className="font-bold">DevOps</h3>
                    </section>
                  </li>

                  <li>
                    <section>
                      <h3 className="font-bold">Soft Skills</h3>
                    </section>
                  </li>
                </ul>
              </section>
            )}
          </section>
        </section>
      </main>
      <footer>
        <section className="flex flex-col justify-self-center text-center space-y-2 w-10/11 lg:w-2/3 p-2 border-2 border-green-400/40 rounded-md">
          <p>🪄 Forged in code by LeGlaringWizard · 2025</p>
        </section>
      </footer>
    </section>
  );
}
