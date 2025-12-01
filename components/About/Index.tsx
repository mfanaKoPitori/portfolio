import React from "react";
import { useState } from "react";
import Presentation from "./Presentation";

interface AboutProps {
  name: string;
}

interface EducationInstitutionProp {
  school_name: string;
  course: string;
  period: string;
  completion_status: boolean;
}

interface WorkExperienceProp {
  role: string;
  company_name: string;
  period: string;
}

interface AboutPageProps {
}


const About: React.FC<AboutPageProps> = () => {
  const [educationInfo, _] = useState<EducationInstitutionProp[]>([
    {
      school_name: "Shirinda Primary School",
      course: "Mathematics and Science",
      period: "2004 - 2012",
      completion_status: true
    },
    {
      school_name: "Jafta Mahlangu High School",
      course: "Mathematics and Science",
      period: "2012 - 2016",
      completion_status: true
    },
    {
      school_name: "University of Pretoria",
      course: "Bachelors in Information Technology",
      period: "2018 - 2020",
      completion_status: false
    },
    {
      school_name: "Umuzi Photo Club",
      course: "NCIT in Information Technology",
      period: "2022 - 2023",
      completion_status: true
    }
  ]);

    const [workExperienceInfo, setWorkExperienceInfo] = useState<WorkExperienceProp[]>([
      {
        role: "Software Developer Apprentice",
        company_name: "Umuzi Photo Club",
        period: "2022 - 2023",
      },
      {
        role: "Software Developer Intern",
        company_name: "Umuzi Photo Club",
        period: "2023 - 2023",
      },
      {
        role: "Junior Software Developer",
        company_name: "Umuzi Photo Club",
        period: "2023 - 2024",
      },    
      {
        role: "Intermediate Software Developer",
        company_name: "Umbono Cloud Services",
        period: "2024 - Present",
      }
  ]);
  return <Presentation educationInfo={educationInfo} workExperienceInfo={workExperienceInfo}/>;
};

export default About;