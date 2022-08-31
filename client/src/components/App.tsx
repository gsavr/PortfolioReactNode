import { useState, useEffect } from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { Hero } from "./hero/hero";
import { Projects } from "./projects/projects";

export const App: React.FC = () => {
  //for transition effect
  const [openFromLeft, setopenFromLeft] = useState("off-left");
  const [openFromRight, setopenFromRight] = useState("off-right");
  const [openingSpace, setOpeningSpacec] = useState("closed-space");

  useEffect(() => {
    setTimeout(() => {
      setopenFromRight("opening-right");
      setopenFromLeft("opening-left");
      setOpeningSpacec("opening-space");
    }, 100);
  }, []);

  return (
    <div>
      <Hero openFromLeft={openFromLeft} openFromRight={openFromRight} />
      <About
        openFromLeft={openFromLeft}
        openFromRight={openFromRight}
        openingSpace={openingSpace}
      />
      <Projects
        openFromLeft={openFromLeft}
        openFromRight={openFromRight}
        openingSpace={openingSpace}
      />
      <Contact openingSpace={openingSpace} />
    </div>
  );
};
