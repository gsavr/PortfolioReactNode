import react from "../images/skills/react.svg";
import ts from "../images/skills/ts.svg";
import js from "../images/skills/js.svg";
import html from "../images/skills/html.svg";
import css from "../images/skills/css.svg";
import node from "../images/skills/node.svg";
import mdb from "../images/skills/mdb.svg";
import tw from "../images/skills/tw.svg";
import red from "../images/skills/red.svg";
import ex from "../images/skills/ex.svg";
import bs from "../images/skills/bs.svg";
import ps from "../images/skills/ps.svg";

export const Skills = () => {
  return (
    <div className="flex flex-col items-center space-y-4 text-secondary">
      {/* 6 in a row down to md screen // 3 per row on mobile */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="flex space-x-8 ">
          {/* 3 itmes */}
          <div className="flex w-1/3 flex-col items-center">
            <img src={react} alt="react_logo" className="h-20 w-20" />
            <div>React</div>
          </div>
          <div className="flex w-1/3 flex-col items-center">
            <img src={ts} alt="typescript_logo" className="h-20 w-20" />
            <div>Typescript</div>
          </div>
          <div className="flex w-1/3 flex-col items-center">
            <img src={js} alt="javascript" className="h-20 w-64" />
            <div>Javascript</div>
          </div>
        </div>
        {/* next 3 */}
        <div className="flex space-x-8 ">
          <div className="flex w-1/3 flex-col items-center">
            <img src={html} alt="html" className="h-20 w-20" />
            <div>HTML</div>
          </div>
          <div className="flex w-1/3 flex-col items-center">
            <img src={css} alt="css" className="h-20 w-20" />
            <div>CSS</div>
          </div>
          <div className="flex w-1/3 flex-col items-center">
            <img src={node} alt="node.js" className="h-20 w-64" />
            <div>Node.js</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 ">
        {/* 3 items */}
        <div className="flex space-x-8 ">
          <div className="flex w-1/3 flex-col items-center">
            <img src={mdb} alt="mongodb" className="h-20 w-20" />
            <div>MongoDB</div>
          </div>
          <div className="flex w-1/3 flex-col items-center">
            <img src={tw} alt="TailwindCSS" className="h-20 w-20" />
            <div>TailwindCSS</div>
          </div>
          <div className="flex w-1/3 flex-col items-center">
            <img src={red} alt="Redux" className="h-20 w-64" />
            <div>Redux</div>
          </div>
        </div>
        {/* 3 items */}
        <div className="flex space-x-8 ">
          <div className="flex w-1/3 flex-col items-center">
            <img
              src={ex}
              alt="express"
              className="h-20 w-20 dark:rounded-full dark:bg-slate-300 dark:p-1"
            />
            <div>Express</div>
          </div>
          <div className="flex w-1/3 flex-col items-center">
            <img src={bs} alt="Bootstrap" className="h-20 w-20" />
            <div>Bootstrap</div>
          </div>
          <div className="flex w-1/3 flex-col items-center">
            <img src={ps} alt="Photoshop" className="h-20 w-64" />
            <div>Photoshop</div>
          </div>
        </div>
      </div>
    </div>
  );
};
