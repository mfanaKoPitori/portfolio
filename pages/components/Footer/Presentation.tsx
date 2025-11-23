import Image from "next/image";
import React from "react";

interface FooterInfoProps {
  nickname: string;
}

const Presentation: React.FC<FooterInfoProps> = ({ nickname }) => {
  return (
    <>
      <footer className="w-full">
        <section className="flex flex-col justify-center items-center text-center space-y-1 w-full max-w-5xl p-1 border border-amber-400/40 rounded-md shadow-sm mx-auto">
          <p className="text-gray-700 text-sm sm:text-base">
            🪄 Forged in code by{" "}
            <span className="font-semibold text-amber-500">{nickname}</span> ·
            2025
          </p>
        </section>
      </footer>
    </>
  );
};

export default Presentation;
