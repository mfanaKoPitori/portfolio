import React from "react";
import Presentation from "./Presentation";

interface NavigationTabsInfoProps {
  activeButton: string;
  buttonList: string[];
  handleButtonClick(item: string): void;
}

const NavigationTabs: React.FC<NavigationTabsInfoProps> = ({
  activeButton,
  buttonList,
  handleButtonClick,
}) => {
  return (
    <Presentation
      activeButton={activeButton}
      buttonList={buttonList}
      handleButtonClick={handleButtonClick}
    />
  );
};

export default NavigationTabs;
