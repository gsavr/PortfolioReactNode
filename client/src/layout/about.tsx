import { useRef } from "react";
import photo from "../images/me.webp";
import { Skills } from "./skills";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  animateH1,
  animatePic,
  animatefromLeft,
  animatefromRight,
} from "../assets/animation";
//import { Link } from "react-scroll";

export const About: React.FC = () => {
  const skillsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skillsRef,
    // offset - starts when start of element meets top(start) of viewport - ends when end of element meets top(start) of viewport
    offset: ["start start", "end start"],
  });

  const mePicY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div id="about" ref={skillsRef} className="overflow-x-hidden">
      {/*  About Me Container  */}
      <motion.h1
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true }}
        variants={animateH1}
      >
        About me
      </motion.h1>
      <div className="container mx-auto flex flex-col items-center px-6 pb-6 md:flex-row md:space-x-16">
        {/*  Image  */}
        <div
          className={`w-2/3 rounded-full transition-all duration-1000 md:w-1/4`}
        >
          <motion.img
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.8 }}
            variants={animatePic}
            className="mb-10 rounded-full shadow-2xl md:w-fit"
            src={photo}
            alt="Giorgio"
            style={{ y: mePicY }}
          />
        </div>

        {/* Who I am  */}
        <div
          className={`flex flex-col items-start transition-all  duration-1500 md:w-2/3`}
        >
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={animatefromRight}
            className="flex flex-col space-y-5 text-secondary"
          >
            <h2 className="max-w-md text-xl font-bold uppercase md:text-4xl">
              who i am:
            </h2>
            <p className="text-md md:text-lg">
              I'm a web developer specializing in React.js, Next.js, Node.js,
              and TypeScript. With four years of experience and a certification
              from the University of Miami Coding Bootcamp, I'm dedicated to
              crafting engaging websites and apps.
            </p>
            <p className="text-md md:text-lg">
              My portfolio reflects a versatile skill set, from creating an
              OpenAI blog generator to a peer-to-peer SMS app and Docker
              containerized solutions. I also have a background in science
              education, which helps me bring effective communication to
              collaborations. My goal is to deliver high-quality, user-friendly
              solutions that fuse technology and creativity. When not coding, I
              explore fiction and travel for inspiration. Let's connect and
              bring your digital ideas to life!"
            </p>
          </motion.div>
        </div>
      </div>

      {/* Skills  */}
      <div
        className={`container mx-auto flex flex-col items-center px-6 transition-all duration-1500  md:pb-16 lg:pb-20`}
      >
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true }}
          variants={animatefromLeft}
          className="flex flex-col space-y-5"
        >
          <h2 className="max-w-md text-xl font-bold uppercase md:text-4xl">
            Skills:
          </h2>
          <Skills skillsRef={skillsRef} />
        </motion.div>

        {/*  Link  */}
        {/* <div className="mt-4 block">
          <Link
            to="projects"
            className="border-accentCyan border-b text-accent"
          >
            See my projects
            <img src="images/icon-arrow.svg" alt="" className="inline pb-2" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};
