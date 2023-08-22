import { motion } from "framer-motion";
import { NavBar } from "./navBar";
import { Link } from "react-scroll";

export const Hero: React.FC = () => {
  return (
    <div id="hero" className="hero hero-bg overflow-x-hidden">
      <div className="gradient-bg">
        <div className="container mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12">
          <NavBar />

          <div className="group flex flex-1 flex-col items-center justify-center lg:flex-row lg:justify-between">
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
          </div>
        </div>
      </div>
    </div>
  );
};
