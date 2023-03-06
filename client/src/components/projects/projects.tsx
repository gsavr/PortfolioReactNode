import { projects1, projects2 } from "./project-list";
import { motion } from "framer-motion";
import { animateH1, animatePic } from "../animation";

export const Projects: React.FC = () => {
  const renderProjectRow = (
    list: {
      link: string;
      srcDesk: string;
      srcMobile: string;
      title: string;
      desc: string;
    }[]
  ) => {
    return list.map(({ link, srcDesk, srcMobile, title, desc }) => {
      return (
        <motion.a
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.3 }}
          variants={animatePic}
          href={link}
          className="item group"
          target="_blank"
          rel="noreferrer"
          key={title}
        >
          {/*  Desktop Image  */}
          <img
            className="hidden w-full duration-200 group-hover:scale-110 md:block"
            src={srcDesk}
            alt={title}
          />
          {/*  Mobile Image  */}
          <img className="w-full md:hidden" src={srcMobile} alt={title} />
          {/*  Image gradient  */}
          <div className="item-gradient"></div>
          {/*  Image text  */}
          <div className="project-image-text ">
            <h5 className="uppercase">{title}</h5>
            <p className="project-image-description ">{desc}</p>
          </div>
        </motion.a>
      );
    });
  };

  return (
    <div id="projects" className="overflow-x-hidden">
      <div className="container mx-auto mt-10 max-w-6xl px-6 pb-10 md:mb-32 md:px-8">
        {/*  Projects header  */}
        <div className="mb-6 flex justify-center md:mb-20">
          <motion.h1
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={animateH1}
          >
            projects
          </motion.h1>
        </div>

        {/*  Items Container row 1  */}
        <div className={`item-container`}>{renderProjectRow(projects1)}</div>
        {/*  Items Container row 2  */}
        {/* Adjust text size when displaying 6 projects - with 5 - leave */}
        <div className={`item-container mt-6 md:mt-10 md:text-base lg:text-xl`}>
          {renderProjectRow(projects2)}
        </div>
      </div>
    </div>
  );
};
