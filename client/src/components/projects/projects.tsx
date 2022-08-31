import { projects1, projects2 } from "./project-list";

interface ProjectsProps {
  openFromLeft: string;
  openFromRight: string;
  openingSpace: string;
}

export const Projects: React.FC<ProjectsProps> = (props) => {
  const { openFromLeft, openFromRight, openingSpace } = props;

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
        <a
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
          <div className="absolute bottom-4 max-w-full px-4 duration-200 group-hover:scale-110 group-hover:text-black lg:bottom-8 lg:px-10">
            <h5 className="uppercase">{title}</h5>
            <p className="block text-sm transition-all duration-100 group-hover:opacity-100 md:hidden md:opacity-0 md:group-hover:block">
              {desc}
            </p>
          </div>
        </a>
      );
    });
  };

  return (
    <div id="projects">
      <div className="container mx-auto mt-10 mb-0 max-w-6xl px-6 pb-10 md:px-8">
        {/*  Projects header  */}
        <div className="mb-20 flex justify-center">
          <h1
            className={`text-center text-4xl uppercase md:text-6xl ${openingSpace} transition-all duration-700`}
          >
            projects
          </h1>
        </div>

        {/*  Items Container row 1  */}
        <div
          className={`item-container ${openFromLeft} transition-all duration-1000`}
        >
          {renderProjectRow(projects1)}
        </div>
        {/*  Items Container row 2  */}
        <div
          className={`item-container mt-10 ${openFromRight} transition-all duration-1000`}
        >
          {renderProjectRow(projects2)}
        </div>
      </div>
    </div>
  );
};
