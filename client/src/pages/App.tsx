import { About } from "../layout/about";
import { Contact } from "../layout/contact";
import { Footer } from "../layout/footer";
import { Hero } from "../layout/hero";
import { Projects } from "../layout/projects";
import { StickyMenu } from "../components/sticky-menu";

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
