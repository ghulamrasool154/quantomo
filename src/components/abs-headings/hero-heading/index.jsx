import react from "react";

const HeroHeading = ({ children }) => {
  return (
    <h1 className="text-5xl text-primary mw-10:text-4xl mw-7:text-3xl font-semibold mb-2 w-full">
      {children}
    </h1>
  );
};

export default HeroHeading;
