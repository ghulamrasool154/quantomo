"use client";
import HeroHeading from "@/components/abs-headings/hero-heading";
import MainHeading from "@/components/abs-headings/main-heading";
import SubHeading from "@/components/abs-headings/sub-heading";
import DarkHoverBtn from "@/components/ui/button/darkHoverBtn";
import LightBtn from "@/components/ui/button/lightBtn";
import React from "react";

const TechnologyPageScreen = ({ content }) => {
  return (
    <div className="about-page-screen flex items-center justify-center">
      <div className="border-secondary/30 pt-20 flex-col flex justify-center  px-5">
        <div className="max-w-maxWidth flex flex-col ">
          <div className="fl my-20 mw-10:my-5">
            {/* hero section start */}
            <div className="section-hero">
              <HeroHeading>
                {content.content[0].header}
              </HeroHeading>
              <SubHeading color="primary">
                {content.content[0].subHeader}
              </SubHeading>
              <p className="text-secondary mb-6 w-full">
                {content.content[0].content}
              </p>
              <DarkHoverBtn btnLink={content.content[0].buttonLink}>
                {content.content[0].buttonText}
              </DarkHoverBtn>
            </div>
            {/* hero section end */}
          </div>
          {/* application section starts here */}
          <div className="section-hero">
            <div className="flex flex-wrap justify-between  mw-10:items-start  items-center mt-[20px] mw-10:mt-[5px] ">
              {content.content.slice(1, 6).map((item, index) =>
                <div
                  key={index}
                  className={`border min-h-[215px]  mw-10:text-start text-center border-secondary/30 mw-10:py-3 py-5  mw-10:px-3 px-5 rounded-xl mb-5 bg-darkBlue   ${index ===
                  0
                    ? "w-full"
                    : "w-[49%]"}  p-2  mw-10:w-full  mw-10:h-auto `}
                >
                  <SubHeading color="white">
                    {item.header}
                  </SubHeading>
                  <p className="text-white mb-6">
                    {item.content}
                  </p>
                  <LightBtn btnLink={item.links[0].prompt}>
                    {item.links[0].text}
                  </LightBtn>
                </div>
              )}
            </div>
          </div>
          {/* application section ends here */}

          {/* call to action section starts here */}
          <div className="flex flex-row justify-center items-center">
            <div className="max-w-[800px] mw-10:mt-[30px] mt-[70px] ">
              {/* Join the Quantum Data Section Start  */}
              <div className="mb-[80px] mw-10:mb-[40px] px-4 md:px-[8%] border relative border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-8 bg-[#fff] overflow-hidden">
                <div className="z-10 flex flex-col text-center  justify-center items-center">
                  <MainHeading color="primary">
                    {content.content[6].header}
                  </MainHeading>
                  <p className="text-secondary mt-5 text-center mb-8">
                    {content.content[6].content}
                  </p>
                  <DarkHoverBtn btnLink={content.content[6].buttonLink}>
                    {content.content[6].buttonText}
                  </DarkHoverBtn>
                </div>
              </div>
              {/* Join the Quantum Data Section End  */}
            </div>
          </div>

          {/* call to action section ends here */}
        </div>
      </div>
    </div>
  );
};

export default TechnologyPageScreen;
