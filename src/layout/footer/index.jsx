import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  let links = [
    {
      href: "https://x.com/rakniuae",
      src: "/x.svg",
      name: "x"
    },
    {
      href: "https://www.linkedin.com/company/rakni-investment-development/",
      src: "/linkedin.svg",
      name: "linkedin"
    },
    {
      href: "https://www.instagram.com/rakni.ae",
      src: "/instagram.svg",
      name: "instagram"
    },
    {
      href:
        "https://www.facebook.com/profile.php?id=61564635794140&amp;mibextid=LQQJ4d",
      src: "/facebook.svg",
      name: "facebook"
    }
  ];
  return (
    <footer className="bg-darkBlue  border-t border-primary/10 p-3  ">
      <div className="max-w-maxWidth mx-auto ">
        <div className="flex justify-between items-end mw-5:items-center mb-5">
          <Image
            width={100}
            height={100}
            src="/assets/logo.png"
            title="logo"
            className="h-12 w-auto mt-2.5 mw-5:!h-8 mw-5:mt-0 invert"
            alt="logo"
          />
          <div className="flex gap-2">
            {links.map((link, index) => {
              return (
                <Link target="_blank" href={link.href} key={index}>
                  <Image
                    width={50}
                    height={50}
                    src={`/assets/social${link.src}`}
                    title={link.name}
                    className="h-5 w-auto brightness-[10]"
                    alt="social-links"
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <p className="text-sm mb-1 text-white">E: contact@qauntomo.com</p>
        <p className="text-sm text-white">Seattle WA, USA 🇺🇸</p>
        <p className="text-xs text-gray-400 pt-3">
          Copyright © 2024 Quantomo All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
