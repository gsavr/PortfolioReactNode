import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { NavBar } from "./navBar";
import { Link } from "react-scroll";

export const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset - starts when start of element meets start of viewport - ends when end of element meets start of viewport
    offset: ["start start", "end start"],
  });
  //add spring effect
  const scrollYspring = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 15,
    restDelta: 0.0001,
  });

  //checks scroll - at value 0 we want to be at 0%, at value 1, we want to be at 100%
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundFrontY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const navY = useTransform(scrollYspring, [0, 0.05], ["0%", "-200%"]);
  const boxesScale = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  // const yRight = useTransform(scrollYProgress, [0, 1], ["0vh", "200vh"]);
  // const xRight = useTransform(scrollYProgress, [0, 1], ["0vw", "200vw"]);
  // const xLeft = useTransform(scrollYProgress, [0, 1], ["0vw", "-200vw"]);

  return (
    <div id="hero" ref={ref} className="hero relative overflow-hidden">
      {/* background full image */}
      <motion.div
        style={{ y: backgroundY }}
        className="hero-bg absolute inset-0 z-0"
      />
      {/* background w/o view */}
      <motion.div
        style={{ y: backgroundFrontY }}
        className="hero-bg-front absolute inset-0 z-10"
      />
      {/* gradient for top of image - will not have parallax effect */}
      <div className="gradient-bg relative z-20">
        <div className="container z-30 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12">
          <motion.div style={{ y: navY }}>
            <NavBar />
          </motion.div>

          <motion.div
            style={{ scale: boxesScale }}
            className="group flex flex-1 flex-col items-center justify-center lg:flex-row lg:justify-between"
          >
            <motion.div
              initial={{ opacity: 0, x: "-35vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2, bounce: 0.3 }}
            >
              <div className={`hero-box`}>
                <p className="pb-3 text-2xl md:pb-6 md:text-5xl lg:pb-7">
                  Welcome {"</>"}
                </p>
                <p className="text-4xl text-primary transition-all duration-1000 md:text-6xl lg:group-hover:text-[4rem] ">
                  Giorgio Savron
                </p>
                <p>Full Stack Developer</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "35vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2.5, bounce: 0.3 }}
            >
              <Link to="about" className={`hero-enter-button`}>
                <p>Enter</p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
