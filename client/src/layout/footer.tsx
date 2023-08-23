import arrows from "../images/double-angle-up-w.svg";
import githubC from "../images/github-c.png";
import linkedin from "../images/linkedin.png";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="bg-[#122429] text-white dark:bg-[#252c38]">
      <div className="container relative mx-auto px-5 md:pb-10 md:pt-12">
        {/* UP arrows at top of footer */}
        <Link to="hero" className="up-button cursor-pointer">
          <img src={arrows} alt="" className="up-arrow h-16 w-16" />
        </Link>
        {/*  Flex container for all items  */}
        <div className="flex flex-col items-center justify-between space-y-24 md:flex-row md:space-y-0">
          {/*  Copy  */}
          <div className="mt-14">
            <div className="flex  space-x-3 md:-mt-10">
              <div>&copy; 2023 Giorgio Savron</div>
            </div>
          </div>

          {/*  Social  */}
          <div className="!mt-10 flex items-center space-x-8 pb-10">
            <div>
              <a
                href="https://www.linkedin.com/in/giorgio-savron/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedin}
                  alt="Linkedin"
                  className="ficon h-[30px] w-[30px]  "
                />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/gsavr"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={githubC}
                  alt="github"
                  className="ficon h-[30px] w-[30px]  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
