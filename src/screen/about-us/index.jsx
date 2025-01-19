"use client";
import HeroHeading from "@/components/abs-headings/hero-heading";
import MainHeading from "@/components/abs-headings/main-heading";
import SubHeading from "@/components/abs-headings/sub-heading";
import DarkHoverBtn from "@/components/ui/button/darkHoverBtn";
import LightBtn from "@/components/ui/button/lightBtn";
import React from "react";

const AboutUsPageScreen = ({ content }) => {
  return (
    <div className="about-page-screen flex items-center justify-center">
      <div className="border-secondary/30 pt-20 flex-col flex justify-center  px-5">
        <div className="max-w-maxWidth flex flex-col justify-center items-center">
          <div className="mx-auto my-20 mw-10:my-5">
            {/* hero section start */}
            <div className="section-hero mw-10:mb-10 mb-20">
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

            {/* mission section start */}
            <div className="section-hero mw-10:mb-10  mb-20">
              <MainHeading color="primary">
                {content.content[1].header}
              </MainHeading>
              <p className="text-secondary mt-3 mb-6 w-full">
                {content.content[1].content}
              </p>
              <DarkHoverBtn btnLink={content.content[1].links[0].prompt}>
                {content.content[1].links[0].text}
              </DarkHoverBtn>
            </div>
            {/* mission section end */}

            {/* basic section start */}
            <div className="section-hero mw-10:mb-10  mb-20">
              <MainHeading color="primary">
                {content.content[2].header}
              </MainHeading>
              <p className="text-secondary mt-3 mb-6 w-full">
                {content.content[2].content}
              </p>
              <DarkHoverBtn btnLink={content.content[2].links[0].prompt}>
                {content.content[2].links[0].text}
              </DarkHoverBtn>
            </div>
            {/* basic section end */}

            <div className="section-hero mw-10:mb-10  mb-20">
              <MainHeading color="primary">
                {content.content[3].header}
              </MainHeading>
              <p className="text-secondary mt-3 mb-6 w-full">
                {content.content[3].content}
              </p>
              <div className="flex flex-wrap justify-between items-center mt-[40px] mw-10:mt-5 ">
                {content.content[3].subSections.map((item, index) =>
                  <div
                    key={index}
                    className={`border min-h-[220px] border-secondary/30 py-5 rounded-xl px-5 mb-5 bg-darkBlue  ${index +
                      1 ===
                      content.content[3].subSections.length &&
                    content.content[3].subSections.length / 2 !== 0
                      ? "w-full"
                      : "w-[49%]"}   p-2  mw-10:w-full `}
                  >
                    <div className="">
                      <SubHeading color="white">
                        {item.subHeader}
                      </SubHeading>
                    </div>
                    <p className="text-white mt-3 mb-6 w-full">
                      {item.content}
                    </p>
                    <LightBtn btnLink={item.link.prompt}>
                      {item.link.text}
                    </LightBtn>
                  </div>
                )}
              </div>
            </div>
            <div className="section-hero">
              <MainHeading color="primary">
                {content.content[4].header}
              </MainHeading>
              <p className="text-secondary mt-3 mb-6 w-full">
                {content.content[4].content}
              </p>
              <DarkHoverBtn btnLink={content.content[4].buttonLink}>
                {content.content[4].buttonText}
              </DarkHoverBtn>
            </div>
            {/* Contact Information Section End */}
          </div>
          <div className="max-w-[800px]">
            {/* Join the Quantum Data Section Start  */}
            <div className="mb-[80px]  mw-10:mb-[40px] px-4 md:px-[10%] border relative border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-8 bg-darkBlue overflow-hidden">
              <div className="z-10 flex flex-col justify-center items-center">
                <MainHeading color="white">
                  {content.content[5].header}
                  <p className="h-4" />
                </MainHeading>
                <p className="text-white text-center mb-8">
                  {content.content[5].content}
                </p>

                <LightBtn btnLink={content.content[5].buttonLink}>
                  {content.content[5].buttonText}
                </LightBtn>
              </div>
            </div>
            {/* Join the Quantum Data Section End  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPageScreen;
