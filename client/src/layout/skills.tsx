import { MutableRefObject } from "react";
import {
  skills1,
  skills2,
  skills3,
  skills4,
  skills5,
  skills6,
} from "../assets/skills-list";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

interface SkillsProps {
  skillsRef: MutableRefObject<null>;
}

export const Skills: React.FC<SkillsProps> = ({ skillsRef }) => {
  const { scrollYProgress } = useScroll({
    target: skillsRef,
    // offset - starts when start of element meets top(start) of viewport - ends when end of element meets top(start) of viewport
    offset: ["start start", "end start"],
  });
  //add spring effect
  const scrollYspring = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 40,
    restDelta: 0.0001,
  });

  const xLeft55 = useTransform(scrollYspring, [0.25, 0.5], ["0vw", "-55vw"]);
  const xRight55 = useTransform(scrollYspring, [0.25, 0.5], ["0vw", "55vw"]);
  const xLeft50 = useTransform(scrollYspring, [0.3, 0.5], ["0vw", "-50vw"]);
  const xRight50 = useTransform(scrollYspring, [0.3, 0.5], ["0vw", "50vw"]);
  const xLeft45 = useTransform(scrollYspring, [0.35, 0.5], ["0vw", "-45vw"]);
  const xRight45 = useTransform(scrollYspring, [0.35, 0.5], ["0vw", "45vw"]);

  const renderSkillGroup = (
    skills: { src: string; alt: string; title: string; dark?: string }[],
    shiftValue: MotionValue<string> | undefined
  ) => {
    return (
      /* change space-x when switching from 6 <--> 7 items */
      <motion.div
        style={{ x: shiftValue }}
        className=" flex space-x-10 md:space-x-12 lg:space-x-24 "
      >
        {renderSkills(skills)}
      </motion.div>
    );
  };
  const renderSkills = (
    skills: { src: string; alt: string; title: string; dark?: string }[]
  ) => {
    return skills.map(({ src, alt, title, dark }) => {
      return (
        <div
          className={`w-"1/3" flex flex-col items-center transition-all duration-500`}
        >
          <img
            src={src}
            alt={alt}
            className={`${dark ? dark : ""} h-14 w-14 lg:h-16 lg:w-16`}
          />
          <div className="flex w-20 justify-center">{title}</div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4 overflow-hidden text-secondary md:space-y-8 lg:space-x-0">
      {/* 6 in a row down to md screen // 3 per row on mobile */}
      {/* 6-in row - lg:space-x-24 md:space-x-12; 7-in row lg:space-x-16 md:space-x-9 */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-12 md:space-y-0 lg:space-x-24">
        {/* 1st 3 itmes */}
        {renderSkillGroup(skills1, xLeft55)}
        {/* 2nd next 3 */}
        {renderSkillGroup(skills2, xRight55)}
        {/* ----- Adding additional skills -- conditional rendering when 7 in a row ----- */}
        {/* <div className="hidden md:flex">{renderSkillGroup(skills2_1)}</div> */}
      </div>
      {/* 2nd ROW of 6 */}
      <div className="flex flex-col space-y-4 md:mb-5 md:flex-row md:space-x-12 md:space-y-0 lg:space-x-24">
        {/*3rd  3 items */}
        {renderSkillGroup(skills3, xLeft50)}
        {/* 4th 3 items */}
        {renderSkillGroup(skills4, xRight50)}
        {/* ---- Adding additional skills -- conditional rendering 7 items ----- */}
        {/* <div className=" mx-auto flex space-x-10 md:space-x-9 lg:space-x-16 ">
          {renderSkills(skills4_1)}
          <div className="flex md:hidden"> {renderSkills(skills2_1)}</div>
        </div> */}
      </div>
      {/* 3rd ROW of 6 */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-12 md:space-y-0 lg:space-x-24 ">
        {/*5th  3 items */}
        {renderSkillGroup(skills5, xLeft45)}
        {/* 6th 3 items */}
        {renderSkillGroup(skills6, xRight45)}
      </div>
    </div>
  );
};

/* let position = 400;

  const posChange = () => {
    if (position <= -300) {
      position = 300;
    } else if (position === 100) {
      position -= 200;
    } else {
      position -= 100;
    }
    console.log(position);
    return position;
  }; */
