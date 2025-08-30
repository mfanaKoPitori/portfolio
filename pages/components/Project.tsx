import Image from "next/image";

type ProjectProps = {
  projectName: string;
  projectDesc: string;
  imageName: string;
  imageWidth: number;
  imageHeight: number;
  stackList: string[];
};

export default function Project({
  projectName,
  projectDesc,
  imageName,
  imageWidth,
  imageHeight,
  stackList,
}: ProjectProps) {
  return (
    <section className="grid bg-gray-300/50 space-y-2 py-2 px-4 rounded-md">
      <p className=" m-0 font-bold text-lg text-center p-2">{projectName}</p>
      <section className="w-full grid lg:flex lg:justify-between space-y-2 lg:space-x-4 lg:align-baseline">
        <section className="lg:w-3/6 bg-black rounded-md justify-items-center">
          <Image
            src={imageName}
            height={imageHeight}
            width={imageWidth}
            alt={`${projectName}_logo`}
            className=" bg-black rounded-md p-2"
          />
        </section>

        <section className="text-xs p-0 lg:w-3/6">
          <p className="p-2 text-left">{projectDesc}</p>
          <section className="p-2 text-xs text-left flex space-x-2">
            <h5 className="w-1/5">Tech stack:</h5>
            <ul className="flex space-x-2 flex-wrap w-4/5">
              {stackList?.map((skill, index) => (
                <li key={index}> {skill}</li>
              ))}
            </ul>
          </section>
        </section>
      </section>

      <section className="flex space-x-4 w-full text-xs text-left justify-center">
        <section className="grid space-x-2 bg-gray-300 p-4 rounded-md">
          <h5 className="font-bold">Repository link</h5>
          <a
            href="http://google.com"
            className="text-purple-700 underline pl-4"
          >
            {projectName}
          </a>
        </section>

        <section className="grid space-x-2 bg-gray-300 p-4 rounded-md">
          <h5 className="font-bold">Live demo link</h5>
          <a
            href="http://google.com"
            className="text-purple-700 underline pl-4"
          >
            {projectName}
          </a>
        </section>
      </section>
    </section>
  );
}
