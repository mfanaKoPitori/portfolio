import Image from "next/image";
import React from "react";

interface SkillProps {
  title: string;
  items: string[];
}

interface SkillsInfoProps {
  skills: SkillProps[];
}

const Presentation: React.FC<SkillsInfoProps> = ({ skills }) => {
  return (
    <>
      {/* Skills */}
      <section className="grid sm:grid-cols-1 lg:grid-cols-2  gap-6 w-full">
        {skills?.map((section) => (
          <section
            key={section.title}
            className="flex flex-col bg-white/80 rounded-md border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-200 w-full min-h-[14rem]"
          >
            <h3 className="font-semibold text-gray-800 text-lg border-l-4 border-purple-400 pl-3 mb-3">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-1 text-gray-700 text-sm list-disc list-inside">
              {section.items?.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </>
  );
};

export default Presentation;
