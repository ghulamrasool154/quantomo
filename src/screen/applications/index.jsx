"use client";
import HeroHeading from "@/components/abs-headings/hero-heading";
import MainHeading from "@/components/abs-headings/main-heading";
import SubHeading from "@/components/abs-headings/sub-heading";
import DarkHoverBtn from "@/components/ui/button/darkHoverBtn";
import LightBtn from "@/components/ui/button/lightBtn";
import React from "react";
import Image from "next/image";
const ApplicationsPageScreen = ({ content }) => {
  return (
    <div className="application-page-screen flex items-center justify-center">
      <div className="border-secondary/30 pt-20 flex-col flex justify-center  px-5">
        <div className="max-w-maxWidth flex flex-col">
          <div className="my-20 mw-10:my-10">
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
          {/* introduction section start here */}
          <div className="flex justify-center items-center">
            <div className="max-w-[800px]">
              <div className="mb-[80px] mw-10:mb-10 px-2 md:px-[6%] border relative border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-8 bg-darkBlue overflow-hidden">
                <div className="z-10 flex flex-col text-center justify-center items-center">
                  <MainHeading color="white">
                    {content.content[1].header}
                    <p className="h-4" />
                  </MainHeading>
                  <p className="text-white mt-5 text-center mb-8">
                    {content.content[1].content}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* introduction section ends here */}
          <div className="applicatoin-section mx-auto  ">
            {/* application section starts here */}
            <div className="section-hero">
              <MainHeading color="primary">
                {content.content[2].header}
              </MainHeading>
              <div className="flex flex-wrap justify-between items-center mt-[40px] mw-10:mt-5 ">
                {content.content[2].content.map((item, index) =>
                  <div
                    key={index}
                    className={`border border-secondary/30 py-5 rounded-xl px-5 mb-5 bg-darkBlue  ${index +
                      1 ===
                      content.content[2].content.length &&
                    content.content[2].content.length / 2 !== 0
                      ? "w-full"
                      : "w-[49%]"}  min-h-[340px] flex flex-col justify-between  p-2  mw-10:w-full `}
                  >
                    <div className="flex flex-row  items-center">
                      <Image
                        src={item.icon}
                        height="70"
                        width="70"
                        alt="gics logo"
                      />
                      <SubHeading color="white">
                        {item.sector}
                      </SubHeading>
                    </div>

                    <div>
                      <p className="text-white mb-1">
                        <span className="text-[16px] text-white font-semibold">
                          Group:&nbsp;
                        </span>
                        {item.group}
                      </p>
                      <p className="text-white mb-1">
                        <span className="text-[16px] text-white font-semibold">
                          Industry:&nbsp;
                        </span>
                        {item.industry}
                      </p>
                      <p className="text-white mb-1">
                        <span className="text-[16px] text-white font-semibold">
                          Sub-Industry:&nbsp;
                        </span>
                        {item.subIndustry}
                      </p>
                      <p className="text-white mb-1">
                        <span className="text-[16px] text-white font-semibold">
                          Banefits:
                        </span>&nbsp;
                        {item.benefits}
                      </p>
                    </div>

                    <div className="w-[100%] mt-[10px] flex justify-end">
                      <LightBtn btnLink={item.buttonLink}>
                        {item.buttonText}
                      </LightBtn>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* application section ends here */}
            {/* summary section start here */}

            <div className="summary-hero mw-10:mt-[30px] mt-[70px] mw-10:mb-10 mb-[80px]">
              <SubHeading color="primary">
                {content.content[3].header}
              </SubHeading>
              <p className="text-secondary mb-6 w-full">
                {content.content[3].content}
              </p>
            </div>

            {/* summary section ends here */}
          </div>
          {/* call to action section starts here */}
          <div className="flex justify-center items-center">
            <div className="max-w-[800px]">
              {/* Join the Quantum Data Section Start  */}
              <div className="mb-[80px] mw-10:mb-10 px-4 md:px-[10%] border relative border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-8 bg-darkBlue overflow-hidden">
                <div className="z-10 flex flex-col justify-center text-center items-center">
                  <MainHeading color="white">
                    {content.content[4].header}
                    <p className="h-4" />
                  </MainHeading>
                  <p className="text-white mt-5 text-center mb-8">
                    {content.content[4].content}
                  </p>

                  <LightBtn btnLink={content.content[4].buttonLink}>
                    {content.content[4].buttonText}
                  </LightBtn>
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

export default ApplicationsPageScreen;
