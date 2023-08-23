import { ToggleTheme } from "../toggleTheme";

interface HamburgerButtonProps {
  open: string | undefined;
  openMobileMenu: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = (props) => {
  const { open, openMobileMenu } = props;

  return (
    <div className="flex items-center md:hidden">
      <button
        id="menu-btn"
        onClick={openMobileMenu}
        type="button"
        className={`${open} hamburger z-[60] block focus:outline-none md:hidden`}
      >
        <span className="hamburger-top bg-black dark:bg-white"></span>
        <span className="hamburger-middle bg-black dark:bg-white"></span>
        <span className="hamburger-bottom bg-black dark:bg-white"></span>
      </button>
      {/* mobile dark theme toggle */}
      <div className="pt-0 pr-0">
        <ToggleTheme />
      </div>
    </div>
  );
};
