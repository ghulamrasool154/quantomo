import Header from "@/layout/header";
import Image from "next/image";
import React from "react";
const HomeHero = ({ content }) => {

  const sendChatBotMessage = (message) => {
    const iframe = document.getElementById("deep-thought-iframe");
    if (iframe) {
      iframe?.contentWindow?.postMessage(
        { type: "deep-thought-send-message", value: message },
        "*"
      );
    }
  };
  

  return (
    <>
      <section className="hero-section relative w-full overflow-hidden h-[790px] transition-all duration-500">
        <video
          controls={false}
          muted
          autoPlay={true}
          loop={true}
          playsInline
          src="/quantomo_intro.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/quantomo_intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-5"></div>
        <div className="relative z-10 flex flex-col  h-[700px]  px-5">
          <div className="max-w-maxWidth m-auto">
            <h1 className="text-4xl sm:text-5xl  !mb-2 mw-5:text-[28px] mw-5:leading-normal text-white inline-block mt-2  font-medium !mw-5:m-0">
              {content.header}
            </h1>
            <h2 className="text-3xl sm:text-3xl  mw-5:!mx-0 mw-5:!my-4 mw-5:text-2xl !mb-2 text-white inline-block mt-2  font-medium">
              {content.subHeader}
            </h2>
            <p className=" leading-relaxed text-white">{content.content}</p>
           <button 
           onClick={() => sendChatBotMessage(content.buttonLink)}
           className="cursor-pointer bg-backgroundClr mt-6 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-white border border-white rounded-full hover:bg-white hover:text-primary h-10 px-4 py-2">
              {content.buttonText}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
