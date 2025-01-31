import React from "react";
import { projects } from "../constants";
import { motion } from "framer-motion";

const Project = (props) => {
  return (
    <motion.div
      className="px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-white group light:border-white light:hover:bg-transparent feature-card"
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.75, delay: 0.1 }}
    >
      <div className="flex flex-col sm:-mx-4 sm:flex-row">
        <img
          className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
          src={props.image}
          alt=""
        />

        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h1 className="text-xl font-semibold font-poppins text-white capitalize md:text-2xl group-hover:text-white text-gradient">
            {props.title}
          </h1>
          <p className="font-poppins font-normal text-white mt-3">
            Tech Stack
          </p>
          <div className="mt-2 text-white capitalize light:text-white  group-hover:text-white">
            <div className="flex sm:flex-row">
              {props.stack.map((tech, index) => (
                <div
                  key={tech.id}
                  index={index}
                  className="text-white mr-5 text-[20px] hover:text-teal-200 tooltip"
                >
                  {React.createElement(tech.icon)}
                  <span className="tooltiptext">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 text-white  light:text-white  group-hover:text-white font-poppins">
        {props.content}
      </p>

    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-primary">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-gradient ss:leading-[80px] leading-[80px]">
        Projets
      </h1>

      <div className="container px-2 py-10 mx-auto mb-8">
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <Project key={project.id} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
