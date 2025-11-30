import Image from "next/image";
import Link from 'next/link'
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
      <nav className="mb-2 flex flex-col justify-center items-center w-full">
        <ul className="flex flex-wrap gap-0.1 justify-center sm:justify-left space-x-2 w-7/11 py-1 px-2">
          {buttonList?.map((item) => (
            <li key={item}>
              <Link
                href={item === "About" ? "/":`/${item.toLocaleLowerCase()}`}
                className={`text-sm lg:text-md ${
                  activeButton === item
                    ? "border-amber-500 text-amber-600"
                    : " text-gray-600 hover:text-amber-800"
                }`}
                onClick={() => {
                  if (activeButton !== item) handleButtonClick(item);
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Presentation;
