import React from "react";
import SubHeading from "../abs-headings/sub-heading";
import DarkHoverBtn from "../ui/button/darkHoverBtn";
import LightBtn from "../ui/button/lightBtn";

const HomeCards = props => {
  const { cardName, paragraph, btn } = props;
  return (
    <div className="bg-darkBlue flex flex-col relative rounded-md border text-start border-foreground/30  p-6 h-full ">
      <SubHeading color="white">
        {cardName}
      </SubHeading>
      <p className="mt-1 mb-8 text-white font-rubik text-[16px] font-normal ">
        {paragraph}
      </p>
      <div className="flex-1 min-h-[20px]" />
      <div className="text-end">
        <LightBtn btnLink={btn.prompt}>
          {btn.text}
        </LightBtn>
      </div>
    </div>
  );
};

export default HomeCards;
