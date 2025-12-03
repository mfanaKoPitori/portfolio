import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Mail, Linkedin, Github } from "lucide-react";

interface HeaderInfoProps {
  fullname: string;
  bio: string[];
  role: string;
}

const Presentation: React.FC<HeaderInfoProps> = ({ fullname, bio, role}) => {
  return (
    <>
      <header className="grid justify-center md:flex md:justify-between w-10/11 lg:w-8/11 xl:w-6/11 space-x-2 space-y-1 px-2">
        {/* Profile Image */}
        <section
            className="select-none justify-self-center"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            onMouseDown={(e) => e.preventDefault()}
          >
            <Image
              src="/images/headshot_pixel_nice_2.png"
              alt={`Headshot of ${fullname}`}
              className="rounded-full border-2 border-gray-300/40 backdrop-blur-sm shadow-lg pointer-events-none"
              width={60}
              height={60}
              draggable={false}
            />
       
        </section>

        <section>
          <h1 className="text-sm lg:text-lg font-bold text-center text-gray-300">
            {fullname}
          </h1>

          <section className="flex justify-center space-x-8 lg:space-x-12 w-full p-2 space-y-2 lg:space-y-0">
            <Link
              href="mailto:rmawina@gmail.com"
              className="flex flex-col items-center text-md hover:underline"
            >
              <Mail size={18} color="gray"/>
            </Link>

            <Link
              href="https://www.linkedin.com/in/raymond-mawina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-md hover:underline"
            >
              <Linkedin size={18} color="gray"/>
            </Link>

            <Link
              href="https://github.com/ramoniee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-md hover:underline"
            >
              <Github size={18} color="gray"/>
            </Link>
          </section>
        </section>
    
      </header>
    </>
  );
};

export default Presentation;
