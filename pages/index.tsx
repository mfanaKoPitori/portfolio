import Image from "next/image";
import { useState } from "react";

import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import Skills from "./components/Skills/Index";
import Projects from "./components/Projects/Index";
import NavigationTabs from "./components/NavigationTabs/Index";

export default function Home() {
  const [buttonList, _] = useState(["Skills", "Projects"]);

  const [activeButton, setActiveButton] = useState<string>("Skills");
  const handleButtonClick = (item: string) => {
    setActiveButton(item === activeButton ? "" : item);
  };

  return (
    <section className="flex flex-col items-center space-y-6 p-4 bg-gray-100 text-xs w-full max-w-4xl mx-auto min-h-screen">
      <Header />

      {/* ===== Main Content ===== 
      <main className="flex justify-center w-full">
        <section className="flex flex-col w-full max-w-5xl bg-gray-50/80 border border-yellow-500/40 rounded-md p-5 shadow-md">    
          <NavigationTabs
            activeButton={activeButton}
            buttonList={buttonList}
            handleButtonClick={handleButtonClick}
          />

          <section className="py-3 px-2 min-h-[24rem] lg:min-h-[30rem] max-h-[90vh] overflow-auto">
            {activeButton === "Skills" && <Skills />}
            {activeButton === "Projects" && <Projects />}
          </section>
        </section>
      </main>*/}

      <Footer />
    </section>
  );
}
