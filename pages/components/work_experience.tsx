import Image from "next/image";

type WorkExperienceProps = {
  companyName: string;
  role: string;
  imageName: string;
  imageWidth: number;
  imageHeight: number;
  durationDur: string;
  durationDesc: string;
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
  durationDesc,
  workHighlights,
  skillsList,
}: WorkExperienceProps) {
  return (
    <div className="grid space-y-4 bg-gray-300/50 rounded-md">
      <p className="bg-blue-300 h-2 rounded-t-md"></p>
      <div className="px-4 mb-4 space-y-4">
        <span className="grid space-y-2 lg:flex lg:justify-between font-bold">
          <div className="grid space-y-2 lg:flex lg:space-x-4  lg:items-start">
            <div className="h-18 w-52 bg-black rounded-md p-1 justify-items-center">
              <Image
                src={imageName}
                height={imageHeight}
                width={imageWidth}
                alt="umbono_logo"
                className="bg-black rounded-md p-1"
              />
            </div>
            <div>
              <p className="text-lg lg:text-xl">{companyName}</p>
              <h2 className="text-md lg:text-lg">{role}</h2>
            </div>
          </div>
          <div>
            <p className="text-lg lg:text-xl">{durationDur}</p>
            <h2 className="flex text-md lg:text-lg lg:justify-self-end">
              {durationDesc}
            </h2>
          </div>
        </span>

        <div className="grid space-y-2">
          <div className="flex flex-cols-2 bg-gray-300/60 rounded-md">
            <p className="bg-blue-400 w-1.5 rounded-bl-md rounded-tl-md"></p>
            <p className="w-11/12 p-2 text-left">{workHighlights}</p>
          </div>
        </div>

        <div className="flex">
          <p className="bg-blue-400 w-1.5 rounded-l-md"></p>
          <div className="grid w-full bg-gray-300/80 p-2 rounded-r-md space-x-1 text-sm lg:text-lg lg:text-md font-bold">
            <h3 className="grid justify-center bg-gray-400/30 p-1 rounded-t-md">
              Skills
            </h3>
            <p className="grid whitespace-normal break-words p-1 justify-center text-gray-900">
              {skillsList}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
