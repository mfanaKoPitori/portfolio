import Image from "next/image";
import React from "react";

interface HeaderInfoProps {
  fullname: string;
  bio: string[];
}

const Presentation: React.FC<HeaderInfoProps> = ({ fullname, bio }) => {
  return (
    <>
      <header className="relative flex flex-col lg:flex-row items-center justify-between gap-6 p-6 w-full rounded-md shadow-md overflow-hidden">

        <Image
          src="/background.webp"
          alt=""
          priority
          quality={80}
          className="w-full h-full object-cover absolute inset-0"
          width={1920}
          height={1080}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Soft Overlay */}
        <section className="absolute inset-0 bg-slate-900/10 rounded-md" />

        {/* Profile Image */}
        <section className="relative z-10 flex justify-center w-full lg:w-1/3 -mt-4 lg:-mt-0">
          <section
            className="select-none"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            onMouseDown={(e) => e.preventDefault()}
          >
            <Image
              src="/headshot.png"
              width={200}
              height={200}
              alt={`Headshot of ${fullname}`}
              draggable={false}
              className="rounded-full border-4 border-amber-200/60 backdrop-blur-sm shadow-lg pointer-events-none"
            />
          </section>
        </section>

        {/* Text Section */}
        <section className="relative z-10 grid space-y-3 p-5 bg-gray-600/40 backdrop-blur-sm rounded-lg text-left w-full lg:w-2/3">
          <h1 className="text-2xl font-bold text-center lg:text-left text-amber-500/70">
            {fullname}
          </h1>

          {bio?.map((bioStr, index) => (
            <p key={index} className="leading-relaxed text-gray-200">{bioStr}</p>
          ))}
        </section>
      </header>
    </>
  );
};

export default Presentation;
