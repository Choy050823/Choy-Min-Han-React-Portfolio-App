import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { git, github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { isMobile } from "react-device-detect";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 2)}>
    <div>
      {/* <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      > */}
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div> */}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
      {/* </Tilt> */}
      {/* </motion.div> */}
    </div>
  );
};

const Works = () => (
  <>
    {isMobile ? (
      <>
        <div>
          <p className={styles.sectionSubText}>My Projects</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </div>
        <div className="w-full flex">
          <p className="mt-3 text-secondary text-[17px] max-w-7xl leading-[30px]">
            During the past few years, I have created multiple projects which
            involves a wide spectrum of technical skills that I have learnt
            along the way. Please feel free to check it out below!
          </p>
        </div>
      </>
    ) : (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Projects</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3, text-secondary text-[17px] max-w-7xl leading-[30px]"
          >
            I have created multiple projects which involves a wide spectrum of
            technical skills that I have learnt in these few years. Please feel
            free to check it out below!
          </motion.p>
        </div>
      </>
    )}

    <div className="mt-20 flex flex-wrap gap-5 justify-center">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} {...project} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "projects");
