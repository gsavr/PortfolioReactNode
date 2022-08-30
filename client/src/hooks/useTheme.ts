import { useEffect } from "react";
import { useDarkMode } from "./useDarkMode";
import { useSafeLocalStorage } from "./useSafeLocalStorage";

export function useTheme() {
  const prefersDarkMode = useDarkMode();
  const [isEnabled, setIsEnabled] = useSafeLocalStorage("dark-mode", undefined);

  const enabled = isEnabled === undefined ? prefersDarkMode : isEnabled;

  useEffect(() => {
    const body = window.document.getElementById("body");
    body?.classList.add("bg-primary");
    body?.classList.add("text-primary");
    if (window === undefined) return;
    const root = window.document.documentElement;
    root.classList.remove(enabled ? "light" : "dark");
    root.classList.add(enabled ? "dark" : "light");
  }, [enabled]);

  return [enabled, setIsEnabled];
}
