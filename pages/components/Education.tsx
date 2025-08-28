import Image from "next/image";

type EducationProps = {
  schoolName: string;
  qualificationName: string;
  imageName: string;
  imageWidth: number;
  imageHeight: number;
  durationDur: string;
  courseHighlights: string;
  skillsList: string[];
};

export default function Education({
  schoolName,
  qualificationName,
  imageName,
  imageWidth,
  imageHeight,
  durationDur,
  courseHighlights,
  skillsList,
}: EducationProps) {
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
              <p className="p-0 m-0">{qualificationName}</p>
              <p>{schoolName}</p>
              <p>{durationDur}</p>
            </div>
          </div>
        </span>

        <div className="grid">
          <div className="flex flex-cols-2 bg-gray-300/60 rounded-md border-l-5 border-green-500">
            <p className="w-11/12 p-2 text-left">{courseHighlights}</p>
          </div>
        </div>

        <div className="flex">
          {/* <p className="bg-green-500 w-1.5 rounded-l-md"></p> */}
          <div className="grid w-full bg-gray-300/80 p-2 rounded-md space-x-1 text-xs lg:text-lg font-bold border-l-5 border-green-500">
            <h3 className="grid justify-center bg-gray-400/30 p-1 rounded-md">
              Core Concepts Learnt
            </h3>
            <ul className="grid grid-cols-1 lg:grid-cols-2 whitespace-normal break-words p-1 justify-left text-gray-900 text-xs xl:text-lg font-bold">
              {skillsList?.map((skill, index) => (
                <li key={index}>- {skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
