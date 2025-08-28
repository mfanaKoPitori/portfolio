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
    <div className="grid bg-gray-300/50 rounded-md">
      <div className="space-y-2 p-4">
        <span className="grid lg:flex lg:justify-between font-bold">
          <div className="w-full grid lg:flex lg:justify-between space-y-2 lg:space-x-4 lg:align-baseline">
            <div className="h-18 w-full lg:w-52  bg-black rounded-md justify-items-center">
              <Image
                src={imageName}
                height={imageHeight}
                width={imageWidth}
                alt="umbono_logo"
                className=" bg-black rounded-md p-1"
              />
            </div>

            <div className="font-bold text-xs lg:text-lg p-0">
              <p className="p-0 m-0">{role}</p>
              <p>{companyName}</p>
              <p>{durationDur}</p>
            </div>
          </div>
        </span>

        <div className="grid">
          <div className="flex flex-cols-2 bg-gray-300/60 rounded-md">
            <p className="bg-blue-400 w-1.5 rounded-bl-md rounded-tl-md"></p>
            <p className="w-11/12 p-2 text-left">{workHighlights}</p>
          </div>
        </div>

        <div className="flex">
          <p className="bg-blue-400 w-1.5 rounded-l-md"></p>
          <div className="grid w-full bg-gray-300/80 p-2 rounded-r-md space-x-1 text-xs lg:text-lg font-bold">
            <h3 className="grid justify-center bg-gray-400/30 p-1 rounded-md">
              Tech stack tools
            </h3>
            <p className="grid whitespace-normal break-words p-1 justify-center text-gray-900 text-xs lg:text-lg font-bold">
              {skillsList}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
