import React from "react";
import { useState } from "react";
import Presentation from "./Presentation";

interface FooterInfoProps {
  nickname: string;
}

function Footer() {
  const [footerInfo, _] = useState<FooterInfoProps>({
    nickname: "LeGlaringWizard",
  });
  return <Presentation nickname={footerInfo.nickname} />;
}

export default Footer;
