import { useState } from "react";
import { ToggleTheme } from "../toggleTheme";
import { Logo } from "./logo";
import { HamburgerButton } from "./hamburgerButton";
import { MobileMenu } from "./mobileMenu";
import { Link } from "react-scroll";
import { links, resumeLink } from "./links";

export const NavBar: React.FC = () => {
  const [open, setOpen] = useState("closed");
  //for transition effect
  const [opening, setOpening] = useState("closing");

  const openMobileMenu = () => {
    if (open === "closed") {
      setOpen("open");
      setTimeout(() => {
        setOpening("opening");
      }, 100);
    } else if (open === "open") {
      setOpening("closing");
      setTimeout(() => {
        setOpen("closed");
      }, 500);
    }
  };

  //map out links form links var
  const renderLinks = () => {
    return links.map(({ link, label, target, rel }) => {
      return (
        <div className="group cursor-pointer" key={label}>
          <Link
            to={link}
            duration={800}
            smooth={true}
            target={target}
            rel={rel}
          >
            {label}
          </Link>
          <div className="mx-2 transition duration-300 group-hover:border-b group-hover:border-[#8bd8bd]"></div>
        </div>
      );
    });
  };

  return (
    <nav className="flex items-center justify-between rounded-full bg-[#E0ECEF]/40 font-bold text-black transition-all duration-1500 dark:bg-[#63686A]/80 dark:text-primary">
      {/* Logo  */}
      <Logo />
      {/*  Menu */}
      <div className=" hidden h-10 items-center md:flex md:space-x-8">
        {/* All links */}
        {renderLinks()}
        <div className="group">
          <a
            href={resumeLink.link}
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            Resume
          </a>
          <div className="mx-2 transition duration-300 group-hover:border-b group-hover:border-[#8bd8bd]"></div>
        </div>
        {/* Position for toggle theme buttton in mobile is located in hamburger button */}
        <div className="group">
          <ToggleTheme />
        </div>
      </div>

      <HamburgerButton open={open} openMobileMenu={openMobileMenu} />
      <MobileMenu
        open={open}
        openMobileMenu={openMobileMenu}
        opening={opening}
      />
    </nav>
  );
};
