import React from "react";
import { skills } from "../constants";
import { layout } from "../style";
import { motion } from "framer-motion";

export const SkillIcon = ({ icon, name }) => {
  return (
    <div className="flex flex-col">
      <span className="text-white text-[30px] hover:text-teal-200">
        {React.createElement(icon)}
      </span>
      <p className="font-poppins text-white text-[12px] mt-2">{name}</p>
    </div>
  );
};

const SkillCard = (props) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="mt-4 mb-6 border-l border-gray-200 dark:border-gray-700 mx-4"
    >
      <div className="relative w-3 h-3 bg-gray-200 rounded-full top-5 right-[6.2px] border dark:border-gray-900 dark:bg-gray-700"></div>
      <div className="flex flex-row items-center mb-6 ml-6">
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
          {props.title}
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-8 ml-8">
        {props.items.map((item, index) => (
          <SkillIcon key={item.id} index={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};


const SkillsAndExperience = () => {
  return (
    <section id="skills" className="mb-12 ">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-gradient ss:leading-[80px] leading-[80px]">
        Skills
      </h1>
      <div
        className={layout.section}
        // whileInView={{ y: [-20, 0], opacity: [0, 1] }}
        // transition={{ duration: 0.5 }}
      >
        {/* Skills */}
        <motion.div className={`ml-6 mb-6  ${layout.sectionInfo}`}>
          {skills.map((skill, index) => (
            <SkillCard key={index} index={index} {...skill} />
          ))}
        </motion.div>

      
      </div>
    </section>
  );
};

export default SkillsAndExperience;
