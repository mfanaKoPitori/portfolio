import Image from "next/image";
import React from "react";

interface HeaderInfoProps {
  fullname: string;
  bio: string[];
  role: string;
}

const Presentation: React.FC<HeaderInfoProps> = ({ fullname, bio, role}) => {
  return (
    <>
      <header className="flex justify-between w-full rounded-md space-x-2 items-center px-2">
        {/* Profile Image */}
        <section className="flex justify-center">
          <section
            className="select-none"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            onMouseDown={(e) => e.preventDefault()}
          >
            <Image
              src="/headshot.png"
              alt={`Headshot of ${fullname}`}
              className="rounded-full border-2 border-amber-400/60 backdrop-blur-sm shadow-lg pointer-events-none"
              width={60}
              height={60}
              draggable={false}
            />
          </section>
        </section>

        {/* Text Section */}
        <section className="grid lg:flex justify-end lg:justify-between w-full">
          <h1 className="text-xs lg:text-lg  font-bold text-center lg:text-left text-amber-400">
            {fullname}
          </h1>

          <h1 className="text-xs lg:text-lg  font-bold text-center lg:text-left text-amber-400">
            {role}
          </h1>
        </section>
      </header>
    </>
  );
};

export default Presentation;
