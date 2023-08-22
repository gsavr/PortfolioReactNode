import { useRef } from "react";
import photo from "../images/me.jpg";
import { Skills } from "./skills/skills";
import { motion } from "framer-motion";
import {
  animateH1,
  animatePic,
  animatefromLeft,
  animatefromRight,
} from "./animation";
//import { Link } from "react-scroll";

export const About: React.FC = () => {
  const skillsRef = useRef(null);

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
              Full-Stack Software Engineer specialized in React.js, JavaScript,
              Typescript, HTML/CSS, TailwindCSS, Node.js, with an objective to
              develop websites and applications that are client-driven while
              ensuring that they are straightforward and engaging for the end
              user.
            </p>
            <p className="text-md md:text-lg">
              I aim to use my design, development and other skills while
              continuously advancing my skill set through additional programming
              and career development to remain at the forefront of an
              ever-changing technology landscape. In my free time, I am
              continuously learning new technologies and building projects, I
              also like to read fiction and travel.
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
