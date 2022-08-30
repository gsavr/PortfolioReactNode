import { ToggleTheme } from "../toggleTheme";

interface HamburgerButtonProps {
  open: string;
  openMobileMenu: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = (props) => {
  const { open, openMobileMenu } = props;

  return (
    <div className="flex items-center md:hidden">
      <div className="pb-2 pr-5">
        <ToggleTheme />
      </div>
      <button
        id="menu-btn"
        onClick={openMobileMenu}
        type="button"
        className={`${open} hamburger z-40 block focus:outline-none md:hidden`}
      >
        <span className="hamburger-top bg-black dark:bg-white"></span>
        <span className="hamburger-middle bg-black dark:bg-white"></span>
        <span className="hamburger-bottom bg-black dark:bg-white"></span>
      </button>
    </div>
  );
};
