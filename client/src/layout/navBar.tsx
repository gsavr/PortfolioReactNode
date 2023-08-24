import { useEffect, useState } from "react";
import { ToggleTheme } from "../components/toggleTheme";
import { Logo } from "../components/hero/logo";
import { HamburgerButton } from "../components/hero/hamburgerButton";
import { MobileMenu } from "../components/hero/mobileMenu";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { links, resumeLink } from "../assets/links";
import {
  IconArrowGoBackFill,
  IconBxDownload,
  IconFileDownload,
} from "../components/svg-icons";
import resume from "../assets/resume.pdf";

interface NavBarProps {
  open?: string | undefined;
  setOpen?: any;
}

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { open, setOpen } = props;
  //for transition effect
  const [opening, setOpening] = useState("closing");
  const [atHome, setAtHome] = useState(true);

  //see which page to render links conditionally
  const p = useLocation();
  //console.log(p.pathname);

  useEffect(() => {
    if (p.pathname === "/") setAtHome(true);
    else if (p.pathname === "/resume") setAtHome(false);
  }, [p.pathname]);

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
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      {/*  Menu */}
      <div className=" hidden h-10 items-center md:flex md:space-x-8">
        {/* All links -- conditionally depending on page */}
        {atHome ? (
          <>
            {renderLinks()}
            <div className="group">
              <RouterLink
                to={resumeLink.link}
                // target="_blank"
                // rel="noreferrer"
                className="group"
              >
                Resume
              </RouterLink>
              <div className="mx-2 transition duration-300 group-hover:border-b group-hover:border-[#8bd8bd]"></div>
            </div>
          </>
        ) : (
          /* Back button and DL on PDF page on desktop */ <>
            <RouterLink
              to="/"
              className="flex items-center justify-center gap-1 hover:border-b hover:border-[#8bd8bd] "
            >
              Return <IconArrowGoBackFill className="text-2xl" />
            </RouterLink>
            <a
              href={resume}
              download="Giorgio Savron Resume"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1 hover:border-b hover:border-[#8bd8bd]"
            >
              Download <IconBxDownload className="text-2xl" />
            </a>
          </>
        )}
        {/* Position for toggle theme buttton in mobile is located in hamburger button */}
        <div className="group">
          <ToggleTheme />
        </div>
      </div>

      {atHome ? (
        <>
          <HamburgerButton open={open} openMobileMenu={openMobileMenu} />
          <MobileMenu
            open={open}
            openMobileMenu={openMobileMenu}
            opening={opening}
          />
        </>
      ) : (
        <>
          {/* Back button and DL button on PDF page mobile */}
          <a
            href={resume}
            download="Giorgio Savron Resume"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1 hover:border-b hover:border-[#8bd8bd] md:hidden"
          >
            <IconFileDownload className="text-4xl" />
          </a>
          <RouterLink
            to="/"
            className="rounded-full bg-[#648990]/50 p-3 text-lg text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-transparent dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-transparent md:hidden"
          >
            <IconArrowGoBackFill className="text-2xl" />
          </RouterLink>
        </>
      )}
    </nav>
  );
};
