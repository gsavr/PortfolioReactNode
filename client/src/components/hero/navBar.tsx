import { useState } from "react";
import { ToggleTheme } from "../toggleTheme";
import { Logo } from "./logo";
import { HamburgerButton } from "./hamburgerButton";
import { MobileMenu } from "./mobileMenu";
import { links } from "./links";

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
        <div className="group" key={label}>
          <a href={link} target={target} rel={rel}>
            {label}
          </a>
          <div className="mx-2 transition duration-300 group-hover:border-b group-hover:border-pink-500"></div>
        </div>
      );
    });
  };

  return (
    <nav className="flex items-center justify-between font-bold text-primary transition-all duration-1500">
      {/* Logo  */}
      <Logo />
      {/*  Menu */}
      <div className=" hidden h-10 items-center md:flex md:space-x-8">
        {/* All links */}
        {renderLinks()}
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
