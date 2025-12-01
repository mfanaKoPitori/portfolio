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
      <header className="flex flex-col justify-center w-full rounded-md space-x-2 space-y-1 items-center px-2">
        {/* Profile Image */}
        <section
            className="select-none"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            onMouseDown={(e) => e.preventDefault()}
          >
            <Image
              src="/images/headshot_pixel_nice_2.png"
              alt={`Headshot of ${fullname}`}
              className="rounded-full border-2 border-green-600/30 backdrop-blur-sm shadow-lg pointer-events-none"
              width={60}
              height={60}
              draggable={false}
            />
       
        </section>
   
        <h1 className="text-sm lg:text-lg font-bold text-center  text-green-400">
          {fullname}
        </h1>
      </header>
    </>
  );
};

export default Presentation;
