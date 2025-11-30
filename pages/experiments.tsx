import Image from "next/image";
import { useState, useEffect } from "react";

import Header from "../components/Header/Index";
import Footer from "../components/Footer/Index";
import Projects from "../components/Projects/Index";
import NavigationTabs from "../components/NavigationTabs/Index";

export default function Home() {
  const [buttonList, _] = useState(["About","Projects","Experiments", "Analytics", "Reading List"]);

  const [activeButton, setActiveButton] = useState<string>("Experiments");
  const handleButtonClick = (item: string) => {
    setActiveButton(item === activeButton ? "" : item);
      fetch("/api/tracker")
      .then(res => res.json())
      .then(data => console.log(`IP: ${data.ip} visited ${item}`));
  };

  useEffect(() => {
    fetch("/api/tracker")
      .then(res => res.json())
      .then(data => console.log(`IP: ${data.ip} visited website`));
  }, []);

  return (
    <section className="flex flex-col items-center space-y-2 p-1 bg-gray-100 text-xs w-full mx-auto min-h-screen">
      <Header />

      <NavigationTabs
       activeButton={activeButton}
       buttonList={buttonList}
       handleButtonClick={handleButtonClick}
      />

      <main className="flex flex-grow justify-center w-full">
        <section className="flex flex-col w-full max-w-5xl p-2">    
          <section className="py-2 px-2 min-h-[24rem] lg:min-h-[18rem] overflow-auto">
            <p>Experiments page under construction</p>
          </section>
        </section>
      </main> 

      <Footer />
    </section>
  );
}