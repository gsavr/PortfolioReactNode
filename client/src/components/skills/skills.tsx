import { skills1, skills2, skills3, skills4 } from "./skills-list";

export const Skills = () => {
  const renderSkillGroup = (
    skills: { src: string; alt: string; title: string; dark?: string }[]
  ) => {
    return (
      <div className="flex space-x-10 md:space-x-12 lg:space-x-24 ">
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
            className={`${dark ? dark : ""} h-16 w-16 lg:h-20 lg:w-20`}
          />
          <div className="flex w-20 justify-center">{title}</div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4 text-secondary">
      {/* 6 in a row down to md screen // 3 per row on mobile */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-12 md:space-y-0 lg:space-x-24">
        {/* 1st 3 itmes */}
        {renderSkillGroup(skills1)}
        {/* 2nd next 3 */}
        {renderSkillGroup(skills2)}
      </div>
      {/* 2nd ROW of 6 */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-12 md:space-y-0 lg:space-x-24 ">
        {/*3rd  3 items */}
        <div className="flex space-x-10 md:space-x-12 lg:space-x-24 ">
          {renderSkills(skills3)}
        </div>
        {/* 4th 3 items */}
        {renderSkillGroup(skills4)}
      </div>
    </div>
  );
};
