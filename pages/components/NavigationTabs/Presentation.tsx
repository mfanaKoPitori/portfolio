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
      <nav className="mb-6">
        <ul className="flex flex-wrap justify-center sm:justify-around gap-3 w-full">
          {buttonList?.map((item) => (
            <li key={item}>
              <button
                className={`w-fit sm:w-24 text-sm py-2 px-4 rounded-t-md border-b-2 transition-colors duration-200 ${
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
