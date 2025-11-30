import React from "react";
import { useState } from "react";
import Presentation from "./Presentation";

interface AboutProps {
  name: string;
}
interface AboutPageProps {
}


const About: React.FC<AboutPageProps> = () => {
  const [aboutInfo, _] = useState<AboutProps>(
    {
      name: "Raymond Mawina",
    }
  );
  return <Presentation name={aboutInfo.name}/>;
};

export default About;