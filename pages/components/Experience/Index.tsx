import React from "react";
import { useState } from "react";
import Presentation from "./Presentation";

interface ExperienceProps {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

interface ExperienceInfoProps {}

const Experience: React.FC<ExperienceInfoProps> = () => {
  const [experienceList, _] = useState<ExperienceProps[]>([
    {
      company: "Innovatech Labs",
      role: "Software Engineer Intern",
      duration: "Jun 2021 - Dec 2021",
      responsibilities: [
        "Developed internal tools using Django and React",
        "Wrote unit tests to improve code coverage",
        "Collaborated with team on system design proposals",
      ],
    },
    {
      company: "Tech Solutions Inc.",
      role: "Backend Developer",
      duration: "Jan 2022 - Present",
      responsibilities: [
        "Designed scalable APIs in Node.js and Python",
        "Optimized database queries for large datasets",
        "Implemented CI/CD pipelines using GitHub Actions",
      ],
    },
  ]);
  return <Presentation experienceList={experienceList} />;
};

export default Experience;
