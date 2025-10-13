import Image from "next/image";
import React from "react";

interface ExperienceProps {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

interface ExperienceInfoProps {
  experienceList: ExperienceProps[];
}

const Presentation: React.FC<ExperienceInfoProps> = ({ experienceList }) => {
  return (
    <>
      <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {experienceList.map((exp, idx) => (
          <section
            key={idx}
            className="flex flex-col bg-white/80 rounded-md border border-gray-200 p-5 shadow-sm hover:shadow-lg transition-shadow duration-200 w-full min-h-[14rem]"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
              <h3 className="font-bold text-gray-800 text-lg">{exp.role}</h3>
              <p className="text-gray-500 text-sm italic">{exp.duration}</p>
            </div>
            <p className="text-gray-600 text-sm mt-1">{exp.company}</p>
            <ul className="mt-3 flex flex-col gap-1 text-gray-700 text-sm list-disc list-inside">
              {exp.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </>
  );
};

export default Presentation;
