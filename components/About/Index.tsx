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

interface techSkillProp {
  name: string;
}

interface techSkillCategoryProp {
  category: string;
  skills: techSkillProp[];
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
        role: "Junior Software Developer",
        company_name: "Umuzi Photo Club",
        period: "2022 - 2024",
      },    
      {
        role: "Intermediate Software Developer",
        company_name: "Umbono Cloud Services",
        period: "2024 - Present",
      }
  ]);

  const [techSkillsInfo, setTechSkillsInfo] = useState<techSkillCategoryProp[]>([
    {
      category: "Frontend",
      skills: [{name: "HTML"}, {name: "CSS"}, {name: "Javascript"}, {name: "Tailwind"}, {name: "Typescript"}, {name: "React"}]
    },
    {
      category: "Backend",
      skills: [{name: "Node.js"}, {name: "Express"}, {name: "Python"}, {name: "Flask"}, {name: "Django"}, {name: "FastAPI"}]
    },
    {
      category: "Databases",
      skills: [{name: "MySQL"}, {name: "Postgres"}, {name: "MongoDB"}, {name: "Redis"}]
    },
    {
      category: "Messaging Queues",
      skills: [{name: "RabbitMQ"}, {name: "Kafka"}]
    },
    {
      category: "Cloud",
      skills: [{name: "AWS Lambda"},{name: "AWS API Gateway"}, {name: "AWS S3"}, {name: "AWS SQS"}, {name: "AWS EC2"}, {name: "AWS Elastic Beanstalk"}]
    }
  ]);
  return <Presentation educationInfo={educationInfo} workExperienceInfo={workExperienceInfo} techSkillsInfo={techSkillsInfo}/>;
};

export default About;