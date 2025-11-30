import Image from "next/image";
import { useState, useEffect } from "react";

import Header from "../components/Header/Index";
import Footer from "../components/Footer/Index";
import Projects from "../components/Projects/Index";
import NavigationTabs from "../components/NavigationTabs/Index";

export default function Home() {
  const [buttonList, _] = useState(["About","Projects","Experiments", "Analytics", "Reading"]);

  const [activeButton, setActiveButton] = useState<string>("Analytics");
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
    <section className="flex flex-col items-center space-y-2 p-3 bg-gray-100 text-xs w-full mx-auto min-h-screen">
      <Header />

      <NavigationTabs
       activeButton={activeButton}
       buttonList={buttonList}
       handleButtonClick={handleButtonClick}
      />

      <main className="flex flex-grow w-fit">
        <p>Analytics page under construction</p>
      </main> 

      <Footer />
    </section>
  );
}