import Image from "next/image";

type WorkExperienceProps = {
  companyName: string;
  role: string;
  imageName: string;
  imageWidth: number;
  imageHeight: number;
  durationDur: string;
  workHighlights: string;
  skillsList: string;
};

export default function WorkExperience({
  companyName,
  role,
  imageName,
  imageWidth,
  imageHeight,
  durationDur,
  workHighlights,
  skillsList,
}: WorkExperienceProps) {
  return (
    <section className="grid bg-gray-300/50 space-y-2 p-4 rounded-md">
      <section className="w-full grid lg:flex lg:justify-between space-y-2 lg:space-x-4 lg:align-baseline">
        <section className="h-18 w-full lg:w-52  bg-black rounded-md justify-items-center">
          <Image
            src={imageName}
            height={imageHeight}
            width={imageWidth}
            alt="umbono_logo"
            className=" bg-black rounded-md p-1"
          />
        </section>

        <section className="font-bold text-xs lg:text-lg p-0">
          <p className="p-0 m-0">{role}</p>
          <p>{companyName}</p>
          <p>{durationDur}</p>
        </section>
      </section>

      <section className="flex flex-cols-2 bg-gray-300/60 rounded-md border-l-5 border-blue-400">
        <p className="w-11/12 p-2 text-left">{workHighlights}</p>
      </section>

      <section className="grid w-full bg-gray-300/80 p-2 rounded-md space-x-1 text-xs lg:text-lg font-bold border-l-5 border-blue-400">
        <h3 className="grid justify-center bg-gray-400/30 p-1 rounded-md">
          Tech Stack Tools
        </h3>
        <p className="grid whitespace-normal break-words p-1 justify-center text-gray-900 text-xs lg:text-lg font-bold">
          {skillsList}
        </p>
      </section>
    </section>
  );
}
