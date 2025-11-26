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
      <nav className="mb-2">
        <ul className="flex flex-wrap justify-center sm:justify-left gap-2 w-full py-1 px-2">
          {buttonList?.map((item) => (
            <li key={item}>
              <Link
                href={item === "About" ? "/":`/${item.toLocaleLowerCase()}`}
                className={`text-sm lg:text-md ${
                  activeButton === item
                    ? "border-amber-500 text-amber-600 font-semibold"
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
