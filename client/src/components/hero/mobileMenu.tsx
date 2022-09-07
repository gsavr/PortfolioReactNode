import { useEffect } from "react";
import { Link } from "react-scroll";
import { links, resumeLink } from "./links";

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
    return links.map(({ link, label, target, rel }) => {
      return (
        <Link
          to={link}
          key={label}
          target={target}
          rel={rel}
          onClick={openMobileMenu}
          className={`hover:text-[#4fa285] ${opening} cursor-pointer transition-all duration-200`}
        >
          {label}
        </Link>
      );
    });
  };

  return (
    <>
      {open === "open" && (
        <div id="menu" className={`${opening} mobile-menu`}>
          <>
            <Link
              to="hero"
              onClick={openMobileMenu}
              className={`hover:text-[#4fa285] ${opening} cursor-pointer transition-all duration-200`}
            >
              Home
            </Link>
            {renderLinks()}
            <a
              href={resumeLink.link}
              target="_blank"
              rel="noreferrer"
              className={`hover:text-[#4fa285] ${opening} cursor-pointer transition-all duration-200`}
            >
              Resume
            </a>
          </>
        </div>
      )}
    </>
  );
};
