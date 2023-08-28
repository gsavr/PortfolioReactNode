import { useTheme } from "../hooks/useTheme";

export const ToggleTheme = () => {
  const [isDark, setIsDark] = useTheme();

  const changeTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div>
      {isDark ? (
        <button
          aria-label="switch to light mode"
          onClick={changeTheme}
          className="rounded-full bg-gray-500 p-3 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-transparent dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-transparent md:p-2.5"
        >
          <svg
            id="theme-toggle-dark-icon"
            className="h-6 w-6 md:h-7 md:w-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        </button>
      ) : (
        <button
          aria-label="switch to dark mode"
          onClick={changeTheme}
          className="rounded-full bg-[#9AF7E8]/70 p-3 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-transparent dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-transparent md:p-2.5"
        >
          {/* old for light-mode-button bg-gray-400 text-gray-500 */}
          <svg
            id="theme-toggle-light-icon"
            className="h-6 w-6 md:h-7 md:w-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};
