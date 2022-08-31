import photo from "../images/me.jpg";
import { Skills } from "./skills";

interface AboutProps {
  openFromLeft: string;
  openFromRight: string;
  openingSpace: string;
}

export const About: React.FC<AboutProps> = (props) => {
  const { openFromLeft, openFromRight, openingSpace } = props;

  return (
    <div id="about" className="overflow-x-hidden">
      {/*  About Me Container  */}
      <h1 className={`${openingSpace}`}>About me</h1>
      <div className="container mx-auto flex flex-col items-center px-6 pb-6 md:flex-row md:space-x-16">
        {/*  Image  */}
        <div
          className={`md:w-1/4 ${openFromLeft} w-2/3 rounded-full transition-all duration-1000`}
        >
          <img
            className="mb-10 rounded-full shadow-2xl transition-all duration-1000 md:w-fit"
            src={photo}
            alt="Giorgio"
          />
        </div>

        {/* Who I am  */}
        <div
          className={`flex flex-col items-start md:w-2/3 ${openFromRight} transition-all duration-1500`}
        >
          <div className="flex flex-col space-y-5 text-secondary">
            <h2 className="max-w-md text-xl font-bold uppercase md:text-4xl">
              who i am:
            </h2>
            <p className="text-md md:text-lg">
              Full-Stack Software Engineer specialized in React.js, JavaScript,
              Typescript, HTML/CSS, Tailwind css, Node.js, with an objective to
              develop websites and applications that are client-driven while
              ensuring that they are straightforward and engaging for the end
              user.
            </p>
            <p className="text-md md:text-lg">
              I intend to use my design, development and other skills while
              continuously advancing my skill set through additional programming
              and career development to remain at the forefront of an
              ever-changing technology landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Skills  */}
      <div
        className={`container mx-auto flex flex-col items-center px-6 pb-20  ${openFromLeft} transition-all duration-1500`}
      >
        <div className="flex flex-col space-y-5">
          <h2 className="max-w-md text-xl font-bold uppercase md:text-4xl">
            Skills:
          </h2>
          <Skills />
        </div>

        {/*  Link  */}
        <div className="mt-4 block">
          <a
            href="#projects"
            className="border-accentCyan border-b text-accent"
          >
            See my projects
            <img src="images/icon-arrow.svg" alt="" className="inline pb-2" />
          </a>
        </div>
      </div>
    </div>
  );
};
