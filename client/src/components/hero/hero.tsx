import { NavBar } from "./navBar";

interface HeroProps {
  openFromLeft: string;
  openFromRight: string;
}

export const Hero: React.FC<HeroProps> = (props) => {
  const { openFromLeft, openFromRight } = props;

  return (
    <div id="hero" className="hero gradient-bg overflow-x-hidden">
      <div className="container mx-auto min-h-screen max-w-6xl px-6 py-12">
        <NavBar />

        <div className="group flex flex-col lg:flex-row lg:justify-between">
          <div className={`hero-box ${openFromLeft}`}>
            Hello, I'm{" "}
            <p className="text-4xl text-primary transition-all duration-1000 md:text-6xl lg:group-hover:text-[4rem] ">
              Giorgio Savron
            </p>
            <p>Full Stack Developer</p>
          </div>

          <a href="#about" className={`hero-enter-button ${openFromRight}`}>
            <p>Enter</p>
          </a>
        </div>
      </div>
    </div>
  );
};
