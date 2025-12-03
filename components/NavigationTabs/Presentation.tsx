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
      <nav className="mb-2 flex flex-col items-center w-10/11 lg:w-8/11 xl:w-6/11 space-y-2 text-xs text-gray-600">
        <ul className="flex flex-wrap gap-0.1 justify-between space-x-2 w-7/11 py-1 px-2">
          {buttonList?.map((item) => (
            <li key={item}>
              <Link
                href={item === "About" ? "/":`/${item.toLocaleLowerCase()}`}
                className={`text-sm lg:text-md ${
                  activeButton === item
                    ? "green-amber-500 text-rose-600/90"
                    : "text-rose-400/60 hover:text-rose-800"
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
