import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]"
      >
        I am a technical field developer who has the basic proficiency in
        Software Development, Embedded Systems, Artifical Intelligence,
        <br className="sm:block hidden" />
        3D-Design and Game Development. I aspire to grab any oppurtunities given
        to enhance my overall technical skills to an unprecedented heights.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {/* Modify the services, ie ur skills in index.js */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* <span className="hash-span">&nbsp;</span>
      <span className="hash-span">&nbsp;</span>
      <span className="hash-span">&nbsp;</span>
      <span className="hash-span">&nbsp;</span>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I learnt so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Learning Journey.
        </h2>
      </motion.div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
