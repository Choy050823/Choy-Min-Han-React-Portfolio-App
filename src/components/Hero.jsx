import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { isMobile } from "react-device-detect";
import { profilePic } from "../assets";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-no-repeat bg-center`}
    >
      <div
        className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <br />
            <span>Choy Min Han</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            I am a digital maker who <br className="sm:block hidden" />
            likes to create technical projects!
          </p>
        </div>

        {!isMobile && (
          <motion.div
            className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] ml-auto mr-4 mt-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute w-full h-full border-4 border-transparent rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-spin-slow">
              <div className="absolute w-full h-full border-4 border-purple-500 rounded-full shadow-[0_0_20px_rgba(147,94,255,0.7)] animate-pulse-slow">
                <img
                  src={profilePic}
                  alt="Choy Min Han"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(147,94,255,0.8),0_0_40px_rgba(0,255,255,0.3)]" />
          </motion.div>
        )}
      </div>

      {isMobile && (
        // <section
        //   className={`relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-no-repeat bg-center bg-gradient-to-br from-gray-900 to-black`}
        // >
        <div
          className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-center text-center`}
        >
          <motion.div
            className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute w-full h-full border-4 border-purple-500 rounded-full shadow-[0_0_20px_rgba(147,94,255,0.7)] animate-pulse-slow">
              <img
                src={profilePic}
                alt="Choy Min Han"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
          {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6"
            >
              <h1 className={`${styles.heroHeadText}`}>
                <span className="text-purple-400">Hi, I'm</span> <br />
                <span className="text-white">Choy Min Han</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2`}>
                I am a digital maker who likes to create technical projects!
              </p>
            </motion.div> */}
        </div>
      )}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
