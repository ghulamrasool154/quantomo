"use client";
import HeroHeading from "@/components/abs-headings/hero-heading";
import MainHeading from "@/components/abs-headings/main-heading";
import HomeCards from "@/components/home-cards/home-cards";
import HomeHero from "@/components/home-hero";
import ImagesCards from "@/components/images-cards/images-cards";
import DarkHoverBtn from "@/components/ui/button/darkHoverBtn";
import LightBtn from "@/components/ui/button/lightBtn";
import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-easy-marquee";

const HomePageScreen = ({ content, lang }) => {
  const [imagesSlider, setImageSlider] = useState([
    { image: "/assets/vogon.png", name: "vogon" },
    { image: "/assets/vantech.png", name: "vantech" },
    { image: "/assets/tvf.png", name: "tvf" },
    { image: "/assets/iba.png", name: "iba" },
    { image: "/assets/crowdpoint.png", name: "crowdpoint" },
    { image: "/assets/3ndex.png", name: "3ndex" },
    { image: "/assets/vogon.png", name: "vogon" },
    { image: "/assets/vantech.png", name: "vantech" },
    { image: "/assets/tvf.png", name: "tvf" },
    { image: "/assets/iba.png", name: "iba" },
    { image: "/assets/crowdpoint.png", name: "crowdpoint" },
    { image: "/assets/3ndex.png", name: "3ndex" },
    { image: "/assets/vogon.png", name: "vogon" },
    { image: "/assets/vantech.png", name: "vantech" },
    { image: "/assets/tvf.png", name: "tvf" },
    { image: "/assets/iba.png", name: "iba" },
    { image: "/assets/crowdpoint.png", name: "crowdpoint" },
    { image: "/assets/3ndex.png", name: "3ndex" }
  ]);


  //spitiing paragraph
  const paragraph = content.content[1].content;

  // Split the paragraph at "Not anymore!"
  const [firstPart, secondPart] = paragraph.split(
    lang === "en" ? "Not anymore!" : "ليس بعد الآن!"
  );

  // You can further split the second part if needed
  const secondPartWithBreak = secondPart.trim().replace(/(\.)/, "$1<br />");
  return (
    <div className="home-page-screen">
      <HomeHero content={content.content[0]} />
      <div className="trusted-by-wrapper mw-10:pt-10 pt-20 ">
        <div className="max-w-maxWidth mx-auto  px-5">
          <h4 className="text-md text-primary font-rubik ">TRUSTED BY</h4>
          <div className="relative mw-10:mb-10 mb-20 overflow-hidden">
            <div className="z-10 absolute inset-y-0 left-0 bg-gradient-to-r from-[#F8F9FC] to-transparent opacity-90 pointer-events-none  w-[140px]" />
            <Marquee duration={14000} reverse={true}>
              <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row max-w-full relative">
                {/* Marquee content */}
                <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
                  {imagesSlider.map((e, idx) =>
                    <Image
                      key={idx}
                      src={e.image}
                      alt={e.name}
                      width={100}
                      height={36}
                      className="h-[36px] w-auto"
                    />
                  )}
                </div>
              </div>
            </Marquee>
            <div className="z-10 absolute inset-y-0 right-0 bg-gradient-to-l from-[#F8F9FC] to-transparent opacity-90 pointer-events-none w-[140px]" />
          </div>

          {/* Marquee Wrapper */}
          <div className="about-section">
            <div className="top-about-section">
              <div className="w-full flex flex-row items-center mb-4">
                {/* <Image
                  src={"/assets/uae_flag.png"}
                  alt="uae_flag"
                  width={50}
                  height={32}
                  className="h-8 me-3 object-cover"
                /> */}
                <MainHeading color="primary">
                  {content.content[1].header}
                </MainHeading>
              </div>
              <p className="font-rubik mb-5 text-[16px] font-normal text-secondary">
                {firstPart.trim()}
              </p>
              <p className="font-rubik mb-5 text-[16px] font-normal text-secondary">
                {lang === "en" ? "Not Anymore!" : "ليس بعد الآن!"}
              </p>
              <p
                className="font-rubik mb-5 text-[16px] font-normal text-secondary"
                dangerouslySetInnerHTML={{ __html: secondPartWithBreak }}
              />

              <DarkHoverBtn btnLink={content.content[1].links[0].prompt}>
                {content.content[1].links[0].text}
              </DarkHoverBtn>
            </div>
          </div>
          <div className="text-start mw-10:mt-10 mt-20 cards-wrapper">
            <MainHeading color="primary">
              {content.content[2].header}
            </MainHeading>
            <p className="font-rubik text-[16px] mt-5  mb-6  font-normal text-secondary">
              {content.content[2].content}
            </p>
            <div className="grid grid-cols-1 gap-4 mw-10:mb-10 mb-20 sm:grid-cols-2">
              {content.content[2].subSections.map((e, idx) => {
                const isLastOdd =
                  idx % 2 === 0 &&
                  idx === content.content[2].subSections.length - 1;

                return (
                  <div
                    key={idx}
                    className={`col-span-1 ${isLastOdd
                      ? "sm:col-span-2"
                      : "sm:col-span-1"}`}
                  >
                    <HomeCards
                      cardName={e.subHeader}
                      paragraph={e.content}
                      btn={e.link}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/*images card sections started here  */}
        <section className="bg-darkBlue  w-full flex justify-center  py-20  mw-10:py-10   px-5 mw-10:mb-10 mb-20">
          <div className="images-card-wrapper max-w-maxWidth mx-auto ">
            <div className="grid gap-4 sm:grid-cols-4 mw-12:grid-cols-3 mw-8:grid-cols-2 mw-5:grid-cols-1">
              {content.content[3].subSection.map((e, idx) => {
                return (
                  <ImagesCards
                    key={idx}
                    index={idx}
                    texthovered={e.title}
                    imgShown={e.image}
                    icons={e.icon}
                    btnLink={e.buttonLink}
                  />
                );
              })}
            </div>
          </div>
        </section>
        {/*images card ended here  */}

        <div className="w-full px-5 flex flex-col justify-center items-center mw-10:py-0 text-center mw-10:mb-10 mb-20">
          <HeroHeading>
            {content.content[4].header}
          </HeroHeading>

          <div className="border mt-8 border-secondary/30 py-5 rounded-xl px-5 mb-5 bg-darkBlue max-w-maxWidth text-left">
            <p className="text-white mb-4 line-clamp-3">
              {content.content[4].content}
            </p>
            <LightBtn btnLink={content.content[4].buttonLink}>
              {content.content[4].buttonText}
            </LightBtn>
          </div>
        </div>
        <div className="max-w-maxWidth mx-auto px-5 mw-10:mb-10 mb-20">
          <div className="mb-10 px-4 md:px-[10%] border relative border-black/10 rounded-[12px]  flex flex-col justify-center items-center p-8 bg-white overflow-hidden">
            <div className="z-10 flex flex-col text-center justify-center items-center">
              <MainHeading color="primary">
                {content.content[5].header}
                <p className="h-4" />
              </MainHeading>
              <p className="text-secondary/50 mt-6 text-center mb-8">
                {content.content[5].content}
              </p>
              <DarkHoverBtn btnLink={content.content[5].buttonLink}>
                {content.content[5].buttonText}
              </DarkHoverBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageScreen;
