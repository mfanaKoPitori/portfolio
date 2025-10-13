import React from "react";
import { useState } from "react";
import Presentation from "./Presentation";

interface HeaderInfoProps {
  fullname: string;
  bio: string[];
}

function Header() {
  const [headerInfo, _] = useState<HeaderInfoProps>({
    fullname: "Raymond Mawina",
    bio: [
      `I am a Software Developer based in Pretoria, South Africa.`,
      `I specialize in backend because I love tinkering with complex
            systems that enable the web and other platforms.`,
      ` I specialize in backend because I love tinkering with complex
            systems that enable the web and other platforms.`,
    ],
  });
  return <Presentation fullname={headerInfo.fullname} bio={headerInfo.bio} />;
}

export default Header;
