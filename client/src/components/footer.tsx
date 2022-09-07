import arrows from "../images/double-angle-up-w.svg";
import githubC from "../images/github-c.png";
import linkedin from "../images/linkedin.png";

export const Footer = () => {
  return (
    <footer className="bg-[#252c38] text-white">
      <div className="container relative mx-auto px-5 pb-10 pt-12">
        <a href="#home" className="up-button">
          <img src={arrows} alt="" className="up-arrow h-16 w-16" />
        </a>
        {/*  Flex container for all items  */}
        <div className="flex flex-col items-center justify-between space-y-24 md:flex-row md:space-y-0">
          {/*  Email & Phone  */}
          <div className="mt-14">
            <div className="flex  space-x-3 md:-mt-10">
              <div>&copy; Giorgio Savron, 2022</div>
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
