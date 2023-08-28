import { useState } from "react";
import { projects1, projects2, projects3 } from "../assets/project-list";
import { motion } from "framer-motion";
import { animateH1, animatePic } from "../assets/animation";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export const Projects: React.FC = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.6 },
  };

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
            alt={"project screenshot"}
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
    <div id="projects" className="overflow-hidden">
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
        {/* Adjust text size when displaying 6 projects (md:text-base lg:text-xl) - with 5 - leave blank*/}
        <div className={`item-container mt-6 md:mt-10 md:text-base lg:text-xl`}>
          {renderProjectRow(projects2)}
        </div>

        {/* hidden accordion rows */}
        <Accordion
          open={open === 1}
          animate={customAnimation}
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true }}
            variants={animatePic}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="-mb-2 border-none pb-0 text-primary hover:text-secondary"
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              <div className="py-1">More</div>
            </AccordionHeader>
          </motion.div>
          <AccordionBody className="pb-0">
            <div
              className={`item-container mt-2 md:mt-3 md:text-base lg:text-xl`}
            >
              {renderProjectRow(projects3)}
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};
