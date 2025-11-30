import React from "react";
import { useState } from "react";
import Presentation from "./Presentation";

interface ProjectProps {
  name: string;
  tech: string;
  description: string;
  link: string;
}

interface ProjectInfoProps {}

const Projects: React.FC<ProjectInfoProps> = () => {
  const [projectList, _] = useState<ProjectProps[]>([
    {
      name: "Gold Rush Desktop Game",
      tech: "HTML, CSS, React, Redux.",
      description:
        "Little fun collecting gold bars.",
      link: "https://goldrush.ray-mawina.co.za/",
    },
    {
      name: "Sharp Memory Responsive Website Game",
      tech: "HTML, CSS, React, Redux.",
      description:
        "Little fun remembering colors and their positions.",
      link: "https://sharpmemory.ray-mawina.co.za/",
    },
    {
      name: "UpOrDown Pilot Guide Mobile App",
      tech: "React Native, Expo, CSS, React, Redux.",
      description:
        "Helps pilot remember if they are ascending or descending.",
      link: "https://drive.google.com/file/d/1uT5KZERjPBtthA0kg54pNX2e4V0N6Mx9/view?usp=drive_link",
    },
    {
      name: "TrainTravails Schedule Trace Mobile App",
      tech: "React Native, Expo, CSS, React, Redux.",
      description:
        "Helps you trace and find when the next train to your destination is coming.",
      link: "https://drive.google.com/file/d/1fF_C2G6dUcSaz7pfpQMQ2hBJSV_AbYD3/view?usp=drive_link",
    },

    

  ]);
  return <Presentation projectList={projectList} />;
};

export default Projects;
