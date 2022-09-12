import { About } from "./about";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { Hero } from "./hero/hero";
import { Projects } from "./projects/projects";
import { StickyMenu } from "./sticky-menu";

export const App: React.FC = () => {
  return (
    <div>
      <Hero />
      <StickyMenu />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
