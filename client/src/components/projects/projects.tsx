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
          <div className="project-image-text ">
            <h5 className="uppercase">{title}</h5>
            <p className="project-image-description ">{desc}</p>
          </div>
        </a>
      );
    });
  };

  return (
    <div id="projects" className="overflow-x-hidden">
      <div className="container mx-auto mt-10 mb-0 max-w-6xl px-6 pb-10 md:px-8">
        {/*  Projects header  */}
        <div className="mb-20 flex justify-center">
          <h1 className={`${openingSpace}`}>projects</h1>
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
