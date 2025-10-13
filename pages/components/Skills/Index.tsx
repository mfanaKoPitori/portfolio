import React from "react";
import { useState } from "react";
import Presentation from "./Presentation";

interface SkillProps {
  title: string;
  items: string[];
}

interface SkillsInfoProps {}

const Skills: React.FC<SkillsInfoProps> = () => {
  const [skills, _] = useState<SkillProps[]>([
    {
      title: "Fundamentals",
      items: [
        "API Design",
        "Functional & OO Programming",
        "System Design & Analysis",
        "Data Structures & Algorithms",
        "Design Patterns",
        "Databases: RDBMS & NoSQL",
      ],
    },
    {
      title: "Languages",
      items: [
        "HTML, CSS & Tailwind",
        "Javascript & Typescript",
        "Node.js, React, Redux & Next.js",
        "Python, Flask & Django",
        "Postgres, MySQL & MSSQL",
      ],
    },
    {
      title: "Tools",
      items: [
        "Linux & Windows",
        "VSCode",
        "Bash & Vim",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
    },
    {
      title: "Cloud Stack",
      items: ["AWS", "Microsoft Azure", "GCP"],
    },
  ]);
  return <Presentation skills={skills} />;
};

export default Skills;
