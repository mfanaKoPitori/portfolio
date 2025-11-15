import Image from "next/image";
import React from "react";

interface NavigationTabsInfoProps {
  activeButton: string;
  buttonList: string[];
  handleButtonClick(item: string): void;
}

const Presentation: React.FC<NavigationTabsInfoProps> = ({
  activeButton,
  buttonList,
  handleButtonClick,
}) => {
  return (
    <>
      <nav className="mb-2">
        <ul className="flex flex-wrap justify-left sm:justify-left gap-2 w-full py-1 px-2">
          {buttonList?.map((item) => (
            <li key={item}>
              <button
                className={`w-fit sm:w-24 text-lg lg:text-xl rounded-t-md border-b-2 transition-colors duration-200 ${
                  activeButton === item
                    ? "border-amber-500 text-amber-600 font-semibold"
                    : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
                }`}
                onClick={() => {
                  if (activeButton !== item) handleButtonClick(item);
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Presentation;
