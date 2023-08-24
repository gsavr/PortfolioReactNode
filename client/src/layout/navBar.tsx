import { useEffect, useState } from "react";
import { ToggleTheme } from "../components/toggleTheme";
import { Logo } from "../components/hero/logo";
import { HamburgerButton } from "../components/hero/hamburgerButton";
import { MobileMenu } from "../components/hero/mobileMenu";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { links, resumeLink } from "../assets/links";

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
          <RouterLink to="/" className="hover:border-b hover:border-[#8bd8bd] ">
            Back
          </RouterLink>
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
          <RouterLink
            to="/"
            className="rounded-full bg-[#648990]/50 p-4 text-lg text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-transparent dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-transparent md:hidden"
          >
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
              {...props}
            >
              <path d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z" />
            </svg>
          </RouterLink>
        </>
      )}
    </nav>
  );
};
