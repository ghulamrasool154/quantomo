"use client";
import HeroHeading from "@/components/abs-headings/hero-heading";
import MainHeading from "@/components/abs-headings/main-heading";
import SubHeading from "@/components/abs-headings/sub-heading";
import MapScreen from "@/components/contact/map";
import DarkHoverBtn from "@/components/ui/button/darkHoverBtn";
import LightBtn from "@/components/ui/button/lightBtn";
import Image from "next/image";
import React from "react";

const ContactUsPageScreen = ({ content }) => {
  return (
    <div className="contact-page-screen flex items-center justify-center">
      <div className="border-secondary/30 pt-20 flex-col flex justify-center  px-5">
        <div className="max-w-maxWidth flex flex-col justify-center items-center">
          <div className="mx-auto  my-20 mw-10:my-10">
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
              <DarkHoverBtn  btnLink={content.content[0].buttonLink}>
                {content.content[0].buttonText}
              </DarkHoverBtn>
            </div>
            {/* hero section end */}

            {/* Contact Information Section Start */}
            <div className="section-contact-information  border border-secondary/30 py-5  rounded-xl px-5  bg-darkBlue">
              <SubHeading color="white">
                {content.content[1].header}
              </SubHeading>
              <p className="text-white mb-12 line-clamp-3">
                {content.content[1].content}
              </p>
              <div className="flex flex-row mw-7:flex-col justify-between items-start">
                <div className="max-w-[32%] mw-7:max-w-[100%]">
                  <SubHeading color="white">
                    {content.content[1].subSections[0].subHeader}:
                  </SubHeading>
                  <p className="text-white mb-4 line-clamp-3">
                    {content.content[1].subSections[0].content}
                  </p>
                </div>
                <div className="max-w-[32%] mw-7:max-w-[100%]">
                  <SubHeading color="white">
                    {content.content[1].subSections[1].subHeader}:
                  </SubHeading>
                  <p className="text-white mb-4 line-clamp-3">
                    {content.content[1].subSections[1].content}
                  </p>
                </div>
                <div className="max-w-[32%] mw-7:max-w-[100%]">
                  <SubHeading color="white">
                    {content.content[1].subSections[2].subHeader}:
                  </SubHeading>
                  <p className="text-white mb-4 line-clamp-3">
                    {content.content[1].subSections[2].content}
                  </p>
                </div>
              </div>
            </div>
            {/* Contact Information Section End */}
          </div>
          <div className="max-w-[800px]">
            {/* Request Live Demo Section Start  */}
            <div className="mb-[80px] mw-10:mb-10 px-4 md:px-[10%] border relative border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-8 bg-darkBlue overflow-hidden">
              <div className="z-10 flex flex-col justify-center items-center">
                <MainHeading color="white">
                  {content.content[2].header}
                  <p className="h-4" />
                </MainHeading>
                <p className="text-white mt-5 text-center mb-8">
                  {content.content[2].content}
                </p>
                {/* <a href="https://signup.vogon.cloud"> */}
                <LightBtn  btnLink={content.content[2].buttonLink}>
                  {content.content[2].buttonText}
                </LightBtn>
                {/* </a> */}
              </div>
            </div>
            {/* Request Live Demo Section End  */}

            {/* Find US Section Start  */}
            <div className="mb-[80px] mw-10:mb-10">
              <MainHeading color="primary">
                {content.content[3].header}
              </MainHeading>
              <div className="my-4  text-justify font-normal text-secondary">
                {content.content[3].content}
              </div>
              <div className="px-4 pb-4">
                <MapScreen />
              </div>
            </div>
            {/* Request Live Demo Section End  */}

            {/* Follow Section Start  */}
            <div className="mb-[80px] mw-10:mb-10">
              <MainHeading color="primary">
                {content.content[4].header}
              </MainHeading>
              <div className="my-4  text-justify font-normal text-secondary">
                {content.content[4].content}
              </div>

              <div className="flex flex-row w-[200px] justify-between ">
                <a href={content.content[4].links[0].url} target={"_blank"}>
                  <div className=" h-[60px]   border  border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-2 bg-background-2/40 ">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/assets/social/x.svg"
                        height={40}
                        width={40}
                        alt="social-logo"
                      />
                    </div>
                  </div>
                </a>

                <a href={content.content[4].links[1].url} target={"_blank"}>
                  <div className=" h-[60px]  border  border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-2 bg-background-2/40 ">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/assets/social/linkedin.svg"
                        height={40}
                        width={40}
                        alt="social-logo"
                      />
                    </div>
                  </div>
                </a>

                <a href={content.content[4].links[2].url} target={"_blank"}>
                  <div className=" h-[60px]  border  border-black/10 rounded-[12px]  flex justify-center items-center p-2 bg-background-2/40 ">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/assets/social/facebook.svg"
                        height={40}
                        width={40}
                        alt="social-logo"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* Follow Section End  */}

            {/* Get Started With Quantomo Section Start  */}
            <div className="mb-20 mw-10:mb-10 px-4 md:px-[10%] border relative border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-8 bg-darkBlue overflow-hidden">
              <div className="z-10 flex flex-col justify-center items-center">
                <MainHeading color="white">
                  {content.content[5].header}
                  <p className="h-4" />
                </MainHeading>
                <p className="text-white mt-5 text-center mb-8">
                  {content.content[5].content}
                </p>
                {/* <a href="https://signup.vogon.cloud"> */}
                <LightBtn  btnLink={content.content[5].buttonLink}>
                  {content.content[5].buttonText}
                </LightBtn>
                {/* </a> */}
              </div>
            </div>
            {/* Get Started With Quantomo Section End  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPageScreen;
