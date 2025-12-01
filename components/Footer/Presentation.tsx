import Image from "next/image";
import React from "react";

interface FooterInfoProps {
  nickname: string;
}

const Presentation: React.FC<FooterInfoProps> = ({ nickname }) => {
  return (
    <>
      <footer className="w-full">
        <section className="flex flex-col justify-center items-center text-center space-y-1 w-full p-1">
          <p className="text-gray-700 text-sm lg:text-md">
            🪄 Forged in code by{" "}
            <span className="font-semibold text-green-500">{nickname}</span> ·
            2025
          </p>
        </section>
      </footer>
    </>
  );
};

export default Presentation;
