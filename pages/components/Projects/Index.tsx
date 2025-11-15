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
      name: "Weighbridge Website",
      tech: "Next.js, TypeScript, Node.js",
      description:
        "Automates and digitizes weighbridge processes for mineral storage facilities.",
      link: "#",
    },
    {
      name: "Contact Center",
      tech: "React, Node.js, AWS",
      description:
        "Cloud-based solution for proactive engagement and community management on LinkedIn.",
      link: "#",
    },
    {
      name: "Real-time Transcription Web App",
      tech: "React, WebRTC, AWS Transcribe",
      description:
        "Captures and transcribes VoIP calls in real-time with a browser-based client.",
      link: "#",
    },
    {
      name: "Personal Portfolio Website",
      tech: "Next.js, Tailwind CSS",
      description:
        "Showcases projects, skills, and professional experience with subtle animations.",
      link: "#",
    },
        {
      name: "Weighbridge Website",
      tech: "Next.js, TypeScript, Node.js",
      description:
        "Automates and digitizes weighbridge processes for mineral storage facilities.",
      link: "#",
    },
    {
      name: "Contact Center",
      tech: "React, Node.js, AWS",
      description:
        "Cloud-based solution for proactive engagement and community management on LinkedIn.",
      link: "#",
    },
    {
      name: "Real-time Transcription Web App",
      tech: "React, WebRTC, AWS Transcribe",
      description:
        "Captures and transcribes VoIP calls in real-time with a browser-based client.",
      link: "#",
    },
    {
      name: "Personal Portfolio Website",
      tech: "Next.js, Tailwind CSS",
      description:
        "Showcases projects, skills, and professional experience with subtle animations.",
      link: "#",
    },
        {
      name: "Weighbridge Website",
      tech: "Next.js, TypeScript, Node.js",
      description:
        "Automates and digitizes weighbridge processes for mineral storage facilities.",
      link: "#",
    },
    {
      name: "Contact Center",
      tech: "React, Node.js, AWS",
      description:
        "Cloud-based solution for proactive engagement and community management on LinkedIn.",
      link: "#",
    },
    {
      name: "Real-time Transcription Web App",
      tech: "React, WebRTC, AWS Transcribe",
      description:
        "Captures and transcribes VoIP calls in real-time with a browser-based client.",
      link: "#",
    },
    {
      name: "Personal Portfolio Website",
      tech: "Next.js, Tailwind CSS",
      description:
        "Showcases projects, skills, and professional experience with subtle animations.",
      link: "#",
    },
        {
      name: "Weighbridge Website",
      tech: "Next.js, TypeScript, Node.js",
      description:
        "Automates and digitizes weighbridge processes for mineral storage facilities.",
      link: "#",
    },
    {
      name: "Contact Center",
      tech: "React, Node.js, AWS",
      description:
        "Cloud-based solution for proactive engagement and community management on LinkedIn.",
      link: "#",
    },
    {
      name: "Real-time Transcription Web App",
      tech: "React, WebRTC, AWS Transcribe",
      description:
        "Captures and transcribes VoIP calls in real-time with a browser-based client.",
      link: "#",
    },
    {
      name: "Personal Portfolio Website",
      tech: "Next.js, Tailwind CSS",
      description:
        "Showcases projects, skills, and professional experience with subtle animations.",
      link: "#",
    },

  ]);
  return <Presentation projectList={projectList} />;
};

export default Projects;
