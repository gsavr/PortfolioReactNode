import { motion } from "framer-motion";
import { NavBar } from "./navBar";

export const Hero: React.FC = () => {
  return (
    <div id="hero" className="hero gradient-bg overflow-x-hidden">
      <div className="container mx-auto min-h-screen max-w-6xl px-6 py-12">
        <NavBar />

        <div className="group flex flex-col lg:flex-row lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: "-110vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1, bounce: 0.3 }}
          >
            <div className={`hero-box`}>
              Hello, I'm{" "}
              <p className="text-4xl text-primary transition-all duration-1000 md:text-6xl lg:group-hover:text-[4rem] ">
                Giorgio Savron
              </p>
              <p>Full Stack Developer</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "110vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
          >
            <a href="#about" className={`hero-enter-button`}>
              <p>Enter</p>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
