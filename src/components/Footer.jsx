import React from "react";
import { socialMedia, aboutMe } from "../constants";
import { profilePic } from "../assets";
import { layout } from "../style";

const Footer = () => (
  <footer id="contactMe" className="bg-gray-900 sm:px-16 px-6 w-full text-center">
    <div
      className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4 `}
    >
      <div className={` ${layout.sectionInfo}`}>
        <h3 className="text-gray-400 text-lg font-bold mb-4">
          {aboutMe.name}
        </h3>
        <p
          className={`font-poppins font-normal text-gray-400 text-[16px] leading-[30.8px] max-w-[470px] mt-5`}
        >
        {aboutMe.tagLine}
        </p>
        <div className="flex flex-row mt-4 ml-130  text-center">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              index={index}
              className="text-white mr-5 text-[25px] hover:text-white"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>

      </div>

      
    </div>
    
  </footer>
);

export default Footer;
