import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { links } from "./links";

interface MobileMenuProps {
  open: string;
  openMobileMenu: () => void;
  opening: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = (props) => {
  const { open, openMobileMenu, opening } = props;

  //do not allow scrolling when mobile menu is open
  useEffect(() => {
    if (open === "open") {
      document.body.style.overflow = "hidden";
    } else if (open === "closed") {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  //map out links form links var
  const renderLinks = () => {
    return links.map(({ link, label }) => {
      return (
        <a
          href={link}
          key={label}
          onClick={openMobileMenu}
          className={`hover:text-pink-500 ${opening} transition-all duration-200`}
        >
          {label}
        </a>
      );
    });
  };

  return (
    <>
      {open === "open" && (
        <div id="menu" className={`${opening} mobile-menu`}>
          <>
            <a
              href="#home"
              onClick={openMobileMenu}
              className={`hover:text-pink-500 ${opening} transition-all duration-200`}
            >
              Home
            </a>
            {renderLinks()}
          </>
        </div>
      )}
    </>
  );
};
