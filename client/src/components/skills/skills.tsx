import {
  skills1,
  skills2,
  skills2_1,
  skills3,
  skills4,
  skills5,
} from "./skills-list";

export const Skills = () => {
  const renderSkillGroup = (
    skills: { src: string; alt: string; title: string; dark?: string }[]
  ) => {
    return (
      <div className=" flex space-x-10 md:space-x-9 lg:space-x-16 ">
        {renderSkills(skills)}
      </div>
    );
  };
  const renderSkills = (
    skills: { src: string; alt: string; title: string; dark?: string }[]
  ) => {
    return skills.map(({ src, alt, title, dark }) => {
      return (
        <div className={`w-"1/3" flex flex-col items-center`}>
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
    <div className="flex flex-col items-center space-y-4 text-secondary md:space-y-8 lg:space-x-0">
      {/* 6 in a row down to md screen // 3 per row on mobile */}
      {/* 6-in row - lg:space-x-24 md:space-x-12; 7-in row lg:space-x-16 md:space-x-9 */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-9 md:space-y-0 lg:space-x-16">
        {/* 1st 3 itmes */}
        {renderSkillGroup(skills1)}
        {/* 2nd next 3 */}
        {renderSkillGroup(skills2)}
        {/* ----- Adding additional skills -- conditional rendering ----- */}
        <div className="hidden md:flex">{renderSkillGroup(skills2_1)}</div>
      </div>
      {/* 2nd ROW of 6 */}
      <div className="flex flex-col space-y-4 md:mb-5 md:flex-row md:space-x-9 md:space-y-0 lg:space-x-16">
        {/*3rd  3 items */}
        {renderSkillGroup(skills3)}
        {/* 4th 3 items */}
        {renderSkillGroup(skills4)}
        {/* ---- Adding additional skills -- conditional rendering ----- */}
        <div className=" mx-auto flex space-x-10 md:space-x-9 lg:space-x-16 ">
          {renderSkills(skills5)}
          <div className="flex md:hidden"> {renderSkills(skills2_1)}</div>
        </div>
      </div>
      {/* 3rd ROW of 6 */}
      {/*   <div className="flex flex-col space-y-4 md:flex-row md:space-x-12 md:space-y-0 lg:space-x-24 "> */}
      {/*5th  3 items */}

      {/* 6th 3 items */}
      {/* </div> */}
    </div>
  );
};
