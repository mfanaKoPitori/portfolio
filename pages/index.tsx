import Image from "next/image";
import { useState } from "react";

import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import Projects from "./components/Projects/Index";
import NavigationTabs from "./components/NavigationTabs/Index";

export default function Home() {
  const [buttonList, _] = useState(["About","Projects","Experiments", "Reading", "Blog"]);

  const [activeButton, setActiveButton] = useState<string>("Projects");
  const handleButtonClick = (item: string) => {
    setActiveButton(item === activeButton ? "" : item);
  };

  return (
    <section className="flex flex-col items-center space-y-2 p-1 bg-gray-100 text-xs w-full max-w-4xl mx-auto min-h-screen">
      <Header />

      {/* ===== Main Content ===== */} 
      <main className="flex flex-grow justify-center w-full">
        <section className="flex flex-col w-full max-w-5xl p-2">    
          <NavigationTabs
            activeButton={activeButton}
            buttonList={buttonList}
            handleButtonClick={handleButtonClick}
          />

          <section className="py-2 px-2 min-h-[24rem] lg:min-h-[18rem] overflow-auto">
            {activeButton === "Projects" && <Projects />}
          </section>
        </section>
      </main> 

      <Footer />
    </section>
  );
}
